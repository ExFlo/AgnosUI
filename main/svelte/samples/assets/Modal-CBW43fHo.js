import{p as O,f as S,b as M,g as C,c as l,a as T,t as c,L as H,h as f,e as y,q as w,O as z,w as q,P as E}from"./AppCommon-D_B8a5G6.js";import{a as n}from"./actions-B64vG8Da.js";import{s as A}from"./class-1L5W2JgY.js";import{c as G,m as I,a as J}from"./modal-BEVbQExQ--GnHcBww.js";import{f as F}from"./fade-uOobJKgw-DmiXSsM0.js";import{e as K}from"./extendWidget-CKD28wu-.js";import{t as Q}from"./writables-DoU_XYTX-DPIJ9iVk.js";import{S as k}from"./Slot-Bt2_y6gy.js";import{c as R}from"./config-BmaADpVL.js";import{c as B}from"./directive-CKEccryv-BAfxyCuh.js";const U={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},X={backdropTransition:F,modalTransition:F},Y={fullscreen:Q},Z=K(G,U,Y,X),$=Z,kt=I,Ct=J;var tt=c("<button></button>"),et=c('<h5 class="modal-title"><!></h5> <!>',1);function at(p,t){O(t,!0);let v=H(t,["$$slots","$$events","$$legacy"]);var u=et(),s=S(u),g=f(s);k(g,{get content(){return t.state.title},get props(){return v}});var m=M(s,2);C(m,()=>t.state.closeButton,_=>{var a=tt();let o;y(()=>o=w(a,o,{})),n(a,(r,x)=>B(r,x),()=>"btn-close"),n(a,r=>t.directives.closeButtonDirective(r)),l(_,a)}),l(p,u),T()}var ot=c('<div class="modal-header"><!></div>'),rt=c('<div class="modal-footer"><!></div>'),it=c('<!> <div class="modal-body"><!></div> <!>',1);function st(p,t){O(t,!0);let v=H(t,["$$slots","$$events","$$legacy"]);var u=it(),s=S(u);C(s,()=>t.state.title,a=>{var o=ot(),r=f(o);k(r,{get content(){return t.state.header},get props(){return v}}),l(a,o)});var g=M(s,2),m=f(g);k(m,{get content(){return t.state.children},get props(){return v}});var _=M(g,2);C(_,()=>t.state.footer,a=>{var o=rt(),r=f(o);k(r,{get content(){return t.state.footer},get props(){return v}}),l(a,o)}),l(p,u),T()}var dt=c("<div></div>"),nt=c('<div><div><div class="modal-content"><!></div></div></div>'),lt=c("<!> <!>",1);function Dt(p,t){O(t,!0);const v=(i,e=E)=>{st(i,q(e))},u=(i,e=E)=>{at(i,q(e))};let s=z(t,"visible",15),g=H(t,["$$slots","$$events","$$legacy","visible"]);const m=R({factory:$,widgetName:"modal",get props(){return{...g,visible:s()}},enablePatchChanged:!0,defaultConfig:{header:u,structure:v},events:{onVisibleChange:i=>{s(i)}}}),_=m.api,{directives:{backdropDirective:a,backdropPortalDirective:o,modalDirective:r,modalPortalDirective:x},state:D}=m;var V=lt(),W=S(V);C(W,()=>!D.backdropHidden,i=>{var e=dt();let b;y(()=>b=w(e,b,{})),n(e,(d,P)=>B(d,P),()=>"modal-backdrop"),n(e,d=>o(d)),n(e,d=>a(d)),l(i,e)});var L=M(W,2);return C(L,()=>!D.hidden,i=>{var e=nt();let b;y(()=>b=w(e,b,{}));var d=f(e),P=f(d),N=f(P);k(N,{get content(){return D.structure},props:m}),y(()=>A(d,`modal-dialog ${(D.fullscreen?"modal-fullscreen":"")??""}`)),n(e,(h,j)=>B(h,j),()=>"modal d-block"),n(e,h=>x(h)),n(e,h=>r(h)),l(i,e)}),l(p,V),T({api:_})}export{Dt as M,kt as a,Ct as e};
