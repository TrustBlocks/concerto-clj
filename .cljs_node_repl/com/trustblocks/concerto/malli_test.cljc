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

;; A compiled form is either a bare map (nothing nested to reference) or
;; [:schema {:registry {fqn map-schema ...}} root]. These reach the map for one
;; declaration either way.

(defn- map-for [form fqn]
  (if (= :schema (first form))
    (get (:registry (second form)) fqn)
    form))

(defn- entries     [map-form] (filterv vector? (drop 1 map-form)))
(defn- schema-keys [map-form] (mapv first (entries map-form)))
(defn- by-key      [map-form] (into {} (map (juxt first last)) (entries map-form)))

(defn- root-of [form] (if (= :schema (first form)) (nth form 2) form))

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
        instance (inst/json->edn (fx/sample "promissory-note"))
        why      #(me/humanize (m/explain schema %))]

    (testing "a string where an integer is declared"
      (is (= {:defaultDays ["should be an integer"]}
             (why (assoc instance :defaultDays "sixty")))))

    (testing "Double reports one clear reason, not one per :or branch"
      (is (= {:interestRate ["should be a number"]}
             (why (assoc instance :interestRate "high")))))

    (testing "a missing required property"
      (is (not (m/validate schema (dissoc instance :maker)))))

    (testing "the wrong $class"
      (is (not (m/validate schema (assoc instance :$class fx/acceptance-fqn)))))))

(deftest nested-concepts-are-checked
  (testing "`amount` is a MonetaryAmount, not merely a map.

           Each of these is rejected by `concerto validate`, and each was
           accepted while nested concepts compiled to a bare :map."
    (let [schema   (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
          instance (inst/json->edn (fx/sample "promissory-note"))
          money    "org.accordproject.money@0.3.0.MonetaryAmount"
          why      #(me/humanize (m/explain schema (assoc instance :amount %)))]

      (testing "wrong type inside the nested concept"
        (is (= {:amount {:doubleValue ["should be a number"]}}
               (why {:$class money :doubleValue "lots" :currencyCode "USD"}))))

      (testing "missing a required property of the nested concept"
        (is (= {:amount {:doubleValue ["missing required key"]}}
               (why {:$class money :currencyCode "USD"}))))

      (testing "an undeclared property on the nested concept"
        (is (= {:amount {:totalNonsense ["disallowed key"]}}
               (why {:$class money :doubleValue 1 :currencyCode "USD"
                     :totalNonsense true}))))

      (testing "a value outside the nested enum"
        (is (contains? (:amount (why {:$class money :doubleValue 1 :currencyCode "ZZZ"}))
                       :currencyCode)))

      (testing "the nested $class naming a different type"
        (is (not (m/validate schema (assoc instance :amount
                                           {:$class fx/note-fqn}))))))))

(deftest maps-are-closed
  (let [schema   (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
        instance (inst/json->edn (fx/sample "promissory-note"))]

    (testing "Concerto rejects undeclared properties, so this does too"
      (is (= {:notADeclaredField ["disallowed key"]}
             (me/humanize (m/explain schema (assoc instance :notADeclaredField "surprise"))))))

    (testing "closed can be turned off for callers who need it"
      (let [open (cm/->schema (fx/registry "promissory-note") fx/note-fqn :closed false)]
        (is (m/validate open (assoc instance :notADeclaredField "surprise")))))))

(deftest system-properties-follow-concerto
  (testing "$identifier is accepted anywhere -- rental-deposit-with carries one
           on a plain unidentified concept and concerto validate calls it valid"
    (let [form  (cm/->edn (fx/registry "promissory-note") fx/note-fqn)
          money (by-key (map-for form "org.accordproject.money@0.3.0.MonetaryAmount"))]
      (is (contains? money :$identifier))

      (testing "but $timestamp is not, on a declaration that cannot carry one"
        (is (not (contains? money :$timestamp))))))

  (testing "transactions and events do carry $timestamp"
    (let [fqn  "org.accordproject.acceptanceofdelivery@0.1.0.InspectionResponse"
          form (cm/->edn (fx/registry "acceptance-of-delivery") fqn)]
      (is (contains? (by-key (map-for form fqn)) :$timestamp)))))

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
           (schema-keys (map-for (cm/->edn (fx/registry "promissory-note") fx/note-fqn)
                                 fx/note-fqn)))))

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
          (is (m/validate revived (inst/json->edn (fx/sample t))))

          (testing "and still rejects, so the export is not a weaker schema"
            (is (not (m/validate revived (assoc (inst/json->edn (fx/sample t))
                                                :notADeclaredField 1))))))))))

(deftest simple-models-stay-simple
  (testing "nothing nested to reference, so no registry wrapper is emitted"
    (let [form (cm/->edn (fx/registry "acceptance-of-delivery") fx/acceptance-fqn)]
      (is (= :map (first form)))
      (is (= {:closed true} (second form))))))

