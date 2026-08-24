// Compiled by ClojureScript 1.12.42 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('cons_demo');
goog.require('cljs.core');
goog.require('clojure.edn');
goog.require('com.trustblocks.concerto.malli');
goog.require('malli.core');
cons_demo._main = (function cons_demo$_main(){
var txt = require("fs").readFileSync("/tmp/out-aod/schemas/org.accordproject.acceptanceofdelivery@0.1.0.InspectDeliverable.edn","utf8");
var s = malli.core.schema.call(null,clojure.edn.read_string.call(null,txt),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),com.trustblocks.concerto.malli.registry_STAR_], null));
var req = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"$class","$class",1168854512),"org.accordproject.acceptanceofdelivery@0.1.0.InspectDeliverable",new cljs.core.Keyword(null,"$identifier","$identifier",948568846),"request-1",new cljs.core.Keyword(null,"$timestamp","$timestamp",1469748234),"2024-01-01T00:00:00Z",new cljs.core.Keyword(null,"deliverableReceivedAt","deliverableReceivedAt",-94294252),"2018-01-01T16:34:00Z",new cljs.core.Keyword(null,"inspectionPassed","inspectionPassed",228976014),true], null);
cljs.core.println.call(null,"  valid request      ",malli.core.validate.call(null,s,req));

cljs.core.println.call(null,"  bad boolean        ",malli.core.validate.call(null,s,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"inspectionPassed","inspectionPassed",228976014),"yes")));

cljs.core.println.call(null,"  bad datetime       ",malli.core.validate.call(null,s,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"deliverableReceivedAt","deliverableReceivedAt",-94294252),"hello")));

return cljs.core.println.call(null,"  undeclared key     ",malli.core.validate.call(null,s,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"extra","extra",1612569067),(1))));
});
cons_demo._main.call(null);

//# sourceMappingURL=cons_demo.js.map
