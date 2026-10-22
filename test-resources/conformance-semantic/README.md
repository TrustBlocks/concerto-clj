# Vendored: concerto-conformance semantic/

Verbatim copy of `semantic/features` (minus its `support/` step definitions for
other runtimes) and `semantic/specifications` from
[accordproject/concerto-conformance](https://github.com/accordproject/concerto-conformance)
at commit 57d3c2397acf333985f761684ad2cbef55ba7ead (ISC, per its package.json).
`conformance_semantic_test.cljc` reads the `.feature` files and runs every
scenario against `model-check`, so refreshing this directory refreshes the tests.
