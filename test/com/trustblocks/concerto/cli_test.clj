(ns com.trustblocks.concerto.cli-test
  "The command line, run in-process through `cli/run` -- which returns what it
  would print and exit with -- so these work under babashka as well as on the JVM.
  A few run `bb` itself, to prove the thing that is actually installed.

  Models are the JSON the repo already carries (so no parser is needed), plus
  small ones written here when a test needs a particular shape."
  (:require [babashka.process :as p]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.cli :as cli]
            [com.trustblocks.concerto.cto :as cto]
            [com.trustblocks.concerto.metamodel :as mm]))

(def ^:private fx "test-resources/fixtures/promissory-note/")

(def ^:private note-models
  (mapv #(str fx %) ["model.json"
                     "@models.accordproject.org.accordproject.contract@0.2.0.json"
                     "@models.accordproject.org.accordproject.runtime@0.2.0.json"
                     "@models.accordproject.org.money@0.3.0.json"]))

(def ^:private note-fqn "org.accordproject.promissorynote@0.2.0.TemplateModel")
(def ^:private sample (str fx "sample.json"))

(defn- tmp-dir []
  (str (java.nio.file.Files/createTempDirectory
        "concerto-clj-test" (make-array java.nio.file.attribute.FileAttribute 0))))

(defn- tmp-file [dir name content]
  (let [f (str dir "/" name)] (spit f content) f))

(defn- run [& args] (cli/run (vec (map str args))))

(defn- models [] (into ["--model"] note-models))

(def ^:private mmc "concerto.metamodel@1.0.0.")

(defn- concept-json [& decls]
  (json/generate-string
   {"$class" (str mmc "Model") "namespace" "t@1.0.0" "imports" []
    "declarations" (vec decls)}))

(defn- prop [kind nm optional]
  {"$class" (str mmc kind) "name" nm "isArray" false "isOptional" optional})

(def ^:private person
  {"$class" (str mmc "ConceptDeclaration") "name" "P" "isAbstract" false
   "properties" [(prop "StringProperty" "name" false)
                 (prop "StringProperty" "nick" true)
                 (prop "IntegerProperty" "age" true)]})

;; ------------------------------------------------------------------- validate

(deftest validate-says-so-when-an-instance-is-valid
  (let [{:keys [exit out err]} (apply run "validate" "--input" sample (models))]
    (is (= 0 exit))
    (is (str/includes? out (str "valid: " note-fqn)))
    (is (str/blank? err))))

(deftest validate-names-what-is-wrong-and-exits-nonzero
  (let [dir (tmp-dir)
        bad (tmp-file dir "bad.json"
                      (json/generate-string
                       (-> (json/parse-string (slurp sample))
                           (assoc "defaultDays" "sixty")
                           (assoc-in ["amount" "doubleValue"] "lots"))))
        {:keys [exit out err]} (apply run "validate" "--input" bad (models))]
    (is (= 1 exit) "a finding is status 1, which Concerto's own validate does not give")
    (is (str/blank? out))
    (is (str/includes? err "$.defaultDays: should be an integer"))
    (is (str/includes? err "$.amount.doubleValue: should be a number"))))

(deftest validate-formats
  (let [dir (tmp-dir)
        bad (tmp-file dir "bad.json"
                      (json/generate-string (assoc (json/parse-string (slurp sample)) "defaultDays" "x")))]
    (testing "json"
      (let [{:keys [exit out]} (apply run "validate" "--input" bad "--format" "json" (models))
            r (json/parse-string out)]
        (is (= 1 exit))
        (is (false? (get r "valid")))
        (is (= note-fqn (get r "class")))
        (is (= [{"path" "$.defaultDays" "message" "should be an integer"}] (get r "errors")))))
    (testing "edn"
      (let [{:keys [out]} (apply run "validate" "--input" sample "--format" "edn" (models))
            r (edn/read-string out)]
        (is (true? (:valid r)))
        (is (= note-fqn (:class r)))))))

(deftest validate-reads-standard-input
  (let [{:keys [exit out]} (with-in-str (slurp sample)
                             (apply run "validate" "--input" "-" (models)))]
    (is (= 0 exit))
    (is (str/includes? out "valid:"))))

