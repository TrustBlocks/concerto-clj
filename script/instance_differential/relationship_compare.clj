;; Relationship battery, part 2: does this library's schema say what concerto-core
;; said of each string relationship_battery.cjs put to it?
;;
;;   clojure -M script/instance_differential/relationship_compare.clj OUT.json CONCERTO_VERSION
;;
;; CONCERTO_VERSION is `5.2` for a battery run on concerto-core 5.x, and `4` for 3.23.0
;; to 4.1.5. Prints how many strings differ, and the first few.
(require '[malli.core :as m] '[cheshire.core :as json] '[com.trustblocks.concerto.malli :as cm]
         '[com.trustblocks.concerto.parser :as p] '[com.trustblocks.concerto.metamodel :as mm])
(def cto "namespace t@1.0.0
asset K identified by kid { o String kid }
asset Sub extends K { }
asset Other identified by oid { o String oid }
abstract asset Base identified by bid { o String bid }
asset Impl extends Base { }
participant Pt identified by pid { o String pid }
concept H { --> K k optional --> Base b optional --> K[] ks optional }
")
(def reg (mm/registry [(p/parse-string cto)]))
(def file (first *command-line-args*))
(def version (second *command-line-args*))
(def rows (json/parse-string (slurp file)))
(def v (if (re-matches #"\d+" version) (parse-long version) version))
(def s (cm/->schema reg "t@1.0.0.H" :concerto-version v))
(def bad (atom []))
(doseq [[x k b] rows
        :let [ok-k (m/validate s {:$class "t@1.0.0.H" :k x})
              ok-b (m/validate s {:$class "t@1.0.0.H" :b x})]
        :when (or (not= k ok-k) (not= b ok-b))]
  (swap! bad conj [x :core-k k :ours-k ok-k :core-b b :ours-b ok-b]))
(println version (count rows) "strings;" (count @bad) "differ")
(doseq [r (take 20 @bad)] (println " " (pr-str r)))
