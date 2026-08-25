// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.trustblocks.concerto.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.trustblocks.concerto.grammar');
goog.require('instaparse.core');
com.trustblocks.concerto.parser.mm = "concerto.metamodel@1.0.0.";
/**
 * CTO's built-in types, and the metamodel property each compiles to.
 */
com.trustblocks.concerto.parser.primitive_types = new cljs.core.PersistentArrayMap(null, 6, ["String","StringProperty","Double","DoubleProperty","Integer","IntegerProperty","Long","LongProperty","DateTime","DateTimeProperty","Boolean","BooleanProperty"], null);
com.trustblocks.concerto.parser.scalar_kinds = new cljs.core.PersistentArrayMap(null, 6, ["String","StringScalar","Double","DoubleScalar","Integer","IntegerScalar","Long","LongScalar","DateTime","DateTimeScalar","Boolean","BooleanScalar"], null);
com.trustblocks.concerto.parser.domain_validators = new cljs.core.PersistentArrayMap(null, 3, ["Integer","IntegerDomainValidator","Long","LongDomainValidator","Double","DoubleDomainValidator"], null);
com.trustblocks.concerto.parser.class_kinds = new cljs.core.PersistentArrayMap(null, 5, ["asset","AssetDeclaration","participant","ParticipantDeclaration","transaction","TransactionDeclaration","event","EventDeclaration","concept","ConceptDeclaration"], null);
com.trustblocks.concerto.parser.tag_EQ_ = (function com$trustblocks$concerto$parser$tag_EQ_(t,node){
return ((cljs.core.vector_QMARK_.call(null,node)) && (cljs.core._EQ_.call(null,t,cljs.core.first.call(null,node))));
});
com.trustblocks.concerto.parser.child = (function com$trustblocks$concerto$parser$child(tag,node){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2572_SHARP_){
return com.trustblocks.concerto.parser.tag_EQ_.call(null,tag,p1__2572_SHARP_);
}),cljs.core.rest.call(null,node)));
});
com.trustblocks.concerto.parser.children = (function com$trustblocks$concerto$parser$children(tag,node){
return cljs.core.filterv.call(null,(function (p1__2573_SHARP_){
return com.trustblocks.concerto.parser.tag_EQ_.call(null,tag,p1__2573_SHARP_);
}),cljs.core.rest.call(null,node));
});
com.trustblocks.concerto.parser.text = (function com$trustblocks$concerto$parser$text(node){
return cljs.core.second.call(null,node);
});
com.trustblocks.concerto.parser.ident_of = (function com$trustblocks$concerto$parser$ident_of(node){
return com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),node));
});
com.trustblocks.concerto.parser.unquote_string = (function com$trustblocks$concerto$parser$unquote_string(s){
return clojure.string.replace.call(null,cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1))),/\\(.)/,(function (p__2574){
var vec__2575 = p__2574;
var _ = cljs.core.nth.call(null,vec__2575,(0),null);
var c = cljs.core.nth.call(null,vec__2575,(1),null);
var G__2578 = c;
switch (G__2578) {
case "n":
return "\n";

break;
case "t":
return "\t";

break;
case "r":
return "\r";

break;
default:
return c;

}
}));
});
com.trustblocks.concerto.parser.literal_value = (function com$trustblocks$concerto$parser$literal_value(node){
var v = cljs.core.second.call(null,node);
if(com.trustblocks.concerto.parser.tag_EQ_.call(null,new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),v)){
return com.trustblocks.concerto.parser.unquote_string.call(null,com.trustblocks.concerto.parser.text.call(null,v));
} else {
if(com.trustblocks.concerto.parser.tag_EQ_.call(null,new cljs.core.Keyword(null,"boolean-lit","boolean-lit",-1802768080),v)){
return cljs.core._EQ_.call(null,"true",com.trustblocks.concerto.parser.text.call(null,v));
} else {
if(com.trustblocks.concerto.parser.tag_EQ_.call(null,new cljs.core.Keyword(null,"number","number",1570378438),v)){
return com.trustblocks.concerto.parser.number_value.call(null,v);
} else {
return null;

}
}
}
});
/**
 * A CTO number as EDN.
 * 
 *   An integral double comes back as an integer, because that is what the JSON
 *   path produces: `JSON.stringify(0.0)` is `"0"`, so a model parsed through
 *   Accord's CLI loses the distinction before we ever see it. Matching that keeps
 *   the two parse paths producing identical EDN -- which matters, because a
 *   registry is stored and read back, and switching parsers must not change what
 *   is in the database.
 */
