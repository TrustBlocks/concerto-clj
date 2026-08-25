(ns com.trustblocks.concerto.parser
  "CTO text -> metamodel EDN, in Clojure.

  The same job `concerto.cto` does by shelling out to Accord's CLI, without
  Node. Correctness is defined by agreement with that CLI, not by this file:
  `parse-string` is checked against `concerto parse` over every model in the
  cicero-template-library.

  Locations are not emitted. The CLI includes byte offsets into the source text,
  which `metamodel/strip-locations` removes immediately; reproducing them to
  throw them away would be work for nothing."
  (:require [clojure.string :as str]
            [com.trustblocks.concerto.grammar :as grammar]
            [instaparse.core :as insta]))

(def ^:private mm "concerto.metamodel@1.0.0.")

(def primitive-types
  "CTO's built-in types, and the metamodel property each compiles to."
  {"String"   "StringProperty"
   "Double"   "DoubleProperty"
   "Integer"  "IntegerProperty"
   "Long"     "LongProperty"
   "DateTime" "DateTimeProperty"
   "Boolean"  "BooleanProperty"})

(def ^:private scalar-kinds
  {"String" "StringScalar" "Double" "DoubleScalar" "Integer" "IntegerScalar"
   "Long" "LongScalar" "DateTime" "DateTimeScalar" "Boolean" "BooleanScalar"})

(def ^:private domain-validators
  {"Integer" "IntegerDomainValidator"
   "Long"    "LongDomainValidator"
   "Double"  "DoubleDomainValidator"})

(def ^:private class-kinds
  {"asset"       "AssetDeclaration"
   "participant" "ParticipantDeclaration"
   "transaction" "TransactionDeclaration"
   "event"       "EventDeclaration"
   "concept"     "ConceptDeclaration"})

;; ---------------------------------------------------------------- tree utils

