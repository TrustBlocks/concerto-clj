(ns com.trustblocks.concerto.cto
  "CTO text -> metamodel EDN, by shelling out to Accord's `concerto` CLI.

  This is the one namespace that does I/O and the one that needs Node, which is
  why it is separate: `concerto.metamodel` and `concerto.malli` take data and
  have no opinion about where it came from. Anything that can produce metamodel
  JSON can feed them -- the CLI today, an instaparse port of
  `concerto-cto/lib/parser.pegjs` later, or a JSON file someone else generated.

  The grammar is normative and it drifts; reimplementing it is a standing
  obligation to track that drift. Consuming the metamodel instead is a contract
  against a versioned artifact."
  (:require [babashka.process :as p]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [com.trustblocks.concerto.metamodel :as mm]))

(defn find-cli
  "Locate the `concerto` CLI: an explicit path, then $CONCERTO_CLI, then $PATH."
  [& {:keys [cli]}]
  (let [candidate (or cli
                      (System/getenv "CONCERTO_CLI")
                      "concerto")
        resolved  (if (.contains ^String candidate "/")
                    candidate
                    (let [{:keys [exit out]} (p/sh "sh" "-c" (str "command -v " candidate))]
                      (when (zero? exit) (str/trim out))))]
    (when (and resolved (.canExecute (io/file resolved)))
      resolved)))

(defn- clojure-parse
  "The pure-Clojure parser, resolved on demand.

  Not required at the top of this namespace on purpose: instaparse uses
  `deftype` with `clojure.lang.IHashEq`, which babashka's interpreter cannot
  provide, so loading it eagerly would break every bb script that uses the CLI
  path perfectly well."
  [src]
  ((requiring-resolve 'com.trustblocks.concerto.parser/parse-string) src))

(defn- parse-with-cli [f opts]
  (let [bin (find-cli opts)]
    (when-not bin
      (throw (ex-info (str "concerto CLI not found. Install it with "
                           "`npm i -g @accordproject/concerto-cli`, set "
                           "$CONCERTO_CLI to its path, or pass "
                           ":parser :clojure to use the Clojure grammar.")
                      {:tried (or (:cli opts) (System/getenv "CONCERTO_CLI") "concerto")})))
    (let [{:keys [exit out err]} (p/sh bin "parse" "--model" (.getPath ^java.io.File f))]
      (when-not (zero? exit)
        (throw (ex-info "concerto parse failed"
                        {:path (.getPath ^java.io.File f) :exit exit :err err})))
      (-> (json/parse-string out) mm/json->edn mm/strip-locations))))

(defn parse
  "Parse one .cto file to metamodel EDN, with source locations stripped.

  `:parser` chooses how:

    :cli      (default) shell out to Accord's CLI. Works on the JVM and under
              babashka, and needs Node.

    :clojure  the instaparse grammar in `concerto.parser`. Needs no Node and
              works in ClojureScript, but does *not* work under babashka --
              instaparse uses `deftype` with `clojure.lang.IHashEq`, which
              babashka's interpreter cannot provide.

  The two agree: `parse-string` is byte-identical to `concerto parse` across all
  237 models in the cicero-template-library. The CLI remains the default because
  it is the reference implementation and because it runs everywhere this
  namespace does."
  [cto-path & {:keys [parser] :or {parser :cli} :as opts}]
  (let [f (io/file cto-path)]
    (when-not (.exists f)
      (throw (ex-info "CTO file not found" {:path (str f)})))
    (case parser
      :clojure (clojure-parse (slurp f))
      :cli     (parse-with-cli f opts)
      (throw (ex-info "Unknown :parser" {:parser parser :known [:cli :clojure]})))))

(defn model-files
  "Every .cto under a directory. An Accord template vendors its imports
  alongside model.cto, so pointing at the directory resolves inheritance chains
  that cross namespaces."
  [dir]
  (->> (file-seq (io/file dir))
       (filter #(.endsWith (.getName ^java.io.File %) ".cto"))
       (sort-by #(.getName ^java.io.File %))
       vec))

(defn load-registry
  "Parse a .cto file or a directory of them into a declaration registry.

  Takes the same `:parser` option as `parse`."
  [path & {:as opts}]
  (let [f (io/file path)]
    (->> (if (.isDirectory f) (model-files f) [f])
         (map #(parse % opts))
         mm/registry)))
