(ns com.trustblocks.concerto.fixtures
  "Checked-in metamodel JSON, so the core tests need neither Node nor network.

  These are verbatim `concerto parse` output for two templates from the Accord
  cicero-template-library, locations included -- stripping them is itself under
  test."
  (:require [cheshire.core :as json]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [com.trustblocks.concerto.metamodel :as mm]))

(def models
  "Template -> its model files. Listed explicitly rather than globbed so the
  tests load identically from a jar, a directory, or babashka."
  {"acceptance-of-delivery"
   ["model.json"
    "@models.accordproject.org.accordproject.contract@0.2.0.json"
    "@models.accordproject.org.accordproject.runtime@0.2.0.json"
    "@models.accordproject.org.time@0.3.0.json"]

   "promissory-note"
   ["model.json"
    "@models.accordproject.org.accordproject.contract@0.2.0.json"
    "@models.accordproject.org.accordproject.runtime@0.2.0.json"
    "@models.accordproject.org.money@0.3.0.json"]})

(defn raw
  "One fixture file as parsed JSON with string keys."
  [template file]
  (-> (io/resource (str "fixtures/" template "/" file))
      slurp
      json/parse-string))

(defn model
  "One model file as metamodel EDN, locations stripped."
  [template file]
  (-> (raw template file) mm/json->edn mm/strip-locations))

(defn registry [template]
  (mm/registry (map #(model template %) (models template))))

(defn sample [template]
  (raw template "sample.json"))

(defn models-at-metamodel-version
  "The template's models with every metamodel `$class` retagged to `version`.

  Stands in for Accord shipping a new metamodel: the models are unchanged, only
  the version they are expressed in moves."
  [template version]
  (for [f (models template)]
    (-> (io/resource (str "fixtures/" template "/" f))
        slurp
        (str/replace "concerto.metamodel@1.0.0" (str "concerto.metamodel@" version))
        json/parse-string
        mm/json->edn
        mm/strip-locations)))

(def acceptance-fqn "org.accordproject.acceptanceofdelivery@0.1.0.TemplateModel")
(def note-fqn       "org.accordproject.promissorynote@0.2.0.TemplateModel")
