(ns com.trustblocks.concerto.generator-parsed-test
  "Sample generation constraint by constraint, against models written in CTO --
  so the JVM and ClojureScript only, and needing test.chuck for the patterns."
  (:require [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.generator :as g]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.parser :as p]
            [malli.core :as m]))

(def ^:private cto
  (str "namespace g@1.0.0\n"
       "scalar Code extends String regex=/^[A-Z]{2}$/\n"
       "scalar Short extends String length=[2,4]\n"
       "scalar Pct extends Double range=[0.0,100.0]\n"
       "scalar Qty extends Integer range=[1,10]\n"
       "enum Colour { o RED o GREEN o BLUE }\n"
       "asset Thing identified by id { o String id }\n"
       "concept Item { o String n  o Integer count range=[3,5] }\n"
       "abstract concept Animal { o String name }\n"
       "concept Cat extends Animal { o Boolean purrs }\n"
       "concept Dog extends Animal { o Boolean barks }\n"
       "concept Solo identified { o String n optional }\n"
       "map S2I { o String o Integer }\n"
       "map D2S { o DateTime o String }\n"
       "map C2S { o Code o String }\n"
       "concept Tree { o String label  o Tree[] kids optional }\n"
       "concept Everything {\n"
       " o String plain\n"
       " o String sku regex=/^[A-Z]{3}-[0-9]{4}$/\n"
       " o String tag length=[2,4]\n"
       " o Integer qty range=[10,12]\n"
       " o Double ratio range=[0.25,0.75]\n"
       " o Long big\n"
       " o Boolean flag\n"
       " o DateTime when\n"
       " o DateTime[] whens optional\n"
       " o String[] names size=[2,3]\n"
       " o Code code\n"
       " o Short short\n"
       " o Pct pct\n"
       " o Qty qty2\n"
       " o Colour colour\n"
       " o Item item\n"
       " o Item[] items optional\n"
       " o Animal pet\n"
       " o Solo solo optional\n"
       " o S2I counts optional\n"
       " o D2S dated optional\n"
       " o C2S coded optional\n"
       " --> Thing thing\n"
       " --> Thing[] things optional\n"
       " o Tree tree optional\n"
       " o String maybe optional\n"
       "}\n"))

(def ^:private reg (mm/registry [(p/parse-string cto)]))
(def ^:private fqn "g@1.0.0.Everything")

(deftest every-kind-of-constraint-generates-something-valid
  (doseq [version [4 5 "5.2"]
          :let [schema (cm/->schema reg fqn :concerto-version version)]]
    (let [xs (g/sample reg fqn 100 :seed 21 :concerto-version version :json false)]
      (is (= 100 (count xs)))
      (doseq [x xs]
        (is (m/validate schema x) (str "at " (pr-str version) ": "
                                       (pr-str (m/explain schema x))))))))

