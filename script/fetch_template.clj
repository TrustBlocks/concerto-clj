#!/usr/bin/env bb
(ns fetch-template
  "Pull a published Accord template and convert its Concerto parts to EDN.

    bb script/fetch_template.clj NAME@VERSION [options]
    bb script/fetch_template.clj --url URL      [options]
    bb script/fetch_template.clj --list [TEXT]

  Options
    -o DIR       write registry.edn and schemas/ to DIR
    --cli PATH   path to the concerto CLI
    --refresh    ignore the cache and download again

  Templates come from https://templates.accordproject.org as `.cta` archives,
  which are zip files. Only part of one is Concerto:

    model/*.cto     Concerto models, dependencies vendored alongside  <- converted
    request.json    a Concerto instance                               <- validated
    logic/*.ts      generated classes plus hand-written clause logic
    text/*.md       TemplateMark source and sample text
    package.json    npm metadata, plus the accordproject block

  The logic is not Concerto and is not touched. Its *signature* is, though --
  request and response types are declared in the model -- so the schemas emitted
  here describe the boundary any implementation of that clause must honour.

  Everything after this script is platform-neutral: the EDN needs no CLI, no
  Node and no network, so it can be validated on the JVM, on babashka, or in a
  browser under ClojureScript."
  (:require [babashka.fs :as fs]
            [babashka.http-client :as http]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [clojure.string :as str]
            [com.trustblocks.concerto.cto :as cto]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.malli :as cm]
            [malli.core :as m]
            [malli.error :as me]))

(def ^:private library-index
  "https://templates.accordproject.org/template-library.json")

(def ^:private archive-url
  "https://templates.accordproject.org/archives/%s@%s.cta")

(def ^:private cache (fs/path ".cache" "templates"))

;; ---------------------------------------------------------------- fetching

(defn- fetch-bytes [url]
  (let [{:keys [status body]} (http/get url {:as :bytes :throw false})]
    (when-not (= 200 status)
      (throw (ex-info (str "Could not fetch " url) {:status status :url url})))
    body))

(defn- cached
  "Download `url` to `file` under the cache unless it is already there."
  [url file refresh?]
  (let [path (fs/path cache file)]
    (when (or refresh? (not (fs/exists? path)))
      (fs/create-dirs cache)
      (with-open [o (io/output-stream (fs/file path))]
        (.write o ^bytes (fetch-bytes url))))
    path))

(defn- unpack [cta]
  (let [dir (fs/path cache (str (fs/file-name cta) ".unpacked"))]
    (when (fs/exists? dir) (fs/delete-tree dir))
    (fs/unzip (fs/file cta) (fs/file dir))
    dir))

;; ---------------------------------------------------------------- reading

(defn- read-json [f] (json/parse-string (slurp (fs/file f))))

(defn- template-meta [dir]
  (let [pkg (read-json (fs/path dir "package.json"))]
    {:name    (get pkg "name")
     :version (get pkg "version")
     :runtime (get-in pkg ["accordproject" "runtime"] "(none declared)")
     :kind    (get-in pkg ["accordproject" "template"] "?")
     :cicero  (get-in pkg ["accordproject" "cicero"]
                      (get-in pkg ["accordproject" "version"] "?"))}))

(defn- instance-files
  "Every JSON file in the archive that carries a $class, so is a Concerto
  instance rather than metadata."
  [dir]
  (->> (fs/glob dir "**.json")
       (remove #(= "package.json" (str (fs/file-name %))))
       (filter #(try (contains? (read-json %) "$class") (catch Exception _ false)))
       sort))

;; ---------------------------------------------------------------- output

(defn- safe-name [fqn] (str/replace fqn #"[^A-Za-z0-9@._-]" "_"))

(defn- write-edn! [path x]
  (fs/create-dirs (fs/parent path))
  (spit (fs/file path) (with-out-str (pp/pprint x)))
  path)

(defn- emit! [out reg]
  (write-edn! (fs/path out "registry.edn") reg)
  (reduce (fn [acc fqn]
            (try
              (write-edn! (fs/path out "schemas" (str (safe-name fqn) ".edn"))
                          (cm/->edn reg fqn))
              (update acc :ok conj fqn)
              (catch Exception e
                (update acc :skipped conj [fqn (ex-message e)]))))
          {:ok [] :skipped []}
          (sort (keys reg))))

;; ---------------------------------------------------------------- reporting

(defn- report-instances [reg dir]
  (doseq [f (instance-files dir)]
    (let [raw (read-json f)
          i   (inst/json->edn raw)
          fqn (inst/class-of i)]
      (printf "  %-24s %s\n" (str (fs/file-name f)) fqn)
      (try
        (let [s (cm/->schema reg fqn)]
          (if (m/validate s i)
            (println "                           VALID")
            (println "                           INVALID"
                     (pr-str (me/humanize (m/explain s i))))))
        (catch Exception e
          (println "                           CANNOT CHECK:" (ex-message e)))))))

(defn- list-templates [needle refresh?]
  (let [idx  (json/parse-string (slurp (fs/file (cached library-index "index.json" refresh?))))
        rows (cond->> (sort (keys idx))
               needle (filter #(str/includes? (str/lower-case %) (str/lower-case needle))))]
    (doseq [k rows]
      (printf "  %-46s %s\n" k (get-in idx [k "ciceroVersion"] "")))
    (printf "\n  %d of %d templates\n" (count rows) (count idx))))

;; ---------------------------------------------------------------- main

(defn- parse-args [args]
  (loop [[a & more] args, opts {}]
    (cond
      (nil? a) opts
      (= "-o" a)             (recur (rest more) (assoc opts :out (first more)))
      (#{"--cli" "--url"} a) (recur (rest more) (assoc opts (keyword (subs a 2)) (first more)))
      (= "--list" a)    (recur (rest more) (assoc opts :list (or (first more) "")))
      (= "--refresh" a) (recur more (assoc opts :refresh true))
      (#{"-h" "--help"} a) (assoc opts :help true)
      :else (recur more (assoc opts :template a)))))

(defn -main [& args]
  (let [{:keys [template url out cli list refresh help]} (parse-args args)]
    (when (or help (not (or template url list)))
      (println (:doc (meta (the-ns 'fetch-template))))
      (System/exit (if help 0 1)))

    (if list
      (list-templates (not-empty list) refresh)
      (let [[nm ver] (when template (str/split template #"@" 2))
            url      (or url (format archive-url nm ver))
            file     (or (some-> template (str ".cta")) (str (fs/file-name url)))
            cta      (cached url file refresh)
            dir      (unpack cta)
            meta*    (template-meta dir)
            models   (fs/glob dir "model*/*.cto")]

        (printf "\n%s@%s   runtime=%s  kind=%s  cicero=%s\n"
                (:name meta*) (:version meta*) (:runtime meta*) (:kind meta*) (:cicero meta*))
        (printf "%s  (%d bytes cached)\n\n" url (fs/size cta))

        (when (empty? models)
          (println "No model/*.cto in this archive -- nothing Concerto to convert.")
          (System/exit 1))

        (println "models")
        (doseq [f models] (printf "  %s\n" (fs/file-name f)))

        (let [reg (cto/load-registry (fs/file (fs/parent (first models))) :cli cli)]
          (printf "\n%d declarations\n" (count reg))

          (println "\ninstances shipped in the archive")
          (report-instances reg dir)

          (when out
            (let [{:keys [ok skipped]} (emit! out reg)]
              (printf "\nwrote %s/registry.edn and %d schemas\n" out (count ok))
              (doseq [[fqn why] skipped]
                (printf "  skipped %-58s %s\n" fqn (subs why 0 (min 80 (count why))))))))))))

(when (= *file* (System/getProperty "babashka.file"))
  (apply -main *command-line-args*))
