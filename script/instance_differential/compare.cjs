// Compare mutate.clj's verdicts with concerto-core's Serializer.fromJSON.
// See mutate.clj for usage. Each template's models are loaded once.
const fs = require('fs'), path = require('path');
const core = require(path.join(process.argv[2], 'node_modules/@accordproject/concerto-core'));
const templates = process.argv[3];
const cases = JSON.parse(fs.readFileSync(process.argv[4], 'utf8'));
const cache = {};
function serializerFor(t) {
  if (cache[t]) return cache[t];
  const dir = path.join(templates, t, 'model');
  const mm = new core.ModelManager({ strict: true });
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.cto')).sort();
  for (const f of files) mm.addCTOModel(fs.readFileSync(path.join(dir, f), 'utf8'), f, true);
  mm.validateModelFiles();
  return (cache[t] = new core.Serializer(new core.Factory(mm), mm));
}
let agree = 0; const dis = [];
for (const c of cases) {
  let ok = true, msg = '';
  try { serializerFor(c.template).fromJSON(JSON.parse(JSON.stringify(c.instance))); }
  catch (e) { ok = false; msg = String(e.message).split('\n')[0].slice(0, 160); }
  if (ok === c.ours) agree++; else dis.push({ template: c.template, label: c.label, ours: c.ours, core: ok, msg, instance: c.instance });
}
console.log('agree', agree, 'of', cases.length, '; disagree', dis.length);
const by = {}; for (const d of dis) { const k = 'ours=' + d.ours + ' core=' + d.core + ' ' + d.label.split(' ')[0]; by[k] = (by[k] || 0) + 1; }
console.log(by);
fs.writeFileSync(process.argv[4].replace(/\.json$/, '.disagree.json'), JSON.stringify(dis, null, 1));
for (const d of dis.slice(0, 40)) console.log(JSON.stringify({ t: d.template, label: d.label, ours: d.ours, core: d.core, msg: d.msg }));
