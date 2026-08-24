(ns com.trustblocks.concerto.malli-test
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [com.trustblocks.concerto.metamodel :as mm]
            [malli.core :as m]
            [malli.error :as me]))

(defn- schema-keys [form] (mapv first (drop 1 form)))

(deftest validates-real-samples
  (doseq [[t fqn] [["acceptance-of-delivery" fx/acceptance-fqn]
                   ["promissory-note"        fx/note-fqn]]]
    (testing t
      (let [schema   (cm/->schema (fx/registry t) fqn)
            instance (inst/json->edn (fx/sample t))]
        (is (m/validate schema instance)
            (pr-str (me/humanize (m/explain schema instance))))))))

(deftest rejects-what-concerto-rejects
  (let [schema   (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
        instance (inst/json->edn (fx/sample "promissory-note"))]

    (testing "a string where an integer is declared"
      (is (not (m/validate schema (assoc instance :defaultDays "sixty"))))
      (is (= {:defaultDays ["should be an integer"]}
             (me/humanize (m/explain schema (assoc instance :defaultDays "sixty"))))))

    (testing "Double reports one clear reason, not one per :or branch"
      (is (= {:interestRate ["should be a number"]}
             (me/humanize (m/explain schema (assoc instance :interestRate "high"))))))

    (testing "a missing required property"
      (is (not (m/validate schema (dissoc instance :maker)))))

    (testing "the wrong $class"
      (is (not (m/validate schema (assoc instance :$class fx/acceptance-fqn)))))))

(deftest double-accepts-json-whole-numbers
  (testing "JSON has no int/double distinction, and Concerto's own validator
            accepts 85 for a Double -- :double would be stricter than the spec"
    (let [schema   (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
          instance (inst/json->edn (fx/sample "promissory-note"))]
      (is (m/validate schema (assoc instance :interestRate 4)))
      (is (m/validate schema (assoc instance :interestRate 4.25))))))

(deftest properties-emit-in-declaration-order
  (testing "parents first, then the child's own properties in CTO order.

           A regression guard: accumulating into an array-map silently produces
           an unordered hash-map past eight entries, which made exports of the
           same model differ between runs. This model has seventeen keys."
    (is (= [:$class :$identifier :clauseId :amount :date :maker :interestRate
            :individual :makerAddress :lender :legalEntity :lenderAddress
            :principal :maturityDate :defaultDays :insolvencyDays :jurisdiction]
           (schema-keys (cm/->edn (fx/registry "promissory-note") fx/note-fqn)))))

  (testing "and it is stable across calls"
    (let [reg (fx/registry "promissory-note")]
      (is (= (cm/->edn reg fx/note-fqn) (cm/->edn reg fx/note-fqn))))))

(deftest exported-schema-is-pure-edn
  (doseq [[t fqn] [["acceptance-of-delivery" fx/acceptance-fqn]
                   ["promissory-note"        fx/note-fqn]]]
    (let [reg  (fx/registry t)
          form (cm/->edn reg fqn)]

      (testing (str t " emits no functions or objects")
        (is (not (re-find #"#object|fn__|#function" (pr-str form)))))

      (testing (str t " reads back as EDN")
        (is (= form (edn/read-string (pr-str form)))))

      (testing (str t " recompiles and still validates, given registry*")
        (let [revived (m/schema (edn/read-string (pr-str form)) {:registry cm/registry*})]
          (is (m/validate revived (inst/json->edn (fx/sample t)))))))))

(deftest non-trivial-types-are-named
  (let [form (cm/->edn (fx/registry "promissory-note") fx/note-fqn)
        by-k (into {} (map (juxt first last)) (drop 1 form))]
    (is (= :concerto/date-time (:date by-k)))
    (is (= :concerto/double    (:interestRate by-k)))
    (is (= :string             (:maker by-k)))
    (is (= :int                (:defaultDays by-k)))
    (is (= :boolean            (:individual by-k)))))

(deftest enums-compile-to-enum
  (let [form (cm/->edn (fx/registry "acceptance-of-delivery")
                       "org.accordproject.acceptanceofdelivery@0.1.0.InspectionResponse")
        by-k (into {} (map (juxt first last)) (drop 1 form))]
    (is (= [:enum "PASSED_TESTING" "FAILED_TESTING" "OUTSIDE_INSPECTION_PERIOD"]
           (:status by-k)))))

(deftest class-is-pinned-to-the-leaf-type
  (testing "$class is what makes the flattening lossless, so it is an equality
            check, never inferred structurally"
    (let [form (cm/->edn (fx/registry "promissory-note") fx/note-fqn)]
      (is (= [:$class [:= fx/note-fqn]] (second form))))))

(deftest identifier-is-optional
  (let [form (cm/->edn (fx/registry "promissory-note") fx/note-fqn)]
    (is (= [:$identifier {:optional true} :string] (nth form 2)))))

(deftest key-fn-is-the-adapter-seam
  (testing "a storage adapter supplies its own key transform, including for the
            $ sigil names -- XTDB, for instance, cannot store :$class at all"
    (let [xtdb-ish (fn [nm] (case nm
                              "$class"      :concerto/class
                              "$identifier" :concerto/identifier
                              (keyword (str/replace nm #"([a-z])([A-Z])" "$1-$2"))))
          form     (cm/->edn (fx/registry "promissory-note") fx/note-fqn :key-fn xtdb-ish)
          ks       (set (schema-keys form))]
      (is (contains? ks :concerto/class))
      (is (contains? ks :concerto/identifier))
      (is (contains? ks (keyword "interest-Rate")))
      (is (not (contains? ks :$class))))))

(deftest unknown-class-is-an-error-not-a-nil
  (is (thrown-with-msg? clojure.lang.ExceptionInfo #"Unknown \$class"
                        (cm/->schema (fx/registry "promissory-note") "no.such@1.0.0.Thing"))))

;; ------------------------------------------------------------------ versions

(deftest schema-is-identical-across-metamodel-versions
  (testing "a vetted metamodel bump changes nothing about the compiled schema"
    (with-redefs [mm/supported-metamodel-versions #{"1.0.0" "2.0.0"}]
      (is (= (cm/->edn (fx/registry "promissory-note") fx/note-fqn)
             (cm/->edn (mm/registry (fx/models-at-metamodel-version "promissory-note" "2.0.0"))
                       fx/note-fqn))))))

(deftest unhandled-property-kinds-are-refused
  (testing "an unrecognised property kind used to compile to :any, which accepts
           anything -- so a model this library does not fully understand would
           validate clean and the gap would never surface"
    (let [reg {"x@1.0.0.T"
               {:declaration {:$class     "concerto.metamodel@1.0.0.ConceptDeclaration"
                              :name       "T"
                              :properties [{:$class "concerto.metamodel@1.0.0.QuantumProperty"
                                            :name   "spooky"}]}}}]
      (is (thrown-with-msg? clojure.lang.ExceptionInfo
                            #"Cannot compile property \"spooky\""
                            (cm/->schema reg "x@1.0.0.T"))))))