(deftest nested-models-emit-refs
  (let [form (cm/->edn (fx/registry "promissory-note") fx/note-fqn)]
    (is (= :schema (first form)))
    (is (= [:ref fx/note-fqn] (root-of form)))
    (testing "the referenced declaration travels with the schema"
      (is (contains? (:registry (second form))
                     "org.accordproject.money@0.3.0.MonetaryAmount")))
    (testing "and the property points at it rather than at a bare :map"
      (is (= [:ref "org.accordproject.money@0.3.0.MonetaryAmount"]
             (:amount (by-key (map-for form fx/note-fqn))))))))

(deftest non-trivial-types-are-named
  (let [by-k (by-key (map-for (cm/->edn (fx/registry "promissory-note") fx/note-fqn)
                              fx/note-fqn))]
    (is (= :concerto/date-time (:date by-k)))
    (is (= :concerto/double    (:interestRate by-k)))
    (is (= :string             (:maker by-k)))
    (is (= :int                (:defaultDays by-k)))
    (is (= :boolean            (:individual by-k)))))

(deftest enums-compile-to-enum
  (let [fqn  "org.accordproject.acceptanceofdelivery@0.1.0.InspectionResponse"
        by-k (by-key (map-for (cm/->edn (fx/registry "acceptance-of-delivery") fqn) fqn))]
    (is (= [:enum "PASSED_TESTING" "FAILED_TESTING" "OUTSIDE_INSPECTION_PERIOD"]
           (:status by-k)))))

(deftest class-is-pinned-to-the-leaf-type
  (testing "$class is what makes the flattening lossless, so it is an equality
            check, never inferred structurally"
    (let [form (cm/->edn (fx/registry "promissory-note") fx/note-fqn)]
      (is (= [:$class [:= fx/note-fqn]] (first (entries (map-for form fx/note-fqn))))))))

(deftest key-fn-is-the-adapter-seam
  (testing "a storage adapter supplies its own key transform, including for the
            $ sigil names -- XTDB, for instance, cannot store :$class at all"
    (let [xtdb-ish (fn [nm] (case nm
                              "$class"      :concerto/class
                              "$identifier" :concerto/identifier
                              "$timestamp"  :concerto/timestamp
                              (keyword (str/lower-case
                                        (str/replace nm #"([a-z])([A-Z])" "$1-$2")))))
          form     (cm/->edn (fx/registry "promissory-note") fx/note-fqn :key-fn xtdb-ish)
          ks       (set (schema-keys (map-for form fx/note-fqn)))]
      (is (contains? ks :concerto/class))
      (is (contains? ks :concerto/identifier))
      (is (contains? ks :interest-rate))
      (is (not (contains? ks :$class)))

      (testing "and it reaches nested declarations too"
        (let [money (set (schema-keys
                          (map-for form "org.accordproject.money@0.3.0.MonetaryAmount")))]
          (is (contains? money :double-value))
          (is (contains? money :concerto/class)))))))

(deftest unknown-class-is-an-error-not-a-nil
  (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo) #"Unknown \$class"
                        (cm/->schema (fx/registry "promissory-note") "no.such@1.0.0.Thing"))))

;; ------------------------------------------------------------- polymorphism

(defn- decl [kind nm & {:keys [abstract super props]}]
  (cond-> {:$class     (str "concerto.metamodel@1.0.0." kind)
           :name       nm
           :properties (vec props)}
    abstract (assoc :isAbstract true)
    super    (assoc :superType {:$class "concerto.metamodel@1.0.0.TypeIdentifier"
                                :name   super})))

(defn- prop [kind nm & {:keys [type optional array]}]
  (cond-> {:$class (str "concerto.metamodel@1.0.0." kind) :name nm}
    type     (assoc :type {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name type})
    optional (assoc :isOptional true)
    array    (assoc :isArray true)))

(def ^:private poly
  (mm/registry
   [{:$class       "concerto.metamodel@1.0.0.Model"
     :namespace    "poly@1.0.0"
     :imports      []
     :declarations
     [(decl "ConceptDeclaration" "Animal" :abstract true
            :props [(prop "StringProperty" "name")])
      (decl "ConceptDeclaration" "Dog" :super "Animal"
            :props [(prop "BooleanProperty" "goodBoy")])
      (decl "ConceptDeclaration" "Cat" :super "Animal"
            :props [(prop "IntegerProperty" "lives")])
      (decl "ConceptDeclaration" "Shelter"
            :props [(prop "ObjectProperty" "resident" :type "Animal")])
      (decl "ConceptDeclaration" "Node"
            :props [(prop "ObjectProperty" "child" :type "Node" :optional true)])]}]))

(deftest abstract-types-dispatch-on-class
  (testing "Concerto permits polymorphism, so a property typed as an abstract
           parent must accept any concrete subclass. Validating against the
           parent's own closed schema would reject the subclass's properties --
           the false rejection that closing the maps would otherwise introduce."
    (let [form (cm/->edn poly "poly@1.0.0.Shelter")
          res  (:resident (by-key (map-for form "poly@1.0.0.Shelter")))]
      (is (= [:multi {:dispatch :$class}
              ["poly@1.0.0.Cat" [:ref "poly@1.0.0.Cat"]]
              ["poly@1.0.0.Dog" [:ref "poly@1.0.0.Dog"]]]
             res))))

  (let [schema (cm/->schema poly "poly@1.0.0.Shelter")
        shelter #(hash-map :$class "poly@1.0.0.Shelter" :resident %)]

    (testing "either concrete subclass is accepted"
      (is (m/validate schema (shelter {:$class "poly@1.0.0.Dog" :name "Rex" :goodBoy true})))
      (is (m/validate schema (shelter {:$class "poly@1.0.0.Cat" :name "Tom" :lives 9}))))

    (testing "the inherited property is still required"
      (is (not (m/validate schema (shelter {:$class "poly@1.0.0.Dog" :goodBoy true})))))

    (testing "a subclass's own property is still type-checked"
      (is (not (m/validate schema (shelter {:$class "poly@1.0.0.Dog" :name "Rex" :goodBoy "yes"})))))

    (testing "one subclass's properties are not accepted on another"
      (is (not (m/validate schema (shelter {:$class "poly@1.0.0.Cat" :name "Tom" :goodBoy true})))))

    (testing "and the abstract type itself cannot be instantiated"
      (is (not (m/validate schema (shelter {:$class "poly@1.0.0.Animal" :name "???"})))))))

(deftest self-referential-concepts-terminate
  (testing "a concept referring to itself compiles rather than inlining forever,
           which is why references go through a local registry"
    (let [schema (cm/->schema poly "poly@1.0.0.Node")
          node   "poly@1.0.0.Node"]
      (is (m/validate schema {:$class node}))
      (is (m/validate schema {:$class node :child {:$class node :child {:$class node}}}))
      (is (not (m/validate schema {:$class node :child {:$class node :nope 1}}))))))

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
      (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                            #"Cannot compile property \"spooky\""
                            (cm/->schema reg "x@1.0.0.T"))))))

