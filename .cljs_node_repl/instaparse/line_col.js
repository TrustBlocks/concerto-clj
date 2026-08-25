// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('instaparse.line_col');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.line_col.Cursor = (function (index,line,column,__meta,__extmap,__hash){
this.index = index;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k1777,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__1781 = k1777;
var G__1781__$1 = (((G__1781 instanceof cljs.core.Keyword))?G__1781.fqn:null);
switch (G__1781__$1) {
case "index":
return self__.index;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1777,else__5326__auto__);

}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__1782){
var vec__1783 = p__1782;
var k__5347__auto__ = cljs.core.nth.call(null,vec__1783,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__1783,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#instaparse.line-col.Cursor{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1776){
var self__ = this;
var G__1776__$1 = this;
return (new cljs.core.RecordIter((0),G__1776__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1036355234 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1778,other1779){
var self__ = this;
var this1778__$1 = this;
return (((!((other1779 == null)))) && ((((this1778__$1.constructor === other1779.constructor)) && (((cljs.core._EQ_.call(null,this1778__$1.index,other1779.index)) && (((cljs.core._EQ_.call(null,this1778__$1.line,other1779.line)) && (((cljs.core._EQ_.call(null,this1778__$1.column,other1779.column)) && (cljs.core._EQ_.call(null,this1778__$1.__extmap,other1779.__extmap)))))))))));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k1777){
var self__ = this;
var this__5330__auto____$1 = this;
var G__1786 = k1777;
var G__1786__$1 = (((G__1786 instanceof cljs.core.Keyword))?G__1786.fqn:null);
switch (G__1786__$1) {
case "index":
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k1777);

}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__1776){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__1787 = cljs.core.keyword_identical_QMARK_;
var expr__1788 = k__5332__auto__;
if(cljs.core.truth_(pred__1787.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__1788))){
return (new instaparse.line_col.Cursor(G__1776,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1787.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__1788))){
return (new instaparse.line_col.Cursor(self__.index,G__1776,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1787.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__1788))){
return (new instaparse.line_col.Cursor(self__.index,self__.line,G__1776,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__1776),null));
}
}
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__1776){
var self__ = this;
var this__5322__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,G__1776,self__.__extmap,self__.__hash));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(instaparse.line_col.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"int","int",-100885395,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(instaparse.line_col.Cursor.cljs$lang$type = true);

(instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"instaparse.line-col/Cursor",null,(1),null));
}));

(instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"instaparse.line-col/Cursor");
}));

/**
 * Positional factory function for instaparse.line-col/Cursor.
 */
instaparse.line_col.__GT_Cursor = (function instaparse$line_col$__GT_Cursor(index,line,column){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
});

/**
 * Factory function for instaparse.line-col/Cursor, taking a map of keywords to field values.
 */
instaparse.line_col.map__GT_Cursor = (function instaparse$line_col$map__GT_Cursor(G__1780){
var extmap__5365__auto__ = (function (){var G__1790 = cljs.core.dissoc.call(null,G__1780,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.record_QMARK_.call(null,G__1780)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1790);
} else {
return G__1790;
}
})();
return (new instaparse.line_col.Cursor(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__1780),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__1780),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__1780),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});

instaparse.line_col.advance_cursor = (function instaparse$line_col$advance_cursor(cursor,text,new_index){
var new_index__$1 = (new_index | (0));
if((cursor.index <= new_index__$1)){
} else {
throw (new Error("Assert failed: (<= (.-index cursor) new-index)"));
}

if(cljs.core._EQ_.call(null,cursor.index,new_index__$1)){
return cursor;
} else {
var index = cursor.index;
var line = cursor.line;
var column = cursor.column;
while(true){
if(cljs.core._EQ_.call(null,index,new_index__$1)){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
} else {
if(cljs.core._EQ_.call(null,text.charAt(index),"\n")){
var G__1793 = (index + (1));
var G__1794 = (line + (1));
var G__1795 = (1);
index = G__1793;
line = G__1794;
column = G__1795;
continue;
} else {
var G__1796 = (index + (1));
var G__1797 = line;
var G__1798 = (column + (1));
index = G__1796;
line = G__1797;
column = G__1798;
continue;

}
}
break;
}
}
});
/**
 * Given a string `text`, returns a function that takes an index into the string,
 * and returns a cursor, including line and column information.  For efficiency,
 * inputs must be fed into the function in increasing order.
 */
