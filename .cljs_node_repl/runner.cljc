(ns runner
  "Plain clojure.test, no runner dependency, so one entry point serves the JVM
  (clojure -M:test), babashka (bb -m runner) and ClojureScript on Node
  (clojure -M:cljs-test).

  The CTO tests are JVM-only -- they shell out to Accord's CLI -- so they are
  required behind a reader conditional."
  (:require [clojure.test :as t]
            com.trustblocks.concerto.instance-test
            com.trustblocks.concerto.malli-test
            com.trustblocks.concerto.metamodel-test
            #?(:clj com.trustblocks.concerto.cto-test)))

#?(:cljs
   (defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
     (when-not (cljs.test/successful? m)
       (js/process.exit 1))))

(defn -main [& _]
  #?(:clj
     (let [{:keys [fail error]} (t/run-tests
                                 'com.trustblocks.concerto.metamodel-test
                                 'com.trustblocks.concerto.malli-test
                                 'com.trustblocks.concerto.instance-test
                                 'com.trustblocks.concerto.cto-test)]
       (System/exit (if (pos? (+ fail error)) 1 0)))

     :cljs
     (t/run-tests 'com.trustblocks.concerto.metamodel-test
                  'com.trustblocks.concerto.malli-test
                  'com.trustblocks.concerto.instance-test)))

#?(:cljs (-main))
