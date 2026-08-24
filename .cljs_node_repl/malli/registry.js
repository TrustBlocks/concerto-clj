// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('malli.registry');
goog.require('cljs.core');

/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");

/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_758 = (function (this$,type){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,type);
} else {
var m__5372__auto__ = (malli.registry._schema["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,type);
} else {
throw cljs.core.missing_protocol.call(null,"Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_758.call(null,this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_759 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schemas[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.registry._schemas["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_759.call(null,this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry761 = (function (m,fm,meta762){
this.m = m;
this.fm = fm;
this.meta762 = meta762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_763,meta762__$1){
var self__ = this;
var _763__$1 = this;
return (new malli.registry.t_malli$registry761(self__.m,self__.fm,meta762__$1));
}));

(malli.registry.t_malli$registry761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_763){
var self__ = this;
var _763__$1 = this;
return self__.meta762;
}));

(malli.registry.t_malli$registry761.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry761.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry761.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta762","meta762",2073983327,null)], null);
}));

(malli.registry.t_malli$registry761.cljs$lang$type = true);

(malli.registry.t_malli$registry761.cljs$lang$ctorStr = "malli.registry/t_malli$registry761");

(malli.registry.t_malli$registry761.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry761");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry761.
 */
malli.registry.__GT_t_malli$registry761 = (function malli$registry$fast_registry_$___GT_t_malli$registry761(m__$1,fm__$1,meta762){
return (new malli.registry.t_malli$registry761(m__$1,fm__$1,meta762));
});

}

return (new malli.registry.t_malli$registry761(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry764 = (function (m,meta765){
this.m = m;
this.meta765 = meta765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_766,meta765__$1){
var self__ = this;
var _766__$1 = this;
return (new malli.registry.t_malli$registry764(self__.m,meta765__$1));
}));

(malli.registry.t_malli$registry764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_766){
var self__ = this;
var _766__$1 = this;
return self__.meta765;
}));

(malli.registry.t_malli$registry764.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry764.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.m.call(null,type);
}));

(malli.registry.t_malli$registry764.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta765","meta765",-653057344,null)], null);
}));

(malli.registry.t_malli$registry764.cljs$lang$type = true);

(malli.registry.t_malli$registry764.cljs$lang$ctorStr = "malli.registry/t_malli$registry764");

(malli.registry.t_malli$registry764.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry764");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry764.
 */
malli.registry.__GT_t_malli$registry764 = (function malli$registry$simple_registry_$___GT_t_malli$registry764(m__$1,meta765){
return (new malli.registry.t_malli$registry764(m__$1,meta765));
});

}

return (new malli.registry.t_malli$registry764(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_.call(null,_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_.call(null,_QMARK_registry)){
return malli.registry.simple_registry.call(null,_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_.call(null,malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.call(null,malli.registry.simple_registry.call(null,cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_.call(null,malli.registry.registry_STAR_,malli.registry.registry.call(null,_QMARK_registry));
} else {
throw cljs.core.ex_info.call(null,"can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry768 = (function (meta769){
this.meta769 = meta769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_770,meta769__$1){
var self__ = this;
var _770__$1 = this;
return (new malli.registry.t_malli$registry768(meta769__$1));
}));

(malli.registry.t_malli$registry768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_770){
var self__ = this;
var _770__$1 = this;
return self__.meta769;
}));

(malli.registry.t_malli$registry768.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry768.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema.call(null,cljs.core.deref.call(null,malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry768.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas.call(null,cljs.core.deref.call(null,malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta769","meta769",1757548352,null)], null);
}));

(malli.registry.t_malli$registry768.cljs$lang$type = true);

(malli.registry.t_malli$registry768.cljs$lang$ctorStr = "malli.registry/t_malli$registry768");

(malli.registry.t_malli$registry768.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry768");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry768.
 */
malli.registry.__GT_t_malli$registry768 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry768(meta769){
return (new malli.registry.t_malli$registry768(meta769));
});

}

return (new malli.registry.t_malli$registry768(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___776 = arguments.length;
var i__5750__auto___777 = (0);
while(true){
if((i__5750__auto___777 < len__5749__auto___776)){
args__5755__auto__.push((arguments[i__5750__auto___777]));

var G__778 = (i__5750__auto___777 + (1));
i__5750__auto___777 = G__778;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.call(null,malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry773 = (function (_QMARK_registries,registries,meta774){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta774 = meta774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_775,meta774__$1){
var self__ = this;
var _775__$1 = this;
return (new malli.registry.t_malli$registry773(self__._QMARK_registries,self__.registries,meta774__$1));
}));

(malli.registry.t_malli$registry773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_775){
var self__ = this;
var _775__$1 = this;
return self__.meta774;
}));

(malli.registry.t_malli$registry773.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry773.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some.call(null,(function (p1__771_SHARP_){
return malli.registry._schema.call(null,p1__771_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry773.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,malli.registry._schemas,cljs.core.reverse.call(null,self__.registries)));
}));

(malli.registry.t_malli$registry773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta774","meta774",88612458,null)], null);
}));

(malli.registry.t_malli$registry773.cljs$lang$type = true);

(malli.registry.t_malli$registry773.cljs$lang$ctorStr = "malli.registry/t_malli$registry773");

(malli.registry.t_malli$registry773.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry773");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry773.
 */
malli.registry.__GT_t_malli$registry773 = (function malli$registry$__GT_t_malli$registry773(_QMARK_registries__$1,registries__$1,meta774){
return (new malli.registry.t_malli$registry773(_QMARK_registries__$1,registries__$1,meta774));
});

}

return (new malli.registry.t_malli$registry773(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq772){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq772));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry779 = (function (db,meta780){
this.db = db;
this.meta780 = meta780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_781,meta780__$1){
var self__ = this;
var _781__$1 = this;
return (new malli.registry.t_malli$registry779(self__.db,meta780__$1));
}));

(malli.registry.t_malli$registry779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_781){
var self__ = this;
var _781__$1 = this;
return self__.meta780;
}));

(malli.registry.t_malli$registry779.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry779.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema.call(null,malli.registry.registry.call(null,cljs.core.deref.call(null,self__.db)),type);
}));

