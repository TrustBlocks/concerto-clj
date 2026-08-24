// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('malli.error');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('malli.core');
goog.require('malli.util');

malli.error._pr_str = (function malli$error$_pr_str(v){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
});
malli.error._pred_min_max_error_fn = (function malli$error$_pred_min_max_error_fn(p__6705){
var map__6706 = p__6705;
var map__6706__$1 = cljs.core.__destructure_map.call(null,map__6706);
var pred = cljs.core.get.call(null,map__6706__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var message = cljs.core.get.call(null,map__6706__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return (function (p__6707,_){
var map__6708 = p__6707;
var map__6708__$1 = cljs.core.__destructure_map.call(null,map__6708);
var schema = cljs.core.get.call(null,map__6708__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6708__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.call(null,map__6708__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
var map__6709 = malli.core.properties.call(null,schema);
var map__6709__$1 = cljs.core.__destructure_map.call(null,map__6709);
var min = cljs.core.get.call(null,map__6709__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__6709__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.not.call(null,pred.call(null,value))){
return message;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.call(null,min,max);
} else {
return and__5023__auto__;
}
})())){
return ["should be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)].join('');
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return (cljs.core.truth_(negated)?cljs.core._GT__EQ_:cljs.core._LT_).call(null,value,min);
} else {
return and__5023__auto__;
}
})())){
return ["should be at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)].join('');
} else {
if(cljs.core.truth_(max)){
return ["should be at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)].join('');
} else {
if(cljs.core.truth_(negated)){
return message;
} else {
return null;
}
}
}
}
}
});
});
var prefix_6717 = ["-en-humanize-negation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join('');
malli.error._en_humanize_negation = (function malli$error$_en_humanize_negation(p__6713,options){
var map__6714 = p__6713;
var map__6714__$1 = cljs.core.__destructure_map.call(null,map__6714);
var error = map__6714__$1;
var schema = cljs.core.get.call(null,map__6714__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var negated = cljs.core.get.call(null,map__6714__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return negated.call(null,malli.error.error_message.call(null,cljs.core.dissoc.call(null,error,new cljs.core.Keyword(null,"negated","negated",-273117033)),options));
} else {
var remove_prefix = (function (p1__6710_SHARP_){
return clojure.string.replace_first.call(null,p1__6710_SHARP_,prefix_6717,"");
});
var negated_QMARK_ = (function (p1__6711_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__6711_SHARP_,prefix_6717);
});
var schema__$1 = schema;
while(true){
var or__5025__auto__ = (function (){var temp__5829__auto__ = malli.error.error_message.call(null,cljs.core.assoc.call(null,error,new cljs.core.Keyword(null,"negated","negated",-273117033),((function (schema__$1,remove_prefix,negated_QMARK_,map__6714,map__6714__$1,error,schema,negated,prefix_6717){
return (function (p1__6712_SHARP_){
var G__6716 = p1__6712_SHARP_;
if((G__6716 == null)){
return null;
} else {
return [prefix_6717,cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6716)].join('');
}
});})(schema__$1,remove_prefix,negated_QMARK_,map__6714,map__6714__$1,error,schema,negated,prefix_6717))
),options);
if((temp__5829__auto__ == null)){
return null;
} else {
var s = temp__5829__auto__;
if(negated_QMARK_.call(null,s)){
return remove_prefix.call(null,s);
} else {
var or__5025__auto__ = ((((typeof s === 'string') && (clojure.string.starts_with_QMARK_.call(null,s,"should not "))))?clojure.string.replace_first.call(null,s,"should not","should"):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(((typeof s === 'string') && (clojure.string.starts_with_QMARK_.call(null,s,"should ")))){
return clojure.string.replace_first.call(null,s,"should","should not");
} else {
return null;
}
}
}
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var dschema = malli.core.deref.call(null,schema__$1);
if((schema__$1 === dschema)){
return null;
} else {
var G__6718 = dschema;
schema__$1 = G__6718;
continue;
}
}
break;
}
}
});
malli.error._forward_negation = (function malli$error$_forward_negation(_QMARK_schema,p__6719,options){
var map__6720 = p__6719;
var map__6720__$1 = cljs.core.__destructure_map.call(null,map__6720);
var error = map__6720__$1;
var negated = cljs.core.get.call(null,map__6720__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
var schema = malli.core.schema.call(null,_QMARK_schema,options);
return negated.call(null,malli.error.error_message.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,error,new cljs.core.Keyword(null,"negated","negated",-273117033)),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema),options));
});
malli.error.default_errors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Symbol(null,"char?","char?",-1072221244,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Keyword("malli.error","misspelled-value","malli.error/misspelled-value",-1135752848),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("malli.core","limits","malli.core/limits",-1343466863),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666),new cljs.core.Keyword("malli.core","tuple-size","malli.core/tuple-size",-1004468077),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword("malli.core","end-of-input","malli.core/end-of-input",-491237771),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword("malli.core","input-remaining","malli.core/input-remaining",372310422),new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Keyword("malli.error","misspelled-key","malli.error/misspelled-key",616486174),new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"disallowed key"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6721,_){
var map__6722 = p__6721;
var map__6722__$1 = cljs.core.__destructure_map.call(null,map__6722);
var schema = cljs.core.get.call(null,map__6722__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return ["should be ",((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,malli.core.children.call(null,schema))))?malli.error._pr_str.call(null,cljs.core.first.call(null,malli.core.children.call(null,schema))):["either ",clojure.string.join.call(null,", ",cljs.core.map.call(null,malli.error._pr_str,cljs.core.butlast.call(null,malli.core.children.call(null,schema))))," or ",malli.error._pr_str.call(null,cljs.core.last.call(null,malli.core.children.call(null,schema)))].join(''))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uri"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6723,options){
var map__6724 = p__6723;
var map__6724__$1 = cljs.core.__destructure_map.call(null,map__6724);
var error = map__6724__$1;
var schema = cljs.core.get.call(null,map__6724__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6724__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.call(null,map__6724__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),cljs.core.first.call(null,malli.core.children.call(null,schema))], null),error,options);
} else {
if(typeof value === 'number'){
return ["should be at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,malli.core.children.call(null,schema)))].join('');
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.double_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be a double"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uuid"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an inst"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6725,_){
var map__6726 = p__6725;
var map__6726__$1 = cljs.core.__destructure_map.call(null,map__6726);
var schema = cljs.core.get.call(null,map__6726__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return ["should not be ",malli.error._pr_str.call(null,cljs.core.first.call(null,malli.core.children.call(null,schema)))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be nil"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be an integer"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6727,options){
var map__6728 = p__6727;
var map__6728__$1 = cljs.core.__destructure_map.call(null,map__6728);
var error = map__6728__$1;
var schema = cljs.core.get.call(null,map__6728__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6728__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.call(null,map__6728__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<=","<=",-395636158),cljs.core.first.call(null,malli.core.children.call(null,schema))], null),error,options);
} else {
if(typeof value === 'number'){
return ["should be larger than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,malli.core.children.call(null,schema)))].join('');
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a float"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an ifn"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a map"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a vector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be any"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.float_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be a float"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be false"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be associative"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should match regex"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6729,options){
var map__6730 = p__6729;
var map__6730__$1 = cljs.core.__destructure_map.call(null,map__6730);
var error = map__6730__$1;
var schema = cljs.core.get.call(null,map__6730__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return malli.error._en_humanize_negation.call(null,cljs.core.assoc.call(null,error,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.first.call(null,malli.core.children.call(null,schema))),options);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a char"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a negative int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6731,_){
var map__6732 = p__6731;
var map__6732__$1 = cljs.core.__destructure_map.call(null,map__6732);
var schema = cljs.core.get.call(null,map__6732__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6732__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.call(null,map__6732__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
var map__6733 = malli.core.properties.call(null,schema);
var map__6733__$1 = cljs.core.__destructure_map.call(null,map__6733);
var min = cljs.core.get.call(null,map__6733__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__6733__$1,new cljs.core.Keyword(null,"max","max",61366548));
if((!(typeof value === 'string'))){
return "should be a string";
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.call(null,min,max);
} else {
return and__5023__auto__;
}
})())){
return ["should be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," character",((cljs.core.not_EQ_.call(null,(1),min))?"s":null)].join('');
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return (cljs.core.truth_(negated)?cljs.core._GT__EQ_:cljs.core._LT_).call(null,cljs.core.count.call(null,value),min);
} else {
return and__5023__auto__;
}
})())){
return ["should be at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," character",((cljs.core.not_EQ_.call(null,(1),min))?"s":null)].join('');
} else {
if(cljs.core.truth_(max)){
return ["should be at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)," character",((cljs.core.not_EQ_.call(null,(1),max))?"s":null)].join('');
} else {
if(cljs.core.truth_(negated)){
return "should be a string";
} else {
return null;
}
}
}
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6734,options){
var map__6735 = p__6734;
var map__6735__$1 = cljs.core.__destructure_map.call(null,map__6735);
var error = map__6735__$1;
var schema = cljs.core.get.call(null,map__6735__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6735__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.call(null,map__6735__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),cljs.core.first.call(null,malli.core.children.call(null,schema))], null),error,options);
} else {
if(typeof value === 'number'){
return ["should be at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,malli.core.children.call(null,schema)))].join('');
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a list"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6736,_){
var map__6737 = p__6736;
var map__6737__$1 = cljs.core.__destructure_map.call(null,map__6737);
var likely_misspelling_of = cljs.core.get.call(null,map__6737__$1,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033));
return ["did you mean ",clojure.string.join.call(null," or ",cljs.core.map.call(null,cljs.core.comp.call(null,malli.error._pr_str,cljs.core.last),likely_misspelling_of))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a coll"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a valid function"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6738,_){
var map__6739 = p__6738;
var map__6739__$1 = cljs.core.__destructure_map.call(null,map__6739);
var schema = cljs.core.get.call(null,map__6739__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6739__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__6740 = malli.core.properties.call(null,schema);
var map__6740__$1 = cljs.core.__destructure_map.call(null,map__6740);
var min = cljs.core.get.call(null,map__6740__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__6740__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.call(null,min,max);
} else {
return and__5023__auto__;
}
})())){
return ["should have ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," elements"].join('');
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return (cljs.core.count.call(null,value) < min);
} else {
return and__5023__auto__;
}
})())){
return ["should have at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," elements"].join('');
} else {
if(cljs.core.truth_(max)){
return ["should have at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)," elements"].join('');
} else {
return null;
}
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be empty"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an integer"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"missing required key"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6741,_){
var map__6742 = p__6741;
var map__6742__$1 = cljs.core.__destructure_map.call(null,map__6742);
var schema = cljs.core.get.call(null,map__6742__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6742__$1,new cljs.core.Keyword(null,"value","value",305978217));
var size = cljs.core.count.call(null,malli.core.children.call(null,schema));
return ["invalid tuple size ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,value)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be zero"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be nil"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a string"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"end of input"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"input remaining"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a seq"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a non-negative int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a set"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be some"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be positive"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a boolean"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a fn"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be sequential"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uuid"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"unknown error"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a number"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid dispatch value"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a double"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be seqable"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6743,_){
var map__6744 = p__6743;
var map__6744__$1 = cljs.core.__destructure_map.call(null,map__6744);
var schema = cljs.core.get.call(null,map__6744__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return ["should be ",malli.error._pr_str.call(null,cljs.core.first.call(null,malli.core.children.call(null,schema)))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a boolean"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6745,options){
var map__6746 = p__6745;
var map__6746__$1 = cljs.core.__destructure_map.call(null,map__6746);
var error = map__6746__$1;
var schema = cljs.core.get.call(null,map__6746__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.call(null,map__6746__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.call(null,map__6746__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),cljs.core.first.call(null,malli.core.children.call(null,schema))], null),error,options);
} else {
if(typeof value === 'number'){
return ["should be smaller than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,malli.core.children.call(null,schema)))].join('');
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be negative"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__6747,_){
var map__6748 = p__6747;
var map__6748__$1 = cljs.core.__destructure_map.call(null,map__6748);
var likely_misspelling_of = cljs.core.get.call(null,map__6748__$1,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033));
return ["should be spelled ",clojure.string.join.call(null," or ",cljs.core.map.call(null,cljs.core.comp.call(null,malli.error._pr_str,cljs.core.last),likely_misspelling_of))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid type"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a positive int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be any"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be indexed"], null)], null)]);
malli.error._maybe_localized = (function malli$error$_maybe_localized(x,locale){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.get.call(null,x,locale);
} else {
return x;
}
});
malli.error._message = (function malli$error$_message(error,props,locale,options){
var options__$1 = (function (){var or__5025__auto__ = options;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core.options.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(error));
}
})();
if(cljs.core.truth_(props)){
var or__5025__auto__ = (function (){var temp__5825__auto__ = malli.error._maybe_localized.call(null,new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(props),locale);
if(cljs.core.truth_(temp__5825__auto__)){
var fn = temp__5825__auto__;
return malli.core.eval.call(null,fn,options__$1).call(null,error,options__$1);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.error._maybe_localized.call(null,new cljs.core.Keyword("error","message","error/message",-502809098).cljs$core$IFn$_invoke$arity$1(props),locale);
}
} else {
return null;
}
});
malli.error._error = (function malli$error$_error(e){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.error","error","malli.error/error",-522553785),true], null));
});
malli.error._error_QMARK_ = (function malli$error$_error_QMARK_(x){
return new cljs.core.Keyword("malli.error","error","malli.error/error",-522553785).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
});
malli.error._get = (function malli$error$_get(x,k){
if(((cljs.core.set_QMARK_.call(null,x)) || (cljs.core.associative_QMARK_.call(null,x)))){
return cljs.core.get.call(null,x,k);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.get.call(null,cljs.core.vec.call(null,x),k);
} else {
return null;
}
}
});
malli.error._concat = (function malli$error$_concat(x,y){
var G__6749 = cljs.core.concat.call(null,x,y);
if((((!((x == null)))) && ((!(cljs.core.seq_QMARK_.call(null,x)))))){
return cljs.core.into.call(null,cljs.core.empty.call(null,x),G__6749);
} else {
return G__6749;
}
});
malli.error._fill = (function malli$error$_fill(x,i,fill){
return malli.error._concat.call(null,x,cljs.core.repeat.call(null,(i - cljs.core.count.call(null,x)),fill));
});
malli.error._push = (function malli$error$_push(x,k,v,fill){
var x_SINGLEQUOTE_ = (function (){var G__6750 = x;
if(((cljs.core.int_QMARK_.call(null,k)) && (((cljs.core.sequential_QMARK_.call(null,x)) && ((k > cljs.core.count.call(null,x))))))){
return malli.error._fill.call(null,G__6750,k,fill);
} else {
return G__6750;
}
})();
if((((x_SINGLEQUOTE_ == null)) || (cljs.core.associative_QMARK_.call(null,x_SINGLEQUOTE_)))){
return cljs.core.assoc.call(null,x_SINGLEQUOTE_,k,v);
} else {
if(cljs.core.set_QMARK_.call(null,x_SINGLEQUOTE_)){
return cljs.core.conj.call(null,x_SINGLEQUOTE_,v);
} else {
return cljs.core.apply.call(null,cljs.core.list,cljs.core.assoc.call(null,cljs.core.vec.call(null,x_SINGLEQUOTE_),k,v));

}
}
});
malli.error._push_in = (function malli$error$_push_in(a,v,p__6751,e){
var vec__6752 = p__6751;
var seq__6753 = cljs.core.seq.call(null,vec__6752);
var first__6754 = cljs.core.first.call(null,seq__6753);
var seq__6753__$1 = cljs.core.next.call(null,seq__6753);
var p = first__6754;
var ps = seq__6753__$1;
var v_SINGLEQUOTE_ = malli.error._get.call(null,v,p);
var a_SINGLEQUOTE_ = (function (){var or__5025__auto__ = a;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.record_QMARK_.call(null,v)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.empty.call(null,v);

}
}
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = p;
if(cljs.core.truth_(and__5023__auto__)){
return malli.error._error_QMARK_.call(null,a_SINGLEQUOTE_);
} else {
return and__5023__auto__;
}
})())){
return a;
} else {
if(cljs.core.truth_(p)){
return malli.error._push.call(null,a_SINGLEQUOTE_,p,malli.error._push_in.call(null,malli.error._get.call(null,a_SINGLEQUOTE_,p),v_SINGLEQUOTE_,ps,e),null);
} else {
if(cljs.core.map_QMARK_.call(null,a)){
return malli.error._push_in.call(null,a_SINGLEQUOTE_,v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","error","malli/error",-1152359159)], null),e);
} else {
if(cljs.core.truth_(malli.error._error_QMARK_.call(null,a_SINGLEQUOTE_))){
return cljs.core.conj.call(null,a_SINGLEQUOTE_,e);
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.not_empty.call(null,a_SINGLEQUOTE_))){
return a_SINGLEQUOTE_;
} else {
return malli.error._error.call(null,e);

}
}
}
}
}
});
malli.error._path = (function malli$error$_path(p__6755,p__6756){
var map__6757 = p__6755;
var map__6757__$1 = cljs.core.__destructure_map.call(null,map__6757);
var schema = cljs.core.get.call(null,map__6757__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__6758 = p__6756;
var map__6758__$1 = cljs.core.__destructure_map.call(null,map__6758);
var locale = cljs.core.get.call(null,map__6758__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var default_locale = cljs.core.get.call(null,map__6758__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073));
var properties = malli.core.properties.call(null,schema);
var or__5025__auto__ = malli.error._maybe_localized.call(null,new cljs.core.Keyword("error","path","error/path",-419192760).cljs$core$IFn$_invoke$arity$1(properties),locale);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.error._maybe_localized.call(null,new cljs.core.Keyword("error","path","error/path",-419192760).cljs$core$IFn$_invoke$arity$1(properties),default_locale);
}
});
malli.error._replace_in = (function malli$error$_replace_in(a,v,p__6759,e,fill){
var vec__6760 = p__6759;
var seq__6761 = cljs.core.seq.call(null,vec__6760);
var first__6762 = cljs.core.first.call(null,seq__6761);
var seq__6761__$1 = cljs.core.next.call(null,seq__6761);
var p = first__6762;
var ps = seq__6761__$1;
var a_SINGLEQUOTE_ = (function (){var or__5025__auto__ = a;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.record_QMARK_.call(null,v)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.empty.call(null,v);
}
}
})();
if(cljs.core.truth_(p)){
return malli.error._push.call(null,(function (){var G__6763 = a_SINGLEQUOTE_;
if(cljs.core.set_QMARK_.call(null,a_SINGLEQUOTE_)){
return cljs.core.disj.call(null,G__6763,p);
} else {
return G__6763;
}
})(),p,malli.error._replace_in.call(null,malli.error._get.call(null,a_SINGLEQUOTE_,p),malli.error._get.call(null,v,p),ps,e,fill),fill);
} else {
return e;
}
});
malli.error._error_value = (function malli$error$_error_value(p__6765,options){
var map__6766 = p__6765;
var map__6766__$1 = cljs.core.__destructure_map.call(null,map__6766);
var errors = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mask = new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332).cljs$core$IFn$_invoke$arity$1(options);
var accept = new cljs.core.Keyword("malli.error","accept-error","malli.error/accept-error",-1477373739).cljs$core$IFn$_invoke$arity$2(options,(function (p1__6764_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6764_SHARP_),new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666));
}));
var wrap = new cljs.core.Keyword("malli.error","wrap-error","malli.error/wrap-error",173149242).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"value","value",305978217));
var acc = (cljs.core.truth_(new cljs.core.Keyword("malli.error","keep-valid-values","malli.error/keep-valid-values",691578138).cljs$core$IFn$_invoke$arity$1(options))?value:null);
return cljs.core.reduce.call(null,(function (acc__$1,error){
var G__6767 = acc__$1;
if(cljs.core.truth_(accept.call(null,error))){
return malli.error._replace_in.call(null,G__6767,value,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error),wrap.call(null,error),mask);
} else {
return G__6767;
}
}),acc,errors);
});
malli.error._masked = (function malli$error$_masked(mask,x,y){
var nested = ((cljs.core.map_QMARK_.call(null,x)) && (((cljs.core.map_QMARK_.call(null,y)) || ((y == null)))));
if(nested){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var e = cljs.core.find.call(null,y,k);
return cljs.core.assoc.call(null,acc,k,(cljs.core.truth_(e)?malli.error._masked.call(null,mask,v,cljs.core.val.call(null,e)):mask));
}),y,x);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
var G__6768 = y;
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y))){
return cljs.core.conj.call(null,G__6768,mask);
} else {
return G__6768;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return malli.error._fill.call(null,y,cljs.core.count.call(null,x),mask);
} else {
return y;

}
}
}
});
malli.error._length__GT_threshold = (function malli$error$_length__GT_threshold(len){
var pred__6771 = (function (p1__6770_SHARP_,p2__6769_SHARP_){
return (p2__6769_SHARP_ <= p1__6770_SHARP_);
});
var expr__6772 = len;
if(pred__6771.call(null,(2),expr__6772)){
return (0);
} else {
if(pred__6771.call(null,(5),expr__6772)){
return (1);
} else {
if(pred__6771.call(null,(6),expr__6772)){
return (2);
} else {
if(pred__6771.call(null,(11),expr__6772)){
return (3);
} else {
if(pred__6771.call(null,(20),expr__6772)){
return (4);
} else {
return ((0.2 * len) | (0));
}
}
}
}
}
});
malli.error._next_row = (function malli$error$_next_row(previous,current,other_seq){
return cljs.core.reduce.call(null,(function (row,p__6774){
var vec__6775 = p__6774;
var diagonal = cljs.core.nth.call(null,vec__6775,(0),null);
var above = cljs.core.nth.call(null,vec__6775,(1),null);
var other = cljs.core.nth.call(null,vec__6775,(2),null);
var update_val = ((cljs.core._EQ_.call(null,other,current))?diagonal:((function (){var x__5113__auto__ = (function (){var x__5113__auto__ = diagonal;
var y__5114__auto__ = above;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = cljs.core.peek.call(null,row);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})() + (1)));
return cljs.core.conj.call(null,row,update_val);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,previous) + (1))], null),cljs.core.map.call(null,cljs.core.vector,previous,cljs.core.next.call(null,previous),other_seq));
});
malli.error._levenshtein = (function malli$error$_levenshtein(sequence1,sequence2){
return cljs.core.peek.call(null,cljs.core.reduce.call(null,(function (previous,current){
return malli.error._next_row.call(null,previous,current,sequence2);
}),cljs.core.map.call(null,(function (p1__6779_SHARP_,p2__6778_SHARP_){
return cljs.core.identity.call(null,p2__6778_SHARP_);
}),cljs.core.cons.call(null,null,sequence2),cljs.core.range.call(null)),sequence1));
});
malli.error._similar_key = (function malli$error$_similar_key(ky,ky2){
var min_len = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,malli.core._comp.call(null,cljs.core.count,(function (p1__6780_SHARP_){
if(clojure.string.starts_with_QMARK_.call(null,p1__6780_SHARP_,":")){
return cljs.core.subs.call(null,p1__6780_SHARP_,(1));
} else {
return p1__6780_SHARP_;
}
}),cljs.core.str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,ky2], null)));
var dist = malli.error._levenshtein.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky2));
if((dist <= malli.error._length__GT_threshold.call(null,min_len))){
return dist;
} else {
return null;
}
});
malli.error._likely_misspelled = (function malli$error$_likely_misspelled(keys,known_keys,key){
if(cljs.core.truth_(known_keys.call(null,key))){
return null;
} else {
return cljs.core.not_empty.call(null,cljs.core.remove.call(null,keys,cljs.core.filter.call(null,(function (p1__6781_SHARP_){
return malli.error._similar_key.call(null,p1__6781_SHARP_,key);
}),known_keys)));
}
});
malli.error._most_similar_to = (function malli$error$_most_similar_to(keys,key,known_keys){
return cljs.core.not_empty.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__6782_SHARP_){
return malli.error._levenshtein.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6782_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
}),cljs.core.identity),malli.error._likely_misspelled.call(null,keys,known_keys,key))))));
});
malli.error.error_path = (function malli$error$error_path(var_args){
var G__6784 = arguments.length;
switch (G__6784) {
case 1:
return malli.error.error_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.error_path.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.error_path.call(null,error,null);
}));

