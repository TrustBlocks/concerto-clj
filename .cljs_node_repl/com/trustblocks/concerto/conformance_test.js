// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.trustblocks.concerto.conformance_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('com.trustblocks.concerto.fixtures');
goog.require('com.trustblocks.concerto.instance');
goog.require('com.trustblocks.concerto.malli');
goog.require('com.trustblocks.concerto.metamodel');
goog.require('malli.core');
com.trustblocks.concerto.conformance_test.registry = (function com$trustblocks$concerto$conformance_test$registry(category){
return com.trustblocks.concerto.metamodel.registry.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.trustblocks.concerto.metamodel.strip_locations.call(null,com.trustblocks.concerto.metamodel.json__GT_edn.call(null,com.trustblocks.concerto.fixtures.read_resource.call(null,["conformance/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(category),"/model.json"].join(''))))], null));
});
com.trustblocks.concerto.conformance_test.instance = (function com$trustblocks$concerto$conformance_test$instance(category,file){
return com.trustblocks.concerto.instance.json__GT_edn.call(null,com.trustblocks.concerto.fixtures.read_resource.call(null,["conformance/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(category),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')));
});
/**
 * Compile category's schema for fqn once per call -- these are tiny
 *   single-declaration models, so recompiling per assertion costs nothing and
 *   keeps each `check` call self-contained and independently readable.
 */
com.trustblocks.concerto.conformance_test.check = (function com$trustblocks$concerto$conformance_test$check(category,fqn,file,expect){
var schema = com.trustblocks.concerto.malli.__GT_schema.call(null,com.trustblocks.concerto.conformance_test.registry.call(null,category),fqn);
try{var values__5096__auto__ = (new cljs.core.List(null,expect,(new cljs.core.List(null,malli.core.validate.call(null,schema,com.trustblocks.concerto.conformance_test.instance.call(null,category,file)),null,(1),null)),(2),null));
var result__5097__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5096__auto__);
if(cljs.core.truth_(result__5097__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",64,new cljs.core.Keyword(null,"pass","pass",1574159993),9,44,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expect","expect",470404175,null),cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),cljs.core.list(new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"file","file",370885649,null)))),44,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5096__auto__),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(category),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",64,new cljs.core.Keyword(null,"fail","fail",1706214930),9,44,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expect","expect",470404175,null),cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),cljs.core.list(new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"file","file",370885649,null)))),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5096__auto__),null,(1),null)),(2),null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(category),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')]));
}