(deftest what-was-asked-for-is-what-comes-out
  (let [xs (g/sample reg fqn 100 :seed 5)]
    (testing "a pattern"
      (is (every? #(re-matches #"[A-Z]{3}-[0-9]{4}" (get % "sku")) xs))
      (is (every? #(re-matches #"[A-Z]{2}" (get % "code")) xs) "and a scalar's"))
    (testing "a length"
      (is (every? #(<= 2 (count (get % "tag")) 4) xs))
      (is (every? #(<= 2 (count (get % "short")) 4) xs) "and a scalar's"))
    (testing "a range, which is tight enough that filtering would give up"
      (is (every? #(<= 10 (get % "qty") 12) xs))
      (is (every? #(<= 0.25 (get % "ratio") 0.75) xs))
      (is (every? #(<= 0.0 (get % "pct") 100.0) xs))
      (is (every? #(<= 1 (get % "qty2") 10) xs))
      (is (every? #(<= 3 (get-in % ["item" "count"]) 5) xs)))
    (testing "a collection size"
      (is (every? #(<= 2 (count (get % "names")) 3) xs)))
    (testing "an enum"
      (is (every? #(#{"RED" "GREEN" "BLUE"} (get % "colour")) xs)))
    (testing "a polymorphic property draws from its concrete subtypes, with its class"
      (is (= #{"g@1.0.0.Cat" "g@1.0.0.Dog"}
             (set (map #(get-in % ["pet" "$class"]) xs)))
          "abstract Animal is never drawn, and both subtypes are"))
    (testing "$class is on every nested concept, as exactly the class"
      (is (every? #(= "g@1.0.0.Item" (get-in % ["item" "$class"])) xs)))
    (testing "a relationship is an identifier, and never empty"
      (is (every? #(not (str/blank? (get % "thing"))) xs))
      (is (every? #(every? seq (get % "things" [])) xs)))
    (testing "an `identified` type's $identifier is never empty either, though a
             type that is not identified may have an empty one"
      (let [solos (keep #(get % "solo") xs)]
        (is (seq solos))
        (is (every? #(or (not (contains? % "$identifier")) (seq (get % "$identifier"))) solos))))))

(deftest optional-things-are-sometimes-there-and-sometimes-not
  (let [xs (g/sample reg fqn 100 :seed 8)]
    (doseq [k ["whens" "items" "solo" "counts" "dated" "coded" "things" "tree" "maybe"]]
      (is (< 0 (count (filter #(contains? % k) xs)) 100)
          (str k " appears in some and not in all")))))

(deftest a-self-referential-model-terminates
  (testing "Tree holds Trees; generation stops going deeper"
    (let [xs (g/sample reg "g@1.0.0.Tree" 40 :seed 2 :json false)]
      (is (= 40 (count xs)))
      (is (every? #(m/validate (cm/->schema reg "g@1.0.0.Tree") %) xs)))))

(deftest maps-generate-in-each-version
  (testing "a DateTime-keyed map, and a scalar-keyed one"
    (doseq [version [4 "5.2"]
            :let [schema (cm/->schema reg "g@1.0.0.Everything" :concerto-version version)
                  xs     (filter #(contains? % :dated)
                                 (g/sample reg fqn 100 :seed 3 :concerto-version version :json false))]]
      (is (seq xs))
      (is (every? #(m/validate schema %) xs)))))

(deftest the-schema-for-generation-is-not-the-schema-for-validation
  (testing "`:generators true` changes how the schema is written, never what it accepts"
    (doseq [x (g/sample reg fqn 30 :seed 1 :json false)
            version [4 "5.2"]]
      (is (= (m/validate (cm/->schema reg fqn :concerto-version version) x)
             (m/validate (cm/->schema reg fqn :concerto-version version :generators true) x))))
    (let [hints (fn [form] (count (filter #(and (map? %) (contains? % :gen/schema))
                                          (tree-seq coll? seq form))))]
      (testing "and the validation schema carries no hints"
        (is (zero? (hints (cm/->edn reg fqn)))))
      (testing "while the generation one has them, and is still plain EDN"
        (let [form (cm/->edn reg fqn :generators true)]
          (is (< 5 (hints form)))
          (is (= form (clojure.edn/read-string (pr-str form)))))))))

(def ^:private optionals
  ["whens" "items" "solo" "counts" "dated" "coded" "things" "tree" "maybe"])

(deftest optional-properties-can-be-always-or-never
  (testing "`:optional :always` includes every one, as `concerto generate
           --includeOptionalFields` does, and what comes out still validates"
    (let [schema (cm/->schema reg fqn)
          xs     (g/sample reg fqn 50 :seed 4 :optional :always :json false)]
      (is (= 50 (count xs)))
      (is (every? #(m/validate schema %) xs))
      (doseq [k optionals]
        (is (every? #(contains? % (keyword k)) xs) (str k " is always there")))))

  (testing "`:optional :never` leaves them all out"
    (let [schema (cm/->schema reg fqn)
          xs     (g/sample reg fqn 50 :seed 4 :optional :never :json false)]
      (is (every? #(m/validate schema %) xs))
      (doseq [k optionals]
        (is (not-any? #(contains? % (keyword k)) xs) (str k " is never there")))))

  (testing "and `:random`, the default, is neither"
    (let [xs (g/sample reg fqn 100 :seed 4 :json false)]
      (is (< 0 (count (filter #(contains? % :tree) xs)) 100))))

  (testing "a self-referential property that is optional still terminates when always drawn"
    (let [xs (g/sample reg "g@1.0.0.Tree" 20 :seed 3 :optional :always :json false)]
      (is (= 20 (count xs)))
      (is (every? #(m/validate (cm/->schema reg "g@1.0.0.Tree") %) xs)))))
