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
  test says it deliberately differs. The `:concerto-version \"5.2\"` tests were run
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
  (doseq [bad [6 2 "6.0" "five" "5.x" 5.2 nil]]
    (when (some? bad)
      (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                            #"Unsupported :concerto-version"
                            (cm/->schema maps-reg "m@1.0.0.S2I" :concerto-version bad))
          (pr-str bad))))
  (testing "an integer is that major's first release, so 5 is 5.0"
    (is (= (cm/->edn maps-reg "m@1.0.0.H" :concerto-version 5)
           (cm/->edn maps-reg "m@1.0.0.H" :concerto-version "5.0")
           (cm/->edn maps-reg "m@1.0.0.H" :concerto-version "5.1.3")))
    (is (not= (cm/->edn maps-reg "m@1.0.0.H" :concerto-version 5)
              (cm/->edn maps-reg "m@1.0.0.H" :concerto-version "5.2")))))

(deftest concerto-5-2-enforces-a-scalar-on-map-keys
  (let [ok? (fn [version k]
              (m/validate (cm/->schema maps-reg "m@1.0.0.C2S" :concerto-version version)
                          {k "s"}))]
    (testing "before 5.2 -- 5.0 and 5.1 included -- the key is a string and
             nothing more"
      (doseq [v [3 4 5 "5.1"]]
        (is (ok? v :US))
        (is (ok? v :USA) (str "at " (pr-str v)))))
    (testing "from 5.2: Code's regex applies to the key, as it does to a value"
      (is (ok? "5.2" :US))
      (is (ok? "5.2" "US"))
      (is (not (ok? "5.2" :USA)))
      (is (not (ok? "5.2.1" :USA))))))

(deftest datetime-keys-are-read-loosely-in-every-version
  (testing "5.2.1 holds a DateTime value to the strict envelope but a DateTime
           key to the old one"
    (doseq [version [4 5 "5.2"]]
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

  (let [ok? (fn [version v]
              (m/validate (cm/->schema maps-reg "m@1.0.0.S2Rel" :concerto-version version)
                          {:x v}))
        uri      "resource:m@1.0.0.Thing#1"
        embedded {:$class "m@1.0.0.Thing" :id "1"}]
    (testing "every boundary below was found by running the releases either side
             of it: 3.22.0 and 3.23.0, 4.1.2 and 4.1.3, 5.1.0 and 5.2.0"

      (testing "before 3.23.0 the model cannot be loaded, so there is nothing to agree with"
        (doseq [v [3 "3.22.0"]]
          (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                                #"before 3.23.0 cannot load"
                                (cm/->schema maps-reg "m@1.0.0.S2Rel" :concerto-version v))
              (pr-str v))))

      (testing "3.23.0 to 4.1.2: either a reference or an embedded resource"
        ;; 4, being 4.0.0, is in this range, and so is the default.
        (doseq [v ["3.23.0" "3.26.0" 4 "4.1.2"]]
          (is (ok? v uri) (str "uri at " (pr-str v)))
          (is (ok? v "1") (str "bare id at " (pr-str v)))
          (is (ok? v embedded) (str "embedded at " (pr-str v)))
          (is (not (ok? v "")) "still not empty")
          (is (not (ok? v {:$class "m@1.0.0.Thing"})) "and an embedded one is still checked")))

      (testing "4.1.3 to 5.1.x: the embedded resource, and a reference is refused"
        (doseq [v ["4.1.3" "4.2" 5 "5.1"]]
          (is (ok? v embedded) (str "embedded at " (pr-str v)))
          (is (not (ok? v uri)) (str "uri at " (pr-str v)))
          (is (not (ok? v "1")))
          (is (not (ok? v {:$class "m@1.0.0.Thing"})))))

      (testing "5.2.0 on: the reference, and an embedded resource is refused"
        (doseq [v ["5.2" "5.2.1"]]
          (is (ok? v uri))
          (is (ok? v "1"))
          (is (not (ok? v 5)))
          (is (not (ok? v embedded))))))

    (testing "the default, 4, is 4.0.0, so it takes both"
      (is (m/validate (cm/->schema maps-reg "m@1.0.0.S2Rel") {:x uri}))
      (is (m/validate (cm/->schema maps-reg "m@1.0.0.S2Rel") {:x embedded})))))

(deftest a-concerto-5-2-schema-exports-as-edn
  (let [form (cm/->edn maps-reg "m@1.0.0.H" :concerto-version "5.2")]
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

  (testing "a null or empty $class is read as absent too, as Concerto does"
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {"$class" nil "n" "a"}}))
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "i" {"$class" "" "n" "a"}}))
    (is (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "f" {"m" {"$class" nil "b" "x"}}})
        "including where the declared type has subtypes")
    (is (not (c-ok? "c@1.0.0.H" {"$class" "c@1.0.0.H" "p" {"a" {"$class" nil "name" "x" "purrs" true}}}))
        "but not where it is abstract: there is nothing to read it as")
    (is (not (c-ok? "c@1.0.0.H" {"$class" nil "i" {"n" "a"}})) "and never at the root"))

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

