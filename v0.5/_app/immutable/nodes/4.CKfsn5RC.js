import{a as n,t as f}from"../chunks/disclose-version.CXIfM4OQ.js";import{p as E,f as m,a as j,s as o,c as r,r as s,t as b}from"../chunks/runtime.D-xWURpp.js";import{s as w}from"../chunks/render.BBF2jv39.js";import{i as k}from"../chunks/if.BahRe87o.js";import{s as I}from"../chunks/snippet.B-of5ABw.js";import{s as R,p as N,a as O}from"../chunks/stores.8zrR0iEK.js";import{s as P,a as c}from"../chunks/store.D0vaWVf2.js";import{p as S}from"../chunks/stores.CpUC2rXn.js";var U=f('<div class="fw-bolder text-start">PREVIOUS</div> <a class="text-start"> </a>',1),V=f('<div class="fw-bolder text-end">NEXT</div> <a class="text-end"> </a>',1),X=f('<!> <hr> <div class="w-100 d-flex justify-content-between"><div><!></div> <div><!></div></div>',1);function J(T,l){E(l,!0);const d=P(),t=()=>c(S,"$page",d),$=()=>c(N,"$pathToRoot$",d),_=()=>c(O,"$selectedFramework$",d);var u=X(),x=m(u);I(x,()=>l.children);var h=o(x,4),i=r(h),F=r(i);k(F,()=>t().data.prev,p=>{var e=U(),a=o(m(e),2),v=r(a,!0);s(a),b(()=>{R(a,"href",`${$()??""}docs/${_()??""}/${t().data.prev.slug??""}${t().data.prev.subpath??""??""}`),w(v,t().data.prev.title)}),n(p,e)}),s(i);var g=o(i,2),y=r(g);k(y,()=>t().data.next,p=>{var e=V(),a=o(m(e),2),v=r(a,!0);s(a),b(()=>{R(a,"href",`${$()??""}docs/${_()??""}/${t().data.next.slug??""}${t().data.next.subpath??""??""}`),w(v,t().data.next.title)}),n(p,e)}),s(g),s(h),n(T,u),j()}export{J as component};
