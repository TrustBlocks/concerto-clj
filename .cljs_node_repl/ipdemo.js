// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('ipdemo');
goog.require('cljs.core');
goog.require('com.trustblocks.concerto.parser');
ipdemo._main = (function ipdemo$_main(){
var m = com.trustblocks.concerto.parser.parse_string.call(null,"namespace test@1.0.0\nconcept A { o String f regex=/^[A-Z]$/ }");
cljs.core.println.call(null,"  namespace   :",new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m));

cljs.core.println.call(null,"  declaration :",new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(m))));

cljs.core.println.call(null,"  property    :",new cljs.core.Keyword(null,"$class","$class",1168854512).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(m))))));

return cljs.core.println.call(null,"  validator   :",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(m)))))));
});
ipdemo._main.call(null);

//# sourceMappingURL=ipdemo.js.map
