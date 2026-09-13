// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.trustblocks.concerto.metamodel');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Metamodel versions this library has been checked against.
 */
com.trustblocks.concerto.metamodel.supported_metamodel_versions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["1.0.0",null], null), null);
com.trustblocks.concerto.metamodel.metamodel_class = /^concerto\.metamodel@(.+)\.([A-Za-z][A-Za-z0-9_]*)$/;
/**
 * Short type name of a metamodel `$class`, ignoring its version, or nil when
 *   the `$class` does not belong to the metamodel at all.
 * 
 *   Dispatching on the short name rather than the full versioned string is what
 *   keeps a metamodel bump from silently blinding every match in this library.
 */
com.trustblocks.concerto.metamodel.metamodel_type = (function com$trustblocks$concerto$metamodel$metamodel_type($class){
if(typeof $class === 'string'){
var G__526 = cljs.core.re_matches.call(null,com.trustblocks.concerto.metamodel.metamodel_class,$class);
if((G__526 == null)){
return null;
} else {
return cljs.core.nth.call(null,G__526,(2));
}
} else {
return null;
}
});
/**
 * Metamodel version a `$class` refers to, or nil if it is not a metamodel type.
 */
com.trustblocks.concerto.metamodel.metamodel_version = (function com$trustblocks$concerto$metamodel$metamodel_version($class){
if(typeof $class === 'string'){
var G__527 = cljs.core.re_matches.call(null,com.trustblocks.concerto.metamodel.metamodel_class,$class);
if((G__527 == null)){
return null;
} else {
return cljs.core.nth.call(null,G__527,(1));
}
} else {
return null;
}
});
/**
 * Every metamodel version referenced anywhere in `x`.
 */
com.trustblocks.concerto.metamodel.metamodel_versions = (function com$trustblocks$concerto$metamodel$metamodel_versions(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,(function (){var temp__5823__auto__ = com.trustblocks.concerto.metamodel.metamodel_version.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.mapcat.call(null,com.trustblocks.concerto.metamodel.metamodel_versions),cljs.core.vals.call(null,x));
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,com.trustblocks.concerto.metamodel.metamodel_versions),x);
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
});
/**
 * Return `model`, or throw if it uses a metamodel version we do not know.
 * 
 *   An unnoticed metamodel bump is the worst failure available to this library.
 *   Every `$class` match would miss, so every property would fall through to a
 *   permissive default; TypeIdentifiers would go unqualified, so supertypes would
 *   not resolve and inherited properties would vanish. The schema would still
 *   compile, still export clean EDN, and still accept the sample it was built
 *   from -- while accepting everything else too. A validator that silently stops
 *   validating is worse than no validator, so stop instead.
 */
com.trustblocks.concerto.metamodel.check_metamodel_version_BANG_ = (function com$trustblocks$concerto$metamodel$check_metamodel_version_BANG_(model){
var found = com.trustblocks.concerto.metamodel.metamodel_versions.call(null,model);
var bad = cljs.core.remove.call(null,com.trustblocks.concerto.metamodel.supported_metamodel_versions,found);
if(cljs.core.seq.call(null,bad)){
throw cljs.core.ex_info.call(null,["Unsupported Concerto metamodel version ",clojure.string.join.call(null,", ",cljs.core.sort.call(null,bad)),". This library is checked against ",clojure.string.join.call(null,", ",cljs.core.sort.call(null,com.trustblocks.concerto.metamodel.supported_metamodel_versions)),". Refusing to compile a schema that would silently ","accept anything."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"found","found",-584700170),cljs.core.sort.call(null,found),new cljs.core.Keyword(null,"supported","supported",495067239),cljs.core.sort.call(null,com.trustblocks.concerto.metamodel.supported_metamodel_versions),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(model)], null));
} else {
}

return model;
});
/**
 * Parsed metamodel JSON (string keys) -> EDN (keyword keys).
 * 
 *   `$class` becomes `:$class`, `superType` becomes `:superType`. Case is
 *   preserved deliberately: kebab-casing here would be lossy and would have to be
 *   reversed through the model on the way out, which is a storage concern, not a
 *   metamodel one.
 */
com.trustblocks.concerto.metamodel.json__GT_edn = (function com$trustblocks$concerto$metamodel$json__GT_edn(x){
return clojure.walk.keywordize_keys.call(null,x);
});
/**
 * Remove source Range/Position nodes. They are byte offsets into the .cto text
 *   rather than schema semantics, and they dominate the payload.
 */
com.trustblocks.concerto.metamodel.strip_locations = (function com$trustblocks$concerto$metamodel$strip_locations(x){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.dissoc.call(null,node,new cljs.core.Keyword(null,"location","location",1815599388));
} else {
return node;
}
}),x);
});
/**
 * Short type name -> namespace, from a model's own declarations plus its
 *   imports. A local declaration shadows an import of the same name.
 */
