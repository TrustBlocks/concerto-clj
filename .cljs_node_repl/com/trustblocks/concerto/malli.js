// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.trustblocks.concerto.malli');
goog.require('cljs.core');
goog.require('com.trustblocks.concerto.metamodel');
goog.require('malli.core');
goog.require('malli.util');
/**
 * Concerto primitive property `$class` -> Malli schema.
 * 
 *   Non-trivial types are emitted as *named* schemas resolved from `registry*`
 *   rather than inline. That keeps `m/form` output pure EDN that reads back, and
 *   it keeps a schema dump legible: `:concerto/date-time` says what it is, an
 *   inline `[:fn #object[...]]` says nothing and round-trips through nothing.
 */
com.trustblocks.concerto.malli.scalar = new cljs.core.PersistentArrayMap(null, 6, ["StringProperty",new cljs.core.Keyword(null,"string","string",-1989541586),"BooleanProperty",new cljs.core.Keyword(null,"boolean","boolean",-1919418404),"DoubleProperty",new cljs.core.Keyword("concerto","double","concerto/double",1509797340),"IntegerProperty",new cljs.core.Keyword(null,"int","int",-1741416922),"LongProperty",new cljs.core.Keyword(null,"int","int",-1741416922),"DateTimeProperty",new cljs.core.Keyword("concerto","date-time","concerto/date-time",-816134775)], null);
/**
 * Concerto's DateTime envelope, as observed rather than as specified.
 * 
 *   `concerto validate` accepts a good deal more than ISO-8601: a bare year, the
 *   basic form `20190120`, a space instead of `T`, a leading `+`, a trailing `T`
 *   with no time, and a date-only `2019-13-45` with no calendar check. It draws
 *   the line at time components -- hour 25, minute 99, second 60 and a date-only
 *   form promoted to a full timestamp are all rejected. Each case here was run
 *   through the CLI; the test suite carries the whole table.
 * 
 *   Assembled from parts rather than written as one literal because JavaScript
 *   regular expressions have no free-spacing mode. Nothing here uses lookbehind,
 *   named groups or flags, so the JVM and JS engines give identical answers --
 *   which is the point: a date must not be valid on the server and invalid in the
 *   browser.
 */
com.trustblocks.concerto.malli.date_time_pattern = (function (){var yyyy = "\\+?\\d{4}";
var loose = "(?:-?\\d{2}(?:-?\\d{2})?)?";
var mm = "(?:0[1-9]|1[0-2])";
var dd = "(?:0[1-9]|[12]\\d|3[01])";
var hh = "(?:[01]\\d|2[0-3])";
var nn = "[0-5]\\d";
var time = ["(?:",hh,"(?::?",nn,"(?::?",nn,"(?:\\.\\d+)?)?)?)?"].join('');
var zone = "(?:Z|[+-](?:[01]\\d|2[0-3]):?[0-5]\\d)?";
return cljs.core.re_pattern.call(null,["^(?:",yyyy,loose,"|",yyyy,"-?",mm,"-?",dd,"[T ]",time,zone,")$"].join(''));
})();
/**
 * Concerto DateTime, checked on the wire form rather than by parsing.
 * 
 *   A DateTime *is* an ISO-8601 string in Concerto's JSON; parsing it into a
 *   platform type is a separate concern and a lossy one. `js/Date` drops the
 *   offset and everything below milliseconds, `java.time.OffsetDateTime` keeps
 *   both -- so a schema written in terms of parsed values would accept different
 *   documents depending on where it ran. Checking the text keeps the verdict the
 *   same everywhere.
 * 
 *   An earlier version accepted any string at all, plus JVM date objects. That
 *   passed "hello" and "", which Concerto rejects, and admitted types with no
 *   JavaScript counterpart.
 */
com.trustblocks.concerto.malli.date_time = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"should be a date-time"], null),com.trustblocks.concerto.malli.date_time_pattern], null)], null);
/**
 * Concerto Double. JSON has no int/double distinction for whole numbers, so a
 *   Double field commonly arrives as `85` rather than `85.0`, and Concerto's own
 *   validator accepts that -- `:double` would be stricter than the spec.
 * 
 *   Written as a predicate rather than `[:or :int :double]` so the humanized
 *   failure is one clear line. The `:or` form reports every branch it tried
 *   ("should be an integer", "should be a double"), which reads as a
 *   contradiction rather than an explanation.
 */
com.trustblocks.concerto.malli.double_like = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"should be a number"], null),cljs.core.number_QMARK_], null);
/**
 * Malli registry: the defaults, malli.util's :merge/:select-keys, and the
 *   Concerto-specific named schemas. Supply this when reading an exported schema
 *   back, or `:concerto/date-time` will not resolve.
 */
