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

;; -------------------------------------------------------- metamodel validation

(def ^:private ast
  "A valid model AST, as `concerto parse` writes it."
  (model "a@1.0.0" []
         {:$class (str mmc "ConceptDeclaration") :name "X" :isAbstract false
          :properties [{:$class (str mmc "StringProperty") :name "p"
                        :isArray false :isOptional false}]}))

(defn- metamodel-problem [m]
  (first-problem [m] :options {:metamodelValidation true} :validate-on-load [true]))

(deftest metamodel-validation-matches-concerto
  (testing "every message below is what concerto-core 5.2.1 says for that AST"
    (is (nil? (metamodel-problem ast)))

    (is (= {:class "MetamodelException"
            :message "Unexpected properties for type concerto.metamodel@1.0.0.ConceptDeclaration: bogus"}
           (select-keys (metamodel-problem (assoc-in ast [:declarations 0 :bogus] 1))
                        [:class :message])))

    (is (= "The instance \"concerto.metamodel@1.0.0.ImportType\" is missing the required field \"name\"."
           (:message (metamodel-problem
                      (assoc ast :imports [{:$class (str mmc "ImportType") :namespace "a@1.0.0"}])))))

    (is (= "Expected value at path `$.declarations[0].properties[0].isArray` to be of type `Boolean`"
           (:message (metamodel-problem
                      (assoc-in ast [:declarations 0 :properties 0 :isArray] "yes")))))

    (is (= "Expected value at path `$.declarations` to be an array of type `Declaration`"
           (:message (metamodel-problem (assoc ast :declarations {}))))))

  (testing "a property with a default may be left out, as Concerto allows"
    (is (nil? (metamodel-problem (update-in ast [:declarations 0 :properties 0] dissoc :isOptional))))
    (is (nil? (metamodel-problem (update-in ast [:declarations 0] dissoc :isAbstract)))))

  (testing "it runs only when asked: the option, and a model added with validation"
    (let [bad (assoc-in ast [:declarations 0 :bogus] 1)]
      (is (nil? (first-problem [bad])))
      (is (nil? (first-problem [bad] :options {:metamodelValidation true} :validate-on-load [false])))
      (is (nil? (first-problem [bad] :validate-on-load [true])))))

  (testing "and Concerto reads the model before it validates it: a missing name is
           an IllegalModelException from the read, not a MetamodelException"
    (is (= "IllegalModelException"
           (:class (metamodel-problem (update-in ast [:declarations 0] dissoc :name)))))))

(deftest the-metamodel-schema-accepts-real-asts
  (testing "every AST in the suite's specifications that Concerto loads is valid
           against the metamodel, so the schema compiled from metamodel.cto does
           not reject what Concerto accepts. The ones it does reject are the ones
           built to be malformed."
    (let [malformed #{"concepts/models/CLASS_DECLARATION_013/class_declaration_013_properties_absent.json"
                      "concepts/models/MODEL_ELEMENT_003/model_element_003_unrecognised_element.json"
                      "concepts/models/PROPERTY_003/property_003_meta_type_invalid.json"
                      "maps/models/MAP_DECLARATION_002/map_declaration_002_missing_key.json"
                      "metamodel/models/METAMODEL_001/metamodel_001_undeclared_ast_property.json"
                      "metamodel/models/METAMODEL_002/metamodel_002_unknown_metamodel_version.json"}
          files     (distinct (mapcat :models scenarios))
          verdict   (fn [f] (empty? (mc/check [(load-model f)]
                                              :options {:metamodelValidation true}
                                              :validate-on-load [true])))]
      (is (< 100 (count files)))
      (doseq [f files :when (not (contains? malformed f))]
        (is (empty? (filter #(= "MetamodelException" (:class %))
                            (mc/check [(load-model f)]
                                      :options {:metamodelValidation true}
                                      :validate-on-load [true])))
            f))
      (doseq [f files :when (contains? malformed f)]
        (is (not (verdict f)) (str f " is malformed"))))))

(deftest the-metamodel-schema-accepts-asts-with-locations
  (testing "`concerto parse` output as written, source locations included, is
           valid -- loaded together, as a template's models import one another"
    (doseq [[template files] fx/models
            :let [models (mapv #(mm/json->edn (fx/raw template %)) files)]]
      (is (empty? (mc/check models
                            :options {:metamodelValidation true}
                            :validate-on-load (repeat (count models) true)))
          template))))

;; ------------------------------------------------- decorators on the model itself

(defn- decorator [nm & args]
  {:$class (str mmc "Decorator") :name nm
   :arguments (vec (for [a args]
                     (cond (string? a) {:$class (str mmc "DecoratorString") :value a}
                           (number? a) {:$class (str mmc "DecoratorNumber") :value a})))})

(defn- required [kind nm]
  {:$class (str mmc kind) :name nm :isArray false :isOptional false})

(def ^:private decorator-concepts
  [(concept "Hide" :props [(required "StringProperty" "why")])
   (concept "Count" :props [(required "IntegerProperty" "n")])])

(defn- decorated-model [decorators]
  (assoc (apply model "m@1.0.0" [] (conj decorator-concepts (concept "A")))
         :decorators decorators))

(def ^:private validate-decorators {:decoratorValidation {:missingDecorator "error"
                                                          :invalidDecorator "error"}})

(deftest decorators-on-the-model-are-validated-like-any-others
  (testing "every message below is what concerto-core says for that model, from
           3.26.0 to 5.2.1; the model's context prints as the word `undefined`"
    (let [problem (fn [decorators & {:keys [options] :or {options validate-decorators}}]
                    (first-problem [(decorated-model decorators)] :options options))]
      (is (= "Undeclared type \"Nope\" in \"undefined\""
             (:message (problem [(decorator "Nope" "a")]))))
      (is (= :DECORATOR_001 (:rule (problem [(decorator "Nope" "a")]))))
      (is (nil? (problem [(decorator "Hide" "a")])) "a declared one, with the right argument")
      (is (= "Decorator Count has invalid decorator argument. Expected number. Found string, with value \"x\""
             (:message (problem [(decorator "Count" "x")]))))
      (is (= "Decorator Hide has too few arguments. Required properties are: [why]"
             (:message (problem [(decorator "Hide")]))))
      (is (= "Decorator Hide has too many arguments. Properties are: [why]"
             (:message (problem [(decorator "Hide" "a" "b")]))))))

  (testing "without the options, none of that is checked"
    (is (nil? (first-problem [(decorated-model [(decorator "Nope" "a")])]))))

  (testing "but a duplicate is always an error, options or not"
    (let [dup [(decorator "Hide" "a") (decorator "Hide" "b")]]
      (is (= "Duplicate decorator Hide" (:message (first-problem [(decorated-model dup)]))))
      (is (= :DECORATED_001 (:rule (first-problem [(decorated-model dup)]))))))

  (testing "and it is looked at before the model's imports, as Concerto does"
    (let [m (assoc (decorated-model [(decorator "Nope" "a")])
                   :imports [{:$class (str mmc "ImportType") :namespace "zzz@1.0.0" :name "Q"}])]
      (is (= :DECORATOR_001 (:rule (first-problem [m] :options validate-decorators)))))))
