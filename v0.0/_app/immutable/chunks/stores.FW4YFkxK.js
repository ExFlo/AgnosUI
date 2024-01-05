import{p as I}from"./stores.WLXsWxtV.js";var F;const _=typeof Symbol=="function"&&Symbol.observable||"@@observable",C=Symbol(),b=()=>{},U=()=>{};U.unsubscribe=U;const $=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):b},P=t=>({next:typeof t=="function"?t.bind(null):$(t,"next"),pause:$(t,"pause"),resume:$(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),W=function(){return this},V=t=>{if(!t)return U;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},R=new WeakSet,J=t=>{let e=t.subscribe;return R.has(e)||(e=(...s)=>V(t.subscribe(...s)),R.add(e)),e},k=t=>{const e="subscribe"in t?t:t[_]();return J(e)},Y=t=>{let e;return t(s=>e=s)(),e};function p(t,e){const s=k(t),n=Object.assign(()=>m(n),e,{subscribe:s,[_]:W});return n}const O=function(t){this.set(t(X(()=>m(this))))};function Z(t,e){return p(t,typeof e=="function"?{set:e,update:O}:{...e,set:e?.set??b,update:e?.update??(e?.set?O:b)})}const h=Symbol(),M=Symbol();let q=!1;const w=new Set,ee=1e3,A=t=>{if(t>ee)throw new Error("reached maximum number of store changes in one shot")},x=t=>{const e=!q;e&&(q=!0);try{return t()}finally{if(e)try{const s=new Map;for(const n of w){const r=s.get(n)??0;A(r),s.set(n,r+1),w.delete(n),n[M]()}}finally{w.clear(),q=!1}}},T=t=>Y(k(t));let y=T;const m=t=>y(t),j=t=>({[t]:!0,[t-1]:!1,0:!1}),g=Symbol(),te=(t,e)=>Object.is(t,e)&&(!t||typeof t!="object")&&typeof t!="function";class L{#s;#n;#e;#t;#r;#o;#c;constructor(e){this.#s=new Set,this.#n=null,this.#e=!1,this.#t=1,this.#o=j(1),this.#c=new WeakMap,this[F]=!1,this.#r=e}#u(){this.#n=V(this.onUse())}#i(){const e=this.#n;e&&(this.#n=null,e())}[(F=g,M)](){const e=this.#t;for(const s of[...this.#s]){if(this.#e||this.#t!==e)return;s._valueIndex!==0&&this.#a(s)}}[h](){}#a(e){const s=this.#o,n=this.#t,r=this.#r;let i=s[e._valueIndex];i==null&&(i=!!this.equal(e._value,r),s[e._valueIndex]=i),e._valueIndex=n,i?!this.#e&&e._paused&&(e._paused=!1,e.resume()):(e._value=r,e._paused=!1,e.next(r))}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!te(e,s)}pauseSubscribers(){if(!this.#e){this.#e=!0,w.delete(this);for(const e of[...this.#s])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){this.#e&&(this.#e=!1,x(()=>{w.add(this)}))}set(e){const s=this[g];if(s||!this.equal(this.#r,e)){const n=this.#t+1;this.#t=n,this.#r=e,this.#o=j(n),s&&delete this.#o[n-1],this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(this.#r))}onUse(){}subscribe(e){const s=P(e),n=e?.[C];if(n){const i=this.#c.get(n);i&&(s._value=i._value,s._valueIndex=i._valueIndex)}this.#s.add(s),x(()=>{this.#s.size==1?this.#u():this[h]()}),this.#a(s);const r=()=>{const i=this.#s.delete(s);s.next=b,s.pause=b,s.resume=b,i&&(this.#c.set(r,s),this.#s.size===0&&this.#i())};return r[h]=()=>{this[h](),this.#a(s)},r.unsubscribe=r,r}[_](){return this}}function se(t){const e=s=>(s?.[C]||P(s).next(t),U);return R.add(e),Object.assign(()=>t,{subscribe:e,[_]:W})}class Q extends L{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}}const E=(t,e)=>{const{onUse:s,equal:n,notEqual:r}=e;return s&&(t.onUse=function(){const i=o=>this.set(o);return i.set=i,i.update=o=>this.update(o),s(i)}),n&&(t.equal=function(i,o){return n(i,o)}),r&&(t.notEqual=function(i,o){return r(i,o)}),t};function G(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?p(E(new Q(t),e)):se(t)}function K(t,e={}){typeof e=="function"&&(e={onUse:e});const s=E(new Q(t),e);return p(s,{set:s.set.bind(s),update:s.update.bind(s)})}function ne(t){return t.length<=1}const re=t=>t();class D extends L{#s;#n;#e=0;constructor(e,s){super(s);const n=Array.isArray(e);this.#s=n,this.#n=(n?[...e]:[e]).map(k)}resumeSubscribers(){this.#e||super.resumeSubscribers()}onUse(){let e=!1,s=0;const n=this.#s,r=this.#n,i=new Array(r.length);let o=null;const u=()=>{const c=o;c&&(o=null,c())},a=(c=!1)=>{c&&(e=!0),e&&!this.#e&&(s&&(s=0,u(),o=V(this.derive(n?i:i[0]))),this.resumeSubscribers())},v=r.map((c,f)=>{const S=H=>{i[f]=H,s|=1<<f,this.#e&=~(1<<f),a()};return S.next=S,S.pause=()=>{this.#e|=1<<f,this.pauseSubscribers()},S.resume=()=>{this.#e&=~(1<<f),a()},c(S)}),l=(c,f)=>{this.#e&1<<f&&c[h]?.()};return this[h]=()=>{let c=0;for(;this.#e&&(A(++c),e=!1,v.forEach(l),!this.#e);)a(!0)},a(!0),this[h](),()=>{this[h]=b,u(),v.forEach(re)}}}function ie(t,e,s){typeof e=="function"&&(e={derive:e});const{derive:n,...r}=e,i=ne(n)?class extends D{constructor(o,u){super(o,u),this[g]=!0}derive(o){this.set(n(o)),this[g]=!1}}:class extends D{derive(o){const u=a=>this.set(a);return u.set=u,u.update=a=>this.update(a),n(o,u)}};return p(E(new i(t,s),{...r,onUse:void 0}))}const X=t=>{const e=y;try{return y=T,t()}finally{y=e}},oe=({unsubscribe:t})=>t(),ue=({resubscribe:t})=>t();class ce extends L{#s=!1;#n=!1;#e=0;#t=new Map;#r=e=>X(()=>this.#c(e));constructor(){super(void 0),this[g]=!0}#o(e){const s={versionIndex:this.#e,unsubscribe:b,resubscribe:b,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},n=r=>{s.value=r,s.valueIndex++,s.pending=!1,!this.#n&&!this.#i()&&x(()=>this.#u())};return n.next=n,n.pause=()=>{s.pending=!0,this.pauseSubscribers()},n.resume=()=>{s.pending=!1,!this.#n&&!this.#i()&&x(()=>this.#u())},s.resubscribe=()=>{s.unsubscribe=e(n),n[C]=s.unsubscribe},s.resubscribe(),s}#c(e){let s=this.#t.get(e);return s?(s.versionIndex=this.#e,s.unsubscribe[h]?.()):(s=this.#o(k(e)),this.#t.set(e,s)),s.usedValueIndex=s.valueIndex,s.value}#u(e=!1){this.#s=!0,this.#n=!0;try{if(this.#e>0&&(e&&this.#t.forEach(ue),!this.#a())){this.resumeSubscribers();return}this.#e++;const s=this.#e,n=y;let r;try{y=this.#r,r=this.compute()}finally{y=n}this.set(r),this[g]=!1;for(const[i,o]of this.#t)o.versionIndex!==s&&(this.#t.delete(i),o.unsubscribe())}finally{this.#n=!1,this.#s=!1}}#i(){for(const[,{pending:e}]of this.#t)if(e)return!0;return!1}#a(){for(const[,{valueIndex:e,usedValueIndex:s}]of this.#t)if(e!=s)return!0;return!1}resumeSubscribers(){this.#i()||super.resumeSubscribers()}[h](){if(this.#s)throw new Error("recursive computed");let e=0;for(;this.#i();){A(++e),this.#n=!0;try{for(const[,{pending:s,unsubscribe:n}]of this.#t)s&&n[h]?.()}finally{this.#n=!1}if(this.#i())break;this.#u()}}onUse(){return this.#u(!0),this[h](),()=>this.#t.forEach(oe)}}function d(t,e={}){const s=class extends ce{compute(){return t()}};return p(E(new s,{...e,onUse:void 0}))}const ae=()=>{},le=t=>t,N=Symbol();function fe(t){return function(e){x(()=>{for(const[s,n]of Object.entries(e??{}))t[`${s}$`]?.set(n)})}}function he(t,e=G(void 0),s={},n=K(void 0)){const{normalizeValue:r=le,equal:i=Object.is}=s,o=()=>t,u=(l,c=o)=>{const f=l===void 0?void 0:r(l);return f===N?(console.error("Not using invalid value",l),c()):f===void 0?c():f},a=d(()=>u(e()),{equal:i}),v=d(()=>u(n(),a),{equal:i});return Z(v,l=>{if(l!==void 0){const c=r(l);if(c===N){console.error("Not setting invalid value",l);return}l=c}n.set(l)})}const z=t=>!!(t&&typeof t=="function"&&"subscribe"in t),de=t=>z(t)?t:G(t),be=t=>z(t)?t:K(t),pe=(t,e)=>{const s={};if(e){const n=z(e);for(const r of t)s[r]=n?d(()=>e()[r]):de(e[r])}return s},me=(t,e,s)=>{const n={},r=Object.keys(t),i=pe(r,e?.config),o=e?.props;for(const u of r){const a=o?.[u];n[`${u}$`]=he(t[u],i[u],s?.[u],be(a))}return n},ve=(t,e,s)=>{const n=me(t,e,s);return[n,fe(n)]},_e=t=>{const e=[],s=[],n={};for(const r of Object.keys(t))if(r.endsWith("$")){const i=t[r];e.push(r.substring(0,r.length-1)),s.push(i),n[r]=p(i)}return{stores:n,state$:d(()=>{const r=s.map(m),i={};return e.forEach((o,u)=>{i[o]=r[u]}),i})}},Se={elements:[],options:void 0},ye=t=>{const[{elements$:e,options$:s},n]=ve(Se,t),r=ie([e,s],([i,o],u)=>{if(i.length){const a=new Map,v=new IntersectionObserver(l=>{for(const c of l){const{target:f,isIntersecting:S}=c;S?a.set(f,c):a.delete(f)}u(a)},o);for(const l of i)v.observe(l);return()=>{v.disconnect()}}return ae},new Map);return{elements$:p(e),visibleElements$:p(r),patch:n}},ge=d(()=>{const t=m(I);if(!t.route.id)throw new Error("Page error");return t.route.id.split("/").length-2}),B=d(()=>{const t=ge();return t?"../".repeat(t):"./"}),ke=d(()=>new URL(B(),window.location.href).href),we="https://amadeusitgroup.github.io/AgnosUI/latest/";d(()=>{const t=m(I).url.href,e=new URL(B(),t).href;return t.replace(e,we)});const Ee=d(()=>m(I).params.framework??"angular"),xe=/^\/\[framework\]\/components\/[^/]*\/([^/]*)/,$e=d(()=>xe.exec(m(I).route.id||"")?.[1]||"examples"),Ie=/^\/\[framework\]\//,qe=d(()=>(m(I).route.id||"").replace(Ie,"")),Re=ye();export{$e as a,G as b,d as c,ie as d,te as e,qe as f,p as g,x as h,Re as i,ve as j,_e as k,ae as n,ke as p,ge as r,Ee as s,K as w};
