(ns com.trustblocks.concerto.instance-test
  (:require [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.instance :as inst]))

(deftest instances-round-trip
  (doseq [t (keys fx/models)]
    (testing (str t " survives JSON -> EDN -> JSON unchanged")
      (let [raw (fx/sample t)]
        (is (= raw (inst/edn->json (inst/json->edn raw))))))))

(deftest spelling-is-preserved-exactly
  (testing "the neutral layer needs no mapping table, so no spelling can be lost.

           Every reverse-mapping bug this project has hit -- vechileID coming
           back as vechileId, INITIAL_DUE as initialDue -- came from a storage
           layer forcing kebab-case and then having to recover the original
           from the model. There is nothing to recover here."
    (let [odd {"$class" "x@1.0.0.Y" "vechileID" 1 "INITIAL_DUE" 2 "businessDays" 3}]
      (is (= odd (inst/edn->json (inst/json->edn odd))))
      (is (= #{:$class :vechileID :INITIAL_DUE :businessDays}
             (set (keys (inst/json->edn odd))))))))

(deftest nested-concepts-and-arrays-recurse
  (let [raw {"$class" "x@1.0.0.Y"
             "amount" {"$class" "m@1.0.0.MonetaryAmount" "doubleValue" 1 "currencyCode" "USD"}
             "parties" [{"$class" "p@1.0.0.Party" "partyId" "a"}
                        {"$class" "p@1.0.0.Party" "partyId" "b"}]}
        edn (inst/json->edn raw)]
    (is (= "m@1.0.0.MonetaryAmount" (get-in edn [:amount :$class])))
    (is (= ["a" "b"] (mapv :partyId (:parties edn))))
    (is (= raw (inst/edn->json edn)))))

(deftest class-and-identifier
  (let [edn (inst/json->edn (fx/sample "acceptance-of-delivery"))]
    (is (= fx/acceptance-fqn (inst/class-of edn)))

    (testing "$identifier is preferred when present"
      (is (= (:$identifier edn) (inst/identifier-of edn))))

    (testing "falling back to the declared identity field for older models"
      (let [without (dissoc edn :$identifier)]
        (is (= (:clauseId edn) (inst/identifier-of without :identity-field "clauseId")))))

    (testing "and nil when there is nothing to fall back to"
      (is (nil? (inst/identifier-of (dissoc edn :$identifier)))))))
