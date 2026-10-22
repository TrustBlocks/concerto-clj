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

### Which Concerto

The validator this library agrees with is not one fixed thing: Concerto 5 is
stricter than 3.x and 4.x, and the schemas it produces differ accordingly.
Choose with `:concerto-version` (3, 4 or 5; the default is 4, and 3 and 4 behave
the same):

```clojure
(cm/->schema reg fqn)                       ; 3.x / 4.x
(cm/->schema reg fqn :concerto-version 5)   ; 5.x
```

| | 3.x / 4.x | 5.x |
|---|---|---|
| DateTime value | loose: `2019`, `2019-01-20`, `20190120`, no offset, `2019-13-45` all pass | `YYYY-MM-DDTHH:mm:ss[.f]` with `Z` or `±HH:MM`; the date must exist |
| scalar's constraints on a map key | not checked | checked |
| `Integer`/`Long`/`Double` map values | not checked by Concerto (checked here) | checked |
| DateTime map key | loose | loose, unchanged |

Each cell was observed by running `concerto validate` with concerto-core 3.16.7,
4.2.0 and 5.2.1 (3.16.7 and 4.2.0 agree on every case), and the test suite
carries the DateTime tables for both behaviors. Metamodel JSON is identical
across the two, so the parser, fixtures and registry do not depend on the choice.

A property whose declared type has several concrete subtypes compiles to a
`:multi` dispatching on `$class`, because Concerto permits polymorphism and a
closed schema for the parent alone would reject a legitimate subclass:

```clojure
[:multi {:dispatch :$class}
 ["poly@1.0.0.Cat" [:ref "poly@1.0.0.Cat"]]
 ["poly@1.0.0.Dog" [:ref "poly@1.0.0.Dog"]]]
```

A nested value may leave out its `$class`: Concerto reads it as the declared
type, and refuses only when that type is abstract, so registry entries mark
`$class` optional (except for abstract types) while the root, which has nothing to
infer it from, requires it. An unknown `$class`, or one that is not a subtype of
the declared type, is still refused.

An optional property compiles to `[:k {:optional true} [:maybe schema]]`: Concerto
treats an explicit `null` on an optional property as absent (and `concerto
validate` drops it), so the schema does too. A `null` on a required property is
still a missing field, and a `null` inside an array is still an error.

Validators are enforced. `regex`, `length` and `range` compile to Malli
constraints, and scalar declarations inline as their underlying primitive with
their own constraints applied:

```clojure
[:code    [:and :string [:re "^[A-Z]{3}$"]]]
[:label   [:and :string [:string {:min 1 :max 10}]]]
[:icount  [:and :int [:>= 0] [:<= 100]]]
[:country [:and :string [:re "^[A-Z]{2}$"]]]   ; scalar CountryCode
```

Concerto 4.1's `size=[min,max]` on an array or map property (`sizeValidator`
in the metamodel) compiles to `:min`/`:max` on the collection itself, not on
its elements -- it constrains how many items there are, not their shape:

```clojure
[:tags [:sequential {:min 2 :max 5} :string]]
```

`concerto parse` does not check that `minSize <= maxSize`, or that a size
validator only appears on an array or map property -- that is Concerto's
`ModelManager`, a layer this library never calls. Both are checked here
instead, at schema-compile time.

Patterns are emitted as strings rather than compiled patterns, because `#"..."`
is a Clojure reader literal and not EDN — a compiled pattern would break the
round-trip the rest of the schema guarantees.

Concerto's regexes are JavaScript regexes and it tests for a match anywhere in
the string, which is what Malli's `:re` does too. The `i`, `m` and `s` flags
carry the same meaning on both engines and are passed through; anything else
raises rather than being silently dropped, since discarding a flag changes what
the pattern accepts.

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

## Pulling a published template