;; ------------------------------------------------------------------ identifiers

(def ^:private id-reg
  "Every expectation below was run through concerto-core 4.2.0, 5.0.0, 5.1.0 and 5.2.1,
  which agree."
  (mm/registry
   [(p/parse-string
     (str "namespace i@1.0.0\n"
          "asset A identified by id { o String id  o String n optional }\n"
          "concept S identified { o String n optional }\n"
          "participant P identified by pid { o String pid }\n"
          "concept C { o String n }\n"
          "concept H { o A a optional  o S s optional }\n"))]))

(defn- i-ok? [fqn data]
  (m/validate (cm/->schema id-reg (str "i@1.0.0." fqn)) (inst/json->edn data)))

(deftest an-identifier-may-not-be-empty
  (testing "identified by a field: the field is the identifier, and \"\" is none"
    (is (i-ok? "A" {"$class" "i@1.0.0.A" "id" "x"}))
    (is (not (i-ok? "A" {"$class" "i@1.0.0.A" "id" ""})))
    (is (not (i-ok? "A" {"$class" "i@1.0.0.A"})) "and it is required, as ever")
    (is (not (i-ok? "A" {"$class" "i@1.0.0.A" "id" "" "$identifier" "x"}))
        "a $identifier does not stand in for it")
    (is (not (i-ok? "P" {"$class" "i@1.0.0.P" "pid" ""}))))

  (testing "$identifier beside an identifying field is its own affair"
    (is (i-ok? "A" {"$class" "i@1.0.0.A" "id" "x" "$identifier" "y"}) "it need not agree")
    (is (i-ok? "A" {"$class" "i@1.0.0.A" "id" "x" "$identifier" ""})))

  (testing "`identified` by the system: $identifier, if given, is not empty, and may be left out"
    (is (i-ok? "S" {"$class" "i@1.0.0.S" "$identifier" "x"}))
    (is (not (i-ok? "S" {"$class" "i@1.0.0.S" "$identifier" ""})))
    (is (i-ok? "S" {"$class" "i@1.0.0.S"})))

  (testing "a type that is not identified takes any $identifier"
    (is (i-ok? "C" {"$class" "i@1.0.0.C" "n" "a" "$identifier" ""})))

  (testing "nested, the same"
    (is (not (i-ok? "H" {"$class" "i@1.0.0.H" "a" {"id" ""}})))
    (is (i-ok? "H" {"$class" "i@1.0.0.H" "a" {"id" "x"}}))
    (is (i-ok? "H" {"$class" "i@1.0.0.H" "s" {"n" "x"}}))))

(def ^:private rel-reg
  "Every expectation below was run through concerto-core 4.2.0, 5.0.0, 5.1.0 and 5.2.1,
  which agree."
  (mm/registry
   [(p/parse-string
     (str "namespace r@1.0.0\n"
          "asset A identified by id { o String id }\n"
          "concept H { --> A a optional\n --> A[] as optional }\n"))]))

(deftest a-relationship-is-never-empty
  (let [ok? (fn [data] (m/validate (cm/->schema rel-reg "r@1.0.0.H")
                                   (inst/json->edn (assoc data "$class" "r@1.0.0.H"))))]
    (is (ok? {"a" "x"}) "a bare id")
    (is (ok? {"a" "resource:r@1.0.0.A#x"}) "a resource URI")
    (is (not (ok? {"a" ""})) "Missing id")
    (is (not (ok? {"as" [""]})) "and the same inside an array")
    (is (ok? {"as" ["x" "y"]}))
    (is (not (ok? {"a" 5})))
    (is (not (ok? {"a" {"$class" "r@1.0.0.A" "id" "x"}})) "an embedded resource is not a reference")))
