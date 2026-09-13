// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.trustblocks.concerto.fixtures');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.trustblocks.concerto.metamodel');
/**
 * Fixture text. On the JVM from the classpath; on Node from the working
 *   directory, so the cljs tests must be run from the project root.
 */
com.trustblocks.concerto.fixtures.read_fixture = (function com$trustblocks$concerto$fixtures$read_fixture(path){
return require("fs").readFileSync(["test-resources/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),"utf8");
});
com.trustblocks.concerto.fixtures.parse_json = (function com$trustblocks$concerto$fixtures$parse_json(s){
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});
/**
 * Any file under test-resources/ as parsed JSON with string keys, addressed by
 *   its path relative to test-resources/. raw below is this with the fixtures/
 *   template layout baked in; other test namespaces needing a one-off resource
 *   call this directly instead of duplicating the JVM/cljs read split.
 */
com.trustblocks.concerto.fixtures.read_resource = (function com$trustblocks$concerto$fixtures$read_resource(path){
return com.trustblocks.concerto.fixtures.parse_json.call(null,com.trustblocks.concerto.fixtures.read_fixture.call(null,path));
});
/**
 * Template -> its model files. Listed explicitly rather than globbed so the
 *   tests load identically from a jar, a directory, or babashka.
 */
com.trustblocks.concerto.fixtures.models = new cljs.core.PersistentArrayMap(null, 2, ["acceptance-of-delivery",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["model.json","@models.accordproject.org.accordproject.contract@0.2.0.json","@models.accordproject.org.accordproject.runtime@0.2.0.json","@models.accordproject.org.time@0.3.0.json"], null),"promissory-note",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["model.json","@models.accordproject.org.accordproject.contract@0.2.0.json","@models.accordproject.org.accordproject.runtime@0.2.0.json","@models.accordproject.org.money@0.3.0.json"], null)], null);
/**
 * One fixture file as parsed JSON with string keys.
 */
com.trustblocks.concerto.fixtures.raw = (function com$trustblocks$concerto$fixtures$raw(template,file){
return com.trustblocks.concerto.fixtures.parse_json.call(null,com.trustblocks.concerto.fixtures.read_fixture.call(null,["fixtures/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')));
});
/**
 * One model file as metamodel EDN, locations stripped.
 */
com.trustblocks.concerto.fixtures.model = (function com$trustblocks$concerto$fixtures$model(template,file){
return com.trustblocks.concerto.metamodel.strip_locations.call(null,com.trustblocks.concerto.metamodel.json__GT_edn.call(null,com.trustblocks.concerto.fixtures.raw.call(null,template,file)));
});
com.trustblocks.concerto.fixtures.registry = (function com$trustblocks$concerto$fixtures$registry(template){
return com.trustblocks.concerto.metamodel.registry.call(null,cljs.core.map.call(null,(function (p1__559_SHARP_){
return com.trustblocks.concerto.fixtures.model.call(null,template,p1__559_SHARP_);
}),com.trustblocks.concerto.fixtures.models.call(null,template)));
});
com.trustblocks.concerto.fixtures.sample = (function com$trustblocks$concerto$fixtures$sample(template){
return com.trustblocks.concerto.fixtures.raw.call(null,template,"sample.json");
});
/**
 * The template's models with every metamodel `$class` retagged to `version`.
 * 
 *   Stands in for Accord shipping a new metamodel: the models are unchanged, only
 *   the version they are expressed in moves.
 */
com.trustblocks.concerto.fixtures.models_at_metamodel_version = (function com$trustblocks$concerto$fixtures$models_at_metamodel_version(template,version){
var iter__5503__auto__ = (function com$trustblocks$concerto$fixtures$models_at_metamodel_version_$_iter__560(s__561){
return (new cljs.core.LazySeq(null,(function (){
var s__561__$1 = s__561;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__561__$1);
if(temp__5825__auto__){
var s__561__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__561__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__561__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__563 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__562 = (0);
while(true){
if((i__562 < size__5502__auto__)){
var f = cljs.core._nth.call(null,c__5501__auto__,i__562);
cljs.core.chunk_append.call(null,b__563,com.trustblocks.concerto.metamodel.strip_locations.call(null,com.trustblocks.concerto.metamodel.json__GT_edn.call(null,com.trustblocks.concerto.fixtures.parse_json.call(null,clojure.string.replace.call(null,com.trustblocks.concerto.fixtures.read_fixture.call(null,["fixtures/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),"concerto.metamodel@1.0.0",["concerto.metamodel@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join(''))))));

var G__564 = (i__562 + (1));
i__562 = G__564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__563),com$trustblocks$concerto$fixtures$models_at_metamodel_version_$_iter__560.call(null,cljs.core.chunk_rest.call(null,s__561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__563),null);
}
} else {
var f = cljs.core.first.call(null,s__561__$2);
return cljs.core.cons.call(null,com.trustblocks.concerto.metamodel.strip_locations.call(null,com.trustblocks.concerto.metamodel.json__GT_edn.call(null,com.trustblocks.concerto.fixtures.parse_json.call(null,clojure.string.replace.call(null,com.trustblocks.concerto.fixtures.read_fixture.call(null,["fixtures/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),"concerto.metamodel@1.0.0",["concerto.metamodel@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join(''))))),com$trustblocks$concerto$fixtures$models_at_metamodel_version_$_iter__560.call(null,cljs.core.rest.call(null,s__561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,com.trustblocks.concerto.fixtures.models.call(null,template));
});
com.trustblocks.concerto.fixtures.acceptance_fqn = "org.accordproject.acceptanceofdelivery@0.1.0.TemplateModel";
com.trustblocks.concerto.fixtures.note_fqn = "org.accordproject.promissorynote@0.2.0.TemplateModel";

//# sourceMappingURL=fixtures.js.map
