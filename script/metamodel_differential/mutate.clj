;; Differential for :metamodelValidation: mutate real model ASTs at random and record
;; whether this library's metamodel schema accepts each mutant, for
;; compare.cjs to compare with concerto-core's MetaModel.validateMetaModel.
;;
;;   clojure -M script/metamodel_differential/mutate.clj CONFORMANCE_REPO OUT.json [N]
;;   node script/metamodel_differential/compare.cjs CONCERTO_CORE_DIR OUT.json
;;
;; CONFORMANCE_REPO is a checkout of accordproject/concerto-conformance (the model
;; ASTs under semantic/specifications are the bases); CONCERTO_CORE_DIR is a
;; directory whose node_modules holds @accordproject/concerto-core. The seed is
;; fixed, so a run reproduces. README.md of the repo reports what it found.
(require '[cheshire.core :as json] '[clojure.java.io :as io] '[malli.core :as m]
         '[com.trustblocks.concerto.metamodel :as mm] '[com.trustblocks.concerto.model-check :as mc])
(def rng (java.util.Random. 20261022))
(defn rnd [n] (.nextInt rng n))
(def classes ["Model" "ConceptDeclaration" "StringProperty" "ObjectProperty" "EnumDeclaration" "ImportType" "TypeIdentifier" "Decorator" "Range" "MapDeclaration"])
(defn paths
  "Every path to a map or vector node in the JSON, as vectors of keys/indexes."
  [x]
  (letfn [(walk [x p]
            (cond (map? x) (cons p (mapcat (fn [[k v]] (walk v (conj p k))) x))
                  (vector? x) (cons p (mapcat (fn [i] (walk (nth x i) (conj p i))) (range (count x))))
                  :else nil))]
    (vec (walk x []))))
(defn wrong-value [v]
  (cond (string? v) (case (rnd 4) 0 5 1 true 2 {} 3 [])
        (number? v) (case (rnd 3) 0 "x" 1 true 2 [])
        (boolean? v) (case (rnd 3) 0 "yes" 1 1 2 {})
        (map? v) (case (rnd 3) 0 "x" 1 [] 2 5)
        (vector? v) (case (rnd 3) 0 {} 1 "x" 2 5)
        :else "x"))
(defn mutate [ast]
  (let [ps (paths ast) p (nth ps (rnd (count ps))) node (get-in ast p ast)]
    (cond
      (map? node)
      (let [ks (vec (keys node))]
        (case (rnd 6)
          0 (if (seq ks) (let [k (nth ks (rnd (count ks)))] [(str "delete " (pr-str (conj p k))) (if (empty? p) (dissoc ast k) (update-in ast p dissoc k))]) ["noop" ast])
          1 (if (seq ks) (let [k (nth ks (rnd (count ks))) v (get node k)] [(str "wrongtype " (pr-str (conj p k))) (assoc-in ast (conj p k) (wrong-value v))]) ["noop" ast])
          2 [(str "extra " (pr-str p)) (if (empty? p) (assoc ast "bogus" 1) (assoc-in ast (conj p "bogus") 1))]
          3 [(str "swapclass " (pr-str p)) (if (get node "$class") (assoc-in ast (conj p "$class") (str "concerto.metamodel@1.0.0." (nth classes (rnd (count classes))))) ast)]
          4 (if (seq ks) (let [k (nth ks (rnd (count ks)))] [(str "null " (pr-str (conj p k))) (assoc-in ast (conj p k) nil)]) ["noop" ast])
          5 [(str "dropclass " (pr-str p)) (if (empty? p) (dissoc ast "$class") (update-in ast p dissoc "$class"))]))
      :else ["noop" ast])))
(let [[repo out-file n] *command-line-args* dir (io/file repo "semantic/specifications")
      bases (->> (file-seq dir) (filter #(.endsWith (.getName %) ".json")) sort
                 (map #(json/parse-string (slurp %))) (filter #(= "concerto.metamodel@1.0.0.Model" (get % "$class"))))
      validator @@#'mc/metamodel-validator
      out (for [i (range (if n (parse-long n) 6000))
                :let [base (nth bases (rnd (count bases)))
                      [label mut] (mutate base)]]
            {:id i :label label :ast mut
             :ours (m/validate validator (mm/strip-locations (mm/json->edn mut)))})]
  (spit out-file (json/generate-string (vec out)))
  (println (count out) "mutants;" (count (filter :ours out)) "valid by our schema"))
