;; Differential for instance validation: take valid instances of every
;; cicero-template-library type, break each in a random way, and record whether
;; this library's schema still accepts it, for compare.cjs to ask concerto-core.
;;
;;   clojure -M:generators script/instance_differential/mutate.clj TEMPLATES_DIR OUT.json [PER_TYPE] [SEED]
;;   node script/instance_differential/compare.cjs CONCERTO_CORE_DIR TEMPLATES_DIR OUT.json
;;
;; CONCERTO_CORE_DIR is a directory whose node_modules holds
;; @accordproject/concerto-core 5.2.1; this run agrees with "5.2". The seed is
;; fixed by default, so a run reproduces.
(require '[cheshire.core :as json] '[clojure.java.io :as io] '[clojure.string :as str] '[malli.core :as m]
         '[com.trustblocks.concerto.generator :as g] '[com.trustblocks.concerto.malli :as cm]
         '[com.trustblocks.concerto.parser :as parser] '[com.trustblocks.concerto.metamodel :as mm]
         '[com.trustblocks.concerto.instance :as inst])
(def args *command-line-args*)
(def root (io/file (first args)))
(def out (second args))
(def per-type (if-let [x (nth args 2 nil)] (parse-long x) 40))
(def seed (if-let [x (nth args 3 nil)] (parse-long x) 20261022))
(def rng (java.util.Random. seed))
(defn rnd [n] (.nextInt rng n))
(defn pick [xs] (nth xs (rnd (count xs))))

(defn paths
  "Every path to a value in the JSON, as vectors of keys and indexes."
  [x]
  (letfn [(walk [x p]
            (cons p (cond (map? x) (mapcat (fn [[k v]] (walk v (conj p k))) x)
                          (vector? x) (mapcat (fn [i] (walk (nth x i) (conj p i))) (range (count x)))
                          :else nil)))]
    (vec (walk x []))))

(def odd-values
  [nil "" " " "x" "not a number" "2019-01-20" "2019-01-20T10:00:00Z" "2019-13-45T00:00:00Z"
   "resource:org.example.Nope#1" "resource:garbage" "a#b" "NaN" "urn:x" "a?b" "100%" "resource:" "#" " " "\n" "x\n"
   0 1 -1 7 1.5 -0.5 1e10 9007199254740993 123456789012345678901
   true false [] {} [1] ["a"] {"a" 1} {"$class" "org.example.Nope"}])

(defn mutate-at [x p]
  (let [v (get-in x p x)
        set* (fn [nv] (if (empty? p) nv (assoc-in x p nv)))
        parent (when (seq p) (get-in x (pop p)))]
    (case (rnd (if (map? v) 8 6))
      0 ["odd value" (set* (pick odd-values))]
      1 ["null" (set* nil)]
      2 (cond
          (and (seq p) (map? parent)) ["delete" (update-in x (pop p) dissoc (peek p))]
          (and (seq p) (vector? parent)) ["drop element" (update-in x (pop p) (fn [a] (vec (concat (subvec a 0 (peek p)) (subvec a (inc (peek p)))))))]
          :else ["odd value" (set* (pick odd-values))])
      3 (cond (string? v) ["string tweak" (set* (pick [(str v "x") (subs v 0 (quot (count v) 2)) (str/upper-case v) (str " " v) (str v "\n") (apply str (repeat 300 "a"))]))]
              (number? v) ["number tweak" (set* (pick [(inc v) (dec v) (- v) 0 (* v 1000) (+ v 0.5) 1e21 -1e21]))]
              (boolean? v) ["bool tweak" (set* (not v))]
              (vector? v) ["array tweak" (set* (pick [[] (into v v) (vec (rest v)) (conj v nil) (conj v (pick odd-values))]))]
              :else ["odd value" (set* (pick odd-values))])
      4 ["type swap" (set* (cond (string? v) (pick [1 true [v] {"a" v}]) (number? v) (pick [(str v) true [v]])
                                 (boolean? v) (pick ["true" 1 0]) (vector? v) (pick [{} "x" (first v)]) :else "x"))]
      5 ["wrap" (set* (pick [[v] {"v" v} (str v)]))]
      6 ["extra property" (assoc-in x (conj p (pick ["bogus" "$identifier" "id" "$class"])) (pick odd-values))]
      7 (let [ks (vec (keys v))]
          (if (>= (count ks) 2)
            (let [a (pick ks) b (pick (remove #{a} ks))]
              ["swap values" (-> x (assoc-in (conj p a) (get v b)) (assoc-in (conj p b) (get v a)))])
            ["class change" (assoc-in x (conj p "$class") (pick ["org.example.Nope" "" nil 5 "concerto@1.0.0.Concept"]))])))))

(defn mutate [x]
  (loop [x x, n (inc (rnd 2)), labels []]
    (if (zero? n)
      [(str/join "+" labels) x]
      (let [ps (paths x) p (pick ps) [label y] (mutate-at x p)]
        (recur y (dec n) (conj labels (str label " " (pr-str p))))))))

(def cases (atom []))
(doseq [d (sort (.listFiles root)) :when (.isDirectory d)
        :let [models (->> (.listFiles (io/file d "model")) (filter #(str/ends-with? (.getName %) ".cto")) sort)]
        :when (seq models)
        f ["sample.json" "request.json"]
        :let [in (io/file d f)] :when (.exists in)]
  (try
    (let [fqn (get (json/parse-string (slurp in)) "$class")
          reg (mm/registry (mapv #(parser/parse-string (slurp %)) models))
          s   (cm/->schema reg fqn :concerto-version "5.2")
          base (mapv #(json/parse-string (json/generate-string %)) (g/sample reg fqn 8 :seed (rnd 1000) :concerto-version "5.2"))]
      (dotimes [_ per-type]
        (let [[label x] (loop [] (or (try (mutate (pick base)) (catch Exception _ nil)) (recur)))]
          (swap! cases conj {:template (.getName d) :file f :fqn fqn :label label :instance x
                             :ours (boolean (m/validate s (inst/json->edn x)))}))))
    (catch Throwable e (binding [*out* *err*] (println "skip" (.getName d) f (ex-message e))))))
(spit out (json/generate-string @cases))
(println (count @cases) "mutants;" (count (filter :ours @cases)) "accepted by this library")
(shutdown-agents)
