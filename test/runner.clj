(ns runner
  "Plain clojure.test, no runner dependency, so the same entry point works
  under both the JVM (clojure -M:test) and babashka (bb -m runner)."
  (:require [clojure.test :as t]
            com.trustblocks.concerto.cto-test
            com.trustblocks.concerto.instance-test
            com.trustblocks.concerto.malli-test
            com.trustblocks.concerto.metamodel-test))

(def ^:private namespaces
  '[com.trustblocks.concerto.metamodel-test
    com.trustblocks.concerto.malli-test
    com.trustblocks.concerto.instance-test
    com.trustblocks.concerto.cto-test])

(defn -main [& _]
  (let [{:keys [fail error]} (apply t/run-tests namespaces)]
    (System/exit (if (pos? (+ fail error)) 1 0))))