com.trustblocks.concerto.metamodel.namespace_index = (function com$trustblocks$concerto$metamodel$namespace_index(model){
var ns_ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(model);
return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function com$trustblocks$concerto$metamodel$namespace_index_$_iter__528(s__529){
return (new cljs.core.LazySeq(null,(function (){
var s__529__$1 = s__529;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__529__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var i = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__529__$1,i,xs__6385__auto__,temp__5825__auto__,ns_){
return (function com$trustblocks$concerto$metamodel$namespace_index_$_iter__528_$_iter__530(s__531){
return (new cljs.core.LazySeq(null,((function (s__529__$1,i,xs__6385__auto__,temp__5825__auto__,ns_){
return (function (){
var s__531__$1 = s__531;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__531__$1);
if(temp__5825__auto____$1){
var s__531__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__531__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__531__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__533 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__532 = (0);
while(true){
if((i__532 < size__5502__auto__)){
var nm = cljs.core._nth.call(null,c__5501__auto__,i__532);
cljs.core.chunk_append.call(null,b__533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nm,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(i)], null));

var G__539 = (i__532 + (1));
i__532 = G__539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__533),com$trustblocks$concerto$metamodel$namespace_index_$_iter__528_$_iter__530.call(null,cljs.core.chunk_rest.call(null,s__531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__533),null);
}
} else {
var nm = cljs.core.first.call(null,s__531__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nm,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(i)], null),com$trustblocks$concerto$metamodel$namespace_index_$_iter__528_$_iter__530.call(null,cljs.core.rest.call(null,s__531__$2)));
}
} else {
return null;
}
break;
}
});})(s__529__$1,i,xs__6385__auto__,temp__5825__auto__,ns_))
,null,null));
});})(s__529__$1,i,xs__6385__auto__,temp__5825__auto__,ns_))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,(function (){var G__534 = com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(i));
switch (G__534) {
case "ImportType":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i)], null);

break;
case "ImportTypes":
return new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(i);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
})()));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,com$trustblocks$concerto$metamodel$namespace_index_$_iter__528.call(null,cljs.core.rest.call(null,s__529__$1)));
} else {
var G__541 = cljs.core.rest.call(null,s__529__$1);
s__529__$1 = G__541;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(model));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function com$trustblocks$concerto$metamodel$namespace_index_$_iter__535(s__536){
return (new cljs.core.LazySeq(null,(function (){
var s__536__$1 = s__536;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__536__$1);
if(temp__5825__auto__){
var s__536__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__536__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__536__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__538 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__537 = (0);
while(true){
if((i__537 < size__5502__auto__)){
var d = cljs.core._nth.call(null,c__5501__auto__,i__537);
cljs.core.chunk_append.call(null,b__538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d),ns_], null));

var G__542 = (i__537 + (1));
i__537 = G__542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__538),com$trustblocks$concerto$metamodel$namespace_index_$_iter__535.call(null,cljs.core.chunk_rest.call(null,s__536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__538),null);
}
} else {
var d = cljs.core.first.call(null,s__536__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d),ns_], null),com$trustblocks$concerto$metamodel$namespace_index_$_iter__535.call(null,cljs.core.rest.call(null,s__536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(model));
})()));
});
/**
 * Fill in the `namespace` of every TypeIdentifier in `x`, resolving short names
 *   through `ns-for`.
 * 
 *   The Concerto grammar writes type references unqualified -- `superType` and
 *   ObjectProperty carry a bare `name` -- so the namespace has to be recovered
 *   from the enclosing model's imports. Doing that eagerly, once, is what keeps
 *   the registry pure data; the alternative is to keep the model's import resolver
 *   as a closure beside each declaration, which makes the registry unserializable
 *   and so unstorable, undiffable and unexportable.
 * 
 *   TypeIdentifier already carries an optional `namespace` in the metamodel, so a
 *   qualified declaration is still a legal metamodel value: nothing is mangled and
 *   nothing is invented. Walking on `$class` rather than on known parent fields
 *   covers decorator type references and map key/value types without enumerating
 *   every site. A name that resolves to nothing is left bare, exactly as it
 *   arrived.
 */
com.trustblocks.concerto.metamodel.qualify_types = (function com$trustblocks$concerto$metamodel$qualify_types(ns_for,x){
if(cljs.core.map_QMARK_.call(null,x)){
var m = cljs.core.update_vals.call(null,x,(function (p1__543_SHARP_){
return com.trustblocks.concerto.metamodel.qualify_types.call(null,ns_for,p1__543_SHARP_);
}));
if(((cljs.core._EQ_.call(null,"TypeIdentifier",com.trustblocks.concerto.metamodel.metamodel_type.call(null,new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(m)))) && ((!(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))){
var temp__5823__auto__ = ns_for.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.truth_(temp__5823__auto__)){
var ns_ = temp__5823__auto__;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_);
} else {
return m;
}
} else {
return m;
}
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,(function (p1__544_SHARP_){
return com.trustblocks.concerto.metamodel.qualify_types.call(null,ns_for,p1__544_SHARP_);
}),x);
} else {
return x;

}
}
});
/**
 * TypeIdentifier -> fully qualified name. Stays unqualified when the name never
 *   resolved, in which case no declaration matches it and the caller stops there.
 */
