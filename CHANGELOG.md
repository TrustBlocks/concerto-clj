# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- A default value is checked against its own field's validators (length, pattern,
  range), on properties and scalars, with Concerto's messages: the string checks
  skip an empty default, the number checks do not skip 0, and numbers print as
  JavaScript prints them. The same rule from 3.26.0 to 5.2.1.
- Decorators on the model itself are validated, as on its declarations and
  properties: under `:decoratorValidation`, one must name a declared type and fit
  its properties, and a duplicate is always an error. Concerto does the same from
  3.26.0 to 5.2.1, and starts with them, before the model's imports; its messages
  name the model's context as `"undefined"`, and so do ours. They were skipped.
- `:concerto-version` now takes a patch (`"4.1.3"`), because a relationship map
  value changes between 4.1.2 and 4.1.3, and was wrong for 3.23.0 to 4.1.2, which
  take either a `resource:` string or an embedded resource. It had been described
  as unloadable throughout 3.x and embedded-only throughout 4.x, from three
  releases tested; it was then run on 22 and the boundaries found. The default,
  4, is 4.0.0 and so now takes either; it previously took only the embedded one.
- The rules for an empty identifier, an empty relationship and an undeclared null
  were also run on 3.16.7, 3.26.0, 4.0.0, 4.1.0 and 4.1.5, and are the same as on
  4.2.0 to 5.2.1: they do not vary with `:concerto-version`.
- An undeclared property whose value is `null` is ignored, as Concerto does (every
  release checked, 3.16.7 to 5.2.1, at any depth); it was rejected. Any other value is still
  rejected, and `false`, `""` and `0` are not null. A closed map is now closed by
  Malli's default entry, which allows only `null`, in place of `{:closed true}`, so
  the emitted form differs, and the JSON Schema is `additionalProperties:
  {type: null}`, which is the same rule. Generation keeps the plain closed map.
  Settles the one remaining disagreement in the metamodel differential (5,885 of
  6,000 now agree).
