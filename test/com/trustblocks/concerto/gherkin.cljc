(ns com.trustblocks.concerto.gherkin
  "Just enough Gherkin to read concerto-conformance's `.feature` files: tags,
  scenarios and scenario outlines, steps with their data tables. Test support,
  not a general parser -- it handles what those files use and nothing else."
  (:require [clojure.string :as str]))

(defn- cells [line]
  (mapv str/trim (str/split (str/replace line #"^\||\|$" "") #"\|")))

(defn- rows->maps [rows]
  (let [[header & body] rows]
    (mapv #(zipmap header %) body)))

(defn parse-feature
  "Feature text -> [{:name :tags :steps :examples}]. A step is
  {:text \"I load the following models:\" :table [{\"model_file\" ...}]}; the
  keyword (Given/When/Then/And) is dropped, because the suites' step texts are
  unambiguous without it. `:examples` is a vector of maps, present only on an
  outline."
  [text]
  (let [flush (fn [cur out] (if cur (conj out cur) out))]
    (loop [ls (map str/trim (str/split-lines text)), tags [], cur nil, out []]
      (if-let [l (first ls)]
        (cond
          (str/starts-with? l "@")
          (recur (rest ls) (into tags (str/split l #"\s+")) cur out)

          (str/starts-with? l "Scenario")
          (recur (rest ls) []
                 {:name (str/replace l #"^Scenario( Outline)?:\s*" "") :tags tags :steps []}
                 (flush cur out))

          (and cur (re-find #"^(Given|When|Then|And|But) " l))
          (recur (rest ls) tags
                 (update cur :steps conj {:text (str/replace l #"^(Given|When|Then|And|But) " "")})
                 out)

          (and cur (= l "Examples:"))
          (recur (rest ls) tags (assoc cur :example-rows []) out)

          (and cur (str/starts-with? l "|"))
          (recur (rest ls) tags
                 (if (:example-rows cur)
                   (update cur :example-rows conj (cells l))
                   (update-in cur [:steps (dec (count (:steps cur))) :rows] (fnil conj []) (cells l)))
                 out)

          :else (recur (rest ls) tags cur out))
        (->> (flush cur out)
             (mapv (fn [sc]
                     (-> sc
                         (update :steps (partial mapv #(cond-> % (:rows %) (-> (assoc :table (rows->maps (:rows %))) (dissoc :rows)))))
                         (cond-> (:example-rows sc) (assoc :examples (rows->maps (:example-rows sc))))
                         (dissoc :example-rows)))))))))

(defn expand-outline
  "An outline as one scenario per Examples row, `<column>` substituted into every
  step's text and table cells. A plain scenario comes back as itself."
  [{:keys [examples] :as sc}]
  (if (seq examples)
    (for [row examples
          :let [sub (fn [s] (reduce (fn [acc [k v]] (str/replace acc (str "<" k ">") v)) s row))]]
      (-> sc
          (dissoc :examples)
          (update :name str " [" (str/join "," (vals row)) "]")
          (update :steps (partial mapv (fn [st]
                                         (cond-> (update st :text sub)
                                           (:table st) (update :table (partial mapv #(update-vals % sub)))))))))
    [sc]))

(defn scenarios
  "Every scenario of a feature, outlines expanded."
  [text]
  (mapcat expand-outline (parse-feature text)))