com.trustblocks.concerto.metamodel.type_fqn = (function com$trustblocks$concerto$metamodel$type_fqn(node){
var temp__5825__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5825__auto__)){
var nm = temp__5825__auto__;
var temp__5823__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto__)){
var ns_ = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nm)].join('');
} else {
return nm;
}
} else {
return null;
}
});
/**
 * Model -> seq of {:fqn :namespace :name :declaration}.
 */
com.trustblocks.concerto.metamodel.declarations = (function com$trustblocks$concerto$metamodel$declarations(model){
var ns_ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(model);
var iter__5503__auto__ = (function com$trustblocks$concerto$metamodel$declarations_$_iter__545(s__546){
return (new cljs.core.LazySeq(null,(function (){
var s__546__$1 = s__546;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__546__$1);
if(temp__5825__auto__){
var s__546__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__546__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__546__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__548 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__547 = (0);
while(true){
if((i__547 < size__5502__auto__)){
var d = cljs.core._nth.call(null,c__5501__auto__,i__547);
cljs.core.chunk_append.call(null,b__548,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fqn","fqn",905101306),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),d], null));

var G__549 = (i__547 + (1));
i__547 = G__549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__548),com$trustblocks$concerto$metamodel$declarations_$_iter__545.call(null,cljs.core.chunk_rest.call(null,s__546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__548),null);
}
} else {
var d = cljs.core.first.call(null,s__546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fqn","fqn",905101306),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d))].join(''),new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),d], null),com$trustblocks$concerto$metamodel$declarations_$_iter__545.call(null,cljs.core.rest.call(null,s__546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(model));
});
/**
 * Build a lookup of every declaration across several models, so that
 *   inheritance chains crossing namespaces resolve.
 * 
 *   Every declaration is fully qualified on the way in, so the result is pure
 *   data: it can be pr-str'd, stored, diffed and read back without carrying the
 *   import context needed to interpret it.
 */
com.trustblocks.concerto.metamodel.registry = (function com$trustblocks$concerto$metamodel$registry(models){
return cljs.core.reduce.call(null,(function (acc,model){
com.trustblocks.concerto.metamodel.check_metamodel_version_BANG_.call(null,model);

var ns_for = com.trustblocks.concerto.metamodel.namespace_index.call(null,model);
return cljs.core.reduce.call(null,(function (acc__$1,p__550){
var map__551 = p__550;
var map__551__$1 = cljs.core.__destructure_map.call(null,map__551);
var fqn = cljs.core.get.call(null,map__551__$1,new cljs.core.Keyword(null,"fqn","fqn",905101306));
var declaration = cljs.core.get.call(null,map__551__$1,new cljs.core.Keyword(null,"declaration","declaration",-1819933768));
return cljs.core.assoc.call(null,acc__$1,fqn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"declaration","declaration",-1819933768),com.trustblocks.concerto.metamodel.qualify_types.call(null,ns_for,declaration),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(model)], null));
}),acc,com.trustblocks.concerto.metamodel.declarations.call(null,model));
}),cljs.core.PersistentArrayMap.EMPTY,models);
});
/**
 * FQN -> [fqn parent grandparent ...]. Concerto flattens a subclass into one
 *   tagged object, so anything validating an instance needs every ancestor's
 *   properties.
 */
com.trustblocks.concerto.metamodel.super_chain = (function com$trustblocks$concerto$metamodel$super_chain(reg,fqn){
var fqn__$1 = fqn;
var seen = cljs.core.PersistentVector.EMPTY;
var guard = (0);
while(true){
var map__553 = cljs.core.get.call(null,reg,fqn__$1);
var map__553__$1 = cljs.core.__destructure_map.call(null,map__553);
var declaration = cljs.core.get.call(null,map__553__$1,new cljs.core.Keyword(null,"declaration","declaration",-1819933768));
if((declaration == null)){
return seen;
} else {
if(((20) < guard)){
throw cljs.core.ex_info.call(null,"Cyclic supertype chain",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fqn","fqn",905101306),fqn__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], null));
} else {
var seen_SINGLEQUOTE_ = cljs.core.conj.call(null,seen,fqn__$1);
var temp__5823__auto__ = com.trustblocks.concerto.metamodel.type_fqn.call(null,new cljs.core.Keyword(null,"superType","superType",1013761557).cljs$core$IFn$_invoke$arity$1(declaration));
if(cljs.core.truth_(temp__5823__auto__)){
var super$ = temp__5823__auto__;
var G__554 = super$;
var G__555 = seen_SINGLEQUOTE_;
var G__556 = (guard + (1));
fqn__$1 = G__554;
seen = G__555;
guard = G__556;
continue;
} else {
return seen_SINGLEQUOTE_;
}

}
}
break;
}
});
/**
 * The `identified by` field for a declaration, inherited if not declared.
 */
com.trustblocks.concerto.metamodel.identity_field = (function com$trustblocks$concerto$metamodel$identity_field(reg,fqn){
return cljs.core.some.call(null,(function (f){
return cljs.core.get_in.call(null,reg,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"identified","identified",977175865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
}),com.trustblocks.concerto.metamodel.super_chain.call(null,reg,fqn));
});

//# sourceMappingURL=metamodel.js.map
