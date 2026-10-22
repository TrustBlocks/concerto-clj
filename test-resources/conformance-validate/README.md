# Vendored: concerto-conformance validate/

Verbatim copy of `validate/features` and `validate/models` from
[accordproject/concerto-conformance](https://github.com/accordproject/concerto-conformance)
at commit 57d3c2397acf333985f761684ad2cbef55ba7ead (ISC, per its package.json), minus the
`*.ast.json` siblings, which this library does not use: it parses the `.cto`
itself. `conformance_validate_test.cljc` reads the `.feature` files and runs
every scenario, so refreshing this directory refreshes the tests.
