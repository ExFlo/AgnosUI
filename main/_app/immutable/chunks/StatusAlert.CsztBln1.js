import{a as G,t as L}from"./disclose-version.DO4KS_Xh.js";import{p as U,l as s,J as f,g as e,b as k,d as a,c as i,r as l,s as m,R as y,t as q,a as z,m as r}from"./runtime.BY4A4uhu.js";import{s as I}from"./render.BBkBkMlD.js";import{s as E}from"./stores.Dkm-1SIt.js";import{S as H,s as J}from"./logo-svelte.DUI6oJpq.js";import{b as P}from"./this.DQdy7uJq.js";import{i as R}from"./lifecycle.LWohtzND.js";import{p as W}from"./props.Bl1JgnJO.js";import{s as j,a as D,p as K}from"./stores.C4UUhobe.js";import{A as O,b as Q}from"./info-circle-fill.DBGMxtY2.js";const V=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;var X=L('<div><div class="d-flex align-items-center"><span class="d-flex me-2"><!></span> <span class="me-4">Warning: component is <strong> </strong><br></span></div> <hr> <br> If you want to contribute, please visit <a target="_blank">the issues on GitHub</a>.</div>');function pe(T,b){U(b,!1);const M=j(),v=()=>D(K,"$page",M),o=r(),h=r(),_=r(),n=r(),x=r(),S=/\/(components|services)\/([^/]+)/,B={info:Q,warning:V};let t=W(b,"status",8),p=r();s(()=>f(t()),()=>{a(o,t()==="inprogress"?"warning":"info")}),s(()=>f(t()),()=>{a(h,t()==="inprogress"?"In progress":"Beta")}),s(()=>f(t()),()=>{a(_,t()==="inprogress"?"This component is still under active development. More features will be added in the near future.":"This component has all the basic functionalities implemented. More polishing features might be added in the near future.")}),s(()=>v(),()=>{a(n,v().url.pathname.match(S)?.[2])}),s(()=>e(n),()=>{a(x,`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${e(n)}%22`)}),s(()=>(e(n),e(p)),()=>{e(n),e(p)?.api.open()}),k(),R(),P(O(T,{get type(){return e(o)},get className(){return`p-0 border-0 border-start border-5 border-${e(o)??""}`},children:(d,Y)=>{var c=X(),g=i(c),u=i(g),N=i(u);H(N,{get svg(){return B[e(o)]},className:"icon-16"}),l(u);var $=m(u,2),w=m(i($)),C=i(w);l(w),y(),l($),l(g);var A=m(g,3),F=m(A,3);y(),l(c),q(()=>{J(c,`alert-container p-3 border border-${e(o)??""} rounded-end`),I(C,e(h)),I(A,` ${e(_)??""} `),E(F,"href",e(x))}),G(d,c)},$$slots:{default:!0},$$legacy:!0}),d=>a(p,d),()=>e(p)),z()}export{pe as S,V as b};