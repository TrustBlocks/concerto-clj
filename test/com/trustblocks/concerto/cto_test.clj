(ns com.trustblocks.concerto.cto-test
  "The only tests that need Node. They skip themselves when the CLI is absent,
  so `git clone && clojure -M:test` passes on a machine that has never seen
  npm -- the core namespaces are exercised entirely from checked-in fixtures."
  (:require [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.cto :as cto]
            [com.trustblocks.concerto.metamodel :as mm]))

(def ^:private cli (cto/find-cli))

(deftest find-cli-reports-absence-rather-than-guessing
  (is (nil? (cto/find-cli :cli "/definitely/not/a/real/concerto")))
  (is (nil? (cto/find-cli :cli "concerto-that-does-not-exist"))))

(deftest parse-explains-a-missing-file
  (is (thrown-with-msg? clojure.lang.ExceptionInfo #"CTO file not found"
                        (cto/parse "/no/such/model.cto"))))

(deftest parsing-real-cto
  (if-not cli
    (println "  (skipping: no concerto CLI; set $CONCERTO_CLI or npm i -g @accordproject/concerto-cli)")
    (let [tmp (doto (java.io.File/createTempFile "concerto-clj" ".cto") .deleteOnExit)]
      (spit tmp "namespace test@1.0.0\n\nconcept Thing identified by id {\n  o String id\n  o Integer count optional\n}\n")
      (let [model (cto/parse tmp :cli cli)]
        (testing "parses to metamodel EDN with keyword keys"
          (is (= "test@1.0.0" (:namespace model)))
          (is (= "concerto.metamodel@1.0.0.Model" (:$class model))))

        (testing "locations are stripped on the way out"
          (is (not (re-find #":location" (pr-str model)))))

        (testing "and it feeds the registry directly"
          (let [reg (mm/registry [model])]
            (is (contains? reg "test@1.0.0.Thing"))
            (is (= "id" (mm/identity-field reg "test@1.0.0.Thing")))))))))