(deftest validate-takes-the-concerto-version
  (let [dir (tmp-dir)
        loose (tmp-file dir "loose.json"
                        (json/generate-string (assoc (json/parse-string (slurp sample)) "date" "2019")))
        at (fn [v] (apply run "validate" "--input" loose "--concerto-version" v (models)))]
    (testing "a bare year is a DateTime in 4 and 5.0, and not from 5.2"
      (is (= 0 (:exit (at "4"))))
      (is (= 0 (:exit (at "5"))))
      (is (= 1 (:exit (at "5.2")))))
    (testing "an unsupported version is a mistake in the command"
      (let [{:keys [exit err]} (at "6")]
        (is (= 2 exit))
        (is (str/includes? err "Unsupported :concerto-version"))))))

(deftest validate-accepts-concertos-own-flags
  (testing "so a command line written for Concerto still runs"
    (let [r (apply run "validate" "--input" sample "--offline" "--functional" "--utcOffset" "0" (models))]
      (is (= 0 (:exit r)))))
  (testing "and says what it ignores, when that matters"
    (let [{:keys [exit err]} (apply run "validate" "--input" sample "--utcOffset" "5" (models))]
      (is (= 0 exit))
      (is (str/includes? err "--utcOffset 5 is ignored")))
    (let [{:keys [err]} (apply run "validate" "--input" sample "--functional" (models))]
      (is (str/includes? err "--functional is ignored")))))

(deftest validate-mistakes-are-status-two
  (testing "no input, a missing file, an instance with no $class"
    (is (= 2 (:exit (apply run "validate" (models)))))
    (is (= 2 (:exit (apply run "validate" "--input" "nope.json" (models)))))
    (let [dir (tmp-dir)
          f   (tmp-file dir "noclass.json" "{\"a\": 1}")
          {:keys [exit err]} (apply run "validate" "--input" f (models))]
      (is (= 1 exit) "that one is invalid, not a mistake: Concerto calls it so")
      (is (str/includes? err "Does not contain a $class"))))
  (testing "no model, a missing model, an unknown flag"
    (is (= 2 (:exit (run "validate" "--input" sample))))
    (is (= 2 (:exit (run "validate" "--input" sample "--model" "nope.json"))))
    (let [{:keys [exit err]} (run "validate" "--bogus" "1")]
      (is (= 2 exit))
      (is (str/includes? err "Unknown option: --bogus")))))

(deftest validate-can-check-the-models-first
  (let [dir (tmp-dir)
        bad (tmp-file dir "bad.json"
                      (concept-json
                       (assoc person "name" "Q"
                              "superType" {"$class" (str mmc "TypeIdentifier") "name" "Missing"})))
        inst (tmp-file dir "i.json" "{\"$class\": \"t@1.0.0.Q\", \"name\": \"x\"}")
        {:keys [exit err]} (run "validate" "--check" "--input" inst "--model" bad)]
    (is (= 1 exit))
    (is (str/includes? err "the models are not sound"))
    (is (str/includes? err "Could not find super type Missing"))))

;; ---------------------------------------------------------------------- check

(deftest check-passes-sound-models
  (let [{:keys [exit out]} (apply run "check" (models))]
    (is (= 0 exit))
    (is (str/includes? out "4 models: no problems"))))

(deftest check-names-the-rule-and-the-class
  (let [dir (tmp-dir)
        bad (tmp-file dir "bad.json"
                      (concept-json
                       (assoc person "superType" {"$class" (str mmc "TypeIdentifier") "name" "Missing"})))]
    (testing "human"
      (let [{:keys [exit err]} (run "check" "--model" bad)]
        (is (= 1 exit))
        (is (str/includes? err "CLASS_DECLARATION_004 (IllegalModelException): Could not find super type Missing"))))
    (testing "json"
      (let [{:keys [out]} (run "check" "--model" bad "--format" "json")
            r (json/parse-string out)]
        (is (false? (get r "ok")))
        (is (= "CLASS_DECLARATION_004" (get-in r ["problems" 0 "rule"])))
        (is (= "IllegalModelException" (get-in r ["problems" 0 "class"])))))))

(deftest check-can-validate-against-the-metamodel
  (let [dir (tmp-dir)
        ast (json/generate-string
             {"$class" (str mmc "Model") "namespace" "t@1.0.0" "imports" []
              "declarations" [(assoc person "bogus" 1)]})
        f   (tmp-file dir "extra.json" ast)]
    (is (= 0 (:exit (run "check" "--model" f))) "off by default, as in Concerto")
    (let [{:keys [exit err]} (run "check" "--model" f "--metamodel-validation")]
      (is (= 1 exit))
      (is (str/includes? err "MetamodelException"))
      (is (str/includes? err "Unexpected properties for type concerto.metamodel@1.0.0.ConceptDeclaration: bogus")))))