(malli.error.error_path.cljs$core$IFn$_invoke$arity$2 = (function (error,options){
return cljs.core.into.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error),malli.error._path.call(null,error,options));
}));

(malli.error.error_path.cljs$lang$maxFixedArity = 2);

malli.error.error_message = (function malli$error$error_message(var_args){
var G__6787 = arguments.length;
switch (G__6787) {
case 1:
return malli.error.error_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.error_message.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.error_message.call(null,error,null);
}));

(malli.error.error_message.cljs$core$IFn$_invoke$arity$2 = (function (p__6788,p__6789){
var map__6790 = p__6788;
var map__6790__$1 = cljs.core.__destructure_map.call(null,map__6790);
var error = map__6790__$1;
var schema = cljs.core.get.call(null,map__6790__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var type = cljs.core.get.call(null,map__6790__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__6791 = p__6789;
var map__6791__$1 = cljs.core.__destructure_map.call(null,map__6791);
var options = map__6791__$1;
var errors = cljs.core.get.call(null,map__6791__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),malli.error.default_errors);
var unknown = cljs.core.get.call(null,map__6791__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881),true);
var locale = cljs.core.get.call(null,map__6791__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var default_locale = cljs.core.get.call(null,map__6791__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073));
var or__5025__auto__ = malli.error._message.call(null,error,malli.core.properties.call(null,schema),locale,options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = malli.error._message.call(null,error,malli.core.type_properties.call(null,schema),locale,options);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = malli.error._message.call(null,error,errors.call(null,type),locale,options);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = malli.error._message.call(null,error,errors.call(null,malli.core.type.call(null,schema)),locale,options);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = malli.error._message.call(null,error,malli.core.properties.call(null,schema),default_locale,options);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = malli.error._message.call(null,error,malli.core.type_properties.call(null,schema),default_locale,options);
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
var or__5025__auto____$6 = malli.error._message.call(null,error,errors.call(null,type),default_locale,options);
if(cljs.core.truth_(or__5025__auto____$6)){
return or__5025__auto____$6;
} else {
var or__5025__auto____$7 = malli.error._message.call(null,error,errors.call(null,malli.core.type.call(null,schema)),default_locale,options);
if(cljs.core.truth_(or__5025__auto____$7)){
return or__5025__auto____$7;
} else {
var or__5025__auto____$8 = (function (){var and__5023__auto__ = unknown;
if(cljs.core.truth_(and__5023__auto__)){
return malli.error._message.call(null,error,errors.call(null,new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330)),locale,options);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$8)){
return or__5025__auto____$8;
} else {
var and__5023__auto__ = unknown;
if(cljs.core.truth_(and__5023__auto__)){
return malli.error._message.call(null,error,errors.call(null,new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330)),default_locale,options);
} else {
return and__5023__auto__;
}
}
}
}
}
}
}
}
}
}
}));

