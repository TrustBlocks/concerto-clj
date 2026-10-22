(ns com.trustblocks.concerto.model-check
  "Is a *model* well formed? -- the questions Concerto's `ModelManager` answers
  when it loads one, as opposed to `malli`, which answers whether an *instance*
  conforms to a model that is taken to be sound.

  `check` takes metamodel EDN models (as `metamodel/json->edn` produces, before
  they are merged into a registry -- duplicate names and import conflicts
  disappear once merged) and returns a vector of problems, empty when the models
  are fine. A problem is data:

    {:rule    :CLASS_DECLARATION_012   ; the concerto-conformance rule id
     :class   \"IllegalModelException\" ; Concerto's exception class
     :message \"...\"}                  ; Concerto's wording, where it has one

  Problems come back in the order Concerto would meet them, so the first is the
  one it would throw: everything found while *reading* the models (names,
  unrecognised elements, validators) before anything found while *validating*
  them (duplicates, types that do not resolve, inheritance, identifiers).

  The rules follow concerto-core 5.2.1, read from its source rather than
  inferred, and each is exercised by concerto-conformance's `semantic/` suite.
  See README for what is not covered."
  (:require [clojure.string :as str]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.metamodel-schema :as schema]))

(def ^:private ^:dynamic *options*
  "The `ModelManager` options of the `check` in progress. Bound there, and read
  where a rule depends on one (decorator validation)."
  {})

;; ------------------------------------------------------------------ vocabulary

(def ^:private primitives #{"String" "Double" "Integer" "Long" "DateTime" "Boolean"})

(def ^:private class-kinds
  #{"ConceptDeclaration" "AssetDeclaration" "ParticipantDeclaration"
    "TransactionDeclaration" "EventDeclaration"})

(def ^:private scalar-kinds
  #{"StringScalar" "BooleanScalar" "DoubleScalar" "IntegerScalar" "LongScalar"
    "DateTimeScalar"})

(def ^:private declaration-kinds
  (into #{"EnumDeclaration" "MapDeclaration"} (concat class-kinds scalar-kinds)))

(def ^:private property-kinds
  #{"StringProperty" "BooleanProperty" "IntegerProperty" "LongProperty"
    "DoubleProperty" "DateTimeProperty" "ObjectProperty" "RelationshipProperty"})

(def ^:private system-types
  "Base types resolvable without an import: `concerto@1.0.0`'s."
  #{"Concept" "Asset" "Participant" "Transaction" "Event"})

(defn- builtin-model [namespace decls]
  {:$class "concerto.metamodel@1.0.0.Model"
   :namespace namespace
   :imports []
   :declarations
   (for [[nm super identified] decls]
     (cond-> {:$class "concerto.metamodel@1.0.0.ConceptDeclaration"
              :name nm :isAbstract true :properties []}
       super      (assoc :superType {:$class "concerto.metamodel@1.0.0.TypeIdentifier" :name super})
       identified (assoc :identified {:$class "concerto.metamodel@1.0.0.Identified"})))})

(def ^:private builtin-models
  "The two models a Concerto `ModelManager` always holds, which are not among
  the models handed to `check`. Every one is a plain ConceptDeclaration, even
  Asset and Participant -- so extending them places no kind restriction -- and
  Asset and Participant are system identified."
  [(builtin-model "concerto@1.0.0"
                  [["Concept" nil false] ["Asset" "Concept" true] ["Participant" "Concept" true]
                   ["Transaction" "Concept" false] ["Event" "Concept" false]])
   (builtin-model "concerto.decorator@1.0.0"
                  [["Decorator" "Concept" false] ["DotNetNamespace" "Decorator" false]])])

(def ^:private reserved-properties
  "Names a model may not declare. `$identifier` and `$timestamp` are assignable
  on an instance but still reserved in a declaration."
  #{"$class" "$identifier" "$timestamp" "$classDeclaration" "$namespace" "$type"
    "$modelManager" "$validator" "$identifierFieldName" "$imports" "$superTypes"
    "$id"})

(def ^:private id-pattern
  "`ModelUtil.ID_REGEX`: a Unicode identifier, `$` and `_` allowed, with `\\uXXXX`
  escapes. Written for the `u` flag, which JavaScript needs for `\\p{..}` and
  the JVM does not."
  (let [letters "\\p{Lu}|\\p{Ll}|\\p{Lt}|\\p{Lm}|\\p{Lo}|\\p{Nl}|\\$|_|\\\\u[0-9A-Fa-f]{4}"
        source  (str "^(?:" letters ")(?:" letters
                     "|\\p{Mn}|\\p{Mc}|\\p{Nd}|\\p{Pc}|\\u200C|\\u200D)*$")]
    #?(:clj  (re-pattern source)
       :cljs (js/RegExp. source "u"))))

