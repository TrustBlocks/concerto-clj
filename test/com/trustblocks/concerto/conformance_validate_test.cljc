(ns com.trustblocks.concerto.conformance-validate-test
  "The validate/ suite of accordproject/concerto-conformance, run as written.

  Unlike conformance-test, which checks hand-picked fixtures against metamodel
  JSON, this reads the suite's own `.feature` files and runs every scenario:
  parse the `.cto` with the Clojure parser, compile a schema for the instance's
  `$class`, validate. Refreshing test-resources/conformance-validate/ from
  upstream therefore refreshes the tests. See the README there for the commit.

  Each scenario is run at :concerto-version 4 and 5. None of them separates the
  two, which is itself worth knowing: the suite does not exercise DateTime
  strictness or scalar map keys."
  (:require [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.gherkin :as gherkin]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.parser :as p]
            [malli.core :as m]))

(def ^:private features
  ["inheritance" "maps" "primitives" "relationships" "structure" "validate"])

(def ^:private when-re #"^I validate \"([^\"]+)\" with models \"([^\"]+)\"")

(defn- ->scenario
  "A parsed scenario as {:name :instance :model :expect}. `:expect` is :valid for
  `the validation should succeed` and :invalid for any of the failure steps."
  [{:keys [name steps]}]
  (let [[_ instance model] (some #(re-find when-re (:text %)) steps)
        texts              (map :text steps)]
    {:name     name
     :instance instance
     :model    model
     :expect   (cond
                 (some #(str/starts-with? % "the validation should succeed") texts) :valid
                 (some #(or (str/starts-with? % "the validation should fail")
                            (str/starts-with? % "an error")) texts) :invalid)}))

(def ^:private scenarios
  (->> features
       (mapcat #(gherkin/scenarios (fx/read-text (str "conformance-validate/features/" % ".feature"))))
       (map ->scenario)
       (filter :instance)))

(defn- verdict
  "What this library says: :valid, :invalid, or :refused when it will not even
  compile a schema (an instance whose $class the model does not declare)."
  [{:keys [instance model]} version]
  (let [data (fx/read-resource (str "conformance-validate/" (str/replace instance #"^validate/" "")))
        reg  (mm/registry [(p/parse-string
                            (fx/read-text (str "conformance-validate/"
                                               (str/replace model #"^validate/" ""))))])]
    (try
      (if (m/validate (cm/->schema reg (get data "$class") :concerto-version version)
                      (inst/json->edn data))
        :valid :invalid)
      (catch #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo) _ :refused))))

(deftest scenario-count
  (testing "the parse found the suite, Examples included -- a parse that quietly
           found nothing would pass every other test here"
    (is (<= 42 (count scenarios)))
    (is (every? :expect scenarios))))

(deftest validate-suite
  (doseq [version [4 5]
          sc      scenarios]
    (testing (str "concerto " version ": " (:name sc))
      (let [got (verdict sc version)]
        (case (:expect sc)
          :valid   (is (= :valid got))
          ;; Declining to compile counts as rejecting, but only for the
          ;; scenario about an undeclared $class.
          :invalid (is (if (= :refused got)
                         (= "Non-existent $class type should fail" (:name sc))
                         (= :invalid got))))))))