- An identifier may not be empty. Concerto reads `""` as no identifier ("Missing
  identifier for Type ..."): for an `identified by` field, even when `$identifier`
  is also given, and for a system `$identifier` that is present. Both were
  accepted. The same on 4.2.0, 5.0.0, 5.1.0 and 5.2.1.
- A relationship may not be empty ("Missing id"), as a property, an array element
  or a map value. The same on 4.2.0, 5.0.0, 5.1.0 and 5.2.1. Whether a `resource:`
  URI names a type the property may hold is still not checked.
- A nested concrete concept with a `null` or empty `$class` is read as the
  declared type, as Concerto does. It was rejected.
- `:concerto-version 5` was the strict mode, and it should not have been: 5.0 and
  5.1 behave like 4.x, and the strictness (DateTime, scalar map keys, typed map
  values) arrived in 5.2.0. `5` now means 5.0; the strict mode is `"5.2"`. A
  `--> Asset` map value is also now version-dependent, where it was always a
  string: the embedded resource in 4.x, 5.0 and 5.1, the reference from 5.2.
- A nested concept, array element or map value may omit its `$class`; Concerto
  reads it as the declared type. Schemas required it everywhere, rejecting valid
  data. The root still requires it, as does an abstract declared type.
- A field with a `default` may be omitted.
- The CTO grammar parses `size=[min,max]`, which it did not, so any model with a
  collection size validator failed to parse without the CLI.
- `bb -m ...test-runner` loaded the Clojure parser (via `malli-test`) and could
  not start under babashka. The tests needing the parser are now their own
  namespace, skipped there like `parser-test`.
- An explicit `null` on an optional property is accepted, as Concerto does, and
  no longer rejected as the wrong type. It was the only disagreement with the
  CLI across the 108 sample and request instances in the cicero-template-library
  (five `latedeliveryandpenalty*` requests carrying `"deliveredAt": null`).
- The CTO parser spelled every map key and value type `Object*Type`; it now
  emits `StringMapKeyType`, `IntegerMapValueType` and the rest, as the CLI does.

### Added

- `com.trustblocks.concerto.cli`, and `concerto-clj` for bbin (`bb cli ...`, or
  `clojure -M:cli ...` on the JVM): `validate`, `check`, `generate`, `schema` and
  `parse`, with Concerto's flags where the command exists. Exit status 0, 1 for a
  finding, 2 for a mistake, which Concerto's own `validate` does not give. Under
  babashka a validation takes 0.16s against Concerto's 0.56s; a `.cto` is parsed by
  Accord's CLI and cached by content. Agrees with `concerto validate` on all 108
  cicero-template-library instances, at versions 4 and 5.2
  (`script/sample_differential/compare_cli.sh`).
- `generate`'s `:optional` (`:always`, `:never`, `:random`) in the generator and as
  `->schema`'s `:generators {:optional ...}`, which is what Concerto's
  `--includeOptionalFields` asks for.

- `com.trustblocks.concerto.generator`: valid sample instances from a model --
  `generate`, `sample`, and a test.check `generator`. Every instance validates
  against the schema compiled for the same type and version; 432 samples across the
  cicero-template-library were also all accepted by concerto-core 5.2.1.
- `com.trustblocks.concerto.json-schema`: a model as JSON Schema (draft 7), from
  the same compiled schema, so the two agree: 2,592 of 2,592 mutated instances,
  through Ajv.
- `->schema` `:generators true`, which annotates the schema for generation without
  changing what it accepts; and generator and JSON Schema properties on the named
  schemas (`:concerto/date-time`, `:concerto/double`, ...), which change nothing
  and need no new dependency until something generates.
- The `:generators` alias in `deps.edn`: test.check and test.chuck.
- `script/sample_differential/`: the two differentials above, reproducibly.

- `com.trustblocks.concerto.model-check`: Concerto's model-level validation, as
  `check` (problems as data, with the rule id and exception class) and `check!`
  (throws the first). Opt-in. Covers declarations, properties, inheritance,
  identifiers, relationships, validators, maps, scalars, imports, namespaces,
  decorator validation and metamodel validation, following concerto-core 5.2.1.
  Metamodel validation compiles concerto-metamodel's own CTO with this library's
  compiler and checks the model AST as an instance of it, reporting concerto-core's
  `MetamodelException` wording; checked against concerto-core by a 6,000-mutation
  differential (see README).
  All 116 scenarios of concerto-conformance's `semantic/` suite are accounted for:
  108 pass, 8 are held to 5.2.1's own behavior where it fails the suite
  (`core-disagrees.edn`). Raises nothing on the 237 model files of the
  cicero-template-library.
- `script/gen_metamodel_schema.clj` and the generated `metamodel-schema`: the
  metamodel compiled to a Malli schema, plus each class's declared property types,
  from concerto-metamodel's CTO.
- The `validate/` suite of concerto-conformance is vendored and run in full
  (42 scenarios, at `:concerto-version` 4 and 5).

- `MapDeclaration` compiles to `:map-of`, inlined where used. Keys may be
  String, DateTime, or a scalar of either; values may be any primitive, enum,
  scalar, concept, asset, relationship (`--> Asset`) or another map. The CTO
  grammar now parses `--> Type` as a map value.
- `:concerto-version` (default 4) on `->schema` and `->edn`: a major version (3,
  4, 5 -- an integer is that major's first release, so 5 is 5.0) or a string such
  as `"5.2"`. The strictness is not where the major version is: DateTime must be
  a real `YYYY-MM-DDTHH:mm:ss[.f]` with `Z` or `±HH:MM`, and a scalar's
  constraints apply to a map key, **from 5.2.0** -- 5.0 and 5.1 behave like 4.x.
  A `--> Asset` map value has four regimes: unloadable before 3.23.0, either a
  reference or an embedded resource from 3.23.0 to 4.1.2, the embedded resource
  from 4.1.3 to 5.1.x, and the reference from 5.2.0. Each was run against
  concerto-core 3.16.7, 4.2.0, 5.0.0, 5.1.0, 5.2.0 and 5.2.1.
- Registry schemas `:concerto/string-key`, `:concerto/map-key`,
  `:concerto/date-time-key` and `:concerto/date-time-strict`.
  Schemas that use them read back given `registry*`.
- `com.trustblocks.concerto.metamodel` — Concerto metamodel JSON/EDN to a
  declaration registry. Type references are resolved eagerly by filling in the
  `namespace` slot that `TypeIdentifier` already carries, so the registry is
  pure data: serializable, diffable and readable back.
- `com.trustblocks.concerto.malli` — Malli schemas compiled from a registry at
  runtime, with a `key-fn` seam for storage adapters. Exports as pure EDN that
  reads back given `registry*`. Properties emit in declaration order.
- `com.trustblocks.concerto.instance` — Concerto JSON to a neutral EDN
  instance, lossless and with no mapping table.
- `com.trustblocks.concerto.cto` — CTO text to metamodel EDN via Accord's CLI.
  The only namespace that does I/O or needs Node.
- `script/cto2edn.clj` — a babashka script covering all of the above.

### Changed

- Metamodel `$class` matching is version-independent — dispatch is on the short
  type name, so a metamodel bump no longer silently blinds every match.
- `com.trustblocks.concerto.metamodel/registry` asserts that every metamodel
  version it sees is in `supported-metamodel-versions`, and throws otherwise.
  Previously an unknown version degraded silently: every property compiled to
  `:any`, inherited properties vanished with the unqualified supertypes, and
  the schema still compiled and still accepted anything.
- An unhandled property kind now raises instead of compiling to `:any`. The
  permissive default never fired on any of the 57 templates in the
  cicero-template-library, so it could only ever have masked a real gap.

### Added

- Nested concepts compile to `:ref`s into a local registry instead of a bare
  `:map`, so their contents are validated. Self-referential and mutually
  recursive concepts terminate.
- Maps are closed by default, matching Concerto's rejection of undeclared
  properties. `:closed false` opts out.
- A property whose declared type has several concrete subtypes compiles to a
  `:multi` dispatching on `$class`. Concerto permits polymorphism, so a closed
  schema for the parent alone would reject a legitimate subclass.
- `$identifier` and `$timestamp` are admitted where Concerto admits them:
  `$identifier` on any declaration, `$timestamp` only on transactions and
  events. Both behaviours were checked against `concerto validate` rather than
  inferred from the metamodel.
- A property pointing at a type whose model is not loaded now raises, rather
  than compiling to a `:map` that checks nothing.

### Changed

- `DateTime` is validated on its wire form with a lexical check, rather than by
  accepting any string and any JVM date object. The previous predicate passed
  `"hello"` and `""`, both of which Concerto rejects. The accepted envelope was
  measured against `concerto validate`; all 24 cases are in the test suite.
- `metamodel`, `malli` and `instance` are `.cljc` and carry no platform
  references; `cto` stays `.clj`. The suite runs under the JVM, babashka and
  ClojureScript on Node, so a document cannot be valid on one and invalid on
  another.

### Added

- Validators are enforced: `StringRegexValidator`, `StringLengthValidator` and
  the Integer/Long/Double domain validators, including one-sided bounds. Every
  verdict was checked against `concerto validate` on an equivalent model.
- Scalar declarations compile to their underlying primitive with their own
  validators applied, instead of being treated as concepts. Previously a
  `scalar CountryCode extends String` became a closed map with only `$class`,
  so a valid `"US"` was reported as an invalid type.
- Declaration kinds are whitelisted. An unsupported kind -- `MapDeclaration`
  today, whatever Concerto adds next -- raises rather than falling through to
  being compiled as a map.

### Added

- `script/fetch_template.clj` — pull a published template from
  templates.accordproject.org, convert its models to EDN, and validate any
  Concerto instance the archive ships. Uses only babashka built-ins.

### Fixed

- A declaration with concrete subtypes compiles to a `:multi` whose branches
  reference them, but the transitive closure was seeded with the root alone, so
  those branches pointed at declarations absent from the local registry and the
  schema failed to build with `:malli.core/invalid-ref`. Surfaced by running the
  fetch script over a real template.
- Compiling a schema for an enum or scalar declaration directly no longer tries
  to compile it as a map.

### Added

- `com.trustblocks.concerto.grammar` and `com.trustblocks.concerto.parser` — the
  CTO grammar as instaparse, and the transform to metamodel EDN. `cto/parse`
  takes `:parser :clojure` to use it instead of shelling out to Node.
- `script/differential.clj` compares the two parsers over a tree of .cto files.
  All 237 models in the cicero-template-library parse byte-identically.

### Known limitations

- The Clojure parser does not run under babashka: instaparse uses `deftype` with
  `clojure.lang.IHashEq`, which SCI cannot provide. It does run in
  ClojureScript, where there is no CLI to fall back to.

### Known gaps

The compiled schema is currently weaker than Concerto's own validator. See the
README for the list.

### Added

- `sizeValidator` (`CollectionSizeValidator`, Concerto 4.1's `size=[min,max]`
  on array and map properties) compiles to Malli `:min`/`:max` on the
  collection itself, not on its elements. Concerto 4.1 is the version this was
  checked against: `@accordproject/concerto-cli` has not published a 4.2 or
  5.x release yet, though `@accordproject/concerto-core`/`concerto-cto`/
  `concerto-util` are already at 5.0.0 -- the `parse` output this library
  consumes was verified byte-identical between the two.
- Two rules from `concerto-conformance`'s `semantic/features/collections.feature`
  are enforced at schema-compile time: `minSize` must be `<=` `maxSize`, and a
  size validator may only appear on an array or map property. Neither is
  checked by `concerto parse` itself -- both `size=[10,5]` and a size
  validator on a plain scalar property parse without complaint -- so nothing
  upstream of this compiler catches them.
- `test/com/trustblocks/concerto/conformance_test.cljc` runs the `validate/`
  suite from
  [accordproject/concerto-conformance](https://github.com/accordproject/concerto-conformance)
  -- the reference project's own model+instance+expected-verdict fixtures for
  primitives, required/optional fields, enums, `$class` resolution and
  collection size -- against this library's compiled schemas. Vendored under
  `test-resources/conformance/`, so it needs neither Node nor network at test
  time, matching every other suite here. That repo's other suite,
  `semantic/`, tests Concerto's `ModelManager` rejecting a malformed model at
  load time; this library does not delegate to that layer, so its two
  directly relevant rules are enforced in `malli.cljc` instead (see above)
  rather than imported wholesale.

[Unreleased]: https://github.com/TrustBlocks/concerto-clj/commits/main