(defn- valid-identifier? [s]
  (and (string? s) (boolean (re-find id-pattern s))))

(defn- kind [x] (mm/metamodel-type (:$class x)))

(defn- problem
  [rule message & {:keys [class type] :or {class "IllegalModelException"}}]
  (cond-> {:rule rule :class class :message message}
    type (assoc :type type)))

;; -------------------------------------------------------------------- resolving

(defn- fqn [model decl] (str (:namespace model) "." (:name decl)))

(defn- index
  "fqn -> {:decl :model} over every declaration of every model."
  [models]
  (into {}
        (for [m (concat builtin-models models), d (:declarations m)]
          [(fqn m d) {:decl d :model m}])))

(defn- explicit-imports
  "The name a model sees an import as -> {:ns :orig}, for ImportType and
  ImportTypes. An alias is the visible name; `orig` is what the other namespace
  calls it."
  [model]
  (into {}
        (for [i  (:imports model)
              [orig alias-] (case (kind i)
                              "ImportType"  [[(:name i) (:aliasedName i)]]
                              "ImportTypes" (let [aliases (into {} (map (juxt :name :aliasedName))
                                                                (:aliasedTypes i))]
                                              (map (fn [t] [t (get aliases t)]) (:types i)))
                              [])]
          [(or alias- orig) {:ns (:namespace i) :orig orig}])))

(defn- wildcard-imports [model]
  (for [i (:imports model) :when (= "ImportAll" (kind i))] (:namespace i)))

