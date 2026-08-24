# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

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

### Known gaps

The compiled schema is currently weaker than Concerto's own validator. See the
README for the list.

[Unreleased]: https://github.com/TrustBlocks/concerto-clj/commits/main