`script/fetch_template.clj` downloads a template from
[templates.accordproject.org](https://templates.accordproject.org/), extracts
the Concerto parts and converts them:

```console
$ bb script/fetch_template.clj acceptance-of-delivery@1.0.0 -o out/

acceptance-of-delivery@1.0.0   runtime=typescript  kind=clause  cicero=^1.0.0

models
  model.cto
  @models.accordproject.org.accordproject.contract@0.2.0.cto
  ...

16 declarations

instances shipped in the archive
  request.json             org.accordproject...InspectDeliverable
                           VALID

wrote out/registry.edn and 16 schemas
```

Only part of an archive is Concerto — `model/*.cto` and any instance such as
`request.json`. The clause logic is not, and is not touched. Its *signature*
is, though: the request and response types are declared in the model, so the
emitted schemas describe the boundary any implementation of that clause must
honour, whatever language it is written in.

Note `runtime=typescript` in the header. That field has already taken more than
one value in published templates — older ones say `ergo` — so the archive format
treats the logic runtime as pluggable.

### The EDN is the portable artifact

Everything upstream of the EDN needs network, a filesystem and Node. Everything
downstream needs none of them:

```
fetch → unzip → parse CTO → EDN     babashka or JVM only
                ───────────────
                     EDN            JVM, babashka, ClojureScript, browser
```

The same emitted schema file, loaded standalone with no CLI and no network,
gives identical verdicts on all three runtimes:

```
                    JVM     babashka   ClojureScript
valid request       true    true       true
bad boolean         false   false      false
bad datetime        false   false      false
undeclared key      false   false      false
```

## Parsing CTO text

Two ways, and they agree:

```clojure
(cto/parse "model.cto")                    ; Accord's CLI     (default)
(cto/parse "model.cto" :parser :clojure)   ; instaparse, no Node
```

`com.trustblocks.concerto.parser` is the CTO grammar in Clojure —
`concerto.grammar` is about 95 lines of instaparse against Accord's 1816-line
PEG.js. Most of that difference is structural rather than clever: roughly 150 of
the 239 original rules are a lexical layer borrowed from PEG.js's JavaScript
grammar — identifier classes, string escapes, hex literals, URI and semver
components — which collapse into regexes, and instaparse's `:auto-whitespace`
removes the `__` threaded through every production.

**It is checked against the CLI, not against itself.** `script/differential.clj`
parses every model in the
[cicero-template-library](https://github.com/accordproject/cicero-template-library)
both ways and compares:

```console
$ clojure -M script/differential.clj
237 files: 237 identical, 0 differ, 0 errored
```

The CLI stays the default because it is the reference implementation, and
because of one platform gap:

| | CLI parser | Clojure parser |
|---|---|---|
| JVM | yes | yes |
| ClojureScript | no | **yes** |
| babashka | yes | **no** |

instaparse uses `deftype` with `clojure.lang.IHashEq`, which babashka's
interpreter cannot provide, so bb scripts still need Node. In the browser the
position reverses: there is no CLI to shell out to, and the Clojure parser is
the only option — CTO text to validated instance with no Accord toolchain
present at all.

`concerto.parser` is resolved lazily by `concerto.cto`, so requiring the latter
does not drag instaparse in and break babashka.

To install the CLI:

```
npm i -g @accordproject/concerto-cli
```

or set `$CONCERTO_CLI` to its path.

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

## Conformance

`test-resources/conformance-validate/` is the `validate/` suite of
[concerto-conformance](https://github.com/accordproject/concerto-conformance),
vendored as written; `conformance_validate_test.cljc` reads its `.feature` files
and runs every scenario (42, with the `Scenario Outline` examples expanded) at
`:concerto-version` 4 and 5. All pass. One passes by declining to compile a schema
for a `$class` the model does not declare, which is a refusal and not a verdict.

The suite's other half, `semantic/` (116 scenarios, outlines expanded), tests
Concerto refusing a malformed *model* at load time. `model-check` implements
those rules, following concerto-core 5.2.1's source:

```clojure
(require '[com.trustblocks.concerto.model-check :as mc])
(mc/check models)    ; => [{:rule :CLASS_DECLARATION_004 :class "IllegalModelException"
                    ;       :message "Could not find super type Nope"}]
(mc/check! models)   ; throws the first one, or returns the models
```

It covers names and reserved names, duplicate declarations and fields, supertypes
(missing, self-extending, cyclic, of the wrong kind, redeclared identifiers),
identifier fields, undeclared and relationship types, validators (regex, string
length, number range, collection size), maps (key, value, nesting), scalars,
duplicate decorators, imports (unloaded namespaces, undeclared types, two versions
of one namespace, aliases, wildcards, unversioned namespaces), decorator
validation (`:decoratorValidation` options) and, with `:metamodelValidation`,
AST properties the metamodel does not declare. It is opt-in: nothing calls it
unless you do. It raised nothing on any of the 237 model files of the
cicero-template-library.

All 116 scenarios are accounted for: 108 satisfy the suite, and 8 are held to what
concerto-core 5.2.1 does instead, because 5.2.1 itself fails them. They are in
`test-resources/conformance-semantic/core-disagrees.edn`, each with its reason:

- four assert wording 5.2.1 no longer uses, or a JavaScript crash message
  ("Cannot read properties of null"),
- three expect an error for importing a namespace twice, which 5.2.1 accepts,
- one expects "Maximum call stack size exceeded" for a cyclic supertype chain;
  `model-check` reports it as the model error it is.

Where the suite and 5.2.1 disagree, `model-check` follows 5.2.1. A scenario that
fails neither way goes in `known-failures.edn`, which the test requires to still
fail; it is empty.

Not covered: `:metamodelValidation` checks only for unexpected AST properties, not
for missing required ones or wrong value types; decorators on the model itself (as
opposed to its declarations and properties) are not validated; and a default
value is not checked against its field's validators.

The allowed AST properties come from `metamodel_schema.cljc`, generated from
concerto-metamodel's own CTO by `script/gen_metamodel_schema.clj`.

## Status

Early. Verified against all 57 templates in the Accord
[cicero-template-library](https://github.com/accordproject/cicero-template-library):
53 pass, and all 4 failures are genuine defects in those templates, each
confirmed independently with `concerto validate`. Two of the four
(`volumediscountolist`, `volumediscountulist`, whose samples name an unversioned
`org.accordproject.volumediscountlist.RateRange`) only surfaced once nested
concepts stopped compiling to a bare `:map`.

Still narrower than Concerto's own validator:

- `defaultValue` only makes a field omittable; the default itself is not filled in
- enum-valued map entries are accepted, though every Concerto version checked
  (3.16.7, 4.2.0 and 5.2.1) wrongly rejects them

These are gaps in coverage, not silent ones. An unhandled declaration kind, an
unhandled property kind, an unportable regex flag, a type whose model is not
loaded, or an unknown metamodel version each raise an error naming the cause
rather than compiling to something permissive.

## License

Copyright © 2026 TrustBlocks

Distributed under the Apache License, Version 2.0. See [LICENSE](LICENSE).

Concerto and the Accord Project are projects of the
[Accord Project](https://accordproject.org/); this library is an independent
Clojure implementation and is not affiliated with or endorsed by them.
