import{S as Y,i as Z,s as j,Q as H,k as D,f as A,l as S,p as N,q as w,g as m,v as W,C as E,x as z,D as F,X as G,E as J,t as Q,a as X,h as c,B as K,c as L,m as P,d as R,Y as T,n as U,Z as V}from"./AppCommon-C1X_0L7p.js";import{A as x}from"./Alert-BZ4-KS4V.js";import{w as ee}from"./index-CtXfoiSs.js";import"./Slot-AcyzYqVT.js";import"./config-actRtC2N.js";import"./directive-DCYlDznf-BLyioqVS.js";import"./alert-Dlf-BV98-Btl60TU3.js";import"./common-DRdsw5m8-TkKKfQAb.js";import"./baseTransitions-CMZe44Vw.js";import"./writables-DoU_XYTX-gpfTGoGn.js";import"./promise-CY2U8bTP-C0Pa2v4R.js";import"./extendWidget-BmexbiiK.js";import"./fade-uOobJKgw-B-q-cbUv.js";import"./simpleClassTransition-DQ6xmoDI.js";import"./cssTransitions-DKRKCc02.js";function B(o,s,u){const n=o.slice();n[7]=s[u];const i=n[7];return n[8]=i.dismissible,n[9]=i.animatedOnInit,n[10]=i.animated,n[11]=i.type,n[12]=i.slotDefault,n}function M(o,s){let u,n,i;function f(){return s[5](s[7])}return n=new x({props:{dismissible:s[8],animatedOnInit:s[9],animated:s[10],type:s[11],slotDefault:s[12],onHidden:f}}),{key:o,first:null,c(){u=N(),L(n.$$.fragment),this.first=u},m(r,l){m(r,u,l),P(n,r,l),i=!0},p(r,l){s=r;const d={};l&2&&(d.dismissible=s[8]),l&2&&(d.animatedOnInit=s[9]),l&2&&(d.animated=s[10]),l&2&&(d.type=s[11]),l&2&&(d.slotDefault=s[12]),l&2&&(d.onHidden=f),n.$set(d)},i(r){i||(Q(n.$$.fragment,r),i=!0)},o(r){X(n.$$.fragment,r),i=!1},d(r){r&&c(u),R(n,r)}}}function te(o){let s,u,n,i,f,r,l,d,b,C,y=o[1].length+"",_,g,a=[],h=new Map,p,$,I,O,v=H(o[1]);const q=e=>e[7];for(let e=0;e<v.length;e+=1){let t=B(o,v,e),k=q(t);h.set(k,a[e]=M(k,t))}return{c(){s=D("button"),s.textContent="Add error",u=A(),n=D("button"),n.textContent="Add info",i=A(),f=D("button"),f.textContent="Add warning",r=A(),l=D("br"),d=A(),b=D("div"),C=S("Alerts in the service: "),_=S(y),g=A();for(let e=0;e<a.length;e+=1)a[e].c();p=N(),w(s,"class","btn btn-primary addError me-1"),w(n,"class","btn btn-primary addInfo me-1"),w(f,"class","btn btn-primary addWarning me-1"),w(b,"class","alertCount mb-3")},m(e,t){m(e,s,t),m(e,u,t),m(e,n,t),m(e,i,t),m(e,f,t),m(e,r,t),m(e,l,t),m(e,d,t),m(e,b,t),W(b,C),W(b,_),m(e,g,t);for(let k=0;k<a.length;k+=1)a[k]&&a[k].m(e,t);m(e,p,t),$=!0,I||(O=[E(s,"click",o[2]),E(n,"click",o[3]),E(f,"click",o[4])],I=!0)},p(e,[t]){(!$||t&2)&&y!==(y=e[1].length+"")&&z(_,y),t&3&&(v=H(e[1]),F(),a=G(a,t,q,1,e,v,h,p.parentNode,T,M,p,B),J())},i(e){if(!$){for(let t=0;t<v.length;t+=1)Q(a[t]);$=!0}},o(e){for(let t=0;t<a.length;t+=1)X(a[t]);$=!1},d(e){e&&(c(s),c(u),c(n),c(i),c(f),c(r),c(l),c(d),c(b),c(g),c(p));for(let t=0;t<a.length;t+=1)a[t].d(e);I=!1,K(O)}}}function ne(o,s,u){let n,i=U,f=()=>(i(),i=V(l,_=>u(1,n=_)),l);o.$$.on_destroy.push(()=>i());function r(){const{subscribe:_,set:g,update:a}=ee([]);return{subscribe:_,add:h=>a(p=>[...p,h]),remove:h=>a(p=>p.filter($=>$!==h)),reset:()=>g([])}}const l=r();return f(),[l,n,()=>l.add({type:"danger",slotDefault:"Error",dismissible:!0,animated:!0}),()=>l.add({type:"info",slotDefault:"Info",dismissible:!0,animated:!0}),()=>l.add({type:"warning",slotDefault:"Warning",dismissible:!0,animated:!0}),_=>l.remove(_)]}class ke extends Y{constructor(s){super(),Z(this,s,ne,te,j,{alerts$:0})}get alerts$(){return this.$$.ctx[0]}}export{ke as default};
