// JSON Schema differential, part 2: replay json_schema_cases.clj's cases through
// Ajv and compare with the Malli verdict.
//
//   (cd SOMEWHERE && npm i ajv@8 && node /path/to/script/sample_differential/compare_ajv.cjs OUT_DIR)
//
// Valid samples must pass the JSON Schema; for each mutant, Ajv and Malli must
// agree.  is not enforced (no ajv-formats), on purpose: the schema carries
// the DateTime pattern so it does not depend on the plugin.
const fs=require('fs');
// Ajv is resolved from where it is run, not from the repo, which does not install it.
const Ajv=require(require.resolve('ajv',{paths:[process.cwd(),process.argv[2]]}));
const dir=process.argv[2]; const cases=JSON.parse(fs.readFileSync(dir+'/cases.json','utf8'));
const ajv=new Ajv({strict:false,allErrors:false,logger:false}); const validators={};
const get=(id)=>validators[id]||(validators[id]=ajv.compile(JSON.parse(fs.readFileSync(dir+'/'+id+'.schema.json','utf8'))));
let agree=0, validOk=0, validTotal=0; const dis=[];
for(const c of cases){ const v=get(c.schema)(c.instance);
  if(c.kind==='valid'){validTotal++; if(v) validOk++; else dis.push({...c,ajv:v});}
  else { if(v===c.ours) agree++; else dis.push({...c,ajv:v}); } }
const mut=cases.filter(c=>c.kind==='mutant').length;
console.log('valid samples accepted by the JSON Schema:',validOk+'/'+validTotal);
console.log('mutants where JSON Schema and Malli agree:',agree+'/'+mut);
const by={}; for(const d of dis){ if(d.kind==='mutant'){const k='malli='+d.ours+' ajv='+d.ajv; by[k]=(by[k]||0)+1;} }
console.log(by);
for(const d of dis.slice(0,6)) console.log(d.schema,d.kind,'ours=',d.ours,'ajv=',d.ajv,JSON.stringify(d.instance).slice(0,200));
