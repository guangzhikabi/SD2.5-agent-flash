// 仅安装/更新阶段使用。成稿核对不运行此程序；不注册bundle、不修改DSH配置或默认助手。
import {readFileSync,writeFileSync,readdirSync,lstatSync,existsSync,mkdirSync,cpSync,renameSync,rmSync} from 'node:fs';
import {resolve,join,dirname,isAbsolute,parse,sep} from 'node:path';
import {homedir} from 'node:os';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=dirname(fileURLToPath(import.meta.url));
const args=process.argv.slice(2);
const allowed=new Set(['--home','--apply','--update']);
for(let i=0;i<args.length;i++){if(!allowed.has(args[i]))throw Error('未知参数：'+args[i]);if(args[i]==='--home')i++;}
const hi=args.indexOf('--home');
if(hi>=0&&(!args[hi+1]||args[hi+1].startsWith('--')))throw Error('--home 后需要DSH数据目录绝对路径');
const homeInput=hi>=0?args[hi+1]:(process.env.DSH_HOME||join(homedir(),'.dsh'));
if(!isAbsolute(homeInput))throw Error('DSH数据目录必须是绝对路径');
const home=resolve(homeInput), target=join(home,'sd25-v617flash');
if(home===parse(home).root)throw Error('拒绝将磁盘根目录作为DSH数据目录');
if(home.includes('\n')||home.includes('\r')||home.includes('`')||home.includes("'"))throw Error('目录含无法安全写入预设的特殊字符，请改用不含单引号、反引号、换行的路径');
const hash=b=>createHash('sha256').update(b).digest('hex');
function files(dir,base=dir){let out=[];for(const e of readdirSync(dir)){const p=join(dir,e),st=lstatSync(p);if(st.isSymbolicLink())throw Error('不接受链接：'+p);if(st.isDirectory())out.push(...files(p,base));else if(st.isFile())out.push(p.slice(base.length+1).split(sep).join('/'));else throw Error('不接受特殊文件：'+p);}return out.sort();}
const manifest=JSON.parse(readFileSync(join(root,'文件校验.json'),'utf8'));
for(const e of manifest.files){if(!e.path||e.path.startsWith('/')||e.path.includes('\\')||e.path.split('/').some(x=>x==='..'||x==='.')||e.path.includes(':'))throw Error('清单路径不安全');const p=resolve(root,e.path);if(!p.startsWith(root+sep))throw Error('清单越界');const b=readFileSync(p);if(hash(b)!==e.sha256||b.length!==e.bytes)throw Error('文件校验不符：'+e.path);}
const payload=join(root,'payload','sd25-v617flash');
const names=files(payload);
const listed=manifest.files.filter(e=>e.path.startsWith('payload/sd25-v617flash/')).map(e=>e.path.slice('payload/sd25-v617flash/'.length)).sort();
if(JSON.stringify(names)!==JSON.stringify(listed))throw Error('payload实际清单与校验清单不一致');
const prefRel='skills/sd25-v617flash-prompt/references/我的偏好.md';
let preference=readFileSync(join(root,'templates','我的偏好.默认模板.md')), inherited='全默认模板';
const existed=existsSync(target);
if(existed){
 if(lstatSync(target).isSymbolicLink())throw Error('目标不能为链接');
 const pkg=JSON.parse(readFileSync(join(target,'bundle','package.json'),'utf8'));
 if(pkg.name!=='@local/dsh-sd25-v617flash-preset')throw Error('目标不是本助手安装目录，拒绝覆盖');
 files(target);
 if(existsSync(join(target,prefRel))){preference=readFileSync(join(target,prefRel));inherited=join(target,prefRel);}
 if(!args.includes('--update'))throw Error('目标已存在；确认更新后添加 --update。不会自动重装。');
}else if(args.includes('--update')){
 const version=n=>{const m=/^sd25-v(\d)(\d{2})(\d*)flash$/.exec(n);return m?[+m[1],+m[2],+(m[3]||0)]:null;};
 const cmp=(a,b)=>{for(let i=0;i<3;i++){if(a[i]!==b[i])return a[i]-b[i];}return 0;};
 const candidates=existsSync(home)?readdirSync(home).filter(n=>version(n)&&cmp(version(n),[6,17,0])<0).sort((a,b)=>cmp(version(b),version(a))):[];
 for(const n of candidates){const base=join(home,n);if(lstatSync(base).isSymbolicLink())continue;const old=join(base,'skills',n+'-prompt','references','我的偏好.md');if(existsSync(old)&&!lstatSync(old).isSymbolicLink()){preference=readFileSync(old);inherited=old;break;}}
}
const patchRel='bundle/cordis.patch.yml';
const assetRoot=target.split(sep).join('/');
let patch=readFileSync(join(payload,patchRel),'utf8').replaceAll('__SD25_ASSET_ROOT__',assetRoot);
if(patch.includes('__SD25_ASSET_ROOT__')||/selectedDefault|agent-preset-registry|settings\.update/.test(patch))throw Error('预设含不允许的默认助手设置或未替换路径');
const result={mode:existed?'update':args.includes('--update')?'migrate-flash':'install',target,preferenceSource:inherited,preferenceSHA256:hash(preference),defaultAssistant:'unchanged',registered:false};
if(!args.includes('--apply')){console.log(JSON.stringify({...result,dryRun:true,message:'校验通过，尚未写入。添加 --apply 放置资产；随后需由DSH plugin_manager注册。'},null,2));process.exit(0);}
mkdirSync(home,{recursive:true});
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const temp=join(home,'.sd25-v617flash-prepare-'+stamp), backup=join(home,'_backups','sd25-v617flash',stamp);
if(existsSync(temp)||existsSync(backup))throw Error('备份或临时目录冲突');
let oldMoved=false,newPlaced=false;
try{
 if(existed)cpSync(target,temp,{recursive:true,errorOnExist:true,force:false});else mkdirSync(temp);
 cpSync(payload,temp,{recursive:true,force:true});
 mkdirSync(dirname(join(temp,prefRel)),{recursive:true});
 writeFileSync(join(temp,prefRel),preference);
 writeFileSync(join(temp,patchRel),patch);
 for(const rel of names){if(rel===patchRel)continue;if(hash(readFileSync(join(temp,rel)))!==hash(readFileSync(join(payload,rel))))throw Error('放置校验失败：'+rel);}
 if(hash(readFileSync(join(temp,prefRel)))!==hash(preference))throw Error('个人偏好未保持原字节');
 if(existed){mkdirSync(dirname(backup),{recursive:true});renameSync(target,backup);oldMoved=true;}
 renameSync(temp,target);newPlaced=true;
 console.log(JSON.stringify({...result,backup:existed?backup:null,dryRun:false,next:{tool:'plugin_manager',arguments:{action:'install_bundle',target:join(target,'bundle')}}},null,2));
 console.log('仅资产已准备。必须继续在DSH中注册并检查application；未注册不算安装完成。不自动切换默认助手，不修改安全授权。');
}catch(e){
 if(newPlaced)rmSync(target,{recursive:true,force:true});
 if(oldMoved)renameSync(backup,target);
 if(existsSync(temp))rmSync(temp,{recursive:true,force:true});
 throw e;
}
