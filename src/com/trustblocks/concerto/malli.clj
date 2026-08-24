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
  (:require [com.trustblocks.concerto.metamodel :as mm]
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
   ;; On the JVM it is a true java.lang.Long, so precision is only at risk when
   ;; a value crosses the JS boundary.
   "LongProperty"     :int
   "DateTimeProperty" :concerto/date-time})

(def date-time
  "Concerto DateTime accepts an ISO-8601 string or an already-parsed instant."
  [:fn {:error/message "should be a date-time"}
   #(or (string? %)
        (instance? java.time.OffsetDateTime %)
        (instance? java.time.Instant %))])

(def double-like
  "Concerto Double. JSON has no int/double distinction for whole numbers, so a
  Double field commonly arrives as `85` rather than `85.0`, and Concerto's own
  validator accepts that -- `:double` would be stricter than the spec.

  Written as a predicate rather than `[:or :int :double]` so the humanized
  failure is one clear line. The `:or` form reports every branch it tried
  (\"should be an integer\", \"should be a double\"), which reads as a
  contradiction rather than an explanation."
  [:fn {:error/message "should be a number"} number?])

(def registry*
  "Malli registry: the defaults, malli.util's :merge/:select-keys, and the
  Concerto-specific named schemas. Supply this when reading an exported schema
  back, or `:concerto/date-time` will not resolve."
  (merge (m/default-schemas)
         (mu/schemas)
         {:concerto/date-time date-time
          :concerto/double    double-like}))

(defn- enum? [reg fqn]
  (= "EnumDeclaration" (mm/metamodel-type (get-in reg [fqn :declaration :$class]))))

(defn- enum-values [reg fqn]
  (into [:enum] (map :name) (get-in reg [fqn :declaration :properties])))

(defn- property->schema [reg prop]
  (let [kind (mm/metamodel-type (:$class prop))
        base (or (scalar kind)
                 (case kind
                   "ObjectProperty"
                   (let [fqn (mm/type-fqn (:type prop))]
                     (if (enum? reg fqn) (enum-values reg fqn) :map))
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
    (cond-> base
      (:isArray prop) (->> (conj [:sequential])))))

(defn ->schema
  "Compile a Malli schema for a `$class`, flattening its whole inheritance chain.

  Properties are emitted in declaration order, parents first, so that exporting
  the same model twice produces the same EDN and two exports diff cleanly."
  [reg fqn & {:keys [key-fn] :or {key-fn keyword}}]
  (let [chain (mm/super-chain reg fqn)]
    (when (empty? chain)
      (throw (ex-info "Unknown $class -- is its model loaded?" {:fqn fqn})))
    (let [entries
          (for [f    (reverse chain)            ; parents first, child overrides
                prop (get-in reg [f :declaration :properties])
                :let [k (key-fn (:name prop))]]
            (if (:isOptional prop)
              [k {:optional true} (property->schema reg prop)]
              [k (property->schema reg prop)]))]
      (m/schema
       (into [:map
              ;; $class is the linchpin: it is what makes the flattening lossless.
              [(key-fn "$class") [:= fqn]]
              [(key-fn "$identifier") {:optional true} :string]]
             ;; A child redeclaring a field overrides its parent's definition but
             ;; keeps the parent's position. Tracked explicitly rather than with
             ;; an array-map, which silently becomes an unordered hash-map once
             ;; it passes eight entries -- the reason an earlier version of this
             ;; emitted fields in arbitrary order.
             (->> entries
                  (reduce (fn [{:keys [idx order] :as acc} e]
                            (let [k (first e)]
                              (if-let [i (idx k)]
                                (assoc-in acc [:order i] e)
                                (-> acc
                                    (assoc-in [:idx k] (count order))
                                    (update :order conj e)))))
                          {:idx {} :order []})
                  :order))
       {:registry registry*}))))

(defn ->edn
  "The schema as plain EDN, ready to spit to a file.

  Reads back with `(m/schema form {:registry registry*})`."
  [reg fqn & opts]
  (m/form (apply ->schema reg fqn opts)))
