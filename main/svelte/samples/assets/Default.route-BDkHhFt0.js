import{p as P,O as L,v as V,f as W,g as _,c as r,a as j,L as w,j as k,b as d,e as h,T as B,t as b,h as p,k as D,n as x,W as F,u as g,V as I}from"./AppCommon-D_B8a5G6.js";import{h as O}from"./html-QBUPadaN.js";import{s as R}from"./snippet-CHDzym81.js";import{s as S}from"./class-1L5W2JgY.js";import{c as q}from"./config-CpwOCg7e.js";import{c as z}from"./close_icon-BnSzxVRN.js";import{c as A}from"./toast-m-dpsTSI-Ce09RZoS.js";import"./directive-CKEccryv-BAfxyCuh.js";import"./extendWidget-CKD28wu-.js";import"./writables-DoU_XYTX-DPIJ9iVk.js";import"./common-BHk3fJTO-BZ6sOBnn.js";import"./baseTransitions-ChaN5dzC.js";import"./promise-CY2U8bTP-Bo1v6H0G.js";var E=b('<button class="btn btn-sm btn-circle btn-ghost"><!></button>'),G=b("<div><!> <!></div>");function $(l,t){P(t,!0);let i=L(t,"visible",15),c=w(t,["$$slots","$$events","$$legacy","visible","children"]);const{state:e,api:n}=q({factory:A,widgetName:"toast",get props(){return{...c,visible:i()}},enablePatchChanged:!0,events:{onVisibleChange:o=>{i(o)}}});var v=V(),s=W(v);_(s,()=>!e.hidden,o=>{var a=G(),u=p(a);R(u,()=>t.children);var y=d(u,2);_(y,()=>e.dismissible,T=>{var m=E();m.__click=function(...C){var f;(f=n.close)==null||f.apply(this,C)};var N=p(m);O(N,()=>z),h(()=>B(m,"aria-label",e.ariaCloseButtonLabel)),r(T,m)}),h(()=>S(a,`alert ${e.className??""} flex`)),r(o,a)}),r(l,v),j()}k(["click"]);var H=(l,t)=>x(t,!0),J=b('<div class="h-[215px]"><button class="btn btn-primary">Reset Toast</button> <div class="toast"><!> <!></div></div>');function ot(l){let t=I(!0);var i=J(),c=p(i);c.__click=[H,t];var e=d(c,2),n=p(e);$(n,{className:"alert-success",get visible(){return D(t)},set visible(s){x(t,F(s))},children:(s,o)=>{var a=g("This is a success toast");r(s,a)},$$slots:{default:!0}});var v=d(n,2);$(v,{className:"alert-error",dismissible:!1,children:(s,o)=>{var a=g("This is an error toast");r(s,a)},$$slots:{default:!0}}),r(l,i)}k(["click"]);export{ot as default};
