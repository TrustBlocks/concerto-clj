(ns cons-demo
  (:require [clojure.edn :as edn]
            [com.trustblocks.concerto.malli :as cm]
            [malli.core :as m]))
(defn -main []
  (let [txt (.readFileSync (js/require "fs")
              "/tmp/out-aod/schemas/org.accordproject.acceptanceofdelivery@0.1.0.InspectDeliverable.edn" "utf8")
        s   (m/schema (edn/read-string txt) {:registry cm/registry*})
        req {:$class "org.accordproject.acceptanceofdelivery@0.1.0.InspectDeliverable"
             :$identifier "request-1" :$timestamp "2024-01-01T00:00:00Z"
             :deliverableReceivedAt "2018-01-01T16:34:00Z" :inspectionPassed true}]
    (println "  valid request      " (m/validate s req))
    (println "  bad boolean        " (m/validate s (assoc req :inspectionPassed "yes")))
    (println "  bad datetime       " (m/validate s (assoc req :deliverableReceivedAt "hello")))
    (println "  undeclared key     " (m/validate s (assoc req :extra 1)))))
(-main)
