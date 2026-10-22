(ns com.trustblocks.concerto.malli
  "Compile a Malli schema from a Concerto declaration.

  Concerto and Malli both flatten inheritance into one flat set of properties,
  so the two line up field for field -- but only because `$class` is retained to
  name the leaf type. Never infer the subtype structurally; always drive it from
  `$class`.

  `key-fn` maps a Concerto property name to whatever key the caller wants,
  including the `$` sigil names. The default, `keyword`, preserves Concerto's
  spelling exactly (`:$class`, `:businessDays`), which is lossless and needs no
  reverse mapping. A storage adapter passes its own -- XTDB, for instance, reads
  `$` as a namespace separator and lowercases camelCase, so it supplies a
  function that kebab-cases and rewrites `$class` to `:concerto/class`. Keeping
  that out of here is the whole point of the split."
  (:require [clojure.string :as str]
            [clojure.walk :as walk]
            [com.trustblocks.concerto.metamodel :as mm]
            [malli.core :as m]
            [malli.util :as mu]))

(def scalar
  "Concerto primitive property `$class` -> Malli schema.

  Non-trivial types are emitted as *named* schemas resolved from `registry*`
  rather than inline. That keeps `m/form` output pure EDN that reads back, and
  it keeps a schema dump legible: `:concerto/date-time` says what it is, an
  inline `[:fn #object[...]]` says nothing and round-trips through nothing."
  {"StringProperty"   :string
   "BooleanProperty"  :boolean
   "DoubleProperty"   :concerto/double
   "IntegerProperty"  :int
   ;; Long is 64-bit in the spec but only 2^53-safe in Concerto's JS runtime.
   ;; On the JVM it survives as a 64-bit integer; in JavaScript it does not,
   ;; and JSON.parse has already destroyed the value before any validator sees
   ;; it. That loss is only detectable from a platform that does not suffer it.
   "LongProperty"     :int
   "DateTimeProperty" :concerto/date-time})

(def date-time-pattern
  "Concerto's DateTime envelope, as observed rather than as specified.

  `concerto validate` accepts a good deal more than ISO-8601: a bare year, the
  basic form `20190120`, a space instead of `T`, a leading `+`, a trailing `T`
  with no time, and a date-only `2019-13-45` with no calendar check. It draws
  the line at time components -- hour 25, minute 99, second 60 and a date-only
  form promoted to a full timestamp are all rejected. Each case here was run
  through the CLI; the test suite carries the whole table.

  Assembled from parts rather than written as one literal because JavaScript
  regular expressions have no free-spacing mode. Nothing here uses lookbehind,
  named groups or flags, so the JVM and JS engines give identical answers --
  which is the point: a date must not be valid on the server and invalid in the
  browser."
  (let [yyyy  "\\+?\\d{4}"
        loose "(?:-?\\d{2}(?:-?\\d{2})?)?"
        mm    "(?:0[1-9]|1[0-2])"
        dd    "(?:0[1-9]|[12]\\d|3[01])"
        hh    "(?:[01]\\d|2[0-3])"
        nn    "[0-5]\\d"
        time  (str "(?:" hh "(?::?" nn "(?::?" nn "(?:\\.\\d+)?)?)?)?")
        zone  "(?:Z|[+-](?:[01]\\d|2[0-3]):?[0-5]\\d)?"]
    (re-pattern (str "^(?:" yyyy loose
                     "|" yyyy "-?" mm "-?" dd "[T ]" time zone ")$"))))

(def date-time
  "Concerto DateTime, checked on the wire form rather than by parsing.

  A DateTime *is* an ISO-8601 string in Concerto's JSON; parsing it into a
  platform type is a separate concern and a lossy one. `js/Date` drops the
  offset and everything below milliseconds, `java.time.OffsetDateTime` keeps
  both -- so a schema written in terms of parsed values would accept different
  documents depending on where it ran. Checking the text keeps the verdict the
  same everywhere.

  An earlier version accepted any string at all, plus JVM date objects. That
  passed \"hello\" and \"\", which Concerto rejects, and admitted types with no
  JavaScript counterpart."
  [:and :string [:re {:error/message "should be a date-time"} date-time-pattern]])

