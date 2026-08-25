(ns com.trustblocks.concerto.grammar
  "The CTO grammar, as instaparse.

  Accord's normative grammar is a PEG in JavaScript
  (`concerto-cto/lib/parser.pegjs`, 1816 lines). Roughly 150 of its 239 rules
  are a lexical layer borrowed from PEG.js's JavaScript grammar -- identifier
  start/part classes, string escapes, hex literals, URI and semver components --
  which collapse here into regexes. What remains is the CTO language itself.

  Whitespace and comments are handled by instaparse's `:auto-whitespace` rather
  than by threading a `__` rule through every production, which is most of why
  this is shorter than the original.

  This grammar is *not* the specification. The metamodel is. Correctness here
  means producing the same metamodel a `concerto parse` produces, which is what
  the differential test checks."
  (:require [instaparse.core :as insta]))

(def whitespace
  (insta/parser
   "whitespace = (ws | comment)+
    ws        = #'\\s+'
    comment   = line-comment | block-comment
    line-comment  = #'//[^\\r\\n]*'
    block-comment = #'/\\*([^*]|\\*+[^*/])*\\*+/'"))

(def cto
  "namespace-decl and at least one declaration are the only required parts."
  "
model = version? decorator* namespace-decl import* declaration*

(* ---------------------------------------------------------------- header *)

version       = <'concerto'> <'version'> string-lit
namespace-decl = <'namespace'> versioned-name

import        = <'import'> (import-all | import-types | import-type)
import-all    = versioned-name <'.'> <'*'> from-uri?
import-type   = versioned-name <'.'> ident alias? from-uri?
import-types  = versioned-name <'.'> <'{'> import-item (<','> import-item)* <'}'> from-uri?
import-item   = ident alias?
alias         = <'as'> ident
from-uri      = <'from'> uri

(* ----------------------------------------------------------- declarations *)

declaration = enum-decl | scalar-decl | map-decl | class-decl

class-decl  = decorator* abstract? class-kind ident identified? extends?
              <'{'> property* <'}'>
class-kind  = 'asset' | 'participant' | 'transaction' | 'event' | 'concept'
abstract    = <'abstract'>
extends     = <'extends'> ident
identified  = identified-by | identified-bare
identified-by   = <'identified'> <'by'> ident
identified-bare = <'identified'>

enum-decl   = decorator* <'enum'> ident <'{'> enum-value* <'}'>
enum-value  = decorator* <'o'> ident

scalar-decl = decorator* <'scalar'> ident <'extends'> scalar-kind
              scalar-default? validator? length-validator?
scalar-kind = ident
scalar-default = <'default'> <'='> literal

(* Concerto 3 map declarations. Parsed faithfully even though the schema
   compiler refuses them -- reading the language and compiling it are separate
   concerns, and a parser that silently dropped a declaration would be worse
   than a compiler that says it cannot handle one. *)
map-decl  = decorator* <'map'> ident <'{'> map-key map-value <'}'>
map-key   = <'o'> ident
map-value = <'o'> ident

(* ------------------------------------------------------------- properties *)

property = relationship | field

(* The type is just an identifier here; whether it names a primitive or a
   declaration is decided in the transform, against the metamodel's own list.
   Splitting it in the grammar makes the choice ambiguous to a CFG parser. *)
field    = decorator* <'o'> ident array? ident
           default? validator? length-validator? optional?
relationship = decorator* <'-->'> ident array? ident optional?

array    = '[]'
optional = <'optional'>
default  = <'default'> <'='> literal

validator        = regex-validator | range-validator
regex-validator  = <'regex'> <'='> regex-lit
(* Bounds are optional on either side, so they are named rather than
   positional -- `range=[,500]` has an upper and no lower, and a bare list of
   numbers cannot say which. *)
range-validator  = <'range'> <'='> <'['> lower? <','> upper? <']'>
lower = number
upper = number
length-validator = <'length'> <'='> <'['> min-len? <','> max-len? <']'>
min-len = number
max-len = number

(* --------------------------------------------------------------- lexical *)

decorator      = <'@'> ident decorator-args?
decorator-args = <'('> (decorator-arg (<','> decorator-arg)*)? <')'>

(* Ordered choice, not `|`: `true` matches both a boolean literal and an
   identifier, and a CFG parser has no reason to prefer one. *)
decorator-arg  = literal / type-ref
type-ref       = ident array?

literal = string-lit | number | boolean-lit
boolean-lit = 'true' | 'false'

ident          = #'[A-Za-z_$][A-Za-z0-9_$]*'
versioned-name = #'[A-Za-z_$][A-Za-z0-9_$]*(\\.[A-Za-z_$][A-Za-z0-9_$]*)*(@[0-9]+\\.[0-9]+\\.[0-9]+(-[A-Za-z0-9.\\-]+)?)?'
string-lit     = #'\"(\\\\.|[^\"\\\\])*\"' | #\"'(\\\\.|[^'\\\\])*'\"
number         = #'-?[0-9]+(\\.[0-9]+)?([eE][+-]?[0-9]+)?'
regex-lit      = #'/(\\\\.|\\[(\\\\.|[^\\]\\\\])*\\]|[^/\\\\\\[])*/[a-z]*'
uri            = #'[A-Za-z][A-Za-z0-9+.\\-]*://[^\\s]+'
")

(def parser
  (insta/parser cto :auto-whitespace whitespace))
