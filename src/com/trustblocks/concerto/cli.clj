(ns com.trustblocks.concerto.cli
  "The command line: `validate`, `check`, `schema`, `generate` and `parse`, built
  to run under babashka -- a validation takes a third of a second, about what
  Concerto's own Node CLI takes, and well under the JVM's two.

    bb cli validate --input sample.json --model model.json contract.json
    bb cli check --model model/
    bb cli generate --model model/ --concept org.acme@1.0.0.Person --count 3

  Installed with bbin it is `concerto-clj`, not `concerto`, so it does not hide
  Accord's own CLI, whose flags it follows where it has the command: `validate`
  takes `--input`, `--model`, `--offline`, `--utcOffset` and `--functional`;
  `parse` takes `--model`, `--output` and `--excludeLineLocations`; `generate`
  takes `--model`, `--concept` and `--includeOptionalFields`. Where it differs it
  says so rather than quietly doing something else: see `--help`.

  A model is a `.cto` file, a directory of them, or the JSON that `concerto parse`
  writes. JSON is read anywhere. A `.cto` needs a parser, and babashka cannot run
  the Clojure one (instaparse does not load there), so under babashka it is
  parsed by Accord's CLI and the result cached, keyed by the file's content; on
  the JVM it is parsed in-process.

  Exit status: 0 for success, 1 for a finding (an invalid instance, a model
  problem), 2 for a mistake in the command or the files. Concerto's own `validate`
  exits 0 whatever it finds, which is no use in a script."
  (:require [babashka.cli :as cli]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [clojure.string :as str]
            [com.trustblocks.concerto.cto :as cto]
            [com.trustblocks.concerto.instance :as inst]
            [com.trustblocks.concerto.json-schema :as cjs]
            [com.trustblocks.concerto.malli :as cm]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.model-check :as mc]
            [malli.core :as m]
            [malli.error :as me]))

;; ------------------------------------------------------------------- plumbing

(defn- fail
  "A mistake in the command or the files: exit 2, with `message`."
  [message & [data]]
  (throw (ex-info message (assoc data ::usage-error true))))

(defn- babashka? [] (some? (System/getProperty "babashka.version")))

