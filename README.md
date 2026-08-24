# concerto-clj

Accord Project [Concerto](https://github.com/accordproject/concerto) models as
EDN, and [Malli](https://github.com/metosin/malli) schemas compiled from them at
runtime.

No code generation. A new contract type is a data load, not a deploy.

> **Not on Clojars yet.** The validation gaps listed under
> [Status](#status) are still open, so nothing has been released. Depend on
> the repository directly and pin a commit from `git log`:
>
> ```clojure
> {:deps {io.github.TrustBlocks/concerto-clj {:git/sha "..."}}}
> ```

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
;;  {:closed true}
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

Nested concepts compile to `:ref`s into a local registry that travels with the
schema, so their contents are actually checked and a concept that refers to
itself terminates:

```clojure
[:schema {:registry {"org.accordproject.money@0.3.0.MonetaryAmount"
                     [:map {:closed true}
                      [:$class [:= "org.accordproject.money@0.3.0.MonetaryAmount"]]
                      [:doubleValue :concerto/double]
                      [:currencyCode [:enum "AED" "AFN" ...]]]
                     "org.accordproject.promissorynote@0.2.0.TemplateModel"
                     [:map {:closed true}
                      ...
                      [:amount [:ref "org.accordproject.money@0.3.0.MonetaryAmount"]]]}}
 [:ref "org.accordproject.promissorynote@0.2.0.TemplateModel"]]
```

A model with nothing nested emits as a plain map, as above.

Maps are closed, matching Concerto, which rejects undeclared properties. Pass
`:closed false` if the values being validated legitimately carry extra keys,
though a storage adapter should strip its own derived keys instead — that way
the guarantee this library offers is the one Concerto offers.

A property whose declared type has several concrete subtypes compiles to a
`:multi` dispatching on `$class`, because Concerto permits polymorphism and a
closed schema for the parent alone would reject a legitimate subclass:

```clojure
[:multi {:dispatch :$class}
 ["poly@1.0.0.Cat" [:ref "poly@1.0.0.Cat"]]
 ["poly@1.0.0.Dog" [:ref "poly@1.0.0.Dog"]]]
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
{:deps {io.github.TrustBlocks/concerto-clj {:git/sha "..."}}}
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
clojure -M:test                                  # JVM
bb -m com.trustblocks.concerto.test-runner       # babashka
clojure -M:cljs-test && node target/cljs-test.js # ClojureScript on Node
clojure -T:build jar                             # target/concerto-clj-VERSION.jar
clojure -T:build install
```

The core tests run from checked-in metamodel fixtures under `test-resources/`
and need neither Node nor network; the CTO tests skip themselves when the CLI
is absent. A fresh clone tests green on a machine that has never seen npm.

## Platforms

`metamodel`, `malli` and `instance` are `.cljc` and carry no platform
references. `cto` is `.clj` — it reads files and spawns a process.

That matters for more than packaging. Concerto's own regex validators are
JavaScript regexes (`{"pattern": ..., "flags": ...}` is `new RegExp`), and its
DateTime and Long types behave differently on the two platforms:

```
Long 2^60, which concerto validate accepts as legal
  JSON text          1152921504606846976
  after JS round-trip 1152921504606847000     <- silently corrupted
  JVM                 1152921504606846976

DateTime with offset and microseconds
  original            2019-01-20T01:00:00.123456+01:00
  via js/Date         2019-01-20T00:00:00.123Z   <- offset and µs gone
  JVM OffsetDateTime  2019-01-20T01:00:00.123456+01:00
```

The library keeps that divergence out of the schema by validating the **wire
form** — a DateTime is an ISO-8601 string, a Long is a JSON number — and never
the parsed platform value. Coercion into `OffsetDateTime` or `Date` is a
separate concern. The same suite runs under the JVM, babashka and ClojureScript
precisely so that a document cannot be valid on the server and invalid in the
browser.

Note what the second table implies: `JSON.parse` destroys a large `Long` before
any JavaScript validator can see it. Detecting that loss is only possible from a
platform that does not suffer it.

## Metamodel versions

Concerto's metamodel is itself versioned. This library dispatches on the short
type name (`StringProperty`) rather than the full versioned `$class`
(`concerto.metamodel@1.0.0.StringProperty`), and asserts on load that every
version it sees is one it has been checked against:

```clojure
com.trustblocks.concerto.metamodel/supported-metamodel-versions  ;; => #{"1.0.0"}
```

An unrecognised version throws. That is deliberate, and it is the one failure
mode worth being loud about: with version-pinned matching, a metamodel bump
makes every `$class` match miss, so every property falls through to a
permissive default and TypeIdentifiers go unqualified — which drops inherited
properties along with the supertype. The resulting schema compiles cleanly,
exports valid EDN, and accepts the sample it was built from, while also
accepting everything else. A validator that silently stops validating is worse
than no validator.

Vetting a new metamodel version means adding it to that set; nothing else in
the library should need to change, and there is a test that holds the line.

For the same reason there is no permissive fallback for unhandled property
kinds. A property kind this library does not understand raises an error naming
the property rather than compiling to something that accepts any value.

## Status

Early. Verified against all 57 templates in the Accord
[cicero-template-library](https://github.com/accordproject/cicero-template-library):
53 pass, and all 4 failures are genuine defects in those templates, each
confirmed independently with `concerto validate`. Two of the four
(`volumediscountolist`, `volumediscountulist`, whose samples name an unversioned
`org.accordproject.volumediscountlist.RateRange`) only surfaced once nested
concepts stopped compiling to a bare `:map`.

Still narrower than Concerto's own validator:

- `validator` (regex, range) is dropped
- `defaultValue` is ignored
- `ScalarDeclaration` and `MapDeclaration` are not handled

These are gaps in coverage, not silent ones. An unhandled property kind, a type
whose model is not loaded, or an unknown metamodel version each raise an error
naming the cause rather than compiling to something permissive.

## License

Copyright © 2026 TrustBlocks

Distributed under the Apache License, Version 2.0. See [LICENSE](LICENSE).

Concerto and the Accord Project are projects of the
[Accord Project](https://accordproject.org/); this library is an independent
Clojure implementation and is not affiliated with or endorsed by them.