;; --------------------------------------------------------------------- schema

(deftest schema-as-malli-and-as-json-schema
  (testing "malli, as EDN that reads back"
    (let [{:keys [exit out]} (apply run "schema" "--concept" note-fqn (models))]
      (is (= 0 exit))
      (is (= :schema (first (edn/read-string out))))))
  (testing "json-schema, as JSON"
    (let [{:keys [exit out]} (apply run "schema" "--concept" note-fqn "--format" "json-schema" (models))
          r (json/parse-string out)]
      (is (= 0 exit))
      (is (= "http://json-schema.org/draft-07/schema#" (get r "$schema")))))
  (testing "to a file"
    (let [dir (tmp-dir) f (str dir "/s.json")
          {:keys [exit out]} (apply run "schema" "--concept" note-fqn "--format" "json-schema"
                                    "--output" f (models))]
      (is (= 0 exit))
      (is (str/includes? out "wrote"))
      (is (get (json/parse-string (slurp f)) "$schema"))))
  (testing "an unknown type, or none, is a mistake"
    (is (= 2 (:exit (apply run "schema" "--concept" "nope.Type" (models)))))
    (is (= 2 (:exit (apply run "schema" (models)))))))

;; ------------------------------------------------------------------- generate

(deftest generate-makes-instances-that-validate
  (let [dir (tmp-dir)]
    (testing "one, then several as an array"
      (let [one  (apply run "generate" "--concept" note-fqn "--seed" "7" (models))
            many (apply run "generate" "--concept" note-fqn "--count" "3" "--seed" "7" (models))]
        (is (= 0 (:exit one)))
        (is (map? (json/parse-string (:out one))))
        (is (= 3 (count (json/parse-string (:out many)))))))
    (testing "and what it makes is valid, in each version, read back through validate"
      (doseq [v ["4" "5" "5.2"]
              :let [out (:out (apply run "generate" "--concept" note-fqn "--seed" "3"
                                     "--concerto-version" v (models)))
                    f   (tmp-file dir (str "g" v ".json") out)
                    r   (apply run "validate" "--input" f "--concerto-version" v (models))]]
        (is (= 0 (:exit r)) (str v ": " (:err r)))))
    (testing "the same seed gives the same instance"
      (is (= (:out (apply run "generate" "--concept" note-fqn "--seed" "9" (models)))
             (:out (apply run "generate" "--concept" note-fqn "--seed" "9" (models))))))
    (testing "and generate can be piped into validate"
      (let [out (:out (apply run "generate" "--concept" note-fqn "--seed" "5" (models)))]
        (is (= 0 (:exit (with-in-str out (apply run "validate" "--input" "-" (models))))))))))

