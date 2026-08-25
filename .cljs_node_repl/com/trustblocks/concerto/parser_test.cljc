(ns com.trustblocks.concerto.parser-test
  "Unit tests for the Clojure CTO parser.

  These assert shapes without needing Node, so they run in CI. The stronger
  check is the differential against `concerto parse` over the whole
  cicero-template-library, which needs the CLI and lives in
  script/differential.clj."
  (:require [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.parser :as p]))

(defn- decls [src] (:declarations (p/parse-string src)))
(defn- one [src] (first (decls src)))
(defn- props [src] (:properties (one src)))
(defn- prop [src] (first (props src)))

(def ^:private header "namespace test@1.0.0\n\n")

(deftest model-header
  (testing "namespace"
    (is (= "test@1.0.0" (:namespace (p/parse-string (str header "concept A { }"))))))

  (testing "the model node itself"
    (let [m (p/parse-string (str header "concept A { }"))]
      (is (= "concerto.metamodel@1.0.0.Model" (:$class m)))
      (is (= [] (:decorators m)))
      (is (= [] (:imports m)))))

  (testing "concerto version, when declared"
    (is (= "^3.0.0" (:concertoVersion
                     (p/parse-string "concerto version \"^3.0.0\"\nnamespace test@1.0.0\nconcept A { }")))))

  (testing "and absent when not"
    (is (not (contains? (p/parse-string (str header "concept A { }")) :concertoVersion)))))

(deftest declaration-kinds
  (doseq [[kw expected] [["asset"       "AssetDeclaration"]
                         ["participant" "ParticipantDeclaration"]
                         ["transaction" "TransactionDeclaration"]
                         ["event"       "EventDeclaration"]
                         ["concept"     "ConceptDeclaration"]]]
    (testing kw
      (is (= (str "concerto.metamodel@1.0.0." expected)
             (:$class (one (str header kw " A { }"))))))))

(deftest abstract-extends-identified
  (is (true?  (:isAbstract (one (str header "abstract concept A { }")))))
  (is (false? (:isAbstract (one (str header "concept A { }")))))

  (testing "extends compiles to a TypeIdentifier"
    (is (= {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name "B"}
           (:superType (one (str header "concept A extends B { }"))))))

  (testing "identified by a named field"
    (is (= {:$class "concerto.metamodel@1.0.0.IdentifiedBy" :name "id"}
           (:identified (one (str header "asset A identified by id { o String id }"))))))

  (testing "and the bare form"
    (is (= {:$class "concerto.metamodel@1.0.0.Identified"}
           (:identified (one (str header "asset A identified { }")))))))

(deftest primitive-fields
  (doseq [[cto expected] [["String"   "StringProperty"]
                          ["Double"   "DoubleProperty"]
                          ["Integer"  "IntegerProperty"]
                          ["Long"     "LongProperty"]
                          ["DateTime" "DateTimeProperty"]
                          ["Boolean"  "BooleanProperty"]]]
    (testing cto
      (is (= (str "concerto.metamodel@1.0.0." expected)
             (:$class (prop (str header "concept A { o " cto " f }")))))))

  (testing "a non-primitive type is an ObjectProperty carrying a TypeIdentifier"
    (let [p (prop (str header "concept A { o Money f }"))]
      (is (= "concerto.metamodel@1.0.0.ObjectProperty" (:$class p)))
      (is (= {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name "Money"} (:type p)))))

  (testing "isArray and isOptional are always present"
    (let [p (prop (str header "concept A { o String f }"))]
      (is (false? (:isArray p)))
      (is (false? (:isOptional p))))
    (let [p (prop (str header "concept A { o String[] f optional }"))]
      (is (true? (:isArray p)))
      (is (true? (:isOptional p))))))

(deftest relationships
  (let [p (prop (str header "concept A { --> Party owner }"))]
    (is (= "concerto.metamodel@1.0.0.RelationshipProperty" (:$class p)))
    (is (= "owner" (:name p)))
    (is (= {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name "Party"} (:type p)))))

(deftest validators
  (testing "regex, with its flags"
    (is (= {:$class "concerto.metamodel@1.0.0.StringRegexValidator"
            :pattern "^[A-Z]{3}$" :flags ""}
           (:validator (prop (str header "concept A { o String f regex=/^[A-Z]{3}$/ }")))))
    (is (= "i" (:flags (:validator (prop (str header "concept A { o String f regex=/abc/i }")))))))

  (testing "length, including one-sided"
    (is (= {:$class "concerto.metamodel@1.0.0.StringLengthValidator" :minLength 1 :maxLength 10}
           (:lengthValidator (prop (str header "concept A { o String f length=[1,10] }")))))
    (is (= {:$class "concerto.metamodel@1.0.0.StringLengthValidator" :minLength 2}
           (:lengthValidator (prop (str header "concept A { o String f length=[2,] }"))))))

  (testing "numeric domains pick the validator from the property type"
    (is (= {:$class "concerto.metamodel@1.0.0.IntegerDomainValidator" :lower 0 :upper 100}
           (:validator (prop (str header "concept A { o Integer f range=[0,100] }")))))
    (is (= {:$class "concerto.metamodel@1.0.0.LongDomainValidator" :upper 500}
           (:validator (prop (str header "concept A { o Long f range=[,500] }")))))
    (is (= {:$class "concerto.metamodel@1.0.0.DoubleDomainValidator" :lower 0}
           (:validator (prop (str header "concept A { o Double f range=[0.0,] }"))))))

  (testing "a bound present on only one side is not mistaken for the other.

           `range=[,500]` and `range=[500,]` are the same token sequence apart
           from the comma, so the grammar names the bounds rather than relying
           on position."
    (is (= {:upper 500} (dissoc (:validator (prop (str header "concept A { o Long f range=[,500] }"))) :$class)))
    (is (= {:lower 500} (dissoc (:validator (prop (str header "concept A { o Long f range=[500,] }"))) :$class)))))