com.trustblocks.concerto.malli.registry_STAR_ = cljs.core.merge.call(null,malli.core.default_schemas.call(null),malli.util.schemas.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("concerto","date-time","concerto/date-time",-816134775),com.trustblocks.concerto.malli.date_time,new cljs.core.Keyword("concerto","double","concerto/double",1509797340),com.trustblocks.concerto.malli.double_like], null));
com.trustblocks.concerto.malli.declaration_of = (function com$trustblocks$concerto$malli$declaration_of(reg,fqn){
return cljs.core.get_in.call(null,reg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fqn,new cljs.core.Keyword(null,"declaration","declaration",-1819933768)], null));
});
com.trustblocks.concerto.malli.declaration_kind = (function com$trustblocks$concerto$malli$declaration_kind(reg,fqn){
return com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn)));
});
com.trustblocks.concerto.malli.enum_QMARK_ = (function com$trustblocks$concerto$malli$enum_QMARK_(reg,fqn){
return cljs.core._EQ_.call(null,"EnumDeclaration",com.trustblocks.concerto.malli.declaration_kind.call(null,reg,fqn));
});
/**
 * Concerto 3 scalar declarations -- a named primitive, optionally constrained.
 * 
 *   A scalar is a *value*, not a tagged object, so it inlines as its underlying
 *   type rather than compiling to a map or being referenced. Treating one as a
 *   concept produced a closed map with only `$class`, which rejected the plain
 *   string a scalar actually is.
 */
com.trustblocks.concerto.malli.scalar_declarations = new cljs.core.PersistentArrayMap(null, 6, ["StringScalar",new cljs.core.Keyword(null,"string","string",-1989541586),"BooleanScalar",new cljs.core.Keyword(null,"boolean","boolean",-1919418404),"DoubleScalar",new cljs.core.Keyword("concerto","double","concerto/double",1509797340),"IntegerScalar",new cljs.core.Keyword(null,"int","int",-1741416922),"LongScalar",new cljs.core.Keyword(null,"int","int",-1741416922),"DateTimeScalar",new cljs.core.Keyword("concerto","date-time","concerto/date-time",-816134775)], null);
/**
 * Declaration kinds that compile to a Malli map -- those that describe a tagged
 *   object with properties. Enums compile to `:enum` and are handled separately.
 */
com.trustblocks.concerto.malli.map_like_declarations = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["TransactionDeclaration",null,"AssetDeclaration",null,"ParticipantDeclaration",null,"EventDeclaration",null,"ConceptDeclaration",null], null), null);
/**
 * Raise unless `fqn` is a declaration kind this library can turn into a schema.
 * 
 *   Without this, anything with a `$class` that was not an enum fell through to
 *   being compiled as a map. A `scalar CountryCode extends String` therefore
 *   became a closed map with only `$class`, so a perfectly valid "US" was
 *   reported as an invalid type -- a false rejection of data Concerto accepts.
 * 
 *   Naming the unsupported kind turns that into an answer. It also means the next
 *   declaration kind Concerto introduces stops the compile instead of quietly
 *   producing a schema that describes nothing.
 */