(defn- tag= [t node] (and (vector? node) (= t (first node))))
(defn- child [tag node] (first (filter #(tag= tag %) (rest node))))
(defn- children [tag node] (filterv #(tag= tag %) (rest node)))
(defn- text [node] (second node))
(defn- ident-of [node] (text (child :ident node)))

(defn- unquote-string [s]
  (-> s (subs 1 (dec (count s)))
      (str/replace #"\\(.)" (fn [[_ c]] (case c "n" "\n" "t" "\t" "r" "\r" c)))))

(declare number-value)

(defn- literal-value [node]
  (let [v (second node)]
    (cond
      (tag= :string-lit v)  (unquote-string (text v))
      (tag= :boolean-lit v) (= "true" (text v))
      (tag= :number v)      (number-value v)
      :else                 nil)))

(defn- number-value
  "A CTO number as EDN.

  An integral double comes back as an integer, because that is what the JSON
  path produces: `JSON.stringify(0.0)` is `\"0\"`, so a model parsed through
  Accord's CLI loses the distinction before we ever see it. Matching that keeps
  the two parse paths producing identical EDN -- which matters, because a
  registry is stored and read back, and switching parsers must not change what
  is in the database."
  [node]
  (let [s (text node)
        n #?(:clj (Double/parseDouble s) :cljs (js/parseFloat s))]
    (if (== n #?(:clj (long n) :cljs (js/Math.trunc n)))
      #?(:clj (long n) :cljs (js/Math.trunc n))
      n)))

(defn- type-identifier [nm] {:$class (str mm "TypeIdentifier") :name nm})

;; ---------------------------------------------------------------- decorators

(defn- ->decorator-argument
  "Decorator arguments are typed nodes, not bare values: a string becomes a
  DecoratorString, an identifier a DecoratorTypeReference."
  [node]
  (let [inner (second node)]
    (if (tag= :type-ref inner)
      {:$class  (str mm "DecoratorTypeReference")
       :type    (type-identifier (ident-of inner))
       :isArray (some? (child :array inner))}
      (let [v (literal-value inner)]
        {:$class (str mm (cond (string? v)  "DecoratorString"
                               (boolean? v) "DecoratorBoolean"
                               :else        "DecoratorNumber"))
         :value  v}))))

(defn- ->decorator [node]
  (let [args (child :decorator-args node)]
    (cond-> {:$class (str mm "Decorator") :name (ident-of node)}
      args (assoc :arguments (mapv ->decorator-argument (children :decorator-arg args))))))

(defn- decorators-of [node]
  (mapv ->decorator (children :decorator node)))

(defn- with-decorators [m node]
  (let [ds (decorators-of node)]
    (cond-> m (seq ds) (assoc :decorators ds))))

;; ---------------------------------------------------------------- validators

(defn- ->regex-validator [node]
  (let [raw   (text (child :regex-lit node))
        close (str/last-index-of raw "/")]
    {:$class  (str mm "StringRegexValidator")
     :pattern (subs raw 1 close)
     :flags   (subs raw (inc close))}))

(defn- bound [tag node]
  (when-let [b (child tag node)]
    (number-value (child :number b))))

(defn- ->domain-validator [node type-name]
  (let [lower (bound :lower node) upper (bound :upper node)]
    (cond-> {:$class (str mm (domain-validators type-name "IntegerDomainValidator"))}
      (some? lower) (assoc :lower lower)
      (some? upper) (assoc :upper upper))))

(defn- ->length-validator [node]
  (let [minl (bound :min-len node) maxl (bound :max-len node)]
    (cond-> {:$class (str mm "StringLengthValidator")}
      (some? minl) (assoc :minLength minl)
      (some? maxl) (assoc :maxLength maxl))))

;; ---------------------------------------------------------------- properties

(defn- ->field [node]
  (let [idents    (children :ident node)
        type-name (text (first idents))
        nm        (text (second idents))
        primitive (primitive-types type-name)
        v         (child :validator node)
        regex     (when v (child :regex-validator v))
        range-v   (when v (child :range-validator v))
        len       (child :length-validator node)
        d         (child :default node)]
    (cond-> {:$class     (str mm (or primitive "ObjectProperty"))
             :name       nm
             :isArray    (some? (child :array node))
             :isOptional (some? (child :optional node))}
      (nil? primitive) (assoc :type (type-identifier type-name))
      d       (assoc :defaultValue (literal-value (child :literal d)))
      regex   (assoc :validator (->regex-validator regex))
      range-v (assoc :validator (->domain-validator range-v type-name))
      len     (assoc :lengthValidator (->length-validator len))
      true    (with-decorators node))))

(defn- ->relationship [node]
  (let [idents (children :ident node)]
    (-> {:$class     (str mm "RelationshipProperty")
         :name       (text (second idents))
         :type       (type-identifier (text (first idents)))
         :isArray    (some? (child :array node))
         :isOptional (some? (child :optional node))}
        (with-decorators node))))

(defn- ->property [node]
  (let [inner (second node)]
    (if (tag= :relationship inner) (->relationship inner) (->field inner))))

;; -------------------------------------------------------------- declarations

(defn- ->enum [node]
  (-> {:$class     (str mm "EnumDeclaration")
       :name       (ident-of node)
       :properties (mapv (fn [v] (-> {:$class (str mm "EnumProperty") :name (ident-of v)}
                                     (with-decorators v)))
                         (children :enum-value node))}
      (with-decorators node)))

(defn- ->scalar [node]
  (let [kind  (ident-of (child :scalar-kind node))
        v     (child :validator node)
        regex (when v (child :regex-validator v))
        rng   (when v (child :range-validator v))
        len   (child :length-validator node)
        d     (child :scalar-default node)]
    (cond-> {:$class (str mm (scalar-kinds kind "StringScalar"))
             :name   (ident-of node)}
      d       (assoc :defaultValue (literal-value (child :literal d)))
      regex   (assoc :validator (->regex-validator regex))
      rng     (assoc :validator (->domain-validator rng kind))
      len     (assoc :lengthValidator (->length-validator len))
      true    (with-decorators node))))

(defn- ->map [node]
  (-> {:$class (str mm "MapDeclaration")
       :name   (ident-of node)
       :key    {:$class (str mm "ObjectMapKeyType")
                :type   (type-identifier (ident-of (child :map-key node)))}
       :value  {:$class (str mm "ObjectMapValueType")
                :type   (type-identifier (ident-of (child :map-value node)))}}
      (with-decorators node)))

(defn- ->class [node]
  (let [kind    (text (child :class-kind node))
        ext     (child :extends node)
        ided    (child :identified node)]
    (cond-> {:$class     (str mm (class-kinds kind))
             :name       (ident-of node)
             :isAbstract (some? (child :abstract node))
             :properties (mapv ->property (children :property node))}
      ext  (assoc :superType (type-identifier (ident-of ext)))
      ided (assoc :identified
                  (if (child :identified-by ided)
                    {:$class (str mm "IdentifiedBy")
                     :name   (ident-of (child :identified-by ided))}
                    {:$class (str mm "Identified")}))
      true (with-decorators node))))

(defn- ->declaration [node]
  (let [inner (second node)]
    (condp tag= inner
      :enum-decl   (->enum inner)
      :scalar-decl (->scalar inner)
      :map-decl    (->map inner)
      (->class inner))))

;; ------------------------------------------------------------------ imports

(defn- split-versioned
  "`org.accordproject.contract@0.2.0` -> itself. A trailing type name is already
  separated by the grammar."
  [s] s)

(defn- uri-of [node]
  (when-let [f (child :from-uri node)]
    (text (child :uri f))))

(defn- ->import [node]
  (let [inner (second node)
        ns-   (split-versioned (text (child :versioned-name inner)))
        uri   (uri-of inner)]
    (condp tag= inner
      :import-all
      (cond-> {:$class (str mm "ImportAll") :namespace ns-} uri (assoc :uri uri))

      :import-types
      (cond-> {:$class (str mm "ImportTypes") :namespace ns-
               :types  (mapv ident-of (children :import-item inner))}
        uri (assoc :uri uri)
        (some #(child :alias %) (children :import-item inner))
        (assoc :aliasedTypes
               (into [] (keep (fn [it]
                                (when-let [a (child :alias it)]
                                  {:$class      (str mm "AliasedType")
                                   :name        (ident-of it)
                                   :aliasedName (ident-of a)}))
                              (children :import-item inner)))))

      :import-type
      (cond-> {:$class (str mm "ImportType") :namespace ns- :name (ident-of inner)}
        uri (assoc :uri uri)))))

;; --------------------------------------------------------------------- model

(defn- ->model [tree]
  (let [v (child :version tree)]
    (cond-> {:$class       (str mm "Model")
             :decorators   (decorators-of tree)
             :namespace    (text (child :versioned-name (child :namespace-decl tree)))
             :imports      (mapv ->import (children :import tree))
             :declarations (mapv ->declaration (children :declaration tree))}
      v (assoc :concertoVersion (unquote-string (text (child :string-lit v)))))))

(defn parse-string
  "CTO source -> metamodel EDN. Throws with the parse failure when it will not
  parse."
  [src]
  (let [tree (grammar/parser src)]
    (when (insta/failure? tree)
      (throw (ex-info "Could not parse CTO" {:failure (insta/get-failure tree)})))
    (->model tree)))
