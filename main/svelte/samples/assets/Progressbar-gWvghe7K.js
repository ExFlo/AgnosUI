import{p as u,g as f,d as h,b,a as _,t as y,e as n,q as P,w as E,O as B,L as D,l as L}from"./AppCommon-DpjxpKbi.js";import{a as g}from"./actions-hEUS7_0h.js";import{c as N}from"./progressbar-CGmNq0cS-U2hq-6Q2.js";import{b as T,t as l,d as A}from"./writables-DCiBdIBK-eyYf7wu0.js";import{e as O}from"./extendWidget-C6WMN4LK.js";import{B as W}from"./types-Bw2nvhNr.js";import{S}from"./Slot-nk-rByji.js";import{c as q}from"./config-BJ3FVXXn.js";import{s as F,t as m}from"./class-BAnC4OqB.js";import{s as v}from"./style-PwPRnE0L.js";import{c as U}from"./directive-CKEccryv-ocPWyJ_x.js";const V={structure:void 0,children:void 0,height:"",striped:!1,animated:!1,type:void 0},X={height:T,striped:l,animated:l,type:A([void 0,...W]),structure:void 0,children:void 0},j=O(N,V,X),k=j;var z=y('<div class="progress"><div><!></div></div>');function G(d,t){u(t,!0);var r=z(),e=n(r),i=n(e),o=P(()=>({state:t.state,api:t.api,directives:t.directives}));S(i,{get content(){return t.state.children},get props(){return f(o)}}),h(()=>{v(r,"height",t.state.height),F(e,`progress-bar ${t.state.type?`text-bg-${t.state.type}`:""}`),m(e,"progress-bar-striped",t.state.striped),m(e,"progress-bar-animated",t.state.animated),v(e,"width",`${t.state.percentage}%`)}),b(d,r),_()}var H=y("<div><!></div>");function rt(d,t){u(t,!0);const r=(s,c=B)=>{G(s,E(c))};let e=D(t,["$$slots","$$events","$$legacy"]);const i=q({factory:k,widgetName:"progressbar",props:e,enablePatchChanged:!0,defaultConfig:{structure:r}}),{state:o,directives:{ariaDirective:w}}=i;var a=H();const x=P(()=>({}));let p;var C=n(a);S(C,{get content(){return o.structure},props:i}),g(a,s=>w(s)),g(a,(s,c)=>U(s,c),()=>o.className||void 0),h(()=>p=L(a,p,{...f(x)})),b(d,a),_()}export{rt as P};
