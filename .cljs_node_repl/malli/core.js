// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('malli.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core');
goog.require('malli.impl.regex');
goog.require('malli.impl.util');
goog.require('malli.registry');
goog.require('malli.sci');


















/**
 * @interface
 */
malli.core.IntoSchema = function(){};

var malli$core$IntoSchema$_type$dyn_5168 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._type[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._type["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSchema.-type",this$);
}
}
});
/**
 * returns type of the schema
 */
malli.core._type = (function malli$core$_type(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$IntoSchema$_type$arity$1 == null)))))){
return this$.malli$core$IntoSchema$_type$arity$1(this$);
} else {
return malli$core$IntoSchema$_type$dyn_5168.call(null,this$);
}
});

var malli$core$IntoSchema$_type_properties$dyn_5169 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._type_properties[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._type_properties["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSchema.-type-properties",this$);
}
}
});
/**
 * returns schema type properties
 */
malli.core._type_properties = (function malli$core$_type_properties(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$IntoSchema$_type_properties$arity$1 == null)))))){
return this$.malli$core$IntoSchema$_type_properties$arity$1(this$);
} else {
return malli$core$IntoSchema$_type_properties$dyn_5169.call(null,this$);
}
});

var malli$core$IntoSchema$_properties_schema$dyn_5170 = (function (this$,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._properties_schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,options);
} else {
var m__5372__auto__ = (malli.core._properties_schema["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,options);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSchema.-properties-schema",this$);
}
}
});
/**
 * maybe returns :map schema describing schema properties
 */
malli.core._properties_schema = (function malli$core$_properties_schema(this$,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$IntoSchema$_properties_schema$arity$2 == null)))))){
return this$.malli$core$IntoSchema$_properties_schema$arity$2(this$,options);
} else {
return malli$core$IntoSchema$_properties_schema$dyn_5170.call(null,this$,options);
}
});

var malli$core$IntoSchema$_children_schema$dyn_5171 = (function (this$,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._children_schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,options);
} else {
var m__5372__auto__ = (malli.core._children_schema["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,options);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSchema.-children-schema",this$);
}
}
});
/**
 * maybe returns sequence schema describing schema children
 */
malli.core._children_schema = (function malli$core$_children_schema(this$,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$IntoSchema$_children_schema$arity$2 == null)))))){
return this$.malli$core$IntoSchema$_children_schema$arity$2(this$,options);
} else {
return malli$core$IntoSchema$_children_schema$dyn_5171.call(null,this$,options);
}
});

var malli$core$IntoSchema$_into_schema$dyn_5172 = (function (this$,properties,children,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._into_schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,properties,children,options);
} else {
var m__5372__auto__ = (malli.core._into_schema["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,properties,children,options);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSchema.-into-schema",this$);
}
}
});
/**
 * creates a new schema instance
 */
malli.core._into_schema = (function malli$core$_into_schema(this$,properties,children,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$IntoSchema$_into_schema$arity$4 == null)))))){
return this$.malli$core$IntoSchema$_into_schema$arity$4(this$,properties,children,options);
} else {
return malli$core$IntoSchema$_into_schema$dyn_5172.call(null,this$,properties,children,options);
}
});


/**
 * @interface
 */
malli.core.Schema = function(){};

var malli$core$Schema$_validator$dyn_5173 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._validator[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._validator["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-validator",this$);
}
}
});
/**
 * returns a predicate function that checks if the schema is valid
 */
malli.core._validator = (function malli$core$_validator(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_validator$arity$1 == null)))))){
return this$.malli$core$Schema$_validator$arity$1(this$);
} else {
return malli$core$Schema$_validator$dyn_5173.call(null,this$);
}
});

var malli$core$Schema$_explainer$dyn_5174 = (function (this$,path){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._explainer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,path);
} else {
var m__5372__auto__ = (malli.core._explainer["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-explainer",this$);
}
}
});
/**
 * returns a function of `x in acc -> maybe errors` to explain the errors for invalid values
 */
malli.core._explainer = (function malli$core$_explainer(this$,path){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_explainer$arity$2 == null)))))){
return this$.malli$core$Schema$_explainer$arity$2(this$,path);
} else {
return malli$core$Schema$_explainer$dyn_5174.call(null,this$,path);
}
});

var malli$core$Schema$_parser$dyn_5175 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._parser[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._parser["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-parser",this$);
}
}
});
/**
 * return a function of `x -> parsed-x | ::m/invalid` to explain how schema is valid.
 */
malli.core._parser = (function malli$core$_parser(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_parser$arity$1 == null)))))){
return this$.malli$core$Schema$_parser$arity$1(this$);
} else {
return malli$core$Schema$_parser$dyn_5175.call(null,this$);
}
});

var malli$core$Schema$_unparser$dyn_5176 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._unparser[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._unparser["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-unparser",this$);
}
}
});
/**
 * return the inverse (partial) function wrt. `-parser`; `parsed-x -> x | ::m/invalid`
 */
malli.core._unparser = (function malli$core$_unparser(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_unparser$arity$1 == null)))))){
return this$.malli$core$Schema$_unparser$arity$1(this$);
} else {
return malli$core$Schema$_unparser$dyn_5176.call(null,this$);
}
});

var malli$core$Schema$_transformer$dyn_5177 = (function (this$,transformer,method,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._transformer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,transformer,method,options);
} else {
var m__5372__auto__ = (malli.core._transformer["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,transformer,method,options);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-transformer",this$);
}
}
});
/**
 * returns a function to transform the value for the given schema and method.
 *  Can also return nil instead of `identity` so that more no-op transforms can be elided.
 */
malli.core._transformer = (function malli$core$_transformer(this$,transformer,method,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_transformer$arity$4 == null)))))){
return this$.malli$core$Schema$_transformer$arity$4(this$,transformer,method,options);
} else {
return malli$core$Schema$_transformer$dyn_5177.call(null,this$,transformer,method,options);
}
});

var malli$core$Schema$_walk$dyn_5178 = (function (this$,walker,path,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._walk[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,walker,path,options);
} else {
var m__5372__auto__ = (malli.core._walk["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,walker,path,options);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-walk",this$);
}
}
});
/**
 * walks the schema and it's children, ::m/walk-entry-vals, ::m/walk-refs, ::m/walk-schema-refs options effect how walking is done.
 */
malli.core._walk = (function malli$core$_walk(this$,walker,path,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_walk$arity$4 == null)))))){
return this$.malli$core$Schema$_walk$arity$4(this$,walker,path,options);
} else {
return malli$core$Schema$_walk$dyn_5178.call(null,this$,walker,path,options);
}
});

var malli$core$Schema$_properties$dyn_5179 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._properties[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._properties["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-properties",this$);
}
}
});
/**
 * returns original schema properties
 */
malli.core._properties = (function malli$core$_properties(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_properties$arity$1 == null)))))){
return this$.malli$core$Schema$_properties$arity$1(this$);
} else {
return malli$core$Schema$_properties$dyn_5179.call(null,this$);
}
});

var malli$core$Schema$_options$dyn_5180 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._options[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._options["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-options",this$);
}
}
});
/**
 * returns original options
 */
malli.core._options = (function malli$core$_options(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_options$arity$1 == null)))))){
return this$.malli$core$Schema$_options$arity$1(this$);
} else {
return malli$core$Schema$_options$dyn_5180.call(null,this$);
}
});

var malli$core$Schema$_children$dyn_5181 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._children[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._children["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-children",this$);
}
}
});
/**
 * returns schema children
 */
malli.core._children = (function malli$core$_children(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_children$arity$1 == null)))))){
return this$.malli$core$Schema$_children$arity$1(this$);
} else {
return malli$core$Schema$_children$dyn_5181.call(null,this$);
}
});

var malli$core$Schema$_parent$dyn_5182 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._parent[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._parent["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-parent",this$);
}
}
});
/**
 * returns the IntoSchema instance
 */
malli.core._parent = (function malli$core$_parent(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_parent$arity$1 == null)))))){
return this$.malli$core$Schema$_parent$arity$1(this$);
} else {
return malli$core$Schema$_parent$dyn_5182.call(null,this$);
}
});

var malli$core$Schema$_form$dyn_5183 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._form[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._form["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.-form",this$);
}
}
});
/**
 * returns original form of the schema
 */
malli.core._form = (function malli$core$_form(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Schema$_form$arity$1 == null)))))){
return this$.malli$core$Schema$_form$arity$1(this$);
} else {
return malli$core$Schema$_form$dyn_5183.call(null,this$);
}
});


/**
 * @interface
 */
malli.core.AST = function(){};

var malli$core$AST$_to_ast$dyn_5184 = (function (this$,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._to_ast[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,options);
} else {
var m__5372__auto__ = (malli.core._to_ast["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,options);
} else {
throw cljs.core.missing_protocol.call(null,"AST.-to-ast",this$);
}
}
});
/**
 * schema to ast
 */
malli.core._to_ast = (function malli$core$_to_ast(this$,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$AST$_to_ast$arity$2 == null)))))){
return this$.malli$core$AST$_to_ast$arity$2(this$,options);
} else {
return malli$core$AST$_to_ast$dyn_5184.call(null,this$,options);
}
});

var malli$core$AST$_from_ast$dyn_5185 = (function (this$,ast,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._from_ast[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,ast,options);
} else {
var m__5372__auto__ = (malli.core._from_ast["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,ast,options);
} else {
throw cljs.core.missing_protocol.call(null,"AST.-from-ast",this$);
}
}
});
/**
 * ast to schema
 */
malli.core._from_ast = (function malli$core$_from_ast(this$,ast,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$AST$_from_ast$arity$3 == null)))))){
return this$.malli$core$AST$_from_ast$arity$3(this$,ast,options);
} else {
return malli$core$AST$_from_ast$dyn_5185.call(null,this$,ast,options);
}
});


/**
 * @interface
 */
malli.core.EntryParser = function(){};

var malli$core$EntryParser$_entry_keyset$dyn_5186 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._entry_keyset[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._entry_keyset["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EntryParser.-entry-keyset",this$);
}
}
});
malli.core._entry_keyset = (function malli$core$_entry_keyset(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$EntryParser$_entry_keyset$arity$1 == null)))))){
return this$.malli$core$EntryParser$_entry_keyset$arity$1(this$);
} else {
return malli$core$EntryParser$_entry_keyset$dyn_5186.call(null,this$);
}
});

var malli$core$EntryParser$_entry_children$dyn_5187 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._entry_children[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._entry_children["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EntryParser.-entry-children",this$);
}
}
});
malli.core._entry_children = (function malli$core$_entry_children(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$EntryParser$_entry_children$arity$1 == null)))))){
return this$.malli$core$EntryParser$_entry_children$arity$1(this$);
} else {
return malli$core$EntryParser$_entry_children$dyn_5187.call(null,this$);
}
});

var malli$core$EntryParser$_entry_entries$dyn_5188 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._entry_entries[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._entry_entries["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EntryParser.-entry-entries",this$);
}
}
});
malli.core._entry_entries = (function malli$core$_entry_entries(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$EntryParser$_entry_entries$arity$1 == null)))))){
return this$.malli$core$EntryParser$_entry_entries$arity$1(this$);
} else {
return malli$core$EntryParser$_entry_entries$dyn_5188.call(null,this$);
}
});

var malli$core$EntryParser$_entry_forms$dyn_5189 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._entry_forms[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._entry_forms["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EntryParser.-entry-forms",this$);
}
}
});
malli.core._entry_forms = (function malli$core$_entry_forms(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$EntryParser$_entry_forms$arity$1 == null)))))){
return this$.malli$core$EntryParser$_entry_forms$arity$1(this$);
} else {
return malli$core$EntryParser$_entry_forms$dyn_5189.call(null,this$);
}
});


/**
 * @interface
 */
malli.core.EntrySchema = function(){};

var malli$core$EntrySchema$_entries$dyn_5190 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._entries[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._entries["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EntrySchema.-entries",this$);
}
}
});
/**
 * returns sequence of `key -val-schema` entries
 */
malli.core._entries = (function malli$core$_entries(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$EntrySchema$_entries$arity$1 == null)))))){
return this$.malli$core$EntrySchema$_entries$arity$1(this$);
} else {
return malli$core$EntrySchema$_entries$dyn_5190.call(null,this$);
}
});

var malli$core$EntrySchema$_entry_parser$dyn_5191 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._entry_parser[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._entry_parser["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EntrySchema.-entry-parser",this$);
}
}
});
malli.core._entry_parser = (function malli$core$_entry_parser(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$EntrySchema$_entry_parser$arity$1 == null)))))){
return this$.malli$core$EntrySchema$_entry_parser$arity$1(this$);
} else {
return malli$core$EntrySchema$_entry_parser$dyn_5191.call(null,this$);
}
});


/**
 * @interface
 */
malli.core.Cached = function(){};

var malli$core$Cached$_cache$dyn_5192 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._cache[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._cache["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Cached.-cache",this$);
}
}
});
malli.core._cache = (function malli$core$_cache(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Cached$_cache$arity$1 == null)))))){
return this$.malli$core$Cached$_cache$arity$1(this$);
} else {
return malli$core$Cached$_cache$dyn_5192.call(null,this$);
}
});


/**
 * @interface
 */
malli.core.LensSchema = function(){};

var malli$core$LensSchema$_keep$dyn_5193 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._keep[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._keep["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"LensSchema.-keep",this$);
}
}
});
/**
 * returns truthy if schema contributes to value path
 */
malli.core._keep = (function malli$core$_keep(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$LensSchema$_keep$arity$1 == null)))))){
return this$.malli$core$LensSchema$_keep$arity$1(this$);
} else {
return malli$core$LensSchema$_keep$dyn_5193.call(null,this$);
}
});

var malli$core$LensSchema$_get$dyn_5194 = (function (this$,key,default$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._get[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,key,default$);
} else {
var m__5372__auto__ = (malli.core._get["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,key,default$);
} else {
throw cljs.core.missing_protocol.call(null,"LensSchema.-get",this$);
}
}
});
/**
 * returns schema at key
 */
malli.core._get = (function malli$core$_get(this$,key,default$){
if((((!((this$ == null)))) && ((!((this$.malli$core$LensSchema$_get$arity$3 == null)))))){
return this$.malli$core$LensSchema$_get$arity$3(this$,key,default$);
} else {
return malli$core$LensSchema$_get$dyn_5194.call(null,this$,key,default$);
}
});

var malli$core$LensSchema$_set$dyn_5195 = (function (this$,key,value){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,key,value);
} else {
var m__5372__auto__ = (malli.core._set["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,key,value);
} else {
throw cljs.core.missing_protocol.call(null,"LensSchema.-set",this$);
}
}
});
/**
 * returns a copy with key having new value
 */
malli.core._set = (function malli$core$_set(this$,key,value){
if((((!((this$ == null)))) && ((!((this$.malli$core$LensSchema$_set$arity$3 == null)))))){
return this$.malli$core$LensSchema$_set$arity$3(this$,key,value);
} else {
return malli$core$LensSchema$_set$dyn_5195.call(null,this$,key,value);
}
});


/**
 * @interface
 */
malli.core.RefSchema = function(){};

var malli$core$RefSchema$_ref$dyn_5196 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._ref[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._ref["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RefSchema.-ref",this$);
}
}
});
/**
 * returns the reference name
 */
malli.core._ref = (function malli$core$_ref(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$RefSchema$_ref$arity$1 == null)))))){
return this$.malli$core$RefSchema$_ref$arity$1(this$);
} else {
return malli$core$RefSchema$_ref$dyn_5196.call(null,this$);
}
});

var malli$core$RefSchema$_deref$dyn_5197 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._deref[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._deref["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RefSchema.-deref",this$);
}
}
});
/**
 * returns the referenced schema
 */
malli.core._deref = (function malli$core$_deref(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$RefSchema$_deref$arity$1 == null)))))){
return this$.malli$core$RefSchema$_deref$arity$1(this$);
} else {
return malli$core$RefSchema$_deref$dyn_5197.call(null,this$);
}
});


/**
 * @interface
 */
malli.core.Walker = function(){};

var malli$core$Walker$_accept$dyn_5198 = (function (this$,schema,path,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._accept[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,schema,path,options);
} else {
var m__5372__auto__ = (malli.core._accept["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,schema,path,options);
} else {
throw cljs.core.missing_protocol.call(null,"Walker.-accept",this$);
}
}
});
malli.core._accept = (function malli$core$_accept(this$,schema,path,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$Walker$_accept$arity$4 == null)))))){
return this$.malli$core$Walker$_accept$arity$4(this$,schema,path,options);
} else {
return malli$core$Walker$_accept$dyn_5198.call(null,this$,schema,path,options);
}
});

var malli$core$Walker$_inner$dyn_5199 = (function (this$,schema,path,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._inner[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,schema,path,options);
} else {
var m__5372__auto__ = (malli.core._inner["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,schema,path,options);
} else {
throw cljs.core.missing_protocol.call(null,"Walker.-inner",this$);
}
}
});
malli.core._inner = (function malli$core$_inner(this$,schema,path,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$Walker$_inner$arity$4 == null)))))){
return this$.malli$core$Walker$_inner$arity$4(this$,schema,path,options);
} else {
return malli$core$Walker$_inner$dyn_5199.call(null,this$,schema,path,options);
}
});

var malli$core$Walker$_outer$dyn_5200 = (function (this$,schema,path,children,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._outer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,schema,path,children,options);
} else {
var m__5372__auto__ = (malli.core._outer["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,schema,path,children,options);
} else {
throw cljs.core.missing_protocol.call(null,"Walker.-outer",this$);
}
}
});
malli.core._outer = (function malli$core$_outer(this$,schema,path,children,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$Walker$_outer$arity$5 == null)))))){
return this$.malli$core$Walker$_outer$arity$5(this$,schema,path,children,options);
} else {
return malli$core$Walker$_outer$dyn_5200.call(null,this$,schema,path,children,options);
}
});


/**
 * @interface
 */
malli.core.Transformer = function(){};

var malli$core$Transformer$_transformer_chain$dyn_5201 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._transformer_chain[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._transformer_chain["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Transformer.-transformer-chain",this$);
}
}
});
/**
 * returns transformer chain as a vector of maps with :name, :encoders, :decoders and :options
 */
malli.core._transformer_chain = (function malli$core$_transformer_chain(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$Transformer$_transformer_chain$arity$1 == null)))))){
return this$.malli$core$Transformer$_transformer_chain$arity$1(this$);
} else {
return malli$core$Transformer$_transformer_chain$dyn_5201.call(null,this$);
}
});

var malli$core$Transformer$_value_transformer$dyn_5202 = (function (this$,schema,method,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._value_transformer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,schema,method,options);
} else {
var m__5372__auto__ = (malli.core._value_transformer["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,schema,method,options);
} else {
throw cljs.core.missing_protocol.call(null,"Transformer.-value-transformer",this$);
}
}
});
/**
 * returns a value transforming interceptor for the given schema and method
 */
malli.core._value_transformer = (function malli$core$_value_transformer(this$,schema,method,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$Transformer$_value_transformer$arity$4 == null)))))){
return this$.malli$core$Transformer$_value_transformer$arity$4(this$,schema,method,options);
} else {
return malli$core$Transformer$_value_transformer$dyn_5202.call(null,this$,schema,method,options);
}
});


/**
 * @interface
 */
malli.core.RegexSchema = function(){};

var malli$core$RegexSchema$_regex_op_QMARK_$dyn_5203 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_op_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._regex_op_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-op?",this$);
}
}
});
/**
 * is this a regex operator (e.g. :cat, :*...)
 */
malli.core._regex_op_QMARK_ = (function malli$core$_regex_op_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_op_QMARK_$arity$1 == null)))))){
return this$.malli$core$RegexSchema$_regex_op_QMARK_$arity$1(this$);
} else {
return malli$core$RegexSchema$_regex_op_QMARK_$dyn_5203.call(null,this$);
}
});

var malli$core$RegexSchema$_regex_validator$dyn_5204 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_validator[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._regex_validator["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-validator",this$);
}
}
});
/**
 * returns the raw internal regex validator implementation
 */
malli.core._regex_validator = (function malli$core$_regex_validator(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_validator$arity$1 == null)))))){
return this$.malli$core$RegexSchema$_regex_validator$arity$1(this$);
} else {
return malli$core$RegexSchema$_regex_validator$dyn_5204.call(null,this$);
}
});

var malli$core$RegexSchema$_regex_explainer$dyn_5205 = (function (this$,path){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_explainer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,path);
} else {
var m__5372__auto__ = (malli.core._regex_explainer["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-explainer",this$);
}
}
});
/**
 * returns the raw internal regex explainer implementation
 */
malli.core._regex_explainer = (function malli$core$_regex_explainer(this$,path){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_explainer$arity$2 == null)))))){
return this$.malli$core$RegexSchema$_regex_explainer$arity$2(this$,path);
} else {
return malli$core$RegexSchema$_regex_explainer$dyn_5205.call(null,this$,path);
}
});

var malli$core$RegexSchema$_regex_unparser$dyn_5206 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_unparser[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._regex_unparser["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-unparser",this$);
}
}
});
/**
 * returns the raw internal regex unparser implementation
 */
malli.core._regex_unparser = (function malli$core$_regex_unparser(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_unparser$arity$1 == null)))))){
return this$.malli$core$RegexSchema$_regex_unparser$arity$1(this$);
} else {
return malli$core$RegexSchema$_regex_unparser$dyn_5206.call(null,this$);
}
});

var malli$core$RegexSchema$_regex_parser$dyn_5207 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_parser[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._regex_parser["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-parser",this$);
}
}
});
/**
 * returns the raw internal regex parser implementation
 */
malli.core._regex_parser = (function malli$core$_regex_parser(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_parser$arity$1 == null)))))){
return this$.malli$core$RegexSchema$_regex_parser$arity$1(this$);
} else {
return malli$core$RegexSchema$_regex_parser$dyn_5207.call(null,this$);
}
});

var malli$core$RegexSchema$_regex_transformer$dyn_5208 = (function (this$,transformer,method,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_transformer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,transformer,method,options);
} else {
var m__5372__auto__ = (malli.core._regex_transformer["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,transformer,method,options);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-transformer",this$);
}
}
});
/**
 * returns the raw internal regex transformer implementation
 */
malli.core._regex_transformer = (function malli$core$_regex_transformer(this$,transformer,method,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_transformer$arity$4 == null)))))){
return this$.malli$core$RegexSchema$_regex_transformer$arity$4(this$,transformer,method,options);
} else {
return malli$core$RegexSchema$_regex_transformer$dyn_5208.call(null,this$,transformer,method,options);
}
});

var malli$core$RegexSchema$_regex_min_max$dyn_5209 = (function (this$,nested_QMARK_){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._regex_min_max[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,nested_QMARK_);
} else {
var m__5372__auto__ = (malli.core._regex_min_max["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,nested_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"RegexSchema.-regex-min-max",this$);
}
}
});
/**
 * returns size of the sequence as {:min min :max max}. nil max means unbounded. nested? is true when this schema is nested inside an outer regex schema.
 */
malli.core._regex_min_max = (function malli$core$_regex_min_max(this$,nested_QMARK_){
if((((!((this$ == null)))) && ((!((this$.malli$core$RegexSchema$_regex_min_max$arity$2 == null)))))){
return this$.malli$core$RegexSchema$_regex_min_max$arity$2(this$,nested_QMARK_);
} else {
return malli$core$RegexSchema$_regex_min_max$dyn_5209.call(null,this$,nested_QMARK_);
}
});


/**
 * @interface
 */
malli.core.FunctionSchema = function(){};

var malli$core$FunctionSchema$_function_schema_QMARK_$dyn_5210 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._function_schema_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._function_schema_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"FunctionSchema.-function-schema?",this$);
}
}
});
malli.core._function_schema_QMARK_ = (function malli$core$_function_schema_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$FunctionSchema$_function_schema_QMARK_$arity$1 == null)))))){
return this$.malli$core$FunctionSchema$_function_schema_QMARK_$arity$1(this$);
} else {
return malli$core$FunctionSchema$_function_schema_QMARK_$dyn_5210.call(null,this$);
}
});

var malli$core$FunctionSchema$_function_schema_arities$dyn_5211 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._function_schema_arities[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._function_schema_arities["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"FunctionSchema.-function-schema-arities",this$);
}
}
});
malli.core._function_schema_arities = (function malli$core$_function_schema_arities(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$FunctionSchema$_function_schema_arities$arity$1 == null)))))){
return this$.malli$core$FunctionSchema$_function_schema_arities$arity$1(this$);
} else {
return malli$core$FunctionSchema$_function_schema_arities$dyn_5211.call(null,this$);
}
});

var malli$core$FunctionSchema$_function_info$dyn_5212 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._function_info[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._function_info["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"FunctionSchema.-function-info",this$);
}
}
});
malli.core._function_info = (function malli$core$_function_info(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$FunctionSchema$_function_info$arity$1 == null)))))){
return this$.malli$core$FunctionSchema$_function_info$arity$1(this$);
} else {
return malli$core$FunctionSchema$_function_info$dyn_5212.call(null,this$);
}
});

var malli$core$FunctionSchema$_instrument_f$dyn_5213 = (function (schema,props,f,options){
var x__5373__auto__ = (((schema == null))?null:schema);
var m__5374__auto__ = (malli.core._instrument_f[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,schema,props,f,options);
} else {
var m__5372__auto__ = (malli.core._instrument_f["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,schema,props,f,options);
} else {
throw cljs.core.missing_protocol.call(null,"FunctionSchema.-instrument-f",schema);
}
}
});
malli.core._instrument_f = (function malli$core$_instrument_f(schema,props,f,options){
if((((!((schema == null)))) && ((!((schema.malli$core$FunctionSchema$_instrument_f$arity$4 == null)))))){
return schema.malli$core$FunctionSchema$_instrument_f$arity$4(schema,props,f,options);
} else {
return malli$core$FunctionSchema$_instrument_f$dyn_5213.call(null,schema,props,f,options);
}
});


/**
 * @interface
 */
malli.core.DistributiveSchema = function(){};

var malli$core$DistributiveSchema$_distributive_schema_QMARK_$dyn_5214 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._distributive_schema_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (malli.core._distributive_schema_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DistributiveSchema.-distributive-schema?",this$);
}
}
});
malli.core._distributive_schema_QMARK_ = (function malli$core$_distributive_schema_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.malli$core$DistributiveSchema$_distributive_schema_QMARK_$arity$1 == null)))))){
return this$.malli$core$DistributiveSchema$_distributive_schema_QMARK_$arity$1(this$);
} else {
return malli$core$DistributiveSchema$_distributive_schema_QMARK_$dyn_5214.call(null,this$);
}
});

var malli$core$DistributiveSchema$_distribute_to_children$dyn_5215 = (function (this$,f,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._distribute_to_children[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,f,options);
} else {
var m__5372__auto__ = (malli.core._distribute_to_children["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,f,options);
} else {
throw cljs.core.missing_protocol.call(null,"DistributiveSchema.-distribute-to-children",this$);
}
}
});
malli.core._distribute_to_children = (function malli$core$_distribute_to_children(this$,f,options){
if((((!((this$ == null)))) && ((!((this$.malli$core$DistributiveSchema$_distribute_to_children$arity$3 == null)))))){
return this$.malli$core$DistributiveSchema$_distribute_to_children$arity$3(this$,f,options);
} else {
return malli$core$DistributiveSchema$_distribute_to_children$dyn_5215.call(null,this$,f,options);
}
});


/**
 * @interface
 */
malli.core.ParserInfo = function(){};

var malli$core$ParserInfo$_parser_info$dyn_5216 = (function (this$,opts){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.core._parser_info[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,opts);
} else {
var m__5372__auto__ = (malli.core._parser_info["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"ParserInfo.-parser-info",this$);
}
}
});
malli.core._parser_info = (function malli$core$_parser_info(this$,opts){
if((((!((this$ == null)))) && ((!((this$.malli$core$ParserInfo$_parser_info$arity$2 == null)))))){
return this$.malli$core$ParserInfo$_parser_info$arity$2(this$,opts);
} else {
return malli$core$ParserInfo$_parser_info$dyn_5216.call(null,this$,opts);
}
});

malli.core._ref_schema_QMARK_ = (function malli$core$_ref_schema_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$RefSchema$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.core._entry_parser_QMARK_ = (function malli$core$_entry_parser_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$EntryParser$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.core._entry_schema_QMARK_ = (function malli$core$_entry_schema_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$EntrySchema$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.core._cached_QMARK_ = (function malli$core$_cached_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$Cached$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.core._ast_QMARK_ = (function malli$core$_ast_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$AST$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.core._transformer_QMARK_ = (function malli$core$_transformer_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$Transformer$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
(malli.core.FunctionSchema["_"] = true);

(malli.core._function_schema_QMARK_["_"] = (function (_){
return false;
}));

(malli.core._function_info["_"] = (function (_){
return null;
}));

(malli.core._function_schema_arities["_"] = (function (_){
return null;
}));

(malli.core._instrument_f["_"] = (function (_,___$1,___$2,___$3){
return null;
}));

(malli.core.DistributiveSchema["_"] = true);

(malli.core._distributive_schema_QMARK_["_"] = (function (_){
return false;
}));

(malli.core._distribute_to_children["_"] = (function (this$,_,___$1){
throw cljs.core.ex_info.call(null,"Not distributive",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),this$], null));
}));

(malli.core.ParserInfo["_"] = true);

(malli.core._parser_info["_"] = (function (this$,opts){
if(malli.core._ref_schema_QMARK_.call(null,this$)){
return malli.core._parser_info.call(null,malli.core._deref.call(null,this$),opts);
} else {
return null;
}
}));

(malli.core.RegexSchema["_"] = true);

(malli.core._regex_op_QMARK_["_"] = (function (_){
return false;
}));

(malli.core._regex_validator["_"] = (function (this$){
if(malli.core._ref_schema_QMARK_.call(null,this$)){
return malli.core._regex_validator.call(null,malli.core._deref.call(null,this$));
} else {
return malli.impl.regex.item_validator.call(null,malli.core._validator.call(null,this$));
}
}));

(malli.core._regex_explainer["_"] = (function (this$,path){
if(malli.core._ref_schema_QMARK_.call(null,this$)){
return malli.core._regex_explainer.call(null,malli.core._deref.call(null,this$),path);
} else {
return malli.impl.regex.item_explainer.call(null,path,this$,malli.core._explainer.call(null,this$,path));
}
}));

(malli.core._regex_parser["_"] = (function (this$){
if(malli.core._ref_schema_QMARK_.call(null,this$)){
return malli.core._regex_parser.call(null,malli.core._deref.call(null,this$));
} else {
return malli.impl.regex.item_parser.call(null,malli.core.parser.call(null,this$));
}
}));

(malli.core._regex_unparser["_"] = (function (this$){
if(malli.core._ref_schema_QMARK_.call(null,this$)){
return malli.core._regex_unparser.call(null,malli.core._deref.call(null,this$));
} else {
return malli.impl.regex.item_unparser.call(null,malli.core.unparser.call(null,this$));
}
}));

(malli.core._regex_transformer["_"] = (function (this$,transformer,method,options){
if(malli.core._ref_schema_QMARK_.call(null,this$)){
return malli.core._regex_transformer.call(null,malli.core._deref.call(null,this$),transformer,method,options);
} else {
return malli.impl.regex.item_transformer.call(null,method,malli.core._validator.call(null,this$),(function (){var or__5025__auto__ = malli.core._transformer.call(null,this$,transformer,method,options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})());
}
}));

(malli.core._regex_min_max["_"] = (function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1)], null);
}));
malli.core._pr_writer_into_schema = (function malli$core$_pr_writer_into_schema(obj,writer,opts){
cljs.core._write.call(null,writer,"#IntoSchema ");

return cljs.core._pr_writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core._type.call(null,obj)], null),writer,opts);
});
malli.core._pr_writer_schema = (function malli$core$_pr_writer_schema(obj,writer,opts){
return cljs.core._pr_writer.call(null,malli.core._form.call(null,obj),writer,opts);
});

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
malli.core.Tag = (function (key,value,__meta,__extmap,__hash){
this.key = key;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.core.Tag.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(malli.core.Tag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k5224,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__5228 = k5224;
var G__5228__$1 = (((G__5228 instanceof cljs.core.Keyword))?G__5228.fqn:null);
switch (G__5228__$1) {
case "key":
return self__.key;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5224,else__5326__auto__);

}
}));

(malli.core.Tag.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__5229){
var vec__5230 = p__5229;
var k__5347__auto__ = cljs.core.nth.call(null,vec__5230,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__5230,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(malli.core.Tag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#malli.core.Tag{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(malli.core.Tag.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5223){
var self__ = this;
var G__5223__$1 = this;
return (new cljs.core.RecordIter((0),G__5223__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(malli.core.Tag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(malli.core.Tag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new malli.core.Tag(self__.key,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.core.Tag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(malli.core.Tag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (237888567 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(malli.core.Tag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5225,other5226){
var self__ = this;
var this5225__$1 = this;
return (((!((other5226 == null)))) && ((((this5225__$1.constructor === other5226.constructor)) && (((cljs.core._EQ_.call(null,this5225__$1.key,other5226.key)) && (((cljs.core._EQ_.call(null,this5225__$1.value,other5226.value)) && (cljs.core._EQ_.call(null,this5225__$1.__extmap,other5226.__extmap)))))))));
}));

(malli.core.Tag.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new malli.core.Tag(self__.key,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(malli.core.Tag.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k5224){
var self__ = this;
var this__5330__auto____$1 = this;
var G__5233 = k5224;
var G__5233__$1 = (((G__5233 instanceof cljs.core.Keyword))?G__5233.fqn:null);
switch (G__5233__$1) {
case "key":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k5224);

}
}));

(malli.core.Tag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__5223){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__5234 = cljs.core.keyword_identical_QMARK_;
var expr__5235 = k__5332__auto__;
if(cljs.core.truth_(pred__5234.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__5235))){
return (new malli.core.Tag(G__5223,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5234.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__5235))){
return (new malli.core.Tag(self__.key,G__5223,self__.__meta,self__.__extmap,null));
} else {
return (new malli.core.Tag(self__.key,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__5223),null));
}
}
}));

(malli.core.Tag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(malli.core.Tag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__5223){
var self__ = this;
var this__5322__auto____$1 = this;
return (new malli.core.Tag(self__.key,self__.value,G__5223,self__.__extmap,self__.__hash));
}));

(malli.core.Tag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(malli.core.Tag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(malli.core.Tag.cljs$lang$type = true);

(malli.core.Tag.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"malli.core/Tag",null,(1),null));
}));

(malli.core.Tag.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"malli.core/Tag");
}));

/**
 * Positional factory function for malli.core/Tag.
 */
malli.core.__GT_Tag = (function malli$core$__GT_Tag(key,value){
return (new malli.core.Tag(key,value,null,null,null));
});

/**
 * Factory function for malli.core/Tag, taking a map of keywords to field values.
 */
malli.core.map__GT_Tag = (function malli$core$map__GT_Tag(G__5227){
var extmap__5365__auto__ = (function (){var G__5237 = cljs.core.dissoc.call(null,G__5227,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__5227)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__5237);
} else {
return G__5237;
}
})();
return (new malli.core.Tag(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__5227),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__5227),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});

/**
 * A tagged value, used eg. for results of `parse` for `:orn` schemas.
 */
malli.core.tag = (function malli$core$tag(key,value){
return malli.core.__GT_Tag.call(null,key,value);
});
/**
 * Is this a value constructed with `tag`?
 */
malli.core.tag_QMARK_ = (function malli$core$tag_QMARK_(x){
return (x instanceof malli.core.Tag);
});

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
malli.core.Tags = (function (values,__meta,__extmap,__hash){
this.values = values;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.core.Tags.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(malli.core.Tags.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k5241,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__5245 = k5241;
var G__5245__$1 = (((G__5245 instanceof cljs.core.Keyword))?G__5245.fqn:null);
switch (G__5245__$1) {
case "values":
return self__.values;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5241,else__5326__auto__);

}
}));

(malli.core.Tags.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__5246){
var vec__5247 = p__5246;
var k__5347__auto__ = cljs.core.nth.call(null,vec__5247,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__5247,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(malli.core.Tags.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#malli.core.Tags{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"values","values",372645556),self__.values],null))], null),self__.__extmap));
}));

(malli.core.Tags.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5240){
var self__ = this;
var G__5240__$1 = this;
return (new cljs.core.RecordIter((0),G__5240__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(malli.core.Tags.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(malli.core.Tags.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new malli.core.Tags(self__.values,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.core.Tags.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(malli.core.Tags.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1914571781 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(malli.core.Tags.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5242,other5243){
var self__ = this;
var this5242__$1 = this;
return (((!((other5243 == null)))) && ((((this5242__$1.constructor === other5243.constructor)) && (((cljs.core._EQ_.call(null,this5242__$1.values,other5243.values)) && (cljs.core._EQ_.call(null,this5242__$1.__extmap,other5243.__extmap)))))));
}));

(malli.core.Tags.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new malli.core.Tags(self__.values,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(malli.core.Tags.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k5241){
var self__ = this;
var this__5330__auto____$1 = this;
var G__5250 = k5241;
var G__5250__$1 = (((G__5250 instanceof cljs.core.Keyword))?G__5250.fqn:null);
switch (G__5250__$1) {
case "values":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k5241);

}
}));

(malli.core.Tags.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__5240){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__5251 = cljs.core.keyword_identical_QMARK_;
var expr__5252 = k__5332__auto__;
if(cljs.core.truth_(pred__5251.call(null,new cljs.core.Keyword(null,"values","values",372645556),expr__5252))){
return (new malli.core.Tags(G__5240,self__.__meta,self__.__extmap,null));
} else {
return (new malli.core.Tags(self__.values,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__5240),null));
}
}));

(malli.core.Tags.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"values","values",372645556),self__.values,null))], null),self__.__extmap));
}));

(malli.core.Tags.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__5240){
var self__ = this;
var this__5322__auto____$1 = this;
return (new malli.core.Tags(self__.values,G__5240,self__.__extmap,self__.__hash));
}));

(malli.core.Tags.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(malli.core.Tags.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null)], null);
}));

(malli.core.Tags.cljs$lang$type = true);

(malli.core.Tags.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"malli.core/Tags",null,(1),null));
}));

(malli.core.Tags.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"malli.core/Tags");
}));

/**
 * Positional factory function for malli.core/Tags.
 */
malli.core.__GT_Tags = (function malli$core$__GT_Tags(values){
return (new malli.core.Tags(values,null,null,null));
});

/**
 * Factory function for malli.core/Tags, taking a map of keywords to field values.
 */
malli.core.map__GT_Tags = (function malli$core$map__GT_Tags(G__5244){
var extmap__5365__auto__ = (function (){var G__5254 = cljs.core.dissoc.call(null,G__5244,new cljs.core.Keyword(null,"values","values",372645556));
if(cljs.core.record_QMARK_.call(null,G__5244)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__5254);
} else {
return G__5254;
}
})();
return (new malli.core.Tags(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(G__5244),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});

/**
 * A collection of tagged values. `values` should be a map from tag to value.
 * Used eg. for results of `parse` for `:catn` schemas.
 */
malli.core.tags = (function malli$core$tags(values){
return malli.core.__GT_Tags.call(null,values);
});
/**
 * Is this a value constructed with `tags`?
 */
malli.core.tags_QMARK_ = (function malli$core$tags_QMARK_(x){
return (x instanceof malli.core.Tags);
});
/**
 * Transform the new parsing format to the old one by
 * replacing Tag and Tags objects with their content.
 */
malli.core.old_parse_format = (function malli$core$old_parse_format(parsed){
return clojure.walk.postwalk.call(null,(function (x){
if(malli.core.tag_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
if(malli.core.tags_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;

}
}
}),parsed);
});
malli.core._deprecated_BANG_ = (function malli$core$_deprecated_BANG_(x){
return cljs.core.println.call(null,"DEPRECATED:",x);
});
malli.core._exception = (function malli$core$_exception(type,data){
return cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"message","message",-406056002),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
malli.core._fail_BANG_ = (function malli$core$_fail_BANG_(var_args){
var G__5258 = arguments.length;
switch (G__5258) {
case 1:
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return malli.core._fail_BANG_.call(null,type,null);
}));

(malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
throw malli.core._exception.call(null,type,data);
}));

(malli.core._fail_BANG_.cljs$lang$maxFixedArity = 2);

malli.core._safe_pred = (function malli$core$_safe_pred(f){
return (function (p1__5260_SHARP_){
try{return cljs.core.boolean$.call(null,f.call(null,p1__5260_SHARP_));
}catch (e5261){if((e5261 instanceof Error)){
var _ = e5261;
return false;
} else {
throw e5261;

}
}});
});
malli.core._keyword__GT_string = (function malli$core$_keyword__GT_string(x){
if((x instanceof cljs.core.Keyword)){
var temp__5823__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__5823__auto__)){
var nn = temp__5823__auto__;
return [nn,"/",cljs.core.name.call(null,x)].join('');
} else {
return cljs.core.name.call(null,x);
}
} else {
return x;
}
});
malli.core._guard = (function malli$core$_guard(pred,tf){
if(cljs.core.truth_(tf)){
return (function (x){
if(cljs.core.truth_(pred.call(null,x))){
return tf.call(null,x);
} else {
return x;
}
});
} else {
return null;
}
});
malli.core._unlift_keys = (function malli$core$_unlift_keys(m,prefix){
return cljs.core.reduce_kv.call(null,(function (p1__5263_SHARP_,p2__5262_SHARP_,p3__5264_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,prefix),cljs.core.namespace.call(null,p2__5262_SHARP_))){
return cljs.core.assoc.call(null,p1__5263_SHARP_,cljs.core.keyword.call(null,cljs.core.name.call(null,p2__5262_SHARP_)),p3__5264_SHARP_);
} else {
return p1__5263_SHARP_;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
malli.core._check_children_QMARK_ = (function malli$core$_check_children_QMARK_(){
return true;
});
malli.core._check_children_BANG_ = (function malli$core$_check_children_BANG_(var_args){
var G__5266 = arguments.length;
switch (G__5266) {
case 4:
return malli.core._check_children_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.core._check_children_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._check_children_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (type,properties,children,props){
malli.core._deprecated_BANG_.call(null,"use (m/-check-children! type properties children min max) instead.");

return malli.core._check_children_BANG_.call(null,type,properties,children,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(props));
}));

(malli.core._check_children_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (type,properties,children,min,max){
if(malli.core._check_children_QMARK_.call(null)){
var temp__5825__auto__ = (function (){var and__5023__auto__ = ((cljs.core.sequential_QMARK_.call(null,children)) || ((children == null)));
if(and__5023__auto__){
return cljs.core.count.call(null,children);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var size = temp__5825__auto__;
if(cljs.core.truth_((function (){var or__5025__auto__ = (function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return (size < min);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = max;
if(cljs.core.truth_(and__5023__auto__)){
return (size > max);
} else {
return and__5023__auto__;
}
}
})())){
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","child-error","malli.core/child-error",-473817473),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"properties","properties",685819552),properties,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(malli.core._check_children_BANG_.cljs$lang$maxFixedArity = 5);

malli.core._pointer = (function malli$core$_pointer(id,schema,options){
return malli.core._into_schema.call(null,malli.core._schema_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema], null),options);
});
malli.core._reference_QMARK_ = (function malli$core$_reference_QMARK_(_QMARK_schema){
return ((typeof _QMARK_schema === 'string') || (((cljs.core.qualified_ident_QMARK_.call(null,_QMARK_schema)) || (cljs.core.var_QMARK_.call(null,_QMARK_schema)))));
});
malli.core._lazy = (function malli$core$_lazy(ref,options){
return malli.core._into_schema.call(null,malli.core._ref_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lazy","lazy",-424547181),true], null)),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null),options);
});
malli.core._boolean_fn = (function malli$core$_boolean_fn(x){
if(cljs.core.boolean_QMARK_.call(null,x)){
return cljs.core.constantly.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.constantly.call(null,false);

}
}
});
malli.core._infer = (function malli$core$_infer(children){
var G__5274 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.symbol_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),cljs.core.int_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"double","double",884886883),cljs.core.float_QMARK_], null)], null);
var vec__5275 = G__5274;
var seq__5276 = cljs.core.seq.call(null,vec__5275);
var first__5277 = cljs.core.first.call(null,seq__5276);
var seq__5276__$1 = cljs.core.next.call(null,seq__5276);
var vec__5278 = first__5277;
var s = cljs.core.nth.call(null,vec__5278,(0),null);
var f = cljs.core.nth.call(null,vec__5278,(1),null);
var fs = seq__5276__$1;
var G__5274__$1 = G__5274;
while(true){
var vec__5287 = G__5274__$1;
var seq__5288 = cljs.core.seq.call(null,vec__5287);
var first__5289 = cljs.core.first.call(null,seq__5288);
var seq__5288__$1 = cljs.core.next.call(null,seq__5288);
var vec__5290 = first__5289;
var s__$1 = cljs.core.nth.call(null,vec__5290,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__5290,(1),null);
var fs__$1 = seq__5288__$1;
if(cljs.core.every_QMARK_.call(null,f__$1,children)){
return s__$1;
} else {
if(fs__$1){
var G__5293 = fs__$1;
G__5274__$1 = G__5293;
continue;
} else {
return null;
}
}
break;
}
});
malli.core._comp = (function malli$core$_comp(var_args){
var G__5299 = arguments.length;
switch (G__5299) {
case 0:
return malli.core._comp.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core._comp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core._comp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___5301 = arguments.length;
var i__5750__auto___5302 = (0);
while(true){
if((i__5750__auto___5302 < len__5749__auto___5301)){
args_arr__5774__auto__.push((arguments[i__5750__auto___5302]));

var G__5303 = (i__5750__auto___5302 + (1));
i__5750__auto___5302 = G__5303;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return malli.core._comp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(malli.core._comp.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.identity;
}));

(malli.core._comp.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f;
}));

(malli.core._comp.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function (x){
return f.call(null,g.call(null,x));
});
}));

(malli.core._comp.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
}));

(malli.core._comp.cljs$core$IFn$_invoke$arity$variadic = (function (f1,f2,f3,fs){
var f4 = cljs.core.apply.call(null,malli.core._comp,fs);
return (function (x){
return f1.call(null,f2.call(null,f3.call(null,f4.call(null,x))));
});
}));

/** @this {Function} */
(malli.core._comp.cljs$lang$applyTo = (function (seq5295){
var G__5296 = cljs.core.first.call(null,seq5295);
var seq5295__$1 = cljs.core.next.call(null,seq5295);
var G__5297 = cljs.core.first.call(null,seq5295__$1);
var seq5295__$2 = cljs.core.next.call(null,seq5295__$1);
var G__5298 = cljs.core.first.call(null,seq5295__$2);
var seq5295__$3 = cljs.core.next.call(null,seq5295__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5296,G__5297,G__5298,seq5295__$3);
}));

(malli.core._comp.cljs$lang$maxFixedArity = (3));

malli.core._update = (function malli$core$_update(x,k,f){
return cljs.core.assoc.call(null,x,k,f.call(null,cljs.core.get.call(null,x,k)));
});
malli.core._equals = (function malli$core$_equals(x,y){
return (((x === y)) || (cljs.core._EQ_.call(null,x,y)));
});
malli.core._vmap = (function malli$core$_vmap(var_args){
var G__5305 = arguments.length;
switch (G__5305) {
case 1:
return malli.core._vmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core._vmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._vmap.cljs$core$IFn$_invoke$arity$1 = (function (os){
return malli.impl.util._vmap.call(null,cljs.core.identity,os);
}));

(malli.core._vmap.cljs$core$IFn$_invoke$arity$2 = (function (f,os){
return malli.impl.util._vmap.call(null,f,os);
}));

(malli.core._vmap.cljs$lang$maxFixedArity = 2);

malli.core._memoize = (function malli$core$_memoize(f){
var f__$1 = cljs.core.volatile_BANG_.call(null,f);
var value = cljs.core.volatile_BANG_.call(null,null);
return (function (){
var or__5025__auto__ = cljs.core.deref.call(null,value);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5827__auto__ = cljs.core.deref.call(null,f__$1);
if((temp__5827__auto__ == null)){
return cljs.core.deref.call(null,value);
} else {
var f_SINGLEQUOTE_ = temp__5827__auto__;
var v = f_SINGLEQUOTE_.call(null);
cljs.core.vreset_BANG_.call(null,value,v);

cljs.core.vreset_BANG_.call(null,f__$1,null);

return v;
}
}
});
});
malli.core._group_by_arity_BANG_ = (function malli$core$_group_by_arity_BANG_(infos){
var aritys = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.reduce.call(null,(function (acc,p__5307){
var map__5308 = p__5307;
var map__5308__$1 = cljs.core.__destructure_map.call(null,map__5308);
var info = map__5308__$1;
var min = cljs.core.get.call(null,map__5308__$1,new cljs.core.Keyword(null,"min","min",444991522));
var arity = cljs.core.get.call(null,map__5308__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
var vararg = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"varargs","varargs",1030150858),arity);
var min__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = vararg;
if(and__5023__auto__){
return cljs.core.deref.call(null,aritys).call(null,min);
} else {
return and__5023__auto__;
}
})())?(cljs.core.apply.call(null,cljs.core.max,cljs.core.filter.call(null,cljs.core.int_QMARK_,cljs.core.deref.call(null,aritys))) + (1)):min);
if(cljs.core.truth_((function (){var and__5023__auto__ = vararg;
if(and__5023__auto__){
return cljs.core.deref.call(null,aritys).call(null,arity);
} else {
return and__5023__auto__;
}
})())){
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","multiple-varargs","malli.core/multiple-varargs",1982057671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"infos","infos",-927309652),infos], null));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,aritys).call(null,min__$1))){
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","duplicate-arities","malli.core/duplicate-arities",-374423504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"infos","infos",-927309652),infos], null));
} else {
cljs.core.swap_BANG_.call(null,aritys,cljs.core.conj,arity);

return cljs.core.assoc.call(null,acc,arity,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"min","min",444991522),min__$1));

}
}
}),cljs.core.PersistentArrayMap.EMPTY,infos);
});
malli.core._re_min_max = (function malli$core$_re_min_max(f,p__5309,child){
var map__5310 = p__5309;
var map__5310__$1 = cljs.core.__destructure_map.call(null,map__5310);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__5310__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__5310__$1,new cljs.core.Keyword(null,"max","max",61366548));
var map__5311 = malli.core._regex_min_max.call(null,child,true);
var map__5311__$1 = cljs.core.__destructure_map.call(null,map__5311);
var min_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.get.call(null,map__5311__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.get.call(null,map__5311__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__5312 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),f.call(null,(function (){var or__5025__auto__ = min_SINGLEQUOTE_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),min_SINGLEQUOTE__SINGLEQUOTE_)], null);
if(cljs.core.truth_((function (){var and__5023__auto__ = max_SINGLEQUOTE_;
if(cljs.core.truth_(and__5023__auto__)){
return max_SINGLEQUOTE__SINGLEQUOTE_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.call(null,G__5312,new cljs.core.Keyword(null,"max","max",61366548),f.call(null,max_SINGLEQUOTE_,max_SINGLEQUOTE__SINGLEQUOTE_));
} else {
return G__5312;
}
});
malli.core._re_alt_min_max = (function malli$core$_re_alt_min_max(p__5313,child){
var map__5314 = p__5313;
var map__5314__$1 = cljs.core.__destructure_map.call(null,map__5314);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__5314__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__5314__$1,new cljs.core.Keyword(null,"max","max",61366548));
var map__5315 = malli.core._regex_min_max.call(null,child,true);
var map__5315__$1 = cljs.core.__destructure_map.call(null,map__5315);
var min_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.get.call(null,map__5315__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.get.call(null,map__5315__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__5316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(function (){var x__5113__auto__ = (function (){var or__5025__auto__ = min_SINGLEQUOTE_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.impl.util._PLUS_max_size_PLUS_;
}
})();
var y__5114__auto__ = min_SINGLEQUOTE__SINGLEQUOTE_;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})()], null);
if(cljs.core.truth_((function (){var and__5023__auto__ = max_SINGLEQUOTE_;
if(cljs.core.truth_(and__5023__auto__)){
return max_SINGLEQUOTE__SINGLEQUOTE_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.call(null,G__5316,new cljs.core.Keyword(null,"max","max",61366548),(function (){var x__5110__auto__ = max_SINGLEQUOTE_;
var y__5111__auto__ = max_SINGLEQUOTE__SINGLEQUOTE_;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
} else {
return G__5316;
}
});
malli.core._register_var = (function malli$core$_register_var(var_args){
var G__5318 = arguments.length;
switch (G__5318) {
case 3:
return malli.core._register_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.core._register_var.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._register_var.cljs$core$IFn$_invoke$arity$3 = (function (registry,vname,vval){
return malli.core._register_var.call(null,registry,vname,vval,vval);
}));

(malli.core._register_var.cljs$core$IFn$_invoke$arity$4 = (function (registry,vname,vval,pred){
var schema = malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),vname,new cljs.core.Keyword(null,"pred","pred",1927423397),pred], null));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,registry,vname,schema),vval,schema);
}));

(malli.core._register_var.cljs$lang$maxFixedArity = 4);

malli.core._registry = (function malli$core$_registry(var_args){
var G__5321 = arguments.length;
switch (G__5321) {
case 0:
return malli.core._registry.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._registry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._registry.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core.default_registry;
}));

(malli.core._registry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var or__5025__auto__ = (cljs.core.truth_(opts)?malli.registry.registry.call(null,opts.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018))):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core.default_registry;
}
}));

(malli.core._registry.cljs$lang$maxFixedArity = 1);

malli.core._property_registry = (function malli$core$_property_registry(m,options,f){
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword("malli.core","allow-invalid-refs","malli.core/allow-invalid-refs",-1863169617),true);
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,f.call(null,malli.core.schema.call(null,v,options__$1)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
malli.core._delayed_registry = (function malli$core$_delayed_registry(m,f){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,(function (){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5323 = (function (m,f,acc,k,v,meta5324){
this.m = m;
this.f = f;
this.acc = acc;
this.k = k;
this.v = v;
this.meta5324 = meta5324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5325,meta5324__$1){
var self__ = this;
var _5325__$1 = this;
return (new malli.core.t_malli$core5323(self__.m,self__.f,self__.acc,self__.k,self__.v,meta5324__$1));
}));

(malli.core.t_malli$core5323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5325){
var self__ = this;
var _5325__$1 = this;
return self__.meta5324;
}));

(malli.core.t_malli$core5323.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5323.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (_,___$1,___$2,options){
var self__ = this;
var ___$3 = this;
return self__.f.call(null,self__.v,options);
}));

(malli.core.t_malli$core5323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta5324","meta5324",347965304,null)], null);
}));

(malli.core.t_malli$core5323.cljs$lang$type = true);

(malli.core.t_malli$core5323.cljs$lang$ctorStr = "malli.core/t_malli$core5323");

(malli.core.t_malli$core5323.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5323");
}));

/**
 * Positional factory function for malli.core/t_malli$core5323.
 */
malli.core.__GT_t_malli$core5323 = (function malli$core$_delayed_registry_$___GT_t_malli$core5323(m__$1,f__$1,acc__$1,k__$1,v__$1,meta5324){
return (new malli.core.t_malli$core5323(m__$1,f__$1,acc__$1,k__$1,v__$1,meta5324));
});

}

return (new malli.core.t_malli$core5323(m,f,acc,k,v,cljs.core.PersistentArrayMap.EMPTY));
})()
);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
malli.core._lookup = (function malli$core$_lookup(_QMARK_schema,options){
var registry = malli.core._registry.call(null,options);
var or__5025__auto__ = malli.registry._schema.call(null,registry,_QMARK_schema);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5829__auto__ = (function (){var G__5326 = registry;
if((G__5326 == null)){
return null;
} else {
return malli.registry._schema.call(null,G__5326,cljs.core.type.call(null,_QMARK_schema));
}
})();
if((temp__5829__auto__ == null)){
return null;
} else {
var p = temp__5829__auto__;
if(cljs.core.truth_(malli.core.schema_QMARK_.call(null,_QMARK_schema))){
if(cljs.core._EQ_.call(null,p,malli.core._parent.call(null,_QMARK_schema))){
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","infinitely-expanding-schema","malli.core/infinitely-expanding-schema",-827169082),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),_QMARK_schema], null));
} else {
}
} else {
}

return malli.core._into_schema.call(null,p,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_schema], null),options);
}
}
});
malli.core._lookup_BANG_ = (function malli$core$_lookup_BANG_(_QMARK_schema,_QMARK_form,f,rec,options){
while(true){
var or__5025__auto__ = (function (){var and__5023__auto__ = f;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = f.call(null,_QMARK_schema);
if(cljs.core.truth_(and__5023__auto____$1)){
return _QMARK_schema;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5823__auto__ = malli.core._lookup.call(null,_QMARK_schema,options);
if(cljs.core.truth_(temp__5823__auto__)){
var _QMARK_schema__$1 = temp__5823__auto__;
var G__5327 = _QMARK_schema__$1;
if(cljs.core.truth_(rec)){
var G__5328 = G__5327;
var G__5329 = _QMARK_form;
var G__5330 = f;
var G__5331 = rec;
var G__5332 = options;
_QMARK_schema = G__5328;
_QMARK_form = G__5329;
f = G__5330;
rec = G__5331;
options = G__5332;
continue;
} else {
return G__5327;
}
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-schema","malli.core/invalid-schema",1923990979),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),_QMARK_schema,new cljs.core.Keyword(null,"form","form",-1624062471),_QMARK_form], null));
}
}
break;
}
});
malli.core._properties_and_options = (function malli$core$_properties_and_options(properties,options,f){
var temp__5823__auto__ = new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(temp__5823__auto__)){
var r = temp__5823__auto__;
var options__$1 = malli.core._update.call(null,options,new cljs.core.Keyword(null,"registry","registry",1021159018),(function (p1__5333_SHARP_){
return malli.registry.composite_registry.call(null,r,(function (){var or__5025__auto__ = p1__5333_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._registry.call(null,options);
}
})());
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,properties,new cljs.core.Keyword(null,"registry","registry",1021159018),malli.core._property_registry.call(null,r,options__$1,f)),options__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [properties,options], null);
}
});
malli.core._create_cache = (function malli$core$_create_cache(_options){
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
malli.core._lookup_or_update_cache = (function malli$core$_lookup_or_update_cache(c,k,f){
var or__5025__auto__ = cljs.core.deref.call(null,c).call(null,k);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var r = f.call(null);
cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,k,r);

return r;
}
});
malli.core._cached = (function malli$core$_cached(s,k,f){
if(malli.core._cached_QMARK_.call(null,s)){
var c = malli.core._cache.call(null,s);
var or__5025__auto__ = cljs.core.deref.call(null,c).call(null,k);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var r = f.call(null,s);
cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,k,r);

return r;
}
} else {
return f.call(null,s);
}
});
malli.core._raw_form = (function malli$core$_raw_form(type,properties,children){
var has_children = cljs.core.seq.call(null,children);
var has_properties = cljs.core.seq.call(null,properties);
if(((has_properties) && (has_children))){
return cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,properties], null),children);
} else {
if(has_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,properties], null);
} else {
if(has_children){
var fchild = cljs.core.nth.call(null,children,(0));
return cljs.core.reduce.call(null,cljs.core.conj,(function (){var G__5334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null);
if(((cljs.core.map_QMARK_.call(null,fchild)) || ((fchild == null)))){
return cljs.core.conj.call(null,G__5334,null);
} else {
return G__5334;
}
})(),children);
} else {
return type;

}
}
}
});
malli.core._create_form = (function malli$core$_create_form(type,properties,children,options){
var properties__$1 = ((cljs.core.seq.call(null,properties))?(function (){var registry = new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(properties);
var G__5335 = properties;
if(cljs.core.truth_(registry)){
return cljs.core.assoc.call(null,G__5335,new cljs.core.Keyword(null,"registry","registry",1021159018),malli.core._property_registry.call(null,registry,options,malli.core._form));
} else {
return G__5335;
}
})():null);
return malli.core._raw_form.call(null,type,properties__$1,children);
});
malli.core._simple_form = (function malli$core$_simple_form(parent,properties,children,f,options){
return malli.core._create_form.call(null,malli.core._type.call(null,parent),properties,malli.core._vmap.call(null,f,children),options);
});
malli.core._create_entry_form = (function malli$core$_create_entry_form(parent,properties,entry_parser,options){
return malli.core._create_form.call(null,malli.core._type.call(null,parent),properties,malli.core._entry_forms.call(null,entry_parser),options);
});
malli.core._inner_indexed = (function malli$core$_inner_indexed(walker,path,children,options){
return malli.core._vmap.call(null,(function (p__5336){
var vec__5337 = p__5336;
var i = cljs.core.nth.call(null,vec__5337,(0),null);
var c = cljs.core.nth.call(null,vec__5337,(1),null);
return malli.core._inner.call(null,walker,c,cljs.core.conj.call(null,path,i),options);
}),cljs.core.map_indexed.call(null,cljs.core.vector,children));
});
malli.core._inner_entries = (function malli$core$_inner_entries(walker,path,entries,options){
return malli.core._vmap.call(null,(function (p__5340){
var vec__5341 = p__5340;
var k = cljs.core.nth.call(null,vec__5341,(0),null);
var s = cljs.core.nth.call(null,vec__5341,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._properties.call(null,s),malli.core._inner.call(null,walker,s,cljs.core.conj.call(null,path,k),options)], null);
}),entries);
});
malli.core._walk_entries = (function malli$core$_walk_entries(schema,walker,path,options){
if(cljs.core.truth_(malli.core._accept.call(null,walker,schema,path,options))){
return malli.core._outer.call(null,walker,schema,path,malli.core._inner_entries.call(null,walker,path,malli.core._entries.call(null,schema),options),options);
} else {
return null;
}
});
malli.core._walk_indexed = (function malli$core$_walk_indexed(schema,walker,path,options){
if(cljs.core.truth_(malli.core._accept.call(null,walker,schema,path,options))){
return malli.core._outer.call(null,walker,schema,path,malli.core._inner_indexed.call(null,walker,path,malli.core._children.call(null,schema),options),options);
} else {
return null;
}
});
malli.core._walk_leaf = (function malli$core$_walk_leaf(schema,walker,path,options){
if(cljs.core.truth_(malli.core._accept.call(null,walker,schema,path,options))){
return malli.core._outer.call(null,walker,schema,path,malli.core._children.call(null,schema),options);
} else {
return null;
}
});
malli.core._set_children = (function malli$core$_set_children(schema,children){
if(malli.core._equals.call(null,children,malli.core._children.call(null,schema))){
return schema;
} else {
return malli.core._into_schema.call(null,malli.core._parent.call(null,schema),malli.core._properties.call(null,schema),children,malli.core._options.call(null,schema));
}
});
malli.core._set_properties = (function malli$core$_set_properties(schema,properties){
if(malli.core._equals.call(null,properties,malli.core._properties.call(null,schema))){
return schema;
} else {
return malli.core._into_schema.call(null,malli.core._parent.call(null,schema),properties,(function (){var or__5025__auto__ = (function (){var and__5023__auto__ = malli.core._entry_schema_QMARK_.call(null,schema);
if(and__5023__auto__){
return malli.core._entry_parser.call(null,schema);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._children.call(null,schema);
}
})(),malli.core._options.call(null,schema));
}
});
malli.core._update_properties = (function malli$core$_update_properties(var_args){
var args__5755__auto__ = [];
var len__5749__auto___5347 = arguments.length;
var i__5750__auto___5348 = (0);
while(true){
if((i__5750__auto___5348 < len__5749__auto___5347)){
args__5755__auto__.push((arguments[i__5750__auto___5348]));

var G__5349 = (i__5750__auto___5348 + (1));
i__5750__auto___5348 = G__5349;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return malli.core._update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(malli.core._update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (schema,f,args){
return malli.core._set_properties.call(null,schema,cljs.core.not_empty.call(null,cljs.core.apply.call(null,f,malli.core._properties.call(null,schema),args)));
}));

(malli.core._update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(malli.core._update_properties.cljs$lang$applyTo = (function (seq5344){
var G__5345 = cljs.core.first.call(null,seq5344);
var seq5344__$1 = cljs.core.next.call(null,seq5344);
var G__5346 = cljs.core.first.call(null,seq5344__$1);
var seq5344__$2 = cljs.core.next.call(null,seq5344__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5345,G__5346,seq5344__$2);
}));

malli.core._update_options = (function malli$core$_update_options(schema,f){
return malli.core._into_schema.call(null,malli.core._parent.call(null,schema),malli.core._properties.call(null,schema),malli.core._children.call(null,schema),f.call(null,malli.core._options.call(null,schema)));
});
malli.core._set_assoc_children = (function malli$core$_set_assoc_children(schema,key,value){
return malli.core._set_children.call(null,schema,cljs.core.assoc.call(null,malli.core._children.call(null,schema),key,value));
});
malli.core._get_entries = (function malli$core$_get_entries(schema,key,default$){
var or__5025__auto__ = cljs.core.some.call(null,((((cljs.core.vector_QMARK_.call(null,key)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("malli.core","find","malli.core/find",163301512),cljs.core.nth.call(null,key,(0))))))?(function (e){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),cljs.core.nth.call(null,key,(1)))){
return e;
} else {
return null;
}
}):(function (e){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),key)){
return cljs.core.nth.call(null,e,(2));
} else {
return null;
}
})),malli.core._children.call(null,schema));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
});
malli.core._simple_entry_parser = (function malli$core$_simple_entry_parser(keyset,children,forms){
var entries = cljs.core.map.call(null,(function (p__5350){
var vec__5351 = p__5350;
var k = cljs.core.nth.call(null,vec__5351,(0),null);
var p = cljs.core.nth.call(null,vec__5351,(1),null);
var s = cljs.core.nth.call(null,vec__5351,(2),null);
return malli.impl.util._entry.call(null,k,malli.core._val_schema.call(null,s,p));
}),children);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.EntryParser}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5354 = (function (keyset,children,forms,entries,meta5355){
this.keyset = keyset;
this.children = children;
this.forms = forms;
this.entries = entries;
this.meta5355 = meta5355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5356,meta5355__$1){
var self__ = this;
var _5356__$1 = this;
return (new malli.core.t_malli$core5354(self__.keyset,self__.children,self__.forms,self__.entries,meta5355__$1));
}));

(malli.core.t_malli$core5354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5356){
var self__ = this;
var _5356__$1 = this;
return self__.meta5355;
}));

(malli.core.t_malli$core5354.prototype.malli$core$EntryParser$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5354.prototype.malli$core$EntryParser$_entry_keyset$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keyset;
}));

(malli.core.t_malli$core5354.prototype.malli$core$EntryParser$_entry_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5354.prototype.malli$core$EntryParser$_entry_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.entries;
}));

(malli.core.t_malli$core5354.prototype.malli$core$EntryParser$_entry_forms$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.forms;
}));

(malli.core.t_malli$core5354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyset","keyset",2135291099,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"entries","entries",1553588366,null),new cljs.core.Symbol(null,"meta5355","meta5355",-1815141531,null)], null);
}));

(malli.core.t_malli$core5354.cljs$lang$type = true);

(malli.core.t_malli$core5354.cljs$lang$ctorStr = "malli.core/t_malli$core5354");

(malli.core.t_malli$core5354.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5354");
}));

/**
 * Positional factory function for malli.core/t_malli$core5354.
 */
malli.core.__GT_t_malli$core5354 = (function malli$core$_simple_entry_parser_$___GT_t_malli$core5354(keyset__$1,children__$1,forms__$1,entries__$1,meta5355){
return (new malli.core.t_malli$core5354(keyset__$1,children__$1,forms__$1,entries__$1,meta5355));
});

}

return (new malli.core.t_malli$core5354(keyset,children,forms,entries,cljs.core.PersistentArrayMap.EMPTY));
});
malli.core._update_parsed = (function malli$core$_update_parsed(entry_parser,_QMARK_key,value,options){
var vec__5357 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.vector_QMARK_.call(null,_QMARK_key);
if(and__5023__auto__){
return cljs.core.nth.call(null,_QMARK_key,(0));
} else {
return and__5023__auto__;
}
})())?cljs.core.cons.call(null,true,_QMARK_key):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,_QMARK_key], null));
var override = cljs.core.nth.call(null,vec__5357,(0),null);
var k = cljs.core.nth.call(null,vec__5357,(1),null);
var p = cljs.core.nth.call(null,vec__5357,(2),null);
var keyset = malli.core._entry_keyset.call(null,entry_parser);
var children = malli.core._entry_children.call(null,entry_parser);
var forms = malli.core._entry_forms.call(null,entry_parser);
var s = (cljs.core.truth_(value)?malli.core.schema.call(null,value,options):null);
var i = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(keyset.call(null,k));
if((s == null)){
var cut = (function malli$core$_update_parsed_$_cut(v){
return cljs.core.into.call(null,cljs.core.subvec.call(null,v,(0),i),cljs.core.subvec.call(null,v,(i + (1))));
});
return malli.core._simple_entry_parser.call(null,cljs.core.dissoc.call(null,keyset,k),cut.call(null,children),cut.call(null,forms));
} else {
var p__$1 = (cljs.core.truth_(i)?(cljs.core.truth_(override)?p:cljs.core.nth.call(null,children.call(null,i),(1))):p);
var c = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p__$1,s], null);
var f = ((cljs.core.seq.call(null,p__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p__$1,malli.core._form.call(null,s)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._form.call(null,s)], null));
if(cljs.core.truth_(i)){
return malli.core._simple_entry_parser.call(null,keyset,cljs.core.assoc.call(null,children,i,c),cljs.core.assoc.call(null,forms,i,f));
} else {
return malli.core._simple_entry_parser.call(null,cljs.core.assoc.call(null,keyset,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.count.call(null,keyset)], null)),cljs.core.conj.call(null,children,c),cljs.core.conj.call(null,forms,f));
}
}
});
malli.core._set_entries = (function malli$core$_set_entries(schema,_QMARK_key,value){
var temp__5823__auto__ = malli.core._entry_parser.call(null,schema);
if(cljs.core.truth_(temp__5823__auto__)){
var entry_parser = temp__5823__auto__;
return malli.core._set_children.call(null,schema,malli.core._update_parsed.call(null,entry_parser,_QMARK_key,value,malli.core._options.call(null,schema)));
} else {
var found = cljs.core.atom.call(null,null);
var vec__5360 = ((cljs.core.vector_QMARK_.call(null,_QMARK_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,_QMARK_key,(0)),cljs.core.second.call(null,_QMARK_key),true], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_key], null));
var key = cljs.core.nth.call(null,vec__5360,(0),null);
var props = cljs.core.nth.call(null,vec__5360,(1),null);
var override = cljs.core.nth.call(null,vec__5360,(2),null);
var children = (function (){var G__5363 = malli.core._vmap.call(null,(function (p__5364){
var vec__5365 = p__5364;
var k = cljs.core.nth.call(null,vec__5365,(0),null);
var p = cljs.core.nth.call(null,vec__5365,(1),null);
var entry = vec__5365;
if(cljs.core._EQ_.call(null,key,k)){
cljs.core.reset_BANG_.call(null,found,true);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(cljs.core.truth_(override)?props:p),value], null);
} else {
return entry;
}
}),malli.core._children.call(null,schema));
var G__5363__$1 = ((cljs.core.not.call(null,cljs.core.deref.call(null,found)))?cljs.core.conj.call(null,G__5363,(cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,props,value], null):malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","key-missing","malli.core/key-missing",-161579801)))):G__5363);
return cljs.core.filter.call(null,(function (e){
return (!((cljs.core.last.call(null,e) == null)));
}),G__5363__$1);

})();
return malli.core._set_children.call(null,schema,children);
}
});
malli.core._parse_entry = (function malli$core$_parse_entry(e,naked_keys,lazy_refs,options,i,_children,_forms,_keyset){
var _collect = (function malli$core$_parse_entry_$__collect(k,c,f,i__$1){
var i__$2 = (i__$1 | (0));
(_keyset[((2) * i__$2)] = k);

(_keyset[(((2) * i__$2) + (1))] = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),i__$2], null));

(_children[i__$2] = c);

(_forms[i__$2] = f);

return (i__$2 + (1));
});
var _schema = (function malli$core$_parse_entry_$__schema(e__$1){
return malli.core.schema.call(null,(function (){var G__5369 = e__$1;
if(cljs.core.truth_((function (){var and__5023__auto__ = malli.core._reference_QMARK_.call(null,e__$1);
if(and__5023__auto__){
return lazy_refs;
} else {
return and__5023__auto__;
}
})())){
return malli.core._lazy.call(null,G__5369,options);
} else {
return G__5369;
}
})(),options);
});
var _parse_ref_entry = (function malli$core$_parse_entry_$__parse_ref_entry(e__$1){
var s = _schema.call(null,e__$1);
var c = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,null,s], null);
return _collect.call(null,e__$1,c,e__$1,i);
});
var _parse_ref_vector1 = (function malli$core$_parse_entry_$__parse_ref_vector1(e__$1,e0){
var s = _schema.call(null,e0);
var c = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,null,s], null);
return _collect.call(null,e0,c,e__$1,i);
});
var _parse_ref_vector2 = (function malli$core$_parse_entry_$__parse_ref_vector2(e__$1,e0,e1){
var s = _schema.call(null,e0);
var c = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,e1,s], null);
return _collect.call(null,e0,c,e__$1,i);
});
var _parse_entry_else2 = (function malli$core$_parse_entry_$__parse_entry_else2(e0,e1){
var s = _schema.call(null,e1);
var f = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,malli.core._form.call(null,s)], null);
var c = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,null,s], null);
return _collect.call(null,e0,c,f,i);
});
var _parse_entry_else3 = (function malli$core$_parse_entry_$__parse_entry_else3(e0,e1,e2){
var s = _schema.call(null,e2);
var f_SINGLEQUOTE_ = malli.core._form.call(null,s);
var f = (cljs.core.truth_(e1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,e1,f_SINGLEQUOTE_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,f_SINGLEQUOTE_], null));
var c = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0,e1,s], null);
return _collect.call(null,e0,c,f,i);
});
if(cljs.core.vector_QMARK_.call(null,e)){
var ea = cljs.core.object_array.call(null,e);
var n = ea.length;
var e0 = (ea[(0)]);
if((n === (1))){
if(cljs.core.truth_((function (){var and__5023__auto__ = malli.core._reference_QMARK_.call(null,e0);
if(and__5023__auto__){
return naked_keys;
} else {
return and__5023__auto__;
}
})())){
return _parse_ref_vector1.call(null,e,e0);
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-entry","malli.core/invalid-entry",-1401097281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),e], null));
}
} else {
var e1 = (ea[(1)]);
if((n === (2))){
if(((malli.core._reference_QMARK_.call(null,e0)) && (cljs.core.map_QMARK_.call(null,e1)))){
if(cljs.core.truth_(naked_keys)){
return _parse_ref_vector2.call(null,e,e0,e1);
} else {
return i;
}
} else {
return _parse_entry_else2.call(null,e0,e1);
}
} else {
var e2 = (ea[(2)]);
return _parse_entry_else3.call(null,e0,e1,e2);
}
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = naked_keys;
if(cljs.core.truth_(and__5023__auto__)){
return malli.core._reference_QMARK_.call(null,e);
} else {
return and__5023__auto__;
}
})())){
return _parse_ref_entry.call(null,e);
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-entry","malli.core/invalid-entry",-1401097281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),e], null));
}
}
});
malli.core._eager_entry_parser = (function malli$core$_eager_entry_parser(children,props,options){
var _vec = (function malli$core$_eager_entry_parser_$__vec(arr){
return cljs.core.vec.call(null,arr);
});
var _map = (function malli$core$_eager_entry_parser_$__map(arr){
var m = cljs.core.apply.call(null,cljs.core.array_map,arr);
if(cljs.core._EQ_.call(null,((2) * cljs.core.count.call(null,m)),cljs.core.count.call(null,arr))){
} else {
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","duplicate-keys","malli.core/duplicate-keys",1684166326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arr","arr",474961448),arr], null));
}

return m;
});
var _arange = (function malli$core$_eager_entry_parser_$__arange(arr,to){
return arr.slice((0),to);
});
var map__5371 = props;
var map__5371__$1 = cljs.core.__destructure_map.call(null,map__5371);
var naked_keys = cljs.core.get.call(null,map__5371__$1,new cljs.core.Keyword(null,"naked-keys","naked-keys",-90769828));
var lazy_refs = cljs.core.get.call(null,map__5371__$1,new cljs.core.Keyword(null,"lazy-refs","lazy-refs",409178818));
var ca = cljs.core.object_array.call(null,children);
var n = ca.length;
var _children = cljs.core.object_array.call(null,n);
var _forms = cljs.core.object_array.call(null,n);
var _keyset = cljs.core.object_array.call(null,((2) * n));
var i = ((0) | (0));
var ci = ((0) | (0));
while(true){
if((ci === n)){
var f = (((ci === i))?_vec:((function (i,ci,map__5371,map__5371__$1,naked_keys,lazy_refs,ca,n,_children,_forms,_keyset){
return (function (p1__5370_SHARP_){
return _vec.call(null,_arange.call(null,p1__5370_SHARP_,i));
});})(i,ci,map__5371,map__5371__$1,naked_keys,lazy_refs,ca,n,_children,_forms,_keyset))
);
return malli.core._simple_entry_parser.call(null,_map.call(null,_keyset),f.call(null,_children),f.call(null,_forms));
} else {
var G__5372 = (malli.core._parse_entry.call(null,(ca[i]),naked_keys,lazy_refs,options,i,_children,_forms,_keyset) | (0));
var G__5373 = (ci + (1));
i = G__5372;
ci = G__5373;
continue;
}
break;
}
});
malli.core._lazy_entry_parser = (function malli$core$_lazy_entry_parser(_QMARK_children,props,options){
var parser = (new cljs.core.Delay((function (){
return malli.core._eager_entry_parser.call(null,_QMARK_children,props,options);
}),null));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.EntryParser}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5374 = (function (_QMARK_children,props,options,parser,meta5375){
this._QMARK_children = _QMARK_children;
this.props = props;
this.options = options;
this.parser = parser;
this.meta5375 = meta5375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5376,meta5375__$1){
var self__ = this;
var _5376__$1 = this;
return (new malli.core.t_malli$core5374(self__._QMARK_children,self__.props,self__.options,self__.parser,meta5375__$1));
}));

(malli.core.t_malli$core5374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5376){
var self__ = this;
var _5376__$1 = this;
return self__.meta5375;
}));

(malli.core.t_malli$core5374.prototype.malli$core$EntryParser$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5374.prototype.malli$core$EntryParser$_entry_keyset$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_keyset.call(null,cljs.core.deref.call(null,self__.parser));
}));

(malli.core.t_malli$core5374.prototype.malli$core$EntryParser$_entry_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_children.call(null,cljs.core.deref.call(null,self__.parser));
}));

(malli.core.t_malli$core5374.prototype.malli$core$EntryParser$_entry_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_entries.call(null,cljs.core.deref.call(null,self__.parser));
}));

(malli.core.t_malli$core5374.prototype.malli$core$EntryParser$_entry_forms$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_forms.call(null,cljs.core.deref.call(null,self__.parser));
}));

(malli.core.t_malli$core5374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children","?children",2075030425,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"parser","parser",97036217,null),new cljs.core.Symbol(null,"meta5375","meta5375",1329176435,null)], null);
}));

(malli.core.t_malli$core5374.cljs$lang$type = true);

(malli.core.t_malli$core5374.cljs$lang$ctorStr = "malli.core/t_malli$core5374");

(malli.core.t_malli$core5374.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5374");
}));

/**
 * Positional factory function for malli.core/t_malli$core5374.
 */
malli.core.__GT_t_malli$core5374 = (function malli$core$_lazy_entry_parser_$___GT_t_malli$core5374(_QMARK_children__$1,props__$1,options__$1,parser__$1,meta5375){
return (new malli.core.t_malli$core5374(_QMARK_children__$1,props__$1,options__$1,parser__$1,meta5375));
});

}

return (new malli.core.t_malli$core5374(_QMARK_children,props,options,parser,cljs.core.PersistentArrayMap.EMPTY));
});
malli.core._create_entry_parser = (function malli$core$_create_entry_parser(_QMARK_children,props,options){
if(malli.core._entry_parser_QMARK_.call(null,_QMARK_children)){
return _QMARK_children;
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"lazy","lazy",-424547181).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("malli.core","lazy-entries","malli.core/lazy-entries",762112361).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
return malli.core._lazy_entry_parser.call(null,_QMARK_children,props,options);
} else {
return malli.core._eager_entry_parser.call(null,_QMARK_children,props,options);

}
}
});
malli.core._default_entry = (function malli$core$_default_entry(e){
return malli.core._equals.call(null,cljs.core.nth.call(null,e,(0)),new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176));
});
malli.core._default_entry_schema = (function malli$core$_default_entry_schema(children){
return cljs.core.some.call(null,(function (e){
if(malli.core._default_entry.call(null,e)){
return cljs.core.nth.call(null,e,(2));
} else {
return null;
}
}),children);
});
malli.core._no_op_transformer = (function malli$core$_no_op_transformer(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.Transformer}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5377 = (function (meta5378){
this.meta5378 = meta5378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5379,meta5378__$1){
var self__ = this;
var _5379__$1 = this;
return (new malli.core.t_malli$core5377(meta5378__$1));
}));

(malli.core.t_malli$core5377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5379){
var self__ = this;
var _5379__$1 = this;
return self__.meta5378;
}));

(malli.core.t_malli$core5377.prototype.malli$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5377.prototype.malli$core$Transformer$_transformer_chain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5377.prototype.malli$core$Transformer$_value_transformer$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(malli.core.t_malli$core5377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5378","meta5378",-1622812971,null)], null);
}));

(malli.core.t_malli$core5377.cljs$lang$type = true);

(malli.core.t_malli$core5377.cljs$lang$ctorStr = "malli.core/t_malli$core5377");

(malli.core.t_malli$core5377.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5377");
}));

/**
 * Positional factory function for malli.core/t_malli$core5377.
 */
malli.core.__GT_t_malli$core5377 = (function malli$core$_no_op_transformer_$___GT_t_malli$core5377(meta5378){
return (new malli.core.t_malli$core5377(meta5378));
});

}

return (new malli.core.t_malli$core5377(cljs.core.PersistentArrayMap.EMPTY));
});
malli.core._intercepting = (function malli$core$_intercepting(var_args){
var G__5381 = arguments.length;
switch (G__5381) {
case 1:
return malli.core._intercepting.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core._intercepting.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._intercepting.cljs$core$IFn$_invoke$arity$1 = (function (interceptor){
return malli.core._intercepting.call(null,interceptor,null);
}));

(malli.core._intercepting.cljs$core$IFn$_invoke$arity$2 = (function (p__5382,f){
var map__5383 = p__5382;
var map__5383__$1 = cljs.core.__destructure_map.call(null,map__5383);
var enter = cljs.core.get.call(null,map__5383__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.call(null,map__5383__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var comp_some = (function malli$core$comp_some(a,b){
if(cljs.core.truth_((function (){var and__5023__auto__ = a;
if(cljs.core.truth_(and__5023__auto__)){
return b;
} else {
return and__5023__auto__;
}
})())){
return malli.core._comp.call(null,a,b);
} else {
var or__5025__auto__ = a;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return b;
}
}
});
return comp_some.call(null,leave,comp_some.call(null,f,enter));
}));

(malli.core._intercepting.cljs$lang$maxFixedArity = 2);

malli.core._into_transformer = (function malli$core$_into_transformer(x){
if(malli.core._transformer_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.fn_QMARK_.call(null,x)){
return malli.core._into_transformer.call(null,x.call(null));
} else {
if((x == null)){
return malli.core._no_op_transformer.call(null);
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-transformer","malli.core/invalid-transformer",962129811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null));

}
}
}
});
malli.core._parent_children_transformer = (function malli$core$_parent_children_transformer(parent,children,transformer,method,options){
var parent_transformer = malli.core._value_transformer.call(null,transformer,parent,method,options);
var child_transformer = cljs.core.reduce.call(null,(function (acc,child){
var transformer__$1 = malli.core._transformer.call(null,child,transformer,method,options);
if(cljs.core.truth_(acc)){
if(cljs.core.truth_(transformer__$1)){
return malli.core._comp.call(null,transformer__$1,acc);
} else {
return acc;
}
} else {
return transformer__$1;
}
}),null,children);
return malli.core._intercepting.call(null,parent_transformer,child_transformer);
});
malli.core._map_transformer = (function malli$core$_map_transformer(ts){
return (function (x){
return cljs.core.reduce.call(null,(function malli$core$_map_transformer_$_child_transformer(m,p__5385){
var vec__5386 = p__5385;
var k = cljs.core.nth.call(null,vec__5386,(0),null);
var t = cljs.core.nth.call(null,vec__5386,(1),null);
var temp__5823__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5823__auto__)){
var entry = temp__5823__auto__;
return cljs.core.assoc.call(null,m,k,t.call(null,cljs.core.val.call(null,entry)));
} else {
return m;
}
}),x,ts);
});
});
malli.core._tuple_transformer = (function malli$core$_tuple_transformer(ts){
return (function (x){
return cljs.core.reduce_kv.call(null,malli.core._update,x,ts);
});
});
malli.core._collection_transformer = (function malli$core$_collection_transformer(t,empty){
return (function (x){
return cljs.core.into.call(null,(cljs.core.truth_(x)?empty:null),cljs.core.map.call(null,t),x);
});
});
malli.core._or_transformer = (function malli$core$_or_transformer(this$,transformer,child_schemas,method,options){
var this_transformer = malli.core._value_transformer.call(null,transformer,this$,method,options);
if(cljs.core.seq.call(null,child_schemas)){
var transformers = malli.core._vmap.call(null,(function (p1__5389_SHARP_){
var or__5025__auto__ = malli.core._transformer.call(null,p1__5389_SHARP_,transformer,method,options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
}),child_schemas);
var validators = malli.core._vmap.call(null,malli.core._validator,child_schemas);
return malli.core._intercepting.call(null,this_transformer,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"decode","decode",-1306165281),method))?(function (x){
return cljs.core.reduce_kv.call(null,(function (acc,i,transformer__$1){
var x_STAR_ = transformer__$1.call(null,x);
if(cljs.core.truth_(cljs.core.nth.call(null,validators,i).call(null,x_STAR_))){
return cljs.core.reduced.call(null,x_STAR_);
} else {
if(malli.core._equals.call(null,acc,new cljs.core.Keyword("malli.core","nil","malli.core/nil",296405773))){
return x_STAR_;
} else {
return acc;
}
}
}),new cljs.core.Keyword("malli.core","nil","malli.core/nil",296405773),transformers);
}):(function (x){
return cljs.core.reduce_kv.call(null,(function (x__$1,i,validator){
if(cljs.core.truth_(validator.call(null,x__$1))){
return cljs.core.reduced.call(null,cljs.core.nth.call(null,transformers,i).call(null,x__$1));
} else {
return x__$1;
}
}),x,validators);
})));
} else {
return malli.core._intercepting.call(null,this_transformer);
}
});
malli.core._parse_entry_ast = (function malli$core$_parse_entry_ast(ast,options){
var ast_entry_order = new cljs.core.Keyword("malli.core","ast-entry-order","malli.core/ast-entry-order",-659579476).cljs$core$IFn$_invoke$arity$1(options);
var keyset = new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(ast);
var __GT_child = (function (p__5391){
var vec__5392 = p__5391;
var k = cljs.core.nth.call(null,vec__5392,(0),null);
var v = cljs.core.nth.call(null,vec__5392,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(v),malli.core.from_ast.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v),options)], null);
});
var children = (new cljs.core.Delay((function (){
return malli.core._vmap.call(null,__GT_child,(function (){var G__5395 = keyset;
if(cljs.core.truth_(ast_entry_order)){
return cljs.core.sort_by.call(null,(function (p1__5390_SHARP_){
return new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__5390_SHARP_));
}),keyset,G__5395);
} else {
return G__5395;
}
})());
}),null));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.EntryParser}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5396 = (function (ast,options,ast_entry_order,keyset,__GT_child,children,meta5397){
this.ast = ast;
this.options = options;
this.ast_entry_order = ast_entry_order;
this.keyset = keyset;
this.__GT_child = __GT_child;
this.children = children;
this.meta5397 = meta5397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5398,meta5397__$1){
var self__ = this;
var _5398__$1 = this;
return (new malli.core.t_malli$core5396(self__.ast,self__.options,self__.ast_entry_order,self__.keyset,self__.__GT_child,self__.children,meta5397__$1));
}));

(malli.core.t_malli$core5396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5398){
var self__ = this;
var _5398__$1 = this;
return self__.meta5397;
}));

(malli.core.t_malli$core5396.prototype.malli$core$EntryParser$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5396.prototype.malli$core$EntryParser$_entry_keyset$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keyset;
}));

(malli.core.t_malli$core5396.prototype.malli$core$EntryParser$_entry_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.children);
}));

(malli.core.t_malli$core5396.prototype.malli$core$EntryParser$_entry_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._vmap.call(null,(function (p__5399){
var vec__5400 = p__5399;
var k = cljs.core.nth.call(null,vec__5400,(0),null);
var p = cljs.core.nth.call(null,vec__5400,(1),null);
var s = cljs.core.nth.call(null,vec__5400,(2),null);
return malli.impl.util._entry.call(null,k,malli.core._val_schema.call(null,s,p));
}),cljs.core.deref.call(null,self__.children));
}));

(malli.core.t_malli$core5396.prototype.malli$core$EntryParser$_entry_forms$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._vmap.call(null,(function (p__5403){
var vec__5404 = p__5403;
var k = cljs.core.nth.call(null,vec__5404,(0),null);
var p = cljs.core.nth.call(null,vec__5404,(1),null);
var v = cljs.core.nth.call(null,vec__5404,(2),null);
if(cljs.core.truth_(p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p,malli.core._form.call(null,v)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._form.call(null,v)], null);
}
}),cljs.core.deref.call(null,self__.children));
}));

(malli.core.t_malli$core5396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",780197459,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"ast-entry-order","ast-entry-order",825309915,null),new cljs.core.Symbol(null,"keyset","keyset",2135291099,null),new cljs.core.Symbol(null,"->child","->child",-1245989531,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"meta5397","meta5397",-1484278656,null)], null);
}));

(malli.core.t_malli$core5396.cljs$lang$type = true);

(malli.core.t_malli$core5396.cljs$lang$ctorStr = "malli.core/t_malli$core5396");

(malli.core.t_malli$core5396.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5396");
}));

/**
 * Positional factory function for malli.core/t_malli$core5396.
 */
malli.core.__GT_t_malli$core5396 = (function malli$core$_parse_entry_ast_$___GT_t_malli$core5396(ast__$1,options__$1,ast_entry_order__$1,keyset__$1,__GT_child__$1,children__$1,meta5397){
return (new malli.core.t_malli$core5396(ast__$1,options__$1,ast_entry_order__$1,keyset__$1,__GT_child__$1,children__$1,meta5397));
});

}

return (new malli.core.t_malli$core5396(ast,options,ast_entry_order,keyset,__GT_child,children,cljs.core.PersistentArrayMap.EMPTY));
});
malli.core._from_entry_ast = (function malli$core$_from_entry_ast(parent,ast,options){
return malli.core._into_schema.call(null,parent,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),malli.core._parse_entry_ast.call(null,ast,options),options);
});
malli.core._ast = (function malli$core$_ast(acc,properties,options){
var registry = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(temp__5825__auto__)){
var registry = temp__5825__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5407){
var vec__5408 = p__5407;
var k = cljs.core.nth.call(null,vec__5408,(0),null);
var v = cljs.core.nth.call(null,vec__5408,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core.ast.call(null,v,options)], null);
})),registry);
} else {
return null;
}
})();
var properties__$1 = cljs.core.not_empty.call(null,(function (){var G__5411 = properties;
if(cljs.core.truth_(registry)){
return cljs.core.dissoc.call(null,G__5411,new cljs.core.Keyword(null,"registry","registry",1021159018));
} else {
return G__5411;
}
})());
var G__5412 = acc;
var G__5412__$1 = (cljs.core.truth_(properties__$1)?cljs.core.assoc.call(null,G__5412,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1):G__5412);
if(cljs.core.truth_(registry)){
return cljs.core.assoc.call(null,G__5412__$1,new cljs.core.Keyword(null,"registry","registry",1021159018),registry);
} else {
return G__5412__$1;
}
});
malli.core._entry_ast = (function malli$core$_entry_ast(schema,keyset){
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.call(null,schema),new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.reduce.call(null,(function (acc,p__5413){
var vec__5414 = p__5413;
var k = cljs.core.nth.call(null,vec__5414,(0),null);
var p = cljs.core.nth.call(null,vec__5414,(1),null);
var s = cljs.core.nth.call(null,vec__5414,(2),null);
return cljs.core.assoc.call(null,acc,k,(function (){var G__5417 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,keyset,k)),new cljs.core.Keyword(null,"value","value",305978217),malli.core.ast.call(null,s)], null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.call(null,G__5417,new cljs.core.Keyword(null,"properties","properties",685819552),p);
} else {
return G__5417;
}
})());
}),cljs.core.PersistentArrayMap.EMPTY,malli.core._children.call(null,schema))], null),malli.core._properties.call(null,schema),malli.core._options.call(null,schema));
});
malli.core._from_child_ast = (function malli$core$_from_child_ast(parent,ast,options){
return malli.core._into_schema.call(null,parent,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core.from_ast.call(null,new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(ast),options)], null),options);
});
malli.core._to_child_ast = (function malli$core$_to_child_ast(schema){
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.call(null,schema),new cljs.core.Keyword(null,"child","child",623967545),malli.core.ast.call(null,cljs.core.nth.call(null,malli.core._children.call(null,schema),(0)))], null),malli.core._properties.call(null,schema),malli.core._options.call(null,schema));
});
malli.core._from_value_ast = (function malli$core$_from_value_ast(parent,ast,options){
return malli.core._into_schema.call(null,parent,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null);
} else {
return null;
}
})(),options);
});
malli.core._to_value_ast = (function malli$core$_to_value_ast(schema){
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.call(null,schema),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,malli.core._children.call(null,schema),(0))], null),malli.core._properties.call(null,schema),malli.core._options.call(null,schema));
});
malli.core._from_type_ast = (function malli$core$_from_type_ast(parent,ast,options){
return malli.core._into_schema.call(null,parent,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),null,options);
});
malli.core._to_type_ast = (function malli$core$_to_type_ast(schema){
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.call(null,schema)], null),malli.core._properties.call(null,schema),malli.core._options.call(null,schema));
});
malli.core._min_max_pred = (function malli$core$_min_max_pred(f){
return (function (p__5418){
var map__5419 = p__5418;
var map__5419__$1 = cljs.core.__destructure_map.call(null,map__5419);
var min = cljs.core.get.call(null,map__5419__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5419__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.not.call(null,(function (){var or__5025__auto__ = min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return max;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return max;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return f;
} else {
return and__5023__auto__;
}
})())){
return (function (x){
var size = f.call(null,x);
return (((min <= size)) && ((size <= max)));
});
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return max;
} else {
return and__5023__auto__;
}
})())){
return (function (x){
return (((min <= x)) && ((x <= max)));
});
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return f;
} else {
return and__5023__auto__;
}
})())){
return (function (x){
return (min <= f.call(null,x));
});
} else {
if(cljs.core.truth_(min)){
return (function (x){
return (min <= x);
});
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = max;
if(cljs.core.truth_(and__5023__auto__)){
return f;
} else {
return and__5023__auto__;
}
})())){
return (function (x){
return (f.call(null,x) <= max);
});
} else {
if(cljs.core.truth_(max)){
return (function (x){
return (x <= max);
});
} else {
return null;
}
}
}
}
}
}
}
});
});
malli.core._safe_count = (function malli$core$_safe_count(x){
if(cljs.core.truth_(malli.core._safely_countable_QMARK_.call(null,x))){
return cljs.core.count.call(null,x);
} else {
return cljs.core.reduce.call(null,(function (cnt,_){
return (cnt + (1));
}),(0),x);
}
});
malli.core._validate_limits = (function malli$core$_validate_limits(min,max){
var or__5025__auto__ = malli.core._min_max_pred.call(null,malli.core._safe_count).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
});
malli.core._needed_bounded_checks = (function malli$core$_needed_bounded_checks(min,max,options){
var x__5110__auto__ = (function (){var x__5110__auto__ = (function (){var or__5025__auto__ = (function (){var G__5420 = max;
if((G__5420 == null)){
return null;
} else {
return (G__5420 + (1));
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var y__5111__auto__ = (function (){var or__5025__auto__ = min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = new cljs.core.Keyword("malli.core","coll-check-limit","malli.core/coll-check-limit",956583593).cljs$core$IFn$_invoke$arity$2(options,(101));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
});
malli.core._validate_bounded_limits = (function malli$core$_validate_bounded_limits(needed,min,max){
var or__5025__auto__ = malli.core._min_max_pred.call(null,(function (p1__5421_SHARP_){
return cljs.core.bounded_count.call(null,needed,p1__5421_SHARP_);
})).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
});
malli.core._qualified_keyword_pred = (function malli$core$_qualified_keyword_pred(properties){
var temp__5825__auto__ = (function (){var G__5422 = properties;
var G__5422__$1 = (((G__5422 == null))?null:new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(G__5422));
if((G__5422__$1 == null)){
return null;
} else {
return cljs.core.name.call(null,G__5422__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var ns_name = temp__5825__auto__;
return (function (x){
return cljs.core._EQ_.call(null,cljs.core.namespace.call(null,x),ns_name);
});
} else {
return null;
}
});
malli.core._simple_parser = (function malli$core$_simple_parser(s){
var validator = malli.core._validator.call(null,s);
return (function (x){
if(cljs.core.truth_(validator.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
});
});
malli.core._simple_schema = (function malli$core$_simple_schema(props){
var map__5423 = props;
var map__5423__$1 = cljs.core.__destructure_map.call(null,map__5423);
var property_pred = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729));
var compile = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
var to_ast = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"to-ast","to-ast",-21935298),malli.core._to_type_ast);
var min = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var type_properties = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
var pred = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var type = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var from_ast = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"from-ast","from-ast",-246238449),malli.core._from_value_ast);
var max = cljs.core.get.call(null,map__5423__$1,new cljs.core.Keyword(null,"max","max",61366548),(0));
if(cljs.core.fn_QMARK_.call(null,props)){
malli.core._deprecated_BANG_.call(null,"-simple-schema doesn't take fn-props, use :compile property instead");

return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (c,p,_){
return props.call(null,c,p);
})], null));
} else {
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5424 = (function (property_pred,compile,to_ast,map__5423,props,min,type_properties,pred,type,from_ast,max,meta5425){
this.property_pred = property_pred;
this.compile = compile;
this.to_ast = to_ast;
this.map__5423 = map__5423;
this.props = props;
this.min = min;
this.type_properties = type_properties;
this.pred = pred;
this.type = type;
this.from_ast = from_ast;
this.max = max;
this.meta5425 = meta5425;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5426,meta5425__$1){
var self__ = this;
var _5426__$1 = this;
return (new malli.core.t_malli$core5424(self__.property_pred,self__.compile,self__.to_ast,self__.map__5423,self__.props,self__.min,self__.type_properties,self__.pred,self__.type,self__.from_ast,self__.max,meta5425__$1));
}));

(malli.core.t_malli$core5424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5426){
var self__ = this;
var _5426__$1 = this;
return self__.meta5425;
}));

(malli.core.t_malli$core5424.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5424.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return self__.from_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5424.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5424.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.core.t_malli$core5424.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type_properties;
}));

(malli.core.t_malli$core5424.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5424.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5424.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
if(cljs.core.truth_(self__.compile)){
return malli.core._into_schema.call(null,malli.core._simple_schema.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,self__.props,new cljs.core.Keyword(null,"compile","compile",608186429)),self__.compile.call(null,properties,children,options))),properties,children,options);
} else {
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children,cljs.core.identity,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
malli.core._check_children_BANG_.call(null,self__.type,properties,children,self__.min,self__.max);

if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5427 = (function (form,options,property_pred,compile,to_ast,map__5423,props,properties,children,min,type_properties,meta5425,parent,pred,type,from_ast,cache,max,meta5428){
this.form = form;
this.options = options;
this.property_pred = property_pred;
this.compile = compile;
this.to_ast = to_ast;
this.map__5423 = map__5423;
this.props = props;
this.properties = properties;
this.children = children;
this.min = min;
this.type_properties = type_properties;
this.meta5425 = meta5425;
this.parent = parent;
this.pred = pred;
this.type = type;
this.from_ast = from_ast;
this.cache = cache;
this.max = max;
this.meta5428 = meta5428;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5429,meta5428__$1){
var self__ = this;
var _5429__$1 = this;
return (new malli.core.t_malli$core5427(self__.form,self__.options,self__.property_pred,self__.compile,self__.to_ast,self__.map__5423,self__.props,self__.properties,self__.children,self__.min,self__.type_properties,self__.meta5425,self__.parent,self__.pred,self__.type,self__.from_ast,self__.cache,self__.max,meta5428__$1));
}));

(malli.core.t_malli$core5427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5429){
var self__ = this;
var _5429__$1 = this;
return self__.meta5428;
}));

(malli.core.t_malli$core5427.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5427.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return self__.to_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = (cljs.core.truth_(self__.property_pred)?self__.property_pred.call(null,self__.properties):null);
if(cljs.core.truth_(temp__5823__auto__)){
var pvalidator = temp__5823__auto__;
return (function (x){
var and__5023__auto__ = self__.pred.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return pvalidator.call(null,x);
} else {
return and__5023__auto__;
}
});
} else {
return self__.pred;
}
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._intercepting.call(null,malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1));
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_leaf.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var validator = malli.core._validator.call(null,this$__$1);
return (function malli$core$_simple_schema_$_explain(x,in$,acc){
if(cljs.core.not.call(null,validator.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
return acc;
}
});
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5427.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5427.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5427.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5427.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5427.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5427.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,___$1,default$){
var self__ = this;
var ___$2 = this;
return default$;
}));

(malli.core.t_malli$core5427.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,_){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","non-associative-schema","malli.core/non-associative-schema",-588379948),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),this$__$1,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}));

(malli.core.t_malli$core5427.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5427.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5427.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"property-pred","property-pred",-841131040,null),new cljs.core.Symbol(null,"compile","compile",-2046249340,null),new cljs.core.Symbol(null,"to-ast","to-ast",1618596229,null),new cljs.core.Symbol(null,"map__5423","map__5423",-1186191771,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"meta5425","meta5425",-1927586039,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5424","malli.core/t_malli$core5424",-2111024336,null)], null)),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"from-ast","from-ast",1394293078,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"meta5428","meta5428",-770605280,null)], null);
}));

(malli.core.t_malli$core5427.cljs$lang$type = true);

(malli.core.t_malli$core5427.cljs$lang$ctorStr = "malli.core/t_malli$core5427");

(malli.core.t_malli$core5427.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5427");
}));

/**
 * Positional factory function for malli.core/t_malli$core5427.
 */
malli.core.__GT_t_malli$core5427 = (function malli$core$_simple_schema_$___GT_t_malli$core5427(form__$1,options__$1,property_pred__$1,compile__$1,to_ast__$1,map__5423__$1,props__$1,properties__$1,children__$1,min__$1,type_properties__$1,meta5425__$1,parent__$2,pred__$1,type__$1,from_ast__$1,cache__$1,max__$1,meta5428){
return (new malli.core.t_malli$core5427(form__$1,options__$1,property_pred__$1,compile__$1,to_ast__$1,map__5423__$1,props__$1,properties__$1,children__$1,min__$1,type_properties__$1,meta5425__$1,parent__$2,pred__$1,type__$1,from_ast__$1,cache__$1,max__$1,meta5428));
});

}

return (new malli.core.t_malli$core5427(form,options,self__.property_pred,self__.compile,self__.to_ast,self__.map__5423,self__.props,properties,children,self__.min,self__.type_properties,self__.meta5425,parent__$1,self__.pred,self__.type,self__.from_ast,cache,self__.max,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}
}));

(malli.core.t_malli$core5424.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"property-pred","property-pred",-841131040,null),new cljs.core.Symbol(null,"compile","compile",-2046249340,null),new cljs.core.Symbol(null,"to-ast","to-ast",1618596229,null),new cljs.core.Symbol(null,"map__5423","map__5423",-1186191771,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"from-ast","from-ast",1394293078,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"meta5425","meta5425",-1927586039,null)], null);
}));

(malli.core.t_malli$core5424.cljs$lang$type = true);

(malli.core.t_malli$core5424.cljs$lang$ctorStr = "malli.core/t_malli$core5424");

(malli.core.t_malli$core5424.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5424");
}));

/**
 * Positional factory function for malli.core/t_malli$core5424.
 */
malli.core.__GT_t_malli$core5424 = (function malli$core$_simple_schema_$___GT_t_malli$core5424(property_pred__$1,compile__$1,to_ast__$1,map__5423__$2,props__$1,min__$1,type_properties__$1,pred__$1,type__$1,from_ast__$1,max__$1,meta5425){
return (new malli.core.t_malli$core5424(property_pred__$1,compile__$1,to_ast__$1,map__5423__$2,props__$1,min__$1,type_properties__$1,pred__$1,type__$1,from_ast__$1,max__$1,meta5425));
});

}

return (new malli.core.t_malli$core5424(property_pred,compile,to_ast,map__5423__$1,props,min,type_properties,pred,type,from_ast,max,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}
});
malli.core._nil_schema = (function malli$core$_nil_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.nil_QMARK_], null));
});
malli.core._any_schema = (function malli$core$_any_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.any_QMARK_], null));
});
malli.core._some_schema = (function malli$core$_some_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"some","some",-1951079573),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.some_QMARK_], null));
});
malli.core._string_schema = (function malli$core$_string_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.core._min_max_pred.call(null,cljs.core.count)], null));
});
malli.core._int_schema = (function malli$core$_int_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.core._min_max_pred.call(null,null)], null));
});
malli.core._float_schema = (function malli$core$_float_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.float_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.core._min_max_pred.call(null,null)], null));
});
malli.core._double_schema = (function malli$core$_double_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.double_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.core._min_max_pred.call(null,null)], null));
});
malli.core._boolean_schema = (function malli$core$_boolean_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.boolean_QMARK_], null));
});
malli.core._keyword_schema = (function malli$core$_keyword_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.keyword_QMARK_], null));
});
malli.core._symbol_schema = (function malli$core$_symbol_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.symbol_QMARK_], null));
});
malli.core._qualified_keyword_schema = (function malli$core$_qualified_keyword_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.core._qualified_keyword_pred], null));
});
malli.core._qualified_symbol_schema = (function malli$core$_qualified_symbol_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.qualified_symbol_QMARK_], null));
});
malli.core._uuid_schema = (function malli$core$_uuid_schema(){
return malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.uuid_QMARK_], null));
});
malli.core._and_schema = (function malli$core$_and_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5431 = (function (meta5432){
this.meta5432 = meta5432;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5433,meta5432__$1){
var self__ = this;
var _5433__$1 = this;
return (new malli.core.t_malli$core5431(meta5432__$1));
}));

(malli.core.t_malli$core5431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5433){
var self__ = this;
var _5433__$1 = this;
return self__.meta5432;
}));

(malli.core.t_malli$core5431.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5431.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"and","and",-971899817);
}));

(malli.core.t_malli$core5431.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5431.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5431.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5431.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,p__5434,children,options){
var self__ = this;
var map__5435 = p__5434;
var map__5435__$1 = cljs.core.__destructure_map.call(null,map__5435);
var properties = map__5435__$1;
var tags = cljs.core.get.call(null,map__5435__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"and","and",-971899817),properties,children,(1),null);

var children__$1 = malli.core._vmap.call(null,(function (p1__5430_SHARP_){
return malli.core.schema.call(null,p1__5430_SHARP_,options);
}),children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var __GT_transforming_parser_idx = (function (opts){
var transforming_parsers = (function (){var or__5025__auto__ = (function (){var temp__5829__auto__ = cljs.core.find.call(null,properties,new cljs.core.Keyword("parse","transforming-child","parse/transforming-child",-1486468136));
if((temp__5829__auto__ == null)){
return null;
} else {
var vec__5436 = temp__5829__auto__;
var _ = cljs.core.nth.call(null,vec__5436,(0),null);
var i = cljs.core.nth.call(null,vec__5436,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),i)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(((cljs.core.nat_int_QMARK_.call(null,i)) && ((i < cljs.core.count.call(null,children__$1))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","and-schema-invalid-parse-property","malli.core/and-schema-invalid-parse-property",878270846),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,form)], null));

}
}
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep_indexed.call(null,(function (i,c){
if(cljs.core.truth_(new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941).cljs$core$IFn$_invoke$arity$1(malli.core._parser_info.call(null,c,opts)))){
return null;
} else {
return i;
}
})),children__$1);
}
})();
if(cljs.core.next.call(null,transforming_parsers)){
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","and-schema-multiple-transforming-parsers","malli.core/and-schema-multiple-transforming-parsers",1501032986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,form)], null));
} else {
}

return cljs.core.peek.call(null,transforming_parsers);
});
var cached_transforming_parser_idx = (new cljs.core.Delay((function (){
return malli.core._lookup_or_update_cache.call(null,cache,new cljs.core.Keyword("malli.core","transforming-parser-idx","malli.core/transforming-parser-idx",-142445203),(function (){
return __GT_transforming_parser_idx.call(null,null);
}));
}),null));
var __GT_parsers = (function (f){
var transforming_parser_idx = cljs.core.deref.call(null,cached_transforming_parser_idx);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (i,c){
if(cljs.core._EQ_.call(null,i,transforming_parser_idx)){
return f.call(null,c);
} else {
return malli.core._simple_parser.call(null,c);
}
})),children__$1);
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5439 = (function (form,options,properties,tags,meta5432,children,p__5434,map__5435,parent,cached_transforming_parser_idx,__GT_transforming_parser_idx,__GT_parsers,cache,meta5440){
this.form = form;
this.options = options;
this.properties = properties;
this.tags = tags;
this.meta5432 = meta5432;
this.children = children;
this.p__5434 = p__5434;
this.map__5435 = map__5435;
this.parent = parent;
this.cached_transforming_parser_idx = cached_transforming_parser_idx;
this.__GT_transforming_parser_idx = __GT_transforming_parser_idx;
this.__GT_parsers = __GT_parsers;
this.cache = cache;
this.meta5440 = meta5440;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5441,meta5440__$1){
var self__ = this;
var _5441__$1 = this;
return (new malli.core.t_malli$core5439(self__.form,self__.options,self__.properties,self__.tags,self__.meta5432,self__.children,self__.p__5434,self__.map__5435,self__.parent,self__.cached_transforming_parser_idx,self__.__GT_transforming_parser_idx,self__.__GT_parsers,self__.cache,meta5440__$1));
}));

(malli.core.t_malli$core5439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5441){
var self__ = this;
var _5441__$1 = this;
return self__.meta5440;
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var validators = malli.core._vmap.call(null,malli.core._validator,self__.children);
return malli.impl.util._every_pred.call(null,validators);
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,self__.children,transformer,method,options__$1);
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var pi = cljs.core.deref.call(null,self__.cached_transforming_parser_idx);
var parsers = self__.__GT_parsers.call(null,malli.core._parser);
var nchildren = cljs.core.count.call(null,self__.children);
return (function (x){
return cljs.core.reduce.call(null,(function (acc,i){
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,parsers,i).call(null,x);
if(malli.impl.util._invalid_QMARK_.call(null,x_SINGLEQUOTE_)){
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
} else {
if(cljs.core._EQ_.call(null,pi,i)){
return x_SINGLEQUOTE_;
} else {
return acc;
}
}
}),x,cljs.core.range.call(null,nchildren));
});
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var explainers = malli.core._vmap.call(null,(function (p__5442){
var vec__5443 = p__5442;
var i = cljs.core.nth.call(null,vec__5443,(0),null);
var c = cljs.core.nth.call(null,vec__5443,(1),null);
return malli.core._explainer.call(null,c,cljs.core.conj.call(null,path,i));
}),cljs.core.map_indexed.call(null,cljs.core.vector,self__.children));
return (function malli$core$_and_schema_$_explain(x,in$,acc){
return cljs.core.reduce.call(null,(function (acc_SINGLEQUOTE_,explainer){
return explainer.call(null,x,in$,acc_SINGLEQUOTE_);
}),acc,explainers);
});
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var pi = cljs.core.deref.call(null,self__.cached_transforming_parser_idx);
var unparsers = self__.__GT_parsers.call(null,malli.core._unparser);
var unparser = cljs.core.get.call(null,unparsers,pi,cljs.core.identity);
var nchildren = cljs.core.count.call(null,self__.children);
return (function (x_SINGLEQUOTE_){
var x = unparser.call(null,x_SINGLEQUOTE_);
return cljs.core.reduce.call(null,(function (acc,i){
if(cljs.core._EQ_.call(null,pi,i)){
return acc;
} else {
var x_SINGLEQUOTE___$1 = cljs.core.nth.call(null,unparsers,i).call(null,x);
if(malli.impl.util._invalid_QMARK_.call(null,x_SINGLEQUOTE___$1)){
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
} else {
return x_SINGLEQUOTE___$1;
}
}
}),x,cljs.core.range.call(null,nchildren));
});
}));

(malli.core.t_malli$core5439.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5439.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5439.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5439.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5439.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5439.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5439.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5439.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5439.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
var temp__5827__auto__ = self__.__GT_transforming_parser_idx.call(null,opts);
if((temp__5827__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
} else {
var i = temp__5827__auto__;
return malli.core._parser_info.call(null,cljs.core.nth.call(null,self__.children,i),opts);
}
}));

(malli.core.t_malli$core5439.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"meta5432","meta5432",-933450743,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"p__5434","p__5434",-41366615,null),new cljs.core.Symbol(null,"map__5435","map__5435",1902329833,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5431","malli.core/t_malli$core5431",-176361684,null)], null)),new cljs.core.Symbol(null,"cached-transforming-parser-idx","cached-transforming-parser-idx",1088907888,null),new cljs.core.Symbol(null,"->transforming-parser-idx","->transforming-parser-idx",-721891118,null),new cljs.core.Symbol(null,"->parsers","->parsers",-1329211179,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5440","meta5440",1290097590,null)], null);
}));

(malli.core.t_malli$core5439.cljs$lang$type = true);

(malli.core.t_malli$core5439.cljs$lang$ctorStr = "malli.core/t_malli$core5439");

(malli.core.t_malli$core5439.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5439");
}));

/**
 * Positional factory function for malli.core/t_malli$core5439.
 */
malli.core.__GT_t_malli$core5439 = (function malli$core$_and_schema_$___GT_t_malli$core5439(form__$1,options__$1,properties__$1,tags__$1,meta5432__$1,children__$2,p__5434__$1,map__5435__$2,parent__$2,cached_transforming_parser_idx__$1,__GT_transforming_parser_idx__$1,__GT_parsers__$1,cache__$1,meta5440){
return (new malli.core.t_malli$core5439(form__$1,options__$1,properties__$1,tags__$1,meta5432__$1,children__$2,p__5434__$1,map__5435__$2,parent__$2,cached_transforming_parser_idx__$1,__GT_transforming_parser_idx__$1,__GT_parsers__$1,cache__$1,meta5440));
});

}

return (new malli.core.t_malli$core5439(form,options,properties,tags,self__.meta5432,children__$1,p__5434,map__5435__$1,parent__$1,cached_transforming_parser_idx,__GT_transforming_parser_idx,__GT_parsers,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5431.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5432","meta5432",-933450743,null)], null);
}));

(malli.core.t_malli$core5431.cljs$lang$type = true);

(malli.core.t_malli$core5431.cljs$lang$ctorStr = "malli.core/t_malli$core5431");

(malli.core.t_malli$core5431.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5431");
}));

/**
 * Positional factory function for malli.core/t_malli$core5431.
 */
malli.core.__GT_t_malli$core5431 = (function malli$core$_and_schema_$___GT_t_malli$core5431(meta5432){
return (new malli.core.t_malli$core5431(meta5432));
});

}

return (new malli.core.t_malli$core5431(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._andn_schema = (function malli$core$_andn_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5450 = (function (meta5451){
this.meta5451 = meta5451;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5452,meta5451__$1){
var self__ = this;
var _5452__$1 = this;
return (new malli.core.t_malli$core5450(meta5451__$1));
}));

(malli.core.t_malli$core5450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5452){
var self__ = this;
var _5452__$1 = this;
return self__.meta5451;
}));

(malli.core.t_malli$core5450.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5450.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_entry_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5450.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5450.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"andn","andn",-872949990);
}));

(malli.core.t_malli$core5450.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5450.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5450.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5450.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"andn","andn",-872949990),properties,children,(1),null);

var entry_parser = malli.core._create_entry_parser.call(null,children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"naked-keys","naked-keys",-90769828),true], null),options);
var form = (new cljs.core.Delay((function (){
return malli.core._create_entry_form.call(null,parent__$1,properties,entry_parser,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.EntrySchema}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5453 = (function (meta5451,parent,properties,children,options,entry_parser,form,cache,meta5454){
this.meta5451 = meta5451;
this.parent = parent;
this.properties = properties;
this.children = children;
this.options = options;
this.entry_parser = entry_parser;
this.form = form;
this.cache = cache;
this.meta5454 = meta5454;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5455,meta5454__$1){
var self__ = this;
var _5455__$1 = this;
return (new malli.core.t_malli$core5453(self__.meta5451,self__.parent,self__.properties,self__.children,self__.options,self__.entry_parser,self__.form,self__.cache,meta5454__$1));
}));

(malli.core.t_malli$core5453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5455){
var self__ = this;
var _5455__$1 = this;
return self__.meta5454;
}));

(malli.core.t_malli$core5453.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5453.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._entry_ast.call(null,this$__$1,malli.core._entry_keyset.call(null,self__.entry_parser));
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.impl.util._every_pred.call(null,malli.core._vmap.call(null,(function (p__5456){
var vec__5457 = p__5456;
var _ = cljs.core.nth.call(null,vec__5457,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5457,(1),null);
var c = cljs.core.nth.call(null,vec__5457,(2),null);
return malli.core._validator.call(null,c);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,malli.core._vmap.call(null,(function (p1__5449_SHARP_){
return cljs.core.nth.call(null,p1__5449_SHARP_,(2));
}),malli.core._children.call(null,this$__$1)),transformer,method,options__$1);
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_entries.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var k_PLUS_parsers = malli.core._vmap.call(null,(function (p__5460){
var vec__5461 = p__5460;
var k = cljs.core.nth.call(null,vec__5461,(0),null);
var _ = cljs.core.nth.call(null,vec__5461,(1),null);
var c = cljs.core.nth.call(null,vec__5461,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._parser.call(null,c)], null);
}),malli.core._children.call(null,this$__$1));
return (function (x){
var values = cljs.core.reduce.call(null,(function (acc,p__5464){
var vec__5465 = p__5464;
var k = cljs.core.nth.call(null,vec__5465,(0),null);
var parser = cljs.core.nth.call(null,vec__5465,(1),null);
var x_SINGLEQUOTE_ = parser.call(null,x);
if(malli.impl.util._invalid_QMARK_.call(null,x_SINGLEQUOTE_)){
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
} else {
return cljs.core.assoc.call(null,acc,k,x_SINGLEQUOTE_);
}
}),cljs.core.PersistentArrayMap.EMPTY,k_PLUS_parsers);
if(malli.impl.util._invalid_QMARK_.call(null,values)){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
return malli.core.__GT_Tags.call(null,values);
}
});
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_children.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var explainers = malli.core._vmap.call(null,(function (p__5468){
var vec__5469 = p__5468;
var k = cljs.core.nth.call(null,vec__5469,(0),null);
var _ = cljs.core.nth.call(null,vec__5469,(1),null);
var c = cljs.core.nth.call(null,vec__5469,(2),null);
return malli.core._explainer.call(null,c,cljs.core.conj.call(null,path,k));
}),malli.core._children.call(null,this$__$1));
return (function malli$core$_andn_schema_$_explain(x,in$,acc){
return cljs.core.reduce.call(null,(function (acc_SINGLEQUOTE_,explainer){
return explainer.call(null,x,in$,acc_SINGLEQUOTE_);
}),acc,explainers);
});
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var ks = malli.core._vmap.call(null,(function (p1__5446_SHARP_){
return cljs.core.nth.call(null,p1__5446_SHARP_,(0));
}),malli.core._children.call(null,this$__$1));
var validators = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5472){
var vec__5473 = p__5472;
var k = cljs.core.nth.call(null,vec__5473,(0),null);
var _ = cljs.core.nth.call(null,vec__5473,(1),null);
var c = cljs.core.nth.call(null,vec__5473,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._validator.call(null,c)], null);
})),malli.core._children.call(null,this$__$1));
var unparsers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5476){
var vec__5477 = p__5476;
var k = cljs.core.nth.call(null,vec__5477,(0),null);
var _ = cljs.core.nth.call(null,vec__5477,(1),null);
var c = cljs.core.nth.call(null,vec__5477,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._unparser.call(null,c)], null);
})),malli.core._children.call(null,this$__$1));
var nchildren = cljs.core.count.call(null,self__.children);
return (function (tags){
var temp__5827__auto__ = ((malli.core.tags_QMARK_.call(null,tags))?cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(tags)):null);
if((temp__5827__auto__ == null)){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
var values = temp__5827__auto__;
if(cljs.core.every_QMARK_.call(null,validators,cljs.core.keys.call(null,values))){
var vec__5480 = cljs.core.some.call(null,(function (p1__5447_SHARP_){
return cljs.core.find.call(null,values,p1__5447_SHARP_);
}),ks);
var k = cljs.core.nth.call(null,vec__5480,(0),null);
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__5480,(1),null);
var x = unparsers.call(null,k).call(null,x_SINGLEQUOTE_);
if((((!(malli.impl.util._invalid_QMARK_.call(null,x)))) && (cljs.core.every_QMARK_.call(null,(function (p1__5448_SHARP_){
var or__5025__auto__ = cljs.core._EQ_.call(null,k,p1__5448_SHARP_);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return validators.call(null,k).call(null,x);
}
}),ks)))){
return x;
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
}
});
}));

(malli.core.t_malli$core5453.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5453.prototype.malli$core$EntrySchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5453.prototype.malli$core$EntrySchema$_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_entries.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5453.prototype.malli$core$EntrySchema$_entry_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.entry_parser;
}));

(malli.core.t_malli$core5453.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5453.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5453.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5453.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5453.prototype.malli$core$LensSchema$_get$arity$3 = (function (this$,key,default$){
var self__ = this;
var this$__$1 = this;
return malli.core._get_entries.call(null,this$__$1,key,default$);
}));

(malli.core.t_malli$core5453.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_entries.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5453.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5451","meta5451",381718230,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5450","malli.core/t_malli$core5450",378053787,null)], null)),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"entry-parser","entry-parser",-1698599125,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5454","meta5454",-87265085,null)], null);
}));

(malli.core.t_malli$core5453.cljs$lang$type = true);

(malli.core.t_malli$core5453.cljs$lang$ctorStr = "malli.core/t_malli$core5453");

(malli.core.t_malli$core5453.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5453");
}));

/**
 * Positional factory function for malli.core/t_malli$core5453.
 */
malli.core.__GT_t_malli$core5453 = (function malli$core$_andn_schema_$___GT_t_malli$core5453(meta5451__$1,parent__$2,properties__$1,children__$1,options__$1,entry_parser__$1,form__$1,cache__$1,meta5454){
return (new malli.core.t_malli$core5453(meta5451__$1,parent__$2,properties__$1,children__$1,options__$1,entry_parser__$1,form__$1,cache__$1,meta5454));
});

}

return (new malli.core.t_malli$core5453(self__.meta5451,parent__$1,properties,children,options,entry_parser,form,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5450.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5451","meta5451",381718230,null)], null);
}));

(malli.core.t_malli$core5450.cljs$lang$type = true);

(malli.core.t_malli$core5450.cljs$lang$ctorStr = "malli.core/t_malli$core5450");

(malli.core.t_malli$core5450.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5450");
}));

/**
 * Positional factory function for malli.core/t_malli$core5450.
 */
malli.core.__GT_t_malli$core5450 = (function malli$core$_andn_schema_$___GT_t_malli$core5450(meta5451){
return (new malli.core.t_malli$core5450(meta5451));
});

}

return (new malli.core.t_malli$core5450(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._or_schema = (function malli$core$_or_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5486 = (function (meta5487){
this.meta5487 = meta5487;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5488,meta5487__$1){
var self__ = this;
var _5488__$1 = this;
return (new malli.core.t_malli$core5486(meta5487__$1));
}));

(malli.core.t_malli$core5486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5488){
var self__ = this;
var _5488__$1 = this;
return self__.meta5487;
}));

(malli.core.t_malli$core5486.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5486.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"or","or",235744169);
}));

(malli.core.t_malli$core5486.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5486.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5486.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5486.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"or","or",235744169),properties,children,(1),null);

var children__$1 = malli.core._vmap.call(null,(function (p1__5483_SHARP_){
return malli.core.schema.call(null,p1__5483_SHARP_,options);
}),children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var __GT_parser = (function (f){
var parsers = malli.core._vmap.call(null,f,children__$1);
return (function (p1__5484_SHARP_){
return cljs.core.reduce.call(null,(function (_,parser){
return malli.impl.util._map_valid.call(null,cljs.core.reduced,parser.call(null,p1__5484_SHARP_));
}),new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900),parsers);
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5489 = (function (meta5487,parent,properties,children,options,form,cache,__GT_parser,meta5490){
this.meta5487 = meta5487;
this.parent = parent;
this.properties = properties;
this.children = children;
this.options = options;
this.form = form;
this.cache = cache;
this.__GT_parser = __GT_parser;
this.meta5490 = meta5490;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5491,meta5490__$1){
var self__ = this;
var _5491__$1 = this;
return (new malli.core.t_malli$core5489(self__.meta5487,self__.parent,self__.properties,self__.children,self__.options,self__.form,self__.cache,self__.__GT_parser,meta5490__$1));
}));

(malli.core.t_malli$core5489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5491){
var self__ = this;
var _5491__$1 = this;
return self__.meta5490;
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var validators = malli.core._vmap.call(null,malli.core._validator,self__.children);
return malli.impl.util._some_pred.call(null,validators);
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._or_transformer.call(null,this$__$1,transformer,self__.children,method,options__$1);
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._parser);
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var explainers = malli.core._vmap.call(null,(function (p__5492){
var vec__5493 = p__5492;
var i = cljs.core.nth.call(null,vec__5493,(0),null);
var c = cljs.core.nth.call(null,vec__5493,(1),null);
return malli.core._explainer.call(null,c,cljs.core.conj.call(null,path,i));
}),cljs.core.map_indexed.call(null,cljs.core.vector,self__.children));
return (function malli$core$_or_schema_$_explain(x,in$,acc){
return cljs.core.reduce.call(null,(function (acc_SINGLEQUOTE_,explainer){
var acc_SINGLEQUOTE__SINGLEQUOTE_ = explainer.call(null,x,in$,acc_SINGLEQUOTE_);
if((acc_SINGLEQUOTE_ === acc_SINGLEQUOTE__SINGLEQUOTE_)){
return cljs.core.reduced.call(null,acc);
} else {
return acc_SINGLEQUOTE__SINGLEQUOTE_;
}
}),acc,explainers);
});
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._unparser);
}));

(malli.core.t_malli$core5489.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5489.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5489.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5489.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5489.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5489.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5489.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5489.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5489.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),cljs.core.every_QMARK_.call(null,malli.core._comp.call(null,new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),(function (p1__5485_SHARP_){
return malli.core._parser_info.call(null,p1__5485_SHARP_,opts);
})),self__.children)], null);
}));

(malli.core.t_malli$core5489.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5487","meta5487",18313602,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5486","malli.core/t_malli$core5486",632600859,null)], null)),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"meta5490","meta5490",-1477436101,null)], null);
}));

(malli.core.t_malli$core5489.cljs$lang$type = true);

(malli.core.t_malli$core5489.cljs$lang$ctorStr = "malli.core/t_malli$core5489");

(malli.core.t_malli$core5489.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5489");
}));

/**
 * Positional factory function for malli.core/t_malli$core5489.
 */
malli.core.__GT_t_malli$core5489 = (function malli$core$_or_schema_$___GT_t_malli$core5489(meta5487__$1,parent__$2,properties__$1,children__$2,options__$1,form__$1,cache__$1,__GT_parser__$1,meta5490){
return (new malli.core.t_malli$core5489(meta5487__$1,parent__$2,properties__$1,children__$2,options__$1,form__$1,cache__$1,__GT_parser__$1,meta5490));
});

}

return (new malli.core.t_malli$core5489(self__.meta5487,parent__$1,properties,children__$1,options,form,cache,__GT_parser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5486.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5487","meta5487",18313602,null)], null);
}));

(malli.core.t_malli$core5486.cljs$lang$type = true);

(malli.core.t_malli$core5486.cljs$lang$ctorStr = "malli.core/t_malli$core5486");

(malli.core.t_malli$core5486.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5486");
}));

/**
 * Positional factory function for malli.core/t_malli$core5486.
 */
malli.core.__GT_t_malli$core5486 = (function malli$core$_or_schema_$___GT_t_malli$core5486(meta5487){
return (new malli.core.t_malli$core5486(meta5487));
});

}

return (new malli.core.t_malli$core5486(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._orn_schema = (function malli$core$_orn_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5498 = (function (meta5499){
this.meta5499 = meta5499;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5500,meta5499__$1){
var self__ = this;
var _5500__$1 = this;
return (new malli.core.t_malli$core5498(meta5499__$1));
}));

(malli.core.t_malli$core5498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5500){
var self__ = this;
var _5500__$1 = this;
return self__.meta5499;
}));

(malli.core.t_malli$core5498.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5498.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_entry_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5498.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5498.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"orn","orn",738436484);
}));

(malli.core.t_malli$core5498.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5498.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5498.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5498.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"orn","orn",738436484),properties,children,(1),null);

var entry_parser = malli.core._create_entry_parser.call(null,children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"naked-keys","naked-keys",-90769828),true], null),options);
var form = (new cljs.core.Delay((function (){
return malli.core._create_entry_form.call(null,parent__$1,properties,entry_parser,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.EntrySchema}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5501 = (function (meta5499,parent,properties,children,options,entry_parser,form,cache,meta5502){
this.meta5499 = meta5499;
this.parent = parent;
this.properties = properties;
this.children = children;
this.options = options;
this.entry_parser = entry_parser;
this.form = form;
this.cache = cache;
this.meta5502 = meta5502;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5503,meta5502__$1){
var self__ = this;
var _5503__$1 = this;
return (new malli.core.t_malli$core5501(self__.meta5499,self__.parent,self__.properties,self__.children,self__.options,self__.entry_parser,self__.form,self__.cache,meta5502__$1));
}));

(malli.core.t_malli$core5501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5503){
var self__ = this;
var _5503__$1 = this;
return self__.meta5502;
}));

(malli.core.t_malli$core5501.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5501.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._entry_ast.call(null,this$__$1,malli.core._entry_keyset.call(null,self__.entry_parser));
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.impl.util._some_pred.call(null,malli.core._vmap.call(null,(function (p__5504){
var vec__5505 = p__5504;
var _ = cljs.core.nth.call(null,vec__5505,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5505,(1),null);
var c = cljs.core.nth.call(null,vec__5505,(2),null);
return malli.core._validator.call(null,c);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._or_transformer.call(null,this$__$1,transformer,malli.core._vmap.call(null,(function (p1__5497_SHARP_){
return cljs.core.nth.call(null,p1__5497_SHARP_,(2));
}),malli.core._children.call(null,this$__$1)),method,options__$1);
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_entries.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var parsers = malli.core._vmap.call(null,(function (p__5508){
var vec__5509 = p__5508;
var k = cljs.core.nth.call(null,vec__5509,(0),null);
var _ = cljs.core.nth.call(null,vec__5509,(1),null);
var c = cljs.core.nth.call(null,vec__5509,(2),null);
var c__$1 = malli.core._parser.call(null,c);
return (function (x){
return malli.impl.util._map_valid.call(null,(function (p1__5496_SHARP_){
return cljs.core.reduced.call(null,malli.core.tag.call(null,k,p1__5496_SHARP_));
}),c__$1.call(null,x));
});
}),malli.core._children.call(null,this$__$1));
return (function (x){
return cljs.core.reduce.call(null,(function (_,parser){
return parser.call(null,x);
}),x,parsers);
});
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_children.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var explainers = malli.core._vmap.call(null,(function (p__5512){
var vec__5513 = p__5512;
var k = cljs.core.nth.call(null,vec__5513,(0),null);
var _ = cljs.core.nth.call(null,vec__5513,(1),null);
var c = cljs.core.nth.call(null,vec__5513,(2),null);
return malli.core._explainer.call(null,c,cljs.core.conj.call(null,path,k));
}),malli.core._children.call(null,this$__$1));
return (function malli$core$_orn_schema_$_explain(x,in$,acc){
return cljs.core.reduce.call(null,(function (acc_SINGLEQUOTE_,explainer){
var acc_SINGLEQUOTE__SINGLEQUOTE_ = explainer.call(null,x,in$,acc_SINGLEQUOTE_);
if((acc_SINGLEQUOTE_ === acc_SINGLEQUOTE__SINGLEQUOTE_)){
return cljs.core.reduced.call(null,acc);
} else {
return acc_SINGLEQUOTE__SINGLEQUOTE_;
}
}),acc,explainers);
});
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var unparsers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5516){
var vec__5517 = p__5516;
var k = cljs.core.nth.call(null,vec__5517,(0),null);
var _ = cljs.core.nth.call(null,vec__5517,(1),null);
var c = cljs.core.nth.call(null,vec__5517,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._unparser.call(null,c)], null);
})),malli.core._children.call(null,this$__$1));
return (function (x){
if(malli.core.tag_QMARK_.call(null,x)){
var temp__5827__auto__ = cljs.core.get.call(null,unparsers,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x));
if((temp__5827__auto__ == null)){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
var unparse = temp__5827__auto__;
return unparse.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x));
}
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
});
}));

(malli.core.t_malli$core5501.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5501.prototype.malli$core$EntrySchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5501.prototype.malli$core$EntrySchema$_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_entries.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5501.prototype.malli$core$EntrySchema$_entry_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.entry_parser;
}));

(malli.core.t_malli$core5501.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5501.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5501.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5501.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5501.prototype.malli$core$LensSchema$_get$arity$3 = (function (this$,key,default$){
var self__ = this;
var this$__$1 = this;
return malli.core._get_entries.call(null,this$__$1,key,default$);
}));

(malli.core.t_malli$core5501.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_entries.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5501.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5499","meta5499",-451816464,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5498","malli.core/t_malli$core5498",1832777691,null)], null)),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"entry-parser","entry-parser",-1698599125,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5502","meta5502",-1979258560,null)], null);
}));

(malli.core.t_malli$core5501.cljs$lang$type = true);

(malli.core.t_malli$core5501.cljs$lang$ctorStr = "malli.core/t_malli$core5501");

(malli.core.t_malli$core5501.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5501");
}));

/**
 * Positional factory function for malli.core/t_malli$core5501.
 */
malli.core.__GT_t_malli$core5501 = (function malli$core$_orn_schema_$___GT_t_malli$core5501(meta5499__$1,parent__$2,properties__$1,children__$1,options__$1,entry_parser__$1,form__$1,cache__$1,meta5502){
return (new malli.core.t_malli$core5501(meta5499__$1,parent__$2,properties__$1,children__$1,options__$1,entry_parser__$1,form__$1,cache__$1,meta5502));
});

}

return (new malli.core.t_malli$core5501(self__.meta5499,parent__$1,properties,children,options,entry_parser,form,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5498.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5499","meta5499",-451816464,null)], null);
}));

(malli.core.t_malli$core5498.cljs$lang$type = true);

(malli.core.t_malli$core5498.cljs$lang$ctorStr = "malli.core/t_malli$core5498");

(malli.core.t_malli$core5498.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5498");
}));

/**
 * Positional factory function for malli.core/t_malli$core5498.
 */
malli.core.__GT_t_malli$core5498 = (function malli$core$_orn_schema_$___GT_t_malli$core5498(meta5499){
return (new malli.core.t_malli$core5498(meta5499));
});

}

return (new malli.core.t_malli$core5498(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._not_schema = (function malli$core$_not_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5521 = (function (meta5522){
this.meta5522 = meta5522;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5523,meta5522__$1){
var self__ = this;
var _5523__$1 = this;
return (new malli.core.t_malli$core5521(meta5522__$1));
}));

(malli.core.t_malli$core5521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5523){
var self__ = this;
var _5523__$1 = this;
return self__.meta5522;
}));

(malli.core.t_malli$core5521.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5521.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_child_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5521.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5521.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"not","not",-595976884);
}));

(malli.core.t_malli$core5521.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5521.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5521.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5521.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"not","not",-595976884),properties,children,(1),(1));

var vec__5524 = malli.core._vmap.call(null,(function (p1__5520_SHARP_){
return malli.core.schema.call(null,p1__5520_SHARP_,options);
}),children);
var schema = cljs.core.nth.call(null,vec__5524,(0),null);
var children__$1 = vec__5524;
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5527 = (function (form,options,properties,schema,children,vec__5524,parent,meta5522,cache,meta5528){
this.form = form;
this.options = options;
this.properties = properties;
this.schema = schema;
this.children = children;
this.vec__5524 = vec__5524;
this.parent = parent;
this.meta5522 = meta5522;
this.cache = cache;
this.meta5528 = meta5528;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5529,meta5528__$1){
var self__ = this;
var _5529__$1 = this;
return (new malli.core.t_malli$core5527(self__.form,self__.options,self__.properties,self__.schema,self__.children,self__.vec__5524,self__.parent,self__.meta5522,self__.cache,meta5528__$1));
}));

(malli.core.t_malli$core5527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5529){
var self__ = this;
var _5529__$1 = this;
return self__.meta5528;
}));

(malli.core.t_malli$core5527.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5527.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._to_child_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.complement.call(null,malli.core._validator.call(null,self__.schema));
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,self__.children,transformer,method,options__$1);
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var validator = malli.core._validator.call(null,this$__$1);
return (function malli$core$_not_schema_$_explain(x,in$,acc){
if(cljs.core.not.call(null,validator.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,cljs.core.conj.call(null,path,(0)),in$,this$__$1,x));
} else {
return acc;
}
});
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5527.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5527.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5527.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5527.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5527.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5527.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5527.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5527.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5527.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5527.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"vec__5524","vec__5524",1309808106,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5521","malli.core/t_malli$core5521",1656780709,null)], null)),new cljs.core.Symbol(null,"meta5522","meta5522",-211100457,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5528","meta5528",-417650999,null)], null);
}));

(malli.core.t_malli$core5527.cljs$lang$type = true);

(malli.core.t_malli$core5527.cljs$lang$ctorStr = "malli.core/t_malli$core5527");

(malli.core.t_malli$core5527.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5527");
}));

/**
 * Positional factory function for malli.core/t_malli$core5527.
 */
malli.core.__GT_t_malli$core5527 = (function malli$core$_not_schema_$___GT_t_malli$core5527(form__$1,options__$1,properties__$1,schema__$1,children__$2,vec__5524__$1,parent__$2,meta5522__$1,cache__$1,meta5528){
return (new malli.core.t_malli$core5527(form__$1,options__$1,properties__$1,schema__$1,children__$2,vec__5524__$1,parent__$2,meta5522__$1,cache__$1,meta5528));
});

}

return (new malli.core.t_malli$core5527(form,options,properties,schema,children__$1,vec__5524,parent__$1,self__.meta5522,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5521.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5522","meta5522",-211100457,null)], null);
}));

(malli.core.t_malli$core5521.cljs$lang$type = true);

(malli.core.t_malli$core5521.cljs$lang$ctorStr = "malli.core/t_malli$core5521");

(malli.core.t_malli$core5521.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5521");
}));

/**
 * Positional factory function for malli.core/t_malli$core5521.
 */
malli.core.__GT_t_malli$core5521 = (function malli$core$_not_schema_$___GT_t_malli$core5521(meta5522){
return (new malli.core.t_malli$core5521(meta5522));
});

}

return (new malli.core.t_malli$core5521(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._val_schema = (function malli$core$_val_schema(var_args){
var G__5532 = arguments.length;
switch (G__5532) {
case 2:
return malli.core._val_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return malli.core._val_schema.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._val_schema.cljs$core$IFn$_invoke$arity$2 = (function (schema,properties){
return malli.core._into_schema.call(null,malli.core._val_schema.call(null),properties,(new cljs.core.List(null,schema,null,(1),null)),malli.core._options.call(null,schema));
}));

(malli.core._val_schema.cljs$core$IFn$_invoke$arity$0 = (function (){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5533 = (function (meta5534){
this.meta5534 = meta5534;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5535,meta5534__$1){
var self__ = this;
var _5535__$1 = this;
return (new malli.core.t_malli$core5533(meta5534__$1));
}));

(malli.core.t_malli$core5533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5535){
var self__ = this;
var _5535__$1 = this;
return self__.meta5534;
}));

(malli.core.t_malli$core5533.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5533.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_child_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5533.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5533.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("malli.core","val","malli.core/val",39501268);
}));

(malli.core.t_malli$core5533.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5533.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5533.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5533.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
var children__$1 = malli.core._vmap.call(null,(function (p1__5530_SHARP_){
return malli.core.schema.call(null,p1__5530_SHARP_,options);
}),children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var schema = cljs.core.first.call(null,children__$1);
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {malli.core.RefSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5536 = (function (meta5534,parent,properties,children,options,form,schema,cache,meta5537){
this.meta5534 = meta5534;
this.parent = parent;
this.properties = properties;
this.children = children;
this.options = options;
this.form = form;
this.schema = schema;
this.cache = cache;
this.meta5537 = meta5537;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5538,meta5537__$1){
var self__ = this;
var _5538__$1 = this;
return (new malli.core.t_malli$core5536(self__.meta5534,self__.parent,self__.properties,self__.children,self__.options,self__.form,self__.schema,self__.cache,meta5537__$1));
}));

(malli.core.t_malli$core5536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5538){
var self__ = this;
var _5538__$1 = this;
return self__.meta5537;
}));

(malli.core.t_malli$core5536.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5536.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._to_child_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._validator.call(null,self__.schema);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._options.call(null,self__.schema);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,(new cljs.core.List(null,self__.schema,null,(1),null)),transformer,method,options__$1);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("malli.core","walk-entry-vals","malli.core/walk-entry-vals",-64238340).cljs$core$IFn$_invoke$arity$1(options__$1))){
if(cljs.core.truth_(malli.core._accept.call(null,walker,this$__$1,path,options__$1))){
return malli.core._outer.call(null,walker,this$__$1,path,(new cljs.core.List(null,malli.core._inner.call(null,walker,self__.schema,path,options__$1),null,(1),null)),options__$1);
} else {
return null;
}
} else {
return malli.core._walk.call(null,self__.schema,walker,path,options__$1);
}
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._parser.call(null,self__.schema);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.schema], null);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return malli.core._explainer.call(null,self__.schema,path);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._unparser.call(null,self__.schema);
}));

(malli.core.t_malli$core5536.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5536.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5536.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5536.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5536.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5536.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,(0),key)){
return self__.schema;
} else {
return default$;
}
}));

(malli.core.t_malli$core5536.prototype.malli$core$LensSchema$_set$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,(0),key)){
return malli.core._val_schema.call(null,value,self__.properties);
} else {
return null;
}
}));

(malli.core.t_malli$core5536.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5536.prototype.malli$core$RefSchema$_ref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5536.prototype.malli$core$RefSchema$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schema;
}));

(malli.core.t_malli$core5536.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5534","meta5534",-988523891,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5533","malli.core/t_malli$core5533",314768643,null)], null)),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5537","meta5537",829084017,null)], null);
}));

(malli.core.t_malli$core5536.cljs$lang$type = true);

(malli.core.t_malli$core5536.cljs$lang$ctorStr = "malli.core/t_malli$core5536");

(malli.core.t_malli$core5536.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5536");
}));

/**
 * Positional factory function for malli.core/t_malli$core5536.
 */
malli.core.__GT_t_malli$core5536 = (function malli$core$__GT_t_malli$core5536(meta5534__$1,parent__$2,properties__$1,children__$2,options__$1,form__$1,schema__$1,cache__$1,meta5537){
return (new malli.core.t_malli$core5536(meta5534__$1,parent__$2,properties__$1,children__$2,options__$1,form__$1,schema__$1,cache__$1,meta5537));
});

}

return (new malli.core.t_malli$core5536(self__.meta5534,parent__$1,properties,children__$1,options,form,schema,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5533.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5534","meta5534",-988523891,null)], null);
}));

(malli.core.t_malli$core5533.cljs$lang$type = true);

(malli.core.t_malli$core5533.cljs$lang$ctorStr = "malli.core/t_malli$core5533");

(malli.core.t_malli$core5533.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5533");
}));

/**
 * Positional factory function for malli.core/t_malli$core5533.
 */
malli.core.__GT_t_malli$core5533 = (function malli$core$__GT_t_malli$core5533(meta5534){
return (new malli.core.t_malli$core5533(meta5534));
});

}

return (new malli.core.t_malli$core5533(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}));

(malli.core._val_schema.cljs$lang$maxFixedArity = 2);

/**
 * Dissoc all keys in `keyset-map` from `from-map`.
 */
malli.core._dissoc_map_keys = (function malli$core$_dissoc_map_keys(from_map,keyset_map){
return cljs.core.reduce_kv.call(null,(function (acc,k,_){
return cljs.core.dissoc.call(null,acc,k);
}),from_map,keyset_map);
});
malli.core._map_schema = (function malli$core$_map_schema(var_args){
var G__5543 = arguments.length;
switch (G__5543) {
case 0:
return malli.core._map_schema.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._map_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._map_schema.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core._map_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"naked-keys","naked-keys",-90769828),true], null));
}));

(malli.core._map_schema.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5544 = (function (opts,meta5545){
this.opts = opts;
this.meta5545 = meta5545;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5546,meta5545__$1){
var self__ = this;
var _5546__$1 = this;
return (new malli.core.t_malli$core5544(self__.opts,meta5545__$1));
}));

(malli.core.t_malli$core5544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5546){
var self__ = this;
var _5546__$1 = this;
return self__.meta5545;
}));

(malli.core.t_malli$core5544.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5544.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_entry_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5544.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5544.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.Keyword(null,"map","map",1371690461));
}));

(malli.core.t_malli$core5544.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126).cljs$core$IFn$_invoke$arity$1(self__.opts);
}));

(malli.core.t_malli$core5544.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5544.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5544.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,p__5547,children,options){
var self__ = this;
var map__5548 = p__5547;
var map__5548__$1 = cljs.core.__destructure_map.call(null,map__5548);
var properties = map__5548__$1;
var closed = cljs.core.get.call(null,map__5548__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var parent__$1 = this;
var pred_QMARK_ = new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$2(self__.opts,cljs.core.map_QMARK_);
var entry_parser = malli.core._create_entry_parser.call(null,children,self__.opts,options);
var form = (new cljs.core.Delay((function (){
return malli.core._create_entry_form.call(null,parent__$1,properties,entry_parser,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var default_schema = (new cljs.core.Delay((function (){
var G__5549 = entry_parser;
var G__5549__$1 = (((G__5549 == null))?null:malli.core._entry_children.call(null,G__5549));
var G__5549__$2 = (((G__5549__$1 == null))?null:malli.core._default_entry_schema.call(null,G__5549__$1));
if((G__5549__$2 == null)){
return null;
} else {
return malli.core.schema.call(null,G__5549__$2,options);
}
}),null));
var explicit_children = (new cljs.core.Delay((function (){
var G__5550 = malli.core._entry_children.call(null,entry_parser);
if(cljs.core.truth_(cljs.core.deref.call(null,default_schema))){
return cljs.core.remove.call(null,malli.core._default_entry,G__5550);
} else {
return G__5550;
}
}),null));
var simple_default_parser_QMARK_ = (function (opts__$1){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941).cljs$core$IFn$_invoke$arity$1(malli.core._parser_info.call(null,cljs.core.deref.call(null,default_schema),opts__$1)));
});
var __GT_parser = (function (this$,f){
var keyset = malli.core._entry_keyset.call(null,malli.core._entry_parser.call(null,this$));
var default_parser = (function (){var G__5551 = cljs.core.deref.call(null,default_schema);
if((G__5551 == null)){
return null;
} else {
return f.call(null,G__5551);
}
})();
var ok_QMARK_ = (function (p1__5540_SHARP_){
var and__5023__auto__ = pred_QMARK_.call(null,p1__5540_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return (((!(malli.core.tag_QMARK_.call(null,p1__5540_SHARP_)))) && ((!(malli.core.tags_QMARK_.call(null,p1__5540_SHARP_)))));
} else {
return and__5023__auto__;
}
});
var parsers = (function (){var G__5552 = malli.core._vmap.call(null,(function (p__5553){
var vec__5554 = p__5553;
var key = cljs.core.nth.call(null,vec__5554,(0),null);
var map__5557 = cljs.core.nth.call(null,vec__5554,(1),null);
var map__5557__$1 = cljs.core.__destructure_map.call(null,map__5557);
var optional = cljs.core.get.call(null,map__5557__$1,new cljs.core.Keyword(null,"optional","optional",2053951509));
var schema = cljs.core.nth.call(null,vec__5554,(2),null);
var parser = f.call(null,schema);
return (function (m){
var temp__5823__auto__ = cljs.core.find.call(null,m,key);
if(cljs.core.truth_(temp__5823__auto__)){
var e = temp__5823__auto__;
var v = cljs.core.val.call(null,e);
var v_STAR_ = parser.call(null,v);
if(malli.impl.util._invalid_QMARK_.call(null,v_STAR_)){
return cljs.core.reduced.call(null,v_STAR_);
} else {
if((v_STAR_ === v)){
return m;
} else {
return cljs.core.assoc.call(null,m,key,v_STAR_);

}
}
} else {
if(cljs.core.truth_(optional)){
return m;
} else {
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
}
}
});
}),cljs.core.deref.call(null,explicit_children));
var G__5552__$1 = (cljs.core.truth_(default_parser)?cljs.core.cons.call(null,(function (){var simple = malli.core._lookup_or_update_cache.call(null,cache,new cljs.core.Keyword("malli.core","simple-default-parser?","malli.core/simple-default-parser?",2010394222),(function (){
return simple_default_parser_QMARK_.call(null,null);
}));
return (function (m){
var m_SINGLEQUOTE_ = default_parser.call(null,malli.core._dissoc_map_keys.call(null,m,keyset));
if(malli.impl.util._invalid_QMARK_.call(null,m_SINGLEQUOTE_)){
return cljs.core.reduced.call(null,m_SINGLEQUOTE_);
} else {
if(cljs.core.truth_(simple)){
return m;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,m,cljs.core.keys.call(null,keyset)),m_SINGLEQUOTE_);
}
}
});
})(),G__5552):G__5552);
if(cljs.core.truth_(closed)){
return cljs.core.cons.call(null,(function (m){
return cljs.core.reduce.call(null,(function (m__$1,k){
if(cljs.core.contains_QMARK_.call(null,keyset,k)){
return m__$1;
} else {
return cljs.core.reduced.call(null,cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900)));
}
}),m,cljs.core.keys.call(null,m));
}),G__5552__$1);
} else {
return G__5552__$1;
}
})();
return (function (x){
if(cljs.core.truth_(ok_QMARK_.call(null,x))){
return cljs.core.reduce.call(null,(function (m,parser){
return parser.call(null,m);
}),x,parsers);
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.EntrySchema}
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5558 = (function (form,options,map__5548,meta5545,properties,closed,children,entry_parser,parent,simple_default_parser_QMARK_,explicit_children,default_schema,pred_QMARK_,__GT_parser,p__5547,cache,opts,meta5559){
this.form = form;
this.options = options;
this.map__5548 = map__5548;
this.meta5545 = meta5545;
this.properties = properties;
this.closed = closed;
this.children = children;
this.entry_parser = entry_parser;
this.parent = parent;
this.simple_default_parser_QMARK_ = simple_default_parser_QMARK_;
this.explicit_children = explicit_children;
this.default_schema = default_schema;
this.pred_QMARK_ = pred_QMARK_;
this.__GT_parser = __GT_parser;
this.p__5547 = p__5547;
this.cache = cache;
this.opts = opts;
this.meta5559 = meta5559;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5558.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5558.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._entry_ast.call(null,this$__$1,malli.core._entry_keyset.call(null,self__.entry_parser));
}));

(malli.core.t_malli$core5558.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5558.prototype.malli$core$EntrySchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5558.prototype.malli$core$EntrySchema$_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_entries.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5558.prototype.malli$core$EntrySchema$_entry_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.entry_parser;
}));

(malli.core.t_malli$core5558.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5558.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts__$1){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),cljs.core.every_QMARK_.call(null,(function (p1__5541_SHARP_){
return new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941).cljs$core$IFn$_invoke$arity$1(malli.core._parser_info.call(null,cljs.core.peek.call(null,p1__5541_SHARP_),opts__$1));
}),malli.core._entry_children.call(null,self__.entry_parser))], null);
}));

(malli.core.t_malli$core5558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5560){
var self__ = this;
var _5560__$1 = this;
return self__.meta5559;
}));

(malli.core.t_malli$core5558.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5558.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5560,meta5559__$1){
var self__ = this;
var _5560__$1 = this;
return (new malli.core.t_malli$core5558(self__.form,self__.options,self__.map__5548,self__.meta5545,self__.properties,self__.closed,self__.children,self__.entry_parser,self__.parent,self__.simple_default_parser_QMARK_,self__.explicit_children,self__.default_schema,self__.pred_QMARK_,self__.__GT_parser,self__.p__5547,self__.cache,self__.opts,meta5559__$1));
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var keyset = malli.core._entry_keyset.call(null,malli.core._entry_parser.call(null,this$__$1));
var default_validator = (function (){var G__5561 = cljs.core.deref.call(null,self__.default_schema);
if((G__5561 == null)){
return null;
} else {
return malli.core._validator.call(null,G__5561);
}
})();
var validators = (function (){var G__5562 = malli.core._vmap.call(null,(function (p__5563){
var vec__5564 = p__5563;
var key = cljs.core.nth.call(null,vec__5564,(0),null);
var map__5567 = cljs.core.nth.call(null,vec__5564,(1),null);
var map__5567__$1 = cljs.core.__destructure_map.call(null,map__5567);
var optional = cljs.core.get.call(null,map__5567__$1,new cljs.core.Keyword(null,"optional","optional",2053951509));
var value = cljs.core.nth.call(null,vec__5564,(2),null);
var valid_QMARK_ = malli.core._validator.call(null,value);
var default$ = cljs.core.boolean$.call(null,optional);
return (function (m){
var temp__5823__auto__ = cljs.core.find.call(null,m,key);
if(cljs.core.truth_(temp__5823__auto__)){
var map_entry = temp__5823__auto__;
return valid_QMARK_.call(null,cljs.core.val.call(null,map_entry));
} else {
return default$;
}
});
}),cljs.core.deref.call(null,self__.explicit_children));
var G__5562__$1 = (cljs.core.truth_(default_validator)?cljs.core.conj.call(null,G__5562,(function (m){
return default_validator.call(null,malli.core._dissoc_map_keys.call(null,m,keyset));
})):G__5562);
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.closed;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not.call(null,default_validator);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.call(null,G__5562__$1,(function (m){
return cljs.core.reduce.call(null,(function (acc,k){
if(cljs.core.contains_QMARK_.call(null,keyset,k)){
return acc;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,cljs.core.keys.call(null,m));
}));
} else {
return G__5562__$1;
}
})();
var validate = malli.impl.util._every_pred.call(null,validators);
return (function (m){
var and__5023__auto__ = self__.pred_QMARK_.call(null,m);
if(cljs.core.truth_(and__5023__auto__)){
return validate.call(null,m);
} else {
return and__5023__auto__;
}
});
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
var keyset = malli.core._entry_keyset.call(null,malli.core._entry_parser.call(null,this$__$1));
var this_transformer = malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1);
var __GT_children = cljs.core.reduce.call(null,(function (acc,p__5568){
var vec__5569 = p__5568;
var k = cljs.core.nth.call(null,vec__5569,(0),null);
var s = cljs.core.nth.call(null,vec__5569,(1),null);
var t = malli.core._transformer.call(null,s,transformer,method,options__$1);
var G__5572 = acc;
if(cljs.core.truth_(t)){
return cljs.core.conj.call(null,G__5572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,t], null));
} else {
return G__5572;
}
}),cljs.core.PersistentVector.EMPTY,(function (){var G__5573 = malli.core._entries.call(null,this$__$1);
if(cljs.core.truth_(cljs.core.deref.call(null,self__.default_schema))){
return cljs.core.remove.call(null,malli.core._default_entry,G__5573);
} else {
return G__5573;
}
})());
var apply__GT_children = ((cljs.core.seq.call(null,__GT_children))?malli.core._map_transformer.call(null,__GT_children):null);
var apply__GT_default = (function (){var temp__5825__auto__ = (function (){var G__5574 = cljs.core.deref.call(null,self__.default_schema);
if((G__5574 == null)){
return null;
} else {
return malli.core._transformer.call(null,G__5574,transformer,method,options__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var dt = temp__5825__auto__;
return (function (x){
return cljs.core.merge.call(null,dt.call(null,malli.core._dissoc_map_keys.call(null,x,keyset)),cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,keyset)));
});
} else {
return null;
}
})();
var apply__GT_children__$1 = (function (){var G__5575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [apply__GT_default,apply__GT_children], null);
var G__5575__$1 = (((G__5575 == null))?null:cljs.core.keep.call(null,cljs.core.identity,G__5575));
var G__5575__$2 = (((G__5575__$1 == null))?null:cljs.core.seq.call(null,G__5575__$1));
if((G__5575__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,malli.core._comp,G__5575__$2);
}
})();
var apply__GT_children__$2 = malli.core._guard.call(null,self__.pred_QMARK_,apply__GT_children__$1);
return malli.core._intercepting.call(null,this_transformer,apply__GT_children__$2);
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_entries.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.__GT_parser.call(null,this$__$1,malli.core._parser);
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_children.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var keyset = malli.core._entry_keyset.call(null,malli.core._entry_parser.call(null,this$__$1));
var default_explainer = (function (){var G__5576 = cljs.core.deref.call(null,self__.default_schema);
if((G__5576 == null)){
return null;
} else {
return malli.core._explainer.call(null,G__5576,cljs.core.conj.call(null,path,new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176)));
}
})();
var explainers = (function (){var G__5577 = malli.core._vmap.call(null,(function (p__5578){
var vec__5579 = p__5578;
var key = cljs.core.nth.call(null,vec__5579,(0),null);
var map__5582 = cljs.core.nth.call(null,vec__5579,(1),null);
var map__5582__$1 = cljs.core.__destructure_map.call(null,map__5582);
var optional = cljs.core.get.call(null,map__5582__$1,new cljs.core.Keyword(null,"optional","optional",2053951509));
var schema = cljs.core.nth.call(null,vec__5579,(2),null);
var explainer = malli.core._explainer.call(null,schema,cljs.core.conj.call(null,path,key));
return (function (x,in$,acc){
var temp__5823__auto__ = cljs.core.find.call(null,x,key);
if(cljs.core.truth_(temp__5823__auto__)){
var e = temp__5823__auto__;
return explainer.call(null,cljs.core.val.call(null,e),cljs.core.conj.call(null,in$,key),acc);
} else {
if(cljs.core.not.call(null,optional)){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,cljs.core.conj.call(null,path,key),cljs.core.conj.call(null,in$,key),this$__$1,null,new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666)));
} else {
return acc;
}
}
});
}),cljs.core.deref.call(null,self__.explicit_children));
var G__5577__$1 = (cljs.core.truth_(default_explainer)?cljs.core.conj.call(null,G__5577,(function (x,in$,acc){
return default_explainer.call(null,malli.core._dissoc_map_keys.call(null,x,keyset),in$,acc);
})):G__5577);
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.closed;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not.call(null,default_explainer);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.call(null,G__5577__$1,(function (x,in$,acc){
return cljs.core.reduce_kv.call(null,(function (acc__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,keyset,k)){
return acc__$1;
} else {
return cljs.core.conj.call(null,acc__$1,malli.impl.util._error.call(null,cljs.core.conj.call(null,path,k),cljs.core.conj.call(null,in$,k),this$__$1,v,new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512)));
}
}),acc,x);
}));
} else {
return G__5577__$1;
}
})();
return (function (x,in$,acc){
if(cljs.core.not.call(null,self__.pred_QMARK_.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450)));
} else {
return cljs.core.reduce.call(null,(function (acc__$1,explainer){
return explainer.call(null,x,in$,acc__$1);
}),acc,explainers);
}
});
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.__GT_parser.call(null,this$__$1,malli.core._unparser);
}));

(malli.core.t_malli$core5558.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5558.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5558.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5558.prototype.malli$core$LensSchema$_get$arity$3 = (function (this$,key,default$){
var self__ = this;
var this$__$1 = this;
return malli.core._get_entries.call(null,this$__$1,key,default$);
}));

(malli.core.t_malli$core5558.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_entries.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"map__5548","map__5548",-1912894877,null),new cljs.core.Symbol(null,"meta5545","meta5545",1618670340,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"entry-parser","entry-parser",-1698599125,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5544","malli.core/t_malli$core5544",1932611290,null)], null)),new cljs.core.Symbol(null,"simple-default-parser?","simple-default-parser?",-858419827,null),new cljs.core.Symbol(null,"explicit-children","explicit-children",-1952298515,null),new cljs.core.Symbol(null,"default-schema","default-schema",395400019,null),new cljs.core.Symbol(null,"pred?","pred?",647416310,null),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"p__5547","p__5547",1231100184,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta5559","meta5559",460697289,null)], null);
}));

(malli.core.t_malli$core5558.cljs$lang$type = true);

(malli.core.t_malli$core5558.cljs$lang$ctorStr = "malli.core/t_malli$core5558");

(malli.core.t_malli$core5558.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5558");
}));

/**
 * Positional factory function for malli.core/t_malli$core5558.
 */
malli.core.__GT_t_malli$core5558 = (function malli$core$__GT_t_malli$core5558(form__$1,options__$1,map__5548__$2,meta5545__$1,properties__$1,closed__$1,children__$1,entry_parser__$1,parent__$2,simple_default_parser_QMARK___$1,explicit_children__$1,default_schema__$1,pred_QMARK___$1,__GT_parser__$1,p__5547__$1,cache__$1,opts__$1,meta5559){
return (new malli.core.t_malli$core5558(form__$1,options__$1,map__5548__$2,meta5545__$1,properties__$1,closed__$1,children__$1,entry_parser__$1,parent__$2,simple_default_parser_QMARK___$1,explicit_children__$1,default_schema__$1,pred_QMARK___$1,__GT_parser__$1,p__5547__$1,cache__$1,opts__$1,meta5559));
});

}

return (new malli.core.t_malli$core5558(form,options,map__5548__$1,self__.meta5545,properties,closed,children,entry_parser,parent__$1,simple_default_parser_QMARK_,explicit_children,default_schema,pred_QMARK_,__GT_parser,p__5547,cache,self__.opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5544.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta5545","meta5545",1618670340,null)], null);
}));

(malli.core.t_malli$core5544.cljs$lang$type = true);

(malli.core.t_malli$core5544.cljs$lang$ctorStr = "malli.core/t_malli$core5544");

(malli.core.t_malli$core5544.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5544");
}));

/**
 * Positional factory function for malli.core/t_malli$core5544.
 */
malli.core.__GT_t_malli$core5544 = (function malli$core$__GT_t_malli$core5544(opts__$1,meta5545){
return (new malli.core.t_malli$core5544(opts__$1,meta5545));
});

}

return (new malli.core.t_malli$core5544(opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}));

(malli.core._map_schema.cljs$lang$maxFixedArity = 1);

malli.core._map_of_schema = (function malli$core$_map_of_schema(var_args){
var G__5597 = arguments.length;
switch (G__5597) {
case 0:
return malli.core._map_of_schema.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._map_of_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._map_of_schema.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core._map_of_schema.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(malli.core._map_of_schema.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5598 = (function (opts,meta5599){
this.opts = opts;
this.meta5599 = meta5599;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5600,meta5599__$1){
var self__ = this;
var _5600__$1 = this;
return (new malli.core.t_malli$core5598(self__.opts,meta5599__$1));
}));

(malli.core.t_malli$core5598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5600){
var self__ = this;
var _5600__$1 = this;
return self__.meta5599;
}));

(malli.core.t_malli$core5598.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5598.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._into_schema.call(null,parent__$1,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core.from_ast.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),options),malli.core.from_ast.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ast),options)], null),options);
}));

(malli.core.t_malli$core5598.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5598.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.Keyword(null,"map-of","map-of",1189682355));
}));

(malli.core.t_malli$core5598.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126).cljs$core$IFn$_invoke$arity$1(self__.opts);
}));

(malli.core.t_malli$core5598.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5598.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5598.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,p__5601,children,options){
var self__ = this;
var map__5602 = p__5601;
var map__5602__$1 = cljs.core.__destructure_map.call(null,map__5602);
var properties = map__5602__$1;
var min = cljs.core.get.call(null,map__5602__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5602__$1,new cljs.core.Keyword(null,"max","max",61366548));
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),properties,children,(2),(2));

var vec__5603 = malli.core._vmap.call(null,(function (p1__5584_SHARP_){
return malli.core.schema.call(null,p1__5584_SHARP_,options);
}),children);
var key_schema = cljs.core.nth.call(null,vec__5603,(0),null);
var value_schema = cljs.core.nth.call(null,vec__5603,(1),null);
var children__$1 = vec__5603;
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var validate_limits = malli.core._validate_limits.call(null,min,max);
var simple_parser_QMARK_ = (function (opts__$1){
return cljs.core.every_QMARK_.call(null,malli.core._comp.call(null,new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),(function (p1__5585_SHARP_){
return malli.core._parser_info.call(null,p1__5585_SHARP_,opts__$1);
})),children__$1);
});
var __GT_parser = (function (f){
var key_parser = f.call(null,key_schema);
var value_parser = f.call(null,value_schema);
var simple = malli.core._lookup_or_update_cache.call(null,cache,new cljs.core.Keyword("malli.core","simple-parser?","malli.core/simple-parser?",-428192719),(function (){
return simple_parser_QMARK_.call(null,null);
}));
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var k_STAR_ = key_parser.call(null,k);
var v_STAR_ = value_parser.call(null,v);
if(((malli.impl.util._invalid_QMARK_.call(null,k_STAR_)) || (malli.impl.util._invalid_QMARK_.call(null,v_STAR_)))){
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
} else {
var G__5606 = acc;
if(cljs.core.not.call(null,simple)){
return cljs.core.assoc.call(null,G__5606,k_STAR_,v_STAR_);
} else {
return G__5606;
}
}
}),(function (){var G__5607 = x;
if(cljs.core.not.call(null,simple)){
return cljs.core.empty.call(null,G__5607);
} else {
return G__5607;
}
})(),x);
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5608 = (function (form,options,map__5602,properties,children,min,value_schema,parent,meta5599,simple_parser_QMARK_,key_schema,__GT_parser,p__5601,cache,validate_limits,max,opts,vec__5603,meta5609){
this.form = form;
this.options = options;
this.map__5602 = map__5602;
this.properties = properties;
this.children = children;
this.min = min;
this.value_schema = value_schema;
this.parent = parent;
this.meta5599 = meta5599;
this.simple_parser_QMARK_ = simple_parser_QMARK_;
this.key_schema = key_schema;
this.__GT_parser = __GT_parser;
this.p__5601 = p__5601;
this.cache = cache;
this.validate_limits = validate_limits;
this.max = max;
this.opts = opts;
this.vec__5603 = vec__5603;
this.meta5609 = meta5609;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5610,meta5609__$1){
var self__ = this;
var _5610__$1 = this;
return (new malli.core.t_malli$core5608(self__.form,self__.options,self__.map__5602,self__.properties,self__.children,self__.min,self__.value_schema,self__.parent,self__.meta5599,self__.simple_parser_QMARK_,self__.key_schema,self__.__GT_parser,self__.p__5601,self__.cache,self__.validate_limits,self__.max,self__.opts,self__.vec__5603,meta5609__$1));
}));

(malli.core.t_malli$core5608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5610){
var self__ = this;
var _5610__$1 = this;
return self__.meta5609;
}));

(malli.core.t_malli$core5608.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5608.prototype.malli$core$AST$_to_ast$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"key","key",-1516042587),malli.core.ast.call(null,self__.key_schema),new cljs.core.Keyword(null,"value","value",305978217),malli.core.ast.call(null,self__.value_schema)], null),self__.properties,self__.options);
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var key_valid_QMARK_ = malli.core._validator.call(null,self__.key_schema);
var value_valid_QMARK_ = malli.core._validator.call(null,self__.value_schema);
return (function (m){
var and__5023__auto__ = cljs.core.map_QMARK_.call(null,m);
if(and__5023__auto__){
var and__5023__auto____$1 = self__.validate_limits.call(null,m);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.reduce_kv.call(null,(function (___$2,key,value){
var or__5025__auto__ = (function (){var and__5023__auto____$2 = key_valid_QMARK_.call(null,key);
if(cljs.core.truth_(and__5023__auto____$2)){
return value_valid_QMARK_.call(null,value);
} else {
return and__5023__auto____$2;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,m);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
var this_transformer = malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1);
var __GT_key = malli.core._transformer.call(null,self__.key_schema,transformer,method,options__$1);
var __GT_child = malli.core._transformer.call(null,self__.value_schema,transformer,method,options__$1);
var __GT_key_child = (cljs.core.truth_((function (){var and__5023__auto__ = __GT_key;
if(cljs.core.truth_(and__5023__auto__)){
return __GT_child;
} else {
return and__5023__auto__;
}
})())?(function (p1__5586_SHARP_,p2__5587_SHARP_,p3__5588_SHARP_){
return cljs.core.assoc.call(null,p1__5586_SHARP_,__GT_key.call(null,p2__5587_SHARP_),__GT_child.call(null,p3__5588_SHARP_));
}):(cljs.core.truth_(__GT_key)?(function (p1__5589_SHARP_,p2__5590_SHARP_,p3__5591_SHARP_){
return cljs.core.assoc.call(null,p1__5589_SHARP_,__GT_key.call(null,p2__5590_SHARP_),p3__5591_SHARP_);
}):(cljs.core.truth_(__GT_child)?(function (p1__5592_SHARP_,p2__5593_SHARP_,p3__5594_SHARP_){
return cljs.core.assoc.call(null,p1__5592_SHARP_,p2__5593_SHARP_,__GT_child.call(null,p3__5594_SHARP_));
}):null)));
var apply__GT_key_child = (cljs.core.truth_(__GT_key_child)?(function (p1__5595_SHARP_){
return cljs.core.reduce_kv.call(null,__GT_key_child,cljs.core.empty.call(null,p1__5595_SHARP_),p1__5595_SHARP_);
}):null);
var apply__GT_key_child__$1 = malli.core._guard.call(null,cljs.core.map_QMARK_,apply__GT_key_child);
return malli.core._intercepting.call(null,this_transformer,apply__GT_key_child__$1);
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._parser);
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var key_explainer = malli.core._explainer.call(null,self__.key_schema,cljs.core.conj.call(null,path,(0)));
var value_explainer = malli.core._explainer.call(null,self__.value_schema,cljs.core.conj.call(null,path,(1)));
return (function malli$core$explain(m,in$,acc){
if((!(cljs.core.map_QMARK_.call(null,m)))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,m,new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450)));
} else {
if(cljs.core.not.call(null,self__.validate_limits.call(null,m))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,m,new cljs.core.Keyword("malli.core","limits","malli.core/limits",-1343466863)));
} else {
return cljs.core.reduce_kv.call(null,(function (acc__$1,key,value){
var in$__$1 = cljs.core.conj.call(null,in$,key);
return value_explainer.call(null,value,in$__$1,key_explainer.call(null,key,in$__$1,acc__$1));
}),acc,m);
}
}
});
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._unparser);
}));

(malli.core.t_malli$core5608.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5608.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5608.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5608.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5608.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5608.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5608.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5608.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5608.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts__$1){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),self__.simple_parser_QMARK_.call(null,opts__$1)], null);
}));

(malli.core.t_malli$core5608.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"map__5602","map__5602",1752831840,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"value-schema","value-schema",-1754883189,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5598","malli.core/t_malli$core5598",-710741197,null)], null)),new cljs.core.Symbol(null,"meta5599","meta5599",-857175346,null),new cljs.core.Symbol(null,"simple-parser?","simple-parser?",1031530832,null),new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"p__5601","p__5601",-769374473,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"validate-limits","validate-limits",-2141569735,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__5603","vec__5603",324328573,null),new cljs.core.Symbol(null,"meta5609","meta5609",1635875056,null)], null);
}));

(malli.core.t_malli$core5608.cljs$lang$type = true);

(malli.core.t_malli$core5608.cljs$lang$ctorStr = "malli.core/t_malli$core5608");

(malli.core.t_malli$core5608.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5608");
}));

/**
 * Positional factory function for malli.core/t_malli$core5608.
 */
malli.core.__GT_t_malli$core5608 = (function malli$core$__GT_t_malli$core5608(form__$1,options__$1,map__5602__$2,properties__$1,children__$2,min__$1,value_schema__$1,parent__$2,meta5599__$1,simple_parser_QMARK___$1,key_schema__$1,__GT_parser__$1,p__5601__$1,cache__$1,validate_limits__$1,max__$1,opts__$1,vec__5603__$1,meta5609){
return (new malli.core.t_malli$core5608(form__$1,options__$1,map__5602__$2,properties__$1,children__$2,min__$1,value_schema__$1,parent__$2,meta5599__$1,simple_parser_QMARK___$1,key_schema__$1,__GT_parser__$1,p__5601__$1,cache__$1,validate_limits__$1,max__$1,opts__$1,vec__5603__$1,meta5609));
});

}

return (new malli.core.t_malli$core5608(form,options,map__5602__$1,properties,children__$1,min,value_schema,parent__$1,self__.meta5599,simple_parser_QMARK_,key_schema,__GT_parser,p__5601,cache,validate_limits,max,self__.opts,vec__5603,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5598.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta5599","meta5599",-857175346,null)], null);
}));

(malli.core.t_malli$core5598.cljs$lang$type = true);

(malli.core.t_malli$core5598.cljs$lang$ctorStr = "malli.core/t_malli$core5598");

(malli.core.t_malli$core5598.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5598");
}));

/**
 * Positional factory function for malli.core/t_malli$core5598.
 */
malli.core.__GT_t_malli$core5598 = (function malli$core$__GT_t_malli$core5598(opts__$1,meta5599){
return (new malli.core.t_malli$core5598(opts__$1,meta5599));
});

}

return (new malli.core.t_malli$core5598(opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}));

(malli.core._map_of_schema.cljs$lang$maxFixedArity = 1);

malli.core._safely_countable_QMARK_ = (function malli$core$_safely_countable_QMARK_(x){
return (((x == null)) || (((cljs.core.counted_QMARK_.call(null,x)) || (((cljs.core.indexed_QMARK_.call(null,x)) || (((typeof x === 'string') || ((Array === cljs.core.type.call(null,x))))))))));
});
malli.core._collection_schema = (function malli$core$_collection_schema(props){
if(cljs.core.fn_QMARK_.call(null,props)){
malli.core._deprecated_BANG_.call(null,"-collection-schema doesn't take fn-props, use :compiled property instead");

return malli.core._collection_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (c,p,_){
return props.call(null,c,p);
})], null));
} else {
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5615 = (function (props,meta5616){
this.props = props;
this.meta5616 = meta5616;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5617,meta5616__$1){
var self__ = this;
var _5617__$1 = this;
return (new malli.core.t_malli$core5615(self__.props,meta5616__$1));
}));

(malli.core.t_malli$core5615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5617){
var self__ = this;
var _5617__$1 = this;
return self__.meta5616;
}));

(malli.core.t_malli$core5615.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5615.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_child_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5615.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5615.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.props);
}));

(malli.core.t_malli$core5615.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126).cljs$core$IFn$_invoke$arity$1(self__.props);
}));

(malli.core.t_malli$core5615.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5615.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5615.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,p__5618,children,options){
var self__ = this;
var map__5619 = p__5618;
var map__5619__$1 = cljs.core.__destructure_map.call(null,map__5619);
var properties = map__5619__$1;
var min = cljs.core.get.call(null,map__5619__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5619__$1,new cljs.core.Keyword(null,"max","max",61366548));
var parent__$1 = this;
var temp__5823__auto__ = new cljs.core.Keyword(null,"compile","compile",608186429).cljs$core$IFn$_invoke$arity$1(self__.props);
if(cljs.core.truth_(temp__5823__auto__)){
var compile = temp__5823__auto__;
return malli.core._into_schema.call(null,malli.core._collection_schema.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,self__.props,new cljs.core.Keyword(null,"compile","compile",608186429)),compile.call(null,properties,children,options))),properties,children,options);
} else {
var map__5620 = self__.props;
var map__5620__$1 = cljs.core.__destructure_map.call(null,map__5620);
var fpred = cljs.core.get.call(null,map__5620__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var fempty = cljs.core.get.call(null,map__5620__$1,new cljs.core.Keyword(null,"empty","empty",767870958));
var fin = cljs.core.get.call(null,map__5620__$1,new cljs.core.Keyword(null,"in","in",-1531184865),(function (i,_){
return i;
}));
var type = cljs.core.get.call(null,map__5620__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var parse = cljs.core.get.call(null,map__5620__$1,new cljs.core.Keyword(null,"parse","parse",-1162164619));
var unparse = cljs.core.get.call(null,map__5620__$1,new cljs.core.Keyword(null,"unparse","unparse",-1504915552));
malli.core._check_children_BANG_.call(null,type,properties,children,(1),(1));

var vec__5621 = malli.core._vmap.call(null,(function (p1__5612_SHARP_){
return malli.core.schema.call(null,p1__5612_SHARP_,options);
}),children);
var schema = cljs.core.nth.call(null,vec__5621,(0),null);
var children__$1 = vec__5621;
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var bounded = (cljs.core.truth_(new cljs.core.Keyword(null,"bounded","bounded",-1973595643).cljs$core$IFn$_invoke$arity$1(self__.props))?(function (){
if(cljs.core.truth_(fempty)){
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","cannot-provide-empty-and-bounded-props","malli.core/cannot-provide-empty-and-bounded-props",1469796922));
} else {
}

return malli.core._needed_bounded_checks.call(null,min,max,options);
})()
:null);
var validate_limits = (cljs.core.truth_(bounded)?malli.core._validate_bounded_limits.call(null,(function (){var x__5113__auto__ = bounded;
var y__5114__auto__ = (function (){var or__5025__auto__ = max;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return bounded;
}
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),min,max):malli.core._validate_limits.call(null,min,max));
var simple_parser_QMARK_ = (function (opts){
return ((cljs.core.boolean$.call(null,bounded)) || (cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941).cljs$core$IFn$_invoke$arity$1(malli.core._parser_info.call(null,schema,opts)))));
});
var __GT_parser = (function (f,g){
var child_parser = f.call(null,schema);
var simple = malli.core._lookup_or_update_cache.call(null,cache,new cljs.core.Keyword("malli.core","simple-parser?","malli.core/simple-parser?",-428192719),(function (){
return simple_parser_QMARK_.call(null,null);
}));
return (function (x){
if(cljs.core.not.call(null,fpred.call(null,x))){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
if(cljs.core.not.call(null,validate_limits.call(null,x))){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
if(cljs.core.truth_(bounded)){
var child_validator = child_parser;
return cljs.core.reduce.call(null,(function (x__$1,v){
if(cljs.core.truth_(child_validator.call(null,v))){
return x__$1;
} else {
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
}
}),x,(function (){var G__5624 = x;
if((!(malli.core._safely_countable_QMARK_.call(null,x)))){
return cljs.core.eduction.call(null,cljs.core.take.call(null,bounded),G__5624);
} else {
return G__5624;
}
})());
} else {
var x_SINGLEQUOTE_ = cljs.core.reduce.call(null,(function (acc,v){
var v_SINGLEQUOTE_ = child_parser.call(null,v);
if(malli.impl.util._invalid_QMARK_.call(null,v_SINGLEQUOTE_)){
return cljs.core.reduced.call(null,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
} else {
var G__5625 = acc;
if(cljs.core.not.call(null,simple)){
return cljs.core.conj.call(null,G__5625,v_SINGLEQUOTE_);
} else {
return G__5625;
}
}
}),(cljs.core.truth_(simple)?x:cljs.core.PersistentVector.EMPTY),x);
if(malli.impl.util._invalid_QMARK_.call(null,x_SINGLEQUOTE_)){
return x_SINGLEQUOTE_;
} else {
if(cljs.core.truth_(g)){
return g.call(null,x_SINGLEQUOTE_);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = fempty;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not.call(null,simple)) || (cljs.core.not.call(null,fpred.call(null,x_SINGLEQUOTE_))));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.into.call(null,fempty,x_SINGLEQUOTE_);
} else {
return x_SINGLEQUOTE_;

}
}
}
}

}
}
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5626 = (function (form,options,meta5616,temp__5823__auto__,fpred,fin,props,properties,unparse,schema,children,min,map__5620,bounded,parent,simple_parser_QMARK_,map__5619,type,__GT_parser,fempty,cache,validate_limits,max,p__5618,vec__5621,parse,meta5627){
this.form = form;
this.options = options;
this.meta5616 = meta5616;
this.temp__5823__auto__ = temp__5823__auto__;
this.fpred = fpred;
this.fin = fin;
this.props = props;
this.properties = properties;
this.unparse = unparse;
this.schema = schema;
this.children = children;
this.min = min;
this.map__5620 = map__5620;
this.bounded = bounded;
this.parent = parent;
this.simple_parser_QMARK_ = simple_parser_QMARK_;
this.map__5619 = map__5619;
this.type = type;
this.__GT_parser = __GT_parser;
this.fempty = fempty;
this.cache = cache;
this.validate_limits = validate_limits;
this.max = max;
this.p__5618 = p__5618;
this.vec__5621 = vec__5621;
this.parse = parse;
this.meta5627 = meta5627;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5628,meta5627__$1){
var self__ = this;
var _5628__$1 = this;
return (new malli.core.t_malli$core5626(self__.form,self__.options,self__.meta5616,self__.temp__5823__auto__,self__.fpred,self__.fin,self__.props,self__.properties,self__.unparse,self__.schema,self__.children,self__.min,self__.map__5620,self__.bounded,self__.parent,self__.simple_parser_QMARK_,self__.map__5619,self__.type,self__.__GT_parser,self__.fempty,self__.cache,self__.validate_limits,self__.max,self__.p__5618,self__.vec__5621,self__.parse,meta5627__$1));
}));

(malli.core.t_malli$core5626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5628){
var self__ = this;
var _5628__$1 = this;
return self__.meta5627;
}));

(malli.core.t_malli$core5626.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5626.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._to_child_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var validator = malli.core._validator.call(null,self__.schema);
return (function (x){
var and__5023__auto__ = self__.fpred.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = self__.validate_limits.call(null,x);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.reduce.call(null,(function (acc,v){
if(cljs.core.truth_(validator.call(null,v))){
return acc;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,(function (){var G__5629 = x;
if(cljs.core.truth_((function (){var and__5023__auto____$2 = self__.bounded;
if(cljs.core.truth_(and__5023__auto____$2)){
return (!(malli.core._safely_countable_QMARK_.call(null,x)));
} else {
return and__5023__auto____$2;
}
})())){
return cljs.core.eduction.call(null,cljs.core.take.call(null,self__.bounded),G__5629);
} else {
return G__5629;
}
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
var collection_QMARK_ = (function (p1__5613_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__5613_SHARP_)) || (cljs.core.set_QMARK_.call(null,p1__5613_SHARP_)));
});
var this_transformer = malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1);
var child_transformer = malli.core._transformer.call(null,self__.schema,transformer,method,options__$1);
var __GT_child = (cljs.core.truth_(child_transformer)?(cljs.core.truth_(self__.fempty)?malli.core._collection_transformer.call(null,child_transformer,self__.fempty):(function (p1__5614_SHARP_){
return malli.core._vmap.call(null,child_transformer,p1__5614_SHARP_);
})):null);
var __GT_child__$1 = malli.core._guard.call(null,collection_QMARK_,__GT_child);
return malli.core._intercepting.call(null,this_transformer,__GT_child__$1);
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(malli.core._accept.call(null,walker,this$__$1,path,options__$1))){
return malli.core._outer.call(null,walker,this$__$1,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core._inner.call(null,walker,self__.schema,cljs.core.conj.call(null,path,new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537)),options__$1)], null),options__$1);
} else {
return null;
}
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,(cljs.core.truth_(self__.bounded)?malli.core._validator:malli.core._parser),(cljs.core.truth_(self__.bounded)?cljs.core.identity:self__.parse));
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var explainer = malli.core._explainer.call(null,self__.schema,cljs.core.conj.call(null,path,(0)));
return (function (x,in$,acc){
if(cljs.core.not.call(null,self__.fpred.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450)));
} else {
if(cljs.core.not.call(null,self__.validate_limits.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword("malli.core","limits","malli.core/limits",-1343466863)));
} else {
var size = (cljs.core.truth_((function (){var and__5023__auto__ = self__.bounded;
if(cljs.core.truth_(and__5023__auto__)){
return (!(malli.core._safely_countable_QMARK_.call(null,x)));
} else {
return and__5023__auto__;
}
})())?self__.bounded:null);
var acc__$1 = acc;
var i = (0);
var G__5633 = cljs.core.seq.call(null,x);
var vec__5634 = G__5633;
var seq__5635 = cljs.core.seq.call(null,vec__5634);
var first__5636 = cljs.core.first.call(null,seq__5635);
var seq__5635__$1 = cljs.core.next.call(null,seq__5635);
var x__$1 = first__5636;
var xs = seq__5635__$1;
var ne = vec__5634;
var acc__$2 = acc__$1;
var i__$1 = i;
var G__5633__$1 = G__5633;
while(true){
var acc__$3 = acc__$2;
var i__$2 = i__$1;
var vec__5637 = G__5633__$1;
var seq__5638 = cljs.core.seq.call(null,vec__5637);
var first__5639 = cljs.core.first.call(null,seq__5638);
var seq__5638__$1 = cljs.core.next.call(null,seq__5638);
var x__$2 = first__5639;
var xs__$1 = seq__5638__$1;
var ne__$1 = vec__5637;
if(((ne__$1) && (((cljs.core.not.call(null,size)) || ((i__$2 < size)))))){
var G__5640 = (function (){var or__5025__auto__ = explainer.call(null,x__$2,cljs.core.conj.call(null,in$,self__.fin.call(null,i__$2,x__$2)),acc__$3);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return acc__$3;
}
})();
if(xs__$1){
var G__5641 = G__5640;
var G__5642 = (i__$2 + (1));
var G__5643 = xs__$1;
acc__$2 = G__5641;
i__$1 = G__5642;
G__5633__$1 = G__5643;
continue;
} else {
return G__5640;
}
} else {
return acc__$3;
}
break;
}

}
}
});
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,(cljs.core.truth_(self__.bounded)?malli.core._validator:malli.core._unparser),(cljs.core.truth_(self__.bounded)?cljs.core.identity:self__.unparse));
}));

(malli.core.t_malli$core5626.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5626.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5626.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5626.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5626.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5626.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.schema;
}));

(malli.core.t_malli$core5626.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,_,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_children.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
}));

(malli.core.t_malli$core5626.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5626.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),self__.simple_parser_QMARK_.call(null,opts)], null);
}));

(malli.core.t_malli$core5626.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"meta5616","meta5616",-1868853694,null),new cljs.core.Symbol(null,"temp__5823__auto__","temp__5823__auto__",324238723,null),new cljs.core.Symbol(null,"fpred","fpred",1016397475,null),new cljs.core.Symbol(null,"fin","fin",-1942189562,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"unparse","unparse",135615975,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"map__5620","map__5620",-1673220373,null),new cljs.core.Symbol(null,"bounded","bounded",-333064116,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5615","malli.core/t_malli$core5615",-1177834310,null)], null)),new cljs.core.Symbol(null,"simple-parser?","simple-parser?",1031530832,null),new cljs.core.Symbol(null,"map__5619","map__5619",-242284814,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"fempty","fempty",1035749368,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"validate-limits","validate-limits",-2141569735,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"p__5618","p__5618",1484637276,null),new cljs.core.Symbol(null,"vec__5621","vec__5621",463267996,null),new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"meta5627","meta5627",1712674323,null)], null);
}));

(malli.core.t_malli$core5626.cljs$lang$type = true);

(malli.core.t_malli$core5626.cljs$lang$ctorStr = "malli.core/t_malli$core5626");

(malli.core.t_malli$core5626.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5626");
}));

/**
 * Positional factory function for malli.core/t_malli$core5626.
 */
malli.core.__GT_t_malli$core5626 = (function malli$core$_collection_schema_$___GT_t_malli$core5626(form__$1,options__$1,meta5616__$1,temp__5823__auto____$1,fpred__$1,fin__$1,props__$1,properties__$1,unparse__$1,schema__$1,children__$2,min__$1,map__5620__$2,bounded__$1,parent__$2,simple_parser_QMARK___$1,map__5619__$2,type__$1,__GT_parser__$1,fempty__$1,cache__$1,validate_limits__$1,max__$1,p__5618__$1,vec__5621__$1,parse__$1,meta5627){
return (new malli.core.t_malli$core5626(form__$1,options__$1,meta5616__$1,temp__5823__auto____$1,fpred__$1,fin__$1,props__$1,properties__$1,unparse__$1,schema__$1,children__$2,min__$1,map__5620__$2,bounded__$1,parent__$2,simple_parser_QMARK___$1,map__5619__$2,type__$1,__GT_parser__$1,fempty__$1,cache__$1,validate_limits__$1,max__$1,p__5618__$1,vec__5621__$1,parse__$1,meta5627));
});

}

return (new malli.core.t_malli$core5626(form,options,self__.meta5616,temp__5823__auto__,fpred,fin,self__.props,properties,unparse,schema,children__$1,min,map__5620__$1,bounded,parent__$1,simple_parser_QMARK_,map__5619__$1,type,__GT_parser,fempty,cache,validate_limits,max,p__5618,vec__5621,parse,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}
}));

(malli.core.t_malli$core5615.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"meta5616","meta5616",-1868853694,null)], null);
}));

(malli.core.t_malli$core5615.cljs$lang$type = true);

(malli.core.t_malli$core5615.cljs$lang$ctorStr = "malli.core/t_malli$core5615");

(malli.core.t_malli$core5615.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5615");
}));

/**
 * Positional factory function for malli.core/t_malli$core5615.
 */
malli.core.__GT_t_malli$core5615 = (function malli$core$_collection_schema_$___GT_t_malli$core5615(props__$1,meta5616){
return (new malli.core.t_malli$core5615(props__$1,meta5616));
});

}

return (new malli.core.t_malli$core5615(props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}
});
malli.core._tuple_schema = (function malli$core$_tuple_schema(var_args){
var G__5647 = arguments.length;
switch (G__5647) {
case 0:
return malli.core._tuple_schema.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._tuple_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._tuple_schema.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core._tuple_schema.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(malli.core._tuple_schema.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5648 = (function (opts,meta5649){
this.opts = opts;
this.meta5649 = meta5649;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5650,meta5649__$1){
var self__ = this;
var _5650__$1 = this;
return (new malli.core.t_malli$core5648(self__.opts,meta5649__$1));
}));

(malli.core.t_malli$core5648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5650){
var self__ = this;
var _5650__$1 = this;
return self__.meta5649;
}));

(malli.core.t_malli$core5648.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5648.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"tuple","tuple",-472667284);
}));

(malli.core.t_malli$core5648.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126).cljs$core$IFn$_invoke$arity$1(self__.opts);
}));

(malli.core.t_malli$core5648.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5648.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5648.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
var children__$1 = malli.core._vmap.call(null,(function (p1__5644_SHARP_){
return malli.core.schema.call(null,p1__5644_SHARP_,options);
}),children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var size = cljs.core.count.call(null,children__$1);
var cache = malli.core._create_cache.call(null,options);
var __GT_parser = (function (f){
var parsers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.map_indexed.call(null,cljs.core.vector)),children__$1);
return (function (x){
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),size)){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
return cljs.core.reduce_kv.call(null,(function (x__$1,i,c){
var v = cljs.core.get.call(null,x__$1,i);
var v_STAR_ = c.call(null,v);
if(malli.impl.util._invalid_QMARK_.call(null,v_STAR_)){
return cljs.core.reduced.call(null,v_STAR_);
} else {
if((v_STAR_ === v)){
return x__$1;
} else {
return cljs.core.assoc.call(null,x__$1,i,v_STAR_);

}
}
}),x,parsers);

}
}
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5651 = (function (form,options,meta5649,properties,children,parent,size,__GT_parser,cache,opts,meta5652){
this.form = form;
this.options = options;
this.meta5649 = meta5649;
this.properties = properties;
this.children = children;
this.parent = parent;
this.size = size;
this.__GT_parser = __GT_parser;
this.cache = cache;
this.opts = opts;
this.meta5652 = meta5652;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5653,meta5652__$1){
var self__ = this;
var _5653__$1 = this;
return (new malli.core.t_malli$core5651(self__.form,self__.options,self__.meta5649,self__.properties,self__.children,self__.parent,self__.size,self__.__GT_parser,self__.cache,self__.opts,meta5652__$1));
}));

(malli.core.t_malli$core5651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5653){
var self__ = this;
var _5653__$1 = this;
return self__.meta5652;
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var validators = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.mapv.call(null,malli.core._validator,self__.children)));
return (function (x){
var and__5023__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.size);
if(and__5023__auto____$1){
return cljs.core.reduce_kv.call(null,(function (acc,i,validator){
if(cljs.core.truth_(validator.call(null,cljs.core.nth.call(null,x,i)))){
return acc;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,validators);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
var this_transformer = malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1);
var __GT_children = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map_indexed.call(null,cljs.core.vector),cljs.core.keep.call(null,(function (p__5654){
var vec__5655 = p__5654;
var k = cljs.core.nth.call(null,vec__5655,(0),null);
var c = cljs.core.nth.call(null,vec__5655,(1),null);
var temp__5829__auto__ = malli.core._transformer.call(null,c,transformer,method,options__$1);
if((temp__5829__auto__ == null)){
return null;
} else {
var t = temp__5829__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,t], null);
}
}))),self__.children);
var apply__GT_children = ((cljs.core.seq.call(null,__GT_children))?malli.core._tuple_transformer.call(null,__GT_children):null);
var apply__GT_children__$1 = malli.core._guard.call(null,cljs.core.vector_QMARK_,apply__GT_children);
return malli.core._intercepting.call(null,this_transformer,apply__GT_children__$1);
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._parser);
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var explainers = malli.core._vmap.call(null,(function (p__5658){
var vec__5659 = p__5658;
var i = cljs.core.nth.call(null,vec__5659,(0),null);
var s = cljs.core.nth.call(null,vec__5659,(1),null);
return malli.core._explainer.call(null,s,cljs.core.conj.call(null,path,i));
}),cljs.core.map_indexed.call(null,cljs.core.vector,self__.children));
return (function (x,in$,acc){
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450)));
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),self__.size)){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword("malli.core","tuple-size","malli.core/tuple-size",-1004468077)));
} else {
if((self__.size === (0))){
return acc;
} else {
var acc__$1 = acc;
var i = (0);
var G__5668 = x;
var vec__5670 = G__5668;
var seq__5671 = cljs.core.seq.call(null,vec__5670);
var first__5672 = cljs.core.first.call(null,seq__5671);
var seq__5671__$1 = cljs.core.next.call(null,seq__5671);
var x__$1 = first__5672;
var xs = seq__5671__$1;
var G__5669 = explainers;
var vec__5673 = G__5669;
var seq__5674 = cljs.core.seq.call(null,vec__5673);
var first__5675 = cljs.core.first.call(null,seq__5674);
var seq__5674__$1 = cljs.core.next.call(null,seq__5674);
var e = first__5675;
var es = seq__5674__$1;
var acc__$2 = acc__$1;
var i__$1 = i;
var G__5668__$1 = G__5668;
var G__5669__$1 = G__5669;
while(true){
var acc__$3 = acc__$2;
var i__$2 = i__$1;
var vec__5676 = G__5668__$1;
var seq__5677 = cljs.core.seq.call(null,vec__5676);
var first__5678 = cljs.core.first.call(null,seq__5677);
var seq__5677__$1 = cljs.core.next.call(null,seq__5677);
var x__$2 = first__5678;
var xs__$1 = seq__5677__$1;
var vec__5679 = G__5669__$1;
var seq__5680 = cljs.core.seq.call(null,vec__5679);
var first__5681 = cljs.core.first.call(null,seq__5680);
var seq__5680__$1 = cljs.core.next.call(null,seq__5680);
var e__$1 = first__5681;
var es__$1 = seq__5680__$1;
var G__5682 = e__$1.call(null,x__$2,cljs.core.conj.call(null,in$,i__$2),acc__$3);
if(xs__$1){
var G__5684 = G__5682;
var G__5685 = (i__$2 + (1));
var G__5686 = xs__$1;
var G__5687 = es__$1;
acc__$2 = G__5684;
i__$1 = G__5685;
G__5668__$1 = G__5686;
G__5669__$1 = G__5687;
continue;
} else {
return G__5682;
}
break;
}
}

}
}
});
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._unparser);
}));

(malli.core.t_malli$core5651.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5651.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5651.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5651.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5651.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5651.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5651.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5651.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5651.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts__$1){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),cljs.core.every_QMARK_.call(null,(function (p1__5645_SHARP_){
return new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941).cljs$core$IFn$_invoke$arity$1(malli.core._parser_info.call(null,p1__5645_SHARP_,opts__$1));
}),self__.children)], null);
}));

(malli.core.t_malli$core5651.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"meta5649","meta5649",-2057889053,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5648","malli.core/t_malli$core5648",-1481276984,null)], null)),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta5652","meta5652",-831741164,null)], null);
}));

(malli.core.t_malli$core5651.cljs$lang$type = true);

(malli.core.t_malli$core5651.cljs$lang$ctorStr = "malli.core/t_malli$core5651");

(malli.core.t_malli$core5651.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5651");
}));

/**
 * Positional factory function for malli.core/t_malli$core5651.
 */
malli.core.__GT_t_malli$core5651 = (function malli$core$__GT_t_malli$core5651(form__$1,options__$1,meta5649__$1,properties__$1,children__$2,parent__$2,size__$1,__GT_parser__$1,cache__$1,opts__$1,meta5652){
return (new malli.core.t_malli$core5651(form__$1,options__$1,meta5649__$1,properties__$1,children__$2,parent__$2,size__$1,__GT_parser__$1,cache__$1,opts__$1,meta5652));
});

}

return (new malli.core.t_malli$core5651(form,options,self__.meta5649,properties,children__$1,parent__$1,size,__GT_parser,cache,self__.opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5648.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta5649","meta5649",-2057889053,null)], null);
}));

(malli.core.t_malli$core5648.cljs$lang$type = true);

(malli.core.t_malli$core5648.cljs$lang$ctorStr = "malli.core/t_malli$core5648");

(malli.core.t_malli$core5648.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5648");
}));

/**
 * Positional factory function for malli.core/t_malli$core5648.
 */
malli.core.__GT_t_malli$core5648 = (function malli$core$__GT_t_malli$core5648(opts__$1,meta5649){
return (new malli.core.t_malli$core5648(opts__$1,meta5649));
});

}

return (new malli.core.t_malli$core5648(opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}));

(malli.core._tuple_schema.cljs$lang$maxFixedArity = 1);

malli.core._enum_schema = (function malli$core$_enum_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5688 = (function (meta5689){
this.meta5689 = meta5689;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5690,meta5689__$1){
var self__ = this;
var _5690__$1 = this;
return (new malli.core.t_malli$core5688(meta5689__$1));
}));

(malli.core.t_malli$core5688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5690){
var self__ = this;
var _5690__$1 = this;
return self__.meta5689;
}));

(malli.core.t_malli$core5688.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5688.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._into_schema.call(null,parent__$1,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(ast),options);
}));

(malli.core.t_malli$core5688.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5688.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"enum","enum",1679018432);
}));

(malli.core.t_malli$core5688.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5688.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"enum","enum",1679018432),properties,children,(1),null);

var children__$1 = cljs.core.vec.call(null,children);
var schema = cljs.core.set.call(null,children__$1);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,cljs.core.identity,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5691 = (function (meta5689,parent,properties,children,options,schema,form,cache,meta5692){
this.meta5689 = meta5689;
this.parent = parent;
this.properties = properties;
this.children = children;
this.options = options;
this.schema = schema;
this.form = form;
this.cache = cache;
this.meta5692 = meta5692;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5693,meta5692__$1){
var self__ = this;
var _5693__$1 = this;
return (new malli.core.t_malli$core5691(self__.meta5689,self__.parent,self__.properties,self__.children,self__.options,self__.schema,self__.form,self__.cache,meta5692__$1));
}));

(malli.core.t_malli$core5691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5693){
var self__ = this;
var _5693__$1 = this;
return self__.meta5692;
}));

(malli.core.t_malli$core5691.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5691.prototype.malli$core$AST$_to_ast$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"values","values",372645556),self__.children], null),self__.properties,self__.options);
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function (x){
return cljs.core.contains_QMARK_.call(null,self__.schema,x);
});
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._intercepting.call(null,malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1));
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_leaf.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var validator = malli.core._validator.call(null,this$__$1);
return (function malli$core$_enum_schema_$_explain(x,in$,acc){
if(cljs.core.not.call(null,validator.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
return acc;
}
});
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5691.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5691.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5691.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5691.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5691.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5691.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5691.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5691.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5691.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5691.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5689","meta5689",-1415466811,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5688","malli.core/t_malli$core5688",-111407053,null)], null)),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5692","meta5692",-1714800421,null)], null);
}));

(malli.core.t_malli$core5691.cljs$lang$type = true);

(malli.core.t_malli$core5691.cljs$lang$ctorStr = "malli.core/t_malli$core5691");

(malli.core.t_malli$core5691.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5691");
}));

/**
 * Positional factory function for malli.core/t_malli$core5691.
 */
malli.core.__GT_t_malli$core5691 = (function malli$core$_enum_schema_$___GT_t_malli$core5691(meta5689__$1,parent__$2,properties__$1,children__$2,options__$1,schema__$1,form__$1,cache__$1,meta5692){
return (new malli.core.t_malli$core5691(meta5689__$1,parent__$2,properties__$1,children__$2,options__$1,schema__$1,form__$1,cache__$1,meta5692));
});

}

return (new malli.core.t_malli$core5691(self__.meta5689,parent__$1,properties,children__$1,options,schema,form,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5688.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5689","meta5689",-1415466811,null)], null);
}));

(malli.core.t_malli$core5688.cljs$lang$type = true);

(malli.core.t_malli$core5688.cljs$lang$ctorStr = "malli.core/t_malli$core5688");

(malli.core.t_malli$core5688.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5688");
}));

/**
 * Positional factory function for malli.core/t_malli$core5688.
 */
malli.core.__GT_t_malli$core5688 = (function malli$core$_enum_schema_$___GT_t_malli$core5688(meta5689){
return (new malli.core.t_malli$core5688(meta5689));
});

}

return (new malli.core.t_malli$core5688(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._re_schema = (function malli$core$_re_schema(class_QMARK_){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5695 = (function (class_QMARK_,meta5696){
this.class_QMARK_ = class_QMARK_;
this.meta5696 = meta5696;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5697,meta5696__$1){
var self__ = this;
var _5697__$1 = this;
return (new malli.core.t_malli$core5695(self__.class_QMARK_,meta5696__$1));
}));

(malli.core.t_malli$core5695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5697){
var self__ = this;
var _5697__$1 = this;
return self__.meta5696;
}));

(malli.core.t_malli$core5695.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5695.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_value_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5695.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5695.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"re","re",228676202);
}));

(malli.core.t_malli$core5695.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5695.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5695.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5695.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,p__5698,options){
var self__ = this;
var vec__5699 = p__5698;
var child = cljs.core.nth.call(null,vec__5699,(0),null);
var children = vec__5699;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"re","re",228676202),properties,children,(1),(1));

var children__$1 = cljs.core.vec.call(null,children);
var re = cljs.core.re_pattern.call(null,child);
var matches_QMARK_ = (function (p1__5694_SHARP_){
var and__5023__auto__ = typeof p1__5694_SHARP_ === 'string';
if(and__5023__auto__){
return cljs.core.re_find.call(null,re,p1__5694_SHARP_);
} else {
return and__5023__auto__;
}
});
var form = (new cljs.core.Delay((function (){
if(cljs.core.truth_(self__.class_QMARK_)){
return re;
} else {
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,cljs.core.identity,options);
}
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5702 = (function (form,options,child,properties,children,parent,meta5696,re,class_QMARK_,p__5698,matches_QMARK_,cache,vec__5699,meta5703){
this.form = form;
this.options = options;
this.child = child;
this.properties = properties;
this.children = children;
this.parent = parent;
this.meta5696 = meta5696;
this.re = re;
this.class_QMARK_ = class_QMARK_;
this.p__5698 = p__5698;
this.matches_QMARK_ = matches_QMARK_;
this.cache = cache;
this.vec__5699 = vec__5699;
this.meta5703 = meta5703;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5704,meta5703__$1){
var self__ = this;
var _5704__$1 = this;
return (new malli.core.t_malli$core5702(self__.form,self__.options,self__.child,self__.properties,self__.children,self__.parent,self__.meta5696,self__.re,self__.class_QMARK_,self__.p__5698,self__.matches_QMARK_,self__.cache,self__.vec__5699,meta5703__$1));
}));

(malli.core.t_malli$core5702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5704){
var self__ = this;
var _5704__$1 = this;
return self__.meta5703;
}));

(malli.core.t_malli$core5702.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5702.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._to_value_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._safe_pred.call(null,self__.matches_QMARK_);
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._intercepting.call(null,malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1));
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_leaf.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return (function malli$core$_re_schema_$_explain(x,in$,acc){
try{if(cljs.core.not.call(null,self__.matches_QMARK_.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
return acc;
}
}catch (e5705){if((e5705 instanceof Error)){
var e = e5705;
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,e))));
} else {
throw e5705;

}
}});
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5702.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5702.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5702.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5702.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5702.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5702.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5702.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5702.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5702.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5702.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5695","malli.core/t_malli$core5695",1652814963,null)], null)),new cljs.core.Symbol(null,"meta5696","meta5696",1377517935,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"class?","class?",2026366098,null),new cljs.core.Symbol(null,"p__5698","p__5698",-1234875276,null),new cljs.core.Symbol(null,"matches?","matches?",231232054,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"vec__5699","vec__5699",2132442559,null),new cljs.core.Symbol(null,"meta5703","meta5703",-635177131,null)], null);
}));

(malli.core.t_malli$core5702.cljs$lang$type = true);

(malli.core.t_malli$core5702.cljs$lang$ctorStr = "malli.core/t_malli$core5702");

(malli.core.t_malli$core5702.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5702");
}));

/**
 * Positional factory function for malli.core/t_malli$core5702.
 */
malli.core.__GT_t_malli$core5702 = (function malli$core$_re_schema_$___GT_t_malli$core5702(form__$1,options__$1,child__$1,properties__$1,children__$2,parent__$2,meta5696__$1,re__$1,class_QMARK___$1,p__5698__$1,matches_QMARK___$1,cache__$1,vec__5699__$1,meta5703){
return (new malli.core.t_malli$core5702(form__$1,options__$1,child__$1,properties__$1,children__$2,parent__$2,meta5696__$1,re__$1,class_QMARK___$1,p__5698__$1,matches_QMARK___$1,cache__$1,vec__5699__$1,meta5703));
});

}

return (new malli.core.t_malli$core5702(form,options,child,properties,children__$1,parent__$1,self__.meta5696,re,self__.class_QMARK_,p__5698,matches_QMARK_,cache,vec__5699,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5695.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class?","class?",2026366098,null),new cljs.core.Symbol(null,"meta5696","meta5696",1377517935,null)], null);
}));

(malli.core.t_malli$core5695.cljs$lang$type = true);

(malli.core.t_malli$core5695.cljs$lang$ctorStr = "malli.core/t_malli$core5695");

(malli.core.t_malli$core5695.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5695");
}));

/**
 * Positional factory function for malli.core/t_malli$core5695.
 */
malli.core.__GT_t_malli$core5695 = (function malli$core$_re_schema_$___GT_t_malli$core5695(class_QMARK___$1,meta5696){
return (new malli.core.t_malli$core5695(class_QMARK___$1,meta5696));
});

}

return (new malli.core.t_malli$core5695(class_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._fn_schema = (function malli$core$_fn_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5706 = (function (meta5707){
this.meta5707 = meta5707;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5708,meta5707__$1){
var self__ = this;
var _5708__$1 = this;
return (new malli.core.t_malli$core5706(meta5707__$1));
}));

(malli.core.t_malli$core5706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5708){
var self__ = this;
var _5708__$1 = this;
return self__.meta5707;
}));

(malli.core.t_malli$core5706.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5706.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_value_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5706.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5706.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(malli.core.t_malli$core5706.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5706.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),properties,children,(1),(1));

var children__$1 = cljs.core.vec.call(null,children);
var f = malli.core.eval.call(null,cljs.core.first.call(null,children__$1),options);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,cljs.core.identity,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5709 = (function (meta5707,parent,properties,children,options,f,form,cache,meta5710){
this.meta5707 = meta5707;
this.parent = parent;
this.properties = properties;
this.children = children;
this.options = options;
this.f = f;
this.form = form;
this.cache = cache;
this.meta5710 = meta5710;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5711,meta5710__$1){
var self__ = this;
var _5711__$1 = this;
return (new malli.core.t_malli$core5709(self__.meta5707,self__.parent,self__.properties,self__.children,self__.options,self__.f,self__.form,self__.cache,meta5710__$1));
}));

(malli.core.t_malli$core5709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5711){
var self__ = this;
var _5711__$1 = this;
return self__.meta5710;
}));

(malli.core.t_malli$core5709.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5709.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._to_value_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._safe_pred.call(null,self__.f);
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._intercepting.call(null,malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1));
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_leaf.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return (function malli$core$_fn_schema_$_explain(x,in$,acc){
try{if(cljs.core.not.call(null,self__.f.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
return acc;
}
}catch (e5712){if((e5712 instanceof Error)){
var e = e5712;
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,e))));
} else {
throw e5712;

}
}});
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5709.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5709.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5709.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5709.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5709.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5709.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5709.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5709.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5709.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5709.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5707","meta5707",-764768035,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5706","malli.core/t_malli$core5706",-62684464,null)], null)),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"meta5710","meta5710",-140805136,null)], null);
}));

(malli.core.t_malli$core5709.cljs$lang$type = true);

(malli.core.t_malli$core5709.cljs$lang$ctorStr = "malli.core/t_malli$core5709");

(malli.core.t_malli$core5709.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5709");
}));

/**
 * Positional factory function for malli.core/t_malli$core5709.
 */
malli.core.__GT_t_malli$core5709 = (function malli$core$_fn_schema_$___GT_t_malli$core5709(meta5707__$1,parent__$2,properties__$1,children__$2,options__$1,f__$1,form__$1,cache__$1,meta5710){
return (new malli.core.t_malli$core5709(meta5707__$1,parent__$2,properties__$1,children__$2,options__$1,f__$1,form__$1,cache__$1,meta5710));
});

}

return (new malli.core.t_malli$core5709(self__.meta5707,parent__$1,properties,children__$1,options,f,form,cache,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5706.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5707","meta5707",-764768035,null)], null);
}));

(malli.core.t_malli$core5706.cljs$lang$type = true);

(malli.core.t_malli$core5706.cljs$lang$ctorStr = "malli.core/t_malli$core5706");

(malli.core.t_malli$core5706.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5706");
}));

/**
 * Positional factory function for malli.core/t_malli$core5706.
 */
malli.core.__GT_t_malli$core5706 = (function malli$core$_fn_schema_$___GT_t_malli$core5706(meta5707){
return (new malli.core.t_malli$core5706(meta5707));
});

}

return (new malli.core.t_malli$core5706(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._maybe_schema = (function malli$core$_maybe_schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5714 = (function (meta5715){
this.meta5715 = meta5715;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5716,meta5715__$1){
var self__ = this;
var _5716__$1 = this;
return (new malli.core.t_malli$core5714(meta5715__$1));
}));

(malli.core.t_malli$core5714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5716){
var self__ = this;
var _5716__$1 = this;
return self__.meta5715;
}));

(malli.core.t_malli$core5714.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5714.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_child_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5714.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5714.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"maybe","maybe",-314397560);
}));

(malli.core.t_malli$core5714.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5714.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5714.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5714.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),properties,children,(1),(1));

var vec__5717 = malli.core._vmap.call(null,(function (p1__5713_SHARP_){
return malli.core.schema.call(null,p1__5713_SHARP_,options);
}),children);
var schema = cljs.core.nth.call(null,vec__5717,(0),null);
var children__$1 = vec__5717;
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var __GT_parser = (function (f){
var parser = f.call(null,schema);
return (function (x){
if((x == null)){
return x;
} else {
return parser.call(null,x);
}
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5720 = (function (form,options,properties,meta5715,schema,children,parent,__GT_parser,cache,vec__5717,meta5721){
this.form = form;
this.options = options;
this.properties = properties;
this.meta5715 = meta5715;
this.schema = schema;
this.children = children;
this.parent = parent;
this.__GT_parser = __GT_parser;
this.cache = cache;
this.vec__5717 = vec__5717;
this.meta5721 = meta5721;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5722,meta5721__$1){
var self__ = this;
var _5722__$1 = this;
return (new malli.core.t_malli$core5720(self__.form,self__.options,self__.properties,self__.meta5715,self__.schema,self__.children,self__.parent,self__.__GT_parser,self__.cache,self__.vec__5717,meta5721__$1));
}));

(malli.core.t_malli$core5720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5722){
var self__ = this;
var _5722__$1 = this;
return self__.meta5721;
}));

(malli.core.t_malli$core5720.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5720.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._to_child_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var validator = malli.core._validator.call(null,self__.schema);
return (function (x){
var or__5025__auto__ = (x == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return validator.call(null,x);
}
});
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,self__.children,transformer,method,options__$1);
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._parser);
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var explainer = malli.core._explainer.call(null,self__.schema,cljs.core.conj.call(null,path,(0)));
return (function malli$core$_maybe_schema_$_explain(x,in$,acc){
if((x == null)){
return acc;
} else {
return explainer.call(null,x,in$,acc);
}
});
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__GT_parser.call(null,malli.core._unparser);
}));

(malli.core.t_malli$core5720.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5720.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5720.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5720.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5720.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5720.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,(0),key)){
return self__.schema;
} else {
return default$;
}
}));

(malli.core.t_malli$core5720.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,(0),key)){
return malli.core._set_children.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","index-out-of-bounds","malli.core/index-out-of-bounds",-371273844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),this$__$1,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
}));

(malli.core.t_malli$core5720.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5720.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return malli.core._parser_info.call(null,self__.schema,opts);
}));

(malli.core.t_malli$core5720.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"meta5715","meta5715",-1601576569,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5714","malli.core/t_malli$core5714",1610611450,null)], null)),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"vec__5717","vec__5717",1918023165,null),new cljs.core.Symbol(null,"meta5721","meta5721",-2139773998,null)], null);
}));

(malli.core.t_malli$core5720.cljs$lang$type = true);

(malli.core.t_malli$core5720.cljs$lang$ctorStr = "malli.core/t_malli$core5720");

(malli.core.t_malli$core5720.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5720");
}));

/**
 * Positional factory function for malli.core/t_malli$core5720.
 */
malli.core.__GT_t_malli$core5720 = (function malli$core$_maybe_schema_$___GT_t_malli$core5720(form__$1,options__$1,properties__$1,meta5715__$1,schema__$1,children__$2,parent__$2,__GT_parser__$1,cache__$1,vec__5717__$1,meta5721){
return (new malli.core.t_malli$core5720(form__$1,options__$1,properties__$1,meta5715__$1,schema__$1,children__$2,parent__$2,__GT_parser__$1,cache__$1,vec__5717__$1,meta5721));
});

}

return (new malli.core.t_malli$core5720(form,options,properties,self__.meta5715,schema,children__$1,parent__$1,__GT_parser,cache,vec__5717,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5714.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5715","meta5715",-1601576569,null)], null);
}));

(malli.core.t_malli$core5714.cljs$lang$type = true);

(malli.core.t_malli$core5714.cljs$lang$ctorStr = "malli.core/t_malli$core5714");

(malli.core.t_malli$core5714.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5714");
}));

/**
 * Positional factory function for malli.core/t_malli$core5714.
 */
malli.core.__GT_t_malli$core5714 = (function malli$core$_maybe_schema_$___GT_t_malli$core5714(meta5715){
return (new malli.core.t_malli$core5714(meta5715));
});

}

return (new malli.core.t_malli$core5714(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._multi_schema = (function malli$core$_multi_schema(var_args){
var G__5726 = arguments.length;
switch (G__5726) {
case 0:
return malli.core._multi_schema.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._multi_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._multi_schema.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core._multi_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"naked-keys","naked-keys",-90769828),true], null));
}));

(malli.core._multi_schema.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5727 = (function (opts,meta5728){
this.opts = opts;
this.meta5728 = meta5728;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5729,meta5728__$1){
var self__ = this;
var _5729__$1 = this;
return (new malli.core.t_malli$core5727(self__.opts,meta5728__$1));
}));

(malli.core.t_malli$core5727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5729){
var self__ = this;
var _5729__$1 = this;
return self__.meta5728;
}));

(malli.core.t_malli$core5727.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5727.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_entry_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5727.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5727.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"multi","multi",-190293005);
}
}));

(malli.core.t_malli$core5727.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126).cljs$core$IFn$_invoke$arity$1(self__.opts);
}));

(malli.core.t_malli$core5727.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5727.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5727.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
var opts_SINGLEQUOTE_ = cljs.core.merge.call(null,self__.opts,cljs.core.select_keys.call(null,properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lazy-refs","lazy-refs",409178818)], null)));
var entry_parser = malli.core._create_entry_parser.call(null,children,opts_SINGLEQUOTE_,options);
var form = (new cljs.core.Delay((function (){
return malli.core._create_entry_form.call(null,parent__$1,properties,entry_parser,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var dispatch = malli.core.eval.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(properties),options);
var dispatch_map = (new cljs.core.Delay((function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,malli.core._entry_entries.call(null,entry_parser));
}),null));
var finder = (function (p__5730){
var map__5731 = p__5730;
var map__5731__$1 = cljs.core.__destructure_map.call(null,map__5731);
var m = map__5731__$1;
var default$ = cljs.core.get.call(null,map__5731__$1,new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176));
return (function (x){
return m.call(null,x,default$);
});
});
if(cljs.core.truth_(dispatch)){
} else {
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","missing-property","malli.core/missing-property",-818756333),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)], null));
}

if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.EntrySchema}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.DistributiveSchema}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5732 = (function (form,options,properties,children,entry_parser,parent,opts_SINGLEQUOTE_,dispatch,meta5728,cache,finder,opts,dispatch_map,meta5733){
this.form = form;
this.options = options;
this.properties = properties;
this.children = children;
this.entry_parser = entry_parser;
this.parent = parent;
this.opts_SINGLEQUOTE_ = opts_SINGLEQUOTE_;
this.dispatch = dispatch;
this.meta5728 = meta5728;
this.cache = cache;
this.finder = finder;
this.opts = opts;
this.dispatch_map = dispatch_map;
this.meta5733 = meta5733;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5732.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5732.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._entry_ast.call(null,this$__$1,malli.core._entry_keyset.call(null,self__.entry_parser));
}));

(malli.core.t_malli$core5732.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5732.prototype.malli$core$EntrySchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5732.prototype.malli$core$EntrySchema$_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_entries.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5732.prototype.malli$core$EntrySchema$_entry_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.entry_parser;
}));

(malli.core.t_malli$core5732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5734){
var self__ = this;
var _5734__$1 = this;
return self__.meta5733;
}));

(malli.core.t_malli$core5732.prototype.malli$core$DistributiveSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5732.prototype.malli$core$DistributiveSchema$_distributive_schema_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5732.prototype.malli$core$DistributiveSchema$_distribute_to_children$arity$3 = (function (this$,f,_){
var self__ = this;
var this$__$1 = this;
return malli.core._into_schema.call(null,self__.parent,self__.properties,cljs.core.mapv.call(null,(function (c){
return cljs.core.update.call(null,c,(2),f,self__.options);
}),malli.core._children.call(null,this$__$1)),self__.options);
}));

(malli.core.t_malli$core5732.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5732.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5734,meta5733__$1){
var self__ = this;
var _5734__$1 = this;
return (new malli.core.t_malli$core5732(self__.form,self__.options,self__.properties,self__.children,self__.entry_parser,self__.parent,self__.opts_SINGLEQUOTE_,self__.dispatch,self__.meta5728,self__.cache,self__.finder,self__.opts,self__.dispatch_map,meta5733__$1));
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var find = self__.finder.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,s){
return cljs.core.assoc.call(null,acc,k,malli.core._validator.call(null,s));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.dispatch_map)));
return (function (x){
var temp__5823__auto__ = find.call(null,self__.dispatch.call(null,x));
if(cljs.core.truth_(temp__5823__auto__)){
var validator = temp__5823__auto__;
return validator.call(null,x);
} else {
return false;
}
});
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
var this_transformer = malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1);
var __GT_children = cljs.core.reduce_kv.call(null,(function (acc,k,s){
var t = malli.core._transformer.call(null,s,transformer,method,options__$1);
var G__5735 = acc;
if(cljs.core.truth_(t)){
return cljs.core.assoc.call(null,G__5735,k,t);
} else {
return G__5735;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.dispatch_map));
var find = self__.finder.call(null,__GT_children);
var child_transformer = ((cljs.core.seq.call(null,__GT_children))?(function (x){
var temp__5827__auto__ = find.call(null,self__.dispatch.call(null,x));
if((temp__5827__auto__ == null)){
return x;
} else {
var t = temp__5827__auto__;
return t.call(null,x);
}
}):null);
return malli.core._intercepting.call(null,this_transformer,child_transformer);
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_entries.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var parse = (function (k,s){
var p = malli.core._parser.call(null,s);
return (function (x){
return malli.impl.util._map_valid.call(null,(function (p1__5724_SHARP_){
return malli.core.tag.call(null,k,p1__5724_SHARP_);
}),p.call(null,x));
});
});
var find = self__.finder.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,s){
return cljs.core.assoc.call(null,acc,k,parse.call(null,k,s));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.dispatch_map)));
return (function (x){
var temp__5827__auto__ = find.call(null,self__.dispatch.call(null,x));
if((temp__5827__auto__ == null)){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
var parser = temp__5827__auto__;
return parser.call(null,x);
}
});
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_children.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var find = self__.finder.call(null,cljs.core.reduce.call(null,(function (acc,p__5736){
var vec__5737 = p__5736;
var k = cljs.core.nth.call(null,vec__5737,(0),null);
var s = cljs.core.nth.call(null,vec__5737,(1),null);
return cljs.core.assoc.call(null,acc,k,malli.core._explainer.call(null,s,cljs.core.conj.call(null,path,k)));
}),cljs.core.PersistentArrayMap.EMPTY,malli.core._entries.call(null,this$__$1)));
return (function (x,in$,acc){
var temp__5823__auto__ = find.call(null,self__.dispatch.call(null,x));
if(cljs.core.truth_(temp__5823__auto__)){
var explainer = temp__5823__auto__;
return explainer.call(null,x,in$,acc);
} else {
var __GT_path = ((((cljs.core.map_QMARK_.call(null,x)) && ((self__.dispatch instanceof cljs.core.Keyword))))?(function (p1__5723_SHARP_){
return cljs.core.conj.call(null,p1__5723_SHARP_,self__.dispatch);
}):cljs.core.identity);
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,__GT_path.call(null,path),__GT_path.call(null,in$),this$__$1,x,new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675)));
}
});
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var unparsers = cljs.core.reduce_kv.call(null,(function (acc,k,s){
return cljs.core.assoc.call(null,acc,k,malli.core._unparser.call(null,s));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.dispatch_map));
return (function (x){
if(malli.core.tag_QMARK_.call(null,x)){
var temp__5827__auto__ = unparsers.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x));
if((temp__5827__auto__ == null)){
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
} else {
var f = temp__5827__auto__;
return f.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x));
}
} else {
return new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900);
}
});
}));

(malli.core.t_malli$core5732.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5732.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5732.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5732.prototype.malli$core$LensSchema$_get$arity$3 = (function (this$,key,default$){
var self__ = this;
var this$__$1 = this;
return malli.core._get_entries.call(null,this$__$1,key,default$);
}));

(malli.core.t_malli$core5732.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_entries.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"entry-parser","entry-parser",-1698599125,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5727","malli.core/t_malli$core5727",-34278377,null)], null)),new cljs.core.Symbol(null,"opts'","opts'",-1154334730,null),new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"meta5728","meta5728",1422014521,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"finder","finder",1492719066,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"dispatch-map","dispatch-map",1489026142,null),new cljs.core.Symbol(null,"meta5733","meta5733",-985472476,null)], null);
}));

(malli.core.t_malli$core5732.cljs$lang$type = true);

(malli.core.t_malli$core5732.cljs$lang$ctorStr = "malli.core/t_malli$core5732");

(malli.core.t_malli$core5732.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5732");
}));

/**
 * Positional factory function for malli.core/t_malli$core5732.
 */
malli.core.__GT_t_malli$core5732 = (function malli$core$__GT_t_malli$core5732(form__$1,options__$1,properties__$1,children__$1,entry_parser__$1,parent__$2,opts_SINGLEQUOTE___$1,dispatch__$1,meta5728__$1,cache__$1,finder__$1,opts__$1,dispatch_map__$1,meta5733){
return (new malli.core.t_malli$core5732(form__$1,options__$1,properties__$1,children__$1,entry_parser__$1,parent__$2,opts_SINGLEQUOTE___$1,dispatch__$1,meta5728__$1,cache__$1,finder__$1,opts__$1,dispatch_map__$1,meta5733));
});

}

return (new malli.core.t_malli$core5732(form,options,properties,children,entry_parser,parent__$1,opts_SINGLEQUOTE_,dispatch,self__.meta5728,cache,finder,self__.opts,dispatch_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5727.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta5728","meta5728",1422014521,null)], null);
}));

(malli.core.t_malli$core5727.cljs$lang$type = true);

(malli.core.t_malli$core5727.cljs$lang$ctorStr = "malli.core/t_malli$core5727");

(malli.core.t_malli$core5727.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5727");
}));

/**
 * Positional factory function for malli.core/t_malli$core5727.
 */
malli.core.__GT_t_malli$core5727 = (function malli$core$__GT_t_malli$core5727(opts__$1,meta5728){
return (new malli.core.t_malli$core5727(opts__$1,meta5728));
});

}

return (new malli.core.t_malli$core5727(opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}));

(malli.core._multi_schema.cljs$lang$maxFixedArity = 1);

malli.core._identify_ref_schema = (function malli$core$_identify_ref_schema(schema){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),malli.registry._schemas.call(null,malli.core._registry.call(null,malli.core._options.call(null,schema))),new cljs.core.Keyword(null,"name","name",1843675177),malli.core._ref.call(null,schema)], null);
});
malli.core._STAR_ref_validators_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.core._ref_schema = (function malli$core$_ref_schema(var_args){
var G__5745 = arguments.length;
switch (G__5745) {
case 0:
return malli.core._ref_schema.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core._ref_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._ref_schema.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core._ref_schema.call(null,null);
}));

(malli.core._ref_schema.cljs$core$IFn$_invoke$arity$1 = (function (p__5746){
var map__5747 = p__5746;
var map__5747__$1 = cljs.core.__destructure_map.call(null,map__5747);
var lazy = cljs.core.get.call(null,map__5747__$1,new cljs.core.Keyword(null,"lazy","lazy",-424547181));
var type_properties = cljs.core.get.call(null,map__5747__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5748 = (function (p__5746,map__5747,lazy,type_properties,meta5749){
this.p__5746 = p__5746;
this.map__5747 = map__5747;
this.lazy = lazy;
this.type_properties = type_properties;
this.meta5749 = meta5749;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5750,meta5749__$1){
var self__ = this;
var _5750__$1 = this;
return (new malli.core.t_malli$core5748(self__.p__5746,self__.map__5747,self__.lazy,self__.type_properties,meta5749__$1));
}));

(malli.core.t_malli$core5748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5750){
var self__ = this;
var _5750__$1 = this;
return self__.meta5749;
}));

(malli.core.t_malli$core5748.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5748.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_value_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5748.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5748.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"ref","ref",1289896967);
}));

(malli.core.t_malli$core5748.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type_properties;
}));

(malli.core.t_malli$core5748.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,p__5751,p__5752){
var self__ = this;
var vec__5753 = p__5751;
var ref = cljs.core.nth.call(null,vec__5753,(0),null);
var children = vec__5753;
var map__5756 = p__5752;
var map__5756__$1 = cljs.core.__destructure_map.call(null,map__5756);
var options = map__5756__$1;
var allow_invalid_refs = cljs.core.get.call(null,map__5756__$1,new cljs.core.Keyword("malli.core","allow-invalid-refs","malli.core/allow-invalid-refs",-1863169617));
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),properties,children,(1),(1));

if(malli.core._reference_QMARK_.call(null,ref)){
} else {
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-ref","malli.core/invalid-ref",-1109933109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}

var _QMARK_schema = malli.core._memoize.call(null,(function (){
var or__5025__auto__ = malli.registry._schema.call(null,malli.core._registry.call(null,options),ref);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(allow_invalid_refs)){
return null;
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-ref","malli.core/invalid-ref",-1109933109),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}
}
}));
var _ = (cljs.core.truth_(self__.lazy)?null:_QMARK_schema.call(null));
var rf = malli.core._memoize.call(null,(function (){
return malli.core.schema.call(null,_QMARK_schema.call(null),options);
}));
var children__$1 = cljs.core.vec.call(null,children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,cljs.core.identity,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var __GT_parser = (function (f){
var parser = malli.core._memoize.call(null,(function (){
return f.call(null,rf.call(null));
}));
return (function (x){
return parser.call(null).call(null,x);
});
});
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.RegexSchema}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {malli.core.RefSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5757 = (function (form,options,map__5747,properties,map__5756,_QMARK_schema,p__5751,children,type_properties,rf,parent,_,ref,meta5749,vec__5753,p__5752,p__5746,__GT_parser,cache,lazy,allow_invalid_refs,meta5758){
this.form = form;
this.options = options;
this.map__5747 = map__5747;
this.properties = properties;
this.map__5756 = map__5756;
this._QMARK_schema = _QMARK_schema;
this.p__5751 = p__5751;
this.children = children;
this.type_properties = type_properties;
this.rf = rf;
this.parent = parent;
this._ = _;
this.ref = ref;
this.meta5749 = meta5749;
this.vec__5753 = vec__5753;
this.p__5752 = p__5752;
this.p__5746 = p__5746;
this.__GT_parser = __GT_parser;
this.cache = cache;
this.lazy = lazy;
this.allow_invalid_refs = allow_invalid_refs;
this.meta5758 = meta5758;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5757.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$RefSchema$_ref$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.ref;
}));

(malli.core.t_malli$core5757.prototype.malli$core$RefSchema$_deref$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.rf.call(null);
}));

(malli.core.t_malli$core5757.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,___$1){
var self__ = this;
var this$__$1 = this;
return malli.core._to_value_ast.call(null,this$__$1);
}));

(malli.core.t_malli$core5757.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5757.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
var cycles = new cljs.core.Keyword("malli.core","parser-info-cycles","malli.core/parser-info-cycles",-755889152).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentHashSet.EMPTY);
var ref_id = malli.core._identify_ref_schema.call(null,this$__$1);
if(cljs.core.truth_(cycles.call(null,ref_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
} else {
return malli.core._parser_info.call(null,malli.core._deref.call(null,this$__$1),cljs.core.assoc.call(null,opts,new cljs.core.Keyword("malli.core","parser-info-cycles","malli.core/parser-info-cycles",-755889152),cljs.core.conj.call(null,cycles,ref_id)));
}
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_op_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return false;
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","potentially-recursive-seqex","malli.core/potentially-recursive-seqex",-1574993850),this$__$1);
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_explainer$arity$2 = (function (this$,___$1){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","potentially-recursive-seqex","malli.core/potentially-recursive-seqex",-1574993850),this$__$1);
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","potentially-recursive-seqex","malli.core/potentially-recursive-seqex",-1574993850),this$__$1);
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","potentially-recursive-seqex","malli.core/potentially-recursive-seqex",-1574993850),this$__$1);
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_transformer$arity$4 = (function (this$,___$1,___$2,___$3){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","potentially-recursive-seqex","malli.core/potentially-recursive-seqex",-1574993850),this$__$1);
}));

(malli.core.t_malli$core5757.prototype.malli$core$RegexSchema$_regex_min_max$arity$2 = (function (this$,___$1){
var self__ = this;
var this$__$1 = this;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","potentially-recursive-seqex","malli.core/potentially-recursive-seqex",-1574993850),this$__$1);
}));

(malli.core.t_malli$core5757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5759){
var self__ = this;
var _5759__$1 = this;
return self__.meta5758;
}));

(malli.core.t_malli$core5757.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$Cached$_cache$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.cache;
}));

(malli.core.t_malli$core5757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5759,meta5758__$1){
var self__ = this;
var _5759__$1 = this;
return (new malli.core.t_malli$core5757(self__.form,self__.options,self__.map__5747,self__.properties,self__.map__5756,self__._QMARK_schema,self__.p__5751,self__.children,self__.type_properties,self__.rf,self__.parent,self__._,self__.ref,self__.meta5749,self__.vec__5753,self__.p__5752,self__.p__5746,self__.__GT_parser,self__.cache,self__.lazy,self__.allow_invalid_refs,meta5758__$1));
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var id = malli.core._identify_ref_schema.call(null,this$__$1);
var id__GT_validator = malli.core._STAR_ref_validators_STAR_;
var or__5025__auto__ = id__GT_validator.call(null,id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var knot = cljs.core.atom.call(null,null);
var rec = (function (p1__5741_SHARP_){
return cljs.core.deref.call(null,knot).call(null,p1__5741_SHARP_);
});
var __GT_validator = (function (){
var or__5025__auto____$1 = cljs.core.deref.call(null,knot);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var f = (function (){var _STAR_ref_validators_STAR__orig_val__5760 = malli.core._STAR_ref_validators_STAR_;
var _STAR_ref_validators_STAR__temp_val__5761 = cljs.core.assoc.call(null,id__GT_validator,id,rec);
(malli.core._STAR_ref_validators_STAR_ = _STAR_ref_validators_STAR__temp_val__5761);

try{return malli.core._validator.call(null,self__.rf.call(null));
}finally {(malli.core._STAR_ref_validators_STAR_ = _STAR_ref_validators_STAR__orig_val__5760);
}})();
cljs.core.compare_and_set_BANG_.call(null,knot,null,f);

return cljs.core.deref.call(null,knot);
}
});
if(cljs.core.truth_(self__.lazy)){
return (function (p1__5742_SHARP_){
return __GT_validator.call(null).call(null,p1__5742_SHARP_);
});
} else {
return __GT_validator.call(null);
}
}
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_options$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.options;
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
var key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core._identify_ref_schema.call(null,this$__$1),method], null);
var or__5025__auto__ = (function (){var G__5762 = cljs.core.get_in.call(null,options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","ref-transformer-cache","malli.core/ref-transformer-cache",-1385588329),key], null));
if((G__5762 == null)){
return null;
} else {
return cljs.core.deref.call(null,G__5762);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var knot = cljs.core.atom.call(null,null);
var this_transformer = malli.core._value_transformer.call(null,transformer,this$__$1,method,options__$1);
var deref_transformer = malli.core._memoize.call(null,(function (){
return malli.core._transformer.call(null,self__.rf.call(null),transformer,method,cljs.core.assoc_in.call(null,options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","ref-transformer-cache","malli.core/ref-transformer-cache",-1385588329),key], null),knot));
}));
var f = malli.core._intercepting.call(null,this_transformer,(function (x){
var temp__5827__auto__ = deref_transformer.call(null);
if((temp__5827__auto__ == null)){
return x;
} else {
var t = temp__5827__auto__;
return t.call(null,x);
}
}));
cljs.core.compare_and_set_BANG_.call(null,knot,null,f);

return f;
}
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
var accept = (function (){
return malli.core._inner.call(null,walker,self__.rf.call(null),cljs.core.into.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),malli.core._update.call(null,options__$1,new cljs.core.Keyword("malli.core","walked-refs","malli.core/walked-refs",-2010140962),(function (p1__5743_SHARP_){
return cljs.core.conj.call(null,(function (){var or__5025__auto__ = p1__5743_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),self__.ref);
})));
});
if(cljs.core.truth_(malli.core._accept.call(null,walker,this$__$1,path,options__$1))){
if(((cljs.core.not.call(null,malli.core._boolean_fn.call(null,new cljs.core.Keyword("malli.core","walk-refs","malli.core/walk-refs",755904802).cljs$core$IFn$_invoke$arity$2(options__$1,false)).call(null,self__.ref))) || (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("malli.core","walked-refs","malli.core/walked-refs",-2010140962).cljs$core$IFn$_invoke$arity$1(options__$1),self__.ref)))){
return malli.core._outer.call(null,walker,this$__$1,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ref], null),options__$1);
} else {
return malli.core._outer.call(null,walker,this$__$1,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accept.call(null)], null),options__$1);
}
} else {
return null;
}
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_parser$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.__GT_parser.call(null,malli.core._parser);
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_properties$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.properties;
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_children$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.children;
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_form$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_explainer$arity$2 = (function (___$1,path){
var self__ = this;
var ___$2 = this;
var explainer = malli.core._memoize.call(null,(function (){
return malli.core._explainer.call(null,self__.rf.call(null),cljs.core.into.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
}));
return (function (x,in$,acc){
return explainer.call(null).call(null,x,in$,acc);
});
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_unparser$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.__GT_parser.call(null,malli.core._unparser);
}));

(malli.core.t_malli$core5757.prototype.malli$core$Schema$_parent$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.parent;
}));

(malli.core.t_malli$core5757.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5757.prototype.malli$core$LensSchema$_get$arity$3 = (function (___$1,key,default$){
var self__ = this;
var ___$2 = this;
if(cljs.core._EQ_.call(null,key,(0))){
return malli.core._pointer.call(null,self__.ref,self__.rf.call(null),self__.options);
} else {
return default$;
}
}));

(malli.core.t_malli$core5757.prototype.malli$core$LensSchema$_keep$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5757.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,key,(0))){
return malli.core._set_children.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","index-out-of-bounds","malli.core/index-out-of-bounds",-371273844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),this$__$1,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
}));

(malli.core.t_malli$core5757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"map__5747","map__5747",-747927580,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"map__5756","map__5756",189672135,null),new cljs.core.Symbol(null,"?schema","?schema",-271534072,null),new cljs.core.Symbol(null,"p__5751","p__5751",-1915401656,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5748","malli.core/t_malli$core5748",1799487120,null)], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"meta5749","meta5749",1568089939,null),new cljs.core.Symbol(null,"vec__5753","vec__5753",1015713620,null),new cljs.core.Symbol(null,"p__5752","p__5752",-1935413962,null),new cljs.core.Symbol(null,"p__5746","p__5746",-1488570762,null),new cljs.core.Symbol(null,"->parser","->parser",1105019639,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"lazy","lazy",1215984346,null),new cljs.core.Symbol(null,"allow-invalid-refs","allow-invalid-refs",-815552802,null),new cljs.core.Symbol(null,"meta5758","meta5758",187806153,null)], null);
}));

(malli.core.t_malli$core5757.cljs$lang$type = true);

(malli.core.t_malli$core5757.cljs$lang$ctorStr = "malli.core/t_malli$core5757");

(malli.core.t_malli$core5757.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5757");
}));

/**
 * Positional factory function for malli.core/t_malli$core5757.
 */
malli.core.__GT_t_malli$core5757 = (function malli$core$__GT_t_malli$core5757(form__$1,options__$1,map__5747__$1,properties__$1,map__5756__$2,_QMARK_schema__$1,p__5751__$1,children__$2,type_properties__$1,rf__$1,parent__$2,___$1,ref__$1,meta5749__$1,vec__5753__$1,p__5752__$1,p__5746__$1,__GT_parser__$1,cache__$1,lazy__$1,allow_invalid_refs__$1,meta5758){
return (new malli.core.t_malli$core5757(form__$1,options__$1,map__5747__$1,properties__$1,map__5756__$2,_QMARK_schema__$1,p__5751__$1,children__$2,type_properties__$1,rf__$1,parent__$2,___$1,ref__$1,meta5749__$1,vec__5753__$1,p__5752__$1,p__5746__$1,__GT_parser__$1,cache__$1,lazy__$1,allow_invalid_refs__$1,meta5758));
});

}

return (new malli.core.t_malli$core5757(form,options,self__.map__5747,properties,map__5756__$1,_QMARK_schema,p__5751,children__$1,self__.type_properties,rf,parent__$1,_,ref,self__.meta5749,vec__5753,p__5752,self__.p__5746,__GT_parser,cache,self__.lazy,allow_invalid_refs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5748.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__5746","p__5746",-1488570762,null),new cljs.core.Symbol(null,"map__5747","map__5747",-747927580,null),new cljs.core.Symbol(null,"lazy","lazy",1215984346,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"meta5749","meta5749",1568089939,null)], null);
}));

(malli.core.t_malli$core5748.cljs$lang$type = true);

(malli.core.t_malli$core5748.cljs$lang$ctorStr = "malli.core/t_malli$core5748");

(malli.core.t_malli$core5748.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5748");
}));

/**
 * Positional factory function for malli.core/t_malli$core5748.
 */
malli.core.__GT_t_malli$core5748 = (function malli$core$__GT_t_malli$core5748(p__5746__$1,map__5747__$2,lazy__$1,type_properties__$1,meta5749){
return (new malli.core.t_malli$core5748(p__5746__$1,map__5747__$2,lazy__$1,type_properties__$1,meta5749));
});

}

return (new malli.core.t_malli$core5748(p__5746,map__5747__$1,lazy,type_properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
}));

(malli.core._ref_schema.cljs$lang$maxFixedArity = 1);

malli.core._schema_schema = (function malli$core$_schema_schema(p__5765){
var map__5766 = p__5765;
var map__5766__$1 = cljs.core.__destructure_map.call(null,map__5766);
var id = cljs.core.get.call(null,map__5766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var raw = cljs.core.get.call(null,map__5766__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var internal = (function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return raw;
}
})();
var type = (cljs.core.truth_(internal)?new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863):new cljs.core.Keyword(null,"schema","schema",-1582001791));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5767 = (function (p__5765,map__5766,id,raw,internal,type,meta5768){
this.p__5765 = p__5765;
this.map__5766 = map__5766;
this.id = id;
this.raw = raw;
this.internal = internal;
this.type = type;
this.meta5768 = meta5768;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5769,meta5768__$1){
var self__ = this;
var _5769__$1 = this;
return (new malli.core.t_malli$core5767(self__.p__5765,self__.map__5766,self__.id,self__.raw,self__.internal,self__.type,meta5768__$1));
}));

(malli.core.t_malli$core5767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5769){
var self__ = this;
var _5769__$1 = this;
return self__.meta5768;
}));

(malli.core.t_malli$core5767.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5767.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return (cljs.core.truth_(self__.internal)?malli.core._from_value_ast:malli.core._from_child_ast).call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5767.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5767.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.core.t_malli$core5767.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5767.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5767.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5767.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,self__.type,properties,children,(1),(1));

var children__$1 = malli.core._vmap.call(null,(function (p1__5764_SHARP_){
return malli.core.schema.call(null,p1__5764_SHARP_,options);
}),children);
var child = cljs.core.nth.call(null,children__$1,(0));
var form = (new cljs.core.Delay((function (){
var or__5025__auto__ = (function (){var and__5023__auto__ = cljs.core.empty_QMARK_.call(null,properties);
if(and__5023__auto__){
var or__5025__auto__ = self__.id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto____$1 = self__.raw;
if(cljs.core.truth_(and__5023__auto____$1)){
return malli.core._form.call(null,child);
} else {
return and__5023__auto____$1;
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.RegexSchema}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {malli.core.RefSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5770 = (function (form,options,child,properties,children,parent,meta5768,raw,type,p__5765,internal,map__5766,cache,id,meta5771){
this.form = form;
this.options = options;
this.child = child;
this.properties = properties;
this.children = children;
this.parent = parent;
this.meta5768 = meta5768;
this.raw = raw;
this.type = type;
this.p__5765 = p__5765;
this.internal = internal;
this.map__5766 = map__5766;
this.cache = cache;
this.id = id;
this.meta5771 = meta5771;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5770.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5770.prototype.malli$core$RefSchema$_ref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.id;
}));

(malli.core.t_malli$core5770.prototype.malli$core$RefSchema$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.child;
}));

(malli.core.t_malli$core5770.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5770.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
return malli.core._ast.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"value","value",305978217),self__.id], null),malli.core._properties.call(null,this$__$1),malli.core._options.call(null,this$__$1));
} else {
if(cljs.core.truth_(self__.raw)){
return malli.core._to_value_ast.call(null,this$__$1);
} else {
return malli.core._to_child_ast.call(null,this$__$1);

}
}
}));

(malli.core.t_malli$core5770.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_op_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.internal)){
return malli.core._regex_op_QMARK_.call(null,self__.child);
} else {
return false;
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.internal)){
return malli.core._regex_validator.call(null,self__.child);
} else {
return malli.impl.regex.item_validator.call(null,malli.core._validator.call(null,self__.child));
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.internal)){
return malli.core._regex_explainer.call(null,self__.child,path);
} else {
return malli.impl.regex.item_explainer.call(null,path,self__.child,malli.core._explainer.call(null,self__.child,path));
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.internal)){
return malli.core._regex_parser.call(null,self__.child);
} else {
return malli.impl.regex.item_parser.call(null,malli.core.parser.call(null,self__.child));
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.internal)){
return malli.core._regex_unparser.call(null,self__.child);
} else {
return malli.impl.regex.item_unparser.call(null,malli.core.unparser.call(null,self__.child));
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_transformer$arity$4 = (function (_,transformer,method,options__$1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.internal)){
return malli.core._regex_transformer.call(null,self__.child,transformer,method,options__$1);
} else {
return malli.impl.regex.item_transformer.call(null,method,malli.core._validator.call(null,self__.child),(function (){var or__5025__auto__ = malli.core._transformer.call(null,self__.child,transformer,method,options__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})());
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$RegexSchema$_regex_min_max$arity$2 = (function (_,nested_QMARK_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__5023__auto__ = nested_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not.call(null,self__.internal);
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1)], null);
} else {
return malli.core._regex_min_max.call(null,self__.child,nested_QMARK_);
}
}));

(malli.core.t_malli$core5770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5772){
var self__ = this;
var _5772__$1 = this;
return self__.meta5771;
}));

(malli.core.t_malli$core5770.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5770.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5772,meta5771__$1){
var self__ = this;
var _5772__$1 = this;
return (new malli.core.t_malli$core5770(self__.form,self__.options,self__.child,self__.properties,self__.children,self__.parent,self__.meta5768,self__.raw,self__.type,self__.p__5765,self__.internal,self__.map__5766,self__.cache,self__.id,meta5771__$1));
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._validator.call(null,self__.child);
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,self__.children,transformer,method,options__$1);
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(malli.core._accept.call(null,walker,this$__$1,path,options__$1))){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not.call(null,self__.id);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return malli.core._boolean_fn.call(null,new cljs.core.Keyword("malli.core","walk-schema-refs","malli.core/walk-schema-refs",-1140065954).cljs$core$IFn$_invoke$arity$2(options__$1,false)).call(null,self__.id);
}
})())){
return malli.core._outer.call(null,walker,this$__$1,path,malli.core._inner_indexed.call(null,walker,path,self__.children,options__$1),options__$1);
} else {
return malli.core._outer.call(null,walker,this$__$1,path,self__.children,options__$1);
}
} else {
return null;
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._parser.call(null,self__.child);
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return malli.core._explainer.call(null,self__.child,cljs.core.conj.call(null,path,(0)));
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._unparser.call(null,self__.child);
}));

(malli.core.t_malli$core5770.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5770.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5770.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5770.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,key,(0))){
return self__.child;
} else {
return default$;
}
}));

(malli.core.t_malli$core5770.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,key,(0))){
return malli.core._set_children.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","index-out-of-bounds","malli.core/index-out-of-bounds",-371273844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),this$__$1,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
}));

(malli.core.t_malli$core5770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5767","malli.core/t_malli$core5767",-914262457,null)], null)),new cljs.core.Symbol(null,"meta5768","meta5768",1859283916,null),new cljs.core.Symbol(null,"raw","raw",-1049784497,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p__5765","p__5765",1921085461,null),new cljs.core.Symbol(null,"internal","internal",785661430,null),new cljs.core.Symbol(null,"map__5766","map__5766",-105683817,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta5771","meta5771",1871123455,null)], null);
}));

(malli.core.t_malli$core5770.cljs$lang$type = true);

(malli.core.t_malli$core5770.cljs$lang$ctorStr = "malli.core/t_malli$core5770");

(malli.core.t_malli$core5770.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5770");
}));

/**
 * Positional factory function for malli.core/t_malli$core5770.
 */
malli.core.__GT_t_malli$core5770 = (function malli$core$_schema_schema_$___GT_t_malli$core5770(form__$1,options__$1,child__$1,properties__$1,children__$2,parent__$2,meta5768__$1,raw__$1,type__$1,p__5765__$1,internal__$1,map__5766__$1,cache__$1,id__$1,meta5771){
return (new malli.core.t_malli$core5770(form__$1,options__$1,child__$1,properties__$1,children__$2,parent__$2,meta5768__$1,raw__$1,type__$1,p__5765__$1,internal__$1,map__5766__$1,cache__$1,id__$1,meta5771));
});

}

return (new malli.core.t_malli$core5770(form,options,child,properties,children__$1,parent__$1,self__.meta5768,self__.raw,self__.type,self__.p__5765,self__.internal,self__.map__5766,cache,self__.id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5767.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__5765","p__5765",1921085461,null),new cljs.core.Symbol(null,"map__5766","map__5766",-105683817,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"raw","raw",-1049784497,null),new cljs.core.Symbol(null,"internal","internal",785661430,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta5768","meta5768",1859283916,null)], null);
}));

(malli.core.t_malli$core5767.cljs$lang$type = true);

(malli.core.t_malli$core5767.cljs$lang$ctorStr = "malli.core/t_malli$core5767");

(malli.core.t_malli$core5767.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5767");
}));

/**
 * Positional factory function for malli.core/t_malli$core5767.
 */
malli.core.__GT_t_malli$core5767 = (function malli$core$_schema_schema_$___GT_t_malli$core5767(p__5765__$1,map__5766__$2,id__$1,raw__$1,internal__$1,type__$1,meta5768){
return (new malli.core.t_malli$core5767(p__5765__$1,map__5766__$2,id__$1,raw__$1,internal__$1,type__$1,meta5768));
});

}

return (new malli.core.t_malli$core5767(p__5765,map__5766__$1,id,raw,internal,type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core.__EQ__GT__schema = (function malli$core$__EQ__GT__schema(){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5777 = (function (meta5778){
this.meta5778 = meta5778;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5779,meta5778__$1){
var self__ = this;
var _5779__$1 = this;
return (new malli.core.t_malli$core5777(meta5778__$1));
}));

(malli.core.t_malli$core5777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5779){
var self__ = this;
var _5779__$1 = this;
return self__.meta5778;
}));

(malli.core.t_malli$core5777.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5777.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,p__5780,options){
var self__ = this;
var map__5781 = p__5780;
var map__5781__$1 = cljs.core.__destructure_map.call(null,map__5781);
var input = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var guard = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var properties = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var parent__$1 = this;
return malli.core._into_schema.call(null,parent__$1,properties,(function (){var G__5782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core.from_ast.call(null,input,options),malli.core.from_ast.call(null,output,options)], null);
if(cljs.core.truth_(guard)){
return cljs.core.conj.call(null,G__5782,malli.core.from_ast.call(null,guard));
} else {
return G__5782;
}
})(),options);
}));

(malli.core.t_malli$core5777.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5777.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"=>","=>",1841166128);
}));

(malli.core.t_malli$core5777.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5777.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,p__5783){
var self__ = this;
var map__5784 = p__5783;
var map__5784__$1 = cljs.core.__destructure_map.call(null,map__5784);
var options = map__5784__$1;
var function_checker = cljs.core.get.call(null,map__5784__$1,new cljs.core.Keyword("malli.core","function-checker","malli.core/function-checker",-792030936));
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"=>","=>",1841166128),properties,children,(2),(3));

var vec__5785 = malli.core._vmap.call(null,(function (p1__5773_SHARP_){
return malli.core.schema.call(null,p1__5773_SHARP_,options);
}),children);
var input = cljs.core.nth.call(null,vec__5785,(0),null);
var output = cljs.core.nth.call(null,vec__5785,(1),null);
var guard = cljs.core.nth.call(null,vec__5785,(2),null);
var children__$1 = vec__5785;
var form = (new cljs.core.Delay((function (){
return malli.core._create_form.call(null,malli.core._type.call(null,parent__$1),properties,malli.core._vmap.call(null,malli.core._form,children__$1),options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var __GT_checker = (cljs.core.truth_(function_checker)?(function (p1__5774_SHARP_){
return function_checker.call(null,p1__5774_SHARP_,options);
}):cljs.core.constantly.call(null,null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cat","cat",-1457810207),null,new cljs.core.Keyword(null,"catn","catn",-48807277),null], null), null).call(null,malli.core.type.call(null,input)))){
} else {
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-input-schema","malli.core/invalid-input-schema",-833477915),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));
}

if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {malli.core.FunctionSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5788 = (function (form,input,options,guard,properties,children,parent,meta5778,__GT_checker,p__5783,output,function_checker,cache,map__5784,vec__5785,meta5789){
this.form = form;
this.input = input;
this.options = options;
this.guard = guard;
this.properties = properties;
this.children = children;
this.parent = parent;
this.meta5778 = meta5778;
this.__GT_checker = __GT_checker;
this.p__5783 = p__5783;
this.output = output;
this.function_checker = function_checker;
this.cache = cache;
this.map__5784 = map__5784;
this.vec__5785 = vec__5785;
this.meta5789 = meta5789;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5788.prototype.malli$core$FunctionSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5788.prototype.malli$core$FunctionSchema$_function_schema_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5788.prototype.malli$core$FunctionSchema$_function_schema_arities$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null);
}));

(malli.core.t_malli$core5788.prototype.malli$core$FunctionSchema$_function_info$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__5791 = malli.core._regex_min_max.call(null,self__.input,false);
var map__5791__$1 = cljs.core.__destructure_map.call(null,map__5791);
var min = cljs.core.get.call(null,map__5791__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5791__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__5792 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"arity","arity",-1808556135),((cljs.core._EQ_.call(null,min,max))?min:new cljs.core.Keyword(null,"varargs","varargs",1030150858)),new cljs.core.Keyword(null,"input","input",556931961),self__.input,new cljs.core.Keyword(null,"output","output",-1105869043),self__.output], null);
var G__5792__$1 = (cljs.core.truth_(self__.guard)?cljs.core.assoc.call(null,G__5792,new cljs.core.Keyword(null,"guard","guard",-873147811),self__.guard):G__5792);
if(cljs.core.truth_(max)){
return cljs.core.assoc.call(null,G__5792__$1,new cljs.core.Keyword(null,"max","max",61366548),max);
} else {
return G__5792__$1;
}
}));

(malli.core.t_malli$core5788.prototype.malli$core$FunctionSchema$_instrument_f$arity$4 = (function (schema,p__5793,f,_options){
var self__ = this;
var map__5794 = p__5793;
var map__5794__$1 = cljs.core.__destructure_map.call(null,map__5794);
var props = map__5794__$1;
var scope = cljs.core.get.call(null,map__5794__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var report = cljs.core.get.call(null,map__5794__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var gen = cljs.core.get.call(null,map__5794__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var schema__$1 = this;
var map__5795 = malli.core._function_info.call(null,schema__$1);
var map__5795__$1 = cljs.core.__destructure_map.call(null,map__5795);
var min = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"max","max",61366548));
var input__$1 = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output__$1 = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var guard__$1 = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var vec__5796 = malli.core._vmap.call(null,malli.core._validator,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input__$1,output__$1], null));
var validate_input = cljs.core.nth.call(null,vec__5796,(0),null);
var validate_output = cljs.core.nth.call(null,vec__5796,(1),null);
var validate_guard = (function (){var or__5025__auto__ = (function (){var G__5802 = guard__$1;
if((G__5802 == null)){
return null;
} else {
return malli.core._validator.call(null,G__5802);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.any_QMARK_;
}
})();
var vec__5799 = malli.core._vmap.call(null,(function (p1__5776_SHARP_){
return cljs.core.contains_QMARK_.call(null,scope,p1__5776_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"guard","guard",-873147811)], null));
var wrap_input = cljs.core.nth.call(null,vec__5799,(0),null);
var wrap_output = cljs.core.nth.call(null,vec__5799,(1),null);
var wrap_guard = cljs.core.nth.call(null,vec__5799,(2),null);
var f__$1 = (function (){var or__5025__auto__ = (cljs.core.truth_(gen)?gen.call(null,schema__$1):f);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","missing-function","malli.core/missing-function",1913462487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props], null));
}
})();
return (function() { 
var G__5807__delegate = function (args){
var args__$1 = cljs.core.vec.call(null,args);
var arity = cljs.core.count.call(null,args__$1);
if(cljs.core.truth_(wrap_input)){
if((((min <= arity)) && ((arity <= (function (){var or__5025__auto__ = max;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.impl.util._PLUS_max_size_PLUS_;
}
})())))){
} else {
report.call(null,new cljs.core.Keyword("malli.core","invalid-arity","malli.core/invalid-arity",577014581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arity","arity",-1808556135),arity,new cljs.core.Keyword(null,"arities","arities",-1781122917),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null)]),new cljs.core.Keyword(null,"args","args",1315556576),args__$1,new cljs.core.Keyword(null,"input","input",556931961),input__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
}

if(cljs.core.truth_(validate_input.call(null,args__$1))){
} else {
report.call(null,new cljs.core.Keyword("malli.core","invalid-input","malli.core/invalid-input",2010057279),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
}
} else {
}

var value = cljs.core.apply.call(null,f__$1,args__$1);
if(cljs.core.truth_((function (){var and__5023__auto__ = wrap_output;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not.call(null,validate_output.call(null,value));
} else {
return and__5023__auto__;
}
})())){
report.call(null,new cljs.core.Keyword("malli.core","invalid-output","malli.core/invalid-output",-147363519),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"output","output",-1105869043),output__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"args","args",1315556576),args__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = wrap_guard;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not.call(null,validate_guard.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args__$1,value], null)));
} else {
return and__5023__auto__;
}
})())){
report.call(null,new cljs.core.Keyword("malli.core","invalid-guard","malli.core/invalid-guard",-946413611),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"guard","guard",-873147811),guard__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"args","args",1315556576),args__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
} else {
}

return value;
};
var G__5807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5808__i = 0, G__5808__a = new Array(arguments.length -  0);
while (G__5808__i < G__5808__a.length) {G__5808__a[G__5808__i] = arguments[G__5808__i + 0]; ++G__5808__i;}
  args = new cljs.core.IndexedSeq(G__5808__a,0,null);
} 
return G__5807__delegate.call(this,args);};
G__5807.cljs$lang$maxFixedArity = 0;
G__5807.cljs$lang$applyTo = (function (arglist__5809){
var args = cljs.core.seq(arglist__5809);
return G__5807__delegate(args);
});
G__5807.cljs$core$IFn$_invoke$arity$variadic = G__5807__delegate;
return G__5807;
})()
;
}));

(malli.core.t_malli$core5788.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5788.prototype.malli$core$AST$_to_ast$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var G__5803 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Keyword(null,"input","input",556931961),malli.core.ast.call(null,self__.input),new cljs.core.Keyword(null,"output","output",-1105869043),malli.core.ast.call(null,self__.output)], null);
var G__5803__$1 = (cljs.core.truth_(self__.guard)?cljs.core.assoc.call(null,G__5803,new cljs.core.Keyword(null,"guard","guard",-873147811),malli.core.ast.call(null,self__.guard)):G__5803);
if(cljs.core.truth_(self__.properties)){
return cljs.core.assoc.call(null,G__5803__$1,new cljs.core.Keyword(null,"properties","properties",685819552),self__.properties);
} else {
return G__5803__$1;
}
}));

(malli.core.t_malli$core5788.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5788.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5788.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5790){
var self__ = this;
var _5790__$1 = this;
return self__.meta5789;
}));

(malli.core.t_malli$core5788.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5788.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5790,meta5789__$1){
var self__ = this;
var _5790__$1 = this;
return (new malli.core.t_malli$core5788(self__.form,self__.input,self__.options,self__.guard,self__.properties,self__.children,self__.parent,self__.meta5778,self__.__GT_checker,self__.p__5783,self__.output,self__.function_checker,self__.cache,self__.map__5784,self__.vec__5785,meta5789__$1));
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = self__.__GT_checker.call(null,this$__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var checker = temp__5823__auto__;
var validator = (function (x){
return (checker.call(null,x) == null);
});
return (function (x){
return ((cljs.core.ifn_QMARK_.call(null,x)) && (validator.call(null,x)));
});
} else {
return cljs.core.ifn_QMARK_;
}
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_transformer$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = self__.__GT_checker.call(null,this$__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var checker = temp__5823__auto__;
return (function malli$core$__EQ__GT__schema_$_explain(x,in$,acc){
if((!(cljs.core.fn_QMARK_.call(null,x)))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
var temp__5823__auto____$1 = checker.call(null,x);
if(cljs.core.truth_(temp__5823__auto____$1)){
var res = temp__5823__auto____$1;
var map__5804 = res;
var map__5804__$1 = cljs.core.__destructure_map.call(null,map__5804);
var explain_input = cljs.core.get.call(null,map__5804__$1,new cljs.core.Keyword("malli.core","explain-input","malli.core/explain-input",1441627811));
var explain_output = cljs.core.get.call(null,map__5804__$1,new cljs.core.Keyword("malli.core","explain-output","malli.core/explain-output",-124321573));
var explain_guard = cljs.core.get.call(null,map__5804__$1,new cljs.core.Keyword("malli.core","explain-guard","malli.core/explain-guard",-1119572847));
var res__$1 = cljs.core.dissoc.call(null,res,new cljs.core.Keyword("malli.core","explain-input","malli.core/explain-input",1441627811),new cljs.core.Keyword("malli.core","explain-output","malli.core/explain-output",-124321573),new cljs.core.Keyword("malli.core","explain-guard","malli.core/explain-guard",-1119572847));
var map__5805 = cljs.core.assoc.call(null,malli.impl.util._error.call(null,path,in$,this$__$1,x),new cljs.core.Keyword(null,"check","check",1226308904),res__$1);
var map__5805__$1 = cljs.core.__destructure_map.call(null,map__5805);
var error = map__5805__$1;
var path__$1 = cljs.core.get.call(null,map__5805__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var in$__$1 = cljs.core.get.call(null,map__5805__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var _push = (function (acc__$1,i,e){
var G__5806 = acc__$1;
if(cljs.core.truth_(e)){
return cljs.core.into.call(null,G__5806,cljs.core.map.call(null,(function (p1__5775_SHARP_){
return cljs.core.assoc.call(null,p1__5775_SHARP_,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path__$1,i),new cljs.core.Keyword(null,"in","in",-1531184865),in$__$1);
}),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(e)));
} else {
return G__5806;
}
});
return _push.call(null,_push.call(null,_push.call(null,cljs.core.conj.call(null,acc,error),(0),explain_input),(1),explain_output),(2),explain_guard);
} else {
return acc;
}
}
});
} else {
var validator = malli.core._validator.call(null,this$__$1);
return (function malli$core$__EQ__GT__schema_$_explain(x,in$,acc){
if(cljs.core.not.call(null,validator.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
return acc;
}
});
}
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5788.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5788.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5788.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5788.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5788.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"guard","guard",767383716,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5777","malli.core/t_malli$core5777",1762224321,null)], null)),new cljs.core.Symbol(null,"meta5778","meta5778",2120672047,null),new cljs.core.Symbol(null,"->checker","->checker",964293264,null),new cljs.core.Symbol(null,"p__5783","p__5783",-17461999,null),new cljs.core.Symbol(null,"output","output",534662484,null),new cljs.core.Symbol(null,"function-checker","function-checker",131742871,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"map__5784","map__5784",1678851481,null),new cljs.core.Symbol(null,"vec__5785","vec__5785",1117213822,null),new cljs.core.Symbol(null,"meta5789","meta5789",190933059,null)], null);
}));

(malli.core.t_malli$core5788.cljs$lang$type = true);

(malli.core.t_malli$core5788.cljs$lang$ctorStr = "malli.core/t_malli$core5788");

(malli.core.t_malli$core5788.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5788");
}));

/**
 * Positional factory function for malli.core/t_malli$core5788.
 */
malli.core.__GT_t_malli$core5788 = (function malli$core$__EQ__GT__schema_$___GT_t_malli$core5788(form__$1,input__$1,options__$1,guard__$1,properties__$1,children__$2,parent__$2,meta5778__$1,__GT_checker__$1,p__5783__$1,output__$1,function_checker__$1,cache__$1,map__5784__$2,vec__5785__$1,meta5789){
return (new malli.core.t_malli$core5788(form__$1,input__$1,options__$1,guard__$1,properties__$1,children__$2,parent__$2,meta5778__$1,__GT_checker__$1,p__5783__$1,output__$1,function_checker__$1,cache__$1,map__5784__$2,vec__5785__$1,meta5789));
});

}

return (new malli.core.t_malli$core5788(form,input,options,guard,properties,children__$1,parent__$1,self__.meta5778,__GT_checker,p__5783,output,function_checker,cache,map__5784__$1,vec__5785,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5777.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5778","meta5778",2120672047,null)], null);
}));

(malli.core.t_malli$core5777.cljs$lang$type = true);

(malli.core.t_malli$core5777.cljs$lang$ctorStr = "malli.core/t_malli$core5777");

(malli.core.t_malli$core5777.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5777");
}));

/**
 * Positional factory function for malli.core/t_malli$core5777.
 */
malli.core.__GT_t_malli$core5777 = (function malli$core$__EQ__GT__schema_$___GT_t_malli$core5777(meta5778){
return (new malli.core.t_malli$core5777(meta5778));
});

}

return (new malli.core.t_malli$core5777(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._function_schema = (function malli$core$_function_schema(_){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5812 = (function (_,meta5813){
this._ = _;
this.meta5813 = meta5813;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5814,meta5813__$1){
var self__ = this;
var _5814__$1 = this;
return (new malli.core.t_malli$core5812(self__._,meta5813__$1));
}));

(malli.core.t_malli$core5812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5814){
var self__ = this;
var _5814__$1 = this;
return self__.meta5813;
}));

(malli.core.t_malli$core5812.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5812.prototype.malli$core$IntoSchema$_type$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.Keyword(null,"function","function",-2127255473);
}));

(malli.core.t_malli$core5812.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5812.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(malli.core.t_malli$core5812.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(malli.core.t_malli$core5812.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,p__5815){
var self__ = this;
var map__5816 = p__5815;
var map__5816__$1 = cljs.core.__destructure_map.call(null,map__5816);
var options = map__5816__$1;
var function_checker = cljs.core.get.call(null,map__5816__$1,new cljs.core.Keyword("malli.core","function-checker","malli.core/function-checker",-792030936));
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),properties,children,(1),null);

var children__$1 = malli.core._vmap.call(null,(function (p1__5810_SHARP_){
return malli.core.schema.call(null,p1__5810_SHARP_,options);
}),children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
var __GT_checker = (cljs.core.truth_(function_checker)?(function (p1__5811_SHARP_){
return function_checker.call(null,p1__5811_SHARP_,options);
}):cljs.core.constantly.call(null,null));
if(cljs.core.every_QMARK_.call(null,cljs.core.every_pred.call(null,malli.core._function_schema_QMARK_,malli.core._function_info),children__$1)){
} else {
malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","non-function-childs","malli.core/non-function-childs",-1591582832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children__$1], null));
}

malli.core._group_by_arity_BANG_.call(null,malli.core._vmap.call(null,malli.core._function_info,children__$1));

if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.ParserInfo}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {malli.core.FunctionSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5817 = (function (form,map__5816,options,properties,children,parent,_,__GT_checker,function_checker,cache,p__5815,meta5813,meta5818){
this.form = form;
this.map__5816 = map__5816;
this.options = options;
this.properties = properties;
this.children = children;
this.parent = parent;
this._ = _;
this.__GT_checker = __GT_checker;
this.function_checker = function_checker;
this.cache = cache;
this.p__5815 = p__5815;
this.meta5813 = meta5813;
this.meta5818 = meta5818;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5819,meta5818__$1){
var self__ = this;
var _5819__$1 = this;
return (new malli.core.t_malli$core5817(self__.form,self__.map__5816,self__.options,self__.properties,self__.children,self__.parent,self__._,self__.__GT_checker,self__.function_checker,self__.cache,self__.p__5815,self__.meta5813,meta5818__$1));
}));

(malli.core.t_malli$core5817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5819){
var self__ = this;
var _5819__$1 = this;
return self__.meta5818;
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = self__.__GT_checker.call(null,this$__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var checker = temp__5823__auto__;
var validator = (function (x){
return (checker.call(null,x) == null);
});
return (function (x){
return ((cljs.core.ifn_QMARK_.call(null,x)) && (validator.call(null,x)));
});
} else {
return cljs.core.ifn_QMARK_;
}
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_options$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.options;
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_transformer$arity$4 = (function (___$1,___$2,___$3,___$4){
var self__ = this;
var ___$5 = this;
return null;
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._simple_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_properties$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.properties;
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_children$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.children;
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_form$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = self__.__GT_checker.call(null,this$__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var checker = temp__5823__auto__;
return (function malli$core$_function_schema_$_explain(x,in$,acc){
if((!(cljs.core.fn_QMARK_.call(null,x)))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
var temp__5823__auto____$1 = checker.call(null,x);
if(cljs.core.truth_(temp__5823__auto____$1)){
var res = temp__5823__auto____$1;
return cljs.core.conj.call(null,acc,cljs.core.assoc.call(null,malli.impl.util._error.call(null,path,in$,this$__$1,x),new cljs.core.Keyword(null,"check","check",1226308904),res));
} else {
return acc;
}
}
});
} else {
var validator = malli.core._validator.call(null,this$__$1);
return (function malli$core$_function_schema_$_explain(x,in$,acc){
if(cljs.core.not.call(null,validator.call(null,x))){
return cljs.core.conj.call(null,acc,malli.impl.util._error.call(null,path,in$,this$__$1,x));
} else {
return acc;
}
});
}
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5817.prototype.malli$core$Schema$_parent$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.parent;
}));

(malli.core.t_malli$core5817.prototype.malli$core$FunctionSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5817.prototype.malli$core$FunctionSchema$_function_schema_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(malli.core.t_malli$core5817.prototype.malli$core$FunctionSchema$_function_schema_arities$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.children;
}));

(malli.core.t_malli$core5817.prototype.malli$core$FunctionSchema$_function_info$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5817.prototype.malli$core$FunctionSchema$_instrument_f$arity$4 = (function (this$,p__5820,f,options__$1){
var self__ = this;
var map__5821 = p__5820;
var map__5821__$1 = cljs.core.__destructure_map.call(null,map__5821);
var props = map__5821__$1;
var _scope = cljs.core.get.call(null,map__5821__$1,new cljs.core.Keyword(null,"_scope","_scope",882472555));
var report = cljs.core.get.call(null,map__5821__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var this$__$1 = this;
var arity__GT_info = malli.core._group_by_arity_BANG_.call(null,cljs.core.map.call(null,(function (s){
return cljs.core.assoc.call(null,malli.core._function_info.call(null,s),new cljs.core.Keyword(null,"f","f",-1597136552),malli.core._instrument.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"schema","schema",-1582001791),s),f,options__$1));
}),self__.children));
var arities = cljs.core.set.call(null,cljs.core.keys.call(null,arity__GT_info));
var varargs_info = arity__GT_info.call(null,new cljs.core.Keyword(null,"varargs","varargs",1030150858));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,arities))){
return new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,arity__GT_info)));
} else {
return (function() { 
var G__5823__delegate = function (args){
var arity = cljs.core.count.call(null,args);
var map__5822 = arity__GT_info.call(null,arity);
var map__5822__$1 = cljs.core.__destructure_map.call(null,map__5822);
var info = map__5822__$1;
var input = cljs.core.get.call(null,map__5822__$1,new cljs.core.Keyword(null,"input","input",556931961));
var report_arity = (function (){
return report.call(null,new cljs.core.Keyword("malli.core","invalid-arity","malli.core/invalid-arity",577014581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arity","arity",-1808556135),arity,new cljs.core.Keyword(null,"arities","arities",-1781122917),arities,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"schema","schema",-1582001791),this$__$1], null));
});
if(cljs.core.truth_(info)){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(info),args);
} else {
if(cljs.core.truth_(varargs_info)){
if((arity < new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(varargs_info))){
return report_arity.call(null);
} else {
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(varargs_info),args);
}
} else {
return report_arity.call(null);

}
}
};
var G__5823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5824__i = 0, G__5824__a = new Array(arguments.length -  0);
while (G__5824__i < G__5824__a.length) {G__5824__a[G__5824__i] = arguments[G__5824__i + 0]; ++G__5824__i;}
  args = new cljs.core.IndexedSeq(G__5824__a,0,null);
} 
return G__5823__delegate.call(this,args);};
G__5823.cljs$lang$maxFixedArity = 0;
G__5823.cljs$lang$applyTo = (function (arglist__5825){
var args = cljs.core.seq(arglist__5825);
return G__5823__delegate(args);
});
G__5823.cljs$core$IFn$_invoke$arity$variadic = G__5823__delegate;
return G__5823;
})()
;
}
}));

(malli.core.t_malli$core5817.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5817.prototype.malli$core$Cached$_cache$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.cache;
}));

(malli.core.t_malli$core5817.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5817.prototype.malli$core$LensSchema$_keep$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5817.prototype.malli$core$LensSchema$_get$arity$3 = (function (___$1,key,default$){
var self__ = this;
var ___$2 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5817.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5817.prototype.malli$core$ParserInfo$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5817.prototype.malli$core$ParserInfo$_parser_info$arity$2 = (function (___$1,___$2){
var self__ = this;
var ___$3 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-parser","simple-parser",209169941),true], null);
}));

(malli.core.t_malli$core5817.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"map__5816","map__5816",275589280,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"children","children",699969545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5812","malli.core/t_malli$core5812",1769699589,null)], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"->checker","->checker",964293264,null),new cljs.core.Symbol(null,"function-checker","function-checker",131742871,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"p__5815","p__5815",-1676637862,null),new cljs.core.Symbol(null,"meta5813","meta5813",597937820,null),new cljs.core.Symbol(null,"meta5818","meta5818",-358615649,null)], null);
}));

(malli.core.t_malli$core5817.cljs$lang$type = true);

(malli.core.t_malli$core5817.cljs$lang$ctorStr = "malli.core/t_malli$core5817");

(malli.core.t_malli$core5817.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5817");
}));

/**
 * Positional factory function for malli.core/t_malli$core5817.
 */
malli.core.__GT_t_malli$core5817 = (function malli$core$_function_schema_$___GT_t_malli$core5817(form__$1,map__5816__$2,options__$1,properties__$1,children__$2,parent__$2,___$1,__GT_checker__$1,function_checker__$1,cache__$1,p__5815__$1,meta5813__$1,meta5818){
return (new malli.core.t_malli$core5817(form__$1,map__5816__$2,options__$1,properties__$1,children__$2,parent__$2,___$1,__GT_checker__$1,function_checker__$1,cache__$1,p__5815__$1,meta5813__$1,meta5818));
});

}

return (new malli.core.t_malli$core5817(form,map__5816__$1,options,properties,children__$1,parent__$1,self__._,__GT_checker,function_checker,cache,p__5815,self__.meta5813,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5812.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta5813","meta5813",597937820,null)], null);
}));

(malli.core.t_malli$core5812.cljs$lang$type = true);

(malli.core.t_malli$core5812.cljs$lang$ctorStr = "malli.core/t_malli$core5812");

(malli.core.t_malli$core5812.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5812");
}));

/**
 * Positional factory function for malli.core/t_malli$core5812.
 */
malli.core.__GT_t_malli$core5812 = (function malli$core$_function_schema_$___GT_t_malli$core5812(___$1,meta5813){
return (new malli.core.t_malli$core5812(___$1,meta5813));
});

}

return (new malli.core.t_malli$core5812(_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._proxy_schema = (function malli$core$_proxy_schema(p__5826){
var map__5827 = p__5826;
var map__5827__$1 = cljs.core.__destructure_map.call(null,map__5827);
var type = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var min = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"max","max",61366548));
var childs = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"childs","childs",-1293201887));
var type_properties = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
var fn = cljs.core.get.call(null,map__5827__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5828 = (function (p__5826,map__5827,type,min,max,childs,type_properties,fn,meta5829){
this.p__5826 = p__5826;
this.map__5827 = map__5827;
this.type = type;
this.min = min;
this.max = max;
this.childs = childs;
this.type_properties = type_properties;
this.fn = fn;
this.meta5829 = meta5829;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5830,meta5829__$1){
var self__ = this;
var _5830__$1 = this;
return (new malli.core.t_malli$core5828(self__.p__5826,self__.map__5827,self__.type,self__.min,self__.max,self__.childs,self__.type_properties,self__.fn,meta5829__$1));
}));

(malli.core.t_malli$core5828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5830){
var self__ = this;
var _5830__$1 = this;
return self__.meta5829;
}));

(malli.core.t_malli$core5828.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5828.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.core.t_malli$core5828.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type_properties;
}));

(malli.core.t_malli$core5828.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5828.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5828.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,self__.type,properties,children,self__.min,self__.max);

var vec__5831 = self__.fn.call(null,properties,cljs.core.vec.call(null,children),options);
var children__$1 = cljs.core.nth.call(null,vec__5831,(0),null);
var forms = cljs.core.nth.call(null,vec__5831,(1),null);
var schema = cljs.core.nth.call(null,vec__5831,(2),null);
var schema__$1 = (new cljs.core.Delay((function (){
return cljs.core.force.call(null,schema);
}),null));
var form = (new cljs.core.Delay((function (){
return malli.core._create_form.call(null,self__.type,properties,forms,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.DistributiveSchema}
 * @implements {malli.core.Cached}
 * @implements {malli.core.RegexSchema}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {malli.core.RefSchema}
 * @implements {malli.core.FunctionSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5834 = (function (form,options,vec__5831,p__5826,forms,properties,childs,schema,children,min,type_properties,fn,map__5827,parent,type,cache,max,meta5829,meta5835){
this.form = form;
this.options = options;
this.vec__5831 = vec__5831;
this.p__5826 = p__5826;
this.forms = forms;
this.properties = properties;
this.childs = childs;
this.schema = schema;
this.children = children;
this.min = min;
this.type_properties = type_properties;
this.fn = fn;
this.map__5827 = map__5827;
this.parent = parent;
this.type = type;
this.cache = cache;
this.max = max;
this.meta5829 = meta5829;
this.meta5835 = meta5835;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5834.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$RefSchema$_ref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5834.prototype.malli$core$RefSchema$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.schema);
}));

(malli.core.t_malli$core5834.prototype.malli$core$FunctionSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$FunctionSchema$_function_schema_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._function_schema_QMARK_.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$FunctionSchema$_function_info$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._function_info.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$FunctionSchema$_function_schema_arities$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._function_schema_arities.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$FunctionSchema$_instrument_f$arity$4 = (function (_,props,f,options__$1){
var self__ = this;
var ___$1 = this;
return malli.core._instrument_f.call(null,cljs.core.deref.call(null,self__.schema),props,f,options__$1);
}));

(malli.core.t_malli$core5834.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_op_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._regex_op_QMARK_.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._regex_validator.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return malli.core._regex_explainer.call(null,cljs.core.deref.call(null,self__.schema),path);
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._regex_unparser.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._regex_parser.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_transformer$arity$4 = (function (_,transformer,method,options__$1){
var self__ = this;
var ___$1 = this;
return malli.core._regex_transformer.call(null,cljs.core.deref.call(null,self__.schema),transformer,method,options__$1);
}));

(malli.core.t_malli$core5834.prototype.malli$core$RegexSchema$_regex_min_max$arity$2 = (function (_,nested_QMARK_){
var self__ = this;
var ___$1 = this;
return malli.core._regex_min_max.call(null,cljs.core.deref.call(null,self__.schema),nested_QMARK_);
}));

(malli.core.t_malli$core5834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5836){
var self__ = this;
var _5836__$1 = this;
return self__.meta5835;
}));

(malli.core.t_malli$core5834.prototype.malli$core$DistributiveSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$DistributiveSchema$_distributive_schema_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._distributive_schema_QMARK_.call(null,self__.schema);
}));

(malli.core.t_malli$core5834.prototype.malli$core$DistributiveSchema$_distribute_to_children$arity$3 = (function (_,f,options__$1){
var self__ = this;
var ___$1 = this;
return malli.core._distribute_to_children.call(null,self__.schema,f,options__$1);
}));

(malli.core.t_malli$core5834.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5836,meta5835__$1){
var self__ = this;
var _5836__$1 = this;
return (new malli.core.t_malli$core5834(self__.form,self__.options,self__.vec__5831,self__.p__5826,self__.forms,self__.properties,self__.childs,self__.schema,self__.children,self__.min,self__.type_properties,self__.fn,self__.map__5827,self__.parent,self__.type,self__.cache,self__.max,self__.meta5829,meta5835__$1));
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._validator.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,self__.schema)], null),transformer,method,options__$1);
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
var children__$1 = (cljs.core.truth_(self__.childs)?cljs.core.subvec.call(null,self__.children,(0),self__.childs):self__.children);
if(cljs.core.truth_(malli.core._accept.call(null,walker,this$__$1,path,options__$1))){
return malli.core._outer.call(null,walker,this$__$1,path,malli.core._inner_indexed.call(null,walker,path,children__$1,options__$1),options__$1);
} else {
return null;
}
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._parser.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return malli.core._explainer.call(null,cljs.core.deref.call(null,self__.schema),cljs.core.conj.call(null,path,new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537)));
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._unparser.call(null,cljs.core.deref.call(null,self__.schema));
}));

(malli.core.t_malli$core5834.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5834.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5834.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5834.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537),key)){
return cljs.core.deref.call(null,self__.schema);
} else {
return cljs.core.get.call(null,self__.children,key,default$);
}
}));

(malli.core.t_malli$core5834.prototype.malli$core$LensSchema$_set$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
return malli.core.into_schema.call(null,self__.type,self__.properties,cljs.core.assoc.call(null,self__.children,key,value));
}));

(malli.core.t_malli$core5834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"vec__5831","vec__5831",153369764,null),new cljs.core.Symbol(null,"p__5826","p__5826",-1965586460,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"map__5827","map__5827",-1721909780,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5828","malli.core/t_malli$core5828",-656055354,null)], null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"meta5829","meta5829",1972160734,null),new cljs.core.Symbol(null,"meta5835","meta5835",-1466317479,null)], null);
}));

(malli.core.t_malli$core5834.cljs$lang$type = true);

(malli.core.t_malli$core5834.cljs$lang$ctorStr = "malli.core/t_malli$core5834");

(malli.core.t_malli$core5834.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5834");
}));

/**
 * Positional factory function for malli.core/t_malli$core5834.
 */
malli.core.__GT_t_malli$core5834 = (function malli$core$_proxy_schema_$___GT_t_malli$core5834(form__$1,options__$1,vec__5831__$1,p__5826__$1,forms__$1,properties__$1,childs__$1,schema__$2,children__$2,min__$1,type_properties__$1,fn__$1,map__5827__$1,parent__$2,type__$1,cache__$1,max__$1,meta5829__$1,meta5835){
return (new malli.core.t_malli$core5834(form__$1,options__$1,vec__5831__$1,p__5826__$1,forms__$1,properties__$1,childs__$1,schema__$2,children__$2,min__$1,type_properties__$1,fn__$1,map__5827__$1,parent__$2,type__$1,cache__$1,max__$1,meta5829__$1,meta5835));
});

}

return (new malli.core.t_malli$core5834(form,options,vec__5831,self__.p__5826,forms,properties,self__.childs,schema__$1,children__$1,self__.min,self__.type_properties,self__.fn,self__.map__5827,parent__$1,self__.type,cache,self__.max,self__.meta5829,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5828.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__5826","p__5826",-1965586460,null),new cljs.core.Symbol(null,"map__5827","map__5827",-1721909780,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"meta5829","meta5829",1972160734,null)], null);
}));

(malli.core.t_malli$core5828.cljs$lang$type = true);

(malli.core.t_malli$core5828.cljs$lang$ctorStr = "malli.core/t_malli$core5828");

(malli.core.t_malli$core5828.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5828");
}));

/**
 * Positional factory function for malli.core/t_malli$core5828.
 */
malli.core.__GT_t_malli$core5828 = (function malli$core$_proxy_schema_$___GT_t_malli$core5828(p__5826__$1,map__5827__$2,type__$1,min__$1,max__$1,childs__$1,type_properties__$1,fn__$1,meta5829){
return (new malli.core.t_malli$core5828(p__5826__$1,map__5827__$2,type__$1,min__$1,max__$1,childs__$1,type_properties__$1,fn__$1,meta5829));
});

}

return (new malli.core.t_malli$core5828(p__5826,map__5827__$1,type,min,max,childs,type_properties,fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
/**
 * Experimental simple schema for :=> schema. AST and explain results subject to change.
 */
malli.core.___GT__schema = (function malli$core$___GT__schema(_){
return malli.core._proxy_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__5838,c,o){
var map__5839 = p__5838;
var map__5839__$1 = cljs.core.__destructure_map.call(null,map__5839);
var p = map__5839__$1;
var guard = cljs.core.get.call(null,map__5839__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
malli.core._check_children_BANG_.call(null,new cljs.core.Keyword(null,"->","->",514830339),p,c,(1),null);

var c__$1 = cljs.core.mapv.call(null,(function (p1__5837_SHARP_){
return malli.core.schema.call(null,p1__5837_SHARP_,o);
}),c);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,cljs.core.map.call(null,malli.core._form,c__$1),(new cljs.core.Delay((function (){
var cc = (function (){var G__5840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),cljs.core.pop.call(null,c__$1)),cljs.core.peek.call(null,c__$1)], null);
if(cljs.core.truth_(guard)){
return cljs.core.conj.call(null,G__5840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),guard], null));
} else {
return G__5840;
}
})();
return malli.core.into_schema.call(null,new cljs.core.Keyword(null,"=>","=>",1841166128),cljs.core.dissoc.call(null,p,new cljs.core.Keyword(null,"guard","guard",-873147811)),cc,o);
}),null))], null);
})], null));
});
malli.core.regex_validator = (function malli$core$regex_validator(schema){
return malli.impl.regex.validator.call(null,malli.core._regex_validator.call(null,schema));
});
malli.core.regex_explainer = (function malli$core$regex_explainer(schema,path){
return malli.impl.regex.explainer.call(null,schema,path,malli.core._regex_explainer.call(null,schema,path));
});
malli.core.regex_parser = (function malli$core$regex_parser(schema){
return malli.impl.regex.parser.call(null,malli.core._regex_parser.call(null,schema));
});
malli.core.regex_transformer = (function malli$core$regex_transformer(schema,transformer,method,options){
var this_transformer = malli.core._value_transformer.call(null,transformer,schema,method,options);
var __GT_children = malli.impl.regex.transformer.call(null,malli.core._regex_transformer.call(null,schema,transformer,method,options));
return malli.core._intercepting.call(null,this_transformer,__GT_children);
});
malli.core._sequence_schema = (function malli$core$_sequence_schema(p__5843){
var map__5844 = p__5843;
var map__5844__$1 = cljs.core.__destructure_map.call(null,map__5844);
var map__5845 = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738));
var map__5845__$1 = cljs.core.__destructure_map.call(null,map__5845);
var min = cljs.core.get.call(null,map__5845__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5845__$1,new cljs.core.Keyword(null,"max","max",61366548));
var type = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var re_validator = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"re-validator","re-validator",-180375208));
var re_explainer = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200));
var re_parser = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564));
var re_unparser = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079));
var re_transformer = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461));
var re_min_max = cljs.core.get.call(null,map__5844__$1,new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5846 = (function (re_min_max,p__5843,re_explainer,min,re_parser,re_unparser,type,map__5845,map__5844,re_transformer,max,re_validator,meta5847){
this.re_min_max = re_min_max;
this.p__5843 = p__5843;
this.re_explainer = re_explainer;
this.min = min;
this.re_parser = re_parser;
this.re_unparser = re_unparser;
this.type = type;
this.map__5845 = map__5845;
this.map__5844 = map__5844;
this.re_transformer = re_transformer;
this.max = max;
this.re_validator = re_validator;
this.meta5847 = meta5847;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5848,meta5847__$1){
var self__ = this;
var _5848__$1 = this;
return (new malli.core.t_malli$core5846(self__.re_min_max,self__.p__5843,self__.re_explainer,self__.min,self__.re_parser,self__.re_unparser,self__.type,self__.map__5845,self__.map__5844,self__.re_transformer,self__.max,self__.re_validator,meta5847__$1));
}));

(malli.core.t_malli$core5846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5848){
var self__ = this;
var _5848__$1 = this;
return self__.meta5847;
}));

(malli.core.t_malli$core5846.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5846.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.core.t_malli$core5846.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5846.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5846.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5846.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,self__.type,properties,children,self__.min,self__.max);

var children__$1 = malli.core._vmap.call(null,(function (p1__5841_SHARP_){
return malli.core.schema.call(null,p1__5841_SHARP_,options);
}),children);
var form = (new cljs.core.Delay((function (){
return malli.core._simple_form.call(null,parent__$1,properties,children__$1,malli.core._form,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.RegexSchema}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5849 = (function (form,options,re_min_max,p__5843,properties,re_explainer,children,meta5847,min,re_parser,parent,re_unparser,type,map__5845,map__5844,cache,re_transformer,max,re_validator,meta5850){
this.form = form;
this.options = options;
this.re_min_max = re_min_max;
this.p__5843 = p__5843;
this.properties = properties;
this.re_explainer = re_explainer;
this.children = children;
this.meta5847 = meta5847;
this.min = min;
this.re_parser = re_parser;
this.parent = parent;
this.re_unparser = re_unparser;
this.type = type;
this.map__5845 = map__5845;
this.map__5844 = map__5844;
this.cache = cache;
this.re_transformer = re_transformer;
this.max = max;
this.re_validator = re_validator;
this.meta5850 = meta5850;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5851,meta5850__$1){
var self__ = this;
var _5851__$1 = this;
return (new malli.core.t_malli$core5849(self__.form,self__.options,self__.re_min_max,self__.p__5843,self__.properties,self__.re_explainer,self__.children,self__.meta5847,self__.min,self__.re_parser,self__.parent,self__.re_unparser,self__.type,self__.map__5845,self__.map__5844,self__.cache,self__.re_transformer,self__.max,self__.re_validator,meta5850__$1));
}));

(malli.core.t_malli$core5849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5851){
var self__ = this;
var _5851__$1 = this;
return self__.meta5850;
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_validator.call(null,this$__$1);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_transformer.call(null,this$__$1,transformer,method,options__$1);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_indexed.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_explainer.call(null,this$__$1,path);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._regex_unparser.call(null,this$__$1);
}));

(malli.core.t_malli$core5849.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5849.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5849.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5849.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5849.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5849.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.children,key,default$);
}));

(malli.core.t_malli$core5849.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_assoc_children.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_op_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.re_validator.call(null,self__.properties,malli.core._vmap.call(null,malli.core._regex_validator,self__.children));
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return self__.re_explainer.call(null,self__.properties,cljs.core.map_indexed.call(null,(function (i,child){
return malli.core._regex_explainer.call(null,child,cljs.core.conj.call(null,path,i));
}),self__.children));
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.re_parser.call(null,self__.properties,malli.core._vmap.call(null,malli.core._regex_parser,self__.children));
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.re_unparser.call(null,self__.properties,malli.core._vmap.call(null,malli.core._regex_unparser,self__.children));
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_transformer$arity$4 = (function (_,transformer,method,options__$1){
var self__ = this;
var ___$1 = this;
return self__.re_transformer.call(null,self__.properties,malli.core._vmap.call(null,(function (p1__5842_SHARP_){
return malli.core._regex_transformer.call(null,p1__5842_SHARP_,transformer,method,options__$1);
}),self__.children));
}));

(malli.core.t_malli$core5849.prototype.malli$core$RegexSchema$_regex_min_max$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.re_min_max.call(null,self__.properties,self__.children);
}));

(malli.core.t_malli$core5849.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"re-min-max","re-min-max",-1633564062,null),new cljs.core.Symbol(null,"p__5843","p__5843",-676569307,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"re-explainer","re-explainer",373660327,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"meta5847","meta5847",-561806007,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"re-parser","re-parser",410905963,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5846","malli.core/t_malli$core5846",589085397,null)], null)),new cljs.core.Symbol(null,"re-unparser","re-unparser",-1221492690,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"map__5845","map__5845",2115484791,null),new cljs.core.Symbol(null,"map__5844","map__5844",547286488,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"re-transformer","re-transformer",124163066,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"re-validator","re-validator",1460156319,null),new cljs.core.Symbol(null,"meta5850","meta5850",-2115027431,null)], null);
}));

(malli.core.t_malli$core5849.cljs$lang$type = true);

(malli.core.t_malli$core5849.cljs$lang$ctorStr = "malli.core/t_malli$core5849");

(malli.core.t_malli$core5849.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5849");
}));

/**
 * Positional factory function for malli.core/t_malli$core5849.
 */
malli.core.__GT_t_malli$core5849 = (function malli$core$_sequence_schema_$___GT_t_malli$core5849(form__$1,options__$1,re_min_max__$1,p__5843__$1,properties__$1,re_explainer__$1,children__$2,meta5847__$1,min__$1,re_parser__$1,parent__$2,re_unparser__$1,type__$1,map__5845__$1,map__5844__$1,cache__$1,re_transformer__$1,max__$1,re_validator__$1,meta5850){
return (new malli.core.t_malli$core5849(form__$1,options__$1,re_min_max__$1,p__5843__$1,properties__$1,re_explainer__$1,children__$2,meta5847__$1,min__$1,re_parser__$1,parent__$2,re_unparser__$1,type__$1,map__5845__$1,map__5844__$1,cache__$1,re_transformer__$1,max__$1,re_validator__$1,meta5850));
});

}

return (new malli.core.t_malli$core5849(form,options,self__.re_min_max,self__.p__5843,properties,self__.re_explainer,children__$1,self__.meta5847,self__.min,self__.re_parser,parent__$1,self__.re_unparser,self__.type,self__.map__5845,self__.map__5844,cache,self__.re_transformer,self__.max,self__.re_validator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5846.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts);
}));

(malli.core.t_malli$core5846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re-min-max","re-min-max",-1633564062,null),new cljs.core.Symbol(null,"p__5843","p__5843",-676569307,null),new cljs.core.Symbol(null,"re-explainer","re-explainer",373660327,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"re-parser","re-parser",410905963,null),new cljs.core.Symbol(null,"re-unparser","re-unparser",-1221492690,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"map__5845","map__5845",2115484791,null),new cljs.core.Symbol(null,"map__5844","map__5844",547286488,null),new cljs.core.Symbol(null,"re-transformer","re-transformer",124163066,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"re-validator","re-validator",1460156319,null),new cljs.core.Symbol(null,"meta5847","meta5847",-561806007,null)], null);
}));

(malli.core.t_malli$core5846.cljs$lang$type = true);

(malli.core.t_malli$core5846.cljs$lang$ctorStr = "malli.core/t_malli$core5846");

(malli.core.t_malli$core5846.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5846");
}));

/**
 * Positional factory function for malli.core/t_malli$core5846.
 */
malli.core.__GT_t_malli$core5846 = (function malli$core$_sequence_schema_$___GT_t_malli$core5846(re_min_max__$1,p__5843__$1,re_explainer__$1,min__$1,re_parser__$1,re_unparser__$1,type__$1,map__5845__$2,map__5844__$2,re_transformer__$1,max__$1,re_validator__$1,meta5847){
return (new malli.core.t_malli$core5846(re_min_max__$1,p__5843__$1,re_explainer__$1,min__$1,re_parser__$1,re_unparser__$1,type__$1,map__5845__$2,map__5844__$2,re_transformer__$1,max__$1,re_validator__$1,meta5847));
});

}

return (new malli.core.t_malli$core5846(re_min_max,p__5843,re_explainer,min,re_parser,re_unparser,type,map__5845__$1,map__5844__$1,re_transformer,max,re_validator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.core._sequence_entry_schema = (function malli$core$_sequence_entry_schema(p__5852){
var map__5853 = p__5852;
var map__5853__$1 = cljs.core.__destructure_map.call(null,map__5853);
var opts = map__5853__$1;
var map__5854 = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738));
var map__5854__$1 = cljs.core.__destructure_map.call(null,map__5854);
var min = cljs.core.get.call(null,map__5854__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__5854__$1,new cljs.core.Keyword(null,"max","max",61366548));
var keep = cljs.core.get.call(null,map__5854__$1,new cljs.core.Keyword(null,"keep","keep",-2133338530));
var type = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var re_validator = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"re-validator","re-validator",-180375208));
var re_explainer = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200));
var re_parser = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564));
var re_unparser = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079));
var re_transformer = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461));
var re_min_max = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707));
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.AST}
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5855 = (function (re_min_max,keep,re_explainer,min,re_parser,re_unparser,type,map__5853,re_transformer,max,opts,map__5854,p__5852,re_validator,meta5856){
this.re_min_max = re_min_max;
this.keep = keep;
this.re_explainer = re_explainer;
this.min = min;
this.re_parser = re_parser;
this.re_unparser = re_unparser;
this.type = type;
this.map__5853 = map__5853;
this.re_transformer = re_transformer;
this.max = max;
this.opts = opts;
this.map__5854 = map__5854;
this.p__5852 = p__5852;
this.re_validator = re_validator;
this.meta5856 = meta5856;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5857,meta5856__$1){
var self__ = this;
var _5857__$1 = this;
return (new malli.core.t_malli$core5855(self__.re_min_max,self__.keep,self__.re_explainer,self__.min,self__.re_parser,self__.re_unparser,self__.type,self__.map__5853,self__.re_transformer,self__.max,self__.opts,self__.map__5854,self__.p__5852,self__.re_validator,meta5856__$1));
}));

(malli.core.t_malli$core5855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5857){
var self__ = this;
var _5857__$1 = this;
return self__.meta5856;
}));

(malli.core.t_malli$core5855.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5855.prototype.malli$core$AST$_from_ast$arity$3 = (function (parent,ast,options){
var self__ = this;
var parent__$1 = this;
return malli.core._from_entry_ast.call(null,parent__$1,ast,options);
}));

(malli.core.t_malli$core5855.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5855.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.core.t_malli$core5855.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.core.t_malli$core5855.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5855.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.core.t_malli$core5855.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.call(null,self__.type,properties,children,self__.min,self__.max);

var entry_parser = malli.core._create_entry_parser.call(null,children,self__.opts,options);
var form = (new cljs.core.Delay((function (){
return malli.core._create_entry_form.call(null,parent__$1,properties,entry_parser,options);
}),null));
var cache = malli.core._create_cache.call(null,options);
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.EntrySchema}
 * @implements {malli.core.AST}
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.RegexSchema}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5858 = (function (form,options,re_min_max,keep,properties,re_explainer,children,min,re_parser,entry_parser,parent,re_unparser,type,meta5856,map__5853,cache,re_transformer,max,opts,map__5854,p__5852,re_validator,meta5859){
this.form = form;
this.options = options;
this.re_min_max = re_min_max;
this.keep = keep;
this.properties = properties;
this.re_explainer = re_explainer;
this.children = children;
this.min = min;
this.re_parser = re_parser;
this.entry_parser = entry_parser;
this.parent = parent;
this.re_unparser = re_unparser;
this.type = type;
this.meta5856 = meta5856;
this.map__5853 = map__5853;
this.cache = cache;
this.re_transformer = re_transformer;
this.max = max;
this.opts = opts;
this.map__5854 = map__5854;
this.p__5852 = p__5852;
this.re_validator = re_validator;
this.meta5859 = meta5859;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5858.prototype.malli$core$AST$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5858.prototype.malli$core$AST$_to_ast$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return malli.core._entry_ast.call(null,this$__$1,malli.core._entry_keyset.call(null,self__.entry_parser));
}));

(malli.core.t_malli$core5858.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5858.prototype.malli$core$EntrySchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5858.prototype.malli$core$EntrySchema$_entries$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_entries.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5858.prototype.malli$core$EntrySchema$_entry_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.entry_parser;
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_op_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.re_validator.call(null,self__.properties,malli.core._vmap.call(null,(function (p__5861){
var vec__5862 = p__5861;
var k = cljs.core.nth.call(null,vec__5862,(0),null);
var _ = cljs.core.nth.call(null,vec__5862,(1),null);
var s = cljs.core.nth.call(null,vec__5862,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._regex_validator.call(null,s)], null);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return self__.re_explainer.call(null,self__.properties,malli.core._vmap.call(null,(function (p__5865){
var vec__5866 = p__5865;
var k = cljs.core.nth.call(null,vec__5866,(0),null);
var _ = cljs.core.nth.call(null,vec__5866,(1),null);
var s = cljs.core.nth.call(null,vec__5866,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._regex_explainer.call(null,s,cljs.core.conj.call(null,path,k))], null);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.re_parser.call(null,self__.properties,malli.core._vmap.call(null,(function (p__5869){
var vec__5870 = p__5869;
var k = cljs.core.nth.call(null,vec__5870,(0),null);
var _ = cljs.core.nth.call(null,vec__5870,(1),null);
var s = cljs.core.nth.call(null,vec__5870,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._regex_parser.call(null,s)], null);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.re_unparser.call(null,self__.properties,malli.core._vmap.call(null,(function (p__5873){
var vec__5874 = p__5873;
var k = cljs.core.nth.call(null,vec__5874,(0),null);
var _ = cljs.core.nth.call(null,vec__5874,(1),null);
var s = cljs.core.nth.call(null,vec__5874,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._regex_unparser.call(null,s)], null);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return self__.re_transformer.call(null,self__.properties,malli.core._vmap.call(null,(function (p__5877){
var vec__5878 = p__5877;
var k = cljs.core.nth.call(null,vec__5878,(0),null);
var _ = cljs.core.nth.call(null,vec__5878,(1),null);
var s = cljs.core.nth.call(null,vec__5878,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._regex_transformer.call(null,s,transformer,method,options__$1)], null);
}),malli.core._children.call(null,this$__$1)));
}));

(malli.core.t_malli$core5858.prototype.malli$core$RegexSchema$_regex_min_max$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return self__.re_min_max.call(null,self__.properties,malli.core._children.call(null,this$__$1));
}));

(malli.core.t_malli$core5858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5860){
var self__ = this;
var _5860__$1 = this;
return self__.meta5859;
}));

(malli.core.t_malli$core5858.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5858.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.core.t_malli$core5858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5860,meta5859__$1){
var self__ = this;
var _5860__$1 = this;
return (new malli.core.t_malli$core5858(self__.form,self__.options,self__.re_min_max,self__.keep,self__.properties,self__.re_explainer,self__.children,self__.min,self__.re_parser,self__.entry_parser,self__.parent,self__.re_unparser,self__.type,self__.meta5856,self__.map__5853,self__.cache,self__.re_transformer,self__.max,self__.opts,self__.map__5854,self__.p__5852,self__.re_validator,meta5859__$1));
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_validator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_validator.call(null,this$__$1);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_transformer.call(null,this$__$1,transformer,method,options__$1);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk_entries.call(null,this$__$1,walker,path,options__$1);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_parser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_parser.call(null,this$__$1);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._entry_children.call(null,self__.entry_parser);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.form);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_explainer$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return malli.core.regex_explainer.call(null,this$__$1,path);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_unparser$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.core._regex_unparser.call(null,this$__$1);
}));

(malli.core.t_malli$core5858.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.core.t_malli$core5858.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5858.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keep;
}));

(malli.core.t_malli$core5858.prototype.malli$core$LensSchema$_get$arity$3 = (function (this$,key,default$){
var self__ = this;
var this$__$1 = this;
return malli.core._get_entries.call(null,this$__$1,key,default$);
}));

(malli.core.t_malli$core5858.prototype.malli$core$LensSchema$_set$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
return malli.core._set_entries.call(null,this$__$1,key,value);
}));

(malli.core.t_malli$core5858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"re-min-max","re-min-max",-1633564062,null),new cljs.core.Symbol(null,"keep","keep",-492807003,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"re-explainer","re-explainer",373660327,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"re-parser","re-parser",410905963,null),new cljs.core.Symbol(null,"entry-parser","entry-parser",-1698599125,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.core","t_malli$core5855","malli.core/t_malli$core5855",194534297,null)], null)),new cljs.core.Symbol(null,"re-unparser","re-unparser",-1221492690,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta5856","meta5856",-814714634,null),new cljs.core.Symbol(null,"map__5853","map__5853",-1847751402,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"re-transformer","re-transformer",124163066,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__5854","map__5854",294321052,null),new cljs.core.Symbol(null,"p__5852","p__5852",1852504060,null),new cljs.core.Symbol(null,"re-validator","re-validator",1460156319,null),new cljs.core.Symbol(null,"meta5859","meta5859",66987059,null)], null);
}));

(malli.core.t_malli$core5858.cljs$lang$type = true);

(malli.core.t_malli$core5858.cljs$lang$ctorStr = "malli.core/t_malli$core5858");

(malli.core.t_malli$core5858.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5858");
}));

/**
 * Positional factory function for malli.core/t_malli$core5858.
 */
malli.core.__GT_t_malli$core5858 = (function malli$core$_sequence_entry_schema_$___GT_t_malli$core5858(form__$1,options__$1,re_min_max__$1,keep__$1,properties__$1,re_explainer__$1,children__$1,min__$1,re_parser__$1,entry_parser__$1,parent__$2,re_unparser__$1,type__$1,meta5856__$1,map__5853__$1,cache__$1,re_transformer__$1,max__$1,opts__$1,map__5854__$1,p__5852__$1,re_validator__$1,meta5859){
return (new malli.core.t_malli$core5858(form__$1,options__$1,re_min_max__$1,keep__$1,properties__$1,re_explainer__$1,children__$1,min__$1,re_parser__$1,entry_parser__$1,parent__$2,re_unparser__$1,type__$1,meta5856__$1,map__5853__$1,cache__$1,re_transformer__$1,max__$1,opts__$1,map__5854__$1,p__5852__$1,re_validator__$1,meta5859));
});

}

return (new malli.core.t_malli$core5858(form,options,self__.re_min_max,self__.keep,properties,self__.re_explainer,children,self__.min,self__.re_parser,entry_parser,parent__$1,self__.re_unparser,self__.type,self__.meta5856,self__.map__5853,cache,self__.re_transformer,self__.max,self__.opts,self__.map__5854,self__.p__5852,self__.re_validator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.core.t_malli$core5855.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._pr_writer_into_schema.call(null,this$__$1,writer,opts__$1);
}));

(malli.core.t_malli$core5855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re-min-max","re-min-max",-1633564062,null),new cljs.core.Symbol(null,"keep","keep",-492807003,null),new cljs.core.Symbol(null,"re-explainer","re-explainer",373660327,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"re-parser","re-parser",410905963,null),new cljs.core.Symbol(null,"re-unparser","re-unparser",-1221492690,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"map__5853","map__5853",-1847751402,null),new cljs.core.Symbol(null,"re-transformer","re-transformer",124163066,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__5854","map__5854",294321052,null),new cljs.core.Symbol(null,"p__5852","p__5852",1852504060,null),new cljs.core.Symbol(null,"re-validator","re-validator",1460156319,null),new cljs.core.Symbol(null,"meta5856","meta5856",-814714634,null)], null);
}));

(malli.core.t_malli$core5855.cljs$lang$type = true);

(malli.core.t_malli$core5855.cljs$lang$ctorStr = "malli.core/t_malli$core5855");

(malli.core.t_malli$core5855.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5855");
}));

/**
 * Positional factory function for malli.core/t_malli$core5855.
 */
malli.core.__GT_t_malli$core5855 = (function malli$core$_sequence_entry_schema_$___GT_t_malli$core5855(re_min_max__$1,keep__$1,re_explainer__$1,min__$1,re_parser__$1,re_unparser__$1,type__$1,map__5853__$2,re_transformer__$1,max__$1,opts__$1,map__5854__$2,p__5852__$1,re_validator__$1,meta5856){
return (new malli.core.t_malli$core5855(re_min_max__$1,keep__$1,re_explainer__$1,min__$1,re_parser__$1,re_unparser__$1,type__$1,map__5853__$2,re_transformer__$1,max__$1,opts__$1,map__5854__$2,p__5852__$1,re_validator__$1,meta5856));
});

}

return (new malli.core.t_malli$core5855(re_min_max,keep,re_explainer,min,re_parser,re_unparser,type,map__5853__$1,re_transformer,max,opts,map__5854__$1,p__5852,re_validator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
/**
 * Checks if x is a IntoSchema instance
 */
malli.core.into_schema_QMARK_ = (function malli$core$into_schema_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$IntoSchema$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Creates a Schema instance out of type, optional properties map and children
 */
malli.core.into_schema = (function malli$core$into_schema(var_args){
var G__5884 = arguments.length;
switch (G__5884) {
case 3:
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.into_schema.cljs$core$IFn$_invoke$arity$3 = (function (type,properties,children){
return malli.core.into_schema.call(null,type,properties,children,null);
}));

(malli.core.into_schema.cljs$core$IFn$_invoke$arity$4 = (function (type,properties,children,options){
var properties_SINGLEQUOTE_ = (cljs.core.truth_(properties)?(((cljs.core.count.call(null,properties) > (0)))?properties:null):null);
var r = (cljs.core.truth_(properties_SINGLEQUOTE_)?properties_SINGLEQUOTE_.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018)):null);
var options__$1 = (cljs.core.truth_(r)?malli.core._update.call(null,options,new cljs.core.Keyword(null,"registry","registry",1021159018),(function (p1__5882_SHARP_){
return malli.registry.composite_registry.call(null,r,(function (){var or__5025__auto__ = p1__5882_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._registry.call(null,options);
}
})());
})):options);
var properties__$1 = (cljs.core.truth_(r)?cljs.core.assoc.call(null,properties_SINGLEQUOTE_,new cljs.core.Keyword(null,"registry","registry",1021159018),malli.core._property_registry.call(null,r,options__$1,cljs.core.identity)):properties_SINGLEQUOTE_);
return malli.core._into_schema.call(null,malli.core._lookup_BANG_.call(null,type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,properties__$1,children], null),malli.core.into_schema_QMARK_,false,options__$1),properties__$1,children,options__$1);
}));

(malli.core.into_schema.cljs$lang$maxFixedArity = 4);

/**
 * Returns the Schema type.
 */
malli.core.type = (function malli$core$type(var_args){
var G__5887 = arguments.length;
switch (G__5887) {
case 1:
return malli.core.type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.type.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.type.call(null,_QMARK_schema,null);
}));

(malli.core.type.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._type.call(null,malli.core._parent.call(null,malli.core.schema.call(null,_QMARK_schema,options)));
}));

(malli.core.type.cljs$lang$maxFixedArity = 2);

/**
 * Returns the Schema type properties
 */
malli.core.type_properties = (function malli$core$type_properties(var_args){
var G__5890 = arguments.length;
switch (G__5890) {
case 1:
return malli.core.type_properties.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.type_properties.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.type_properties.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.type_properties.call(null,_QMARK_schema,null);
}));

(malli.core.type_properties.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._type_properties.call(null,malli.core._parent.call(null,malli.core.schema.call(null,_QMARK_schema,options)));
}));

(malli.core.type_properties.cljs$lang$maxFixedArity = 2);

/**
 * Returns properties schema for Schema or IntoSchema.
 */
malli.core.properties_schema = (function malli$core$properties_schema(var_args){
var G__5893 = arguments.length;
switch (G__5893) {
case 1:
return malli.core.properties_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.properties_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.properties_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.properties_schema.call(null,_QMARK_schema,null);
}));

(malli.core.properties_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
if(malli.core.into_schema_QMARK_.call(null,_QMARK_schema)){
var G__5894 = _QMARK_schema;
var G__5894__$1 = (((G__5894 == null))?null:malli.core._properties_schema.call(null,G__5894,options));
if((G__5894__$1 == null)){
return null;
} else {
return malli.core.schema.call(null,G__5894__$1);
}
} else {
var G__5895 = malli.core.schema.call(null,_QMARK_schema,options);
var G__5895__$1 = (((G__5895 == null))?null:malli.core._parent.call(null,G__5895));
if((G__5895__$1 == null)){
return null;
} else {
return malli.core._properties_schema.call(null,G__5895__$1,options);
}
}
}));

(malli.core.properties_schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns children schema for Schema or IntoSchema.
 */
malli.core.children_schema = (function malli$core$children_schema(var_args){
var G__5898 = arguments.length;
switch (G__5898) {
case 1:
return malli.core.children_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.children_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.children_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.children_schema.call(null,_QMARK_schema,null);
}));

(malli.core.children_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
if(malli.core.into_schema_QMARK_.call(null,_QMARK_schema)){
var G__5899 = _QMARK_schema;
var G__5899__$1 = (((G__5899 == null))?null:malli.core._children_schema.call(null,G__5899,options));
if((G__5899__$1 == null)){
return null;
} else {
return malli.core.schema.call(null,G__5899__$1);
}
} else {
var G__5900 = malli.core.schema.call(null,_QMARK_schema,options);
var G__5900__$1 = (((G__5900 == null))?null:malli.core._parent.call(null,G__5900));
if((G__5900__$1 == null)){
return null;
} else {
return malli.core._children_schema.call(null,G__5900__$1,options);
}
}
}));

(malli.core.children_schema.cljs$lang$maxFixedArity = 2);

/**
 * Checks if x is a Schema instance
 */
malli.core.schema_QMARK_ = (function malli$core$schema_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$core$Schema$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Creates a Schema object from any of the following:
 * 
 * - Schema instance (just returns it)
 * - IntoSchema instance
 * - Schema vector syntax, e.g. [:string {:min 1}]
 * - Qualified Keyword or String, using a registry lookup
 */
malli.core.schema = (function malli$core$schema(var_args){
var G__5904 = arguments.length;
switch (G__5904) {
case 1:
return malli.core.schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.schema.call(null,_QMARK_schema,null);
}));

(malli.core.schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
while(true){
if(malli.core.schema_QMARK_.call(null,_QMARK_schema)){
return _QMARK_schema;
} else {
if(malli.core.into_schema_QMARK_.call(null,_QMARK_schema)){
return malli.core._into_schema.call(null,_QMARK_schema,null,null,options);
} else {
if(cljs.core.vector_QMARK_.call(null,_QMARK_schema)){
var v = _QMARK_schema;
var t = malli.core._lookup_BANG_.call(null,cljs.core.nth.call(null,v,(0)),v,malli.core.into_schema_QMARK_,true,options);
var n = cljs.core.count.call(null,v);
var _QMARK_p = (((n > (1)))?cljs.core.nth.call(null,v,(1)):null);
if((((_QMARK_p == null)) || (cljs.core.map_QMARK_.call(null,_QMARK_p)))){
return malli.core.into_schema.call(null,t,_QMARK_p,((((2) < n))?cljs.core.subvec.call(null,_QMARK_schema,(2),n):null),options);
} else {
return malli.core.into_schema.call(null,t,null,((((1) < n))?cljs.core.subvec.call(null,_QMARK_schema,(1),n):null),options);
}
} else {
var temp__5823__auto__ = (function (){var and__5023__auto__ = malli.core._reference_QMARK_.call(null,_QMARK_schema);
if(and__5023__auto__){
return malli.core._lookup.call(null,_QMARK_schema,options);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var _QMARK_schema_SINGLEQUOTE_ = temp__5823__auto__;
return malli.core._pointer.call(null,_QMARK_schema,malli.core.schema.call(null,_QMARK_schema_SINGLEQUOTE_,options),options);
} else {
var G__5906 = malli.core._lookup_BANG_.call(null,_QMARK_schema,_QMARK_schema,null,false,options);
var G__5907 = options;
_QMARK_schema = G__5906;
options = G__5907;
continue;
}

}
}
}
break;
}
}));

(malli.core.schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns the Schema form
 */
malli.core.form = (function malli$core$form(var_args){
var G__5909 = arguments.length;
switch (G__5909) {
case 1:
return malli.core.form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.form.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.form.call(null,_QMARK_schema,null);
}));

(malli.core.form.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._form.call(null,malli.core.schema.call(null,_QMARK_schema,options));
}));

(malli.core.form.cljs$lang$maxFixedArity = 2);

/**
 * Returns the Schema properties
 */
malli.core.properties = (function malli$core$properties(var_args){
var G__5912 = arguments.length;
switch (G__5912) {
case 1:
return malli.core.properties.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.properties.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.properties.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.properties.call(null,_QMARK_schema,null);
}));

(malli.core.properties.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._properties.call(null,malli.core.schema.call(null,_QMARK_schema,options));
}));

(malli.core.properties.cljs$lang$maxFixedArity = 2);

/**
 * Returns options used in creating the Schema
 */
malli.core.options = (function malli$core$options(var_args){
var G__5915 = arguments.length;
switch (G__5915) {
case 1:
return malli.core.options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.options.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.options.call(null,_QMARK_schema,null);
}));

(malli.core.options.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._options.call(null,malli.core.schema.call(null,_QMARK_schema,options));
}));

(malli.core.options.cljs$lang$maxFixedArity = 2);

/**
 * Returns the Schema children with all Child Schemas resolved. For
 *   `MapEntry` Schemas, returns a always tuple3 of `key ?properties child`
 */
malli.core.children = (function malli$core$children(var_args){
var G__5918 = arguments.length;
switch (G__5918) {
case 1:
return malli.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.children.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.children.call(null,_QMARK_schema,null);
}));

(malli.core.children.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema = malli.core.schema.call(null,_QMARK_schema,options);
return malli.core._children.call(null,schema);
}));

(malli.core.children.cljs$lang$maxFixedArity = 2);

/**
 * Returns the IntoSchema instance that created the Schema
 */
malli.core.parent = (function malli$core$parent(var_args){
var G__5921 = arguments.length;
switch (G__5921) {
case 1:
return malli.core.parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.parent.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.parent.call(null,_QMARK_schema,null);
}));

(malli.core.parent.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._parent.call(null,malli.core.schema.call(null,_QMARK_schema,options));
}));

(malli.core.parent.cljs$lang$maxFixedArity = 2);

/**
 * Postwalks recursively over the Schema and it's children.
 * The walker callback is a arity4 function with the following
 * arguments: schema, path, (walked) children and options.
 */
malli.core.walk = (function malli$core$walk(var_args){
var G__5924 = arguments.length;
switch (G__5924) {
case 2:
return malli.core.walk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.walk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.walk.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.core.walk.call(null,_QMARK_schema,f,null);
}));

(malli.core.walk.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
return malli.core._walk.call(null,malli.core.schema.call(null,_QMARK_schema,options),(function (){
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core.t_malli$core5925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.Walker}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.core.t_malli$core5925 = (function (_QMARK_schema,f,options,meta5926){
this._QMARK_schema = _QMARK_schema;
this.f = f;
this.options = options;
this.meta5926 = meta5926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.core.t_malli$core5925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5927,meta5926__$1){
var self__ = this;
var _5927__$1 = this;
return (new malli.core.t_malli$core5925(self__._QMARK_schema,self__.f,self__.options,meta5926__$1));
}));

(malli.core.t_malli$core5925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5927){
var self__ = this;
var _5927__$1 = this;
return self__.meta5926;
}));

(malli.core.t_malli$core5925.prototype.malli$core$Walker$ = cljs.core.PROTOCOL_SENTINEL);

(malli.core.t_malli$core5925.prototype.malli$core$Walker$_accept$arity$4 = (function (_,s,___$1,___$2){
var self__ = this;
var ___$3 = this;
return s;
}));

(malli.core.t_malli$core5925.prototype.malli$core$Walker$_inner$arity$4 = (function (this$,s,p,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._walk.call(null,s,this$__$1,p,options__$1);
}));

(malli.core.t_malli$core5925.prototype.malli$core$Walker$_outer$arity$5 = (function (_,s,p,c,options__$1){
var self__ = this;
var ___$1 = this;
return self__.f.call(null,s,p,c,options__$1);
}));

(malli.core.t_malli$core5925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?schema","?schema",-271534072,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"meta5926","meta5926",-188388892,null)], null);
}));

(malli.core.t_malli$core5925.cljs$lang$type = true);

(malli.core.t_malli$core5925.cljs$lang$ctorStr = "malli.core/t_malli$core5925");

(malli.core.t_malli$core5925.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"malli.core/t_malli$core5925");
}));

/**
 * Positional factory function for malli.core/t_malli$core5925.
 */
malli.core.__GT_t_malli$core5925 = (function malli$core$__GT_t_malli$core5925(_QMARK_schema__$1,f__$1,options__$1,meta5926){
return (new malli.core.t_malli$core5925(_QMARK_schema__$1,f__$1,options__$1,meta5926));
});

}

return (new malli.core.t_malli$core5925(_QMARK_schema,f,options,cljs.core.PersistentArrayMap.EMPTY));
})()
,cljs.core.PersistentVector.EMPTY,options);
}));

(malli.core.walk.cljs$lang$maxFixedArity = 3);

/**
 * Returns an pure validation function of type `x -> boolean` for a given Schema.
 * Caches the result for [[Cached]] Schemas with key `:validator`.
 */
malli.core.validator = (function malli$core$validator(var_args){
var G__5930 = arguments.length;
switch (G__5930) {
case 1:
return malli.core.validator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.validator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.validator.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.validator.call(null,_QMARK_schema,null);
}));

(malli.core.validator.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._cached.call(null,malli.core.schema.call(null,_QMARK_schema,options),new cljs.core.Keyword(null,"validator","validator",-1966190681),malli.core._validator);
}));

(malli.core.validator.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if value is valid according to given schema. Creates the `validator`
 * for every call. When performance matters, (re-)use `validator` instead.
 */
malli.core.validate = (function malli$core$validate(var_args){
var G__5933 = arguments.length;
switch (G__5933) {
case 2:
return malli.core.validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.validate.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.core.validate.call(null,_QMARK_schema,value,null);
}));

(malli.core.validate.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
return malli.core.validator.call(null,_QMARK_schema,options).call(null,value);
}));

(malli.core.validate.cljs$lang$maxFixedArity = 3);

/**
 * Returns an pure explainer function of type `x -> explanation` for a given Schema.
 * Caches the result for [[Cached]] Schemas with key `:explainer`.
 */
malli.core.explainer = (function malli$core$explainer(var_args){
var G__5937 = arguments.length;
switch (G__5937) {
case 1:
return malli.core.explainer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.explainer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.explainer.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.explainer.call(null,_QMARK_schema,null);
}));

(malli.core.explainer.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema_SINGLEQUOTE_ = malli.core.schema.call(null,_QMARK_schema,options);
var explainer_SINGLEQUOTE_ = malli.core._cached.call(null,schema_SINGLEQUOTE_,new cljs.core.Keyword(null,"explainer","explainer",-2002221924),(function (p1__5935_SHARP_){
return malli.core._explainer.call(null,p1__5935_SHARP_,cljs.core.PersistentVector.EMPTY);
}));
return (function() {
var malli$core$explainer = null;
var malli$core$explainer__1 = (function (value){
return malli$core$explainer.call(null,value,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
var malli$core$explainer__3 = (function (value,in$,acc){
var temp__5825__auto__ = cljs.core.seq.call(null,explainer_SINGLEQUOTE_.call(null,value,in$,acc));
if(temp__5825__auto__){
var errors = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_SINGLEQUOTE_,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null);
} else {
return null;
}
});
malli$core$explainer = function(value,in$,acc){
switch(arguments.length){
case 1:
return malli$core$explainer__1.call(this,value);
case 3:
return malli$core$explainer__3.call(this,value,in$,acc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
malli$core$explainer.cljs$core$IFn$_invoke$arity$1 = malli$core$explainer__1;
malli$core$explainer.cljs$core$IFn$_invoke$arity$3 = malli$core$explainer__3;
return malli$core$explainer;
})()
}));

(malli.core.explainer.cljs$lang$maxFixedArity = 2);

/**
 * Explains a value against a given schema. Creates the `explainer` for every call.
 * When performance matters, (re-)use `explainer` instead.
 */
malli.core.explain = (function malli$core$explain(var_args){
var G__5940 = arguments.length;
switch (G__5940) {
case 2:
return malli.core.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.explain.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.core.explain.call(null,_QMARK_schema,value,null);
}));

(malli.core.explain.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
return malli.core.explainer.call(null,_QMARK_schema,options).call(null,value,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(malli.core.explain.cljs$lang$maxFixedArity = 3);

/**
 * Returns an pure parser function of type `x -> either parsed-x ::invalid` for a given Schema.
 * Caches the result for [[Cached]] Schemas with key `:parser`.
 */
malli.core.parser = (function malli$core$parser(var_args){
var G__5943 = arguments.length;
switch (G__5943) {
case 1:
return malli.core.parser.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.parser.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.parser.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.parser.call(null,_QMARK_schema,null);
}));

(malli.core.parser.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._cached.call(null,malli.core.schema.call(null,_QMARK_schema,options),new cljs.core.Keyword(null,"parser","parser",-1543495310),malli.core._parser);
}));

(malli.core.parser.cljs$lang$maxFixedArity = 2);

/**
 * parses a value against a given schema. Creates the `parser` for every call.
 * When performance matters, (re-)use `parser` instead.
 */
malli.core.parse = (function malli$core$parse(var_args){
var G__5946 = arguments.length;
switch (G__5946) {
case 2:
return malli.core.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.parse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.parse.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.core.parse.call(null,_QMARK_schema,value,null);
}));

(malli.core.parse.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
return malli.core.parser.call(null,_QMARK_schema,options).call(null,value);
}));

(malli.core.parse.cljs$lang$maxFixedArity = 3);

/**
 * Returns an pure unparser function of type `parsed-x -> either x ::invalid` for a given Schema.
 * Caches the result for [[Cached]] Schemas with key `:unparser`.
 */
malli.core.unparser = (function malli$core$unparser(var_args){
var G__5949 = arguments.length;
switch (G__5949) {
case 1:
return malli.core.unparser.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.unparser.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.unparser.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.unparser.call(null,_QMARK_schema,null);
}));

(malli.core.unparser.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core._cached.call(null,malli.core.schema.call(null,_QMARK_schema,options),new cljs.core.Keyword(null,"unparser","unparser",1801459433),malli.core._unparser);
}));

(malli.core.unparser.cljs$lang$maxFixedArity = 2);

/**
 * Unparses a value against a given schema. Creates the `unparser` for every call.
 * When performance matters, (re-)use `unparser` instead.
 */
malli.core.unparse = (function malli$core$unparse(var_args){
var G__5952 = arguments.length;
switch (G__5952) {
case 2:
return malli.core.unparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.unparse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.unparse.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.core.unparse.call(null,_QMARK_schema,value,null);
}));

(malli.core.unparse.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
return malli.core.unparser.call(null,_QMARK_schema,options).call(null,value);
}));

(malli.core.unparse.cljs$lang$maxFixedArity = 3);

/**
 * Creates a value decoding function given a transformer and a schema.
 */
malli.core.decoder = (function malli$core$decoder(var_args){
var G__5955 = arguments.length;
switch (G__5955) {
case 2:
return malli.core.decoder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.decoder.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.decoder.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,t){
return malli.core.decoder.call(null,_QMARK_schema,null,t);
}));

(malli.core.decoder.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,options,t){
var or__5025__auto__ = malli.core._transformer.call(null,malli.core.schema.call(null,_QMARK_schema,options),malli.core._into_transformer.call(null,t),new cljs.core.Keyword(null,"decode","decode",-1306165281),options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
}));

(malli.core.decoder.cljs$lang$maxFixedArity = 3);

/**
 * Transforms a value with a given decoding transformer against a schema.
 */
malli.core.decode = (function malli$core$decode(var_args){
var G__5958 = arguments.length;
switch (G__5958) {
case 3:
return malli.core.decode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.core.decode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.decode.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,t){
return malli.core.decode.call(null,_QMARK_schema,value,null,t);
}));

(malli.core.decode.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,value,options,t){
var temp__5823__auto__ = malli.core.decoder.call(null,_QMARK_schema,options,t);
if(cljs.core.truth_(temp__5823__auto__)){
var transform = temp__5823__auto__;
return transform.call(null,value);
} else {
return value;
}
}));

(malli.core.decode.cljs$lang$maxFixedArity = 4);

/**
 * Creates a value encoding transformer given a transformer and a schema.
 */
malli.core.encoder = (function malli$core$encoder(var_args){
var G__5961 = arguments.length;
switch (G__5961) {
case 2:
return malli.core.encoder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.encoder.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.encoder.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,t){
return malli.core.encoder.call(null,_QMARK_schema,null,t);
}));

(malli.core.encoder.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,options,t){
var or__5025__auto__ = malli.core._transformer.call(null,malli.core.schema.call(null,_QMARK_schema,options),malli.core._into_transformer.call(null,t),new cljs.core.Keyword(null,"encode","encode",-1753429702),options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
}));

(malli.core.encoder.cljs$lang$maxFixedArity = 3);

/**
 * Transforms a value with a given encoding transformer against a schema.
 */
malli.core.encode = (function malli$core$encode(var_args){
var G__5964 = arguments.length;
switch (G__5964) {
case 3:
return malli.core.encode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.core.encode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.encode.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,t){
return malli.core.encode.call(null,_QMARK_schema,value,null,t);
}));

(malli.core.encode.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,value,options,t){
var temp__5823__auto__ = malli.core.encoder.call(null,_QMARK_schema,options,t);
if(cljs.core.truth_(temp__5823__auto__)){
var transform = temp__5823__auto__;
return transform.call(null,value);
} else {
return value;
}
}));

(malli.core.encode.cljs$lang$maxFixedArity = 4);

/**
 * Creates a function to decode and validate a value, throws on validation error.
 */
malli.core.coercer = (function malli$core$coercer(var_args){
var G__5968 = arguments.length;
switch (G__5968) {
case 1:
return malli.core.coercer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.coercer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.coercer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.core.coercer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.core.coercer.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.coercer.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.coercer.call(null,_QMARK_schema,null,null);
}));

(malli.core.coercer.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,transformer){
return malli.core.coercer.call(null,_QMARK_schema,transformer,null);
}));

(malli.core.coercer.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,transformer,options){
return malli.core.coercer.call(null,_QMARK_schema,transformer,null,null,options);
}));

(malli.core.coercer.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,transformer,respond,raise){
return malli.core.coercer.call(null,_QMARK_schema,transformer,respond,raise,null);
}));

(malli.core.coercer.cljs$core$IFn$_invoke$arity$5 = (function (_QMARK_schema,transformer,respond,raise,options){
var s = malli.core.schema.call(null,_QMARK_schema,options);
var valid_QMARK_ = malli.core.validator.call(null,s);
var decode = malli.core.decoder.call(null,s,transformer);
var explain = malli.core.explainer.call(null,s);
var respond__$1 = (function (){var or__5025__auto__ = respond;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})();
var raise__$1 = (function (){var or__5025__auto__ = raise;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (p1__5966_SHARP_){
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","coercion","malli.core/coercion",698994541),p1__5966_SHARP_);
});
}
})();
return (function malli$core$_coercer(x){
var value = decode.call(null,x);
if(cljs.core.truth_(valid_QMARK_.call(null,value))){
return respond__$1.call(null,value);
} else {
return raise__$1.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"schema","schema",-1582001791),s,new cljs.core.Keyword(null,"explain","explain",484226146),explain.call(null,value)], null));
}
});
}));

(malli.core.coercer.cljs$lang$maxFixedArity = 5);

/**
 * Decode and validate a value, throws on validation error.
 */
malli.core.coerce = (function malli$core$coerce(var_args){
var G__5971 = arguments.length;
switch (G__5971) {
case 2:
return malli.core.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.core.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.core.coerce.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return malli.core.coerce.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.coerce.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.core.coerce.call(null,_QMARK_schema,value,null,null);
}));

(malli.core.coerce.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,transformer){
return malli.core.coerce.call(null,_QMARK_schema,value,transformer,null);
}));

(malli.core.coerce.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,value,transformer,options){
return malli.core.coerce.call(null,_QMARK_schema,value,transformer,null,null,options);
}));

(malli.core.coerce.cljs$core$IFn$_invoke$arity$5 = (function (_QMARK_schema,value,transformer,respond,raise){
return malli.core.coerce.call(null,_QMARK_schema,value,transformer,respond,raise,null);
}));

(malli.core.coerce.cljs$core$IFn$_invoke$arity$6 = (function (_QMARK_schema,value,transformer,respond,raise,options){
return malli.core.coercer.call(null,_QMARK_schema,transformer,respond,raise,options).call(null,value);
}));

(malli.core.coerce.cljs$lang$maxFixedArity = 6);

var ret__5804__auto___5975 = (function (){
/**
 * Assert that `value` validates against schema `?schema`, or throws ExceptionInfo.
 * The var clojure.core/*assert* determines whether assertion are checked.
 */
malli.core.assert = (function malli$core$assert(var_args){
var G__5974 = arguments.length;
switch (G__5974) {
case 4:
return malli.core.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.core.assert.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(malli.core.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_schema,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("malli.core","assert","malli.core/assert",345482813,null),null,(1),null)),(new cljs.core.List(null,_QMARK_schema,null,(1),null)),(new cljs.core.List(null,value,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(malli.core.assert.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_schema,value,options){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("malli.core","coerce","malli.core/coerce",684750775,null),null,(1),null)),(new cljs.core.List(null,_QMARK_schema,null,(1),null)),(new cljs.core.List(null,value,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))));
} else {
return value;
}
}));

(malli.core.assert.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(malli.core.assert.cljs$lang$macro = true);

/**
 * Returns `EntrySchema` children as a sequence of `clojure.lang/MapEntry`s
 * where the values child schemas wrapped in `:malli.core/val` Schemas,
 * with the entry properties as properties.
 * 
 * Using `entries` enable usage of entry properties in walking and value
 * transformation.
 * 
 *    (def schema
 *      [:map
 *       [:x int?]
 *       [:y {:optional true} int?]])
 * 
 *    (m/children schema)
 *    ; [[:x nil int?]
 *    ;  [:y {:optional true} int?]]
 * 
 *    (m/entries schema)
 *    ; [[:x [:malli.core/val int?]]
 *    ;  [:y [:malli.core/val {:optional true} int?]]]
 * 
 *    (map key (m/entries schema))
 *    ; (:x :y)
 */
malli.core.entries = (function malli$core$entries(var_args){
var G__5978 = arguments.length;
switch (G__5978) {
case 1:
return malli.core.entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.entries.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.entries.call(null,_QMARK_schema,null);
}));

(malli.core.entries.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var temp__5825__auto__ = malli.core.schema.call(null,_QMARK_schema,options);
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
if(malli.core._entry_schema_QMARK_.call(null,schema)){
return malli.core._entries.call(null,schema);
} else {
return null;
}
} else {
return null;
}
}));

(malli.core.entries.cljs$lang$maxFixedArity = 2);

/**
 * Returns a vector of explicit (not ::m/default) keys from EntrySchema
 */
malli.core.explicit_keys = (function malli$core$explicit_keys(var_args){
var G__5981 = arguments.length;
switch (G__5981) {
case 1:
return malli.core.explicit_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.explicit_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.explicit_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.explicit_keys.call(null,_QMARK_schema,null);
}));

(malli.core.explicit_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema = malli.core.schema.call(null,_QMARK_schema,options);
if(malli.core._entry_schema_QMARK_.call(null,schema)){
return cljs.core.reduce.call(null,(function (acc,p__5982){
var vec__5983 = p__5982;
var k = cljs.core.nth.call(null,vec__5983,(0),null);
var e = vec__5983;
var G__5986 = acc;
if((!(malli.core._default_entry.call(null,e)))){
return cljs.core.conj.call(null,G__5986,k);
} else {
return G__5986;
}
}),cljs.core.PersistentVector.EMPTY,malli.core._entries.call(null,schema));
} else {
return null;
}
}));

(malli.core.explicit_keys.cljs$lang$maxFixedArity = 2);

/**
 * Returns the default (::m/default) schema from EntrySchema
 */
malli.core.default_schema = (function malli$core$default_schema(var_args){
var G__5989 = arguments.length;
switch (G__5989) {
case 1:
return malli.core.default_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.default_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.default_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.default_schema.call(null,_QMARK_schema,null);
}));

(malli.core.default_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema = malli.core.schema.call(null,_QMARK_schema,options);
if(malli.core._entry_schema_QMARK_.call(null,schema)){
return malli.core._default_entry_schema.call(null,malli.core._children.call(null,schema));
} else {
return null;
}
}));

(malli.core.default_schema.cljs$lang$maxFixedArity = 2);

/**
 * Derefs top-level `RefSchema`s or returns original Schema.
 */
malli.core.deref = (function malli$core$deref(var_args){
var G__5992 = arguments.length;
switch (G__5992) {
case 1:
return malli.core.deref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.deref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.deref.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.deref.call(null,_QMARK_schema,null);
}));

(malli.core.deref.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema = malli.core.schema.call(null,_QMARK_schema,options);
var G__5993 = schema;
if(malli.core._ref_schema_QMARK_.call(null,schema)){
return malli.core._deref.call(null,G__5993);
} else {
return G__5993;
}
}));

(malli.core.deref.cljs$lang$maxFixedArity = 2);

/**
 * Derefs top-level `RefSchema`s recursively or returns original Schema.
 */
malli.core.deref_all = (function malli$core$deref_all(var_args){
var G__5996 = arguments.length;
switch (G__5996) {
case 1:
return malli.core.deref_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.deref_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.deref_all.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.deref_all.call(null,_QMARK_schema,null);
}));

(malli.core.deref_all.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
while(true){
var schema = malli.core.deref.call(null,_QMARK_schema,options);
var G__5997 = schema;
if(malli.core._ref_schema_QMARK_.call(null,schema)){
var G__5999 = G__5997;
var G__6000 = options;
_QMARK_schema = G__5999;
options = G__6000;
continue;
} else {
return G__5997;
}
break;
}
}));

(malli.core.deref_all.cljs$lang$maxFixedArity = 2);

/**
 * Derefs all schemas at all levels. Does not walk over `:ref`s.
 */
malli.core.deref_recursive = (function malli$core$deref_recursive(var_args){
var G__6002 = arguments.length;
switch (G__6002) {
case 1:
return malli.core.deref_recursive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.deref_recursive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.deref_recursive.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.deref_recursive.call(null,_QMARK_schema,null);
}));

(malli.core.deref_recursive.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,p__6003){
var map__6004 = p__6003;
var map__6004__$1 = cljs.core.__destructure_map.call(null,map__6004);
var options = map__6004__$1;
var ref_key = cljs.core.get.call(null,map__6004__$1,new cljs.core.Keyword("malli.core","ref-key","malli.core/ref-key",-374484898));
var schema = malli.core.schema.call(null,_QMARK_schema,options);
var maybe_set_ref = (function (s,r){
if(cljs.core.truth_((function (){var and__5023__auto__ = ref_key;
if(cljs.core.truth_(and__5023__auto__)){
return r;
} else {
return and__5023__auto__;
}
})())){
return malli.core._update_properties.call(null,s,cljs.core.assoc,ref_key,r);
} else {
return s;
}
});
return malli.core.deref_all.call(null,malli.core.walk.call(null,schema,(function (schema__$1,_,children,___$1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),malli.core.type.call(null,schema__$1))){
return schema__$1;
} else {
if(malli.core._ref_schema_QMARK_.call(null,schema__$1)){
return maybe_set_ref.call(null,malli.core.deref.call(null,malli.core._set_children.call(null,schema__$1,children)),malli.core._ref.call(null,schema__$1));
} else {
return malli.core._set_children.call(null,schema__$1,children);

}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.core","walk-schema-refs","malli.core/walk-schema-refs",-1140065954),true], null)));
}));

(malli.core.deref_recursive.cljs$lang$maxFixedArity = 2);

/**
 * Creates a Schema from AST
 */
malli.core.from_ast = (function malli$core$from_ast(var_args){
var G__6010 = arguments.length;
switch (G__6010) {
case 1:
return malli.core.from_ast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.from_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.from_ast.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_ast){
return malli.core.from_ast.call(null,_QMARK_ast,null);
}));

(malli.core.from_ast.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_ast,options){
if(malli.core.schema_QMARK_.call(null,_QMARK_ast)){
return _QMARK_ast;
} else {
if(cljs.core.map_QMARK_.call(null,_QMARK_ast)){
var temp__5823__auto__ = malli.core._lookup.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(_QMARK_ast),options);
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
var r = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(_QMARK_ast);
if(cljs.core.truth_(temp__5825__auto__)){
var r = temp__5825__auto__;
return malli.core._delayed_registry.call(null,r,malli.core.from_ast);
} else {
return null;
}
})();
var options__$1 = (function (){var G__6011 = options;
if(cljs.core.truth_(r)){
return malli.core._update.call(null,G__6011,new cljs.core.Keyword(null,"registry","registry",1021159018),(function (p1__6006_SHARP_){
return malli.registry.composite_registry.call(null,r,(function (){var or__5025__auto__ = p1__6006_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._registry.call(null,options);
}
})());
}));
} else {
return G__6011;
}
})();
var ast = (function (){var G__6012 = _QMARK_ast;
if(cljs.core.truth_(r)){
return malli.core._update.call(null,G__6012,new cljs.core.Keyword(null,"properties","properties",685819552),(function (p1__6007_SHARP_){
return cljs.core.assoc.call(null,p1__6007_SHARP_,new cljs.core.Keyword(null,"registry","registry",1021159018),malli.core._property_registry.call(null,r,options__$1,cljs.core.identity));
}));
} else {
return G__6012;
}
})();
if(((malli.core.into_schema_QMARK_.call(null,s)) && (malli.core._ast_QMARK_.call(null,s)))){
return malli.core._from_ast.call(null,s,ast,options__$1);
} else {
if(malli.core.into_schema_QMARK_.call(null,s)){
return malli.core._into_schema.call(null,s,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ast),malli.core._vmap.call(null,(function (p1__6008_SHARP_){
return malli.core.from_ast.call(null,p1__6008_SHARP_,options__$1);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)),options__$1);
} else {
return s;

}
}
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-ast","malli.core/invalid-ast",-1822979859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),_QMARK_ast], null));
}
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-ast","malli.core/invalid-ast",-1822979859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),_QMARK_ast], null));

}
}
}));

(malli.core.from_ast.cljs$lang$maxFixedArity = 2);

/**
 * Returns the Schema AST
 */
malli.core.ast = (function malli$core$ast(var_args){
var G__6016 = arguments.length;
switch (G__6016) {
case 1:
return malli.core.ast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.ast.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.ast.call(null,_QMARK_schema,null);
}));

(malli.core.ast.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var s = malli.core.schema.call(null,_QMARK_schema,options);
if(malli.core._ast_QMARK_.call(null,s)){
return malli.core._to_ast.call(null,s,options);
} else {
var c = malli.core._children.call(null,s);
return malli.core._ast.call(null,(function (){var G__6017 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.call(null,s)], null);
if(cljs.core.truth_(c)){
return cljs.core.assoc.call(null,G__6017,new cljs.core.Keyword(null,"children","children",-940561982),malli.core._vmap.call(null,(function (p1__6014_SHARP_){
return malli.core.ast.call(null,p1__6014_SHARP_,options);
}),c));
} else {
return G__6017;
}
})(),malli.core._properties.call(null,s),malli.core._options.call(null,s));
}
}));

(malli.core.ast.cljs$lang$maxFixedArity = 2);

malli.core._default_sci_options = (function malli$core$_default_sci_options(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),new cljs.core.Keyword(null,"aliases","aliases",1346874714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"malli.core","malli.core",-2051169970,null)], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"malli.core","malli.core",-2051169970,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"properties","properties",-1968616217,null),malli.core.properties,new cljs.core.Symbol(null,"type","type",-1480165421,null),malli.core.type,new cljs.core.Symbol(null,"children","children",699969545,null),malli.core.children,new cljs.core.Symbol(null,"entries","entries",1553588366,null),malli.core.entries], null)], null)], null);
});
var _fail_BANG__6023 = (function (p1__6019_SHARP_){
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","sci-not-available","malli.core/sci-not-available",-1400847277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),p1__6019_SHARP_], null));
});
var _eval_QMARK__6024 = (function (p1__6020_SHARP_){
return (((p1__6020_SHARP_ instanceof cljs.core.Symbol)) || (((typeof p1__6020_SHARP_ === 'string') || (cljs.core.sequential_QMARK_.call(null,p1__6020_SHARP_)))));
});
var _evaluator_6025 = cljs.core.memoize.call(null,malli.sci.evaluator);
malli.core.eval = (function malli$core$eval(var_args){
var G__6022 = arguments.length;
switch (G__6022) {
case 1:
return malli.core.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.eval.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_code){
return malli.core.eval.call(null,_QMARK_code,null);
}));

(malli.core.eval.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_code,options){
if(cljs.core.vector_QMARK_.call(null,_QMARK_code)){
return _QMARK_code;
} else {
if(_eval_QMARK__6024.call(null,_QMARK_code)){
if(cljs.core.truth_(new cljs.core.Keyword("malli.core","disable-sci","malli.core/disable-sci",-907669760).cljs$core$IFn$_invoke$arity$1(options))){
return _fail_BANG__6023.call(null,_QMARK_code);
} else {
return _evaluator_6025.call(null,(function (){var or__5025__auto__ = new cljs.core.Keyword("malli.core","sci-options","malli.core/sci-options",905728020).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._default_sci_options.call(null);
}
})(),_fail_BANG__6023).call(null).call(null,_QMARK_code);
}
} else {
return _QMARK_code;

}
}
}));

(malli.core.eval.cljs$lang$maxFixedArity = 2);

malli.core.schema_walker = (function malli$core$schema_walker(f){
return (function (schema,_,children,___$1){
return f.call(null,malli.core._set_children.call(null,schema,children));
});
});
malli.core.predicate_schemas = (function malli$core$predicate_schemas(){
var _safe_empty_QMARK_ = (function (x){
return ((cljs.core.seqable_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x)));
});
return malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,malli.core._register_var.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_),new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.some_QMARK_),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),cljs.core.number_QMARK_),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),cljs.core.integer_QMARK_),new cljs.core.Symbol(null,"int?","int?",1799729645,null),cljs.core.int_QMARK_),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),cljs.core.pos_int_QMARK_),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),cljs.core.neg_int_QMARK_),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),cljs.core.nat_int_QMARK_),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.pos_QMARK_),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),cljs.core.neg_QMARK_),new cljs.core.Symbol(null,"float?","float?",673884616,null),cljs.core.float_QMARK_),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),cljs.core.double_QMARK_),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),cljs.core.boolean_QMARK_),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),cljs.core.ident_QMARK_),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),cljs.core.simple_ident_QMARK_),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),cljs.core.qualified_ident_QMARK_),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),cljs.core.simple_keyword_QMARK_),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),cljs.core.qualified_keyword_QMARK_),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),cljs.core.symbol_QMARK_),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),cljs.core.simple_symbol_QMARK_),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),cljs.core.qualified_symbol_QMARK_),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),cljs.core.uuid_QMARK_),new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),cljs.core.uri_QMARK_),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),cljs.core.inst_QMARK_),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),cljs.core.seqable_QMARK_),new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null),cljs.core.indexed_QMARK_),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),cljs.core.vector_QMARK_),new cljs.core.Symbol(null,"list?","list?",-1494629,null),cljs.core.list_QMARK_),new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.seq_QMARK_),new cljs.core.Symbol(null,"char?","char?",-1072221244,null),cljs.core.char_QMARK_),new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.set_QMARK_),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.nil_QMARK_),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.false_QMARK_),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.true_QMARK_),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.zero_QMARK_),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.coll_QMARK_),new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),cljs.core.associative_QMARK_),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),cljs.core.sequential_QMARK_),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),cljs.core.ifn_QMARK_),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),cljs.core.fn_QMARK_),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.empty_QMARK_,_safe_empty_QMARK_);
});
malli.core.class_schemas = (function malli$core$class_schemas(){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.type.call(null,(new RegExp(""))),malli.core._re_schema.call(null,true)]);
});
malli.core.comparator_schemas = (function malli$core$comparator_schemas(){
return cljs.core.reduce_kv.call(null,cljs.core.assoc,null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,malli.core._vmap.call(null,(function (p__6028){
var vec__6029 = p__6028;
var k = cljs.core.nth.call(null,vec__6029,(0),null);
var v = cljs.core.nth.call(null,vec__6029,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,malli.core._simple_schema.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),k,new cljs.core.Keyword(null,"from-ast","from-ast",-246238449),malli.core._from_value_ast,new cljs.core.Keyword(null,"to-ast","to-ast",-21935298),malli.core._to_value_ast,new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"compile","compile",608186429),(function (_,p__6032,___$1){
var vec__6033 = p__6032;
var child = cljs.core.nth.call(null,vec__6033,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pred","pred",1927423397),malli.core._safe_pred.call(null,(function (p1__6027_SHARP_){
return v.call(null,p1__6027_SHARP_,child);
}))], null);
})], null))], null);
}),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,">",">",-555517146),cljs.core._GT_,new cljs.core.Keyword(null,">=",">=",-623615505),cljs.core._GT__EQ_,new cljs.core.Keyword(null,"<","<",-646864291),cljs.core._LT_,new cljs.core.Keyword(null,"<=","<=",-395636158),cljs.core._LT__EQ_,new cljs.core.Keyword(null,"=","=",1152933628),cljs.core._EQ_,new cljs.core.Keyword(null,"not=","not=",-173995323),cljs.core.not_EQ_], null))));
});
malli.core.type_schemas = (function malli$core$type_schemas(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"some","some",-1951079573),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"any","any",1705907423)],[malli.core._qualified_symbol_schema.call(null),malli.core._double_schema.call(null),malli.core._int_schema.call(null),malli.core._float_schema.call(null),malli.core._symbol_schema.call(null),malli.core._qualified_keyword_schema.call(null),malli.core._some_schema.call(null),malli.core._string_schema.call(null),malli.core._keyword_schema.call(null),malli.core._nil_schema.call(null),malli.core._uuid_schema.call(null),malli.core._boolean_schema.call(null),malli.core._any_schema.call(null)]);
});
malli.core.sequence_schemas = (function malli$core$sequence_schemas(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"+","+",1913524883),malli.core._sequence_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,p__6036){
var vec__6037 = p__6036;
var child = cljs.core.nth.call(null,vec__6037,(0),null);
return malli.impl.regex._PLUS__explainer.call(null,child);
}),(function (_,p__6040){
var vec__6041 = p__6040;
var child = cljs.core.nth.call(null,vec__6041,(0),null);
return malli.impl.regex._PLUS__parser.call(null,child);
}),(function (_,p__6044){
var vec__6045 = p__6044;
var child = cljs.core.nth.call(null,vec__6045,(0),null);
return malli.impl.regex._PLUS__unparser.call(null,child);
}),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1)], null),(function (_,p__6048){
var vec__6049 = p__6048;
var child = cljs.core.nth.call(null,vec__6049,(0),null);
return malli.impl.regex._PLUS__transformer.call(null,child);
}),(function (_,p__6052){
var vec__6053 = p__6052;
var child = cljs.core.nth.call(null,vec__6053,(0),null);
return malli.impl.regex._PLUS__validator.call(null,child);
}),(function (_,p__6056){
var vec__6057 = p__6056;
var child = cljs.core.nth.call(null,vec__6057,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(malli.core._regex_min_max.call(null,child,true))], null);
}),true])),new cljs.core.Keyword(null,"*","*",-1294732318),malli.core._sequence_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,p__6060){
var vec__6061 = p__6060;
var child = cljs.core.nth.call(null,vec__6061,(0),null);
return malli.impl.regex._STAR__explainer.call(null,child);
}),(function (_,p__6064){
var vec__6065 = p__6064;
var child = cljs.core.nth.call(null,vec__6065,(0),null);
return malli.impl.regex._STAR__parser.call(null,child);
}),(function (_,p__6068){
var vec__6069 = p__6068;
var child = cljs.core.nth.call(null,vec__6069,(0),null);
return malli.impl.regex._STAR__unparser.call(null,child);
}),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1)], null),(function (_,p__6072){
var vec__6073 = p__6072;
var child = cljs.core.nth.call(null,vec__6073,(0),null);
return malli.impl.regex._STAR__transformer.call(null,child);
}),(function (_,p__6076){
var vec__6077 = p__6076;
var child = cljs.core.nth.call(null,vec__6077,(0),null);
return malli.impl.regex._STAR__validator.call(null,child);
}),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null);
}),true])),new cljs.core.Keyword(null,"?","?",-1703165233),malli.core._sequence_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,p__6080){
var vec__6081 = p__6080;
var child = cljs.core.nth.call(null,vec__6081,(0),null);
return malli.impl.regex._QMARK__explainer.call(null,child);
}),(function (_,p__6084){
var vec__6085 = p__6084;
var child = cljs.core.nth.call(null,vec__6085,(0),null);
return malli.impl.regex._QMARK__parser.call(null,child);
}),(function (_,p__6088){
var vec__6089 = p__6088;
var child = cljs.core.nth.call(null,vec__6089,(0),null);
return malli.impl.regex._QMARK__unparser.call(null,child);
}),new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1)], null),(function (_,p__6092){
var vec__6093 = p__6092;
var child = cljs.core.nth.call(null,vec__6093,(0),null);
return malli.impl.regex._QMARK__transformer.call(null,child);
}),(function (_,p__6096){
var vec__6097 = p__6096;
var child = cljs.core.nth.call(null,vec__6097,(0),null);
return malli.impl.regex._QMARK__validator.call(null,child);
}),(function (_,p__6100){
var vec__6101 = p__6100;
var child = cljs.core.nth.call(null,vec__6101,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(malli.core._regex_min_max.call(null,child,true))], null);
}),true])),new cljs.core.Keyword(null,"repeat","repeat",832692087),malli.core._sequence_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (p__6104,p__6105){
var map__6106 = p__6104;
var map__6106__$1 = cljs.core.__destructure_map.call(null,map__6106);
var min = cljs.core.get.call(null,map__6106__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.call(null,map__6106__$1,new cljs.core.Keyword(null,"max","max",61366548),Infinity);
var vec__6107 = p__6105;
var child = cljs.core.nth.call(null,vec__6107,(0),null);
return malli.impl.regex.repeat_explainer.call(null,min,max,child);
}),(function (p__6110,p__6111){
var map__6112 = p__6110;
var map__6112__$1 = cljs.core.__destructure_map.call(null,map__6112);
var min = cljs.core.get.call(null,map__6112__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.call(null,map__6112__$1,new cljs.core.Keyword(null,"max","max",61366548),Infinity);
var vec__6113 = p__6111;
var child = cljs.core.nth.call(null,vec__6113,(0),null);
return malli.impl.regex.repeat_parser.call(null,min,max,child);
}),(function (p__6116,p__6117){
var map__6118 = p__6116;
var map__6118__$1 = cljs.core.__destructure_map.call(null,map__6118);
var min = cljs.core.get.call(null,map__6118__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.call(null,map__6118__$1,new cljs.core.Keyword(null,"max","max",61366548),Infinity);
var vec__6119 = p__6117;
var child = cljs.core.nth.call(null,vec__6119,(0),null);
return malli.impl.regex.repeat_unparser.call(null,min,max,child);
}),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1)], null),(function (p__6122,p__6123){
var map__6124 = p__6122;
var map__6124__$1 = cljs.core.__destructure_map.call(null,map__6124);
var min = cljs.core.get.call(null,map__6124__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.call(null,map__6124__$1,new cljs.core.Keyword(null,"max","max",61366548),Infinity);
var vec__6125 = p__6123;
var child = cljs.core.nth.call(null,vec__6125,(0),null);
return malli.impl.regex.repeat_transformer.call(null,min,max,child);
}),(function (p__6128,p__6129){
var map__6130 = p__6128;
var map__6130__$1 = cljs.core.__destructure_map.call(null,map__6130);
var min = cljs.core.get.call(null,map__6130__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.call(null,map__6130__$1,new cljs.core.Keyword(null,"max","max",61366548),Infinity);
var vec__6131 = p__6129;
var child = cljs.core.nth.call(null,vec__6131,(0),null);
return malli.impl.regex.repeat_validator.call(null,min,max,child);
}),(function (props,p__6134){
var vec__6135 = p__6134;
var child = cljs.core.nth.call(null,vec__6135,(0),null);
return malli.core._re_min_max.call(null,cljs.core._STAR_,props,child);
}),true])),new cljs.core.Keyword(null,"cat","cat",-1457810207),malli.core._sequence_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_explainer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_parser,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_unparser,children);
}),new cljs.core.Keyword(null,"cat","cat",-1457810207),cljs.core.PersistentArrayMap.EMPTY,(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_transformer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_validator,children);
}),(function (_,children){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,malli.core._re_min_max,cljs.core._PLUS_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(0)], null),children);
}),true])),new cljs.core.Keyword(null,"alt","alt",-3214426),malli.core._sequence_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_explainer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_parser,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_unparser,children);
}),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_transformer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_validator,children);
}),(function (_,children){
return cljs.core.reduce.call(null,malli.core._re_alt_min_max,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(0)], null),children);
}),true])),new cljs.core.Keyword(null,"catn","catn",-48807277),malli.core._sequence_entry_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_explainer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.catn_parser,malli.core.tags,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.catn_unparser,malli.core.tags_QMARK_,children);
}),new cljs.core.Keyword(null,"catn","catn",-48807277),cljs.core.PersistentArrayMap.EMPTY,(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_transformer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.cat_validator,children);
}),(function (_,children){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,malli.core._re_min_max,cljs.core._PLUS_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(0)], null),malli.core._vmap.call(null,cljs.core.last,children));
}),false])),new cljs.core.Keyword(null,"altn","altn",1717854417),malli.core._sequence_entry_schema.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"re-explainer","re-explainer",-1266871200),new cljs.core.Keyword(null,"re-parser","re-parser",-1229625564),new cljs.core.Keyword(null,"re-unparser","re-unparser",1432943079),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"child-bounds","child-bounds",1368514738),new cljs.core.Keyword(null,"re-transformer","re-transformer",-1516368461),new cljs.core.Keyword(null,"re-validator","re-validator",-180375208),new cljs.core.Keyword(null,"re-min-max","re-min-max",1020871707),new cljs.core.Keyword(null,"keep","keep",-2133338530)],[(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_explainer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.altn_parser,malli.core.tag,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.altn_unparser,malli.core.tag_QMARK_,children);
}),new cljs.core.Keyword(null,"altn","altn",1717854417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_transformer,children);
}),(function (_,children){
return cljs.core.apply.call(null,malli.impl.regex.alt_validator,children);
}),(function (_,children){
return cljs.core.reduce.call(null,malli.core._re_alt_min_max,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(0)], null),malli.core._vmap.call(null,cljs.core.last,children));
}),false]))], null);
});
malli.core.base_schemas = (function malli$core$base_schemas(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"orn","orn",738436484),new cljs.core.Keyword(null,"seqable","seqable",-1305253818),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),new cljs.core.Keyword(null,"every","every",-2060295878),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"andn","andn",-872949990),new cljs.core.Keyword(null,"map","map",1371690461)],[malli.core._enum_schema.call(null),malli.core._schema_schema.call(null,null),malli.core.___GT__schema.call(null,null),malli.core._fn_schema.call(null),malli.core._orn_schema.call(null),malli.core._collection_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seqable","seqable",-1305253818),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.seqable_QMARK_], null)),malli.core._ref_schema.call(null),malli.core._maybe_schema.call(null),malli.core._collection_schema.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequential_QMARK_], null)),malli.core._or_schema.call(null),malli.core._re_schema.call(null,false),malli.core._not_schema.call(null),malli.core._tuple_schema.call(null),malli.core._collection_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"empty","empty",767870958),cljs.core.PersistentVector.EMPTY], null)),malli.core._function_schema.call(null,null),malli.core.__EQ__GT__schema.call(null),malli.core._map_of_schema.call(null),malli.core._multi_schema.call(null),malli.core._and_schema.call(null),malli.core._schema_schema.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw","raw",1604651272),true], null)),malli.core._collection_schema.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"every","every",-2060295878),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.seqable_QMARK_,new cljs.core.Keyword(null,"bounded","bounded",-1973595643),true], null)),malli.core._collection_schema.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"empty","empty",767870958),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),(function (_,x){
return x;
})], null)),malli.core._andn_schema.call(null),malli.core._map_schema.call(null)]);
});
malli.core.default_schemas = (function malli$core$default_schemas(){
return cljs.core.merge.call(null,malli.core.predicate_schemas.call(null),malli.core.class_schemas.call(null),malli.core.comparator_schemas.call(null),malli.core.type_schemas.call(null),malli.core.sequence_schemas.call(null),malli.core.base_schemas.call(null));
});
malli.core.default_registry = (function (){var strict = (malli.registry.mode === "strict");
var custom = (malli.registry.type === "custom");
var registry = ((custom)?malli.registry.fast_registry.call(null,cljs.core.PersistentArrayMap.EMPTY):malli.registry.composite_registry.call(null,malli.registry.fast_registry.call(null,malli.core.default_schemas.call(null)),malli.registry.var_registry.call(null)));
if(strict){
} else {
malli.registry.set_default_registry_BANG_.call(null,registry);
}

return malli.registry.registry.call(null,((strict)?registry:malli.registry.custom_default_registry.call(null)));
})();
if((typeof malli !== 'undefined') && (typeof malli.core !== 'undefined') && (typeof malli.core._function_schemas_STAR_ !== 'undefined')){
} else {
malli.core._function_schemas_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
malli.core.function_schemas = (function malli$core$function_schemas(var_args){
var G__6139 = arguments.length;
switch (G__6139) {
case 0:
return malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.core.function_schemas.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428));
}));

(malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.core.deref.call(null,malli.core._function_schemas_STAR_).call(null,key);
}));

(malli.core.function_schemas.cljs$lang$maxFixedArity = 1);

malli.core._deregister_function_schemas_BANG_ = (function malli$core$_deregister_function_schemas_BANG_(key){
return cljs.core.swap_BANG_.call(null,malli.core._function_schemas_STAR_,cljs.core.assoc,key,cljs.core.PersistentArrayMap.EMPTY);
});
malli.core._deregister_metadata_function_schemas_BANG_ = (function malli$core$_deregister_metadata_function_schemas_BANG_(key){
return cljs.core.swap_BANG_.call(null,malli.core._function_schemas_STAR_,cljs.core.update,key,(function (fn_schemas_map){
return cljs.core.reduce_kv.call(null,(function (acc,ns_sym,fn_map){
return cljs.core.assoc.call(null,acc,ns_sym,cljs.core.reduce_kv.call(null,(function (acc2,fn_sym,fn_map__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163).cljs$core$IFn$_invoke$arity$1(fn_map__$1))){
return acc2;
} else {
return cljs.core.assoc.call(null,acc2,fn_sym,fn_map__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_map));
}),cljs.core.PersistentArrayMap.EMPTY,fn_schemas_map);
}));
});
malli.core.function_schema = (function malli$core$function_schema(var_args){
var G__6142 = arguments.length;
switch (G__6142) {
case 1:
return malli.core.function_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core.function_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core.function_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.core.function_schema.call(null,_QMARK_schema,null);
}));

(malli.core.function_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var s = malli.core.schema.call(null,_QMARK_schema,options);
if(cljs.core.truth_(malli.core._function_schema_QMARK_.call(null,s))){
return s;
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","invalid-=>schema","malli.core/invalid-=>schema",46765066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.call(null,s),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));
}
}));

(malli.core.function_schema.cljs$lang$maxFixedArity = 2);

malli.core._register_function_schema_BANG_ = (function malli$core$_register_function_schema_BANG_(var_args){
var G__6145 = arguments.length;
switch (G__6145) {
case 4:
return malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (ns,name,_QMARK_schema,data){
return malli.core._register_function_schema_BANG_.call(null,ns,name,_QMARK_schema,data,new cljs.core.Keyword(null,"clj","clj",-660495428),malli.core.function_schema);
}));

(malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (ns,name,_QMARK_schema,data,key,f){
try{return cljs.core.swap_BANG_.call(null,malli.core._function_schemas_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ns,name], null),cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),f.call(null,_QMARK_schema),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"name","name",1843675177),name], null)));
}catch (e6146){var ex = e6146;
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","register-function-schema","malli.core/register-function-schema",-1224381998),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"schema","schema",-1582001791),_QMARK_schema,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"exception","exception",-335277064),ex], null));
}}));

(malli.core._register_function_schema_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Takes an instrumentation properties map and a function and returns a wrapped function,
 * which will validate function arguments and return values based on the function schema
 * definition. The following properties are used:
 * 
 * | key       | description |
 * | ----------|-------------|
 * | `:schema` | function schema
 * | `:scope`  | optional set of scope definitions, defaults to `#{:input :output :guard}`
 * | `:report` | optional side-effecting function of `key data -> any` to report problems, defaults to `m/-fail!`
 * | `:gen`    | optional function of `schema -> schema -> value` to be invoked on the args to get the return value
 */
malli.core._instrument = (function malli$core$_instrument(var_args){
var G__6151 = arguments.length;
switch (G__6151) {
case 1:
return malli.core._instrument.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.core._instrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.core._instrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.core._instrument.cljs$core$IFn$_invoke$arity$1 = (function (props){
return malli.core._instrument.call(null,props,null,null);
}));

(malli.core._instrument.cljs$core$IFn$_invoke$arity$2 = (function (props,f){
return malli.core._instrument.call(null,props,f,null);
}));

(malli.core._instrument.cljs$core$IFn$_invoke$arity$3 = (function (props,f,options){
var props__$1 = cljs.core.update.call(null,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"scope","scope",-439358418),(function (p1__6148_SHARP_){
var or__5025__auto__ = p1__6148_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"input","input",556931961),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null);
}
})),new cljs.core.Keyword(null,"report","report",1394055010),(function (p1__6149_SHARP_){
var or__5025__auto__ = p1__6149_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._fail_BANG_;
}
}));
var s = malli.core.schema.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(props__$1),options);
var or__5025__auto__ = malli.core._instrument_f.call(null,s,props__$1,f,options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core._fail_BANG_.call(null,new cljs.core.Keyword("malli.core","instrument-requires-function-schema","malli.core/instrument-requires-function-schema",676671761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));
}
}));

(malli.core._instrument.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=core.js.map
