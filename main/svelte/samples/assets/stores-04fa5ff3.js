import{aa as V,Z as l,ab as k,a8 as $,a9 as v,a7 as y,$ as h,_ as O}from"./index-09d3b533.js";import{i as D}from"./directive-dac86582.js";const E=e=>({actions:e.actions,api:e.api,directives:e.directives,state$:e.state$,stores:e.stores}),m=Symbol();function W(e){return function(t){$(()=>{var n;for(const[r,s]of Object.entries(t??{}))(n=e[`${r}$`])==null||n.set(s)})}}function L(e,t){if(e===t)return null;let n=!1;const r={},s=new Set([...Object.keys(e),...Object.keys(t)]);for(const a of s){const o=t[a];e[a]!==o&&(r[a]=o,n=!0)}return n?r:null}function z(e,t=y(void 0),n={},r=h(void 0)){const{normalizeValue:s=D,equal:a=Object.is}=n,o=()=>e,c=(i,u=o)=>{const f=i===void 0?void 0:s(i);return f===m?(console.error("Not using invalid value",i),u()):f===void 0?u():f},d=l(()=>c(t()),{equal:a}),S=l(()=>c(r(),d),{equal:a});return v(S,i=>{if(i!==void 0){const u=s(i);if(u===m){console.error("Not setting invalid value",i);return}i=u}r.set(i)})}const b=e=>!!(e&&typeof e=="function"&&"subscribe"in e),N=e=>b(e)?e:y(e),I=e=>b(e)?e:h(e),w=(e,t)=>{const n={};if(t){const r=b(t);for(const s of e)n[s]=r?l(()=>t()[s]):N(t[s])}return n},R=(e,t,n)=>{const r={};for(const s of e){const a=t==null?void 0:t[s],o=n==null?void 0:n[s];r[s]=a&&o?l(()=>a()??o()):a||o}return r},A=(e,t,n)=>{const r={},s=Object.keys(e),a=w(s,t==null?void 0:t.config),o=t==null?void 0:t.props;for(const c of s){const d=o==null?void 0:o[c];r[`${c}$`]=z(e[c],a[c],n==null?void 0:n[c],I(d))}return r},U=(e,t,n)=>{const r=A(e,t,n);return[r,W(r)]},_=e=>{const t=[],n=[],r={};for(const s of Object.keys(e))if(s.endsWith("$")){const a=e[s];t.push(s.substring(0,s.length-1)),n.push(a),r[s]=V(a)}return{stores:r,state$:l(()=>{const s=n.map(k),a={};return t.forEach((o,c)=>{a[o]=s[c]}),a})}},F=(e,t,n=s=>s[0],r=(s,a)=>a===s)=>{let s=t[0]();return O(t,{derive(a){const o=n(a),c=!r(a[0],o);return c&&t[0].set(o),(c||!r(s,o))&&(s=o,e()(o)),o},equal:r})};export{m as I,A as a,F as b,N as c,L as f,R as m,w as n,_ as s,E as t,U as w};
