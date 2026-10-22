(ns com.trustblocks.concerto.generator-test
  "Sample generation, against the two models checked in as JSON -- so it needs
  neither the CTO parser nor Node, and runs under babashka as well as on the JVM.
  The constraint-by-constraint tests, which write their models in CTO, are in
  generator-parsed-test."
  (:require [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.generator :as g]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [malli.core :as m]))

(def ^:private models
  [["promissory-note"        fx/note-fqn]
   ["acceptance-of-delivery" fx/acceptance-fqn]])

(deftest every-generated-instance-validates
  (testing "in each version, for each model: what is generated is what validates"
    (doseq [[template fqn] models
            version        [3 4 5 "5.2"]
            :let [reg    (fx/registry template)
                  schema (cm/->schema reg fqn :concerto-version version)]]
      (doseq [x (g/sample reg fqn 60 :seed 3 :concerto-version version :json false)]
        (is (m/validate schema x)
            (str template " at " (pr-str version) ": " (pr-str x)))))))

(deftest instances-come-out-as-concerto-json
  (let [reg (fx/registry "promissory-note")
        x   (g/generate reg fx/note-fqn :seed 1)]
    (is (every? string? (keys x)) "string keys, as Concerto writes them")
    (is (= fx/note-fqn (get x "$class")))
    (is (m/validate (cm/->schema reg fx/note-fqn) (inst/json->edn x))
        "and they read back through the library like any other instance")
    (testing "`:json false` is the neutral EDN the library validates"
      (is (keyword? (first (keys (g/generate reg fx/note-fqn :seed 1 :json false))))))))

(deftest generation-is-repeatable
  (let [reg (fx/registry "promissory-note")]
    (is (= (g/generate reg fx/note-fqn :seed 9) (g/generate reg fx/note-fqn :seed 9)))
    (is (not= (g/generate reg fx/note-fqn :seed 9) (g/generate reg fx/note-fqn :seed 10)))
    (is (= (g/sample reg fx/note-fqn 5 :seed 2) (g/sample reg fx/note-fqn 5 :seed 2)))))

(deftest a-null-is-not-generated
  (testing "an optional value may be null or absent, and a sample reads better
           with neither shown as `null`"
    (let [reg (fx/registry "acceptance-of-delivery")
          xs  (g/sample reg fx/acceptance-fqn 50 :seed 4)]
      (is (not-any? #(some nil? (vals %)) xs)))))

(deftest datetimes-are-in-the-wire-form
  (let [reg (fx/registry "promissory-note")
        xs  (g/sample reg fx/note-fqn 30 :seed 6)
        dts (keep #(get % "date") xs)]
    (is (seq dts))
    (is (every? #(re-matches #"\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ" %) dts)
        "a second-resolution UTC instant, valid in every version, strict included")))

(deftest the-generator-is-a-test-check-generator
  (let [gen (g/generator (fx/registry "promissory-note") fx/note-fqn)]
    (is (some? gen))
    (is (every? map? (clojure.test.check.generators/sample gen 5)))))
