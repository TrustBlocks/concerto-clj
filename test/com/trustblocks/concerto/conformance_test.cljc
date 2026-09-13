(ns com.trustblocks.concerto.conformance-test
  "Runs the validate/ scenarios from accordproject/concerto-conformance
  (github.com/accordproject/concerto-conformance) against this library's own
  pipeline: metamodel -> Malli schema -> m/validate.

  Vendored under test-resources/conformance/ rather than pulled at test time,
  matching this project's checked-in-fixture convention: no network, no Node,
  at test time. Each category's model.json is verbatim `concerto parse`
  output (v4.1.0) for the corresponding .cto in that repo's
  validate/models/<category>/ directory -- locations included, exactly as
  fixtures.cljc does for the two Accord templates. The instance JSON files are
  copied unchanged.

  Only the validate/ half of that repo is used here. Its other suite,
  semantic/, tests Concerto's own ModelManager rejecting a malformed *model*
  at load time (minSize > maxSize; a size validator on a non-collection
  property) -- a layer this library does not delegate to `concerto parse` at
  all, since parse accepts both without complaint. malli.cljc's size-schema
  enforces those same two rules itself instead, and
  malli-test/collection-size-validator-rejects-what-concerto-rejects checks
  them; there is no `concerto parse` fixture that could stand in for them
  here."
  (:require [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [com.trustblocks.concerto.metamodel :as mm]
            [malli.core :as m]))

(defn- registry [category]
  (mm/registry [(-> (fx/read-resource (str "conformance/" category "/model.json"))
                    mm/json->edn
                    mm/strip-locations)]))

(defn- instance [category file]
  (inst/json->edn (fx/read-resource (str "conformance/" category "/" file))))

(defn- check
  "Compile category's schema for fqn once per call -- these are tiny
  single-declaration models, so recompiling per assertion costs nothing and
  keeps each `check` call self-contained and independently readable."
  [category fqn file expect]
  (let [schema (cm/->schema (registry category) fqn)]
    (is (= expect (m/validate schema (instance category file)))
        (str category "/" file))))

(deftest primitives
  (let [fqn "org.acme.test@1.0.0.AllTypes"]
    (testing "Valid instance with all primitive types should pass"
      (check "primitives" fqn "all_primitives_valid.json" true))
    (testing "String value for Integer field should fail"
      (check "primitives" fqn "integer_type_mismatch.json" false))
    (testing "String value for Boolean field should fail"
      (check "primitives" fqn "boolean_type_mismatch.json" false))))

(deftest required-fields
  (let [fqn "org.acme.test@1.0.0.Person"]
    (testing "Missing required field should fail"
      (check "required" fqn "missing_required.json" false))
    (testing "All required fields present should pass"
      (check "required" fqn "all_present.json" true))))

(deftest optional-fields
  (testing "Optional field omitted should pass"
    (check "optional" "org.acme.test@1.0.0.Person" "omitted_optional.json" true)))

(deftest enum-instances
  (let [fqn "org.acme.test@1.0.0.Car"]
    (testing "Valid enum value should pass"
      (check "enums" fqn "valid_enum.json" true))
    (testing "Invalid enum value should fail"
      (check "enums" fqn "invalid_enum.json" false))))

(deftest class-type-resolution
  (let [fqn "org.acme.test@1.0.0.Person"]
    (testing "Matching $class type should pass"
      (check "class_type" fqn "valid_class.json" true))
    (testing "Non-existent $class type should fail"
      (check "class_type" fqn "unknown_class.json" false))))

(deftest collection-size-validation
  (let [fqn "org.acme.collections@1.0.0.BoundedTags"]
    (testing "Array within size bounds should pass"
      (check "collection_size" fqn "valid_within_bounds.json" true))
    (testing "Array at minimum bound should pass"
      (check "collection_size" fqn "at_min_bound.json" true))
    (testing "Array at maximum bound should pass"
      (check "collection_size" fqn "at_max_bound.json" true))
    (testing "Array with too few elements should fail"
      (check "collection_size" fqn "too_few_elements.json" false))
    (testing "Array with too many elements should fail"
      (check "collection_size" fqn "too_many_elements.json" false))))
