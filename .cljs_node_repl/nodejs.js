// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__9178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9179__i = 0, G__9179__a = new Array(arguments.length -  0);
while (G__9179__i < G__9179__a.length) {G__9179__a[G__9179__i] = arguments[G__9179__i + 0]; ++G__9179__i;}
  args = new cljs.core.IndexedSeq(G__9179__a,0,null);
} 
return G__9178__delegate.call(this,args);};
G__9178.cljs$lang$maxFixedArity = 0;
G__9178.cljs$lang$applyTo = (function (arglist__9180){
var args = cljs.core.seq(arglist__9180);
return G__9178__delegate(args);
});
G__9178.cljs$core$IFn$_invoke$arity$variadic = G__9178__delegate;
return G__9178;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__9181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9182__i = 0, G__9182__a = new Array(arguments.length -  0);
while (G__9182__i < G__9182__a.length) {G__9182__a[G__9182__i] = arguments[G__9182__i + 0]; ++G__9182__i;}
  args = new cljs.core.IndexedSeq(G__9182__a,0,null);
} 
return G__9181__delegate.call(this,args);};
G__9181.cljs$lang$maxFixedArity = 0;
G__9181.cljs$lang$applyTo = (function (arglist__9183){
var args = cljs.core.seq(arglist__9183);
return G__9181__delegate(args);
});
G__9181.cljs$core$IFn$_invoke$arity$variadic = G__9181__delegate;
return G__9181;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