com.trustblocks.concerto.malli.check_compilable_BANG_ = (function com$trustblocks$concerto$malli$check_compilable_BANG_(reg,fqn){
var kind = com.trustblocks.concerto.malli.declaration_kind.call(null,reg,fqn);
if(((cljs.core.contains_QMARK_.call(null,com.trustblocks.concerto.malli.map_like_declarations,kind)) || (((cljs.core.contains_QMARK_.call(null,com.trustblocks.concerto.malli.scalar_declarations,kind)) || (cljs.core._EQ_.call(null,"EnumDeclaration",kind)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Cannot compile declaration ",cljs.core.pr_str.call(null,fqn)," of kind ",cljs.core.pr_str.call(null,kind),". This library handles concepts, assets, ","transactions, participants, events, enums and scalars; ","map declarations are not supported yet. Refusing to ","emit a schema rather than guess at one."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"declaration","declaration",-1819933768),fqn,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"supported","supported",495067239),cljs.core.sort.call(null,cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["EnumDeclaration",null], null), null),cljs.core.concat.call(null,com.trustblocks.concerto.malli.map_like_declarations,cljs.core.keys.call(null,com.trustblocks.concerto.malli.scalar_declarations))))], null));
}
});
/**
 * Regex flags with the same meaning on both engines.
 * 
 *   Concerto's regexes are JavaScript regexes -- `{pattern, flags}` is literally
 *   `new RegExp(...)`. `g` and `y` do not affect a membership test, but `u`
 *   changes matching semantics and has no equivalent meaning as a JVM inline flag,
 *   so it is refused rather than dropped: silently discarding a flag would change
 *   what the pattern accepts.
 */
com.trustblocks.concerto.malli.portable_regex_flags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["i",null,"m",null,"s",null], null), null);
com.trustblocks.concerto.malli.regex_schema = (function com$trustblocks$concerto$malli$regex_schema(p__4920){
var map__4921 = p__4920;
var map__4921__$1 = cljs.core.__destructure_map.call(null,map__4921);
var pattern = cljs.core.get.call(null,map__4921__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var flags = cljs.core.get.call(null,map__4921__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var flags__$1 = (function (){var or__5025__auto__ = flags;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var bad = cljs.core.remove.call(null,com.trustblocks.concerto.malli.portable_regex_flags,flags__$1);
if(cljs.core.seq.call(null,bad)){
throw cljs.core.ex_info.call(null,["Unsupported regex flag(s) ",cljs.core.pr_str.call(null,cljs.core.apply.call(null,cljs.core.str,bad))," in pattern ",cljs.core.pr_str.call(null,pattern),". Only i, m and s carry the same meaning on the JVM ","and in JavaScript; dropping a flag would silently ","change what the pattern accepts."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"flags","flags",1775418075),flags__$1,new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016),cljs.core.apply.call(null,cljs.core.str,bad)], null));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),((cljs.core.seq.call(null,flags__$1))?["(?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flags__$1),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join(''):pattern)], null);
});
com.trustblocks.concerto.malli.domain_schemas = (function com$trustblocks$concerto$malli$domain_schemas(p__4922){
var map__4923 = p__4922;
var map__4923__$1 = cljs.core.__destructure_map.call(null,map__4923);
var lower = cljs.core.get.call(null,map__4923__$1,new cljs.core.Keyword(null,"lower","lower",1120320821));
var upper = cljs.core.get.call(null,map__4923__$1,new cljs.core.Keyword(null,"upper","upper",246243906));
var G__4924 = cljs.core.PersistentVector.EMPTY;
var G__4924__$1 = (((!((lower == null))))?cljs.core.conj.call(null,G__4924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),lower], null)):G__4924);
if((!((upper == null)))){
return cljs.core.conj.call(null,G__4924__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<=","<=",-395636158),upper], null));
} else {
return G__4924__$1;
}
});
com.trustblocks.concerto.malli.length_schema = (function com$trustblocks$concerto$malli$length_schema(p__4925){
var map__4926 = p__4925;
var map__4926__$1 = cljs.core.__destructure_map.call(null,map__4926);
var minLength = cljs.core.get.call(null,map__4926__$1,new cljs.core.Keyword(null,"minLength","minLength",-1538722770));
var maxLength = cljs.core.get.call(null,map__4926__$1,new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var G__4927 = cljs.core.PersistentArrayMap.EMPTY;
var G__4927__$1 = (((!((minLength == null))))?cljs.core.assoc.call(null,G__4927,new cljs.core.Keyword(null,"min","min",444991522),minLength):G__4927);
if((!((maxLength == null)))){
return cljs.core.assoc.call(null,G__4927__$1,new cljs.core.Keyword(null,"max","max",61366548),maxLength);
} else {
return G__4927__$1;
}
})()], null);
});
/**
 * Malli `:sequential` properties (`:min`/`:max`) for a `sizeValidator` node.
 * 
 *   Unlike `length-schema` and `domain-schemas`, this does not go through
 *   `validator-schemas`/`constrained`: those apply to *each element*, and a size
 *   validator constrains the collection itself, so it has to be applied after
 *   `:sequential` wraps the element schema rather than before.
 * 
 *   Both checks below are enforced by Concerto's `ModelManager` when a model is
 *   loaded, not by the CTO parser `concerto.cto` shells out to -- `concerto
 *   parse` accepts `size=[10,5]`, and accepts a size validator on a
 *   non-collection property, without complaint. Nothing upstream of this
 *   compiler catches either, so both are checked here, against the exact
 *   wording `concerto-conformance`'s semantic suite expects.
 */
com.trustblocks.concerto.malli.size_schema = (function com$trustblocks$concerto$malli$size_schema(p__4928,prop){
var map__4929 = p__4928;
var map__4929__$1 = cljs.core.__destructure_map.call(null,map__4929);
var sv = map__4929__$1;
var minSize = cljs.core.get.call(null,map__4929__$1,new cljs.core.Keyword(null,"minSize","minSize",1737585038));
var maxSize = cljs.core.get.call(null,map__4929__$1,new cljs.core.Keyword(null,"maxSize","maxSize",-1434884613));
if(cljs.core.truth_(new cljs.core.Keyword(null,"isArray","isArray",709761807).cljs$core$IFn$_invoke$arity$1(prop))){
} else {
throw cljs.core.ex_info.call(null,["size validator can only be applied to array or map ","properties. Property ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop))," is neither."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),new cljs.core.Keyword(null,"sizeValidator","sizeValidator",709596047),sv], null));
}

if((((!((minSize == null)))) && ((((!((maxSize == null)))) && ((maxSize < minSize)))))){
throw cljs.core.ex_info.call(null,["minSize must be less than or equal to maxSize"," (property ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop)),", minSize ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minSize),", maxSize ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maxSize),")"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),new cljs.core.Keyword(null,"minSize","minSize",1737585038),minSize,new cljs.core.Keyword(null,"maxSize","maxSize",-1434884613),maxSize], null));
} else {
}

var G__4930 = cljs.core.PersistentArrayMap.EMPTY;
var G__4930__$1 = (((!((minSize == null))))?cljs.core.assoc.call(null,G__4930,new cljs.core.Keyword(null,"min","min",444991522),minSize):G__4930);
if((!((maxSize == null)))){
return cljs.core.assoc.call(null,G__4930__$1,new cljs.core.Keyword(null,"max","max",61366548),maxSize);
} else {
return G__4930__$1;
}
});
/**
 * Extra schemas contributed by one validator node, or nil.
 */
com.trustblocks.concerto.malli.validator_schemas = (function com$trustblocks$concerto$malli$validator_schemas(validator){
if(cljs.core.truth_(validator)){
var G__4931 = com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(validator));
switch (G__4931) {
case "StringRegexValidator":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.trustblocks.concerto.malli.regex_schema.call(null,validator)], null);

break;
case "StringLengthValidator":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.trustblocks.concerto.malli.length_schema.call(null,validator)], null);

break;
case "IntegerDomainValidator":
case "LongDomainValidator":
case "DoubleDomainValidator":
return com.trustblocks.concerto.malli.domain_schemas.call(null,validator);

break;
default:
throw cljs.core.ex_info.call(null,["Unknown validator ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(validator)),". Refusing to emit a schema that would ignore it."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),validator], null));

}
} else {
return null;
}
});
/**
 * Apply a node's validators to its compiled schema.
 * 
 *   Base first, so that `:and` short-circuits before a bound is compared against
 *   something that is not a number. Concerto carries the length constraint in a
 *   separate `lengthValidator` field from the regex in `validator`, and a property
 *   may have both.
 */