return result__5097__auto__;
}catch (e5288){var t__5147__auto__ = e5288;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",64,new cljs.core.Keyword(null,"error","error",-978969032),9,44,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"expect","expect",470404175,null),cljs.core.list(new cljs.core.Symbol("m","validate","m/validate",1439230545,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),cljs.core.list(new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"file","file",370885649,null)))),44,t__5147__auto__,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(category),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')]));
}});
com.trustblocks.concerto.conformance_test.primitives = (function com$trustblocks$concerto$conformance_test$primitives(){
return cljs.test.test_var.call(null,com.trustblocks.concerto.conformance_test.primitives.cljs$lang$var);
});
com.trustblocks.concerto.conformance_test.primitives.cljs$lang$test = (function (){
var fqn = "org.acme.test@1.0.0.AllTypes";
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Valid instance with all primitive types should pass");

try{com.trustblocks.concerto.conformance_test.check.call(null,"primitives",fqn,"all_primitives_valid.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"String value for Integer field should fail");

try{com.trustblocks.concerto.conformance_test.check.call(null,"primitives",fqn,"integer_type_mismatch.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"String value for Boolean field should fail");

try{return com.trustblocks.concerto.conformance_test.check.call(null,"primitives",fqn,"boolean_type_mismatch.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(com.trustblocks.concerto.conformance_test.primitives.cljs$lang$var = new cljs.core.Var(function(){return com.trustblocks.concerto.conformance_test.primitives;},new cljs.core.Symbol("com.trustblocks.concerto.conformance-test","primitives","com.trustblocks.concerto.conformance-test/primitives",463777102,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.trustblocks.concerto.conformance-test","com.trustblocks.concerto.conformance-test",-2021379937,null),new cljs.core.Symbol(null,"primitives","primitives",1776224056,null),"/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",20,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.trustblocks.concerto.conformance_test.primitives)?com.trustblocks.concerto.conformance_test.primitives.cljs$lang$test:null)])));
com.trustblocks.concerto.conformance_test.required_fields = (function com$trustblocks$concerto$conformance_test$required_fields(){
return cljs.test.test_var.call(null,com.trustblocks.concerto.conformance_test.required_fields.cljs$lang$var);
});
com.trustblocks.concerto.conformance_test.required_fields.cljs$lang$test = (function (){
var fqn = "org.acme.test@1.0.0.Person";
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Missing required field should fail");

try{com.trustblocks.concerto.conformance_test.check.call(null,"required",fqn,"missing_required.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"All required fields present should pass");

try{return com.trustblocks.concerto.conformance_test.check.call(null,"required",fqn,"all_present.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(com.trustblocks.concerto.conformance_test.required_fields.cljs$lang$var = new cljs.core.Var(function(){return com.trustblocks.concerto.conformance_test.required_fields;},new cljs.core.Symbol("com.trustblocks.concerto.conformance-test","required-fields","com.trustblocks.concerto.conformance-test/required-fields",-1127887462,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.trustblocks.concerto.conformance-test","com.trustblocks.concerto.conformance-test",-2021379937,null),new cljs.core.Symbol(null,"required-fields","required-fields",240014924,null),"/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",25,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.trustblocks.concerto.conformance_test.required_fields)?com.trustblocks.concerto.conformance_test.required_fields.cljs$lang$test:null)])));
com.trustblocks.concerto.conformance_test.optional_fields = (function com$trustblocks$concerto$conformance_test$optional_fields(){
return cljs.test.test_var.call(null,com.trustblocks.concerto.conformance_test.optional_fields.cljs$lang$var);
});
com.trustblocks.concerto.conformance_test.optional_fields.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Optional field omitted should pass");

