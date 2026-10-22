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
   "IntegerProperty"  :concerto/integer
   ;; Long is 64-bit in the spec but only 2^53-safe in Concerto's JS runtime.
   ;; On the JVM it survives as a 64-bit integer; in JavaScript it does not,
   ;; and JSON.parse has already destroyed the value before any validator sees
   ;; it. That loss is only detectable from a platform that does not suffer it.
   "LongProperty"     :concerto/integer
   "DateTimeProperty" :concerto/date-time})

(def ^:private end-of-input
  "Where JavaScript's `$` matches without the `m` flag: the very end, and nowhere
  else. The JVM's `$` also matches before a final line terminator, so `\"...Z\\n\"`
  would pass here and fail in Concerto. A lookahead that nothing can follow says
  the same on both."
  "(?![\\s\\S])")

(defn js-anchors
  "A JavaScript pattern for the JVM: its `$` is `end-of-input`, outside a
  character class, unless the `m` flag makes it a line end. Written the same on
  both platforms, so a schema reads the same wherever it was compiled."
  [pattern flags]
  (if (str/includes? (or flags "") "m")
    pattern
    (let [cs (vec pattern)
          n  (count cs)]
      (loop [i 0, in-class? false, out []]
        (if (>= i n)
          (apply str out)
          (let [c (cs i)]
            (cond
              (and (= c \\) (< (inc i) n)) (recur (+ i 2) in-class? (conj out c (cs (inc i))))
              (and (= c \[) (not in-class?)) (recur (inc i) true (conj out c))
              (and (= c \]) in-class?)       (recur (inc i) false (conj out c))
              (and (= c \$) (not in-class?)) (recur (inc i) in-class? (conj out end-of-input))
              :else                          (recur (inc i) in-class? (conj out c)))))))))

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
                     "|" yyyy "-?" mm "-?" dd "[T ]" time zone ")" end-of-input))))

(defn- epoch->iso
  "Whole seconds since the epoch as Concerto writes a DateTime: `2026-07-24T15:00:00Z`."
  [s]
  #?(:clj  (str (java.time.Instant/ofEpochSecond s))
     :cljs (str/replace (.toISOString (js/Date. (* 1000 s))) #"\.000Z$" "Z")))

(defn- date-time-hints
  "What generating and describing a DateTime need, which neither can work out
  from the pattern that checks it. A generator given only the pattern draws
  strings and hopes one matches, and gives up; so it is told to draw a time in
  the years around now, and write it out. JSON Schema is told it is a date-time,
  and given the pattern as well: `format` is only enforced by a validator that
  has the plugin for it, and a schema should not depend on that.
  Properties only: nothing here changes what validates, and nothing needs
  test.check until a generator is actually run."
  [pattern]
  {:gen/schema   [:int {:min 946684800 :max 2524608000}]
   :gen/fmap     epoch->iso
   :json-schema  {:type "string" :format "date-time"
                  :pattern (str/replace #?(:clj (.pattern ^java.util.regex.Pattern pattern) :cljs (.-source pattern))
                                        end-of-input "$")}})

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
  [:and (date-time-hints date-time-pattern) :string
   [:re {:error/message "should be a date-time"} date-time-pattern]])

(def double-like
  "Concerto Double. JSON has no int/double distinction for whole numbers, so a
  Double field commonly arrives as `85` rather than `85.0`, and Concerto's own
  validator accepts that -- `:double` would be stricter than the spec.

  Written as a predicate rather than `[:or :int :double]` so the humanized
  failure is one clear line. The `:or` form reports every branch it tried
  (\"should be an integer\", \"should be a double\"), which reads as a
  contradiction rather than an explanation."
  [:fn {:error/message "should be a number"
        ;; Finite and unremarkable: a generator draws what a contract would hold,
        ;; not NaN or 1e308, and JSON has no such numbers to write.
        :gen/schema    [:double {:min -1000000.0 :max 1000000.0 :NaN? false :infinite? false}]
        :json-schema   {:type "number"}}
   number?])

(defn- integral?
  "Whether a JSON number is a whole number, as JavaScript's `Number.isInteger`
  says: `1.0`, `1e3` and `1e21` are, and so is an integer too large for a long.
  JSON has one kind of number, and the JVM reads `1.0` as a double and `1e21` as
  one too, so `:int` would turn away what Concerto takes."
  [x]
  #?(:clj  (or (integer? x)
               (and (float? x) (not (Double/isInfinite (double x))) (== x (Math/floor (double x)))))
     :cljs (and (number? x) (js/Number.isInteger x))))

