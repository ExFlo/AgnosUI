import{n as q,s as it,Y as ct,J as lt,M as ft,E as ut,A as dt}from"./scheduler.-4Rzn4Bj.js";new URL("sveltekit-internal://");function ht(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function pt(e){return e.split("%25").map(decodeURI).join("%25")}function gt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ue({href:e}){return e.split("#")[0]}const _t=["href","pathname","search","toString","toJSON"];function mt(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,s){if(s==="get"||s==="getAll"||s==="has")return o=>(n(o),a[s](o));t();const i=Reflect.get(a,s);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of _t)Object.defineProperty(r,a,{get(){return t(),e[a]},enumerable:!0,configurable:!0});return r}const yt="/__data.json",wt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+yt}function bt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Et(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const De=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&M.delete(me(e)),De(e,t));const M=new Map;function kt(e,t){const n=me(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&M.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Et(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function St(e,t,n){if(M.size>0){const r=me(e,n),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(t,n)}function me(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${bt(...a)}"]`}return r}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Lt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=At.exec(c),[,g,u,f,h]=d;return t.push({name:f,matcher:h,optional:!!g,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:t}}function It(e){return!/^\([^)]+\)$/.test(e)}function Lt(e){return e.slice(1).split("/").filter(It)}function Pt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],g=a[o+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:g,params:u}=Rt(o),f={id:o,exec:h=>{const p=g.exec(h);if(p)return Pt(p,u,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Ce(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Pe(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=[];function Nt(e,t){return{subscribe:ae(e,t).subscribe}}function ae(e,t=q){let n;const r=new Set;function a(o){if(it(e,o)&&(e=o,n)){const c=!U.length;for(const l of r)l[1](),U.push(l,e);if(c){for(let l=0;l<U.length;l+=2)U[l][0](U[l+1]);U.length=0}}}function s(o){a(o(e))}function i(o,c=q){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||q),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function on(e,t,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return Nt(n,(i,o)=>{let c=!1;const l=[];let d=0,g=q;const u=()=>{if(d)return;g();const h=t(r?l[0]:l,i,o);s?i(h):g=ft(h)?h:q},f=a.map((h,p)=>ct(h,k=>{l[p]=k,d&=~(1<<p),c&&u()},()=>{d|=1<<p}));return c=!0,u(),function(){lt(f),g(),c=!1}})}const I=globalThis.__sveltekit_uhwkgg?.base??"",Tt=globalThis.__sveltekit_uhwkgg?.assets??I,Ut="e88f06b1ef27f8d8e8c4e71d7df3c06c3392c8b8",Ve="sveltekit:snapshot",Fe="sveltekit:scroll",qe="sveltekit:states",Ot="sveltekit:pageurl",j="sveltekit:history",B="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Me(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ye(){return{x:pageXOffset,y:pageYOffset}}function O(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const xe={...W,"":W.hover};function Ge(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Be(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ge(e)}}function pe(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||oe(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),s=n?.origin===Y&&e.hasAttribute("download");return{url:n,external:a,target:r,download:s}}function X(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=O(o,"preload-code")),a===null&&(a=O(o,"preload-data")),t===null&&(t=O(o,"keepfocus")),n===null&&(n=O(o,"noscroll")),s===null&&(s=O(o,"reload")),i===null&&(i=O(o,"replacestate")),o=Ge(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:xe[r??"off"],preload_data:xe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ne(e){const t=ae(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}function jt(){const{set:e,subscribe:t}=ae(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ut;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function oe(e,t){return e.origin!==Y||!e.pathname.startsWith(t)}const $t=-1,Dt=-2,Ct=-3,Vt=-4,Ft=-5,qt=-6;function Mt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===$t)return;if(s===Ct)return NaN;if(s===Vt)return 1/0;if(s===Ft)return-1/0;if(s===qt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const g=new Map;r[s]=g;for(let f=1;f<o.length;f+=2)g.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let f=1;f<o.length;f+=2)u[o[f]]=a(o[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Dt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const He=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...He];const Gt=new Set([...He]);[...Gt];function Bt(e){return e.filter(t=>t!=null)}class se{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(t,n){this.status=t,this.location=n}}class we extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Ht="x-sveltekit-invalidated",Kt="x-sveltekit-trailing-slash";function Z(e){return e instanceof se||e instanceof we?e.status:500}function Yt(e){return e instanceof we?e.text:"Internal Error"}const T=Ce(Fe)??{},H=Ce(Ve)??{},x={url:Ne({}),page:Ne({}),navigating:ae(null),updated:jt()};function ve(e){T[e]=ye()}function zt(e,t){let n=e+1;for(;T[n];)delete T[n],n+=1;for(n=t+1;H[n];)delete H[n],n+=1}function D(e){return location.href=e.href,new Promise(()=>{})}function Te(){}let ie,ge,Q,L,_e,C;const Ye=[],ee=[];let P=null;const be=[],ze=[];let N=[],m={branch:[],error:null,url:null},Ee=!1,te=!1,Ue=!0,K=!1,F=!1,Je=!1,ke=!1,Se,v,R,A,ne;const G=new Set;async function sn(e,t,n){document.URL!==location.href&&(location.href=location.href),C=e,ie=xt(e),L=document.documentElement,_e=t,ge=e.nodes[0],Q=e.nodes[1],ge(),Q(),v=history.state?.[j],R=history.state?.[B],v||(v=R=Date.now(),history.replaceState({...history.state,[j]:v,[B]:R},""));const r=T[v];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await nn(_e,n):en(location.href,{replaceState:!0}),tn()}function Jt(){Ye.length=0,ke=!1}function We(e){ee.some(t=>t?.snapshot)&&(H[e]=ee.map(t=>t?.snapshot?.capture()))}function Xe(e){H[e]?.forEach((t,n)=>{ee[n]?.snapshot?.restore(t)})}function Oe(){ve(v),Pe(Fe,T),We(R),Pe(Ve,H)}async function Ze(e,t,n,r){return J({type:"goto",url:Me(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(ke=!0)}})}async function Wt(e){if(e.id!==P?.id){const t={};G.add(t),P={id:e.id,token:t,promise:et({...e,preload:t}).then(n=>(G.delete(t),n.type==="loaded"&&n.state.error&&(P=null),n))}}return P.promise}async function he(e){const t=ie.find(n=>n.exec(tt(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function Qe(e,t,n){m=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),A=e.props.page,Se=new C.root({target:t,props:{...e.props,stores:x,components:ee},hydrate:n}),Xe(R);const a={from:null,to:{params:m.params,route:{id:m.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(s=>s(a)),te=!0}async function re({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(I&&(e.pathname===I||e.pathname===I+"/"))o="always";else for(const f of n)f?.slash!==void 0&&(o=f.slash);e.pathname=ht(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Bt(n).map(f=>f.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},d=!A,g=0;for(let f=0;f<Math.max(n.length,m.branch.length);f+=1){const h=n[f],p=m.branch[f];h?.data!==p?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${g}`]=l),g+=1)}return(!m.url||e.href!==m.url.href||m.error!==a||i!==void 0&&i!==A.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:A.data}),c}async function Ae({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:h}=new URL(f,n);c.dependencies.add(h)}};const g={route:new Proxy(a,{get:(u,f)=>(o&&(c.route=!0),u[f])}),params:new Proxy(r,{get:(u,f)=>(o&&c.params.add(f),u[f])}),data:s?.data??null,url:mt(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)}),async fetch(u,f){let h;u instanceof Request?(h=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):h=u;const p=new URL(h,n);return o&&d(p.href),p.origin===n.origin&&(h=p.href.slice(n.origin.length)),te?St(h,p.href,f):kt(h,f)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function je(e,t,n,r,a,s){if(ke)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==m.params[i])return!0;for(const i of a.dependencies)if(Ye.some(o=>o(new URL(i))))return!0;return!1}function Re(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Xt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function $e({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:A,constructors:[]}}}async function et({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(P?.id===e)return G.delete(P.token),P.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(_=>_?.().catch(()=>{})),l.forEach(_=>_?.[1]().catch(()=>{}));let d=null;const g=m.url?e!==m.url.pathname+m.url.search:!1,u=m.route?a.id!==m.route.id:!1,f=Xt(m.url,n);let h=!1;const p=l.map((_,y)=>{const S=m.branch[y],b=!!_?.[0]&&(S?.loader!==_[1]||je(h,u,g,f,S.server?.uses,r));return b&&(h=!0),b});if(p.some(Boolean)){try{d=await at(n,p)}catch(_){const y=await $(_,{url:n,params:r,route:{id:e}});return G.has(s)?$e({error:y,url:n,params:r,route:a}):ce({status:Z(_),error:y,url:n,route:a})}if(d.type==="redirect")return d}const k=d?.nodes;let E=!1;const V=l.map(async(_,y)=>{if(!_)return;const S=m.branch[y],b=k?.[y];if((!b||b.type==="skip")&&_[1]===S?.loader&&!je(E,u,g,f,S.universal?.uses,r))return S;if(E=!0,b?.type==="error")throw b;return Ae({loader:_[1],url:n,params:r,route:a,parent:async()=>{const le={};for(let fe=0;fe<y;fe+=1)Object.assign(le,(await V[fe])?.data);return le},server_data_node:Re(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?S?.server:void 0)})});for(const _ of V)_.catch(()=>{});const w=[];for(let _=0;_<l.length;_+=1)if(l[_])try{w.push(await V[_])}catch(y){if(y instanceof Ke)return{type:"redirect",location:y.location};if(G.has(s))return $e({error:await $(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=Z(y),b;if(k?.includes(y))S=y.status??S,b=y.error;else if(y instanceof se)b=y.body;else{if(await x.updated.check())return await D(n);b=await $(y,{params:r,url:n,route:{id:a.id}})}const z=await Zt(_,w,i);return z?await re({url:n,params:r,branch:w.slice(0,z.idx).concat(z.node),status:S,error:b,route:a}):await rt(n,{id:a.id},b,S)}else w.push(void 0);return await re({url:n,params:r,branch:w,status:200,error:null,route:a,form:t?void 0:null})}async function Zt(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:t,url:n,route:r}){const a={};let s=null;if(C.server_loads[0]===0)try{const l=await at(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==Y||n.pathname!==location.pathname||Ee)&&await D(n)}const o=await Ae({loader:ge,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Re(s)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return await re({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function Ie(e,t){if(!e||oe(e,I))return;let n;try{n=C.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=tt(n);for(const a of ie){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:t,route:a,params:gt(s),url:e}}}function tt(e){return pt(e.slice(I.length)||"/")}function nt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=st(m,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return K||be.forEach(o=>o(i)),a?null:s}async function J({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Te,block:d=Te}){const g=Ie(t,!1),u=nt({url:t,type:e,delta:n?.delta,intent:g});if(!u){d();return}const f=v,h=R;l(),K=!0,te&&x.navigating.set(u.navigation),ne=c;let p=g&&await et(g);if(!p){if(oe(t,I))return await D(t);p=await rt(t,{id:null},await $(new we(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=g?.url||t,ne!==c)return u.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(o>=20)p=await ce({status:500,error:await $(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ze(new URL(p.location,t).href,{},o+1,c),!1;else p.props.page.status>=400&&await x.updated.check()&&await D(t);if(Jt(),ve(f),We(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const w=s?0:1,_={[j]:v+=w,[B]:R+=w,[qe]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||zt(v,R)}if(P=null,p.props.page.state=i,te){m=p.state,p.props.page&&(p.props.page.url=t);const w=(await Promise.all(ze.map(_=>_(u.navigation)))).filter(_=>typeof _=="function");if(w.length>0){let _=function(){N=N.filter(y=>!w.includes(y))};w.push(_),N.push(...w)}Se.$set(p.props),Je=!0}else Qe(p,_e,!1);const{activeElement:k}=document;await ut();const E=n?n.scroll:a?ye():null;if(Ue){const w=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):w?w.scrollIntoView():scrollTo(0,0)}const V=document.activeElement!==k&&document.activeElement!==document.body;!r&&!V&&rn(),Ue=!0,p.props.page&&(A=p.props.page),K=!1,e==="popstate"&&Xe(R),u.fulfil(void 0),N.forEach(w=>w(u.navigation)),x.navigating.set(null)}async function rt(e,t,n,r){return e.origin===Y&&e.pathname===location.pathname&&!Ee?await ce({status:r,error:n,url:e,route:t}):await D(e)}function Qt(){let e;L.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){r(s.composedPath()[0],1)}L.addEventListener("mousedown",t),L.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(he(i.target.href),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=Be(s,L);if(!o)return;const{url:c,external:l,download:d}=pe(o,I);if(l||d)return;const g=X(o);if(!g.reload)if(i<=g.preload_data){const u=Ie(c,!1);u&&Wt(u)}else i<=g.preload_code&&he(c.pathname)}function a(){n.disconnect();for(const s of L.querySelectorAll("a")){const{url:i,external:o,download:c}=pe(s,I);if(o||c)continue;const l=X(s);l.reload||(l.preload_code===W.viewport&&n.observe(s),l.preload_code===W.eager&&he(i.pathname))}}N.push(a),a()}function $(e,t){if(e instanceof se)return e.body;const n=Z(e),r=Yt(e);return C.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Le(e,t){dt(()=>(e.push(t),()=>{const n=e.indexOf(t);e.splice(n,1)}))}function cn(e){Le(N,e)}function ln(e){Le(be,e)}function fn(e){Le(ze,e)}function en(e,t={}){return e=Me(e),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):Ze(e,t,0)}function tn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Oe(),!K){const r=st(m,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};be.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),navigator.connection?.saveData||Qt(),L.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Be(t.composedPath()[0],L);if(!n)return;const{url:r,external:a,target:s,download:i}=pe(n,I);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=X(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(a||o.reload){nt({url:r,type:"link"})?K=!0:t.preventDefault();return}const[l,d]=r.href.split("#");if(d!==void 0&&l===ue(location)){const[,g]=m.url.href.split("#");if(g===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(d)?.scrollIntoView();return}if(F=!0,ve(v),e(r),!o.replace_state)return;F=!1}t.preventDefault(),J({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formMethod||n.method)!=="get")return;const s=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(oe(s,I))return;const i=t.target,o=X(i);if(o.reload)return;t.preventDefault(),t.stopPropagation();const c=new FormData(i),l=r?.getAttribute("name");l&&c.append(l,r?.getAttribute("value")??""),s.search=new URLSearchParams(c).toString(),J({type:"form",url:s,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[j]){const n=t.state[j];if(ne={},n===v)return;const r=T[n],a=t.state[qe]??{},s=new URL(t.state[Ot]??location.href),i=t.state[B],o=ue(location)===ue(m.url);if(i===R&&(Je||o)){e(s),T[v]=ye(),r&&scrollTo(r.x,r.y),a!==A.state&&(A={...A,state:a},Se.$set({page:A})),v=n;return}const l=n-v;await J({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{v=n,R=i},block:()=>{history.go(-l)},nav_token:ne})}else if(!F){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[j]:++v,[B]:R},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){m.url=t,x.page.set({...A,url:t}),x.page.notify()}}async function nn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Ee=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ie(c,!1)||{});let l;try{const d=r.map(async(f,h)=>{const p=i[h];return p?.uses&&(p.uses=ot(p.uses)),Ae({loader:C.nodes[f],url:c,params:a,route:s,parent:async()=>{const k={};for(let E=0;E<h;E+=1)Object.assign(k,(await d[E]).data);return k},server_data_node:Re(p)})}),g=await Promise.all(d),u=ie.find(({id:f})=>f===s.id);if(u){const f=u.layouts;for(let h=0;h<f.length;h++)f[h]||g.splice(h,0,void 0)}l=await re({url:c,params:a,branch:g,status:t,error:n,form:o,route:u??null})}catch(d){if(d instanceof Ke){await D(new URL(d.location,location.href));return}l=await ce({status:Z(d),error:await $(d,{url:c,params:a,route:s}),url:c,route:s})}l.props.page&&(l.props.page.state={}),Qe(l,e,!0)}async function at(e,t){const n=new URL(e);n.pathname=vt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Kt,"1"),n.searchParams.append(Ht,t.map(a=>a?"1":"0").join(""));const r=await De(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new se(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return Mt(d,{Promise:g=>new Promise((u,f)=>{s.set(g,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:g}=await i.read();if(d&&!l)break;for(l+=!g&&l?`
`:o.decode(g,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return a(f);if(f.type==="data")f.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=ot(h.uses),h.data=c(h.data))}),a(f);else if(f.type==="chunk"){const{id:h,data:p,error:k}=f,E=s.get(h);s.delete(h),k?E.reject(c(k)):E.fulfil(c(p))}}}})}function ot(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function rn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function st(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}export{cn as a,ln as b,sn as c,on as d,fn as o,x as s};