com.trustblocks.concerto.malli.constrained = (function com$trustblocks$concerto$malli$constrained(base,node){
var extra = cljs.core.concat.call(null,com.trustblocks.concerto.malli.validator_schemas.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(node)),com.trustblocks.concerto.malli.validator_schemas.call(null,new cljs.core.Keyword(null,"lengthValidator","lengthValidator",-794930465).cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.seq.call(null,extra)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),base], null),extra);
} else {
return base;
}
});
com.trustblocks.concerto.malli.enum_values = (function com$trustblocks$concerto$malli$enum_values(reg,fqn){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn)));
});
com.trustblocks.concerto.malli.abstract_QMARK_ = (function com$trustblocks$concerto$malli$abstract_QMARK_(reg,fqn){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"isAbstract","isAbstract",-1506508250).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn)));
});
/**
 * fqn -> concrete declarations assignable to it, itself included when concrete.
 * 
 *   Concerto is nominally typed and permits polymorphism, so a property declared
 *   as `Clause` legitimately holds any concrete subclass of Clause. Validating
 *   such a value against Clause's own schema would reject the subclass's extra
 *   properties -- which is exactly the false rejection that closing the maps would
 *   otherwise introduce. Built once per compilation and sorted, so the emitted
 *   schema is deterministic.
 */
com.trustblocks.concerto.malli.subtype_index = (function com$trustblocks$concerto$malli$subtype_index(reg){
return cljs.core.reduce.call(null,(function (acc,f){
if(com.trustblocks.concerto.malli.abstract_QMARK_.call(null,reg,f)){
return acc;
} else {
return cljs.core.reduce.call(null,(function (acc__$1,ancestor){
return cljs.core.update.call(null,acc__$1,ancestor,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
}),acc,com.trustblocks.concerto.metamodel.super_chain.call(null,reg,f));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort.call(null,cljs.core.keys.call(null,reg)));
});
/**
 * Schema for a value declared as `fqn`: the enum, or a reference to the one
 *   concrete type it can be, or a dispatch over every concrete type it could be.
 */
com.trustblocks.concerto.malli.object_schema = (function com$trustblocks$concerto$malli$object_schema(reg,subtypes,fqn,key_fn){
if((com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn) == null)){
throw cljs.core.ex_info.call(null,["Unresolved type ",cljs.core.pr_str.call(null,fqn),". Its model is not ","loaded, so there is nothing to validate the value ","against. Load the model that declares it."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),fqn], null));
} else {
if(com.trustblocks.concerto.malli.enum_QMARK_.call(null,reg,fqn)){
return com.trustblocks.concerto.malli.enum_values.call(null,reg,fqn);
} else {
if(cljs.core.contains_QMARK_.call(null,com.trustblocks.concerto.malli.scalar_declarations,com.trustblocks.concerto.malli.declaration_kind.call(null,reg,fqn))){
return com.trustblocks.concerto.malli.constrained.call(null,com.trustblocks.concerto.malli.scalar_declarations.call(null,com.trustblocks.concerto.malli.declaration_kind.call(null,reg,fqn)),com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn));
} else {
var _ = com.trustblocks.concerto.malli.check_compilable_BANG_.call(null,reg,fqn);
var concrete = cljs.core.get.call(null,subtypes,fqn);
var G__4933 = cljs.core.count.call(null,concrete);
switch (G__4933) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),fqn], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.first.call(null,concrete)], null);

break;
default:
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),key_fn.call(null,"$class")], null)], null),cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),c], null)], null);
})),concrete);

}

}
}
}
});
com.trustblocks.concerto.malli.property__GT_schema = (function com$trustblocks$concerto$malli$property__GT_schema(reg,subtypes,prop,key_fn){
var kind = com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(prop));
var base = (function (){var or__5025__auto__ = com.trustblocks.concerto.malli.scalar.call(null,kind);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__4935 = kind;
switch (G__4935) {
case "ObjectProperty":
return com.trustblocks.concerto.malli.object_schema.call(null,reg,subtypes,com.trustblocks.concerto.metamodel.type_fqn.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(prop)),key_fn);

break;
case "RelationshipProperty":
return new cljs.core.Keyword(null,"string","string",-1989541586);

break;
default:
return null;

}
}
})();
if(cljs.core.truth_(base)){
} else {
throw cljs.core.ex_info.call(null,["Cannot compile property ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop))," of kind ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(prop)),". This library does not handle that property kind ","yet, and refuses to emit a schema that would accept ","any value for it."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),new cljs.core.Keyword(null,"$class","$class",1168854512),new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(prop),new cljs.core.Keyword(null,"kind","kind",-717265803),kind], null));
}

