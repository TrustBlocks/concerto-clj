(ns com.trustblocks.concerto.malli-parsed-test
  "Schema tests whose models are written as CTO text, so they need the Clojure
  parser and, like parser-test, do not run under babashka (instaparse cannot
  load there). Split from malli-test so that suite still does."
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.parser :as p]
            [malli.core :as m]))

(defn- mmc [t] (str "concerto.metamodel@1.0.0." t))

;; Reaches the map for one declaration whether the form is a bare map or
;; [:schema {:registry ...} root] -- see malli-test.
(defn- map-for [form fqn]
  (if (= :schema (first form))
    (get (:registry (second form)) fqn)
    form))
(defn- entries [map-form] (filterv vector? (drop 1 map-form)))
(defn- by-key  [map-form] (into {} (map (juxt first last)) (entries map-form)))

;; ----------------------------------------------------------------------- maps

(def ^:private maps-cto
  "Every expectation below was run through `concerto validate` (concerto-core
  4.2.0, with ENABLE_MAP_TYPE=true) before being written down, except where a
  test says it deliberately differs. The `:concerto-version 5` tests were run
  against 5.2.1."
  (str "namespace m@1.0.0\n"
       "scalar Code extends String regex=/^[A-Z]{2}$/\n"
       "enum Colour { o RED o BLUE }\n"
       "concept Item { o String n }\n"
       "asset Thing identified by id { o String id }\n"
       "map S2I { o String o Integer }\n"
       "map D2S { o DateTime o String }\n"
       "map C2S { o Code o String }\n"
       "map S2Item { o String o Item }\n"
       "map S2Col { o String o Colour }\n"
       "map S2Thing { o String o Thing }\n"
       "map S2B { o String o Boolean }\n"
       "map S2Code { o String o Code }\n"
       "map S2Nest { o String o S2I }\n"
       "map S2Rel { o String --> Thing }\n"
       "map Loop { o String o Loop }\n"
       "concept H {\n"
       " o S2I a optional\n o D2S d optional\n o C2S c optional\n"
       " o S2Item i optional\n o S2Col col optional\n o S2Thing t optional\n"
       " o S2B b optional\n o S2Code sc optional\n o S2Nest nest optional\n o S2Rel rel optional\n}\n"
       "concept Cyc { o Loop loop }\n"
       "concept OnlyStrings { o S2I a }\n"))

(def ^:private maps-reg (mm/registry [(p/parse-string maps-cto)]))

(defn- h-ok? [prop value]
  (m/validate (cm/->schema maps-reg "m@1.0.0.H")
              (inst/json->edn {"$class" "m@1.0.0.H" prop value})))

