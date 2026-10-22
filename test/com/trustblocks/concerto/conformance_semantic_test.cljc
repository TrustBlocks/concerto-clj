(ns com.trustblocks.concerto.conformance-semantic-test
  "The semantic/ suite of accordproject/concerto-conformance, run as written.

  Where validate/ asks whether an *instance* conforms, semantic/ asks whether a
  *model* is well formed: load these models, validate them, expect a particular
  rule to be broken or none. Each scenario names its models (metamodel JSON) and
  what must be said of them; `model-check/check` is the thing under test.

  Three outcomes are possible for a scenario, and none is hidden:

    pass            check satisfies what the suite asserts. Almost all of them.
    known failure   `known-failures.edn`: check does not yet. The test requires
                    each of these to still fail, so fixing a rule means deleting
                    its line, and a stale line is itself a failure. Empty now.
    core disagrees  `core-disagrees.edn`: concerto-core 5.2.1 itself does not
                    satisfy the suite (older wording, a JavaScript crash message,
                    a rule 5.2.1 does not enforce). check is held to what 5.2.1
                    does instead -- reject or accept, and its exception class."
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [clojure.test :refer [deftest is testing]]
            [com.trustblocks.concerto.fixtures :as fx]
            [com.trustblocks.concerto.gherkin :as gherkin]
            [com.trustblocks.concerto.metamodel :as mm]
            [com.trustblocks.concerto.model-check :as mc]))

(def ^:private features
  ["collections" "concepts" "decorators" "enums" "identifiers"
   "imports" "maps" "metamodel" "namespaces" "scalars"])