var G__4936 = com.trustblocks.concerto.malli.constrained.call(null,base,prop);
var G__4936__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"isArray","isArray",709761807).cljs$core$IFn$_invoke$arity$1(prop))?cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960)], null),G__4936):G__4936);
if(cljs.core.truth_(new cljs.core.Keyword(null,"sizeValidator","sizeValidator",709596047).cljs$core$IFn$_invoke$arity$1(prop))){
return malli.util.update_properties.call(null,G__4936__$1,cljs.core.merge,com.trustblocks.concerto.malli.size_schema.call(null,new cljs.core.Keyword(null,"sizeValidator","sizeValidator",709596047).cljs$core$IFn$_invoke$arity$1(prop),prop));
} else {
return G__4936__$1;
}
});
/**
 * Entries deduplicated by key, keeping the first position and the last value.
 * 
 *   A child redeclaring a property overrides its parent's definition but keeps the
 *   parent's position. Tracked explicitly rather than with an array-map, which
 *   silently becomes an unordered hash-map once it passes eight entries -- the
 *   reason an earlier version of this emitted fields in arbitrary order.
 */
com.trustblocks.concerto.malli.ordered = (function com$trustblocks$concerto$malli$ordered(entries){
return new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__4938,e){
var map__4939 = p__4938;
var map__4939__$1 = cljs.core.__destructure_map.call(null,map__4939);
var acc = map__4939__$1;
var idx = cljs.core.get.call(null,map__4939__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var order = cljs.core.get.call(null,map__4939__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var k = cljs.core.first.call(null,e);
var temp__5823__auto__ = idx.call(null,k);
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),i], null),e);
} else {
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),cljs.core.count.call(null,order)),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj,e);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),entries));
});
/**
 * Concerto's `$` properties, admitted where Concerto admits them.
 * 
 *   The rule is asymmetric, and both halves are what Concerto was observed to do
 *   rather than what the metamodel suggests:
 * 
 *  $identifier  accepted on any declaration. The cicero-template-library's
 *               rental-deposit-with carries one on a plain unidentified
 *               `concept` and `concerto validate` calls that sample valid.
 * 
 *  $timestamp   only on transactions and events. Adding one to that same
 *               concept draws an Unexpected property error naming $timestamp.
 * 
 *   A closed map has to admit whatever Concerto admits, or it turns a valid
 *   instance into a false rejection.
 */
com.trustblocks.concerto.malli.system_properties = (function com$trustblocks$concerto$malli$system_properties(reg,fqn,key_fn){
var kind = com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn)));
var G__4940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_fn.call(null,"$class"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),fqn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_fn.call(null,"$identifier"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["TransactionDeclaration",null,"EventDeclaration",null], null), null).call(null,kind))){
return cljs.core.conj.call(null,G__4940,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_fn.call(null,"$timestamp"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("concerto","date-time","concerto/date-time",-816134775)], null));
} else {
return G__4940;
}
});
/**
 * One declaration as a map schema, with its whole inheritance chain flattened
 *   into it, parents first.
 */
