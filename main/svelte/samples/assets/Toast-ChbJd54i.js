import{p as O,f as W,g as h,b as w,c as l,a as $,t as b,L as k,e as D,q as x,h as C,O as E,v as F,w as H,P as L}from"./AppCommon-D_B8a5G6.js";import{a as n}from"./actions-B64vG8Da.js";import{t as B}from"./class-1L5W2JgY.js";import{S as P}from"./Slot-Bt2_y6gy.js";import{c as N}from"./toast-m-dpsTSI-Ce09RZoS.js";import{e as V}from"./extendWidget-CKD28wu-.js";import{f as j}from"./fade-uOobJKgw-DmiXSsM0.js";import{c as z}from"./config-BmaADpVL.js";import{c as S}from"./directive-CKEccryv-BAfxyCuh.js";const A={structure:void 0,children:void 0,header:void 0},G={transition:j},I=V(N,A,{},G),J=I;var K=b("<button></button>"),M=b('<div class="toast-header"><!> <!></div>'),Q=b("<button></button>"),R=b('<!> <div class="toast-body"><!></div> <!>',1);function U(T,e){O(e,!0);let f=k(e,["$$slots","$$events","$$legacy"]),r=e.state;var g=R(),d=W(g);h(d,()=>r.header,u=>{var a=M(),i=C(a);P(i,{get content(){return r.header},get props(){return f}});var c=w(i,2);h(c,()=>r.dismissible,s=>{var t=K();let m;D(()=>m=x(t,m,{})),n(t,(p,o)=>S(p,o),()=>"btn-close me-0 ms-auto"),n(t,p=>e.directives.closeButtonDirective(p)),l(s,t)}),l(u,a)});var _=w(d,2),v=C(_);P(v,{get content(){return r.children},get props(){return f}});var y=w(_,2);h(y,()=>r.dismissible&&!r.header,u=>{var a=Q();let i;D(()=>i=x(a,i,{})),n(a,(c,s)=>S(c,s),()=>"btn-close btn-close-white me-2 m-auto"),n(a,c=>e.directives.closeButtonDirective(c)),l(u,a)}),l(T,g),$()}var X=b("<div><!></div>");function nt(T,e){O(e,!0);const f=(s,t=L)=>{U(s,H(t))};let r=E(e,"visible",15),g=k(e,["$$slots","$$events","$$legacy","visible"]);const d=z({factory:J,widgetName:"toast",get props(){return{...g,visible:r()}},enablePatchChanged:!0,defaultConfig:{structure:f},events:{onVisibleChange:s=>{r(s)}}}),_=d.api,{state:v,directives:{transitionDirective:y,autoHideDirective:u,bodyDirective:a}}=d;var i=F(),c=W(i);return h(c,()=>!v.hidden,s=>{var t=X();let m;D(()=>m=x(t,m,{}));var p=C(t);P(p,{get content(){return v.structure},props:d}),D(()=>{B(t,"toast-dismissible",v.dismissible),B(t,"d-flex",!v.header)}),n(t,(o,q)=>S(o,q),()=>"toast"),n(t,o=>y(o)),n(t,o=>u(o)),n(t,o=>a(o)),l(s,t)}),l(T,i),$({api:_})}export{nt as T};