com.trustblocks.concerto.parser.number_value = (function com$trustblocks$concerto$parser$number_value(node){
var s = com.trustblocks.concerto.parser.text.call(null,node);
var n = parseFloat(s);
if((n === Math.trunc(n))){
return Math.trunc(n);
} else {
return n;
}
});
com.trustblocks.concerto.parser.type_identifier = (function com$trustblocks$concerto$parser$type_identifier(nm){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"TypeIdentifier"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),nm], null);
});
/**
 * Decorator arguments are typed nodes, not bare values: a string becomes a
 *   DecoratorString, an identifier a DecoratorTypeReference.
 */
com.trustblocks.concerto.parser.__GT_decorator_argument = (function com$trustblocks$concerto$parser$__GT_decorator_argument(node){
var inner = cljs.core.second.call(null,node);
if(com.trustblocks.concerto.parser.tag_EQ_.call(null,new cljs.core.Keyword(null,"type-ref","type-ref",-979899153),inner)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"DecoratorTypeReference"].join(''),new cljs.core.Keyword(null,"type","type",1174270348),com.trustblocks.concerto.parser.type_identifier.call(null,com.trustblocks.concerto.parser.ident_of.call(null,inner)),new cljs.core.Keyword(null,"isArray","isArray",709761807),(!((com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"array","array",-2080713842),inner) == null)))], null);
} else {
var v = com.trustblocks.concerto.parser.literal_value.call(null,inner);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,((typeof v === 'string')?"DecoratorString":((cljs.core.boolean_QMARK_.call(null,v))?"DecoratorBoolean":"DecoratorNumber"
))].join(''),new cljs.core.Keyword(null,"value","value",305978217),v], null);
}
});
com.trustblocks.concerto.parser.__GT_decorator = (function com$trustblocks$concerto$parser$__GT_decorator(node){
var args = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"decorator-args","decorator-args",1708204090),node);
var G__2580 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"Decorator"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,node)], null);
if(cljs.core.truth_(args)){
return cljs.core.assoc.call(null,G__2580,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),cljs.core.mapv.call(null,com.trustblocks.concerto.parser.__GT_decorator_argument,com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"decorator-arg","decorator-arg",335382546),args)));
} else {
return G__2580;
}
});
com.trustblocks.concerto.parser.decorators_of = (function com$trustblocks$concerto$parser$decorators_of(node){
return cljs.core.mapv.call(null,com.trustblocks.concerto.parser.__GT_decorator,com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"decorator","decorator",1164843393),node));
});
com.trustblocks.concerto.parser.with_decorators = (function com$trustblocks$concerto$parser$with_decorators(m,node){
var ds = com.trustblocks.concerto.parser.decorators_of.call(null,node);
var G__2581 = m;
if(cljs.core.seq.call(null,ds)){
return cljs.core.assoc.call(null,G__2581,new cljs.core.Keyword(null,"decorators","decorators",350732878),ds);
} else {
return G__2581;
}
});
com.trustblocks.concerto.parser.__GT_regex_validator = (function com$trustblocks$concerto$parser$__GT_regex_validator(node){
var raw = com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"regex-lit","regex-lit",-1315400326),node));
var close = clojure.string.last_index_of.call(null,raw,"/");
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"StringRegexValidator"].join(''),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.subs.call(null,raw,(1),close),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.subs.call(null,raw,(close + (1)))], null);
});
com.trustblocks.concerto.parser.bound = (function com$trustblocks$concerto$parser$bound(tag,node){
var temp__5825__auto__ = com.trustblocks.concerto.parser.child.call(null,tag,node);
if(cljs.core.truth_(temp__5825__auto__)){
var b = temp__5825__auto__;
return com.trustblocks.concerto.parser.number_value.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"number","number",1570378438),b));
} else {
return null;
}
});
com.trustblocks.concerto.parser.__GT_domain_validator = (function com$trustblocks$concerto$parser$__GT_domain_validator(node,type_name){
var lower = com.trustblocks.concerto.parser.bound.call(null,new cljs.core.Keyword(null,"lower","lower",1120320821),node);
var upper = com.trustblocks.concerto.parser.bound.call(null,new cljs.core.Keyword(null,"upper","upper",246243906),node);
var G__2582 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.parser.domain_validators.call(null,type_name,"IntegerDomainValidator"))].join('')], null);
var G__2582__$1 = (((!((lower == null))))?cljs.core.assoc.call(null,G__2582,new cljs.core.Keyword(null,"lower","lower",1120320821),lower):G__2582);
if((!((upper == null)))){
return cljs.core.assoc.call(null,G__2582__$1,new cljs.core.Keyword(null,"upper","upper",246243906),upper);
} else {
return G__2582__$1;
}
});
com.trustblocks.concerto.parser.__GT_length_validator = (function com$trustblocks$concerto$parser$__GT_length_validator(node){
var minl = com.trustblocks.concerto.parser.bound.call(null,new cljs.core.Keyword(null,"min-len","min-len",-717560485),node);
var maxl = com.trustblocks.concerto.parser.bound.call(null,new cljs.core.Keyword(null,"max-len","max-len",-18846016),node);
var G__2583 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"StringLengthValidator"].join('')], null);
var G__2583__$1 = (((!((minl == null))))?cljs.core.assoc.call(null,G__2583,new cljs.core.Keyword(null,"minLength","minLength",-1538722770),minl):G__2583);
if((!((maxl == null)))){
return cljs.core.assoc.call(null,G__2583__$1,new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),maxl);
} else {
return G__2583__$1;
}
});
com.trustblocks.concerto.parser.__GT_field = (function com$trustblocks$concerto$parser$__GT_field(node){
var idents = com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),node);
var type_name = com.trustblocks.concerto.parser.text.call(null,cljs.core.first.call(null,idents));
var nm = com.trustblocks.concerto.parser.text.call(null,cljs.core.second.call(null,idents));
var primitive = com.trustblocks.concerto.parser.primitive_types.call(null,type_name);
var v = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),node);
var regex = (cljs.core.truth_(v)?com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"regex-validator","regex-validator",824369302),v):null);
var range_v = (cljs.core.truth_(v)?com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"range-validator","range-validator",-1057399604),v):null);
var len = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"length-validator","length-validator",-1800526572),node);
var d = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),node);
var G__2584 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = primitive;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "ObjectProperty";
}
})())].join(''),new cljs.core.Keyword(null,"name","name",1843675177),nm,new cljs.core.Keyword(null,"isArray","isArray",709761807),(!((com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"array","array",-2080713842),node) == null))),new cljs.core.Keyword(null,"isOptional","isOptional",-1412481319),(!((com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"optional","optional",2053951509),node) == null)))], null);
var G__2584__$1 = (((primitive == null))?cljs.core.assoc.call(null,G__2584,new cljs.core.Keyword(null,"type","type",1174270348),com.trustblocks.concerto.parser.type_identifier.call(null,type_name)):G__2584);
var G__2584__$2 = (cljs.core.truth_(d)?cljs.core.assoc.call(null,G__2584__$1,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),com.trustblocks.concerto.parser.literal_value.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),d))):G__2584__$1);
var G__2584__$3 = (cljs.core.truth_(regex)?cljs.core.assoc.call(null,G__2584__$2,new cljs.core.Keyword(null,"validator","validator",-1966190681),com.trustblocks.concerto.parser.__GT_regex_validator.call(null,regex)):G__2584__$2);
var G__2584__$4 = (cljs.core.truth_(range_v)?cljs.core.assoc.call(null,G__2584__$3,new cljs.core.Keyword(null,"validator","validator",-1966190681),com.trustblocks.concerto.parser.__GT_domain_validator.call(null,range_v,type_name)):G__2584__$3);
var G__2584__$5 = (cljs.core.truth_(len)?cljs.core.assoc.call(null,G__2584__$4,new cljs.core.Keyword(null,"lengthValidator","lengthValidator",-794930465),com.trustblocks.concerto.parser.__GT_length_validator.call(null,len)):G__2584__$4);
return com.trustblocks.concerto.parser.with_decorators.call(null,G__2584__$5,node);

});
com.trustblocks.concerto.parser.__GT_relationship = (function com$trustblocks$concerto$parser$__GT_relationship(node){
var idents = com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),node);
return com.trustblocks.concerto.parser.with_decorators.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"RelationshipProperty"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.text.call(null,cljs.core.second.call(null,idents)),new cljs.core.Keyword(null,"type","type",1174270348),com.trustblocks.concerto.parser.type_identifier.call(null,com.trustblocks.concerto.parser.text.call(null,cljs.core.first.call(null,idents))),new cljs.core.Keyword(null,"isArray","isArray",709761807),(!((com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"array","array",-2080713842),node) == null))),new cljs.core.Keyword(null,"isOptional","isOptional",-1412481319),(!((com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"optional","optional",2053951509),node) == null)))], null),node);
});
com.trustblocks.concerto.parser.__GT_property = (function com$trustblocks$concerto$parser$__GT_property(node){
var inner = cljs.core.second.call(null,node);
if(com.trustblocks.concerto.parser.tag_EQ_.call(null,new cljs.core.Keyword(null,"relationship","relationship",670482699),inner)){
return com.trustblocks.concerto.parser.__GT_relationship.call(null,inner);
} else {
return com.trustblocks.concerto.parser.__GT_field.call(null,inner);
}
});
com.trustblocks.concerto.parser.__GT_enum = (function com$trustblocks$concerto$parser$__GT_enum(node){
return com.trustblocks.concerto.parser.with_decorators.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"EnumDeclaration"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,node),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.mapv.call(null,(function (v){
return com.trustblocks.concerto.parser.with_decorators.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"EnumProperty"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,v)], null),v);
}),com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"enum-value","enum-value",-1046516274),node))], null),node);
});
com.trustblocks.concerto.parser.__GT_scalar = (function com$trustblocks$concerto$parser$__GT_scalar(node){
var kind = com.trustblocks.concerto.parser.ident_of.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"scalar-kind","scalar-kind",-500955975),node));
var v = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),node);
var regex = (cljs.core.truth_(v)?com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"regex-validator","regex-validator",824369302),v):null);
var rng = (cljs.core.truth_(v)?com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"range-validator","range-validator",-1057399604),v):null);
var len = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"length-validator","length-validator",-1800526572),node);
var d = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"scalar-default","scalar-default",1720163167),node);
var G__2585 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.parser.scalar_kinds.call(null,kind,"StringScalar"))].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,node)], null);
var G__2585__$1 = (cljs.core.truth_(d)?cljs.core.assoc.call(null,G__2585,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),com.trustblocks.concerto.parser.literal_value.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),d))):G__2585);
var G__2585__$2 = (cljs.core.truth_(regex)?cljs.core.assoc.call(null,G__2585__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681),com.trustblocks.concerto.parser.__GT_regex_validator.call(null,regex)):G__2585__$1);
var G__2585__$3 = (cljs.core.truth_(rng)?cljs.core.assoc.call(null,G__2585__$2,new cljs.core.Keyword(null,"validator","validator",-1966190681),com.trustblocks.concerto.parser.__GT_domain_validator.call(null,rng,kind)):G__2585__$2);
var G__2585__$4 = (cljs.core.truth_(len)?cljs.core.assoc.call(null,G__2585__$3,new cljs.core.Keyword(null,"lengthValidator","lengthValidator",-794930465),com.trustblocks.concerto.parser.__GT_length_validator.call(null,len)):G__2585__$3);
return com.trustblocks.concerto.parser.with_decorators.call(null,G__2585__$4,node);

});
com.trustblocks.concerto.parser.__GT_map = (function com$trustblocks$concerto$parser$__GT_map(node){
return com.trustblocks.concerto.parser.with_decorators.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"MapDeclaration"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,node),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"ObjectMapKeyType"].join(''),new cljs.core.Keyword(null,"type","type",1174270348),com.trustblocks.concerto.parser.type_identifier.call(null,com.trustblocks.concerto.parser.ident_of.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"map-key","map-key",1899483661),node)))], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"ObjectMapValueType"].join(''),new cljs.core.Keyword(null,"type","type",1174270348),com.trustblocks.concerto.parser.type_identifier.call(null,com.trustblocks.concerto.parser.ident_of.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"map-value","map-value",-1794869409),node)))], null)], null),node);
});
com.trustblocks.concerto.parser.__GT_class = (function com$trustblocks$concerto$parser$__GT_class(node){
var kind = com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"class-kind","class-kind",-1031500717),node));
var ext = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"extends","extends",-954903259),node);
var ided = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"identified","identified",977175865),node);
var G__2586 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.trustblocks.concerto.parser.class_kinds.call(null,kind))].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,node),new cljs.core.Keyword(null,"isAbstract","isAbstract",-1506508250),(!((com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"abstract","abstract",1319624427),node) == null))),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.mapv.call(null,com.trustblocks.concerto.parser.__GT_property,com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"property","property",-1114278232),node))], null);
var G__2586__$1 = (cljs.core.truth_(ext)?cljs.core.assoc.call(null,G__2586,new cljs.core.Keyword(null,"superType","superType",1013761557),com.trustblocks.concerto.parser.type_identifier.call(null,com.trustblocks.concerto.parser.ident_of.call(null,ext))):G__2586);
var G__2586__$2 = (cljs.core.truth_(ided)?cljs.core.assoc.call(null,G__2586__$1,new cljs.core.Keyword(null,"identified","identified",977175865),(cljs.core.truth_(com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"identified-by","identified-by",45017679),ided))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"IdentifiedBy"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"identified-by","identified-by",45017679),ided))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"Identified"].join('')], null))):G__2586__$1);
return com.trustblocks.concerto.parser.with_decorators.call(null,G__2586__$2,node);

});
com.trustblocks.concerto.parser.__GT_declaration = (function com$trustblocks$concerto$parser$__GT_declaration(node){
var inner = cljs.core.second.call(null,node);
var pred__2587 = com.trustblocks.concerto.parser.tag_EQ_;
var expr__2588 = inner;
if(cljs.core.truth_(pred__2587.call(null,new cljs.core.Keyword(null,"enum-decl","enum-decl",-312943148),expr__2588))){
return com.trustblocks.concerto.parser.__GT_enum.call(null,inner);
} else {
if(cljs.core.truth_(pred__2587.call(null,new cljs.core.Keyword(null,"scalar-decl","scalar-decl",-1974177518),expr__2588))){
return com.trustblocks.concerto.parser.__GT_scalar.call(null,inner);
} else {
if(cljs.core.truth_(pred__2587.call(null,new cljs.core.Keyword(null,"map-decl","map-decl",523791935),expr__2588))){
return com.trustblocks.concerto.parser.__GT_map.call(null,inner);
} else {
return com.trustblocks.concerto.parser.__GT_class.call(null,inner);
}
}
}
});
/**
 * `org.accordproject.contract@0.2.0` -> itself. A trailing type name is already
 *   separated by the grammar.
 */