com.trustblocks.concerto.malli.declaration__GT_map = (function com$trustblocks$concerto$malli$declaration__GT_map(reg,subtypes,fqn,key_fn,closed){
com.trustblocks.concerto.malli.check_compilable_BANG_.call(null,reg,fqn);

var entries = (function (){var iter__5503__auto__ = (function com$trustblocks$concerto$malli$declaration__GT_map_$_iter__4941(s__4942){
return (new cljs.core.LazySeq(null,(function (){
var s__4942__$1 = s__4942;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__4942__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var f = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__4942__$1,f,xs__6385__auto__,temp__5825__auto__){
return (function com$trustblocks$concerto$malli$declaration__GT_map_$_iter__4941_$_iter__4943(s__4944){
return (new cljs.core.LazySeq(null,((function (s__4942__$1,f,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__4944__$1 = s__4944;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__4944__$1);
if(temp__5825__auto____$1){
var s__4944__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4944__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__4944__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__4946 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__4945 = (0);
while(true){
if((i__4945 < size__5502__auto__)){
var prop = cljs.core._nth.call(null,c__5501__auto__,i__4945);
cljs.core.chunk_append.call(null,b__4946,(function (){var k = key_fn.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop));
if(cljs.core.truth_(new cljs.core.Keyword(null,"isOptional","isOptional",-1412481319).cljs$core$IFn$_invoke$arity$1(prop))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),com.trustblocks.concerto.malli.property__GT_schema.call(null,reg,subtypes,prop,key_fn)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,com.trustblocks.concerto.malli.property__GT_schema.call(null,reg,subtypes,prop,key_fn)], null);
}
})());

var G__4948 = (i__4945 + (1));
i__4945 = G__4948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4946),com$trustblocks$concerto$malli$declaration__GT_map_$_iter__4941_$_iter__4943.call(null,cljs.core.chunk_rest.call(null,s__4944__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4946),null);
}
} else {
var prop = cljs.core.first.call(null,s__4944__$2);
return cljs.core.cons.call(null,(function (){var k = key_fn.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop));
if(cljs.core.truth_(new cljs.core.Keyword(null,"isOptional","isOptional",-1412481319).cljs$core$IFn$_invoke$arity$1(prop))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),com.trustblocks.concerto.malli.property__GT_schema.call(null,reg,subtypes,prop,key_fn)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,com.trustblocks.concerto.malli.property__GT_schema.call(null,reg,subtypes,prop,key_fn)], null);
}
})(),com$trustblocks$concerto$malli$declaration__GT_map_$_iter__4941_$_iter__4943.call(null,cljs.core.rest.call(null,s__4944__$2)));
}
} else {
return null;
}
break;
}
});})(s__4942__$1,f,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__4942__$1,f,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,f))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,com$trustblocks$concerto$malli$declaration__GT_map_$_iter__4941.call(null,cljs.core.rest.call(null,s__4942__$1)));
} else {
var G__4949 = cljs.core.rest.call(null,s__4942__$1);
s__4942__$1 = G__4949;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.reverse.call(null,com.trustblocks.concerto.metamodel.super_chain.call(null,reg,fqn)));
})();
return cljs.core.into.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),(function (){var G__4947 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(closed)){
return cljs.core.assoc.call(null,G__4947,new cljs.core.Keyword(null,"closed","closed",-919675359),true);
} else {
return G__4947;
}
})()], null),com.trustblocks.concerto.malli.system_properties.call(null,reg,fqn,key_fn)),com.trustblocks.concerto.malli.ordered.call(null,entries));
});
/**
 * Every declaration reachable from `root` through ObjectProperty references,
 *   following the inheritance chain and every concrete subtype at each step.
 * 
 *   Guarded by `seen`, so a concept that refers to itself -- or a cycle between
 *   two -- terminates rather than inlining forever. That is also why the emitted
 *   schema uses `:ref` into a local registry instead of nesting the maps.
 */
