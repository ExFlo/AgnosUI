import{x as F,E as M,y as S,z as R,B as V,C as H,D as W,N as w,F as j,G as B,H as G,I as T,J as K,K as q,p as N,e as _,c as y,a as E,t as I,L as P,q as C,h as D,f as z,b as J,g as L,k as U,M as Q,O as X,o as Y,w as Z,P as ee}from"./AppCommon-D_B8a5G6.js";import{s as te}from"./snippet-CHDzym81.js";import{a as u}from"./actions-B64vG8Da.js";import{c as O}from"./config-BmaADpVL.js";import{g as ae,f as oe,c as re}from"./accordion-BTu1y5n6-DLtThlQX.js";import{c as k}from"./collapse-CVjUhnIz-49X5IPAb.js";import{e as ie}from"./extendWidget-CKD28wu-.js";import{c as A}from"./directive-CKEccryv-BAfxyCuh.js";import{S as x}from"./Slot-Bt2_y6gy.js";function ne(f,d,m,l,v,b){var s,a,c=null,p=f,e,o=T;F(()=>{const t=d()||null;var r=t==="svg"?w:null;if(t!==s){var i=T;S(o),e&&(t===null?j(e,()=>{e=null,a=null}):t===a?B(e):G(e)),t&&t!==a&&(e=R(()=>{if(c=r?document.createElementNS(r,t):document.createElement(t),V(c,c),l){var g=c.appendChild(H());l(c,g)}W.nodes_end=c,p.before(c)})),s=t,s&&(a=s),S(i)}},M)}const se={itemStructure:void 0},ce={structure:void 0,children:void 0,header:void 0},de={...ae(),...se},le={animated:!1,transition:k,destroyOnHide:!1,onShown:()=>{},onHidden:()=>{},onVisibleChange:()=>{},visible:!1,disabled:!1,id:"",headerClassName:"",buttonClassName:"",bodyContainerClassName:"",bodyClassName:"",headingTag:"",className:"",structure:void 0,children:void 0,header:void 0},ue=Object.keys(le),ve=ie(re,ce),fe={itemTransition:k};function pe(){return{...de,...fe}}const ge=oe(ve,ue,pe()),me=ge,$=Symbol("accordion-api");function be(f){K($,f)}function he(){return q($)}var _e=I("<div><!></div>");function $e(f,d){N(d,!0);let m=P(d,["$$slots","$$events","$$legacy","children"]);const{directives:l,api:v}=O({factory:me,widgetName:"accordion",get props(){return m},enablePatchChanged:!0}),b=v;be(v);var s=_e();let a;_(()=>a=C(s,a,{}));var c=D(s);return te(c,()=>d.children),u(s,(p,e)=>A(p,e),()=>"accordion"),u(s,p=>l.accordionDirective(p)),y(f,s),E({api:b})}var Ce=I("<button><!></button>"),Ae=I("<div><div><!></div></div>"),ye=I("<!> <!>",1);function De(f,d){N(d,!0);let m=P(d,["$$slots","$$events","$$legacy"]);const{state:l,directives:v}=m,b=new RegExp("^h[1-6]$");let s=Q(()=>b.test(l.headingTag)?l.headingTag:"h2");var a=ye(),c=z(a);ne(c,()=>U(s),!1,(e,o)=>{let t;_(()=>t=C(e,t,{},void 0,e.namespaceURI!==w,e.nodeName.includes("-"))),u(e,(n,h)=>A(n,h),()=>"accordion-header"),u(e,n=>v.headerDirective(n));var r=Ce();let i;_(()=>i=C(r,i,{}));var g=D(r);x(g,{get content(){return l.header},get props(){return m}}),u(r,n=>v.buttonDirective(n)),u(r,(n,h)=>A(n,h),()=>"accordion-button"),y(o,r)});var p=J(c,2);L(p,()=>l.shouldBeInDOM,e=>{var o=Ae();let t;_(()=>t=C(o,t,{}));var r=D(o);let i;_(()=>i=C(r,i,{}));var g=D(r);x(g,{get content(){return l.children},get props(){return m}}),u(r,(n,h)=>A(n,h),()=>"accordion-body"),u(r,n=>v.bodyDirective(n)),u(o,(n,h)=>A(n,h),()=>"accordion-collapse"),u(o,n=>v.bodyContainerDirective(n)),y(e,o)}),y(f,a),E()}var Ie=I("<div><!></div>");function Fe(f,d){N(d,!0);const m=(i,g=ee)=>{De(i,Z(g))},l=he(),{registerItem:v}=l;let b=X(d,"visible",15),s=P(d,["$$slots","$$events","$$legacy","visible"]);const a=O({factory:v,get props(){return{...s,visible:b()}},enablePatchChanged:!0,defaultConfig:{structure:m},events:{onVisibleChange:i=>{b(i)}}}),{state:c,directives:{itemDirective:p}}=a,e=a.api;Y(()=>{a.api.initDone()});var o=Ie();let t;_(()=>t=C(o,t,{}));var r=D(o);return x(r,{get content(){return c.structure},props:a}),u(o,(i,g)=>A(i,g),()=>"accordion-item"),u(o,i=>p(i)),y(f,o),E({api:e})}export{$e as A,Fe as I};