(malli.registry.t_malli$registry779.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas.call(null,malli.registry.registry.call(null,cljs.core.deref.call(null,self__.db)));
}));

(malli.registry.t_malli$registry779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta780","meta780",872108694,null)], null);
}));

(malli.registry.t_malli$registry779.cljs$lang$type = true);

(malli.registry.t_malli$registry779.cljs$lang$ctorStr = "malli.registry/t_malli$registry779");

(malli.registry.t_malli$registry779.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry779");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry779.
 */
malli.registry.__GT_t_malli$registry779 = (function malli$registry$mutable_registry_$___GT_t_malli$registry779(db__$1,meta780){
return (new malli.registry.t_malli$registry779(db__$1,meta780));
});

}

return (new malli.registry.t_malli$registry779(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.var_registry = (function malli$registry$var_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry782 = (function (meta783){
this.meta783 = meta783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_784,meta783__$1){
var self__ = this;
var _784__$1 = this;
return (new malli.registry.t_malli$registry782(meta783__$1));
}));

(malli.registry.t_malli$registry782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_784){
var self__ = this;
var _784__$1 = this;
return self__.meta783;
}));

(malli.registry.t_malli$registry782.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry782.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_.call(null,type)){
return cljs.core.deref.call(null,type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry782.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta783","meta783",-457533207,null)], null);
}));

(malli.registry.t_malli$registry782.cljs$lang$type = true);

(malli.registry.t_malli$registry782.cljs$lang$ctorStr = "malli.registry/t_malli$registry782");

(malli.registry.t_malli$registry782.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry782");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry782.
 */
malli.registry.__GT_t_malli$registry782 = (function malli$registry$var_registry_$___GT_t_malli$registry782(meta783){
return (new malli.registry.t_malli$registry782(meta783));
});

}

return (new malli.registry.t_malli$registry782(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry785 = (function (meta786){
this.meta786 = meta786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_787,meta786__$1){
var self__ = this;
var _787__$1 = this;
return (new malli.registry.t_malli$registry785(meta786__$1));
}));

(malli.registry.t_malli$registry785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_787){
var self__ = this;
var _787__$1 = this;
return self__.meta786;
}));

(malli.registry.t_malli$registry785.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry785.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema.call(null,malli.registry.registry.call(null,malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry785.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas.call(null,malli.registry.registry.call(null,malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta786","meta786",862620737,null)], null);
}));

(malli.registry.t_malli$registry785.cljs$lang$type = true);

(malli.registry.t_malli$registry785.cljs$lang$ctorStr = "malli.registry/t_malli$registry785");

(malli.registry.t_malli$registry785.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry785");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry785.
 */
malli.registry.__GT_t_malli$registry785 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry785(meta786){
return (new malli.registry.t_malli$registry785(meta786));
});

}

return (new malli.registry.t_malli$registry785(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.call(null,default_registry);
return cljs.core.reset_BANG_.call(null,registry_STAR_,malli.registry.composite_registry.call(null,default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry788 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta789){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta789 = meta789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_790,meta789__$1){
var self__ = this;
var _790__$1 = this;
return (new malli.registry.t_malli$registry788(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta789__$1));
}));

(malli.registry.t_malli$registry788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_790){
var self__ = this;
var _790__$1 = this;
return self__.meta789;
}));

(malli.registry.t_malli$registry788.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry788.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = cljs.core.deref.call(null,self__.cache_STAR_).call(null,name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = self__.provider.call(null,name,cljs.core.deref.call(null,self__.registry_STAR_));
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.call(null,self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry788.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.cache_STAR_);
}));

(malli.registry.t_malli$registry788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta789","meta789",923935088,null)], null);
}));

(malli.registry.t_malli$registry788.cljs$lang$type = true);

(malli.registry.t_malli$registry788.cljs$lang$ctorStr = "malli.registry/t_malli$registry788");

(malli.registry.t_malli$registry788.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.registry/t_malli$registry788");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry788.
 */
malli.registry.__GT_t_malli$registry788 = (function malli$registry$lazy_registry_$___GT_t_malli$registry788(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta789){
return (new malli.registry.t_malli$registry788(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta789));
});

}

return (new malli.registry.t_malli$registry788(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema.call(null,registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas.call(null,registry);
});

//# sourceMappingURL=registry.js.map