(deftest map-declarations-compile
  (testing "the parser spells map types the way the CLI does"
    (let [d (fn [n] (->> (:declarations (p/parse-string maps-cto))
                         (filter #(= n (:name %))) first))]
      (is (= (mmc "StringMapKeyType")      (:$class (:key (d "S2I")))))
      (is (= (mmc "IntegerMapValueType")   (:$class (:value (d "S2I")))))
      (is (= (mmc "DateTimeMapKeyType")    (:$class (:key (d "D2S")))))
      (is (= (mmc "ObjectMapKeyType")      (:$class (:key (d "C2S")))))
      (is (= "Code"                        (get-in (d "C2S") [:key :type :name])))
      (is (= (mmc "ObjectMapValueType")    (:$class (:value (d "S2Item")))))))

  (testing "primitive values"
    (is (h-ok? "a" {"x" 1}))
    (is (h-ok? "a" {}))
    (is (not (h-ok? "a" [1])) "an array is not a map")
    (is (not (h-ok? "a" {"x" nil})))
    (is (h-ok? "b" {"x" true}))
    (is (not (h-ok? "b" {"x" "true"}))))

  (testing "DateTime keys"
    (is (h-ok? "d" {"2020-01-01T00:00:00Z" "s"}))
    (is (not (h-ok? "d" {"hello" "s"}))))

  (testing "a scalar key is held to its primitive, as in Concerto"
    (is (h-ok? "c" {"US" "s"}))
    (is (h-ok? "c" {"USA" "s"})))

  (testing "concept values are checked, and need their $class like any nested concept"
    (is (h-ok? "i" {"x" {"$class" "m@1.0.0.Item" "n" "a"}}))
    (is (not (h-ok? "i" {"x" {"$class" "m@1.0.0.Item" "n" 1}})))
    (is (not (h-ok? "i" {"x" {"$class" "m@1.0.0.Item"}}))))

  (testing "asset values are objects, not relationship strings"
    (is (h-ok? "t" {"x" {"$class" "m@1.0.0.Thing" "id" "1"}}))
    (is (not (h-ok? "t" {"x" "resource:m@1.0.0.Thing#1"}))))

  (testing "enum values are their names. Concerto 4.x rejects these, which is a
           defect in it, not a rule this library reproduces."
    (is (h-ok? "col" {"x" "RED"}))
    (is (not (h-ok? "col" {"x" "GREEN"}))))

  (testing "a scalar value keeps its constraints"
    (is (h-ok? "sc" {"x" "US"}))
    (is (not (h-ok? "sc" {"x" "USA"}))))

  (testing "a map of maps"
    (is (h-ok? "nest" {"x" {"y" 1}}))
    (is (not (h-ok? "nest" {"x" 1})))))

(deftest map-declarations-export-as-edn
  (let [form (cm/->edn maps-reg "m@1.0.0.OnlyStrings")]
    (is (= [:map-of :concerto/map-key :int]
           (get (by-key (map-for form "m@1.0.0.OnlyStrings")) :a)))
    (is (= form (edn/read-string (pr-str form))))
    (testing "and reads back, named key schemas included"
      (let [revived (m/schema (edn/read-string (pr-str form)) {:registry cm/registry*})]
        (is (m/validate revived {:$class "m@1.0.0.OnlyStrings" :a {:x 1}}))
        (is (not (m/validate revived {:$class "m@1.0.0.OnlyStrings" :a {:x "s"}})))))))

(deftest a-map-can-be-the-root
  (let [schema (cm/->schema maps-reg "m@1.0.0.S2Item")]
    (is (m/validate schema {:x {:$class "m@1.0.0.Item" :n "a"}}))
    (is (not (m/validate schema {:x {:$class "m@1.0.0.Item" :n 1}}))
        "its values are checked, though Item is reached only through the map"))
  (is (m/validate (cm/->schema maps-reg "m@1.0.0.S2I") {:x 1})))

(deftest a-map-that-contains-itself-is-refused
  (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                        #"contains itself"
                        (cm/->schema maps-reg "m@1.0.0.Cyc"))))

(deftest concerto-version-is-checked
  (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                        #"Unsupported :concerto-version 6"
                        (cm/->schema maps-reg "m@1.0.0.S2I" :concerto-version 6))))

(deftest concerto-5-enforces-a-scalar-on-map-keys
  (let [ok? (fn [version k]
              (m/validate (cm/->schema maps-reg "m@1.0.0.C2S" :concerto-version version)
                          {k "s"}))]
    (testing "3.x/4.x: the key is a string and nothing more"
      (is (ok? 4 :US))
      (is (ok? 4 :USA)))
    (testing "5.x: Code's regex applies to the key, as it does to a value"
      (is (ok? 5 :US))
      (is (ok? 5 "US"))
      (is (not (ok? 5 :USA))))))

(deftest concerto-5-still-reads-datetime-keys-loosely
  (testing "5.2.1 holds a DateTime value to the strict envelope but a DateTime
           key to the old one"
    (doseq [version [4 5]]
      (let [schema (cm/->schema maps-reg "m@1.0.0.D2S" :concerto-version version)]
        (is (m/validate schema {(keyword "2019") "s"}))
        (is (m/validate schema {(keyword "2020-13-45") "s"}))
        (is (m/validate schema {(keyword "2020-01-01T00:00:00Z") "s"}))
        (is (not (m/validate schema {:hello "s"})))
        (is (not (m/validate schema {(keyword "2020-01-01T25:00:00Z") "s"})))))))

(deftest relationship-map-values
  (testing "the parser reads `--> Type` as a relationship, as the CLI does"
    (let [d (->> (:declarations (p/parse-string maps-cto))
                 (filter #(= "S2Rel" (:name %))) first)]
      (is (= (mmc "RelationshipMapValueType") (:$class (:value d))))
      (is (= "Thing" (get-in d [:value :type :name])))))

  (testing "a value is the referenced identifier, a string"
    (doseq [version [4 5]
            :let [ok? (fn [v] (m/validate (cm/->schema maps-reg "m@1.0.0.S2Rel"
                                                       :concerto-version version)
                                          {:x v}))]]
      (is (ok? "resource:m@1.0.0.Thing#1"))
      (is (ok? "1"))
      (is (not (ok? 5)))
      (is (not (ok? {:$class "m@1.0.0.Thing" :id "1"}))))))

(deftest a-concerto-5-schema-exports-as-edn
  (let [form (cm/->edn maps-reg "m@1.0.0.H" :concerto-version 5)]
    (is (= form (edn/read-string (pr-str form))))
    (is (str/includes? (pr-str form) ":concerto/string-key"))
    (testing "and reads back with the same verdicts"
      (let [revived (m/schema (edn/read-string (pr-str form)) {:registry cm/registry*})]
        (is (m/validate revived {:$class "m@1.0.0.H" :c {:US "s"}}))
        (is (not (m/validate revived {:$class "m@1.0.0.H" :c {:USA "s"}})))))))

;; ------------------------------------------------------------ null / optional

(def ^:private nulls-reg
  "Every expectation below was run through `concerto validate` (core 5.2.1)."
  (mm/registry
   [(p/parse-string
     (str "namespace n@1.0.0\n"
          "enum Colour { o RED o BLUE }\n"
          "concept Item { o String n }\n"
          "concept N {\n"
          " o String req\n o String os optional\n o Integer oi optional\n"
          " o DateTime od optional\n o Boolean ob optional\n o Colour oc optional\n"
          " o Item oitem optional\n o String[] oarr optional\n o String[] rarr\n"
          " o Item[] oitems optional\n}\n"))]))

(defn- n-ok? [extra]
  (m/validate (cm/->schema nulls-reg "n@1.0.0.N")
              (inst/json->edn (merge {"$class" "n@1.0.0.N" "req" "a" "rarr" []} extra))))

(deftest null-on-an-optional-property-means-absent
  (testing "Concerto drops it, whatever the property's kind"
    (doseq [k ["os" "oi" "od" "ob" "oc" "oitem" "oarr" "oitems"]]
      (is (n-ok? {k nil}) k)))

  (testing "but a null is not a value of the property's type"
    (is (not (n-ok? {"os" 5})))
    (is (not (n-ok? {"oi" "x"}))))

  (testing "a required property's null is a missing field"
    (is (not (n-ok? {"req" nil})))
    (is (not (n-ok? {"rarr" nil}))))

  (testing "and a null inside an array is still an error"
    (is (not (n-ok? {"oarr" ["a" nil]})))
    (is (not (n-ok? {"oitems" [nil]})))))

;; ------------------------------------------------------- $class and defaults

(def ^:private poly-reg
  "Every expectation below was run through `concerto validate` (core 5.2.1)."
  (mm/registry
   [(p/parse-string
     (str "namespace c@1.0.0\n"
          "concept Item { o String n }\n"
          "abstract concept Animal { o String name }\n"
          "concept Cat extends Animal { o Boolean purrs }\n"
          "concept Dog extends Animal { o Boolean barks }\n"
          "concept Pet { o Animal a optional }\n"
          "concept Solo extends Animal { }\n"
          "concept Zoo { o Solo s optional }\n"
          "concept Base { o String b }\n"
          "concept Kid extends Base { o String k optional }\n"
          "concept Family { o Base m optional }\n"
          "concept H {\n o Item i optional\n o Item[] is optional\n o Pet p optional\n"
          " o Zoo z optional\n o Family f optional\n}\n"
          "concept WithDefault { o String s default=\"q\"\n o Integer n optional }\n"))]))

(defn- c-ok? [fqn data]
  (m/validate (cm/->schema poly-reg fqn) (inst/json->edn data)))

(deftest nested-values-may-omit-their-class
  (testing "Concerto reads it as the declared type"
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {"n" "a"}}))
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "is" [{"n" "a"}]}))
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "z" {"s" {"name" "x"}}})
        "Solo is concrete, though its parent is abstract"))

  (testing "a nested value is still checked against that type"
    (is (not (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {"n" 1}})))
    (is (not (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {}}))))

  (testing "a concrete declared type with subtypes falls back to itself"
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "f" {"m" {"b" "x"}}}))
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "f" {"m" {"$class" "c@1.0.0.Kid" "b" "x" "k" "y"}}})))

  (testing "an abstract declared type needs its $class to say which"
    (is (not (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "p" {"a" {"name" "x" "purrs" true}}})))
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H"
                            "p" {"a" {"$class" "c@1.0.0.Cat" "name" "x" "purrs" true}}})))

  (testing "a class that is not declared, or not a subtype, is still refused"
    (is (not (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {"$class" "c@1.0.0.Nope" "n" "a"}})))
    (is (not (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {"$class" "c@1.0.0.Cat" "n" "a"}}))))

  (testing "but the root has nothing to infer it from"
    (is (not (c-ok? "c@1.0.0.H" {"i" {"n" "a"}})))
    (is (not (c-ok? "c@1.0.0.Item" {"n" "a"})))
    (is (c-ok? "c@1.0.0.Item" {"$class" "c@1.0.0.Item" "n" "a"}))))

(deftest a-field-with-a-default-may-be-omitted
  (is (c-ok? "c@1.0.0.WithDefault" {"$class" "c@1.0.0.WithDefault"}))
  (is (c-ok? "c@1.0.0.WithDefault" {"$class" "c@1.0.0.WithDefault" "s" "x"}))
  (testing "but what is given is still checked"
    (is (not (c-ok? "c@1.0.0.WithDefault" {"$class" "c@1.0.0.WithDefault" "s" 5})))))
