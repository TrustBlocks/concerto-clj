(ns com.trustblocks.concerto.generator
  "Sample Concerto instances, generated from the model -- the counterpart of
  `concerto generate`, and of property-based testing for a model.

  Every instance generated validates against the schema `malli/->schema` compiles
  for the same type, in the same `:concerto-version`. That is the point, and it is
  tested: a generator that drifts from the validator would produce samples nobody
  can use.

  Needs `org.clojure/test.check` on the classpath. A String with a `regex`
  validator is generated from the pattern, which also needs
  `com.gfredericks/test.chuck`; it covers character classes, quantifiers and
  groups, and not inline flags, lookahead or `\\p{..}`. Without it, or past it, a
  regex-constrained String fails to generate with an error saying so. Under
  babashka test.chuck is not available."
  (:require [clojure.walk :as walk]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [malli.generator :as mg]))

(defn- schema [reg fqn {:keys [concerto-version closed optional]}]
  (cm/->schema reg fqn
               :generators (if optional {:optional optional} true)
               :concerto-version (or concerto-version 4)
               :closed (if (nil? closed) true closed)))

(defn- generator-opts
  "Malli's generator resolves the schemas named in its hints through its own
  options, not through the schema's registry, so it is given ours."
  [m]
  (assoc m :registry cm/registry*))

(defn- drop-nils
  "A null optional property means what a missing one does, and the schema allows
  both, so a generator draws both; a sample reads better without the nulls."
  [x]
  (walk/postwalk (fn [y] (if (map? y) (into (empty y) (remove (comp nil? val)) y) y)) x))

(defn generator
  "A test.check generator of instances of `fqn`, as neutral EDN -- keyword keys, as
  `instance/json->edn` writes them -- for use in `clojure.test.check.properties`."
  [reg fqn & {:as opts}]
  (mg/generator (schema reg fqn opts) (generator-opts {})))

(defn generate
  "One valid instance of `fqn`, as Concerto JSON (string keys) unless `:json false`.

  `:seed` makes it repeatable; `:size` (default 10) is how large a value may be --
  how long a string, how many array elements. `:optional` is `:always`, `:never` or
  (the default) `:random`: whether optional properties are drawn present or left out.
  `:concerto-version` and `:closed` are those of `malli/->schema`."
  [reg fqn & {:keys [seed size json] :or {size 10 json true} :as opts}]
  (let [edn (drop-nils (mg/generate (schema reg fqn opts) (generator-opts (cond-> {:size size} seed (assoc :seed seed)))))]
    (if json (inst/edn->json edn) edn)))

(defn sample
  "`n` valid instances of `fqn`; options as `generate`. Sizes grow across the
  sample, so it holds both small instances and larger ones."
  [reg fqn n & {:keys [seed json] :or {json true} :as opts}]
  (let [edn (drop-nils (mg/sample (schema reg fqn opts) (generator-opts (cond-> {:size n} seed (assoc :seed seed)))))]
    (if json (mapv inst/edn->json edn) (vec edn))))