com.trustblocks.concerto.malli.referenced = (function com$trustblocks$concerto$malli$referenced(reg,subtypes,root){
var queue = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null),cljs.core.get.call(null,subtypes,root));
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,queue)){
return seen;
} else {
var fqn = cljs.core.first.call(null,queue);
var more = cljs.core.vec.call(null,cljs.core.rest.call(null,queue));
if(((cljs.core.contains_QMARK_.call(null,seen,fqn)) || ((((com.trustblocks.concerto.malli.declaration_of.call(null,reg,fqn) == null)) || (((com.trustblocks.concerto.malli.enum_QMARK_.call(null,reg,fqn)) || (cljs.core.contains_QMARK_.call(null,com.trustblocks.concerto.malli.scalar_declarations,com.trustblocks.concerto.malli.declaration_kind.call(null,reg,fqn))))))))){
var G__4966 = more;
var G__4967 = seen;
queue = G__4966;
seen = G__4967;
continue;
} else {
var targets = (function (){var iter__5503__auto__ = ((function (queue,seen,fqn,more){
return (function com$trustblocks$concerto$malli$referenced_$_iter__4958(s__4959){
return (new cljs.core.LazySeq(null,((function (queue,seen,fqn,more){
return (function (){
var s__4959__$1 = s__4959;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__4959__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var ancestor = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__4959__$1,queue,seen,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more){
return (function com$trustblocks$concerto$malli$referenced_$_iter__4958_$_iter__4960(s__4961){
return (new cljs.core.LazySeq(null,((function (s__4959__$1,queue,seen,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more){
return (function (){
var s__4961__$1 = s__4961;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__4961__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var prop = cljs.core.first.call(null,xs__6385__auto____$1);
if(cljs.core._EQ_.call(null,"ObjectProperty",com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(prop)))){
var t = com.trustblocks.concerto.metamodel.type_fqn.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(prop));
if(cljs.core.truth_((function (){var and__5023__auto__ = t;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = com.trustblocks.concerto.malli.declaration_of.call(null,reg,t);
if(cljs.core.truth_(and__5023__auto____$1)){
return (((!(com.trustblocks.concerto.malli.enum_QMARK_.call(null,reg,t)))) && ((!(cljs.core.contains_QMARK_.call(null,com.trustblocks.concerto.malli.scalar_declarations,com.trustblocks.concerto.malli.declaration_kind.call(null,reg,t))))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var iterys__5499__auto__ = ((function (s__4961__$1,s__4959__$1,queue,seen,t,prop,xs__6385__auto____$1,temp__5825__auto____$1,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more){
return (function com$trustblocks$concerto$malli$referenced_$_iter__4958_$_iter__4960_$_iter__4962(s__4963){
return (new cljs.core.LazySeq(null,((function (s__4961__$1,s__4959__$1,queue,seen,t,prop,xs__6385__auto____$1,temp__5825__auto____$1,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more){
return (function (){
var s__4963__$1 = s__4963;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__4963__$1);
if(temp__5825__auto____$2){
var s__4963__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4963__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__4963__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__4965 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__4964 = (0);
while(true){
if((i__4964 < size__5502__auto__)){
var target = cljs.core._nth.call(null,c__5501__auto__,i__4964);
cljs.core.chunk_append.call(null,b__4965,target);

var G__4968 = (i__4964 + (1));
i__4964 = G__4968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4965),com$trustblocks$concerto$malli$referenced_$_iter__4958_$_iter__4960_$_iter__4962.call(null,cljs.core.chunk_rest.call(null,s__4963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4965),null);
}
} else {
var target = cljs.core.first.call(null,s__4963__$2);
return cljs.core.cons.call(null,target,com$trustblocks$concerto$malli$referenced_$_iter__4958_$_iter__4960_$_iter__4962.call(null,cljs.core.rest.call(null,s__4963__$2)));
}
} else {
return null;
}
break;
}
});})(s__4961__$1,s__4959__$1,queue,seen,t,prop,xs__6385__auto____$1,temp__5825__auto____$1,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more))
,null,null));
});})(s__4961__$1,s__4959__$1,queue,seen,t,prop,xs__6385__auto____$1,temp__5825__auto____$1,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.cons.call(null,t,cljs.core.get.call(null,subtypes,t))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,com$trustblocks$concerto$malli$referenced_$_iter__4958_$_iter__4960.call(null,cljs.core.rest.call(null,s__4961__$1)));
} else {
var G__4969 = cljs.core.rest.call(null,s__4961__$1);
s__4961__$1 = G__4969;
continue;
}
} else {
var G__4970 = cljs.core.rest.call(null,s__4961__$1);
s__4961__$1 = G__4970;
continue;
}
} else {
var G__4971 = cljs.core.rest.call(null,s__4961__$1);
s__4961__$1 = G__4971;
continue;
}
} else {
return null;
}
break;
}
});})(s__4959__$1,queue,seen,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more))
,null,null));
});})(s__4959__$1,queue,seen,ancestor,xs__6385__auto__,temp__5825__auto__,fqn,more))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,ancestor))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,com$trustblocks$concerto$malli$referenced_$_iter__4958.call(null,cljs.core.rest.call(null,s__4959__$1)));
} else {
var G__4972 = cljs.core.rest.call(null,s__4959__$1);
s__4959__$1 = G__4972;
continue;
}
} else {
return null;
}
break;
}
});})(queue,seen,fqn,more))
,null,null));
});})(queue,seen,fqn,more))
;
return iter__5503__auto__.call(null,com.trustblocks.concerto.metamodel.super_chain.call(null,reg,fqn));
})();
var G__4973 = cljs.core.into.call(null,more,targets);
var G__4974 = cljs.core.conj.call(null,seen,fqn);
queue = G__4973;
seen = G__4974;
continue;
}
}
break;
}
});
/**
 * Whether `fqn` or any ancestor declares an ObjectProperty pointing at another
 *   declaration -- as opposed to an enum, which inlines, or a scalar.
 * 
 *   This is the test for whether a local registry is needed, and it is not the
 *   same as asking whether the reachable set is just `fqn`: a concept whose only
 *   reference is to itself reaches nothing new, but still emits a :ref that needs
 *   somewhere to resolve.
 */
com.trustblocks.concerto.malli.references_QMARK_ = (function com$trustblocks$concerto$malli$references_QMARK_(reg,fqn){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (prop){
var and__5023__auto__ = cljs.core._EQ_.call(null,"ObjectProperty",com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(prop)));
if(and__5023__auto__){
var t = com.trustblocks.concerto.metamodel.type_fqn.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(prop));
return cljs.core.boolean$.call(null,(function (){var and__5023__auto____$1 = t;
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = com.trustblocks.concerto.malli.declaration_of.call(null,reg,t);
if(cljs.core.truth_(and__5023__auto____$2)){
return (((!(com.trustblocks.concerto.malli.enum_QMARK_.call(null,reg,t)))) && ((!(cljs.core.contains_QMARK_.call(null,com.trustblocks.concerto.malli.scalar_declarations,com.trustblocks.concerto.malli.declaration_kind.call(null,reg,t))))));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
})());
} else {
return and__5023__auto__;
}
}),cljs.core.mapcat.call(null,(function (p1__4975_SHARP_){
return new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.malli.declaration_of.call(null,reg,p1__4975_SHARP_));
}),com.trustblocks.concerto.metamodel.super_chain.call(null,reg,fqn))));
});
/**
 * Compile a Malli schema for a `$class`, flattening its whole inheritance chain.
 * 
 *   Maps are closed, matching Concerto, which rejects undeclared properties. Pass
 *   `:closed false` only if the values being validated legitimately carry extra
 *   keys -- a storage adapter should strip its own derived keys instead, so that
 *   the guarantee this library offers is the one Concerto offers.
 * 
 *   Nested concepts compile to `:ref`s into a local registry rather than to a bare
 *   `:map`, so their contents are actually checked. A property whose declared type
 *   has several concrete subtypes compiles to a `:multi` dispatching on `$class`,
 *   because Concerto permits polymorphism and a closed schema for the parent alone
 *   would reject a legitimate subclass.
 * 
 *   A model with nothing nested emits as a plain map, since there is nothing to
 *   reference.
 */
