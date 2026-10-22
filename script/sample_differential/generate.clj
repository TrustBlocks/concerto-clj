;; Sample differential, part 1: generate instances for every template type in the
;; cicero-template-library and write them out for check_cli.sh.
;;
;;   clojure -M:generators script/sample_differential/generate.clj TEMPLATES_DIR OUT_DIR [N]
;;
;; Writes N (default 4) samples of each template's TemplateModel and request type,
;; as OUT_DIR/<template>__<sample|request>__<i>.json, and reports any this
;; library's own schema rejects (there should be none). check_cli.sh then asks
;; concerto-core whether it agrees. Needs test.check and test.chuck, which the
;; :generators alias carries.
(require '[cheshire.core :as json] '[clojure.java.io :as io] '[clojure.string :as str] '[malli.core :as m]
         '[com.trustblocks.concerto.generator :as g] '[com.trustblocks.concerto.malli :as cm]
         '[com.trustblocks.concerto.parser :as parser] '[com.trustblocks.concerto.metamodel :as mm] '[com.trustblocks.concerto.instance :as inst])
(def ^:private args *command-line-args*)
(def root (io/file (first args)))
(def out (io/file (second args)))
(.mkdirs out)
(def n (if-let [x (nth args 2 nil)] (parse-long x) 4))
(def manifest (atom []))
(def failures (atom []))
(doseq [d (sort (.listFiles root)) :when (.isDirectory d)
        :let [models (->> (.listFiles (io/file d "model")) (filter #(str/ends-with? (.getName %) ".cto")) sort)]
        :when (seq models)
        f ["sample.json" "request.json"]
        :let [in (io/file d f)] :when (.exists in)]
  (let [fqn (get (json/parse-string (slurp in)) "$class")
        reg (mm/registry (mapv #(parser/parse-string (slurp %)) models))
        s   (cm/->schema reg fqn :concerto-version "5.2")]
    (try
      (doseq [[i x] (map-indexed vector (g/sample reg fqn n :seed 11 :concerto-version "5.2"))]
        (let [fname (str (.getName d) "__" (str/replace f ".json" "") "__" i ".json")]
          (spit (io/file out fname) (json/generate-string x))
          (swap! manifest conj {:template (.getName d) :file fname :ours (m/validate s (inst/json->edn x))})))
      (catch Throwable e (swap! failures conj [(.getName d) f (subs (str (ex-message e)) 0 (min 100 (count (str (ex-message e)))))])))))
(spit (io/file out "manifest.json") (json/generate-string @manifest))
(println (count @manifest) "samples written;" (count (remove :ours @manifest)) "invalid by our own schema;" (count @failures) "templates failed to generate")
(doseq [[t f m] @failures] (println "  FAILED" t f "-" m))
(shutdown-agents)
