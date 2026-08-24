(ns com.trustblocks.concerto.metamodel-test
  (:require [clojure.edn :as edn]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.metamodel :as mm]))

(deftest json->edn-is-lossless
  (testing "keys become keywords, values are untouched"
    (is (= {:$class "a.b@1.0.0.C" :name "x" :isOptional true}
           (mm/json->edn {"$class" "a.b@1.0.0.C" "name" "x" "isOptional" true}))))

  (testing "$class values keep their dots and @ -- they are data, not structure"
    (is (= "concerto.metamodel@1.0.0.TypeIdentifier"
           (:$class (mm/json->edn {"$class" "concerto.metamodel@1.0.0.TypeIdentifier"})))))

  (testing "camelCase spelling survives, so nothing has to be reversed later"
    (is (contains? (mm/json->edn {"businessDays" 1}) :businessDays))
    (is (contains? (mm/json->edn {"vechileID" 1}) :vechileID))
    (is (contains? (mm/json->edn {"INITIAL_DUE" 1}) :INITIAL_DUE))))

(deftest strip-locations-is-recursive
  (is (= {:a {:b [{:c 1}]}}
         (mm/strip-locations {:a {:location :gone :b [{:c 1 :location :gone}]}})))

  (testing "real fixtures carry locations before stripping and none after"
    (let [raw     (mm/json->edn (fx/raw "promissory-note" "model.json"))
          located (fn [x] (some? (re-find #":location" (pr-str x))))]
      (is (located raw))
      (is (not (located (mm/strip-locations raw)))))))

(deftest namespace-index-resolution
  (let [model {:namespace    "my.ns@1.0.0"
               :declarations [{:name "Local"} {:name "Shadowed"}]
               :imports      [{:$class    "concerto.metamodel@1.0.0.ImportType"
                               :name      "Imported" :namespace "other@1.0.0"}
                              {:$class    "concerto.metamodel@1.0.0.ImportTypes"
                               :types     ["A" "B"] :namespace "bulk@1.0.0"}
                              {:$class    "concerto.metamodel@1.0.0.ImportType"
                               :name      "Shadowed" :namespace "other@1.0.0"}]}
        idx   (mm/namespace-index model)]
    (is (= "my.ns@1.0.0" (idx "Local")))
    (is (= "other@1.0.0" (idx "Imported")))
    (is (= "bulk@1.0.0"  (idx "A")))
    (is (= "bulk@1.0.0"  (idx "B")))
    (testing "a local declaration shadows an import of the same name"
      (is (= "my.ns@1.0.0" (idx "Shadowed"))))
    (is (nil? (idx "Unknown")))))

(deftest qualify-types-fills-namespaces
  (let [ns-for {"Known" "found@1.0.0"}
        ti     (fn [nm] {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name nm})]

    (testing "a resolvable TypeIdentifier gains a namespace"
      (is (= "found@1.0.0" (:namespace (mm/qualify-types ns-for (ti "Known"))))))

    (testing "an unresolvable one is left exactly as it arrived"
      (is (= (ti "Missing") (mm/qualify-types ns-for (ti "Missing")))))

    (testing "an already-qualified one is not overwritten"
      (is (= "already@1.0.0"
             (:namespace (mm/qualify-types ns-for (assoc (ti "Known")
                                                         :namespace "already@1.0.0"))))))

    (testing "nodes that are not TypeIdentifiers are untouched"
      (is (= {:$class "concerto.metamodel@1.0.0.StringProperty" :name "Known"}
             (mm/qualify-types ns-for {:$class "concerto.metamodel@1.0.0.StringProperty"
                                       :name   "Known"}))))

    (testing "it recurses through vectors and nested maps"
      (is (= "found@1.0.0"
             (-> (mm/qualify-types ns-for {:properties [{:type (ti "Known")}]})
                 (get-in [:properties 0 :type :namespace])))))))

(deftest registry-is-pure-data
  (doseq [t (keys fx/models)]
    (let [reg (fx/registry t)]
      (testing (str t " round-trips through EDN")
        (is (= reg (edn/read-string (pr-str reg)))))
      (testing (str t " stores no functions")
        (is (not (re-find #"#object|fn__" (pr-str reg))))))))

(deftest super-chain-crosses-namespaces
  (let [reg (fx/registry "promissory-note")]
    (is (= [fx/note-fqn "org.accordproject.contract@0.2.0.Clause"]
           (mm/super-chain reg fx/note-fqn)))

    (testing "an unknown class has no chain at all"
      (is (= [] (mm/super-chain reg "nope.not@1.0.0.Here"))))))

(deftest super-chain-guards-against-cycles
  (let [ti  (fn [nm] {:$class    "concerto.metamodel@1.0.0.TypeIdentifier"
                      :name      nm :namespace "x@1.0.0"})
        reg {"x@1.0.0.A" {:declaration {:superType (ti "B")}}
             "x@1.0.0.B" {:declaration {:superType (ti "A")}}}]
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo) #"Cyclic"
                          (mm/super-chain reg "x@1.0.0.A")))))

(deftest identity-field-is-inherited
  (let [reg (fx/registry "promissory-note")]
    (testing "TemplateModel declares none; Clause does"
      (is (= "clauseId" (mm/identity-field reg fx/note-fqn))))))

;; ------------------------------------------------------------------ versions

(deftest metamodel-class-parsing
  (testing "the version is stripped, leaving the short type name to dispatch on"
    (is (= "StringProperty" (mm/metamodel-type "concerto.metamodel@1.0.0.StringProperty")))
    (is (= "1.0.0"          (mm/metamodel-version "concerto.metamodel@1.0.0.StringProperty")))
    (is (= "TypeIdentifier" (mm/metamodel-type "concerto.metamodel@2.3.4.TypeIdentifier")))
    (is (= "2.3.4"          (mm/metamodel-version "concerto.metamodel@2.3.4.TypeIdentifier"))))

  (testing "a class from an ordinary model is not a metamodel type"
    (is (nil? (mm/metamodel-type "org.accordproject.money@0.3.0.MonetaryAmount")))
    (is (nil? (mm/metamodel-version "org.accordproject.money@0.3.0.MonetaryAmount"))))

  (testing "and nothing blows up on absent or non-string input"
    (is (nil? (mm/metamodel-type nil)))
    (is (nil? (mm/metamodel-type :not-a-string)))
    (is (nil? (mm/metamodel-type "")))))

(deftest metamodel-versions-are-collected-recursively
  (is (= #{"1.0.0"} (mm/metamodel-versions (fx/model "promissory-note" "model.json"))))
  (is (= #{"1.0.0" "9.9.9"}
         (mm/metamodel-versions
          {:$class "concerto.metamodel@1.0.0.Model"
           :declarations [{:$class "concerto.metamodel@9.9.9.ConceptDeclaration"}]})))
  (is (= #{} (mm/metamodel-versions {:$class "some.other@1.0.0.Thing"}))))

(deftest unsupported-metamodel-version-is-refused
  (testing "the version we are checked against passes"
    (is (some? (mm/check-metamodel-version! (fx/model "promissory-note" "model.json")))))

  (testing "an unknown one throws rather than degrading silently.

           Without this, every $class match misses, every property falls
           through to a permissive default, TypeIdentifiers go unqualified so
           inherited properties vanish -- and the resulting schema compiles
           clean and accepts anything."
    (let [bumped (first (fx/models-at-metamodel-version "promissory-note" "2.0.0"))]
      (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                            #"Unsupported Concerto metamodel version 2\.0\.0"
                            (mm/check-metamodel-version! bumped)))

      (testing "and the registry refuses too, so nothing downstream sees it"
        (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                              #"Unsupported Concerto metamodel version"
                              (mm/registry [bumped])))))))

(deftest a-vetted-new-version-needs-no-other-change
  (testing "dispatch is on the short name, so adding a version to the supported
           set is the only edit a metamodel bump requires"
    (with-redefs [mm/supported-metamodel-versions #{"1.0.0" "2.0.0"}]
      (let [bumped (mm/registry (fx/models-at-metamodel-version "promissory-note" "2.0.0"))]
        (testing "imports still resolve and supertypes still qualify"
          (is (= (mm/super-chain (fx/registry "promissory-note") fx/note-fqn)
                 (mm/super-chain bumped fx/note-fqn))))))))