(defn- option-value
  "A cell as the suite's runner reads it: booleans and numbers by shape."
  [cell]
  (let [t (str/trim cell)]
    (cond
      (= t "true")  true
      (= t "false") false
      (re-matches #"-?\d+(\.\d+)?" t) #?(:clj (edn/read-string t) :cljs (js/parseFloat t))
      :else t)))

(defn- options-of [table]
  (reduce (fn [acc {opt "option" v "value"}]
            (assoc-in acc (mapv keyword (str/split (str/trim opt) #"\.")) (option-value v)))
          {} table))

(defn- ->scenario
  "{:id :models :options :validate-on-load :expect}. `:expect` is a vector of
  [kind arg] assertions, in the order the scenario states them."
  [feature idx {:keys [name steps]}]
  (let [loads (filter #(str/starts-with? (:text %) "I load the following models") steps)
        opts  (some #(when (str/starts-with? (:text %) "the model manager options") (:table %)) steps)]
    {:id       (str feature ": " name (when (pos? idx) (str " #" (inc idx))))
     :options  (options-of opts)
     :models   (vec (for [l loads, row (:table l)] (get row "model_file")))
     :validate-on-load
     (vec (for [l loads, _ (:table l)] (str/includes? (:text l) "with validation")))
     :expect
     (vec (keep (fn [{:keys [text]}]
                  (or (when (= text "no error should be thrown") [:none])
                      (when (= text "an error should be thrown") [:any])
                      (when-let [[_ c] (re-find #"^an error of class \"([^\"]+)\" should be thrown" text)] [:class c])
                      (when-let [[_ n] (re-find #"^the error should mention \"([^\"]+)\"" text)] [:mention n])
                      (when-let [[_ m] (re-find #"^an error should be thrown with message \"(.+)\"$" text)] [:message m])
                      (when-let [[_ t] (re-find #"^the error type should be \"([^\"]+)\"" text)] [:type t])))
                steps))}))

(def ^:private scenarios
  (vec (mapcat (fn [f]
                 (let [scs (gherkin/scenarios (fx/read-text (str "conformance-semantic/features/" f ".feature")))
                       seen (atom {})]
                   (map (fn [sc]
                          (let [n (get @seen (:name sc) 0)]
                            (swap! seen update (:name sc) (fnil inc 0))
                            (->scenario f n sc)))
                        scs)))
               features)))

(defn- load-model [file]
  (-> (fx/read-resource (str "conformance-semantic/specifications/" file))
      mm/json->edn
      mm/strip-locations))

(defn- satisfied?
  "Whether `problems` meet one assertion."
  [problems [kind arg]]
  (let [p (first problems)]
    (case kind
      :none    (empty? problems)
      :any     (boolean (seq problems))
      :class   (= arg (:class p))
      :mention (and p (str/includes? (str (:message p)) arg))
      :message (and p (if-let [[_ re flags] (re-matches #"^/(.+)/([a-z]*)$" arg)]
                        (boolean (re-find (re-pattern (str (when (seq flags) (str "(?" flags ")")) re))
                                          (str (:message p))))
                        (str/includes? (str (:message p)) arg)))
      :type    (= arg (:type p)))))

(defn- passes? [{:keys [models options validate-on-load expect]}]
  (let [problems (mc/check (mapv load-model models)
                           :options options :validate-on-load validate-on-load)]
    (every? #(satisfied? problems %) expect)))

(def ^:private known-failures
  (set (edn/read-string (fx/read-text "conformance-semantic/known-failures.edn"))))

(def ^:private core-disagrees
  (edn/read-string (fx/read-text "conformance-semantic/core-disagrees.edn")))

(deftest suite-was-found
  (testing "a parse that quietly found nothing would pass everything below"
    (is (= 116 (count scenarios)))
    (is (every? seq (map :expect scenarios)))
    (is (apply distinct? (map :id scenarios)))))

(defn- problems-of [{:keys [models options validate-on-load]}]
  (mc/check (mapv load-model models) :options options :validate-on-load validate-on-load))

(deftest semantic-suite
  (doseq [sc scenarios]
    (let [id (:id sc)]
      (cond
        (contains? core-disagrees id)
        (let [{:keys [core-ok class]} (core-disagrees id)
              problems (problems-of sc)]
          (testing (str "agrees with concerto-core 5.2.1, not the suite: " id)
            (is (= core-ok (empty? problems)))
            (when class
              (is (= class (:class (first problems)))))))

        (contains? known-failures id)
        (testing (str "known failure, must still fail: " id)
          (is (not (passes? sc)) "now passes -- delete it from known-failures.edn"))

        :else
        (testing id
          (is (passes? sc)))))))

(deftest the-exception-lists-are-real-scenarios
  (testing "a stale entry would silently excuse nothing"
    (let [ids (set (map :id scenarios))]
      (is (every? ids known-failures))
      (is (every? ids (keys core-disagrees)))
      (is (empty? (filter known-failures (keys core-disagrees)))
          "a scenario is one or the other"))))

(deftest check!-throws-the-first-problem
  (let [sc (first (filter #(= "concepts: Supertype does not exist" (:id %)) scenarios))
        models (mapv load-model (:models sc))]
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo)
                          #"Could not find super type"
                          (mc/check! models)))
    (is (= :CLASS_DECLARATION_004
           (try (mc/check! models)
                (catch #?(:clj clojure.lang.ExceptionInfo :cljs cljs.core/ExceptionInfo) e
                  (:rule (ex-data e))))))
    (testing "and returns sound models unchanged"
      (let [ok (mapv load-model (:models (first (filter #(= "concepts: Supertype is declared correctly" (:id %)) scenarios))))]
        (is (= ok (mc/check! ok)))))))

;; ------------------------------------------------- beyond the suite's scenarios

(def ^:private mmc "concerto.metamodel@1.0.0.")

(defn- model [namespace imports & decls]
  {:$class (str mmc "Model") :namespace namespace :imports (vec imports)
   :declarations (vec decls)})

(defn- concept [nm & {:keys [super decorators props]}]
  (cond-> {:$class (str mmc "ConceptDeclaration") :name nm :isAbstract false
           :properties (vec props)}
    super      (assoc :superType {:$class (str mmc "TypeIdentifier") :name super})
    decorators (assoc :decorators (vec decorators))))

(defn- import-type [ns- nm] {:$class (str mmc "ImportType") :namespace ns- :name nm})

(defn- first-problem [& args] (first (apply mc/check args)))

(deftest imports-and-namespaces
  (let [a (model "a@1.0.0" [] (concept "X"))]
    (testing "each of these was run through concerto-core 5.2.1"
      (is (nil? (first-problem [a (model "b@1.0.0" [(import-type "a@1.0.0" "X")] (concept "Y"))])))
      (is (= "Namespace is not defined for type \"zzz@1.0.0.Q\"."
             (:message (first-problem [(model "b@1.0.0" [(import-type "zzz@1.0.0" "Q")] (concept "Y"))]))))
      (is (= "Type \"Nope\" is not defined in namespace \"concerto@1.0.0\"."
             (:message (first-problem [(model "b@1.0.0" [(import-type "concerto@1.0.0" "Nope")] (concept "Y"))])))
          "the built-in namespaces are known, and say what they declare")
      (is (nil? (first-problem [(model "b@1.0.0" [(import-type "concerto@1.0.0" "Concept")] (concept "Y"))])))
      (is (= :MODEL_FILE_004
             (:rule (first-problem [a (model "a@2.0.0" [] (concept "X"))
                                    (model "b@1.0.0" [(import-type "a@1.0.0" "X") (import-type "a@2.0.0" "X")]
                                           (concept "Y"))])))
          "two versions of one namespace"))
    (testing "an unversioned namespace and a wildcard import are plain Errors"
      (is (= {:class "Error" :message "Cannot create a ModelFile with an unversioned namespace: a. All models must specify a version (e.g., @1.0.0)."}
             (select-keys (first-problem [(model "a" [] (concept "X"))]) [:class :message])))
      (is (= {:class "Error" :message "Wildcard Imports are not permitted."}
             (select-keys (first-problem [a (model "b@1.0.0" [{:$class (str mmc "ImportAll") :namespace "a@1.0.0"}]
                                                   (concept "Y"))])
                          [:class :message]))))))

(deftest a-cyclic-supertype-chain-is-a-model-error
  (testing "concerto-core overflows the stack on these; here it is a problem"
    (is (= :CLASS_DECLARATION_009
           (:rule (first-problem [(model "a@1.0.0" [] (concept "P" :super "Q") (concept "Q" :super "P"))]))))))

(deftest decorator-validation-levels
  (let [m  [(model "a@1.0.0" []
                   (concept "Ghost" :decorators [{:$class (str mmc "Decorator") :name "Nope"}]))]
        at #(first-problem m :options {:decoratorValidation {:missingDecorator %}})]
    (testing "only \"error\" is a problem; Concerto logs \"warning\" and ignores \"off\""
      (is (= :DECORATOR_001 (:rule (at "error"))))
      (is (nil? (at "warning")))
      (is (nil? (at "off"))))
    (testing "and with no option at all, decorators are not validated"
      (is (nil? (first-problem m))))))