(defn- sha256 [^String s]
  (let [md (java.security.MessageDigest/getInstance "SHA-256")]
    (apply str (map #(format "%02x" (bit-and % 0xff)) (.digest md (.getBytes s "UTF-8"))))))

(defn- ->version
  "`--concerto-version` is a string on the command line: `4` means 4, `5.2` stays
  5.2. The library reads an integer as that major's first release."
  [v]
  (cond (nil? v) 4
        (re-matches #"\d+" (str v)) (parse-long (str v))
        :else (str v)))

(defn- ->json [x] (str (json/generate-string x {:pretty true}) "\n"))

(defn- edn-text [x] (with-out-str (pp/pprint x)))

(defn- lines
  "`xs` as lines of text, and nothing at all when there are none -- not a blank
  line, which would be printed."
  [& xs]
  (let [xs (remove nil? xs)]
    (if (seq xs) (str (str/join "\n" xs) "\n") "")))

(defn- write-out
  "`text` to `file` when given (and a line saying so), else back to be printed."
  [text file]
  (if file
    (do (spit file text) {:exit 0 :out (str "wrote " file "\n")})
    {:exit 0 :out text}))

;; --------------------------------------------------------------------- models

(defn- cache-dir
  "Where parsed models are kept: `$CONCERTO_CLJ_CACHE` (or the `concerto-clj.cache`
  system property), else `concerto-clj/ast` under `$XDG_CACHE_HOME` or `~/.cache`."
  []
  (if-let [d (or (System/getProperty "concerto-clj.cache") (System/getenv "CONCERTO_CLJ_CACHE"))]
    (io/file d)
    (io/file (or (System/getenv "XDG_CACHE_HOME") (str (System/getProperty "user.home") "/.cache"))
             "concerto-clj" "ast")))

(defn- cache-file [text]
  (io/file (cache-dir) (str (sha256 text) ".json")))

(defn- parse-cto
  "A `.cto` file as metamodel EDN. With Accord's CLI, which takes about half a
  second a file, the answer is kept by content under the user's cache directory,
  so the second run is as fast as a JSON one; `--no-cache` skips it. The
  in-process parser needs no cache."
  [file {:keys [parser cache]}]
  (let [parser (if (= :auto parser) (if (babashka?) :cli :clojure) parser)]
    (if (= :clojure parser)
      (cto/parse file :parser :clojure)
      (let [text   (slurp file)
            cached (cache-file text)]
        (if (and cache (.exists cached))
          (mm/json->edn (json/parse-string (slurp cached)))
          (let [model (try
                        (cto/parse file :parser :cli)
                        (catch clojure.lang.ExceptionInfo e
                          (if (re-find #"CLI not found" (ex-message e))
                            (fail (str (ex-message e)
                                       "\n\nOr pass the models as JSON, which `concerto parse` writes"
                                       " and needs no parser, or run on the JVM, which parses in-process.")
                                  (ex-data e))
                            (throw e))))]
            (when cache
              (io/make-parents cached)
              (spit cached (json/generate-string (inst/edn->json model))))
            model))))))

(defn- model-paths
  "A directory as the `.cto` files in it, anything else as itself."
  [paths]
  (mapcat (fn [p]
            (let [f (io/file p)]
              (cond (not (.exists f)) (fail (str "model not found: " p) {:path p})
                    (.isDirectory f)  (or (seq (map str (cto/model-files f)))
                                          (fail (str "no .cto files in " p) {:path p}))
                    :else             [p])))
          paths))

(defn- load-models
  "The models named by `--model`, in order, as metamodel EDN."
  [{:keys [model] :as opts}]
  (when (empty? model)
    (fail "no models: give --model a .cto file, a directory of them, or JSON"))
  (->> (model-paths model)
       (mapv (fn [p]
               (if (str/ends-with? p ".json")
                 (-> (json/parse-string (slurp p)) mm/json->edn mm/strip-locations)
                 (parse-cto (io/file p) opts))))))

(defn- registry [models] (mm/registry models))

(def ^:private stdin-token
  "What a bare `-` is parsed as. Newer `babashka.cli` reads `-` as the start of an
  option, where the one built into babashka reads it as a value; asking for
  standard input should not depend on which."
  "\u0000stdin")

(defn- read-input [input]
  (when-not input (fail "no instance: give --input a JSON file, or - for standard input"))
  (let [text (if (= stdin-token input)
               (slurp *in*)
               (if (.exists (io/file input)) (slurp input) (fail (str "input not found: " input))))]
    (try (json/parse-string text)
         (catch Exception e (fail (str "input is not JSON: " (ex-message e)))))))

(defn- concept-of [{:keys [concept]} reg]
  (when-not concept (fail "no type: give --concept the fully qualified name of a declaration"))
  (when (empty? (mm/super-chain reg concept))
    (fail (str "unknown type " concept ": is its model loaded?")))
  concept)

;; ------------------------------------------------------------------- commands

(defn- json-path [in]
  (apply str "$" (map #(if (integer? %) (str "[" % "]") (str "." (name %))) in)))

(defn- findings
  "Why an instance is invalid, as [{:path :message}]."
  [schema edn]
  (->> (:errors (me/with-error-messages (m/explain schema edn)))
       (map (fn [e] {:path (json-path (:in e)) :message (or (:message e) "is invalid")}))
       distinct
       vec))

(defn- warn-ignored
  "Concerto flags that are accepted so a command line written for Concerto still
  runs, and do nothing here, said so."
  [{:keys [utcOffset functional]}]
  (cond-> []
    (and utcOffset (not (zero? utcOffset)))
    (conj (str "warning: --utcOffset " utcOffset " is ignored; a DateTime is checked as written"))
    functional
    (conj "warning: --functional is ignored; there is one validator")))

(defn- validate [{:keys [input format check] :as opts}]
  (let [models  (load-models opts)
        version (->version (:concerto-version opts))
        problems (when check (mc/check models))
        warnings (warn-ignored opts)]
    (if (seq problems)
      {:exit 1
       :err  (apply lines (concat warnings
                                  ["the models are not sound:"]
                                  (map #(str "  " (name (or (:rule %) :MODEL)) ": " (:message %)) problems)))}
      (let [data   (read-input input)
            fqn    (get data "$class")
            reg    (registry models)
            _      (when-not fqn
                     (throw (ex-info "no $class" {::finding "Invalid JSON data. Does not contain a $class type identifier"})))
            schema (cm/->schema reg fqn :concerto-version version)
            errs   (findings schema (inst/json->edn data))
            result {:valid (empty? errs) :class fqn :concerto-version (str version) :errors errs}]
        (case format
          :json {:exit (if (:valid result) 0 1) :out (->json result) :err (apply lines warnings)}
          :edn  {:exit (if (:valid result) 0 1) :out (edn-text result) :err (apply lines warnings)}
          (if (:valid result)
            {:exit 0 :out (lines (str "valid: " fqn " (concerto-version " version ")")) :err (apply lines warnings)}
            {:exit 1
             :err  (apply lines (concat warnings
                                        [(str "invalid: " fqn)]
                                        (map #(str "  " (:path %) ": " (:message %)) errs)))}))))))

(defn- check [opts]
  (let [models   (load-models opts)
        dv       (:decorator-validation opts)
        options  (cond-> {}
                   dv (assoc :decoratorValidation {:missingDecorator dv :invalidDecorator dv})
                   (:metamodel-validation opts) (assoc :metamodelValidation true))
        problems (mc/check models :options options
                           :validate-on-load (repeat (count models) (boolean (:metamodel-validation opts))))
        result   {:ok (empty? problems)
                  :problems (mapv #(select-keys % [:rule :class :message :type]) problems)}]
    (case (:format opts)
      :json {:exit (if (:ok result) 0 1) :out (->json (update result :problems (partial mapv #(update % :rule (fnil name :MODEL)))))}
      :edn  {:exit (if (:ok result) 0 1) :out (edn-text result)}
      (if (:ok result)
        {:exit 0 :out (lines (str (count models) " model" (when (not= 1 (count models)) "s") ": no problems"))}
        {:exit 1
         :err  (apply lines (map #(str (name (or (:rule %) :MODEL)) " (" (:class %) "): " (:message %))
                                 problems))}))))

(defn- schema-command [opts]
  (let [reg (registry (load-models opts))
        fqn (concept-of opts reg)
        v   (->version (:concerto-version opts))]
    (case (:format opts)
      :json-schema (write-out (->json (cjs/json-schema reg fqn :concerto-version v)) (:output opts))
      (write-out (edn-text (cm/->edn reg fqn :concerto-version v)) (:output opts)))))

(defn- generate [{n :count :keys [seed includeOptionalFields optional] :as opts}]
  (let [reg (registry (load-models opts))
        fqn (concept-of opts reg)
        v   (->version (:concerto-version opts))
        sample (try
                 (requiring-resolve 'com.trustblocks.concerto.generator/sample)
                 (catch Exception _
                   (fail (str "generation needs org.clojure/test.check on the classpath; "
                              "see the :generators alias in deps.edn"))))
        mode   (cond includeOptionalFields :always optional optional :else :random)
        xs     (try
                 (sample reg fqn n
                         :concerto-version v :optional mode
                         :seed (or seed (rand-int 1000000)))
                 (catch Exception e
                   (if (re-find #"test-chuck" (str (ex-message e)))
                     (fail (str "a String in " fqn " has a regex validator, which is generated from "
                                "the pattern with test.chuck. It is not available under babashka; "
                                "run on the JVM: clojure -M:cli generate ..."))
                     (throw e))))]
    (write-out (->json (if (= 1 n) (first xs) xs)) (:output opts))))

(defn- parse [{:keys [format output] :as opts}]
  (let [models (load-models opts)
        model  (if (= 1 (count models))
                 (first models)
                 {:$class "concerto.metamodel@1.0.0.Models" :models models})]
    (write-out (if (= :edn format) (edn-text model) (->json (inst/edn->json model))) output)))

;; ---------------------------------------------------------------------- specs

(def ^:private model-spec
  {:model  {:desc "model files: .cto, a directory of them, or JSON from `concerto parse`"
            :ref "<file>..." :coerce []}
   :parser {:desc "how a .cto is parsed: auto, cli (Accord's, needs Node) or clojure (JVM only)"
            :ref "<parser>" :coerce :keyword :default :auto}
   :cache  {:desc "keep what Accord's CLI parses, by content" :default true :coerce :boolean}})

(def ^:private version-spec
  {:concerto-version {:desc "the Concerto to agree with: 3, 4, 5, or 5.2 for the strict one (default 4)"
                      :ref "<version>" :coerce :string}})

(def ^:private format-spec
  {:format {:desc "human, json or edn" :ref "<format>" :coerce :keyword :default :human}})

(def ^:private commands
  {"validate"
   {:summary "validate a JSON instance against its model (Concerto's validate)"
    :handler validate
    :spec (merge model-spec version-spec format-spec
                 {:input   {:desc "JSON to validate; - for standard input" :ref "<file>"}
                  :check   {:desc "check the models first, as `check` does" :coerce :boolean}
                  ;; Concerto's own flags, accepted so its command lines run.
                  :offline {:desc "accepted; nothing is ever fetched" :coerce :boolean}
                  :utcOffset {:desc "accepted; ignored, with a warning" :ref "<hours>" :coerce :long}
                  :functional {:desc "accepted; ignored, with a warning" :coerce :boolean}})}

   "check"
   {:summary "are the models well formed? (what Concerto's ModelManager checks on load)"
    :handler check
    :spec (merge model-spec format-spec
                 {:decorator-validation {:desc "validate decorators: error, warning or off"
                                         :ref "<level>" :coerce :string}
                  :metamodel-validation {:desc "also validate each model against the metamodel"
                                         :coerce :boolean}})}

   "schema"
   {:summary "a type as a Malli schema (EDN) or as JSON Schema"
    :handler schema-command
    :spec (merge model-spec version-spec
                 {:concept {:desc "the fully qualified name of the type" :ref "<fqn>"}
                  :format  {:desc "malli or json-schema" :ref "<format>" :coerce :keyword :default :malli}
                  :output  {:desc "write to a file" :ref "<file>"}})}

   "generate"
   {:summary "sample instances of a type (Concerto's generate)"
    :handler generate
    :spec (merge model-spec version-spec
                 {:concept {:desc "the fully qualified name of the type" :ref "<fqn>"}
                  :count   {:desc "how many" :ref "<n>" :coerce :long :default 1}
                  :seed    {:desc "repeat a run" :ref "<n>" :coerce :long}
                  :includeOptionalFields {:desc "include every optional property" :coerce :boolean}
                  :optional {:desc "always, never or random (default random, where Concerto omits them)"
                             :ref "<mode>" :coerce :keyword}
                  :output  {:desc "write to a file" :ref "<file>"}
                  :disableValidation {:desc "accepted; what is generated always validates" :coerce :boolean}})}

   "parse"
   {:summary "models as metamodel JSON (Concerto's parse)"
    :handler parse
    :spec (merge model-spec
                 {:format {:desc "json or edn" :ref "<format>" :coerce :keyword :default :json}
                  :output {:desc "write to a file" :ref "<file>"}
                  :excludeLineLocations {:desc "accepted; locations are never written" :coerce :boolean}})}})

(defn- usage []
  (lines
   "concerto-clj: Concerto models and instances, from Clojure."
   ""
   "usage: concerto-clj <command> [options]"
   ""
   "commands:"
   (str/join "\n" (for [[nm {:keys [summary]}] (sort commands)] (format "  %-10s %s" nm summary)))
   ""
   "Run `concerto-clj <command> --help` for a command's options."
   ""
   "Concerto's own CLI has more commands (compile, get, print, version, compare,"
   "infer, decorate, extract-decorators, convert-dcs, lint); use it for those."))

(defn- command-usage [nm]
  (let [{:keys [summary spec]} (get commands nm)]
    (lines (str "concerto-clj " nm ": " summary) "" (cli/format-opts {:spec spec}))))

;; ------------------------------------------------------------------------ run

(defn run
  "Run a command line. Returns {:exit :out :err} and does not print or exit, so
  it can be tested; `-main` does both."
  [args]
  (let [[command & more] args]
    (try
      (cond
        (or (nil? command) (#{"--help" "-h" "help"} command)) {:exit 0 :out (usage)}
        (= "--version" command) {:exit 0 :out "concerto-clj (see the project's version)\n"}
        (not (contains? commands command))
        {:exit 2 :err (lines (str "unknown command: " command) "" (usage))}

        (some #{"--help" "-h"} more) {:exit 0 :out (command-usage command)}

        :else
        (let [{:keys [handler spec]} (get commands command)
              more (mapv #(if (= "-" %) stdin-token %) more)
              opts (try (cli/parse-opts more {:spec spec :restrict true})
                        (catch clojure.lang.ExceptionInfo e
                          (let [d (ex-data e)]
                            (if (= :org.babashka/cli (:type d))
                              ;; Worded here: the library's own wording differs by version.
                              (fail (str (if (and (= :restrict (:cause d)) (:option d))
                                           (str "Unknown option: --" (name (:option d)))
                                           (ex-message e))
                                         "\n\n" (command-usage command)))
                              (throw e)))))]
          (handler opts)))
      (catch clojure.lang.ExceptionInfo e
        (let [data (ex-data e)]
          (cond
            (::usage-error data) {:exit 2 :err (lines (str "error: " (ex-message e)))}
            (::finding data)     {:exit 1 :err (lines (str "invalid: " (::finding data)))}
            :else                {:exit 2 :err (lines (str "error: " (ex-message e)))}))))))

(defn -main [& args]
  (let [{:keys [exit out err]} (run args)]
    (when (seq out) (print out) (flush))
    (when (seq err) (binding [*out* *err*] (print err) (flush)))
    (System/exit (or exit 0))))
