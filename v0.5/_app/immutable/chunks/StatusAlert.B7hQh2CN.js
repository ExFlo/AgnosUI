import{a as k,t as B}from"./disclose-version.CXIfM4OQ.js";import{p as L,b as N,i as e,e as C,c as t,r as s,s as o,L as v,t as F,a as G,k as a}from"./runtime.D-xWURpp.js";import{s as b}from"./render.BBF2jv39.js";import{s as U}from"./stores.8zrR0iEK.js";import{S as q,s as z}from"./logo-svelte.D6UXaULV.js";import{b as E}from"./this.BjunJ43-.js";import{s as H,a as P}from"./store.D0vaWVf2.js";import{A as W,b as j}from"./info-circle-fill.Dn5GGrvn.js";import{p as D}from"./stores.CpUC2rXn.js";const J=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;var K=B('<div><div class="d-flex align-items-center"><span class="d-flex me-2"><!></span> <span class="me-4">Warning: component is <strong> </strong><br></span></div> <hr> <br> If you want to contribute, please visit <a target="_blank">the issues on GitHub</a>.</div>');function ae(h,r){L(r,!0);const x=H(),_=()=>P(D,"$page",x),w=/\/(components|services)\/([^/]+)/,A={info:j,warning:J};let l,i=a(()=>r.status==="inprogress"?"warning":"info"),I=a(()=>r.status==="inprogress"?"In progress":"Beta"),T=a(()=>r.status==="inprogress"?"This component is still under active development. More features will be added in the near future.":"This component has all the basic functionalities implemented. More polishing features might be added in the near future."),u=a(()=>_().url.pathname.match(w)?.[2]),$=a(()=>`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${e(u)}%22`);N(()=>{e(u),C(()=>l.api.open())}),E(W(h,{get type(){return e(i)},get className(){return`p-0 border-0 border-start border-5 border-${e(i)??""}`},children:(p,O)=>{var n=K(),m=t(n),c=t(m),y=t(c);q(y,{get svg(){return A[e(i)]},className:"icon-16"}),s(c);var d=o(c,2),g=o(t(d)),M=t(g,!0);s(g),v(),s(d),s(m);var f=o(m,3),S=o(f,3);v(),s(n),F(()=>{z(n,`alert-container p-3 border border-${e(i)??""} rounded-end`),b(M,e(I)),b(f,` ${e(T)??""} `),U(S,"href",e($))}),k(p,n)},$$slots:{default:!0}}),p=>l=p,()=>l),G()}export{ae as S};
