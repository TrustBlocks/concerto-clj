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

### Known gaps

The compiled schema is currently weaker than Concerto's own validator. See the
README for the list.

[Unreleased]: https://github.com/TrustBlocks/concerto-clj/commits/main
