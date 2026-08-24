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

### Known gaps

The compiled schema is currently weaker than Concerto's own validator. See the
README for the list.

[Unreleased]: https://github.com/TrustBlocks/concerto-clj/commits/main