(malli.error.error_message.cljs$lang$maxFixedArity = 2);

malli.error._resolve_direct_error = (function malli$error$_resolve_direct_error(_,error,options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.error.error_path.call(null,error,options),malli.error.error_message.call(null,error,options)], null);
});
malli.error._resolve_root_error = (function malli$error$_resolve_root_error(p__6793,p__6794,options){
var map__6795 = p__6793;
var map__6795__$1 = cljs.core.__destructure_map.call(null,map__6795);
var schema = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__6796 = p__6794;
var map__6796__$1 = cljs.core.__destructure_map.call(null,map__6796);
var error = map__6796__$1;
var path = cljs.core.get.call(null,map__6796__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var in$ = cljs.core.get.call(null,map__6796__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"unknown","unknown",-935977881),false);
var path__$1 = path;
var l = null;
var mp = path__$1;
var p = malli.core.properties.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(error));
var m = malli.error.error_message.call(null,error,options__$1);
while(true){
var vec__6803 = (function (){var or__5025__auto__ = (function (){var schema__$1 = malli.util.get_in.call(null,schema,path__$1);
var temp__5825__auto__ = malli.error.error_message.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null),options__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var m_SINGLEQUOTE_ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,m_SINGLEQUOTE_,malli.core.properties.call(null,schema__$1)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var res = (function (){var and__5023__auto__ = l;
if(cljs.core.truth_(and__5023__auto__)){
return malli.util.find.call(null,malli.util.get_in.call(null,schema,path__$1),l);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.vector_QMARK_.call(null,res)){
var vec__6806 = res;
var _ = cljs.core.nth.call(null,vec__6806,(0),null);
var props = cljs.core.nth.call(null,vec__6806,(1),null);
var schema__$1 = cljs.core.nth.call(null,vec__6806,(2),null);
var schema__$2 = malli.util.update_properties.call(null,schema__$1,cljs.core.merge,props);
var message = malli.error.error_message.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$2], null),options__$1);
if(cljs.core.truth_(message)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,path__$1,l),message,malli.core.properties.call(null,schema__$2)], null);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mp,m,p], null);
} else {
return null;
}
}
}
})();
var path_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__6803,(0),null);
var m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__6803,(1),null);
var p_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__6803,(2),null);
if(cljs.core.seq.call(null,path__$1)){
var G__6809 = cljs.core.pop.call(null,path__$1);
var G__6810 = cljs.core.last.call(null,path__$1);
var G__6811 = path_SINGLEQUOTE_;
var G__6812 = p_SINGLEQUOTE_;
var G__6813 = m_SINGLEQUOTE_;
path__$1 = G__6809;
l = G__6810;
mp = G__6811;
p = G__6812;
m = G__6813;
continue;
} else {
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq.call(null,in$))?malli.util.path__GT_in.call(null,schema,path_SINGLEQUOTE_):malli.error.error_path.call(null,error,options__$1)),m_SINGLEQUOTE_,p_SINGLEQUOTE_], null);
} else {
return null;
}
}
break;
}
});
malli.error.with_error_message = (function malli$error$with_error_message(var_args){
var G__6815 = arguments.length;
switch (G__6815) {
case 1:
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.with_error_message.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.with_error_message.call(null,error,null);
}));

(malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2 = (function (error,options){
return cljs.core.assoc.call(null,error,new cljs.core.Keyword(null,"message","message",-406056002),malli.error.error_message.call(null,error,options));
}));

(malli.error.with_error_message.cljs$lang$maxFixedArity = 2);

malli.error.with_error_messages = (function malli$error$with_error_messages(var_args){
var G__6819 = arguments.length;
switch (G__6819) {
case 1:
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.with_error_messages.call(null,explanation,null);
}));

(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__6820){
var map__6821 = p__6820;
var map__6821__$1 = cljs.core.__destructure_map.call(null,map__6821);
var options = map__6821__$1;
var f = cljs.core.get.call(null,map__6821__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),cljs.core.identity);
if(cljs.core.truth_(explanation)){
return cljs.core.update.call(null,explanation,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errors){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6817_SHARP_){
return f.call(null,malli.error.with_error_message.call(null,p1__6817_SHARP_,options));
}),errors));
}));
} else {
return null;
}
}));

(malli.error.with_error_messages.cljs$lang$maxFixedArity = 2);

malli.error.with_spell_checking = (function malli$error$with_spell_checking(var_args){
var G__6825 = arguments.length;
switch (G__6825) {
case 1:
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.with_spell_checking.call(null,explanation,null);
}));

(malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__6826){
var map__6827 = p__6826;
var map__6827__$1 = cljs.core.__destructure_map.call(null,map__6827);
var keep_likely_misspelled_of = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"keep-likely-misspelled-of","keep-likely-misspelled-of",288878171));
if(cljs.core.truth_(explanation)){
var _BANG_likely_misspelling_of = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var handle_invalid_value = (function (schema,_,value){
var dispatch = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(malli.core.properties.call(null,schema));
if((dispatch instanceof cljs.core.Keyword)){
var value__$1 = dispatch.cljs$core$IFn$_invoke$arity$1(value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.error","misspelled-value","malli.error/misspelled-value",-1135752848),value__$1,cljs.core.PersistentHashSet.createAsIfByAssoc([value__$1])], null);
} else {
return null;
}
});
var types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512),(function (_,path,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.error","misspelled-key","malli.error/misspelled-key",616486174),cljs.core.last.call(null,path),(function (){var or__5025__auto__ = cljs.core.set.call(null,cljs.core.keys.call(null,value));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()], null);
}),new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675),handle_invalid_value], null);
return cljs.core.update.call(null,explanation,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errors){
var $ = errors;
var $__$1 = cljs.core.mapv.call(null,(function (p__6828){
var map__6829 = p__6828;
var map__6829__$1 = cljs.core.__destructure_map.call(null,map__6829);
var error = map__6829__$1;
var schema = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var path = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5823__auto__ = types.call(null,type);
if(cljs.core.truth_(temp__5823__auto__)){
var get_keys = temp__5823__auto__;
var known_keys = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,malli.core.entries.call(null,schema)));
var value = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(explanation),cljs.core.butlast.call(null,path));
var vec__6830 = get_keys.call(null,schema,path,value);
var error_type = cljs.core.nth.call(null,vec__6830,(0),null);
var key = cljs.core.nth.call(null,vec__6830,(1),null);
var keys = cljs.core.nth.call(null,vec__6830,(2),null);
var similar = malli.error._most_similar_to.call(null,keys,key,known_keys);
var likely_misspelling_of = cljs.core.mapv.call(null,(function (p1__6823_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),p1__6823_SHARP_);
}),cljs.core.vec.call(null,similar));
cljs.core.swap_BANG_.call(null,_BANG_likely_misspelling_of,cljs.core.into,likely_misspelling_of);