com.trustblocks.concerto.parser.split_versioned = (function com$trustblocks$concerto$parser$split_versioned(s){
return s;
});
com.trustblocks.concerto.parser.uri_of = (function com$trustblocks$concerto$parser$uri_of(node){
var temp__5825__auto__ = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"from-uri","from-uri",-1553992326),node);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847),f));
} else {
return null;
}
});
com.trustblocks.concerto.parser.__GT_import = (function com$trustblocks$concerto$parser$__GT_import(node){
var inner = cljs.core.second.call(null,node);
var ns_ = com.trustblocks.concerto.parser.split_versioned.call(null,com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"versioned-name","versioned-name",-184094547),inner)));
var uri = com.trustblocks.concerto.parser.uri_of.call(null,inner);
var pred__2591 = com.trustblocks.concerto.parser.tag_EQ_;
var expr__2592 = inner;
if(cljs.core.truth_(pred__2591.call(null,new cljs.core.Keyword(null,"import-all","import-all",2018423611),expr__2592))){
var G__2594 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"ImportAll"].join(''),new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_], null);
if(cljs.core.truth_(uri)){
return cljs.core.assoc.call(null,G__2594,new cljs.core.Keyword(null,"uri","uri",-774711847),uri);
} else {
return G__2594;
}
} else {
if(cljs.core.truth_(pred__2591.call(null,new cljs.core.Keyword(null,"import-types","import-types",-1681087825),expr__2592))){
var G__2595 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"ImportTypes"].join(''),new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.mapv.call(null,com.trustblocks.concerto.parser.ident_of,com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"import-item","import-item",1060217869),inner))], null);
var G__2595__$1 = (cljs.core.truth_(uri)?cljs.core.assoc.call(null,G__2595,new cljs.core.Keyword(null,"uri","uri",-774711847),uri):G__2595);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__2590_SHARP_){
return com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),p1__2590_SHARP_);
}),com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"import-item","import-item",1060217869),inner)))){
return cljs.core.assoc.call(null,G__2595__$1,new cljs.core.Keyword(null,"aliasedTypes","aliasedTypes",709863852),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (it){
var temp__5825__auto__ = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),it);
if(cljs.core.truth_(temp__5825__auto__)){
var a = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"AliasedType"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,it),new cljs.core.Keyword(null,"aliasedName","aliasedName",-1586940366),com.trustblocks.concerto.parser.ident_of.call(null,a)], null);
} else {
return null;
}
}),com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"import-item","import-item",1060217869),inner))));
} else {
return G__2595__$1;
}
} else {
if(cljs.core.truth_(pred__2591.call(null,new cljs.core.Keyword(null,"import-type","import-type",-499283032),expr__2592))){
var G__2596 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"ImportType"].join(''),new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_,new cljs.core.Keyword(null,"name","name",1843675177),com.trustblocks.concerto.parser.ident_of.call(null,inner)], null);
if(cljs.core.truth_(uri)){
return cljs.core.assoc.call(null,G__2596,new cljs.core.Keyword(null,"uri","uri",-774711847),uri);
} else {
return G__2596;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2592)].join('')));
}
}
}
});
com.trustblocks.concerto.parser.__GT_model = (function com$trustblocks$concerto$parser$__GT_model(tree){
var v = com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"version","version",425292698),tree);
var G__2597 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$class","$class",1168854512),[com.trustblocks.concerto.parser.mm,"Model"].join(''),new cljs.core.Keyword(null,"decorators","decorators",350732878),com.trustblocks.concerto.parser.decorators_of.call(null,tree),new cljs.core.Keyword(null,"namespace","namespace",-377510372),com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"versioned-name","versioned-name",-184094547),com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"namespace-decl","namespace-decl",179599213),tree))),new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.mapv.call(null,com.trustblocks.concerto.parser.__GT_import,com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),tree)),new cljs.core.Keyword(null,"declarations","declarations",1621100858),cljs.core.mapv.call(null,com.trustblocks.concerto.parser.__GT_declaration,com.trustblocks.concerto.parser.children.call(null,new cljs.core.Keyword(null,"declaration","declaration",-1819933768),tree))], null);
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,G__2597,new cljs.core.Keyword(null,"concertoVersion","concertoVersion",731845845),com.trustblocks.concerto.parser.unquote_string.call(null,com.trustblocks.concerto.parser.text.call(null,com.trustblocks.concerto.parser.child.call(null,new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),v))));
} else {
return G__2597;
}
});
/**
 * CTO source -> metamodel EDN. Throws with the parse failure when it will not
 *   parse.
 */
com.trustblocks.concerto.parser.parse_string = (function com$trustblocks$concerto$parser$parse_string(src){
var tree = com.trustblocks.concerto.grammar.parser.call(null,src);
if(instaparse.core.failure_QMARK_.call(null,tree)){
throw cljs.core.ex_info.call(null,"Could not parse CTO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),instaparse.core.get_failure.call(null,tree)], null));
} else {
}

return com.trustblocks.concerto.parser.__GT_model.call(null,tree);
});

//# sourceMappingURL=parser.js.map
