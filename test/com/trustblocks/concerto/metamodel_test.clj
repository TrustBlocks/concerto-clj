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
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"Cyclic"
                          (mm/super-chain reg "x@1.0.0.A")))))

(deftest identity-field-is-inherited
  (let [reg (fx/registry "promissory-note")]
    (testing "TemplateModel declares none; Clause does"
      (is (= "clauseId" (mm/identity-field reg fx/note-fqn))))))
