(ns com.trustblocks.concerto.test-runner
  "Plain clojure.test, no runner dependency, so one entry point serves the JVM
  (clojure -M:test), babashka (bb -m com.trustblocks.concerto.test-runner) and
  ClojureScript on Node (clojure -M:cljs-test).

  Two suites are conditional:

    cto-test     JVM and babashka only -- it shells out to Accord's CLI.

    parser-test  JVM and ClojureScript only. instaparse uses `deftype` with
                 `clojure.lang.IHashEq`, which babashka's interpreter cannot
                 provide, so the Clojure CTO parser does not run there and bb
                 scripts still need the CLI."
  (:require [clojure.test :as t]
            com.trustblocks.concerto.instance-test
            com.trustblocks.concerto.malli-test
            com.trustblocks.concerto.metamodel-test
            #?(:cljs com.trustblocks.concerto.parser-test)))

#?(:clj
   (def ^:private babashka?
     (some? (System/getProperty "babashka.version"))))

#?(:cljs
   (defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
     (when-not (cljs.test/successful? m)
       (js/process.exit 1))))

(defn -main [& _]
  #?(:clj
     ;; Required at runtime rather than in the ns form: which suites can load
     ;; depends on the runtime, and a reader conditional cannot tell babashka
     ;; from the JVM -- both are :clj.
     (let [nses (cond-> ['com.trustblocks.concerto.metamodel-test
                         'com.trustblocks.concerto.malli-test
                         'com.trustblocks.concerto.instance-test
                         'com.trustblocks.concerto.cto-test]
                  (not babashka?) (conj 'com.trustblocks.concerto.parser-test))]
       (when babashka?
         (println "  (skipping parser-test: instaparse does not run under babashka)"))
       (doseq [n nses] (require n))
       (let [{:keys [fail error]} (apply t/run-tests nses)]
         (System/exit (if (pos? (+ fail error)) 1 0))))

     :cljs
     (t/run-tests 'com.trustblocks.concerto.metamodel-test
                  'com.trustblocks.concerto.malli-test
                  'com.trustblocks.concerto.instance-test
                  'com.trustblocks.concerto.parser-test)))

#?(:cljs (-main))
