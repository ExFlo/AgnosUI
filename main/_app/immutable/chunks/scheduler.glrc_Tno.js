function j(){}function B(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function G(t){return t()}function rt(){return Object.create(null)}function I(t){t.forEach(G)}function R(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function z(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(z(e,n))}function ft(t,e,n,i){if(t){const s=H(t,e,n,i);return t[0](s)}}function H(t,e,n,i){return t[1]&&i?B(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ht(t,e,n,i,s,l){if(s){const c=H(e,n,i,l);t.p(c,s)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function yt(t){return t??""}function gt(t){return t&&R(t.destroy)?t.destroy:j}let y=!1;function bt(){y=!0}function xt(){y=!1}function F(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:F(1,s,q=>e[n[q]].claim_order,u))-1;i[r]=n[a]+1;const N=a+1;n[N]=r,s=Math.max(N,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<l.length&&c[r].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[r],a)}}function W(t,e){if(y){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function J(t,e,n){t.insertBefore(e,n||null)}function K(t,e,n){y&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function wt(){return T(" ")}function Tt(){return T("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Q=["width","height"];function V(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Q.indexOf(i)===-1?t[i]=e[i]:C(t,i,e[i])}function X(t,e){Object.keys(e).forEach(n=>{Y(t,n,e[n])})}function Y(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:C(t,e,n)}function vt(t){return/-/.test(t)?X:V}function At(t){return t.dataset.svelteH}function kt(t){return Array.from(t.childNodes)}function M(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){M(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function D(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function jt(t,e,n){return D(t,e,n,L)}function Ht(t,e,n){return D(t,e,n,S)}function Z(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Lt(t){return Z(t," ")}function v(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function St(t,e){const n=v(t,"HTML_TAG_START",0),i=v(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);M(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new g(e);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,l)}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function Mt(t,e){t.value=e??""}function Pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ot(t){const e=t.querySelector(":checked");return e&&e.__value}function qt(t,e,n){t.classList.toggle(e,!!n)}function $(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Bt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class tt{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=S(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)J(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class g extends tt{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],e)}}function Gt(t,e){return new t(e)}let p;function b(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function It(t){d().$$.on_mount.push(t)}function Rt(t){d().$$.after_update.push(t)}function zt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=$(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Ft(t,e){return d().$$.context.set(t,e),e}function Ut(t){return d().$$.context.get(t)}const h=[],A=[];let _=[];const k=[],O=Promise.resolve();let w=!1;function et(){w||(w=!0,O.then(it))}function Wt(){return et(),O}function nt(t){_.push(t)}const x=new Set;let f=0;function it(){if(f!==0)return;const t=p;do{try{for(;f<h.length;){const e=h[f];f++,b(e),st(e.$$)}}catch(e){throw h.length=0,f=0,e}for(b(null),h.length=0,f=0;A.length;)A.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];x.has(n)||(x.add(n),n())}_.length=0}while(h.length);for(;k.length;)k.pop()();w=!1,x.clear(),b(t)}function st(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Jt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{pt as $,Tt as A,It as B,Pt as C,A as D,Gt as E,Wt as F,yt as G,g as H,B as I,vt as J,rt as K,it as L,R as M,ut as N,nt as O,Jt as P,p as Q,b as R,G as S,h as T,et as U,bt as V,xt as W,gt as X,z as Y,ct as Z,d as _,wt as a,mt as a0,Nt as a1,Ot as a2,Mt as a3,Dt as a4,Ft as a5,Ut as a6,S as a7,Ht as a8,zt as a9,ot as aa,kt as b,jt as c,Z as d,L as e,E as f,Lt as g,W as h,K as i,Ct as j,at as k,ft as l,C as m,j as n,dt as o,_t as p,At as q,Bt as r,lt as s,T as t,ht as u,St as v,I as w,Rt as x,qt as y,Et as z};
