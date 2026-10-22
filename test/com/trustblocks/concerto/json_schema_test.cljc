(ns com.trustblocks.concerto.json-schema-test
  "A Concerto model as JSON Schema, against the two models checked in as JSON, so
  it needs neither the CTO parser nor Node. Where the JSON Schema and the Malli
  validator were compared on thousands of instances, see
  script/sample_differential/."
  (:require [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [clojure.walk :as walk]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.json-schema :as cjs]
            [com.trustblocks.concerto.metamodel :as mm]))

(defn- definition [schema fqn] (get-in schema ["definitions" fqn]))

(deftest the-schema-describes-the-model
  (let [reg    (fx/registry "promissory-note")
        schema (cjs/json-schema reg fx/note-fqn)
        note   (definition schema fx/note-fqn)]
    (is (= "http://json-schema.org/draft-07/schema#" (get schema "$schema")))
    (testing "the root requires its $class, which Malli draws from the model"
      (is (some #(= ["$class"] (get % "required")) (get schema "allOf"))))

    (testing "the type is an object that is closed, as Concerto's are"
      (is (= "object" (get note "type")))
      (is (false? (get note "additionalProperties")))
      (is (seq (get note "required"))))

    (testing "what it refers to travels with it"
      (is (some? (definition schema "org.accordproject.money@0.3.0.MonetaryAmount")))
      (is (str/includes? (pr-str note) "#/definitions/org.accordproject.money@0.3.0.MonetaryAmount")))

    (testing "an integer is an integer and an enum is its names"
      (is (= "integer" (get-in note ["properties" "defaultDays" "type"])))
      (let [amount (definition schema "org.accordproject.money@0.3.0.MonetaryAmount")
            codes  (some #(get % "enum") (tree-seq coll? seq (get-in amount ["properties" "currencyCode"])))]
        (is (some #{"USD"} codes))))))

(deftest a-datetime-is-a-date-time-string-with-its-pattern
  (let [reg   (fx/registry "promissory-note")
        text  (pr-str (cjs/json-schema reg fx/note-fqn))]
    (is (str/includes? text "\"format\" \"date-time\""))
    (testing "and the pattern, because `format` is only enforced where a plugin is
             installed to enforce it"
      (is (str/includes? text "\"pattern\" \"^(?:")))
    (testing "no reference is left dangling"
      (let [schema (cjs/json-schema reg fx/note-fqn)
            refs   (keep #(when (and (map? %) (get % "$ref")) (get % "$ref"))
                         (tree-seq coll? seq schema))]
        (is (seq refs))
        (is (every? #(contains? (get schema "definitions")
                                (str/replace % "#/definitions/" ""))
                    refs))))))

(deftest it-is-plain-json
  (testing "no keywords or compiled patterns for a JSON library to choke on"
    (let [schema (cjs/json-schema (fx/registry "promissory-note") fx/note-fqn)
          bad    (atom [])]
      (walk/postwalk (fn [x]
                       (when (or (keyword? x)
                                 #?(:clj (instance? java.util.regex.Pattern x)
                                    :cljs (regexp? x)))
                         (swap! bad conj x))
                       x)
                     schema)
      (is (empty? @bad)))))

(deftest the-version-is-a-parameter
  (let [reg (fx/registry "promissory-note")
        at  (fn [v] (pr-str (cjs/json-schema reg fx/note-fqn :concerto-version v)))]
    (testing "5.2's DateTime is a different pattern from 4's"
      (is (not= (at 4) (at "5.2")))
      (is (= (at 4) (at 5)) "5.0 is the same as 4"))))

(deftest a-model-with-nothing-nested-is-the-object-itself
  (let [schema (cjs/json-schema (fx/registry "acceptance-of-delivery") fx/acceptance-fqn)]
    (is (= "object" (get schema "type")))
    (is (false? (get schema "additionalProperties")))
    (is (nil? (get schema "definitions")) "there is nothing to refer to")))