var G__6833 = error;
if(cljs.core.truth_(similar)){
return cljs.core.assoc.call(null,G__6833,new cljs.core.Keyword(null,"type","type",1174270348),error_type,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033),likely_misspelling_of);
} else {
return G__6833;
}
} else {
return error;
}
}),$);
if(cljs.core.not.call(null,keep_likely_misspelled_of)){
return cljs.core.remove.call(null,(function (p__6834){
var map__6835 = p__6834;
var map__6835__$1 = cljs.core.__destructure_map.call(null,map__6835);
var path = cljs.core.get.call(null,map__6835__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.call(null,map__6835__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var and__5023__auto__ = cljs.core.deref.call(null,_BANG_likely_misspelling_of).call(null,path);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666));
} else {
return and__5023__auto__;
}
}),$__$1);
} else {
return $__$1;
}
}));
} else {
return null;
}
}));

(malli.error.with_spell_checking.cljs$lang$maxFixedArity = 2);

/**
 * Humanized a explanation. Accepts the following options:
 * 
 *   - `:wrap`, a function of `error -> message`, defaulting to `:message`
 *   - `:resolve`, a function of `explanation error options -> path message`
 */
malli.error.humanize = (function malli$error$humanize(var_args){
var G__6838 = arguments.length;
switch (G__6838) {
case 1:
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.humanize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.humanize.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.humanize.call(null,explanation,null);
}));

