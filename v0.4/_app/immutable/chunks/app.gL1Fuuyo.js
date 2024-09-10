import{a as N,t as W}from"./index.D-uqoLVu.js";import{J as z,x as F}from"./scheduler.sZeTUDDy.js";import{r as R,e as w,j as g,t as T,h as j,n as q,c as V,f as H,k as C,l as I}from"./stores.CHqcV6NS.js";function ye(e){return e?.length!==void 0?e:Array.from(e)}function we(e,t){e.d(1),t.delete(e.key)}function ge(e,t){N(e,1,1,()=>{t.delete(e.key)})}function Se(e,t,s,n,r,i,o,f,u,l,a,U){let b=e.length,m=i.length,v=b;const S={};for(;v--;)S[e[v].key]=v;const h=[],_=new Map,L=new Map,x=[];for(v=m;v--;){const c=U(r,i,v),d=s(c);let p=o.get(d);p?x.push(()=>p.p(c,t)):(p=l(d,c),p.c()),_.set(d,h[v]=p),d in S&&L.set(d,Math.abs(v-S[d]))}const D=new Set,E=new Set;function $(c){W(c,1),c.m(f,a),o.set(c.key,c),a=c.first,m--}for(;b&&m;){const c=h[m-1],d=e[b-1],p=c.key,y=d.key;c===d?(a=c.first,b--,m--):_.has(y)?!o.has(p)||D.has(p)?$(c):E.has(y)?b--:L.get(p)>L.get(y)?(E.add(p),$(c)):(D.add(y),b--):(u(d,o),b--)}for(;b--;){const c=e[b];_.has(c.key)||u(c,o)}for(;m;)$(h[m-1]);return z(x),h}function _e(e,t){const s={},n={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],f=t[i];if(f){for(const u in o)u in f||(n[u]=1);for(const u in f)r[u]||(s[u]=f[u],r[u]=1);e[i]=f}else for(const u in o)r[u]=1}for(const o in n)o in s||(s[o]=void 0);return s}function Le(e){return typeof e=="object"&&e!==null?e:{}}const $e=(e=document.body)=>{A(e)&&e.getBoundingClientRect()},Te=(e,t)=>{t&&t.length>0&&e.classList.add(...t)},je=(e,t)=>{t&&t.length>0&&e.classList.remove(...t)};function k(e,t,s,n){return e.addEventListener(t,s,n),function(){e.removeEventListener(t,s,n)}}const M=e=>e!=null&&e!==!1;function J(e,t){let s=new Set;return t.subscribe(n=>{const r=new Set(`${n??""}`.split(" "));r.delete("");const i=e.classList;for(const o of s)r.has(o)||i.remove(o);r.size>0&&i.add(...r),s=r})}function G(e,t,s){return s.subscribe(n=>{M(n)?e.setAttribute(t,""+(n===!0?t:n)):e.removeAttribute(t)})}function K(e,t,s){return t==="class"?J(e,s):G(e,t,s)}function Q(e,t,s){return s.subscribe(n=>{const r=e.style;r[t]=""+(M(n)?n:"")})}function X(e,t,s){const n=s.subscribe(r=>{e.classList.toggle(t,r)});return()=>{n(),e.classList.remove(t)}}const A=e=>{var t;const s=((t=e?.ownerDocument)==null?void 0:t.defaultView)??window;return e instanceof s.HTMLElement},P=e=>(t,s)=>{if(A(t))return e(t,s)},Y=(e,t)=>s=>{let n=!0,r;const i=t.subscribe(o=>{var f;n?(n=!1,r=e(s,o)):(f=r?.update)==null||f.call(r,o)});return{destroy(){var o;(o=r?.destroy)==null||o.call(r),i()}}},Z=R(void 0),Ae=e=>Y(e,Z),xe=(e,t=!0)=>()=>{const s=e.subscribe(q);return{destroy:async()=>{t&&await 0,s()}}},De=e=>(t,s)=>(e(s),{update:e}),B={equal:Object.is},ee=()=>{const e=w([],B);return g(e,{register:t=>{let s=!1;return e.update(n=>[...n,t]),()=>{s||(s=!0,e.update(n=>{const r=n.indexOf(t);if(r>-1){const i=[...n];return i.splice(r,1),i}return n}))}}})},te=()=>{const e=ee();return{elements$:g(e),directive:t=>({destroy:e.register(t)})}},Ee=()=>{const{directive:e,elements$:t}=te();return{directive:P(e),elements$:t}},se=()=>{const e=w(null,B);return{element$:g(e),directive:t=>{let s=!1;return e.update(n=>n?(console.error("The directive cannot be used on multiple elements.",n,t),n):(s=!0,t)),s?{destroy(){e.update(n=>t===n?null:n)}}:void 0}}},Ce=()=>{const{directive:e,element$:t}=se();return{directive:P(e),element$:t}},ke=(...e)=>(t,s)=>{const n=j(()=>e.map(r=>r(t,s)));return{update(r){j(()=>n.forEach(i=>{var o;return(o=i?.update)==null?void 0:o.call(i,r)}))},destroy(){j(()=>n.reverse().forEach(r=>{var i;return(i=r?.destroy)==null?void 0:i.call(r)}))}}},ne=e=>(t,s)=>{const n=[],r=w(s),{events:i,attributes:o,styles:f,classNames:u}=e(r);if(A(t))for(const[l,a]of Object.entries(i??{}))typeof a=="function"?n.push(k(t,l,a)):n.push(k(t,l,a.handler,a.options));for(const[l,a]of Object.entries(o??{}))a!=null&&n.push(K(t,l,T(a)));for(const[l,a]of Object.entries(f??{}))a&&n.push(Q(t,l,T(a)));for(const[l,a]of Object.entries(u??{}))n.push(X(t,l,T(a)));return{update:l=>r.set(l),destroy:()=>n.forEach(l=>l())}},Oe=ne(e=>({attributes:{class:e}})),re={status:"pending"},oe=e=>{const t=typeof e;return t==="object"&&e!==null||t==="function"?typeof e.then=="function":!1},ie=e=>{const t=w(re);return Promise.resolve(e).then(s=>t.set({status:"fulfilled",value:s}),s=>t.set({status:"rejected",reason:s})),g(t)},O=new WeakMap,ce=e=>{if(!oe(e))return R({status:"fulfilled",value:e});let t=O.get(e);return t||(t=ie(e),O.set(e,t)),t},ae=(e,t)=>Object.is(e,t)||e.status===t.status&&(e.status!=="fulfilled"||C(e.value,t.value))&&(e.status!=="rejected"||C(e.reason,t.reason)),ue=e=>V(()=>ce(e())(),{equal:ae}),le=(e,t,s)=>H(e,{derive:(n,r)=>{n.status==="fulfilled"&&r(n.value)},equal:s},t),Re=(e,t,s)=>le(ue(e),t,s),qe=(e,t)=>{let s;const n=new Promise(o=>s=o);let r=()=>{e.removeEventListener(t,i),r=q};const i=o=>{o.target===e&&(s(o),r())};return e.addEventListener(t,i),{promise:n,unsubscribe(){r()}}},Me=e=>{let t;return{promise:new Promise(s=>{t=setTimeout(()=>{t=void 0,s()},e)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}},Pe=()=>{let e;return{promise:new Promise(s=>{e=s}),resolve:e}},fe=/\r/g;function Be(e,t="",s=""){return`${e} - ${t?`${t.slice(0,1).toUpperCase()+t.slice(1)}${s?` ${s.slice(0,1).toUpperCase()+s.slice(1)}`:""} - `:""}AgnosUI`}function Ue(e){return e.replace(fe,"").split(`

`)}const de=/^\([^(]*\)[^=]*=>/,pe=/^function/,be=/^Slot/;function Ne(e){return de.test(e)||pe.test(e)?"function":be.test(e)?"slot":e}function We(e){let t;function s(n){t=n}return F(()=>{I.patch({elements:t?e(t):[]})}),s}export{we as A,We as B,Te as a,$e as b,se as c,xe as d,ye as e,De as f,qe as g,Me as h,A as i,Be as j,_e as k,ee as l,ke as m,Oe as n,ge as o,Pe as p,Ce as q,je as r,Re as s,P as t,Se as u,Le as v,Ae as w,Ne as x,Ue as y,Ee as z};