(def double-like
  "Concerto Double. JSON has no int/double distinction for whole numbers, so a
  Double field commonly arrives as `85` rather than `85.0`, and Concerto's own
  validator accepts that -- `:double` would be stricter than the spec.

  Written as a predicate rather than `[:or :int :double]` so the humanized
  failure is one clear line. The `:or` form reports every branch it tried
  (\"should be an integer\", \"should be a double\"), which reads as a
  contradiction rather than an explanation."
  [:fn {:error/message "should be a number"} number?])

(def map-key
  "A map key, which arrives as a keyword once `instance/json->edn` has walked
  the instance: that keywordizes every key, entry keys of a Concerto map
  included, and a map key is data, not a property name, so `key-fn` does not
  apply to it. A string is accepted too, for an instance built by hand."
  [:or :string :keyword])

(def string-key
  "`[:concerto/string-key child]`: a keyword or string whose text satisfies
  `child`. A map's keys are strings in Concerto but keywords once
  `instance/json->edn` has walked an instance, and a regex or date-time schema
  only accepts strings.

  A registered schema type rather than an inline `:fn`, so a dumped schema is
  still pure EDN and reads back given `registry*`."
  (m/-simple-schema
   {:type    :concerto/string-key
    :min     1
    :max     1
    :compile (fn [_ [child] options]
               (let [valid? (m/validator child options)]
                 {:pred (fn [k]
                          (and (or (string? k) (keyword? k))
                               (valid? (if (keyword? k) (subs (str k) 1) k))))}))}))

(def date-time-key
  "A DateTime map key. Unlike a DateTime value, Concerto 5 still checks a key
  with the older, looser parser -- `2019` and `2020-13-45` are accepted as keys
  by 5.2.1, as by 3.x -- so `->schema`'s strict swap leaves this one alone."
  date-time)

(def date-time-strict-pattern
  "Concerto 5's DateTime envelope: `YYYY-MM-DDTHH:mm:ss[.f+]` and a `Z` or
  `+/-HH:MM` offset, nothing else. Month, day, hour, minute and second are
  range-checked here; whether the day exists in that month is not something a
  regular expression can say, and is `real-date?`'s job.

  Every shape 3.x accepted and 5.x does not -- a bare year, `20190120`, no
  offset, no seconds, a space for the `T`, a leading `+` -- is covered by the
  test table."
  #"^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$")

(defn- real-date?
  "Whether the `YYYY-MM-DD` at the front of `s` is a Gregorian date that exists.
  Concerto 5 rejects `2019-02-29` and `2019-04-31`; 3.x accepted both."
  [s]
  (let [n     #(#?(:clj Long/parseLong :cljs js/parseInt) (subs s %1 %2) 10)
        y     (n 0 4)
        mo    (n 5 7)
        d     (n 8 10)
        leap? (and (zero? (mod y 4)) (or (pos? (mod y 100)) (zero? (mod y 400))))]
    (<= d ([31 (if leap? 29 28) 31 30 31 30 31 31 30 31 30 31] (dec mo)))))

(def date-time-strict
  "Concerto 5 DateTime. Selected by `->schema`'s `:concerto-version 5`; the
  looser `date-time` stays the default because it is what 3.x and 4.x enforce."
  [:and :string
   [:re {:error/message "should be a date-time"} date-time-strict-pattern]
   [:fn {:error/message "should be a date that exists"} real-date?]])

(def registry*
  "Malli registry: the defaults, malli.util's :merge/:select-keys, and the
  Concerto-specific named schemas. Supply this when reading an exported schema
  back, or `:concerto/date-time` will not resolve."
  (merge (m/default-schemas)
         (mu/schemas)
         {:concerto/date-time     date-time
          :concerto/double        double-like
          :concerto/map-key       map-key
          :concerto/string-key    string-key
          :concerto/date-time-key date-time-key
          :concerto/date-time-strict date-time-strict}))

;; ---------------------------------------------------------------- the model

(defn- declaration-of [reg fqn] (get-in reg [fqn :declaration]))

(defn- declaration-kind [reg fqn]
  (mm/metamodel-type (:$class (declaration-of reg fqn))))

(defn- enum? [reg fqn]
  (= "EnumDeclaration" (declaration-kind reg fqn)))

(def scalar-declarations
  "Concerto 3 scalar declarations -- a named primitive, optionally constrained.

  A scalar is a *value*, not a tagged object, so it inlines as its underlying
  type rather than compiling to a map or being referenced. Treating one as a
  concept produced a closed map with only `$class`, which rejected the plain
  string a scalar actually is."
  {"StringScalar"   :string
   "BooleanScalar"  :boolean
   "DoubleScalar"   :concerto/double
   "IntegerScalar"  :int
   "LongScalar"     :int
   "DateTimeScalar" :concerto/date-time})

(def map-like-declarations
  "Declaration kinds that compile to a Malli map -- those that describe a tagged
  object with properties. Enums compile to `:enum` and are handled separately."
  #{"ConceptDeclaration" "AssetDeclaration" "TransactionDeclaration"
    "ParticipantDeclaration" "EventDeclaration"})

(defn- check-compilable!
  "Raise unless `fqn` is a declaration kind this library can turn into a schema.

  Without this, anything with a `$class` that was not an enum fell through to
  being compiled as a map. A `scalar CountryCode extends String` therefore
  became a closed map with only `$class`, so a perfectly valid \"US\" was
  reported as an invalid type -- a false rejection of data Concerto accepts.

  Naming the unsupported kind turns that into an answer. It also means the next
  declaration kind Concerto introduces stops the compile instead of quietly
  producing a schema that describes nothing."
  [reg fqn]
  (let [kind (declaration-kind reg fqn)]
    (when-not (or (contains? map-like-declarations kind)
                  (contains? scalar-declarations kind)
                  (contains? #{"EnumDeclaration" "MapDeclaration"} kind))
      (throw (ex-info (str "Cannot compile declaration " (pr-str fqn) " of kind "
                           (pr-str kind) ". This library handles concepts, assets, "
                           "transactions, participants, events, enums, scalars and "
                           "maps. Refusing to emit a schema rather than guess at "
                           "one.")
                      {:declaration fqn
                       :kind        kind
                       :supported   (sort (into #{"EnumDeclaration" "MapDeclaration"}
                                                (concat map-like-declarations
                                                        (keys scalar-declarations))))})))))

;; ---------------------------------------------------------------- validators

(def ^:private portable-regex-flags
  "Regex flags with the same meaning on both engines.

  Concerto's regexes are JavaScript regexes -- `{pattern, flags}` is literally
  `new RegExp(...)`. `g` and `y` do not affect a membership test, but `u`
  changes matching semantics and has no equivalent meaning as a JVM inline flag,
  so it is refused rather than dropped: silently discarding a flag would change
  what the pattern accepts."
  #{\i \m \s})

(defn- regex-schema [{:keys [pattern flags]}]
  (let [flags (or flags "")
        bad   (remove portable-regex-flags flags)]
    (when (seq bad)
      (throw (ex-info (str "Unsupported regex flag(s) " (pr-str (apply str bad))
                           " in pattern " (pr-str pattern)
                           ". Only i, m and s carry the same meaning on the JVM "
                           "and in JavaScript; dropping a flag would silently "
                           "change what the pattern accepts.")
                      {:pattern pattern :flags flags :unsupported (apply str bad)})))
    ;; Emitted as a string, not a compiled pattern. Malli's :re accepts either,
    ;; but #"..." is a Clojure reader literal and not EDN -- a compiled pattern
    ;; here would break the round-trip that the rest of the schema guarantees.
    ;;
    ;; ClojureScript's re-pattern lifts a leading (?flags) group into RegExp
    ;; flags, and the JVM reads the same thing as an inline flag, so one
    ;; spelling serves both. Concerto tests for a match anywhere in the string,
    ;; which is what Malli's :re does too -- neither anchors.
    [:re (if (seq flags) (str "(?" flags ")" pattern) pattern)]))

(defn- domain-schemas [{:keys [lower upper]}]
  (cond-> []
    (some? lower) (conj [:>= lower])
    (some? upper) (conj [:<= upper])))

(defn- length-schema [{:keys [minLength maxLength]}]
  [:string (cond-> {}
             (some? minLength) (assoc :min minLength)
             (some? maxLength) (assoc :max maxLength))])

(defn- size-schema
  "Malli `:sequential` properties (`:min`/`:max`) for a `sizeValidator` node.

  Unlike `length-schema` and `domain-schemas`, this does not go through
  `validator-schemas`/`constrained`: those apply to *each element*, and a size
  validator constrains the collection itself, so it has to be applied after
  `:sequential` wraps the element schema rather than before.

  Both checks below are enforced by Concerto's `ModelManager` when a model is
  loaded, not by the CTO parser `concerto.cto` shells out to -- `concerto
  parse` accepts `size=[10,5]`, and accepts a size validator on a
  non-collection property, without complaint. Nothing upstream of this
  compiler catches either, so both are checked here, against the exact
  wording `concerto-conformance`'s semantic suite expects."
  [{:keys [minSize maxSize] :as sv} prop]
  (when-not (:isArray prop)
    (throw (ex-info (str "size validator can only be applied to array or map "
                         "properties. Property " (pr-str (:name prop)) " is neither.")
                    {:property (:name prop) :sizeValidator sv})))
  (when (and (some? minSize) (some? maxSize) (< maxSize minSize))
    (throw (ex-info (str "minSize must be less than or equal to maxSize"
                         " (property " (pr-str (:name prop))
                         ", minSize " minSize ", maxSize " maxSize ")")
                    {:property (:name prop) :minSize minSize :maxSize maxSize})))
  (cond-> {}
    (some? minSize) (assoc :min minSize)
    (some? maxSize) (assoc :max maxSize)))

(defn- validator-schemas
  "Extra schemas contributed by one validator node, or nil."
  [validator]
  (when validator
    (case (mm/metamodel-type (:$class validator))
      "StringRegexValidator"  [(regex-schema validator)]
      "StringLengthValidator" [(length-schema validator)]
      ("IntegerDomainValidator" "LongDomainValidator" "DoubleDomainValidator")
      (domain-schemas validator)
      (throw (ex-info (str "Unknown validator " (pr-str (:$class validator))
                           ". Refusing to emit a schema that would ignore it.")
                      {:validator validator})))))

(defn- constrained
  "Apply a node's validators to its compiled schema.

  Base first, so that `:and` short-circuits before a bound is compared against
  something that is not a number. Concerto carries the length constraint in a
  separate `lengthValidator` field from the regex in `validator`, and a property
  may have both."
  [base node]
  (let [extra (concat (validator-schemas (:validator node))
                      (validator-schemas (:lengthValidator node)))]
    (if (seq extra) (into [:and base] extra) base)))

(defn- enum-values [reg fqn]
  (into [:enum] (map :name) (:properties (declaration-of reg fqn))))

(defn- abstract? [reg fqn]
  (boolean (:isAbstract (declaration-of reg fqn))))

(defn- subtype-index
  "fqn -> concrete declarations assignable to it, itself included when concrete.

  Concerto is nominally typed and permits polymorphism, so a property declared
  as `Clause` legitimately holds any concrete subclass of Clause. Validating
  such a value against Clause's own schema would reject the subclass's extra
  properties -- which is exactly the false rejection that closing the maps would
  otherwise introduce. Built once per compilation and sorted, so the emitted
  schema is deterministic."
  [reg]
  (reduce (fn [acc f]
            (if (abstract? reg f)
              acc
              (reduce (fn [acc ancestor] (update acc ancestor (fnil conj []) f))
                      acc
                      (mm/super-chain reg f))))
          {}
          (sort (keys reg))))

(declare object-schema)

(def ^:private ^:dynamic *strict*
  "True while compiling for Concerto 5, whose validator enforces a scalar's own
  constraints on map keys. Bound by `->schema`."
  false)

(def ^:private ^:dynamic *maps-in-progress*
  "Map declarations being compiled, outermost first. A map is inlined where it
  is used rather than referenced, so one whose value type leads back to itself
  would inline forever."
  #{})

(defn- map-key-schema
  "Schema for a map's keys.

  Concerto allows String, DateTime, or a scalar over either. What it checks of a
  scalar key depends on the version: 3.x and 4.x hold the key to the underlying
  primitive only -- `concerto validate` accepts `USA` as a key of a map keyed by
  `scalar Code extends String regex=/^[A-Z]{2}$/` -- while 5.x enforces the
  scalar's constraints as well. `*strict*` selects between them."
  [reg fqn {:keys [$class type]}]
  (case (mm/metamodel-type $class)
    "StringMapKeyType"   :concerto/map-key
    "DateTimeMapKeyType" [:concerto/string-key :concerto/date-time-key]
    "ObjectMapKeyType"
    (let [t (mm/type-fqn type)]
      (when-not (declaration-of reg t)
        (throw (ex-info (str "Unresolved type " (pr-str t) " as the key of map "
                             (pr-str fqn) ". Its model is not loaded.")
                        {:map fqn :type t})))
      (let [kind (declaration-kind reg t)
            base (scalar-declarations kind)]
        (when-not (#{:string :concerto/date-time} base)
          (throw (ex-info (str "Map " (pr-str fqn) " is keyed by " (pr-str t)
                               ", which is not a String or DateTime scalar. "
                               "Concerto allows only String, DateTime and scalars "
                               "of them as map keys.")
                          {:map fqn :type t})))
        (cond
          *strict*  [:concerto/string-key
                     (constrained (if (= :string base) base :concerto/date-time-key)
                                  (declaration-of reg t))]
          (= :string base) :concerto/map-key
          :else            [:concerto/string-key :concerto/date-time-key])))
    (throw (ex-info (str "Cannot compile the key of map " (pr-str fqn) ": "
                         (pr-str $class) " is not a map key type this library "
                         "handles. Refusing to emit a schema that would accept "
                         "any key.")
                    {:map fqn :$class $class}))))

(defn- map-value-schema [reg subtypes fqn key-fn {:keys [$class type]}]
  (let [kind (mm/metamodel-type $class)]
    (case kind
      "ObjectMapValueType" (object-schema reg subtypes (mm/type-fqn type) key-fn)
      ;; As a RelationshipProperty: the referenced identifier. Concerto 5 loads
      ;; these (3.x refuses the model), and both a bare id and a
      ;; `resource:` URI are strings.
      "RelationshipMapValueType" :string
      (or (scalar (str/replace kind #"MapValueType$" "Property"))
          (throw (ex-info (str "Cannot compile the value of map " (pr-str fqn) ": "
                               (pr-str $class) " is not a map value type this "
                               "library handles. Refusing to emit a schema that "
                               "would accept any value.")
                          {:map fqn :$class $class}))))))

(defn- map-schema
  "A map declaration as `:map-of`: an object whose entries are all of one key
  type and one value type. Unlike a concept it carries no `$class` of its own."
  [reg subtypes fqn key-fn]
  (when (contains? *maps-in-progress* fqn)
    (throw (ex-info (str "Map " (pr-str fqn) " contains itself through its value "
                         "type, so there is no finite schema for it.")
                    {:map fqn})))
  (let [{:keys [key value]} (declaration-of reg fqn)]
    (binding [*maps-in-progress* (conj *maps-in-progress* fqn)]
      [:map-of (map-key-schema reg fqn key)
       (map-value-schema reg subtypes fqn key-fn value)])))

(defn- object-schema
  "Schema for a value declared as `fqn`: the enum, or a reference to the one
  concrete type it can be, or a dispatch over every concrete type it could be.

  Nested, a value may leave out its `$class`: Concerto reads it as the declared
  type, and refuses only when that type is abstract. The root (`root?`) has
  nothing to infer it from, so its `$class` is required."
  ([reg subtypes fqn key-fn] (object-schema reg subtypes fqn key-fn false))
  ([reg subtypes fqn key-fn root?]
  (cond
    (nil? (declaration-of reg fqn))
    (throw (ex-info (str "Unresolved type " (pr-str fqn) ". Its model is not "
                         "loaded, so there is nothing to validate the value "
                         "against. Load the model that declares it.")
                    {:type fqn}))

    (enum? reg fqn) (enum-values reg fqn)

    ;; A scalar is a value, not a tagged object: inline the underlying
    ;; primitive with the scalar's own constraints, rather than referencing it.
    (contains? scalar-declarations (declaration-kind reg fqn))
    (constrained (scalar-declarations (declaration-kind reg fqn))
                 (declaration-of reg fqn))

    ;; A map is a value too: a plain JSON object with no $class, so it inlines.
    (= "MapDeclaration" (declaration-kind reg fqn))
    (map-schema reg subtypes fqn key-fn)

    :else
    (let [_        (check-compilable! reg fqn)
          concrete (get subtypes fqn)]
      (case (count concrete)
        ;; Abstract with nothing concrete to stand in for it. Referencing the
        ;; abstract declaration is the honest reading: its own properties are
        ;; required, and no instance can legitimately be only this type.
        0 [:ref fqn]
        1 (if (and (not root?) (abstract? reg fqn))
            ;; An abstract type with a single concrete subtype: the subtype's
            ;; entry would let the $class be left out, which Concerto refuses.
            [:and [:map [(key-fn "$class") :string]] [:ref (first concrete)]]
            [:ref (first concrete)])
        (into [:multi {:dispatch (key-fn "$class")}]
              (concat (map (fn [c] [c [:ref c]]) concrete)
                      ;; No $class at all: the declared type, if it is itself
                      ;; concrete. An unknown $class still falls here and fails
                      ;; on the entry's own `[:= fqn]`.
                      (when (and (not root?) (not (abstract? reg fqn)))
                        [[::m/default [:ref fqn]]]))))))))

(defn- property->schema [reg subtypes prop key-fn]
  (let [kind (mm/metamodel-type (:$class prop))
        base (or (scalar kind)
                 (case kind
                   "ObjectProperty"
                   (object-schema reg subtypes (mm/type-fqn (:type prop)) key-fn)
                   ;; relationships store the referenced identifier
                   "RelationshipProperty" :string
                   nil))]
    ;; No permissive default. An unrecognised property kind used to compile to
    ;; :any, which accepts anything -- so a model this library does not fully
    ;; understand would validate clean and the gap would never surface. Since
    ;; the point of this library is to flag a bad model rather than wave it
    ;; through, say so instead.
    (when-not base
      (throw (ex-info (str "Cannot compile property " (pr-str (:name prop))
                           " of kind " (pr-str (:$class prop))
                           ". This library does not handle that property kind "
                           "yet, and refuses to emit a schema that would accept "
                           "any value for it.")
                      {:property (:name prop)
                       :$class   (:$class prop)
                       :kind     kind})))
    ;; Constraints apply to each element, so they go on before :sequential.
    ;; A size validator constrains the collection itself, so it goes on after --
    ;; and its own checks (array-or-map-only, minSize <= maxSize) fire here
    ;; whether or not :isArray is true, since a size validator on a
    ;; non-collection property is exactly the case it has to reject.
    (cond-> (constrained base prop)
      (:isArray prop)       (->> (conj [:sequential]))
      (:sizeValidator prop) (mu/update-properties merge (size-schema (:sizeValidator prop) prop)))))

(defn- ordered
  "Entries deduplicated by key, keeping the first position and the last value.

  A child redeclaring a property overrides its parent's definition but keeps the
  parent's position. Tracked explicitly rather than with an array-map, which
  silently becomes an unordered hash-map once it passes eight entries -- the
  reason an earlier version of this emitted fields in arbitrary order."
  [entries]
  (:order (reduce (fn [{:keys [idx order] :as acc} e]
                    (let [k (first e)]
                      (if-let [i (idx k)]
                        (assoc-in acc [:order i] e)
                        (-> acc
                            (assoc-in [:idx k] (count order))
                            (update :order conj e)))))
                  {:idx {} :order []}
                  entries)))

(defn- system-properties
  "Concerto's `$` properties, admitted where Concerto admits them.

  The rule is asymmetric, and both halves are what Concerto was observed to do
  rather than what the metamodel suggests:

    $identifier  accepted on any declaration. The cicero-template-library's
                 rental-deposit-with carries one on a plain unidentified
                 `concept` and `concerto validate` calls that sample valid.

    $timestamp   only on transactions and events. Adding one to that same
                 concept draws an Unexpected property error naming $timestamp.

  A closed map has to admit whatever Concerto admits, or it turns a valid
  instance into a false rejection."
  [reg fqn key-fn root?]
  (let [kind (mm/metamodel-type (:$class (declaration-of reg fqn)))]
    (cond-> [;; $class is the linchpin: it is what makes the flattening
             ;; lossless, and what :multi dispatches on. Required at the root
             ;; and on an abstract type, optional on a nested concrete one --
             ;; see `object-schema`.
             (if (or root? (abstract? reg fqn))
               [(key-fn "$class") [:= fqn]]
               [(key-fn "$class") {:optional true} [:= fqn]])
             [(key-fn "$identifier") {:optional true} :string]]

      (#{"TransactionDeclaration" "EventDeclaration"} kind)
      (conj [(key-fn "$timestamp") {:optional true} :concerto/date-time]))))

(defn- declaration->map
  "One declaration as a map schema, with its whole inheritance chain flattened
  into it, parents first."
  [reg subtypes fqn key-fn closed root?]
  (check-compilable! reg fqn)
  (let [entries (for [f    (reverse (mm/super-chain reg fqn))
                      prop (:properties (declaration-of reg f))]
                  (let [k (key-fn (:name prop))]
                    ;; A default makes a field omittable: Concerto fills it in.
                    (if (or (:isOptional prop) (some? (:defaultValue prop)))
                      ;; An explicit null on an optional property means the
                      ;; same as leaving it out -- `concerto validate` accepts
                      ;; `"deliveredAt": null` and drops it. Only the property
                      ;; itself: a null *inside* an array is still an error, and
                      ;; a required property's null is a missing field.
                      [k {:optional true} [:maybe (property->schema reg subtypes prop key-fn)]]
                      [k (property->schema reg subtypes prop key-fn)])))]
    (into (into [:map (cond-> {} closed (assoc :closed true))]
                (system-properties reg fqn key-fn root?))
          (ordered entries))))

(defn- inline-kind?
  "Kinds that compile in place of being referenced, so need no registry entry."
  [kind]
  (or (contains? scalar-declarations kind)
      (contains? #{"EnumDeclaration" "MapDeclaration"} kind)))

(defn- type-targets
  "The registry-bound declarations a value of type `t` can contain: `t` itself
  and its concrete subtypes when it is a tagged object, nothing for an enum or
  scalar, and -- since a map inlines -- whatever its value type contains."
  [reg subtypes t seen]
  (when (and t (declaration-of reg t) (not (contains? seen t)))
    (let [kind (declaration-kind reg t)]
      (cond
        (= "MapDeclaration" kind)
        (let [v (:value (declaration-of reg t))]
          (when (= "ObjectMapValueType" (mm/metamodel-type (:$class v)))
            (type-targets reg subtypes (mm/type-fqn (:type v)) (conj seen t))))

        (inline-kind? kind) nil
        :else               (cons t (get subtypes t))))))

(defn- referenced
  "Every declaration reachable from `root` through ObjectProperty references,
  following the inheritance chain and every concrete subtype at each step.

  Guarded by `seen`, so a concept that refers to itself -- or a cycle between
  two -- terminates rather than inlining forever. That is also why the emitted
  schema uses `:ref` into a local registry instead of nesting the maps."
  [reg subtypes root]
  ;; Seeded with the root's concrete subtypes as well as the root itself: when
  ;; the root has subtypes it compiles to a :multi whose branches reference
  ;; them, and a branch pointing at something absent from the local registry is
  ;; an invalid-ref at schema-build time.
  ;; A map root inlines, so it is its value type's declarations that are seeded.
  (loop [queue (if (= "MapDeclaration" (some->> (declaration-of reg root) :$class mm/metamodel-type))
                 (vec (type-targets reg subtypes root #{}))
                 (into [root] (get subtypes root)))
         seen #{}]
    (if (empty? queue)
      seen
      (let [fqn  (first queue)
            more (vec (rest queue))]
        (if (or (contains? seen fqn)
                (nil? (declaration-of reg fqn))
                (inline-kind? (declaration-kind reg fqn)))
          (recur more seen)
          (let [targets (for [ancestor (mm/super-chain reg fqn)
                              prop     (:properties (declaration-of reg ancestor))
                              :when    (= "ObjectProperty" (mm/metamodel-type (:$class prop)))
                              target   (type-targets reg subtypes (mm/type-fqn (:type prop)) #{})]
                          target)]
            (recur (into more targets) (conj seen fqn))))))))

(defn- references?
  "Whether `fqn` or any ancestor declares an ObjectProperty pointing at another
  declaration -- as opposed to an enum, which inlines, or a scalar. A map counts
  by what it holds: one of strings inlines, one of concepts still needs them
  referenced.

  This is the test for whether a local registry is needed, and it is not the
  same as asking whether the reachable set is just `fqn`: a concept whose only
  reference is to itself reaches nothing new, but still emits a :ref that needs
  somewhere to resolve."
  [reg fqn]
  (boolean
   (some (fn [prop]
           (and (= "ObjectProperty" (mm/metamodel-type (:$class prop)))
                (seq (type-targets reg {} (mm/type-fqn (:type prop)) #{}))))
         (mapcat #(:properties (declaration-of reg %)) (mm/super-chain reg fqn)))))

(defn ->schema
  "Compile a Malli schema for a `$class`, flattening its whole inheritance chain.

  Maps are closed, matching Concerto, which rejects undeclared properties. Pass
  `:closed false` only if the values being validated legitimately carry extra
  keys -- a storage adapter should strip its own derived keys instead, so that
  the guarantee this library offers is the one Concerto offers.

  Nested concepts compile to `:ref`s into a local registry rather than to a bare
  `:map`, so their contents are actually checked. A property whose declared type
  has several concrete subtypes compiles to a `:multi` dispatching on `$class`,
  because Concerto permits polymorphism and a closed schema for the parent alone
  would reject a legitimate subclass.

  A model with nothing nested emits as a plain map, since there is nothing to
  reference.

  `:concerto-version` is the major version of the validator to agree with: 3, 4
  (the default) or 5. They differ where 5 is stricter -- DateTime must be a real
  `YYYY-MM-DDTHH:mm:ss[.f]Z|+HH:MM`, where 3.x and 4.x accept a bare year or a
  date alone -- and where a scalar's constraints apply to a map key."
  [reg fqn & {:keys [key-fn closed concerto-version]
              :or   {key-fn keyword closed true concerto-version 4}}]
  (when-not (#{3 4 5} concerto-version)
    (throw (ex-info (str "Unsupported :concerto-version " (pr-str concerto-version)
                         ". This library has been checked against 3, 4 and 5.")
                    {:concerto-version concerto-version :supported [3 4 5]})))
  (when (empty? (mm/super-chain reg fqn))
    (throw (ex-info "Unknown $class -- is its model loaded?" {:fqn fqn})))
  (binding [*strict* (= 5 concerto-version)]
   (let [subtypes (subtype-index reg)
         needed   (referenced reg subtypes fqn)
         root     (object-schema reg subtypes fqn key-fn true)
         form     (cond
                    ;; An enum or scalar root is a value, not a tagged object,
                    ;; so object-schema has already produced the whole thing.
                    (empty? needed) root

                    ;; Nothing to reference: emit the map itself, so a simple
                    ;; model stays readable as a simple schema.
                    (and (= [:ref fqn] root) (not (references? reg fqn)))
                    (declaration->map reg subtypes fqn key-fn closed true)

                    :else
                    [:schema
                     ;; A plain map, not a sorted one: malli consults this
                     ;; registry for keyword types too (:concerto/date-time and
                     ;; friends), and a string-keyed sorted map throws comparing
                     ;; those. Built from sorted names so the emitted form is
                     ;; reproducible.
                     {:registry (into {}
                                      (map (fn [f]
                                             [f (declaration->map reg subtypes f key-fn closed false)]))
                                      (sort needed))}
                     ;; The registry entries let a nested value omit its
                     ;; $class; the root may not.
                     (if (= :ref (first root))
                       [:and [:map [(key-fn "$class") :string]] root]
                       root)])]
     (m/schema (if *strict*
                 (walk/postwalk-replace {:concerto/date-time :concerto/date-time-strict} form)
                 form)
               {:registry registry*}))))

(defn ->edn
  "The schema as plain EDN, ready to spit to a file.

  Reads back with `(m/schema form {:registry registry*})`."
  [reg fqn & opts]
  (m/form (apply ->schema reg fqn opts)))