(deftest generate-optional-fields
  (let [dir (tmp-dir)
        m   (tmp-file dir "person.json" (concept-json person))
        keys-of (fn [& flags]
                  (->> (apply run "generate" "--model" m "--concept" "t@1.0.0.P" "--count" "30" "--seed" "2" flags)
                       :out json/parse-string (map #(set (keys %)))))]
    (testing "--includeOptionalFields, as Concerto's generate has it, includes every one"
      (is (every? #(every? % ["name" "nick" "age"]) (keys-of "--includeOptionalFields"))))
    (testing "--optional never leaves them all out"
      (is (every? #(not-any? % ["nick" "age"]) (keys-of "--optional" "never"))))
    (testing "and by default each is there or not, where Concerto's leaves them out"
      (let [ks (keys-of)]
        (is (some #(contains? % "nick") ks))
        (is (some #(not (contains? % "nick")) ks))))))

(deftest generate-mistakes
  (is (= 2 (:exit (apply run "generate" (models)))) "no --concept")
  (is (= 2 (:exit (apply run "generate" "--concept" "nope.Type" (models))))))

;; ---------------------------------------------------------------------- parse

(deftest parse-reads-models-and-writes-them-out
  (testing "JSON in, JSON out, the same model"
    (let [{:keys [exit out]} (run "parse" "--model" (first note-models))
          written (json/parse-string out)]
      (is (= 0 exit))
      (is (= "concerto.metamodel@1.0.0.Model" (get written "$class")))
      (is (= (mm/strip-locations (mm/json->edn (json/parse-string (slurp (first note-models)))))
             (mm/json->edn written)))))
  (testing "several models are written as Models, as Concerto does"
    (let [r (json/parse-string (:out (apply run "parse" (models))))]
      (is (= "concerto.metamodel@1.0.0.Models" (get r "$class")))
      (is (= 4 (count (get r "models"))))))
  (testing "as EDN"
    (let [{:keys [out]} (run "parse" "--model" (first note-models) "--format" "edn")]
      (is (= "org.accordproject.promissorynote@0.2.0" (:namespace (edn/read-string out))))))
  (testing "Concerto's --excludeLineLocations is accepted"
    (is (= 0 (:exit (run "parse" "--model" (first note-models) "--excludeLineLocations"))))))

;; ----------------------------------------------------------------------- help

(deftest help-and-usage
  (testing "no arguments, and --help, list the commands"
    (doseq [args [[] ["--help"] ["help"]]
            :let [{:keys [exit out]} (cli/run args)]]
      (is (= 0 exit))
      (doseq [c ["validate" "check" "schema" "generate" "parse"]]
        (is (str/includes? out c)))
      (is (str/includes? out "compile") "and says which of Concerto's it leaves to Concerto")))
  (testing "a command's own help lists its options, Concerto's flags included"
    (let [{:keys [exit out]} (run "validate" "--help")]
      (is (= 0 exit))
      (doseq [flag ["--input" "--model" "--offline" "--utcOffset" "--functional" "--concerto-version"]]
        (is (str/includes? out flag)))))
  (testing "an unknown command is a mistake, with the usage"
    (let [{:keys [exit err]} (run "frobnicate")]
      (is (= 2 exit))
      (is (str/includes? err "unknown command: frobnicate"))
      (is (str/includes? err "usage:")))))

;; -------------------------------------------------------------- model loading

(deftest a-directory-of-cto-files-is-its-files
  (when-not (some? (System/getProperty "babashka.version"))
    (testing "on the JVM, parsed in-process"
      (let [{:keys [exit out]} (run "check" "--parser" "clojure"
                                    "--model" "test-resources/conformance-validate/models/maps")]
        (is (= 0 exit) out)
        (is (str/includes? out "model"))))))

(deftest cto-parsed-by-accords-cli-is-cached-by-content
  (when (cto/find-cli)
    (let [cache (tmp-dir)
          cto   "test-resources/conformance-validate/models/maps/maps.cto"]
      (System/setProperty "concerto-clj.cache" cache)
      (try
        (let [parse (fn [& flags]
                      (json/parse-string (:out (apply run "parse" "--parser" "cli" "--model" cto flags))))]
          (is (= "org.concerto.validate.maps@1.0.0" (get (parse "--format" "json") "namespace")))
          (let [cached (vec (.listFiles (io/file cache)))]
            (is (= 1 (count cached)) "one file, named by the content's hash")
            (testing "and the second run reads it: swap in another model and that is what comes back"
              (spit (first cached) (json/generate-string
                                    {"$class" (str mmc "Model") "namespace" "from.cache@1.0.0"
                                     "imports" [] "declarations" []}))
              (is (= "from.cache@1.0.0" (get (parse "--format" "json") "namespace")))
              (testing "unless it is told not to"
                (is (= "org.concerto.validate.maps@1.0.0"
                       (get (parse "--no-cache") "namespace")))))))
        (finally (System/clearProperty "concerto-clj.cache"))))))

(deftest an-unavailable-parser-says-what-to-do
  (when-not (cto/find-cli)
    (let [{:keys [exit err]} (run "check" "--parser" "cli" "--no-cache"
                                  "--model" "test-resources/conformance-validate/models/maps/maps.cto")]
      (is (= 2 exit))
      (is (str/includes? err "JSON")))))

;; ------------------------------------------------------- the installed thing

(defn- bb? [] (zero? (:exit (p/sh "sh" "-c" "command -v bb"))))

(deftest it-runs-as-babashka-runs-it
  (when (bb?)
    (testing "the real process: output, and the exit status a script would read"
      (let [ok  (apply p/sh "bb" "-m" "com.trustblocks.concerto.cli" "validate" "--input" sample (models))
            bad (apply p/sh "bb" "-m" "com.trustblocks.concerto.cli" "validate" "--input" "nope.json" (models))]
        (is (= 0 (:exit ok)))
        (is (str/includes? (:out ok) "valid:"))
        (is (= 2 (:exit bad)))
        (is (str/includes? (:err bad) "input not found"))))
    (testing "and `bb cli`, the task in bb.edn"
      (let [r (apply p/sh "bb" "cli" "check" (models))]
        (is (= 0 (:exit r)))
        (is (str/includes? (:out r) "no problems"))))))
