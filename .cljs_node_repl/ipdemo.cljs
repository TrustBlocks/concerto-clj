(ns ipdemo (:require [com.trustblocks.concerto.parser :as p]))
(defn -main []
  (let [m (p/parse-string "namespace test@1.0.0\nconcept A { o String f regex=/^[A-Z]$/ }")]
    (println "  namespace   :" (:namespace m))
    (println "  declaration :" (:$class (first (:declarations m))))
    (println "  property    :" (:$class (first (:properties (first (:declarations m))))))
    (println "  validator   :" (pr-str (:validator (first (:properties (first (:declarations m)))))))))
(-main)
