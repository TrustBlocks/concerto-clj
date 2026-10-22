(ns com.trustblocks.concerto.json-schema
  "A Concerto model as JSON Schema, by way of the Malli schema this library
  compiles for it -- so the JSON Schema and the validator come from one source
  and cannot drift.

  This is Malli's export, not Concerto's own `compile --target jsonschema`, and
  the two are not the same document. What it describes is what `malli`
  validates: closed objects, `$class` as the discriminator of a polymorphic
  property, the DateTime wire form as a `date-time` string, a Concerto map as an
  object with `additionalProperties`. It is plain data with string keys, ready
  to hand to a JSON library."
  (:require [clojure.walk :as walk]
            [com.trustblocks.concerto.malli :as cm]
            [malli.json-schema :as malli-js]))

(defn- ->text
  "Malli speaks in keywords and compiled patterns; JSON has neither."
  [x]
  (cond
    (keyword? x) (if-let [ns- (namespace x)] (str ns- "/" (name x)) (name x))
    #?(:clj  (instance? java.util.regex.Pattern x)
       :cljs (regexp? x))
    #?(:clj (.pattern ^java.util.regex.Pattern x) :cljs (.-source x))
    :else x))

(defn- flagged?
  "A pattern this library writes with flags as a leading group: `(?i)^abc$`."
  [x]
  (and (string? x) (boolean (re-find #"^\(\?[a-z]+\)" x))))

(defn- drop-flagged-patterns
  "JavaScript has no inline flags (`(?i)`), so a JSON Schema validator given one
  rejects the schema outright, or the pattern never matches. A schema that is
  looser than the validator is usable and one that errors is not, so the pattern
  is left out, and a `$comment` says so. Only patterns with flags: the rest are
  portable by construction, which is why the library writes them the way it does."
  [x]
  (walk/postwalk
   (fn [y]
     (if (and (map? y) (flagged? (get y "pattern")))
       (-> y
           (dissoc "pattern")
           (assoc "$comment" (str "pattern " (pr-str (get y "pattern"))
                                  " omitted: JSON Schema cannot express a regex's flags")))
       y))
   x))

(defn json-schema
  "JSON Schema (draft 7) for the Concerto instance of type `fqn`.

  Options are those of `malli/->schema`: `:concerto-version`, `:closed`. Not
  `:key-fn`: JSON Schema describes the instance as Concerto writes it, and a
  storage adapter's keys are not that."
  [reg fqn & {:as opts}]
  (let [schema (apply cm/->schema reg fqn (mapcat identity (dissoc opts :key-fn)))]
    (-> (malli-js/transform schema)
        (->> (walk/postwalk (fn [x]
                              (if (map-entry? x)
                                (let [[k v] x] [(->text k) (->text v)])
                                (->text x)))))
        drop-flagged-patterns
        (assoc "$schema" "http://json-schema.org/draft-07/schema#"))))
