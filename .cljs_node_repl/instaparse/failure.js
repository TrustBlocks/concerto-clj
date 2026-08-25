// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__697 = (line + (1));
var G__698 = (1);
var G__699 = (counter + (1));
line = G__697;
col = G__698;
counter = G__699;
continue;
} else {
var G__700 = line;
var G__701 = (col + (1));
var G__702 = (counter + (1));
line = G__700;
col = G__701;
counter = G__702;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.first.call(null,chars))){
var G__703 = cljs.core.next.call(null,chars);
var G__704 = (n__$1 - (1));
chars = G__703;
n__$1 = G__704;
continue;
} else {
var G__705 = cljs.core.next.call(null,chars);
var G__706 = n__$1;
chars = G__705;
n__$1 = G__706;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 * and accounts for horizontal tabs which might change
 * the alignment of the '^' to the error location.
 */
instaparse.failure.marker = (function instaparse$failure$marker(text,n){
if(cljs.core.truth_((function (){var and__5023__auto__ = text;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.integer_QMARK_.call(null,n);
} else {
return and__5023__auto__;
}
})())){
var marker_text = clojure.string.replace.call(null,text,/[^\s]/," ");
if((n <= (1))){
return "^";
} else {
return [cljs.core.subs.call(null,marker_text,(0),(n - (1))),"^"].join('');
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__707){
var map__708 = p__707;
var map__708__$1 = cljs.core.__destructure_map.call(null,map__708);
var line = cljs.core.get.call(null,map__708__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__708__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__708__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__708__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join(''));

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,text,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__709_717 = cljs.core.seq.call(null,full_reasons);
var chunk__710_718 = null;
var count__711_719 = (0);
var i__712_720 = (0);
while(true){
if((i__712_720 < count__711_719)){
var r_721 = cljs.core._nth.call(null,chunk__710_718,i__712_720);
instaparse.failure.print_reason.call(null,r_721);

cljs.core.println.call(null," (followed by end-of-string)");


var G__722 = seq__709_717;
var G__723 = chunk__710_718;
var G__724 = count__711_719;
var G__725 = (i__712_720 + (1));
seq__709_717 = G__722;
chunk__710_718 = G__723;
count__711_719 = G__724;
i__712_720 = G__725;
continue;
} else {
var temp__5825__auto___726 = cljs.core.seq.call(null,seq__709_717);
if(temp__5825__auto___726){
var seq__709_727__$1 = temp__5825__auto___726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__709_727__$1)){
var c__5548__auto___728 = cljs.core.chunk_first.call(null,seq__709_727__$1);
var G__729 = cljs.core.chunk_rest.call(null,seq__709_727__$1);
var G__730 = c__5548__auto___728;
var G__731 = cljs.core.count.call(null,c__5548__auto___728);
var G__732 = (0);
seq__709_717 = G__729;
chunk__710_718 = G__730;
count__711_719 = G__731;
i__712_720 = G__732;
continue;
} else {
var r_733 = cljs.core.first.call(null,seq__709_727__$1);
instaparse.failure.print_reason.call(null,r_733);

cljs.core.println.call(null," (followed by end-of-string)");


var G__734 = cljs.core.next.call(null,seq__709_727__$1);
var G__735 = null;
var G__736 = (0);
var G__737 = (0);
seq__709_717 = G__734;
chunk__710_718 = G__735;
count__711_719 = G__736;
i__712_720 = G__737;
continue;
}
} else {
}
}
break;
}

var seq__713 = cljs.core.seq.call(null,partial_reasons);
var chunk__714 = null;
var count__715 = (0);
var i__716 = (0);
while(true){
if((i__716 < count__715)){
var r = cljs.core._nth.call(null,chunk__714,i__716);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__738 = seq__713;
var G__739 = chunk__714;
var G__740 = count__715;
var G__741 = (i__716 + (1));
seq__713 = G__738;
chunk__714 = G__739;
count__715 = G__740;
i__716 = G__741;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__713);
if(temp__5825__auto__){
var seq__713__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__713__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__713__$1);
var G__742 = cljs.core.chunk_rest.call(null,seq__713__$1);
var G__743 = c__5548__auto__;
var G__744 = cljs.core.count.call(null,c__5548__auto__);
var G__745 = (0);
seq__713 = G__742;
chunk__714 = G__743;
count__715 = G__744;
i__716 = G__745;
continue;
} else {
var r = cljs.core.first.call(null,seq__713__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__746 = cljs.core.next.call(null,seq__713__$1);
var G__747 = null;
var G__748 = (0);
var G__749 = (0);
seq__713 = G__746;
chunk__714 = G__747;
count__715 = G__748;
i__716 = G__749;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map
