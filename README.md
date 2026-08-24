# concerto-clj

Accord Project [Concerto](https://github.com/accordproject/concerto) models as
EDN, and [Malli](https://github.com/metosin/malli) schemas compiled from them at
runtime.

No code generation. A new contract type is a data load, not a deploy.

```clojure
com.trustblocks/concerto-clj {:mvn/version "0.1.0"}
```

## Why

Concerto's metamodel is self-hosting: it is defined in Concerto itself
(`concerto-metamodel/lib/metamodel.cto`, 277 lines), and every parsed CTO file
is an instance of it serialized as JSON tagged with `$class`. That JSON is a
versioned, normative interchange format — a much firmer thing to code against
than a hand-rolled reading of the CTO grammar.

Every key in the metamodel is a legal Clojure keyword name, so JSON → EDN is
lossless and needs no mapping table. From there a Malli schema is a
straightforward walk of the inheritance chain.

The alternative is codegen. Accord ships sixteen targets, Java among them; for
a single template `concerto compile --target java` emits 23 files and 551 lines
of *this code is generated and should not be modified*. Add a template or bump
a model version and you regenerate, recompile, redeploy. Interpreting the
metamodel instead makes a new contract type a runtime concern.

## Layers

Each layer takes data and returns data. Only `concerto.cto` does I/O.

| namespace | does | needs |
|---|---|---|
| `com.trustblocks.concerto.metamodel` | metamodel JSON/EDN → declaration registry | — |
| `com.trustblocks.concerto.malli`     | registry → Malli schema, or EDN            | malli |
| `com.trustblocks.concerto.instance`  | Concerto JSON ⇄ neutral EDN instance       | — |
| `com.trustblocks.concerto.cto`       | CTO text → metamodel EDN                   | Node CLI |

A storage adapter sits *outside* this library and supplies its own `key-fn`.
That is deliberate. XTDB, for instance, reads `$` as a namespace separator and
lowercases camelCase, so it needs `:concerto/class` and kebab-case keys — and
then needs the model to recover the original spelling on read. Keeping that in
the adapter is why the neutral layer is lossless: `:$class` and `:businessDays`
are both legal EDN keywords that read back identically, so names like
`vechileID` and `INITIAL_DUE` cannot be mangled here.

## Use

```clojure
(require '[com.trustblocks.concerto.cto :as cto]
         '[com.trustblocks.concerto.malli :as cm]
         '[com.trustblocks.concerto.instance :as inst]
         '[malli.core :as m])

(def reg (cto/load-registry "acceptance-of-delivery/model"))

(cm/->edn reg "org.accordproject.acceptanceofdelivery@0.1.0.TemplateModel")
;; =>
;; [:map
;;  [:$class [:= "org.accordproject.acceptanceofdelivery@0.1.0.TemplateModel"]]
;;  [:$identifier {:optional true} :string]
;;  [:clauseId :string]
;;  [:shipper :string]
;;  [:receiver :string]
;;  [:deliverable :string]
;;  [:businessDays :int]
;;  [:attachment :string]]
```

That is plain EDN — no functions, no `#object[...]` — so it can be written to a
file, checked into git, diffed across model versions, and read back:

```clojure
(m/schema (edn/read-string (slurp "schema.edn")) {:registry cm/registry*})
```

Non-trivial types are emitted as *named* schemas (`:concerto/date-time`,
`:concerto/double`) resolved from `registry*`, which keeps a dump legible to a
reader who does not know Clojure and decouples what a schema says from what it
does. Properties emit in declaration order, so two exports of one model are
byte-identical and two versions diff cleanly.

To validate an instance:

```clojure
(m/validate (cm/->schema reg fqn)
            (inst/json->edn (json/parse-string (slurp "sample.json"))))
```

### As a storage adapter

`key-fn` receives every Concerto property name, including the `$` sigil ones:

```clojure
(cm/->schema reg fqn :key-fn (fn [nm]
                               (case nm
                                 "$class"      :concerto/class
                                 "$identifier" :concerto/identifier
                                 (csk/->kebab-case-keyword nm))))
```

## From babashka

Everything except the JVM-only bits runs under babashka.

`bb.edn`:

```clojure
{:deps {com.trustblocks/concerto-clj {:mvn/version "0.1.0"}}}
```

`script/cto2edn.clj` in this repo is a worked example:

```
bb script/cto2edn.clj MODEL [options]

  --registry            the declaration registry as EDN          [default]
  --malli FQN           the Malli schema for one declaration, as EDN
  --instance FILE.json  a Concerto JSON instance as neutral EDN
  --validate FILE.json  validate an instance against its own $class
  --list                every declaration the model defines
  --cli PATH            path to the concerto CLI
  -o FILE               write to FILE instead of stdout
```

```console
$ bb script/cto2edn.clj promissory-note/model --validate promissory-note/sample.json
VALID   org.accordproject.promissorynote@0.2.0.TemplateModel
```

## Parsing CTO text

`com.trustblocks.concerto.cto` shells out to Accord's CLI:

```
npm i -g @accordproject/concerto-cli
```

or set `$CONCERTO_CLI` to its path. This is the only part that needs Node, and
it is isolated on purpose — anything that can produce metamodel JSON can feed
the rest.

A pure-Clojure parser is possible later: the grammar is a PEG
(`concerto-cto/lib/parser.pegjs`, roughly 1200 real lines once comments and
Unicode character classes are set aside) and would port to instaparse. It is
deferred because the grammar is normative and drifts, so reimplementing it is a
standing obligation to track that drift, while the metamodel is a stable
contract.

## Development

```
clojure -M:test          # JVM
bb -m runner             # babashka
clojure -T:build jar     # target/concerto-clj-VERSION.jar
clojure -T:build install
```

The core tests run from checked-in metamodel fixtures under `test-resources/`
and need neither Node nor network; the CTO tests skip themselves when the CLI
is absent. A fresh clone tests green on a machine that has never seen npm.

## Status

Early. Verified against all 57 templates in the Accord
[cicero-template-library](https://github.com/accordproject/cicero-template-library):
55 pass, and the 2 failures are genuine defects in those templates, confirmed
independently with `concerto validate`.

The compiled schema is currently **weaker than Concerto's own validator**, in
roughly the order these matter:

- nested concepts compile to `:map`, so their contents are unchecked
- maps are open, so undeclared properties are accepted
- no subtype dispatch on abstract declarations
- `validator` (regex, range) is dropped
- `defaultValue` is ignored
- `ScalarDeclaration` and `MapDeclaration` are not handled
- `$timestamp` never appears in a schema

Do not rely on it as a substitute for Concerto validation until those close.

## License

Copyright © 2026 TrustBlocks

Distributed under the Apache License, Version 2.0. See [LICENSE](LICENSE).

Concerto and the Accord Project are projects of the
[Accord Project](https://accordproject.org/); this library is an independent
Clojure implementation and is not affiliated with or endorsed by them.
