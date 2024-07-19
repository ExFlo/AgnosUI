import{S as Y,i as Z,s as j,Q as H,k as A,f as w,l as S,p as N,q as C,g as c,v as W,C as O,x as z,D as F,X as G,E as J,t as Q,a as X,h as m,B as K,c as L,m as P,d as R,Y as T,n as U,Z as V}from"./AppCommon-EGvQgKwz.js";import{A as x}from"./Alert-B16P5kMm.js";import{w as ee}from"./index-DBY58vID.js";import"./Slot-mNzUgnjX.js";import"./config-DGww47Fx.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./alert-DdGuK__c-DOS7edg6.js";import"./common-CO5b5G_J-BDxW3zpb.js";import"./baseTransitions-o4G_vBWq.js";import"./writables-DoU_XYTX-esNIv65O.js";import"./promise-CY2U8bTP-CDYUm4pL.js";import"./extendWidget-8zXnCiQz.js";import"./fade-uOobJKgw-RbFJ57K3.js";import"./simpleClassTransition-CTFkEAKQ.js";import"./cssTransitions-DczX0sNo.js";function B(o,s,d){const n=o.slice();n[7]=s[d];const r=n[7];return n[8]=r.dismissible,n[9]=r.animatedOnInit,n[10]=r.animated,n[11]=r.type,n[12]=r.children,n}function M(o,s){let d,n,r;function _(){return s[5](s[7])}return n=new x({props:{dismissible:s[8],animatedOnInit:s[9],animated:s[10],type:s[11],children:s[12],onHidden:_}}),{key:o,first:null,c(){d=N(),L(n.$$.fragment),this.first=d},m(l,i){c(l,d,i),P(n,l,i),r=!0},p(l,i){s=l;const u={};i&2&&(u.dismissible=s[8]),i&2&&(u.animatedOnInit=s[9]),i&2&&(u.animated=s[10]),i&2&&(u.type=s[11]),i&2&&(u.children=s[12]),i&2&&(u.onHidden=_),n.$set(u)},i(l){r||(Q(n.$$.fragment,l),r=!0)},o(l){X(n.$$.fragment,l),r=!1},d(l){l&&m(d),R(n,l)}}}function te(o){let s,d,n,r,_,l,i,u,b,I,y=o[1].length+"",f,g,a=[],k=new Map,p,h,E,q,v=H(o[1]);const D=e=>e[7];for(let e=0;e<v.length;e+=1){let t=B(o,v,e),$=D(t);k.set($,a[e]=M($,t))}return{c(){s=A("button"),s.textContent="Add error",d=w(),n=A("button"),n.textContent="Add info",r=w(),_=A("button"),_.textContent="Add warning",l=w(),i=A("br"),u=w(),b=A("div"),I=S("Alerts in the service: "),f=S(y),g=w();for(let e=0;e<a.length;e+=1)a[e].c();p=N(),C(s,"class","btn btn-primary addError me-1"),C(n,"class","btn btn-primary addInfo me-1"),C(_,"class","btn btn-primary addWarning me-1"),C(b,"class","alertCount mb-3")},m(e,t){c(e,s,t),c(e,d,t),c(e,n,t),c(e,r,t),c(e,_,t),c(e,l,t),c(e,i,t),c(e,u,t),c(e,b,t),W(b,I),W(b,f),c(e,g,t);for(let $=0;$<a.length;$+=1)a[$]&&a[$].m(e,t);c(e,p,t),h=!0,E||(q=[O(s,"click",o[2]),O(n,"click",o[3]),O(_,"click",o[4])],E=!0)},p(e,[t]){(!h||t&2)&&y!==(y=e[1].length+"")&&z(f,y),t&3&&(v=H(e[1]),F(),a=G(a,t,D,1,e,v,k,p.parentNode,T,M,p,B),J())},i(e){if(!h){for(let t=0;t<v.length;t+=1)Q(a[t]);h=!0}},o(e){for(let t=0;t<a.length;t+=1)X(a[t]);h=!1},d(e){e&&(m(s),m(d),m(n),m(r),m(_),m(l),m(i),m(u),m(b),m(g),m(p));for(let t=0;t<a.length;t+=1)a[t].d(e);E=!1,K(q)}}}function ne(o,s,d){let n,r=U,_=()=>(r(),r=V(i,f=>d(1,n=f)),i);o.$$.on_destroy.push(()=>r());function l(){const{subscribe:f,set:g,update:a}=ee([]);return{subscribe:f,add:k=>a(p=>[...p,k]),remove:k=>a(p=>p.filter(h=>h!==k)),reset:()=>g([])}}const i=l();return _(),[i,n,()=>i.add({type:"danger",children:"Error",dismissible:!0,animated:!0}),()=>i.add({type:"info",children:"Info",dismissible:!0,animated:!0}),()=>i.add({type:"warning",children:"Warning",dismissible:!0,animated:!0}),f=>i.remove(f)]}class $e extends Y{constructor(s){super(),Z(this,s,ne,te,j,{alerts$:0})}get alerts$(){return this.$$.ctx[0]}}export{$e as default};