(defn- resolve-type
  "A TypeIdentifier as what it names: {:primitive n}, a {:decl :model} entry, or
  nil when nothing in the loaded models answers to it."
  [idx model {:keys [name namespace]}]
  (let [own (:namespace model)
        imp (get (explicit-imports model) name)]
    (cond
      (contains? primitives name) {:primitive name}
      (and namespace (not= namespace own)) (get idx (str namespace "." name))
      (get idx (str own "." name))         (get idx (str own "." name))
      imp                                  (get idx (str (:ns imp) "." (:orig imp)))
      :else (or (some #(get idx (str % "." name)) (wildcard-imports model))
                (when (contains? system-types name)
                  (get idx (str "concerto@1.0.0." name)))))))

(defn- entry-kind [e] (kind (:decl e)))

(defn- super-chain
  "Entries for a declaration's supertypes, nearest first. Stops at a base type, at
  something that does not resolve, and at a cycle."
  [idx {:keys [decl model]}]
  (loop [cur decl, cur-model model, seen #{(fqn model decl)}, out []]
    (if-let [sup (:superType cur)]
      (let [e (resolve-type idx cur-model sup)]
        (if (or (nil? e) (:primitive e))
          out
          (let [k (fqn (:model e) (:decl e))]
            (if (seen k)
              out
              (recur (:decl e) (:model e) (conj seen k) (conj out e))))))
      out)))

(defn- cyclic?
  "Whether following `:superType` from this declaration comes back to one it has
  already passed. Concerto 5.2.1 overflows the stack on such a model; it is
  reported here as the model error it is."
  [idx {:keys [decl model]}]
  (loop [cur decl, cur-model model, seen #{(fqn model decl)}]
    (when-let [sup (:superType cur)]
      (let [e (resolve-type idx cur-model sup)]
        (when (and e (:decl e))
          (let [k (fqn (:model e) (:decl e))]
            (or (contains? seen k)
                (recur (:decl e) (:model e) (conj seen k)))))))))

(defn- own-identifier
  "The identifying field this declaration itself names: its `identified by`
  field, `$identifier` for a system identifier, or nil."
  [decl]
  (let [i (:identified decl)]
    (case (kind i)
      "IdentifiedBy" (:name i)
      "Identified"   "$identifier"
      nil)))

(defn- identifier-of
  "The identifying field in force: this declaration's, else its nearest
  supertype's."
  [idx entry]
  (some (comp own-identifier :decl) (cons entry (super-chain idx entry))))

(defn- properties-of
  "Every property, supertypes' first, as Concerto's `getProperties` has it. A
  system identifier counts as a String property."
  [idx entry]
  (mapcat (fn [{:keys [decl]}]
            (concat (when (= "$identifier" (own-identifier decl))
                      [{:$class (str "concerto.metamodel@1.0.0.StringProperty")
                        :name "$identifier" :isOptional false}])
                    (:properties decl)))
          (reverse (cons entry (super-chain idx entry)))))

;; ------------------------------------------------------------------ validators

(defn- validator-error [owner-name owner-fqn message & {:keys [type]}]
  (problem nil
           (str "Validator error for field `" owner-name "`. " owner-fqn ": " message)
           :type (or type "DefaultValidatorException")))

(defn- regex-error
  "Why `pattern` + `flags` is not a RegExp, or nil. JavaScript's flags are
  d g i m s u v y; the pattern is compiled with the platform's own engine, which
  agrees with JavaScript's on what is malformed for any pattern a model is
  likely to carry."
  [pattern flags]
  (cond
    (not (every? (set "dgimsuvy") (or flags "")))
    (str "Invalid flags supplied to RegExp constructor '" flags "'")
    :else
    (try (#?(:clj re-pattern :cljs #(js/RegExp. %)) pattern)
         nil
         (catch #?(:clj Exception :cljs :default) e
           (str "Invalid regular expression: /" pattern "/: "
                ;; The JVM's message runs over several lines (pattern and caret).
                (first (str/split-lines (#?(:clj ex-message :cljs #(.-message %)) e))))))))

(defn- bounds-problem
  "Concerto's check of a pair of bounds: neither given, a negative one, or
  low > high. `nouns` names them in its messages."
  [lo hi {:keys [none negative order]}]
  (cond
    (and (nil? lo) (nil? hi))    none
    (and negative (or (neg? (or lo 0)) (neg? (or hi 0)))) negative
    (or (nil? lo) (nil? hi))     nil
    (> lo hi)                    order))

(defn- validators-problems
  "Problems in the validators of one property or scalar. `owner-kind` is its
  metamodel kind, which decides what its `validator` means."
  [owner-name owner-fqn owner-kind {:keys [validator lengthValidator sizeValidator]}]
  (let [err  (fn [message type] (validator-error owner-name owner-fqn message :type type))
        stringy? (#{"StringProperty" "StringScalar"} owner-kind)
        numeric? (#{"IntegerProperty" "LongProperty" "DoubleProperty"
                    "IntegerScalar" "LongScalar" "DoubleScalar"} owner-kind)]
    (concat
     (when (and stringy? lengthValidator)
       (when-let [m (bounds-problem
                     (:minLength lengthValidator) (:maxLength lengthValidator)
                     {:none "Invalid string length, minLength and-or maxLength must be specified."
                      :negative "minLength and-or maxLength must be positive integers."
                      :order "minLength must be less than or equal to maxLength."})]
         [(assoc (err m nil) :rule (if (str/includes? m "positive") :STRING_VALIDATOR_002
                                       (if (str/includes? m "less than") :STRING_VALIDATOR_003
                                           :STRING_VALIDATOR_001)))]))
     (when (and stringy? validator (= "StringRegexValidator" (kind validator)))
       (when-let [m (regex-error (:pattern validator) (:flags validator))]
         [(assoc (err m "RegexValidatorException") :rule :STRING_VALIDATOR_004)]))
     (when (and numeric? validator
                (#{"IntegerDomainValidator" "LongDomainValidator" "DoubleDomainValidator"}
                 (kind validator)))
       (when-let [m (bounds-problem
                     (:lower validator) (:upper validator)
                     {:none "Invalid range, lower and-or upper bound must be specified."
                      :order "Lower bound must be less than or equal to upper bound."})]
         [(assoc (err m nil) :rule (if (str/includes? m "Invalid range")
                                     :NUMBER_VALIDATOR_001 :NUMBER_VALIDATOR_002))]))
     (when sizeValidator
       (when-let [m (bounds-problem
                     (:minSize sizeValidator) (:maxSize sizeValidator)
                     {:none "Invalid collection size, minSize and/or maxSize must be specified."
                      :negative "minSize and/or maxSize must be positive integers."
                      :order "minSize must be less than or equal to maxSize."})]
         [(assoc (err m nil) :rule :COLLECTION_SIZE_005)])))))

;; ------------------------------------------------------------- reading a model

(defn- decorator-problems [decorated]
  (let [names (map :name (:decorators decorated))]
    (when-let [dup (some (fn [[n c]] (when (> c 1) n)) (frequencies names))]
      [(problem :DECORATED_001 (str "Duplicate decorator " dup))])))

;; ---------------------------------------------------------- decorator validation

(defn- json-text
  "`JSON.stringify` of a decorator argument, for the messages that quote one."
  [arg]
  (cond
    (string? arg) (str "\"" (str/replace arg "\"" "\\\"") "\"")
    (map? arg)    (str "{\"type\":\"Identifier\",\"name\":\"" (:name arg) "\",\"array\":"
                       (boolean (:array arg)) "}")
    :else         (str arg)))

(defn- argument-value
  "A metamodel decorator argument as Concerto's `Decorator` reads it: its value,
  or {:identifier? true :name .. :array ..} for a type reference."
  [a]
  (if (= "DecoratorTypeReference" (kind a))
    {:identifier? true :name (:name (:type a)) :array (:isArray a)}
    (:value a)))

(defn- js-typeof [v]
  (cond (string? v) "string" (number? v) "number" (boolean? v) "boolean" :else "object"))

(defn- assignable? [idx property-entry arg-entry]
  (let [target (when property-entry (fqn (:model property-entry) (:decl property-entry)))]
    (some #(= target (fqn (:model %) (:decl %))) (cons arg-entry (super-chain idx arg-entry)))))

(defn- decorator-validation-problems
  "`Decorator.validate`: with `:decoratorValidation` options set, every decorator
  must name a declared type (`:missingDecorator`) and its arguments must fit that
  type's properties (`:invalidDecorator`). A level of \"error\" is a problem;
  \"warning\" and \"off\" are not, as Concerto only logs them."
  [idx model decorated context]
  (let [{:keys [missingDecorator invalidDecorator]} (:decoratorValidation *options*)
        invalid? (= "error" invalidDecorator)]
    (when (or missingDecorator invalidDecorator)
      (mapcat
       (fn [d]
         (let [dn (:name d)
               e  (resolve-type idx model {:name dn})]
           (if-not (:decl e)
             (when (= "error" missingDecorator)
               [(problem :DECORATOR_001
                         (str "Undeclared type \"" dn "\" in \"" context "\""))])
             (when invalid?
               (let [props    (properties-of idx e)
                     required (remove :isOptional props)
                     all      (concat required (filter :isOptional props))
                     args     (map argument-value (:arguments d))
                     err      #(problem :DECORATOR_002 (str "Decorator " dn " " %))]
                 (concat
                  (when (< (count args) (count required))
                    [(err (str "has too few arguments. Required properties are: ["
                               (str/join "," (map :name required)) "]"))])
                  (mapcat
                   (fn [n arg]
                     (if (> (inc n) (count all))
                       [(err (str "has too many arguments. Properties are: ["
                                  (str/join "," (map :name all)) "]"))]
                       (let [prop (nth all n)
                             t    (:name (:type prop))
                             kind-of (kind prop)
                             expect (fn [word pred]
                                      (when-not (pred arg)
                                        [(err (str "has invalid decorator argument. Expected " word
                                                   ". Found " (js-typeof arg) ", with value "
                                                   (json-text arg)))]))]
                         (case kind-of
                           ("IntegerProperty" "DoubleProperty" "LongProperty") (expect "number" number?)
                           "StringProperty"  (expect "string" string?)
                           "BooleanProperty" (expect "boolean" boolean?)
                           (or (expect "object" :identifier?)
                               (let [te (resolve-type idx model {:name (:name arg)})]
                                 (cond
                                   (nil? te)
                                   [(err (str "references a type " (:name arg)
                                              " which has not been defined/imported."))]
                                   (not (assignable? idx (resolve-type idx model (:type prop)) te))
                                   [(err (str "references a type " (:name arg)
                                              " which cannot be assigned to the declared type "
                                              (when-let [pe (resolve-type idx model (:type prop))]
                                                (fqn (:model pe) (:decl pe)))))])))))))
                   (range) args)))))))
       (:decorators decorated)))))

(defn- property-read-problems
  "What Concerto finds while constructing a class's properties."
  [model decl]
  (let [cfqn (fqn model decl)]
    (mapcat
     (fn [p]
       (let [pk (kind p)]
         (cond
           (contains? reserved-properties (:name p))
           [(problem (if (= "$identifier" (:name p)) :CLASS_DECLARATION_001 :CLASS_DECLARATION_001)
                     (str "Invalid field name '" (:name p) "'"))]

           (not (contains? property-kinds pk))
           [(problem :PROPERTY_003 (str "Unrecognised model element \"" (:$class p) "\"."))]

           (not (valid-identifier? (:name p)))
           [(problem :MODEL_ELEMENT_002 (str "Invalid property name '" (:name p) "'"))]

           :else
           (validators-problems (:name p) (str cfqn "." (:name p)) pk p))))
     (:properties decl))))

(defn- declaration-read-problems [model decl]
  (let [k (kind decl)]
    (cond
      (not (contains? declaration-kinds k))
      [(problem :MODEL_ELEMENT_003 (str "Unrecognised model element \"" (:$class decl) "\"."))]

      (not (valid-identifier? (:name decl)))
      [(problem :MODEL_ELEMENT_002 (str "Invalid class name '" (:name decl) "'"))]

      (contains? class-kinds k)
      (if-not (sequential? (:properties decl))
        [(problem :CLASS_DECLARATION_013
                  (str "Properties of Class \"" (:name decl) "\" has to be defined."))]
        (property-read-problems model decl))

      (= "EnumDeclaration" k)
      (for [p (:properties decl) :when (not (valid-identifier? (:name p)))]
        (problem :MODEL_ELEMENT_002 (str "Invalid property name '" (:name p) "'")))

      (contains? scalar-kinds k)
      (concat
       (when (contains? primitives (:name decl))
         [(problem :SCALAR_DECLARATION_001
                   (str "Invalid scalar name '" (:name decl) "'. Name conflicts with primitive type."))])
       (validators-problems (:name decl) (fqn model decl) k decl))

      (= "MapDeclaration" k)
      (cond
        (or (nil? (:key decl)) (nil? (:value decl)))
        [(problem :MAP_DECLARATION_002
                  (str "MapDeclaration must contain Key & Value properties " (:name decl)))]
        (not (#{"StringMapKeyType" "DateTimeMapKeyType" "ObjectMapKeyType"} (kind (:key decl))))
        [(problem :MAP_KEY_TYPE_001
                  (str "MapDeclaration must contain valid MapKeyType  " (:name decl)))]
        (not (#{"BooleanMapValueType" "DateTimeMapValueType" "StringMapValueType"
                "IntegerMapValueType" "LongMapValueType" "DoubleMapValueType"
                "ObjectMapValueType" "RelationshipMapValueType"} (kind (:value decl))))
        [(problem :MAP_VALUE_TYPE_001
                  (str "MapDeclaration must contain valid MapValueType, for MapDeclaration " (:name decl)))])

      :else nil)))

(defn- namespace-problems
  "Found while reading a model: it must be versioned, and may not import with a
  wildcard. Both are plain `Error`s in Concerto, not IllegalModelExceptions."
  [model]
  (concat
   (when-not (str/includes? (str (:namespace model)) "@")
     [(problem :MODEL_FILE_001
               (str "Cannot create a ModelFile with an unversioned namespace: " (:namespace model)
                    ". All models must specify a version (e.g., @1.0.0).")
               :class "Error")])
   (when (some #(= "ImportAll" (kind %)) (:imports model))
     [(problem :MODEL_FILE_001 "Wildcard Imports are not permitted." :class "Error")])))

(defn- unexpected-properties
  "The first AST node, depth first, carrying a property its metamodel class does
  not declare, as [class [names...]]."
  [x]
  (cond
    (map? x)
    (or (when-let [c (mm/metamodel-type (:$class x))]
          (when-let [allowed (get schema/properties c)]
            (let [extra (sort (remove (set allowed) (map name (keys x))))]
              (when (seq extra) [(:$class x) extra]))))
        (some unexpected-properties (vals x)))
    (sequential? x) (some unexpected-properties x)))

(defn- metamodel-validation-problems [model]
  (when-let [[c extra] (unexpected-properties model)]
    [(problem :METAMODEL_001
              (str "Unexpected properties for type " c ": " (str/join ", " extra))
              :class "MetamodelException")]))

(defn- import-problems
  "`ModelFile.validate`'s import loop: each import must name a loaded namespace
  that declares the type, and one namespace may not be imported at two versions."
  [idx model]
  (let [loaded (into #{} (map #(:namespace (:model %))) (vals idx))
        pairs  (for [i (:imports model)
                     nm (case (kind i)
                          "ImportType"  [(:name i)]
                          "ImportTypes" (:types i)
                          [])]
                 [(:namespace i) nm])]
    (loop [ps pairs, seen {}]
      (when-let [[ns- nm] (first ps)]
        (let [[base version] (str/split ns- #"@" 2)
              earlier (get seen base)]
          (cond
            (not (contains? loaded ns-))
            [(problem :MODEL_FILE_001 (str "Namespace is not defined for type \"" ns- "." nm "\"."))]

            (and (not= "concerto" base) earlier (not= earlier version))
            [(problem :MODEL_FILE_004
                      (str "Importing types from different versions (\"" earlier "\", \"" version
                           "\") of the same namespace \"" ns- "\" is not permitted."))]

            (not (contains? idx (str ns- "." nm)))
            [(problem :MODEL_FILE_001 (str "Type \"" nm "\" is not defined in namespace \"" ns- "\"."))]

            :else (recur (rest ps) (assoc seen base version))))))))

(defn- metamodel-problems [model]
  (let [versions (mm/metamodel-versions model)
        bad      (remove mm/supported-metamodel-versions versions)]
    (for [v (sort bad)]
      (problem :METAMODEL_002
               (str "Model file version " v " does not match metamodel version "
                    (str/join ", " (sort mm/supported-metamodel-versions)))
               :class "MetamodelException"))))

;; ----------------------------------------------------------- validating a model

(defn- undeclared [context ident]
  (problem nil (str "Undeclared type \"" (:name ident) "\" in \"" context "\"")))

(defn- relationship-problems [idx model p context]
  (let [t (:type p)]
    (cond
      (nil? t) [(problem :RELATIONSHIP_001 "Relationship must have a type")]
      (contains? primitives (:name t))
      [(problem :RELATIONSHIP_001
                (str "Relationship " (:name p) " cannot be to the primitive type " (:name t)))]
      :else
      (let [e (resolve-type idx model t)]
        (cond
          (nil? e) [(assoc (undeclared context t) :rule :RELATIONSHIP_002)]
          (nil? (identifier-of idx e))
          [(problem :RELATIONSHIP_003
                    (str "Relationship " (:name p) " must be to a class that has an identifier, but this is to "
                         (fqn (:model e) (:decl e))))])))))

(defn- property-validate-problems [idx model decl p]
  (let [context (str "property " (fqn model decl) "." (:name p))
        t       (:type p)
        pk      (kind p)
        e       (when t (resolve-type idx model t))]
    (cond
      (and t (nil? e)) [(assoc (undeclared context t) :rule :PROPERTY_002)]

      (and (:sizeValidator p) (not (:isArray p)) (not= "MapDeclaration" (some-> e :decl kind)))
      [(problem :COLLECTION_SIZE_006
                (str "size validator can only be applied to array or map properties: "
                     (fqn model decl) "." (:name p)))]

      (= "RelationshipProperty" pk) (relationship-problems idx model p context))))

(defn- identifier-problems [idx entry]
  (let [{:keys [decl model]} entry
        id (own-identifier decl)]
    (when (and id (not= "$identifier" id))
      (let [prop (first (filter #(= id (:name %)) (properties-of idx entry)))]
        (if-not prop
          [(problem :CLASS_DECLARATION_005
                    (str "Class \"" (:name decl) "\" is identified by field \"" id
                         "\", but does not contain this property."))]
          (let [t   (:type prop)
                e   (when (= "ObjectProperty" (kind prop)) (resolve-type idx model t))
                string? (or (= "StringProperty" (kind prop))
                            (= "StringScalar" (some-> e :decl kind)))]
            (cond
              (not string?)
              [(problem :CLASS_DECLARATION_005
                        (str "Class \"" (:name decl) "\" is identified by field \"" id
                             "\", but the type of the field is not \"String\"."))]

              (:isOptional prop)
              [(problem :CLASS_DECLARATION_006 "Identifying fields cannot be optional.")])))))))

(defn- inheritance-identifier-problems
  "A subclass may not redeclare an identifier its supertype already fixed."
  [idx {:keys [decl] :as entry}]
  (when-let [id (own-identifier decl)]
    (when (and (not= id "$identifier") (:superType decl))
      (let [sup (resolve-type idx (:model entry) (:superType decl))]
        (when (and sup (:decl sup))
          (let [sup-id (identifier-of idx sup)]
            (when sup-id
              (let [explicit? (not= "$identifier" sup-id)
                    own-system? (= "$identifier" id)]
                (when (if own-system? false explicit?)
                  [(problem :CLASS_DECLARATION_011
                            (str "Super class " (fqn (:model sup) (:decl sup))
                                 " has an explicit identifier " sup-id
                                 " that cannot be redeclared."))])))))))))

(defn- system-identified-super-problems
  "A system-identified (`identified`) class may only extend one that is too."
  [idx {:keys [decl] :as entry}]
  (when (and (= "$identifier" (own-identifier decl)) (:superType decl))
    (let [sup (resolve-type idx (:model entry) (:superType decl))]
      (when (and sup (:decl sup))
        (let [sup-id (identifier-of idx sup)]
          (when (and sup-id (not= "$identifier" sup-id))
            [(problem :CLASS_DECLARATION_007
                      (str "Super class " (fqn (:model sup) (:decl sup))
                           " has an explicit identifier " sup-id
                           " that cannot be redeclared."))]))))))

(defn- class-validate-problems [idx {:keys [decl model] :as entry}]
  (let [self (:name decl)
        sup  (:superType decl)
        sup-e (when sup (resolve-type idx model sup))]
    (concat
     (cond
       (and sup (= (:name sup) self) (not (contains? system-types self)))
       [(problem :CLASS_DECLARATION_009 (str "Class \"" self "\" cannot extend itself."))]

       (cyclic? idx entry)
       [(problem :CLASS_DECLARATION_009
                 (str "Class \"" self "\" has a cyclic supertype chain."))]

       (and sup (nil? sup-e))
       [(problem :CLASS_DECLARATION_004 (str "Could not find super type " (:name sup)))]

       (and sup-e (not= "ConceptDeclaration" (entry-kind sup-e))
            (not= (kind decl) (entry-kind sup-e)))
       [(problem :CLASS_DECLARATION_012
                 (str (kind decl) " (" self ") cannot extend " (entry-kind sup-e)
                      " (" (:name (:decl sup-e)) ")"))])
     (identifier-problems idx entry)
     (inheritance-identifier-problems idx entry)
     (system-identified-super-problems idx entry)
     (let [names (map :name (properties-of idx entry))
           dup   (some (fn [[n c]] (when (> c 1) n)) (frequencies names))]
       (when dup
         [(problem :CLASS_DECLARATION_008
                   (str "Class \"" self "\" has more than one field named \"" dup "\"."))]))
     (mapcat (fn [p]
               (concat (decorator-validation-problems
                        idx model p (str (fqn model decl) "." (:name p)))
                       (decorator-problems p)
                       (property-validate-problems idx model decl p)))
             (:properties decl)))))

(defn- map-validate-problems [idx {:keys [decl model]}]
  (let [{:keys [key value]} decl
        mfqn (fqn model decl)]
    (concat
     (when (= "ObjectMapKeyType" (kind key))
       (let [t  (:name (:type key))
             e  (resolve-type idx model (:type key))
             ok (and e (#{"StringScalar" "DateTimeScalar"} (some-> e :decl kind)))]
         (when (and (not (contains? primitives t)) (not ok))
           [(problem :MAP_KEY_TYPE_001
                     (str "Scalar must be one of StringScalar, DateTimeScalar in context of MapKeyType. Invalid Scalar: "
                          t ", for MapDeclaration " (:name decl)))])))
     (when (#{"ObjectMapValueType" "RelationshipMapValueType"} (kind value))
       (let [t (:type value)
             e (resolve-type idx model t)]
         (cond
           (contains? primitives (:name t)) nil
           (nil? e) [(assoc (undeclared (str "the value of map " mfqn) t) :rule :MAP_VALUE_TYPE_001)]
           (and (= "RelationshipMapValueType" (kind value))
                (nil? (identifier-of idx e)))
           [(problem :RELATIONSHIP_003
                     (str "Relationship " (:name decl) " must be to a class that has an identifier, but this is to "
                          (fqn (:model e) (:decl e))))]
           (= "MapDeclaration" (some-> e :decl kind))
           [(problem :MAP_VALUE_TYPE_002
                     (str "MapDeclaration as Map Type Value is not supported: " (:name t)))]))))))

(defn- imported-clash-problems [model decl]
  (when (contains? (explicit-imports model) (:name decl))
    [(problem :DECLARATION_002
              (str "Type '" (:name decl) "' clashes with an imported type with the same name."))]))

(defn- declaration-validate-problems [idx model decl]
  (let [entry {:decl decl :model model}]
    (concat
     (decorator-validation-problems idx model decl (fqn model decl))
     (decorator-problems decl)
     (imported-clash-problems model decl)
     (cond
       (contains? class-kinds (kind decl)) (class-validate-problems idx entry)
       (= "MapDeclaration" (kind decl))    (map-validate-problems idx entry)))))

(defn- duplicate-problems [model]
  (let [names (map #(fqn model %) (:declarations model))]
    (when-let [dup (some (fn [[n c]] (when (> c 1) n)) (frequencies names))]
      [(problem :DECLARATION_001 (str "Duplicate class name " dup))])))

;; ------------------------------------------------------------------------- API

(defn check
  "Problems with `models`, a seq of metamodel EDN `Model`s in load order, as a
  vector in the order Concerto would meet them; empty when they are sound.

  Options: `:options` -- the `ModelManager` options (`:decoratorValidation`);
  `:validate-on-load` -- the seq of booleans saying, per model, whether it was
  validated as it was added, which is when `:metamodelValidation` applies."
  [models & {:keys [options validate-on-load]}]
  (let [idx (index models)]
   (binding [*options* (or options {})]
    (vec
     (concat
      (mapcat metamodel-problems models)
      ;; reading each model
      (for [m models, p (namespace-problems m)] p)
      (for [[m validated?] (map vector models (concat validate-on-load (repeat false)))
            :when (and validated? (:metamodelValidation options))
            p (metamodel-validation-problems m)]
        p)
      (for [m models, d (:declarations m), p (declaration-read-problems m d)] p)
      ;; validating them
      (for [m models
            p (concat (import-problems idx m)
                      (duplicate-problems m)
                      (mapcat #(declaration-validate-problems idx m %) (:declarations m)))]
        p))))))

(defn check!
  "`check`, throwing the first problem as an `ex-info` whose data is the problem
  -- `:rule`, `:class`, `:message` -- the way Concerto throws on load. Returns
  `models` when they are sound, so it threads."
  [models & opts]
  (if-let [p (first (apply check models opts))]
    (throw (ex-info (:message p) p))
    models))
