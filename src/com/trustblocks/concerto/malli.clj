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

;; ---------------------------------------------------------------- the model

(defn- declaration-of [reg fqn] (get-in reg [fqn :declaration]))

(defn- enum? [reg fqn]
  (= "EnumDeclaration" (mm/metamodel-type (:$class (declaration-of reg fqn)))))

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

(defn- object-schema
  "Schema for a value declared as `fqn`: the enum, or a reference to the one
  concrete type it can be, or a dispatch over every concrete type it could be."
  [reg subtypes fqn key-fn]
  (cond
    (nil? (declaration-of reg fqn))
    (throw (ex-info (str "Unresolved type " (pr-str fqn) ". Its model is not "
                         "loaded, so there is nothing to validate the value "
                         "against. Load the model that declares it.")
                    {:type fqn}))

    (enum? reg fqn) (enum-values reg fqn)

    :else
    (let [concrete (get subtypes fqn)]
      (case (count concrete)
        ;; Abstract with nothing concrete to stand in for it. Referencing the
        ;; abstract declaration is the honest reading: its own properties are
        ;; required, and no instance can legitimately be only this type.
        0 [:ref fqn]
        1 [:ref (first concrete)]
        (into [:multi {:dispatch (key-fn "$class")}]
              (map (fn [c] [c [:ref c]]))
              concrete)))))

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
    (cond-> base
      (:isArray prop) (->> (conj [:sequential])))))

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
  [reg fqn key-fn]
  (let [kind (mm/metamodel-type (:$class (declaration-of reg fqn)))]
    (cond-> [;; $class is the linchpin: it is what makes the flattening
             ;; lossless, and what :multi dispatches on.
             [(key-fn "$class") [:= fqn]]
             [(key-fn "$identifier") {:optional true} :string]]

      (#{"TransactionDeclaration" "EventDeclaration"} kind)
      (conj [(key-fn "$timestamp") {:optional true} :concerto/date-time]))))

(defn- declaration->map
  "One declaration as a map schema, with its whole inheritance chain flattened
  into it, parents first."
  [reg subtypes fqn key-fn closed]
  (let [entries (for [f    (reverse (mm/super-chain reg fqn))
                      prop (:properties (declaration-of reg f))]
                  (let [k (key-fn (:name prop))]
                    (if (:isOptional prop)
                      [k {:optional true} (property->schema reg subtypes prop key-fn)]
                      [k (property->schema reg subtypes prop key-fn)])))]
    (into (into [:map (cond-> {} closed (assoc :closed true))]
                (system-properties reg fqn key-fn))
          (ordered entries))))

(defn- referenced
  "Every declaration reachable from `root` through ObjectProperty references,
  following the inheritance chain and every concrete subtype at each step.

  Guarded by `seen`, so a concept that refers to itself -- or a cycle between
  two -- terminates rather than inlining forever. That is also why the emitted
  schema uses `:ref` into a local registry instead of nesting the maps."
  [reg subtypes root]
  (loop [queue [root], seen #{}]
    (if (empty? queue)
      seen
      (let [fqn  (first queue)
            more (vec (rest queue))]
        (if (or (contains? seen fqn)
                (nil? (declaration-of reg fqn))
                (enum? reg fqn))
          (recur more seen)
          (let [targets (for [ancestor (mm/super-chain reg fqn)
                              prop     (:properties (declaration-of reg ancestor))
                              :when    (= "ObjectProperty" (mm/metamodel-type (:$class prop)))
                              :let     [t (mm/type-fqn (:type prop))]
                              :when    (and t (declaration-of reg t) (not (enum? reg t)))
                              target   (cons t (get subtypes t))]
                          target)]
            (recur (into more targets) (conj seen fqn))))))))

(defn- references?
  "Whether `fqn` or any ancestor declares an ObjectProperty pointing at another
  declaration -- as opposed to an enum, which inlines, or a scalar.

  This is the test for whether a local registry is needed, and it is not the
  same as asking whether the reachable set is just `fqn`: a concept whose only
  reference is to itself reaches nothing new, but still emits a :ref that needs
  somewhere to resolve."
  [reg fqn]
  (boolean
   (some (fn [prop]
           (and (= "ObjectProperty" (mm/metamodel-type (:$class prop)))
                (let [t (mm/type-fqn (:type prop))]
                  (boolean (and t (declaration-of reg t) (not (enum? reg t)))))))
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
  reference."
  [reg fqn & {:keys [key-fn closed] :or {key-fn keyword closed true}}]
  (when (empty? (mm/super-chain reg fqn))
    (throw (ex-info "Unknown $class -- is its model loaded?" {:fqn fqn})))
  (let [subtypes (subtype-index reg)
        needed   (referenced reg subtypes fqn)
        root     (object-schema reg subtypes fqn key-fn)
        form     (if (and (= [:ref fqn] root) (not (references? reg fqn)))
                   (declaration->map reg subtypes fqn key-fn closed)
                   [:schema
                    ;; A plain map, not a sorted one: malli consults this
                    ;; registry for keyword types too (:concerto/date-time and
                    ;; friends), and a string-keyed sorted map throws comparing
                    ;; those. Built from sorted names so the emitted form is
                    ;; reproducible.
                    {:registry (into {}
                                     (map (fn [f]
                                            [f (declaration->map reg subtypes f key-fn closed)]))
                                     (sort needed))}
                    root])]
    (m/schema form {:registry registry*})))

(defn ->edn
  "The schema as plain EDN, ready to spit to a file.

  Reads back with `(m/schema form {:registry registry*})`."
  [reg fqn & opts]
  (m/form (apply ->schema reg fqn opts)))
