import{a as V,c as l,g,b as k,d as b,e as O,r as y,w as S,i as h,f as D}from"./func-DR0n-ShK-BRtNsj1u.js";const P=t=>({actions:t.actions,api:t.api,directives:t.directives,state$:t.state$,stores:t.stores}),m=Symbol();function W(t){return function(e){k(()=>{var r;for(const[n,s]of Object.entries(e??{}))(r=t[`${n}$`])==null||r.set(s)})}}function A(t,e){if(t===e)return null;let r=!1;const n={},s=new Set([...Object.keys(t),...Object.keys(e)]);for(const o of s){const a=e[o];t[o]!==a&&(n[o]=a,r=!0)}return r?n:null}function $(t,e=y(void 0),r={},n=S(void 0)){const{normalizeValue:s=h,equal:o=Object.is}=r,a=()=>t,i=(c,u=a)=>{const f=c===void 0?void 0:s(c);return f===m?(console.error("Not using invalid value",c),u()):f===void 0?u():f},d=l(()=>i(e()),{equal:o}),p=l(()=>i(n(),d),{equal:o});return b(p,c=>{if(c!==void 0){const u=s(c);if(u===m){console.error("Not setting invalid value",c);return}c=u}n.set(c)})}const v=t=>!!(t&&typeof t=="function"&&"subscribe"in t),z=t=>v(t)?t:y(t),N=t=>v(t)?t:S(t),q=(t,e)=>{const r={};if(e){const n=v(e);for(const s of t)r[s]=n?l(()=>e()[s]):z(e[s])}return r},j=(t,e,r)=>{const n={};for(const s of t){const o=e==null?void 0:e[s],a=r==null?void 0:r[s];n[s]=o&&a?l(()=>o()??a()):o||a}return n},w=(t,e,r)=>{const n={},s=Object.keys(t),o=q(s,e==null?void 0:e.config),a=e==null?void 0:e.props;for(const i of s){const d=a==null?void 0:a[i];n[`${i}$`]=$(t[i],o[i],r==null?void 0:r[i],N(d))}return n},E=(t,e,r)=>{const n=w(t,e,r);return[n,W(n)]},L=t=>{const e=[],r=[],n={};for(const[s,o]of Object.entries(t))s.endsWith("$")&&(e.push(s.substring(0,s.length-1)),r.push(o),n[s]=V(o));return{stores:n,state$:l(()=>{const s=r.map(g),o={};return e.forEach((a,i)=>{o[a]=s[i]}),o})}},R=(t,e,r=s=>s[0],n=(s,o)=>o===s)=>{let s=e[0]();return b(O(e,{derive(o){const a=r(o),i=!n(o[0],a);return i&&e[0].set(a),(i||!n(s,a))&&(s=a,t()(a)),a},equal:n}),e[0].set.bind(e[0]))},U=(t,e,r=h,n=D)=>b(l(()=>r(t()),{equal:n}),s=>{const o=r(s);n(t(),o)||(t.set(o),e()(o))});export{m as I,U as a,R as b,w as c,A as f,j as m,q as n,L as s,P as t,E as w};
