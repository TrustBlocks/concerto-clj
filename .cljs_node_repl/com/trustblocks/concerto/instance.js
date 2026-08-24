// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.trustblocks.concerto.instance');
goog.require('cljs.core');
goog.require('clojure.walk');
/**
 * Concerto JSON instance (string keys) -> neutral EDN. Recurses into nested
 *   concepts and arrays, which carry their own `$class`.
 */
com.trustblocks.concerto.instance.json__GT_edn = (function com$trustblocks$concerto$instance$json__GT_edn(instance){
return clojure.walk.keywordize_keys.call(null,instance);
});
/**
 * Neutral EDN instance -> Concerto JSON shape (string keys).
 */
com.trustblocks.concerto.instance.edn__GT_json = (function com$trustblocks$concerto$instance$edn__GT_json(instance){
return clojure.walk.stringify_keys.call(null,instance);
});
com.trustblocks.concerto.instance.class_of = (function com$trustblocks$concerto$instance$class_of(instance){
return new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(instance);
});
/**
 * Concerto's `$identifier` mirrors the `identified by` field, so prefer it and
 *   fall back to the declared identity field for models that predate it.
 */
com.trustblocks.concerto.instance.identifier_of = (function com$trustblocks$concerto$instance$identifier_of(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8691 = arguments.length;
var i__5750__auto___8692 = (0);
while(true){
if((i__5750__auto___8692 < len__5749__auto___8691)){
args__5755__auto__.push((arguments[i__5750__auto___8692]));

var G__8693 = (i__5750__auto___8692 + (1));
i__5750__auto___8692 = G__8693;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return com.trustblocks.concerto.instance.identifier_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(com.trustblocks.concerto.instance.identifier_of.cljs$core$IFn$_invoke$arity$variadic = (function (instance,p__8689){
var map__8690 = p__8689;
var map__8690__$1 = cljs.core.__destructure_map.call(null,map__8690);
var identity_field = cljs.core.get.call(null,map__8690__$1,new cljs.core.Keyword(null,"identity-field","identity-field",-1933775876));
var or__5025__auto__ = new cljs.core.Keyword(null,"$identifier","$identifier",948568846).cljs$core$IFn$_invoke$arity$1(instance);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(identity_field)){
return cljs.core.get.call(null,instance,cljs.core.keyword.call(null,identity_field));
} else {
return null;
}
}
}));

(com.trustblocks.concerto.instance.identifier_of.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.trustblocks.concerto.instance.identifier_of.cljs$lang$applyTo = (function (seq8687){
var G__8688 = cljs.core.first.call(null,seq8687);
var seq8687__$1 = cljs.core.next.call(null,seq8687);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8688,seq8687__$1);
}));


//# sourceMappingURL=instance.js.map