(deftest defaults
  (is (= "hi"  (:defaultValue (prop (str header "concept A { o String f default=\"hi\" }")))))
  (is (= 42    (:defaultValue (prop (str header "concept A { o Integer f default=42 }")))))
  (is (= true  (:defaultValue (prop (str header "concept A { o Boolean f default=true }")))))
  (is (= 1.5   (:defaultValue (prop (str header "concept A { o Double f default=1.5 }"))))))

(deftest numbers-match-the-json-path
  (testing "an integral double comes back as an integer, because JSON.stringify
           drops the .0 and a model parsed through the CLI loses it before we
           see it. The two parse paths must agree, or storing a registry and
           reading it back would depend on which parser wrote it."
    (is (= 0 (:lower (:validator (prop (str header "concept A { o Double f range=[0.0,] }"))))))
    (is (= 1.5 (:defaultValue (prop (str header "concept A { o Double f default=1.5 }")))))))

(deftest enums
  (let [e (one (str header "enum Colour { o RED o GREEN }"))]
    (is (= "concerto.metamodel@1.0.0.EnumDeclaration" (:$class e)))
    (is (= ["RED" "GREEN"] (mapv :name (:properties e))))
    (is (= "concerto.metamodel@1.0.0.EnumProperty" (:$class (first (:properties e)))))

    (testing "no isAbstract, matching the CLI"
      (is (not (contains? e :isAbstract))))))

(deftest scalars
  (let [s (one (str header "scalar CC extends String regex=/^[A-Z]{2}$/"))]
    (is (= "concerto.metamodel@1.0.0.StringScalar" (:$class s)))
    (is (= "CC" (:name s)))
    (is (= "^[A-Z]{2}$" (:pattern (:validator s)))))

  (is (= "concerto.metamodel@1.0.0.IntegerScalar"
         (:$class (one (str header "scalar N extends Integer range=[0,10]"))))))

(deftest decorators
  (testing "arguments are typed nodes, not bare values"
    (let [d (first (:decorators (prop (str header "concept A { @Form(\"type\", \"Title\", true, 3) o String f }"))))]
      (is (= "Form" (:name d)))
      (is (= [{:$class "concerto.metamodel@1.0.0.DecoratorString"  :value "type"}
              {:$class "concerto.metamodel@1.0.0.DecoratorString"  :value "Title"}
              {:$class "concerto.metamodel@1.0.0.DecoratorBoolean" :value true}
              {:$class "concerto.metamodel@1.0.0.DecoratorNumber"  :value 3}]
             (:arguments d)))))

  (testing "an identifier argument becomes a type reference"
    (let [d (first (:decorators (prop (str header "concept A { @Ref(Money) o String f }"))))]
      (is (= [{:$class  "concerto.metamodel@1.0.0.DecoratorTypeReference"
               :type    {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name "Money"}
               :isArray false}]
             (:arguments d)))))

  (testing "a decorator with no arguments has no :arguments key"
    (is (not (contains? (first (:decorators (one (str header "@template concept A { }"))))
                        :arguments))))

  (testing "declarations carry decorators too"
    (is (= ["template"] (mapv :name (:decorators (one (str header "@template asset A { }"))))))))

(deftest imports
  (let [imp #(first (:imports (p/parse-string (str "namespace test@1.0.0\n" % "\nconcept A { }"))))]
    (testing "a single type, with its uri"
      (is (= {:$class "concerto.metamodel@1.0.0.ImportType"
              :namespace "org.accordproject.contract@0.2.0"
              :name "Clause"
              :uri "https://models.accordproject.org/accordproject/contract@0.2.0.cto"}
             (imp "import org.accordproject.contract@0.2.0.Clause from https://models.accordproject.org/accordproject/contract@0.2.0.cto"))))

    (testing "several types"
      (is (= {:$class "concerto.metamodel@1.0.0.ImportTypes"
              :namespace "org.accordproject.runtime@0.2.0"
              :types ["Request" "Response"]}
             (imp "import org.accordproject.runtime@0.2.0.{Request, Response}"))))

    (testing "a whole namespace"
      (is (= {:$class "concerto.metamodel@1.0.0.ImportAll"
              :namespace "org.accordproject.money@0.3.0"}
             (imp "import org.accordproject.money@0.3.0.*"))))))

(deftest comments-and-whitespace
  (testing "line and block comments are not part of the model"
    (let [m (p/parse-string (str "// leading\n"
                                 "namespace test@1.0.0\n"
                                 "/* a block\n   over lines */\n"
                                 "concept A {\n  o String f // trailing\n}"))]
      (is (= "test@1.0.0" (:namespace m)))
      (is (= ["f"] (mapv :name (:properties (first (:declarations m)))))))))

(deftest feeds-the-registry-directly
  (testing "output is metamodel EDN, so it goes straight into a registry"
    (let [reg (mm/registry [(p/parse-string (str header "concept A { o String f }\nconcept B extends A { }"))])]
      (is (= ["test@1.0.0.B" "test@1.0.0.A"] (mm/super-chain reg "test@1.0.0.B"))))))

(deftest failure-is-reported
  (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                        #"Could not parse CTO"
                        (p/parse-string "this is not a model"))))
