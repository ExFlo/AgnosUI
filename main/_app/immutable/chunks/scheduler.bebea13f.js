function y(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function w(t){return t()}function S(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function C(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(C(n,e))}function P(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const f=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)f[u]=n.dirty[u]|r[u];return f}return n.dirty|r}return n.dirty}function v(t,n,e,o,r,f){if(r){const _=m(n,e,o,f);t.p(_,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function J(t){return t??""}function K(t){return t&&E(t.destroy)?t.destroy:y}let a;function d(t){a=t}function l(){if(!a)throw new Error("Function called outside component initialization");return a}function L(t){l().$$.on_mount.push(t)}function N(t){l().$$.after_update.push(t)}function Q(t,n){return l().$$.context.set(t,n),n}function R(t){return l().$$.context.get(t)}const i=[],g=[];let s=[];const b=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(z))}function T(){return O(),x}function q(t){s.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=a;do{try{for(;c<i.length;){const n=i[c];c++,d(n),F(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function V(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{V as A,a as B,w as C,i as D,O as E,J as F,N as a,g as b,P as c,U as d,D as e,Q as f,G as g,R as h,E as i,M as j,l as k,d as l,z as m,y as n,L as o,I as p,k as q,j as r,A as s,T as t,v as u,H as v,K as w,S as x,B as y,q as z};
