// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('borkdude.dynaload');
goog.require('cljs.core');
var ret__5804__auto___849 = borkdude.dynaload.if_bb = (function borkdude$dynaload$if_bb(_AMPERSAND_form,_AMPERSAND_env,then,else$){
return else$;

});
(borkdude.dynaload.if_bb.cljs$lang$macro = true);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function() {
var G__852 = null;
var G__852__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null);
});
var G__852__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a);
});
var G__852__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b);
});
var G__852__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c);
});
var G__852__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d);
});
var G__852__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e);
});
var G__852__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1);
});
var G__852__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g);
});
var G__852__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h);
});
var G__852__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__852__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__852__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__852__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__852__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__852__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__852__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__852__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__852__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__852__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__852__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__852__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__852__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.call(null,cljs.core.deref.call(null,this$),a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__852 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__852__1.call(this,self__);
case 2:
return G__852__2.call(this,self__,a);
case 3:
return G__852__3.call(this,self__,a,b);
case 4:
return G__852__4.call(this,self__,a,b,c);
case 5:
return G__852__5.call(this,self__,a,b,c,d);
case 6:
return G__852__6.call(this,self__,a,b,c,d,e);
case 7:
return G__852__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__852__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__852__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__852__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__852__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__852__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__852__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__852__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__852__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__852__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__852__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__852__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__852__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__852__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__852__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__852__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__852.cljs$core$IFn$_invoke$arity$1 = G__852__1;
G__852.cljs$core$IFn$_invoke$arity$2 = G__852__2;
G__852.cljs$core$IFn$_invoke$arity$3 = G__852__3;
G__852.cljs$core$IFn$_invoke$arity$4 = G__852__4;
G__852.cljs$core$IFn$_invoke$arity$5 = G__852__5;
G__852.cljs$core$IFn$_invoke$arity$6 = G__852__6;
G__852.cljs$core$IFn$_invoke$arity$7 = G__852__7;
G__852.cljs$core$IFn$_invoke$arity$8 = G__852__8;
G__852.cljs$core$IFn$_invoke$arity$9 = G__852__9;
G__852.cljs$core$IFn$_invoke$arity$10 = G__852__10;
G__852.cljs$core$IFn$_invoke$arity$11 = G__852__11;
G__852.cljs$core$IFn$_invoke$arity$12 = G__852__12;
G__852.cljs$core$IFn$_invoke$arity$13 = G__852__13;
G__852.cljs$core$IFn$_invoke$arity$14 = G__852__14;
G__852.cljs$core$IFn$_invoke$arity$15 = G__852__15;
G__852.cljs$core$IFn$_invoke$arity$16 = G__852__16;
G__852.cljs$core$IFn$_invoke$arity$17 = G__852__17;
G__852.cljs$core$IFn$_invoke$arity$18 = G__852__18;
G__852.cljs$core$IFn$_invoke$arity$19 = G__852__19;
G__852.cljs$core$IFn$_invoke$arity$20 = G__852__20;
G__852.cljs$core$IFn$_invoke$arity$21 = G__852__21;
G__852.cljs$core$IFn$_invoke$arity$22 = G__852__22;
return G__852;
})()
);

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args850){
var self__ = this;
var self____$1 = this;
var args__5240__auto__ = cljs.core.aclone.call(null,args850);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5240__auto__.length > (20)))?(function (){var G__851 = args__5240__auto__.slice((0),(20));
G__851.push(args__5240__auto__.slice((20)));

return G__851;
})():args__5240__auto__)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.call(null,cljs.core.deref.call(null,this$),a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});

var ret__5804__auto___858 = (function (){
borkdude.dynaload._QMARK_ = (function borkdude$dynaload$_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___859 = arguments.length;
var i__5750__auto___860 = (0);
while(true){
if((i__5750__auto___860 < len__5749__auto___859)){
args__5755__auto__.push((arguments[i__5750__auto___860]));

var G__861 = (i__5750__auto___860 + (1));
i__5750__auto___860 = G__861;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return borkdude.dynaload._QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(borkdude.dynaload._QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__856){
var map__857 = p__856;
var map__857__$1 = cljs.core.__destructure_map.call(null,map__857);
var cljs__$1 = cljs.core.get.call(null,map__857__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
var clj = cljs.core.get.call(null,map__857__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
if(cljs.core.contains_QMARK_.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"&env","&env",-919163083,null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs__$1,null,(1),null)),(new cljs.core.List(null,clj,null,(1),null)))));
} else {
return cljs__$1;

}
}));

(borkdude.dynaload._QMARK_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(borkdude.dynaload._QMARK_.cljs$lang$applyTo = (function (seq853){
var G__854 = cljs.core.first.call(null,seq853);
var seq853__$1 = cljs.core.next.call(null,seq853);
var G__855 = cljs.core.first.call(null,seq853__$1);
var seq853__$2 = cljs.core.next.call(null,seq853__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__854,G__855,seq853__$2);
}));

return null;
})()
;
(borkdude.dynaload._QMARK_.cljs$lang$macro = true);

var ret__5804__auto___874 = (function (){
borkdude.dynaload.dynaload = (function borkdude$dynaload$dynaload(var_args){
var G__869 = arguments.length;
switch (G__869) {
case 3:
return borkdude.dynaload.dynaload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return borkdude.dynaload.dynaload.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(borkdude.dynaload.dynaload.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("borkdude.dynaload","dynaload","borkdude.dynaload/dynaload",-1199857489,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(borkdude.dynaload.dynaload.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,p__870,opts){
var vec__871 = p__870;
var _quote = cljs.core.nth.call(null,vec__871,(0),null);
var s = cljs.core.nth.call(null,vec__871,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("borkdude.dynaload","->LazyVar","borkdude.dynaload/->LazyVar",687506314,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("borkdude.dynaload","?","borkdude.dynaload/?",720647962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"clj","clj",-660495428),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__866__auto__","v__866__auto__",912851696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("borkdude.dynaload","resolve*","borkdude.dynaload/resolve*",-886230185,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__866__auto__","v__866__auto__",912851696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__867__auto__","e__867__auto__",1633518870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","find","cljs.core/find",656179788,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","val","cljs.core/val",833354142,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__867__auto__","e__867__auto__",1633518870,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Var ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," does not exist, ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," never required",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,s,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__867__auto__","e__867__auto__",1633518870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","find","cljs.core/find",656179788,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","val","cljs.core/val",833354142,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__867__auto__","e__867__auto__",1633518870,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Var ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," does not exist, ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," never required",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(borkdude.dynaload.dynaload.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(borkdude.dynaload.dynaload.cljs$lang$macro = true);


//# sourceMappingURL=dynaload.js.map
