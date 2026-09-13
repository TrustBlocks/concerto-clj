// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__7625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7626__i = 0, G__7626__a = new Array(arguments.length -  0);
while (G__7626__i < G__7626__a.length) {G__7626__a[G__7626__i] = arguments[G__7626__i + 0]; ++G__7626__i;}
  args = new cljs.core.IndexedSeq(G__7626__a,0,null);
} 
return G__7625__delegate.call(this,args);};
G__7625.cljs$lang$maxFixedArity = 0;
G__7625.cljs$lang$applyTo = (function (arglist__7627){
var args = cljs.core.seq(arglist__7627);
return G__7625__delegate(args);
});
G__7625.cljs$core$IFn$_invoke$arity$variadic = G__7625__delegate;
return G__7625;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__7628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7629__i = 0, G__7629__a = new Array(arguments.length -  0);
while (G__7629__i < G__7629__a.length) {G__7629__a[G__7629__i] = arguments[G__7629__i + 0]; ++G__7629__i;}
  args = new cljs.core.IndexedSeq(G__7629__a,0,null);
} 
return G__7628__delegate.call(this,args);};
G__7628.cljs$lang$maxFixedArity = 0;
G__7628.cljs$lang$applyTo = (function (arglist__7630){
var args = cljs.core.seq(arglist__7630);
return G__7628__delegate(args);
});
G__7628.cljs$core$IFn$_invoke$arity$variadic = G__7628__delegate;
return G__7628;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
