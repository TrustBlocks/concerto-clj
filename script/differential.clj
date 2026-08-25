#!/usr/bin/env bb
;; Compare the Clojure CTO parser against Accord's CLI over a tree of .cto files.
;;
;;   clojure -M script/differential.clj [DIR]
;;
;; Runs on the JVM only: instaparse does not work under babashka. Needs the
;; concerto CLI, since the CLI is the reference being compared against.
;;
;; Default DIR is ~/Code/Accord/cicero-template-library/src.

(require '[babashka.process :as bp]
         '[cheshire.core :as json]
         '[clojure.data :as data]
         '[clojure.java.io :as io]
         '[clojure.string :as str]
         '[com.trustblocks.concerto.metamodel :as mm]
         '[com.trustblocks.concerto.parser :as parser])

(def cli (or (System/getenv "CONCERTO_CLI") "concerto"))

(defn reference [f]
  (let [{:keys [exit out err]} (bp/sh cli "parse" "--model" (str f))]
    (when-not (zero? exit) (throw (ex-info "concerto parse failed" {:file (str f) :err err})))
    (-> out json/parse-string mm/json->edn mm/strip-locations)))

(defn -main [& [dir]]
  (let [root  (or dir (str (System/getProperty "user.home")
                           "/Code/Accord/cicero-template-library/src"))
        files (->> (file-seq (io/file root))
                   (filter #(str/ends-with? (.getName ^java.io.File %) ".cto"))
                   (map str) distinct sort)
        rows  (doall
               (for [f files]
                 (try (let [t (reference f) o (parser/parse-string (slurp f))]
                        (if (= t o) [:same f nil] [:diff f (take 2 (data/diff t o))]))
                      (catch Exception e [:error f (ex-message e)]))))
        bad   (remove #(= :same (first %)) rows)]
    (printf "\n%s\n%d files: %d identical, %d differ, %d errored\n"
            root (count rows) (- (count rows) (count bad))
            (count (filter #(= :diff (first %)) rows))
            (count (filter #(= :error (first %)) rows)))
    (doseq [[k f info] (take 10 bad)]
      (printf "\n%-6s %s\n  %s\n" (name k) (last (str/split f #"/"))
              (subs (pr-str info) 0 (min 400 (count (pr-str info))))))
    ;; System/exit does not flush, and losing the report would make a green
    ;; run indistinguishable from a silent one.
    (flush)
    (System/exit (if (seq bad) 1 0))))

(apply -main *command-line-args*)