com.trustblocks.concerto.malli.__GT_schema = (function com$trustblocks$concerto$malli$__GT_schema(var_args){
var args__5755__auto__ = [];
var len__5749__auto___4981 = arguments.length;
var i__5750__auto___4982 = (0);
while(true){
if((i__5750__auto___4982 < len__5749__auto___4981)){
args__5755__auto__.push((arguments[i__5750__auto___4982]));

var G__4983 = (i__5750__auto___4982 + (1));
i__5750__auto___4982 = G__4983;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return com.trustblocks.concerto.malli.__GT_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(com.trustblocks.concerto.malli.__GT_schema.cljs$core$IFn$_invoke$arity$variadic = (function (reg,fqn,p__4979){
var map__4980 = p__4979;
var map__4980__$1 = cljs.core.__destructure_map.call(null,map__4980);
var key_fn = cljs.core.get.call(null,map__4980__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.keyword);
var closed = cljs.core.get.call(null,map__4980__$1,new cljs.core.Keyword(null,"closed","closed",-919675359),true);
if(cljs.core.empty_QMARK_.call(null,com.trustblocks.concerto.metamodel.super_chain.call(null,reg,fqn))){
throw cljs.core.ex_info.call(null,"Unknown $class -- is its model loaded?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fqn","fqn",905101306),fqn], null));
} else {
}

var subtypes = com.trustblocks.concerto.malli.subtype_index.call(null,reg);
var needed = com.trustblocks.concerto.malli.referenced.call(null,reg,subtypes,fqn);
var root = com.trustblocks.concerto.malli.object_schema.call(null,reg,subtypes,fqn,key_fn);
var form = ((cljs.core.empty_QMARK_.call(null,needed))?root:((((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),fqn], null),root)) && ((!(com.trustblocks.concerto.malli.references_QMARK_.call(null,reg,fqn))))))?com.trustblocks.concerto.malli.declaration__GT_map.call(null,reg,subtypes,fqn,key_fn,closed):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,com.trustblocks.concerto.malli.declaration__GT_map.call(null,reg,subtypes,f,key_fn,closed)], null);
})),cljs.core.sort.call(null,needed))], null),root], null)
));
return malli.core.schema.call(null,form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),com.trustblocks.concerto.malli.registry_STAR_], null));
}));

(com.trustblocks.concerto.malli.__GT_schema.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.trustblocks.concerto.malli.__GT_schema.cljs$lang$applyTo = (function (seq4976){
var G__4977 = cljs.core.first.call(null,seq4976);
var seq4976__$1 = cljs.core.next.call(null,seq4976);
var G__4978 = cljs.core.first.call(null,seq4976__$1);
var seq4976__$2 = cljs.core.next.call(null,seq4976__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4977,G__4978,seq4976__$2);
}));

/**
 * The schema as plain EDN, ready to spit to a file.
 * 
 *   Reads back with `(m/schema form {:registry registry*})`.
 */
com.trustblocks.concerto.malli.__GT_edn = (function com$trustblocks$concerto$malli$__GT_edn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___4987 = arguments.length;
var i__5750__auto___4988 = (0);
while(true){
if((i__5750__auto___4988 < len__5749__auto___4987)){
args__5755__auto__.push((arguments[i__5750__auto___4988]));

var G__4989 = (i__5750__auto___4988 + (1));
i__5750__auto___4988 = G__4989;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return com.trustblocks.concerto.malli.__GT_edn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(com.trustblocks.concerto.malli.__GT_edn.cljs$core$IFn$_invoke$arity$variadic = (function (reg,fqn,opts){
return malli.core.form.call(null,cljs.core.apply.call(null,com.trustblocks.concerto.malli.__GT_schema,reg,fqn,opts));
}));

(com.trustblocks.concerto.malli.__GT_edn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.trustblocks.concerto.malli.__GT_edn.cljs$lang$applyTo = (function (seq4984){
var G__4985 = cljs.core.first.call(null,seq4984);
var seq4984__$1 = cljs.core.next.call(null,seq4984);
var G__4986 = cljs.core.first.call(null,seq4984__$1);
var seq4984__$2 = cljs.core.next.call(null,seq4984__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4985,G__4986,seq4984__$2);
}));


//# sourceMappingURL=malli.js.map
