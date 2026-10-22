// Compare mutate.clj's verdicts with concerto-core's MetaModel.validateMetaModel.
// See mutate.clj for usage. Disagreements whose core message is the identifier
// regex are reported separately: model-check reports a bad name itself, with
// Concerto's IllegalModelException, before the metamodel is consulted.
const fs=require('fs'); const path=require('path');
const core=require(path.join(process.argv[2],'node_modules/@accordproject/concerto-core'));
const muts=JSON.parse(fs.readFileSync(process.argv[3],'utf8'));
const strip=(x)=>{ if(Array.isArray(x)) return x.map(strip); if(x&&typeof x==='object'){const o={}; for(const [k,v] of Object.entries(x)) if(k!=='location') o[k]=strip(v); return o;} return x; };
let agree=0; const dis=[];
for(const m of muts){
  let coreOk=true,name='',msg='';
  try{ core.MetaModel.validateMetaModel(strip(m.ast)); }catch(e){ coreOk=false; name=e.name||e.constructor.name; msg=String(e.message).split('\n')[0].slice(0,140); }
  if(coreOk===m.ours) agree++; else dis.push({id:m.id,label:m.label,ours:m.ours,core:coreOk,name,msg});
}
const known=dis.filter(d=>/failed to match/.test(d.msg)); const rest=dis.filter(d=>!/failed to match/.test(d.msg));
console.log('agree',agree,'of',muts.length,'; disagree',dis.length,'(',known.length,'are the identifier regex; ',rest.length,'other )'); dis.length=0; rest.forEach(r=>dis.push(r));
const byKind={}; for(const d of dis){ const k=d.label.split(' ')[0]+' ours='+d.ours+' core='+d.core; byKind[k]=(byKind[k]||0)+1; }
console.log(byKind);
for(const d of dis.slice(0,40)) console.log(JSON.stringify(d));
