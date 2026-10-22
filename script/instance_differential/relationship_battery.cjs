// Relationship battery, part 1: put 3,795 strings -- every prefix, type name and
// suffix of a resource URI that tends to matter -- to concerto-core as the value of
// a relationship, and record what it says.
//
//   node script/instance_differential/relationship_battery.cjs CONCERTO_CORE_DIR OUT.json
//
// CONCERTO_CORE_DIR is a directory whose node_modules holds @accordproject/concerto-core.
// relationship_compare.clj then asks this library's schema the same.
const core=require(require('path').join(process.argv[2],'node_modules/@accordproject/concerto-core'));
const fs=require('fs');
const cto=`namespace t@1.0.0
asset K identified by kid { o String kid }
asset Sub extends K { }
asset Other identified by oid { o String oid }
abstract asset Base identified by bid { o String bid }
asset Impl extends Base { }
participant Pt identified by pid { o String pid }
concept H { --> K k optional --> Base b optional --> K[] ks optional }
`;
const mm=new core.ModelManager({strict:true}); mm.addCTOModel(cto,'t.cto',true);
const ser=new core.Serializer(new core.Factory(mm),mm);
const ok=(o)=>{try{ser.fromJSON(JSON.parse(JSON.stringify(o)));return true}catch(e){return false}};
const pre=['','resource:','Resource:','RESOURCE:',' resource:','\tresource:','resource: ','urn:','http://','//','x:','resource://h/','resource:///','1x:','a.b-c+d:'];
const ty=['','a','t@1.0.0.K','t@1.0.0.Sub','t@1.0.0.Other','t@1.0.0.Base','t@1.0.0.Impl','t@1.0.0.','t.K','K','t@1.0.0.K '];
const suf=['','#x','#','#x#y','#%20','#%','#%FF','#%C3%A9','#%C3','#a?b','?q','?q#x','?','@u','u:p@',':80',':x','#x y','#\n','#é','#x/y','/x','x/'];
const out=[];
for(const p of pre) for(const t of ty) for(const s of suf){ const v=p+t+s; out.push([v, ok({$class:'t@1.0.0.H',k:v}), ok({$class:'t@1.0.0.H',b:v})]); }
fs.writeFileSync(process.argv[3],JSON.stringify(out));
console.log(out.length,'strings;',out.filter(x=>x[1]).length,'ok for K;',out.filter(x=>x[2]).length,'ok for Base');
