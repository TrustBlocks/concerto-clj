(ns build
  "  clojure -T:build test      run the test suite
     clojure -T:build jar       build target/concerto-clj-VERSION.jar
     clojure -T:build install   install it to ~/.m2
     clojure -T:build deploy    push it to Clojars

  Deploying reads CLOJARS_USERNAME and CLOJARS_PASSWORD from the environment.
  CLOJARS_PASSWORD must be a deploy token, not an account password."
  (:refer-clojure :exclude [test])
  (:require [clojure.tools.build.api :as b]
            [deps-deploy.deps-deploy :as dd]))

(def lib     'com.trustblocks/concerto-clj)
(def version "0.1.0")

(def ^:private repo      "https://github.com/TrustBlocks/concerto-clj")
(def ^:private class-dir "target/classes")
(def ^:private jar-file  (format "target/%s-%s.jar" (name lib) version))

(defn- basis [] (b/create-basis {:project "deps.edn"}))

(defn clean [_]
  (b/delete {:path "target"}))

(defn test "Run the tests; fails the build on any failure or error." [opts]
  (let [{:keys [exit]} (b/process {:command-args ["clojure" "-M:test"]})]
    (when-not (zero? exit)
      (throw (ex-info "tests failed" {:exit exit}))))
  opts)

(defn jar [_]
  (clean nil)
  (b/write-pom
   {:class-dir class-dir
    :lib       lib
    :version   version
    :basis     (basis)
    :src-dirs  ["src"]
    :scm       {:url                 repo
                :connection          (str "scm:git:git://github.com/TrustBlocks/concerto-clj.git")
                :developerConnection (str "scm:git:ssh://git@github.com/TrustBlocks/concerto-clj.git")
                :tag                 (str "v" version)}
    :pom-data  [[:description
                 (str "Accord Project Concerto models as EDN, and Malli schemas "
                      "compiled from them at runtime. No code generation.")]
                [:url repo]
                [:licenses
                 [:license
                  [:name "Apache License, Version 2.0"]
                  [:url "https://www.apache.org/licenses/LICENSE-2.0.txt"]
                  [:distribution "repo"]]]]})
  (b/copy-dir {:src-dirs ["src"] :target-dir class-dir})
  (b/jar {:class-dir class-dir :jar-file jar-file})
  (println "wrote" jar-file))

(defn install [_]
  (jar nil)
  (b/install {:basis     (basis)
              :lib       lib
              :version   version
              :jar-file  jar-file
              :class-dir class-dir}))

(defn deploy [_]
  (jar nil)
  (dd/deploy {:installer :remote
              :artifact  (b/resolve-path jar-file)
              :pom-file  (b/pom-path {:lib lib :class-dir class-dir})}))