(def integer-like
  "Concerto Integer and Long: any whole number. See `integral?`."
  [:fn {:error/message "should be an integer"
        :gen/schema    :int
        :json-schema   {:type "integer"}}
   integral?])

(def ^:private js-whitespace
  "What JavaScript's `trim` takes off, as the inside of a character class."
  " \\t\\n\\u000b\\f\\r\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff")

(def identifier
  "An identifier may not be empty: Concerto reads `\"\"` as no identifier at all
  (\"Missing identifier for Type ...\"), even when `$identifier` is also given.
  Nor may it be blank: Concerto trims it first, so `\" \"` is missing too, and
  anything JavaScript's `trim` removes -- a tab, a line break, a no-break space,
  a byte-order mark. A zero-width space is not one of them, and is an identifier.

  A generator is told what to draw -- a letter and whatever follows -- since it
  cannot draw from a pattern that says what a string is not."
  [:and {:gen/schema [:string {:min 1 :max 12}]
         :gen/fmap   #(str "i" %)}
   [:string {:min 1}]
   [:re {:error/message "should not be blank"}
    (str "[^" js-whitespace "]")]])

(def map-key
  "A map key, which arrives as a keyword once `instance/json->edn` has walked
  the instance: that keywordizes every key, entry keys of a Concerto map
  included, and a map key is data, not a property name, so `key-fn` does not
  apply to it. A string is accepted too, for an instance built by hand."
  [:or {:gen/schema [:string {:min 1 :max 12}]} :string :keyword])

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
  #"^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)(?![\s\S])")

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
  "Concerto 5.2+ DateTime. Selected by `->schema`'s `:concerto-version \"5.2\"`;
  the looser `date-time` stays the default because it is what 3.x, 4.x, 5.0 and
  5.1 enforce."
  [:and (date-time-hints date-time-strict-pattern) :string
   [:re {:error/message "should be a date-time"} date-time-strict-pattern]
   [:fn {:error/message "should be a date that exists"} real-date?]])

(def ^:private ^:dynamic *generators*
  "True while compiling with `:generators true`, which annotates the schema so
  Malli can generate from it. Bound by `->schema`."
  false)

(def ^:private ^:dynamic *optional*
  "Under `:generators`, how optional properties are drawn: `:random` (each is
  present or not), `:always`, or `:never`. Bound by `->schema`."
  :random)

