// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5755__auto__ = [];
var len__5749__auto___527 = arguments.length;
var i__5750__auto___528 = (0);
while(true){
if((i__5750__auto___528 < len__5749__auto___527)){
args__5755__auto__.push((arguments[i__5750__auto___528]));

var G__529 = (i__5750__auto___528 + (1));
i__5750__auto___528 = G__529;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.call(null,cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq526){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq526));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5755__auto__ = [];
var len__5749__auto___531 = arguments.length;
var i__5750__auto___532 = (0);
while(true){
if((i__5750__auto___532 < len__5749__auto___531)){
args__5755__auto__.push((arguments[i__5750__auto___532]));

var G__533 = (i__5750__auto___532 + (1));
i__5750__auto___532 = G__533;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.call(null,cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq530){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq530));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__534 = "";
var G__534__$1 = (cljs.core.truth_(re.ignoreCase)?[G__534,"i"].join(''):G__534);
var G__534__$2 = (cljs.core.truth_(re.multiline)?[G__534__$1,"m"].join(''):G__534__$1);
if(cljs.core.truth_(re.unicode)){
return [G__534__$2,"u"].join('');
} else {
return G__534__$2;
}
});

//# sourceMappingURL=util.js.map
