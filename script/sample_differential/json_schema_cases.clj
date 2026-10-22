;; JSON Schema differential, part 1: for every template type, write its JSON Schema
;; and a set of instances -- generated ones, and random mutations of them -- each
;; with whether this library's Malli schema accepts it, for compare_ajv.cjs.
;;
;;   clojure -M:generators script/sample_differential/json_schema_cases.clj TEMPLATES_DIR OUT_DIR
;;
;; OUT_DIR gets <id>.schema.json per type and cases.json. The seed is fixed.
(require '[cheshire.core :as json] '[clojure.java.io :as io] '[clojure.string :as str] '[malli.core :as m]
         '[com.trustblocks.concerto.generator :as g] '[com.trustblocks.concerto.json-schema :as cjs] '[com.trustblocks.concerto.malli :as cm]
         '[com.trustblocks.concerto.parser :as parser] '[com.trustblocks.concerto.metamodel :as mm] '[com.trustblocks.concerto.instance :as inst])
(def rng (java.util.Random. 424242))
(defn rnd [n] (.nextInt rng n))
(defn update-in* [x p f & args] (if (empty? p) (apply f x args) (apply update-in x p f args)))
(defn paths [x] (letfn [(walk [x p] (cond (map? x) (cons p (mapcat (fn [[k v]] (walk v (conj p k))) x))
                                          (vector? x) (cons p (mapcat (fn [i] (walk (nth x i) (conj p i))) (range (count x)))) :else nil))] (vec (walk x []))))
(defn wrong [v] (cond (string? v) (case (rnd 3) 0 5 1 true 2 {}) (number? v) (case (rnd 2) 0 "x" 1 true) (boolean? v) (case (rnd 2) 0 "yes" 1 1) (map? v) "x" (vector? v) "x" :else "x"))
(defn mutate [x]
  (let [ps (paths x) p (nth ps (rnd (count ps))) node (get-in x p x)]
    (if (map? node)
      (let [ks (vec (keys node))]
        (case (rnd 5)
          0 (if (seq ks) (update-in* x p dissoc (nth ks (rnd (count ks)))) x)
          1 (if (seq ks) (let [k (nth ks (rnd (count ks)))] (assoc-in x (conj p k) (wrong (get node k)))) x)
          2 (assoc-in x (conj p "bogus") 1)
          3 (if (seq ks) (let [k (nth ks (rnd (count ks)))] (assoc-in x (conj p k) nil)) x)
          4 (if (seq ks) (let [k (nth ks (rnd (count ks)))] (if (string? (get node k)) (assoc-in x (conj p k) "") x)) x)))
      x)))
(def root (io/file (first *command-line-args*)))
(def out (io/file (second *command-line-args*)))
(.mkdirs out)
(def cases (atom []))
(doseq [d (sort (.listFiles root)) :when (.isDirectory d)
        :let [models (->> (.listFiles (io/file d "model")) (filter #(str/ends-with? (.getName %) ".cto")) sort)] :when (seq models)
        f ["sample.json" "request.json"] :let [in (io/file d f)] :when (.exists in)]
  (let [fqn (get (json/parse-string (slurp in)) "$class")
        reg (mm/registry (mapv #(parser/parse-string (slurp %)) models))
        v   "5.2"
        s   (cm/->schema reg fqn :concerto-version v)
        id  (str (.getName d) "__" (str/replace f ".json" ""))]
    (spit (io/file out (str id ".schema.json")) (json/generate-string (cjs/json-schema reg fqn :concerto-version v)))
    (doseq [x (g/sample reg fqn 3 :seed 5 :concerto-version v)
            [kind inst] (cons ["valid" x] (for [_ (range 8)] ["mutant" (mutate x)]))]
      (swap! cases conj {:schema id :kind kind :instance inst :ours (m/validate s (inst/json->edn inst))}))))
(spit (io/file out "cases.json") (json/generate-string @cases))
(println (count @cases) "cases;" (count (filter :ours @cases)) "valid by the Malli schema")
(shutdown-agents)