try{return com.trustblocks.concerto.conformance_test.check.call(null,"optional","org.acme.test@1.0.0.Person","omitted_optional.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(com.trustblocks.concerto.conformance_test.optional_fields.cljs$lang$var = new cljs.core.Var(function(){return com.trustblocks.concerto.conformance_test.optional_fields;},new cljs.core.Symbol("com.trustblocks.concerto.conformance-test","optional-fields","com.trustblocks.concerto.conformance-test/optional-fields",1661333631,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.trustblocks.concerto.conformance-test","com.trustblocks.concerto.conformance-test",-2021379937,null),new cljs.core.Symbol(null,"optional-fields","optional-fields",-241473139,null),"/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",25,1,63,63,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.trustblocks.concerto.conformance_test.optional_fields)?com.trustblocks.concerto.conformance_test.optional_fields.cljs$lang$test:null)])));
com.trustblocks.concerto.conformance_test.enum_instances = (function com$trustblocks$concerto$conformance_test$enum_instances(){
return cljs.test.test_var.call(null,com.trustblocks.concerto.conformance_test.enum_instances.cljs$lang$var);
});
com.trustblocks.concerto.conformance_test.enum_instances.cljs$lang$test = (function (){
var fqn = "org.acme.test@1.0.0.Car";
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Valid enum value should pass");

try{com.trustblocks.concerto.conformance_test.check.call(null,"enums",fqn,"valid_enum.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Invalid enum value should fail");

try{return com.trustblocks.concerto.conformance_test.check.call(null,"enums",fqn,"invalid_enum.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(com.trustblocks.concerto.conformance_test.enum_instances.cljs$lang$var = new cljs.core.Var(function(){return com.trustblocks.concerto.conformance_test.enum_instances;},new cljs.core.Symbol("com.trustblocks.concerto.conformance-test","enum-instances","com.trustblocks.concerto.conformance-test/enum-instances",-86748626,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.trustblocks.concerto.conformance-test","com.trustblocks.concerto.conformance-test",-2021379937,null),new cljs.core.Symbol(null,"enum-instances","enum-instances",1802349052,null),"/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",24,1,67,67,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.trustblocks.concerto.conformance_test.enum_instances)?com.trustblocks.concerto.conformance_test.enum_instances.cljs$lang$test:null)])));
com.trustblocks.concerto.conformance_test.class_type_resolution = (function com$trustblocks$concerto$conformance_test$class_type_resolution(){
return cljs.test.test_var.call(null,com.trustblocks.concerto.conformance_test.class_type_resolution.cljs$lang$var);
});
com.trustblocks.concerto.conformance_test.class_type_resolution.cljs$lang$test = (function (){
var fqn = "org.acme.test@1.0.0.Person";
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Matching $class type should pass");

try{com.trustblocks.concerto.conformance_test.check.call(null,"class_type",fqn,"valid_class.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Non-existent $class type should fail");

try{return com.trustblocks.concerto.conformance_test.check.call(null,"class_type",fqn,"unknown_class.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(com.trustblocks.concerto.conformance_test.class_type_resolution.cljs$lang$var = new cljs.core.Var(function(){return com.trustblocks.concerto.conformance_test.class_type_resolution;},new cljs.core.Symbol("com.trustblocks.concerto.conformance-test","class-type-resolution","com.trustblocks.concerto.conformance-test/class-type-resolution",-988149069,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.trustblocks.concerto.conformance-test","com.trustblocks.concerto.conformance-test",-2021379937,null),new cljs.core.Symbol(null,"class-type-resolution","class-type-resolution",1417916557,null),"/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",31,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.trustblocks.concerto.conformance_test.class_type_resolution)?com.trustblocks.concerto.conformance_test.class_type_resolution.cljs$lang$test:null)])));
com.trustblocks.concerto.conformance_test.collection_size_validation = (function com$trustblocks$concerto$conformance_test$collection_size_validation(){
return cljs.test.test_var.call(null,com.trustblocks.concerto.conformance_test.collection_size_validation.cljs$lang$var);
});
com.trustblocks.concerto.conformance_test.collection_size_validation.cljs$lang$test = (function (){
var fqn = "org.acme.collections@1.0.0.BoundedTags";
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Array within size bounds should pass");

try{com.trustblocks.concerto.conformance_test.check.call(null,"collection_size",fqn,"valid_within_bounds.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Array at minimum bound should pass");

try{com.trustblocks.concerto.conformance_test.check.call(null,"collection_size",fqn,"at_min_bound.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Array at maximum bound should pass");

try{com.trustblocks.concerto.conformance_test.check.call(null,"collection_size",fqn,"at_max_bound.json",true);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Array with too few elements should fail");

try{com.trustblocks.concerto.conformance_test.check.call(null,"collection_size",fqn,"too_few_elements.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Array with too many elements should fail");

try{return com.trustblocks.concerto.conformance_test.check.call(null,"collection_size",fqn,"too_many_elements.json",false);
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(com.trustblocks.concerto.conformance_test.collection_size_validation.cljs$lang$var = new cljs.core.Var(function(){return com.trustblocks.concerto.conformance_test.collection_size_validation;},new cljs.core.Symbol("com.trustblocks.concerto.conformance-test","collection-size-validation","com.trustblocks.concerto.conformance-test/collection-size-validation",1404675311,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.trustblocks.concerto.conformance-test","com.trustblocks.concerto.conformance-test",-2021379937,null),new cljs.core.Symbol(null,"collection-size-validation","collection-size-validation",-466465063,null),"/Users/tombrooke/Code/concerto-clj/.delta/worktrees/kczdxsaxrjte/concerto-clj/test/com/trustblocks/concerto/conformance_test.cljc",36,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.trustblocks.concerto.conformance_test.collection_size_validation)?com.trustblocks.concerto.conformance_test.collection_size_validation.cljs$lang$test:null)])));

//# sourceMappingURL=conformance_test.js.map