instaparse.line_col.make_line_col_fn = (function instaparse$line_col$make_line_col_fn(text,start_line,start_column){
var cursor_state = cljs.core.atom.call(null,(new instaparse.line_col.Cursor((0),start_line,start_column,null,null,null)));
return (function instaparse$line_col$make_line_col_fn_$_line_col(i){
cljs.core.swap_BANG_.call(null,cursor_state,instaparse.line_col.advance_cursor,text,i);

return cljs.core.deref.call(null,cursor_state);
});
});
instaparse.line_col.hiccup_add_line_col_spans = (function instaparse$line_col$hiccup_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta.call(null,parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__5023__auto__ = start_index;
if(cljs.core.truth_(and__5023__auto__)){
return end_index;
} else {
return and__5023__auto__;
}
})())){
var start_cursor = line_col_fn.call(null,start_index);
var children = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),cljs.core.next.call(null,parse_tree)));
var end_cursor = line_col_fn.call(null,end_index);
return cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parse_tree)], null),children),cljs.core.merge.call(null,cljs.core.meta.call(null,parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)));
} else {
return parse_tree;
}
});
instaparse.line_col.enlive_add_line_col_spans = (function instaparse$line_col$enlive_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta.call(null,parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__5023__auto__ = start_index;
if(cljs.core.truth_(and__5023__auto__)){
return end_index;
} else {
return and__5023__auto__;
}
})())){
var start_cursor = line_col_fn.call(null,start_index);
var children = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,instaparse.line_col.enlive_add_line_col_spans,line_col_fn),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(parse_tree)));
var end_cursor = line_col_fn.call(null,end_index);
return cljs.core.with_meta.call(null,cljs.core.assoc.call(null,parse_tree,new cljs.core.Keyword(null,"content","content",15833224),children),cljs.core.merge.call(null,cljs.core.meta.call(null,parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)));
} else {
return parse_tree;
}
});
/**
 * Given a string `text` and a `parse-tree` for text, return parse tree
 * with its metadata annotated with line and column info. The info can
 * then be found in the metadata map under the keywords:
 *  
 * :instaparse.gll/start-line, :instaparse.gll/start-column,
 * :instaparse.gll/end-line, :instaparse.gll/end-column
 * 
 * The start is inclusive, the end is exclusive. Lines and columns are 1-based.
 */
instaparse.line_col.add_line_col_spans = (function instaparse$line_col$add_line_col_spans(var_args){
var G__1800 = arguments.length;
switch (G__1800) {
case 2:
return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$2 = (function (text,parse_tree){
return instaparse.line_col.add_line_col_spans.call(null,text,(1),(1),parse_tree);
}));

(instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4 = (function (text,start_line,start_column,parse_tree){
var line_col_fn = instaparse.line_col.make_line_col_fn.call(null,text,start_line,start_column);
if((parse_tree == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.map_QMARK_.call(null,parse_tree);
if(and__5023__auto__){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree);
} else {
return and__5023__auto__;
}
})())){
return instaparse.line_col.enlive_add_line_col_spans.call(null,line_col_fn,parse_tree);
} else {
if(((cljs.core.vector_QMARK_.call(null,parse_tree)) && ((cljs.core.first.call(null,parse_tree) instanceof cljs.core.Keyword)))){
return instaparse.line_col.hiccup_add_line_col_spans.call(null,line_col_fn,parse_tree);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.sequential_QMARK_.call(null,parse_tree);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,parse_tree));
if(and__5023__auto____$1){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,parse_tree));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return instaparse.transform.map_preserving_meta.call(null,cljs.core.partial.call(null,instaparse.line_col.enlive_add_line_col_spans,line_col_fn),parse_tree);
} else {
if(((cljs.core.sequential_QMARK_.call(null,parse_tree)) && (((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,parse_tree))) && ((cljs.core.first.call(null,cljs.core.first.call(null,parse_tree)) instanceof cljs.core.Keyword)))))){
return instaparse.transform.map_preserving_meta.call(null,cljs.core.partial.call(null,instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((parse_tree instanceof instaparse.gll.Failure)){
return parse_tree;
} else {
return instaparse.util.throw_illegal_argument_exception.call(null,"Invalid parse-tree, not recognized as either enlive or hiccup format.");

}
}
}
}
}
}
}));

(instaparse.line_col.add_line_col_spans.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=line_col.js.map