(malli.error.humanize.cljs$core$IFn$_invoke$arity$2 = (function (p__6839,p__6840){
var map__6841 = p__6839;
var map__6841__$1 = cljs.core.__destructure_map.call(null,map__6841);
var explanation = map__6841__$1;
var value = cljs.core.get.call(null,map__6841__$1,new cljs.core.Keyword(null,"value","value",305978217));
var errors = cljs.core.get.call(null,map__6841__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var map__6842 = p__6840;
var map__6842__$1 = cljs.core.__destructure_map.call(null,map__6842);
var options = map__6842__$1;
var wrap = cljs.core.get.call(null,map__6842__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"message","message",-406056002));
var resolve = cljs.core.get.call(null,map__6842__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),malli.error._resolve_direct_error);
if(cljs.core.truth_(errors)){
return cljs.core.reduce.call(null,(function (acc,error){
var vec__6843 = resolve.call(null,explanation,error,options);
var path = cljs.core.nth.call(null,vec__6843,(0),null);
var message = cljs.core.nth.call(null,vec__6843,(1),null);
return malli.error._push_in.call(null,acc,value,path,wrap.call(null,cljs.core.assoc.call(null,error,new cljs.core.Keyword(null,"message","message",-406056002),message)));
}),null,errors);
} else {
return null;
}
}));

(malli.error.humanize.cljs$lang$maxFixedArity = 2);

/**
 * Returns the parts of value that are in error. Accepts the following options:
 * 
 *   - `::mask-valid-values`, value to mask valid values with
 *   - `::keep-valid-values`, keep valid values (overrides mask)
 *   - `::accept-error`, function to accept errors
 *   - `::wrap-error`, function to wrap the error map (default: `:value`)
 */
malli.error.error_value = (function malli$error$error_value(var_args){
var G__6848 = arguments.length;
switch (G__6848) {
case 1:
return malli.error.error_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.error_value.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.error_value.call(null,explanation,null);
}));

(malli.error.error_value.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__6849){
var map__6850 = p__6849;
var map__6850__$1 = cljs.core.__destructure_map.call(null,map__6850);
var options = map__6850__$1;
var mask = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332));
var G__6851 = malli.error._error_value.call(null,explanation,options);
if(cljs.core.truth_(mask)){
return malli.error._masked.call(null,mask,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(explanation),G__6851);
} else {
return G__6851;
}
}));

(malli.error.error_value.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=error.js.map