(defn- decodes?
  "Whether JavaScript's `decodeURIComponent` takes `s`: every `%` begins a
  two-digit escape, and what the escapes spell is UTF-8."
  [s]
  #?(:cljs (try (js/decodeURIComponent s) true (catch :default _ false))
     :clj  (and (not (re-find #"%(?![0-9A-Fa-f]{2})" s))
                (every? (fn [run]
                          (let [bytes (byte-array (map #(unchecked-byte (Integer/parseInt % 16))
                                                       (re-seq #"(?<=%)[0-9A-Fa-f]{2}" run)))]
                            (try (.decode (doto (.newDecoder java.nio.charset.StandardCharsets/UTF_8)
                                            (.onMalformedInput java.nio.charset.CodingErrorAction/REPORT)
                                            (.onUnmappableCharacter java.nio.charset.CodingErrorAction/REPORT))
                                          (java.nio.ByteBuffer/wrap bytes))
                                 true
                                 (catch java.nio.charset.CharacterCodingException _ false))))
                        (re-seq #"(?:%[0-9A-Fa-f]{2})+" s)))))

(defn- parse-uri
  "Concerto's own reading of a resource URI (`ResourceId.fromURI`): the fragment
  after the first `#`, the query after the first `?`, a scheme if what precedes
  the first `:` looks like one, and an authority after `//`. Nil where Concerto
  throws -- an authority whose port is not digits."
  [uri]
  (let [hash   (str/index-of uri "#")
        frag   (when hash (let [f (subs uri (inc hash))] (when (seq f) f)))
        s      (if hash (subs uri 0 hash) uri)
        qpos   (str/index-of s "?")
        query  (when qpos (subs s (inc qpos)))
        s      (if qpos (subs s 0 qpos) s)
        colon  (when-not (str/starts-with? s "//") (str/index-of s ":"))
        scheme (when (and colon (re-matches #"(?i)[a-z][a-z0-9.+-]*" (subs s 0 colon)))
                 (subs s 0 colon))
        s      (if scheme (subs s (inc colon)) s)
        base   {:scheme scheme :query query :fragment frag}]
    (if-not (str/starts-with? s "//")
      (assoc base :path s)
      (let [s         (subs s 2)
            slash     (str/index-of s "/")
            authority (if slash (subs s 0 slash) s)
            path      (if slash (subs s slash) "")
            at        (str/index-of authority "@")
            userinfo  (when at (subs authority 0 at))
            hostport  (if at (subs authority (inc at)) authority)
            pcolon    (str/last-index-of hostport ":")
            port      (when pcolon (let [p (subs hostport (inc pcolon))] (when (seq p) p)))]
        (when-not (and port (not (re-matches #"[0-9]+" port)))
          (assoc base :path path :userinfo userinfo :port port :authority? true))))))

(defn- relationship-value?
  "Whether `v` is a value Concerto takes for a relationship to one of `types`.

  Concerto reads it as a URI. With a `#`, the part before is the qualified name of
  a type, which must be one the property may hold -- the declared type or a
  subtype, not another asset and not a name that is not in the model -- and the
  rest is the id. Without one, the whole is the id of the declared type, and may
  not look like another scheme's URI (`urn:x`), carry a query (`a?b`) or an
  authority's user or port. Either id must decode as a URI component (`100%` does
  not). An id that is empty is missing.

  Before 5.0 the URI was read by `urijs`, which compares a scheme in the case it
  is written -- `Resource:` is not `resource:` --, ignores whitespace before the
  start, reads a fragment of only whitespace as none, and takes `//host` as an id."
  [{:keys [types uri]} v]
  (let [new?   (= uri 5)
        v      (if new? v (str/replace v (re-pattern (str "^[" js-whitespace "]+")) ""))
        parsed (parse-uri v)]
    (boolean
     (and parsed
          (let [{:keys [scheme query fragment path userinfo port authority?]} parsed
                ;; and a fragment of only whitespace is no fragment
                fragment (if (and (not new?) fragment (re-matches (re-pattern (str "[" js-whitespace "]*")) fragment))
                           nil
                           fragment)]
            (and (or (nil? scheme) (= "resource" (if new? (str/lower-case scheme) scheme)))
                 (not (seq userinfo)) (not port) (not (seq query))
                 (if fragment
                   (and (contains? (set types) path) (decodes? fragment))
                   ;; `urijs` reads `//host` as a URI with an empty path, and
                   ;; Concerto before 5.0 takes that for an id.
                   (or (and (seq path) (decodes? path))
                       (and (not new?) authority?)))))))))

(def relationship
  "`[:concerto/relationship {:types [...]}]`: the value of a relationship, which is
  a string Concerto reads as a URI -- see `relationship-value?`. `:types` are the
  qualified names the property may hold, the declared one and its subtypes,
  abstract ones included; `:uri` is 5 where Concerto 5's reader applies and 4
  where `urijs`'s does."
  (m/-simple-schema
   {:type            :concerto/relationship
    :min             0
    :max             0
    :type-properties {:error/message "should be a reference to a type this property can hold"
                      :gen/schema    [:vector {:min 1 :max 12} [:enum "a" "b" "c" "d" "x" "y" "z" "1" "7" "9"]]
                      :gen/fmap      #(apply str %)
                      :json-schema   {:type "string" :minLength 1}}
    :compile         (fn [props _ _]
                       {:pred (fn [v] (and (string? v) (relationship-value? props v)))})}))

(def registry*
  "Malli registry: the defaults, malli.util's :merge/:select-keys, and the
  Concerto-specific named schemas. Supply this when reading an exported schema
  back, or `:concerto/date-time` will not resolve."
  (merge (m/default-schemas)
         (mu/schemas)
         {:concerto/date-time     date-time
          :concerto/double        double-like
          :concerto/integer       integer-like
          :concerto/identifier    identifier
          :concerto/relationship  relationship
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
   "IntegerScalar"  :concerto/integer
   "LongScalar"     :concerto/integer
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
    ;; Generating draws from the pattern as written: the generator has no lookahead,
    ;; and a drawn string has no trailing newline to tell the two `$` apart.
    [:re (let [pattern (if *generators* pattern (js-anchors pattern flags))]
           (if (seq flags) (str "(?" flags ")" pattern) pattern))]))

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

(defn- generator-hint
  "A schema to generate from, in place of `base` and the constraints on it.

  Malli generates a `[:and base constraint...]` from `base` and keeps what passes
  the rest, which works for a loose constraint and gives up on a tight one: a
  string of 2 to 4 characters, or an integer from 10 to 12, is found only by luck.
  Say where to look instead: a pattern for a regex (which needs test.chuck on the
  JVM), the length for a length, the bounds for a range. A regex wins over a
  length, since a pattern cannot be bounded and still be generated from; the
  length is then checked and the odd miss retried."
  [base {:keys [validator lengthValidator]}]
  (let [vk (some-> validator :$class mm/metamodel-type)]
    (cond
      (= "StringRegexValidator" vk)
      (regex-schema validator)

      lengthValidator
      (length-schema lengthValidator)

      (#{"IntegerDomainValidator" "LongDomainValidator"} vk)
      (let [{:keys [lower upper]} validator]
        [:int (cond-> {}
                (some? lower) (assoc :min lower)
                (some? upper) (assoc :max upper))])

      (= "DoubleDomainValidator" vk)
      (let [{:keys [lower upper]} validator
            lo (or lower (when upper (- upper 1000000.0)))
            hi (or upper (when lower (+ lower 1000000.0)))]
        [:double {:min lo :max hi :NaN? false :infinite? false}]))))

(defn- constrained
  "Apply a node's validators to its compiled schema.

  Base first, so that `:and` short-circuits before a bound is compared against
  something that is not a number. Concerto carries the length constraint in a
  separate `lengthValidator` field from the regex in `validator`, and a property
  may have both."
  [base node]
  (let [extra (concat (validator-schemas (:validator node))
                      (validator-schemas (:lengthValidator node)))]
    (if (seq extra)
      (if-let [hint (and *generators* (generator-hint base node))]
        (into [:and {:gen/schema hint} base] extra)
        (into [:and base] extra))
      base)))

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

(def ^:private ^:dynamic *version*
  "The [major minor patch] of the Concerto validator being agreed with. Bound by
  `->schema`; see `parse-version`."
  [4 0 0])

(defn- at-least?
  "Whether the version being agreed with is at least major.minor.patch."
  ([major minor] (at-least? major minor 0))
  ([major minor patch]
   (>= (compare *version* [major minor patch]) 0)))

(defn- reference
  "The value of a relationship to `fqn`: see `relationship`."
  [reg fqn]
  [:concerto/relationship
   {:types (vec (sort (filter #(some #{fqn} (mm/super-chain reg %)) (keys reg))))
    :uri   (if (at-least? 5 0) 5 4)}])

(defn- relationship-maps
  "How `map M { o K --> Asset }` values are held, which differs by version in four
  ways, each boundary found by running the neighbouring releases:

    :unsupported  before 3.23.0: the model cannot be loaded at all.
    :either       3.23.0 to 4.1.2: a `resource:` string, or an embedded resource.
    :embedded     4.1.3 to 5.1.x: the embedded resource, `$class` and all; a
                  `resource:` string is rejected.
    :reference    5.2.0 on (concerto-core #1567): the referenced identifier, a
                  string; an embedded resource is rejected.

  Run against concerto-core 3.16.7, 3.20.0, 3.21.0, 3.22.0, 3.23.0, 3.24.0,
  3.25.0, 3.26.0, 4.0.0 to 4.1.5, 4.2.0, 5.0.0, 5.1.0, 5.2.0 and 5.2.1."
  []
  (cond (at-least? 5 2)    :reference
        (at-least? 4 1 3)  :embedded
        (at-least? 3 23)   :either
        :else              :unsupported))

(defn- parse-version
  "`:concerto-version` as [major minor patch]. An integer is that major version's
  earliest release (`5` is 5.0.0); a string `\"5.2\"` or `\"4.1.3\"` names the minor
  and patch too, which is what separates 5.0 and 5.1 from 5.2 on, and 4.1.2 from
  4.1.3."
  [v]
  (let [parts (cond
                (integer? v) [v 0 0]
                (and (string? v) (re-matches #"\d+(\.\d+){0,2}" v))
                (mapv #?(:clj #(Long/parseLong %) :cljs #(js/parseInt % 10))
                      (take 3 (concat (str/split v #"\.") ["0" "0"])))
                :else nil)]
    (when-not (and parts (#{3 4 5} (first parts)))
      (throw (ex-info (str "Unsupported :concerto-version " (pr-str v)
                           ". This library has been checked against 3.x, 4.x and 5.x; "
                           "give a major version (3, 4, 5) or a string such as \"5.2\".")
                      {:concerto-version v :supported [3 4 5]})))
    (vec parts)))

(def ^:private ^:dynamic *maps-in-progress*
  "Map declarations being compiled, outermost first. A map is inlined where it
  is used rather than referenced, so one whose value type leads back to itself
  would inline forever."
  #{})

(defn- string-key-of
  "`[:concerto/string-key child]`, told to generate from `child` when asked to
  generate at all: the schema's own check is a function, which Malli cannot
  draw from."
  [child]
  (if *generators*
    [:concerto/string-key {:gen/schema child} child]
    [:concerto/string-key child]))

(defn- map-key-schema
  "Schema for a map's keys.

  Concerto allows String, DateTime, or a scalar over either. What it checks of a
  scalar key depends on the version: 3.x and 4.x hold the key to the underlying
  primitive only -- `concerto validate` accepts `USA` as a key of a map keyed by
  `scalar Code extends String regex=/^[A-Z]{2}$/` -- while 5.x enforces the
  scalar's constraints as well -- from 5.2.0 on (#1568); 5.0 and 5.1 do not."
  [reg fqn {:keys [$class type]}]
  (case (mm/metamodel-type $class)
    "StringMapKeyType"   :concerto/map-key
    "DateTimeMapKeyType" (string-key-of :concerto/date-time-key)
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
          (at-least? 5 2) (string-key-of
                           (constrained (if (= :string base) base :concerto/date-time-key)
                                        (declaration-of reg t)))
          (= :string base) :concerto/map-key
          :else            (string-key-of :concerto/date-time-key))))
    (throw (ex-info (str "Cannot compile the key of map " (pr-str fqn) ": "
                         (pr-str $class) " is not a map key type this library "
                         "handles. Refusing to emit a schema that would accept "
                         "any key.")
                    {:map fqn :$class $class}))))

(defn- map-value-schema [reg subtypes fqn key-fn {:keys [$class type]}]
  (let [kind (mm/metamodel-type $class)]
    (case kind
      "ObjectMapValueType" (object-schema reg subtypes (mm/type-fqn type) key-fn)
      "RelationshipMapValueType"
      (case (relationship-maps)
        ;; As a RelationshipProperty: the referenced identifier, a bare id or a
        ;; `resource:` URI -- both strings.
        :reference (reference reg (mm/type-fqn type))
        ;; An embedded resource, as 4.1.3 to 5.1 read it.
        :embedded  (object-schema reg subtypes (mm/type-fqn type) key-fn)
        ;; Either, as 3.23.0 to 4.1.2 do.
        :either    [:or (reference reg (mm/type-fqn type))
                    (object-schema reg subtypes (mm/type-fqn type) key-fn)]
        (throw (ex-info (str "Map " (pr-str fqn) " has a relationship value, which "
                             "Concerto before 3.23.0 cannot load. Refusing to emit a schema "
                             "for a model that version rejects.")
                        {:map fqn :concerto-version *version*})))
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
                   ;; relationships store the referenced identifier: a bare id or a
                   ;; `resource:` URI, which has to name a type the property may hold.
                   "RelationshipProperty" (reference reg (mm/type-fqn (:type prop)))
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

(defn- system-identified?
  "Whether the declaration, or a supertype, is declared `identified` -- by the
  system `$identifier`, as opposed to `identified by` a field of its own."
  [reg fqn]
  (boolean
   (some #(= "Identified" (mm/metamodel-type (:$class (get-in reg [% :declaration :identified]))))
         (mm/super-chain reg fqn))))

(defn- non-empty
  "A value that is an identifier: see `identifier-string`."
  [schema]
  (if (= :string schema)
    :concerto/identifier
    [:and schema :concerto/identifier]))

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
             (if (or root? (abstract? reg fqn) *generators*)
               ;; Always present when generating: it is valid to say, and a
               ;; generator that may leave it out produces instances that need it.
               [(key-fn "$class") [:= fqn]]
               ;; Concerto treats a falsy $class -- null, "", 0, false -- as
               ;; absent, so the declared type is read in its place.
               [(key-fn "$class") {:optional true}
                [:or :nil [:enum fqn "" false]
                 [:and [:or :int :double] [:>= 0] [:<= 0]]]])
             ;; Accepted on any declaration. On an `identified` one, a value
             ;; that is there is a non-empty string, or null; on any other, Concerto
             ;; never reads it, so it may be anything. Leaving it out is fine.
             [(key-fn "$identifier") {:optional true}
              (cond *generators*                 (if (system-identified? reg fqn) :concerto/identifier :string)
                    (system-identified? reg fqn) [:maybe :concerto/identifier]
                    :else                        :any)]]

      ;; Concerto does not read a transaction's or event's `$timestamp` either,
      ;; whatever it is; on any other declaration it refuses the key, null included.
      (#{"TransactionDeclaration" "EventDeclaration"} kind)
      (conj [(key-fn "$timestamp") {:optional true} (if *generators* :concerto/date-time :any)])

      (and (not *generators*) (not (#{"TransactionDeclaration" "EventDeclaration"} kind)))
      (conj [(key-fn "$timestamp") {:optional true}
             [:not {:error/message "is not a declared property"} :any]]))))

(def ^:private undeclared
  "What a closed map says of the keys it does not declare: that they are null.
  Concerto rejects an undeclared property, but ignores one whose value is null --
  in every version checked, at any depth -- so `{:closed true}`, which rejects a
  key whatever its value, would refuse an instance Concerto accepts.

  Malli's default entry is the schema for every key not otherwise named, and
  `:nil` leaves nothing else through. It is also what JSON Schema calls
  `additionalProperties: {type: null}`, which is the same rule."
  [::m/default [:map-of :any [:nil {:error/message "is not a declared property"}]]])

(defn- declaration->map
  "One declaration as a map schema, with its whole inheritance chain flattened
  into it, parents first."
  [reg subtypes fqn key-fn closed root?]
  (check-compilable! reg fqn)
  (let [id-field (mm/identity-field reg fqn)
        entries (for [f    (reverse (mm/super-chain reg fqn))
                      prop (:properties (declaration-of reg f))]
                  (let [k (key-fn (:name prop))]
                    ;; A default makes a field omittable: Concerto fills it in.
                    (if (or (:isOptional prop) (some? (:defaultValue prop)))
                      (case (when *generators* *optional*)
                        ;; Generating, and asked to always (or never) include
                        ;; them: as required, or not at all.
                        :always [k (property->schema reg subtypes prop key-fn)]
                        :never  nil
                        ;; An explicit null on an optional property means the
                        ;; same as leaving it out -- `concerto validate` accepts
                        ;; `"deliveredAt": null` and drops it. Only the property
                        ;; itself: a null *inside* an array is still an error, and
                        ;; a required property's null is a missing field.
                        [k {:optional true} [:maybe (property->schema reg subtypes prop key-fn)]])
                      [k (cond-> (property->schema reg subtypes prop key-fn)
                           (= id-field (:name prop)) non-empty)])))]
    ;; Generating, a map that tolerates extra keys would be drawn with junk ones,
    ;; so it stays plain closed there: only validation needs to tolerate a null.
    (into (into [:map (cond-> {} (and closed *generators*) (assoc :closed true))]
                (system-properties reg fqn key-fn root?))
          (cond-> (vec (ordered (remove nil? entries)))
            (and closed (not *generators*)) (conj undeclared)))))

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
          (when (or (= "ObjectMapValueType" (mm/metamodel-type (:$class v)))
                    (and (= "RelationshipMapValueType" (mm/metamodel-type (:$class v)))
                         (#{:embedded :either} (relationship-maps))))
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

  Maps are closed, matching Concerto, which rejects undeclared properties -- and
  ignores one whose value is null, so a closed map says the same. Pass
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

  `:concerto-version` is the validator to agree with: a major version (3, 4,
  the default 4, or 5, each meaning that major's first release) or a string naming
  the minor and patch, `\"5.2\"`, `\"4.1.3\"`. What changes, and where (each run
  against the releases listed in `relationship-maps`, among others):

    from 5.2.0   a DateTime must be a real `YYYY-MM-DDTHH:mm:ss[.f]` with `Z` or
                 `+/-HH:MM` (earlier versions accept a bare year or a date
                 alone), and a scalar's constraints apply to a map key
    relationship map values   see `relationship-maps`

  Nothing separates 3, 4 and 5.0 otherwise: 5.0 is not the strict one.

  `:generators` (true, or `{:optional :always}` / `{:optional :never}` to include
  every optional property or none; the default draws each at random) annotates
  the schema so Malli can generate from it -- see
  the `generator` namespace, which does it for you. It changes how the schema is
  written, not what it accepts: a pattern, a length or a range is given as the
  place to look, a map key is told what to draw from, and `$class` is always
  present. Leave it off for validation, so the emitted form stays plain."
  [reg fqn & {:keys [key-fn closed concerto-version generators]
              :or   {key-fn keyword closed true concerto-version 4}}]
  (let [version (parse-version concerto-version)]
  (when (empty? (mm/super-chain reg fqn))
    (throw (ex-info "Unknown $class -- is its model loaded?" {:fqn fqn})))
  (binding [*version*    version
            *generators* (boolean generators)
            *optional*   (let [o (when (map? generators) (:optional generators))]
                           (if (contains? #{:always :never} o) o :random))]
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
                     (if (and (= :ref (first root)) (not *generators*))
                       [:and [:map [(key-fn "$class") [:string {:min 1}]]] root]
                       root)])]
     (m/schema (if (at-least? 5 2)
                 (walk/postwalk-replace {:concerto/date-time :concerto/date-time-strict} form)
                 form)
               {:registry registry*})))))

(defn ->edn
  "The schema as plain EDN, ready to spit to a file.

  Reads back with `(m/schema form {:registry registry*})`."
  [reg fqn & opts]
  (m/form (apply ->schema reg fqn opts)))