(deftest unresolved-types-are-refused
  (testing "a property pointing at a type whose model is not loaded cannot be
           validated against anything, so it is named rather than waved through"
    (let [reg {"x@1.0.0.T"
               {:declaration {:$class     "concerto.metamodel@1.0.0.ConceptDeclaration"
                              :name       "T"
                              :properties [{:$class "concerto.metamodel@1.0.0.ObjectProperty"
                                            :name   "thing"
                                            :type   {:$class "concerto.metamodel@1.0.0.TypeIdentifier"
                                                     :name   "Missing"}}]}}}]
      (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                            #"Unresolved type"
                            (cm/->schema reg "x@1.0.0.T"))))))

;; ------------------------------------------------------------------ datetime

(def ^:private datetime-envelope
  "Every case run through `concerto validate`, with the verdict it gave.

  Concerto's DateTime is far looser than ISO-8601 on the date part and strict on
  the time part. Encoding the whole table means any divergence from the
  reference implementation shows up as a named failing case rather than as a
  surprise in production."
  [["2019-01-20T01:00:00.000+01:00"    true]
   ["2019-01-20T01:00:00.123456+01:00" true]
   ["2019-01-20T01:00:00Z"             true]
   ["2019-01-20T01:00:00"              true]
   ["2019-01-20T01:00"                 true]
   ["2019-01-20"                       true]
   ["2019-01"                          true]
   ["2019"                             true]
   ["20190120"                         true]
   ["2019-13-45"                       true]
   ["2019-00-00"                       true]
   ["+2019-01-20"                      true]
   ["2019-01-20T"                      true]
   ["2019-01-20 01:00:00"              true]
   ["2019-01-20T01:00:00.000-05:00"    true]
   ["2019-01-20T25:00:00Z"             false]
   ["2019-01-20T01:99:00Z"             false]
   ["2019-01-20T01:00:99Z"             false]
   ["2019-01-20T23:59:60Z"             false]
   ["2019-13-45T01:00:00Z"             false]
   ["T01:00:00Z"                       false]
   ["now"                              false]
   ["hello"                            false]
   [""                                 false]])

(deftest datetime-matches-concertos-envelope
  (let [schema (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
        sample (inst/json->edn (fx/sample "promissory-note"))]
    (doseq [[value concerto-says] datetime-envelope]
      (testing (str (pr-str value) " -- concerto validate says "
                    (if concerto-says "valid" "invalid"))
        (is (= concerto-says (m/validate schema (assoc sample :date value))))))))

(deftest datetime-is-checked-on-the-wire-form
  (testing "an earlier version accepted any string, so these passed while
           Concerto rejected them"
    (let [schema (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
          sample (inst/json->edn (fx/sample "promissory-note"))]
      (is (= {:date ["should be a date-time"]}
             (me/humanize (m/explain schema (assoc sample :date "hello")))))
      (is (= {:date ["should be a date-time"]}
             (me/humanize (m/explain schema (assoc sample :date "")))))))

  (testing "platform date objects are no longer accepted: they have no
           JavaScript counterpart, so admitting them would make the JVM build
           accept documents a ClojureScript build must reject"
    (let [schema (cm/->schema (fx/registry "promissory-note") fx/note-fqn)
          sample (inst/json->edn (fx/sample "promissory-note"))]
      (is (not (m/validate schema (assoc sample :date #?(:clj  (java.time.Instant/now)
                                                         :cljs (js/Date.)))))))))
