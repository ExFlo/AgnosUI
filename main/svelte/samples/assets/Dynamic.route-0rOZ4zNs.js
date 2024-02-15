import{S as Y,i as Z,s as j,R as S,e as w,k as A,l as W,p as M,a as D,b as c,r as q,u as O,w as F,z as G,Y as J,B as K,t as N,d as R,f,x as L,c as P,m as Q,g as T,Z as U,n as V,$ as X}from"./AppCommon-UMULllq8.js";import{A as x}from"./Alert-QyTPz0lf.js";import{w as tt}from"./index-TOjiqfHO.js";import"./Slot-jPGgFm0i.js";import"./config-On7RnSVK.js";import"./func-tK0QDe5R.js";import"./stores-myyG0SBd.js";import"./baseTransitions-cO9GFEyn.js";import"./writables-yVU4Cf-X.js";import"./promise-rywEX3-Y.js";import"./directive-KqFF9xfN.js";import"./fade-SKd83zwy.js";import"./cssTransitions-LiPLK5a9.js";import"./dom-2S7XI5EU.js";function z(o,s,u){const n=o.slice();n[7]=s[u];const l=n[7];return n[8]=l.dismissible,n[9]=l.animationOnInit,n[10]=l.animation,n[11]=l.type,n[12]=l.slotDefault,n}function B(o,s){let u,n,l;function d(){return s[5](s[7])}return n=new x({props:{dismissible:s[8],animationOnInit:s[9],animation:s[10],type:s[11],slotDefault:s[12],onHidden:d}}),{key:o,first:null,c(){u=M(),P(n.$$.fragment),this.first=u},m(r,i){c(r,u,i),Q(n,r,i),l=!0},p(r,i){s=r;const m={};i&2&&(m.dismissible=s[8]),i&2&&(m.animationOnInit=s[9]),i&2&&(m.animation=s[10]),i&2&&(m.type=s[11]),i&2&&(m.slotDefault=s[12]),i&2&&(m.onHidden=d),n.$set(m)},i(r){l||(N(n.$$.fragment,r),l=!0)},o(r){R(n.$$.fragment,r),l=!1},d(r){r&&f(u),T(n,r)}}}function et(o){let s,u,n,l,d,r,i,m,b,C,y=o[1].length+"",_,g,a=[],h=new Map,p,$,I,E,v=S(o[1]);const H=t=>t[7];for(let t=0;t<v.length;t+=1){let e=z(o,v,t),k=H(e);h.set(k,a[t]=B(k,e))}return{c(){s=w("button"),s.textContent="Add error",u=A(),n=w("button"),n.textContent="Add info",l=A(),d=w("button"),d.textContent="Add warning",r=A(),i=w("br"),m=A(),b=w("div"),C=W("Alerts in the service: "),_=W(y),g=A();for(let t=0;t<a.length;t+=1)a[t].c();p=M(),D(s,"class","btn btn-primary addError me-1"),D(n,"class","btn btn-primary addInfo me-1"),D(d,"class","btn btn-primary addWarning me-1"),D(b,"class","alertCount mb-3")},m(t,e){c(t,s,e),c(t,u,e),c(t,n,e),c(t,l,e),c(t,d,e),c(t,r,e),c(t,i,e),c(t,m,e),c(t,b,e),q(b,C),q(b,_),c(t,g,e);for(let k=0;k<a.length;k+=1)a[k]&&a[k].m(t,e);c(t,p,e),$=!0,I||(E=[O(s,"click",o[2]),O(n,"click",o[3]),O(d,"click",o[4])],I=!0)},p(t,[e]){(!$||e&2)&&y!==(y=t[1].length+"")&&F(_,y),e&3&&(v=S(t[1]),G(),a=J(a,e,H,1,t,v,h,p.parentNode,U,B,p,z),K())},i(t){if(!$){for(let e=0;e<v.length;e+=1)N(a[e]);$=!0}},o(t){for(let e=0;e<a.length;e+=1)R(a[e]);$=!1},d(t){t&&(f(s),f(u),f(n),f(l),f(d),f(r),f(i),f(m),f(b),f(g),f(p));for(let e=0;e<a.length;e+=1)a[e].d(t);I=!1,L(E)}}}function nt(o,s,u){let n,l=V,d=()=>(l(),l=X(i,_=>u(1,n=_)),i);o.$$.on_destroy.push(()=>l());function r(){const{subscribe:_,set:g,update:a}=tt([]);return{subscribe:_,add:h=>a(p=>[...p,h]),remove:h=>a(p=>p.filter($=>$!==h)),reset:()=>g([])}}const i=r();return d(),[i,n,()=>i.add({type:"danger",slotDefault:"Error",dismissible:!0,animation:!0}),()=>i.add({type:"info",slotDefault:"Info",dismissible:!0,animation:!0}),()=>i.add({type:"warning",slotDefault:"Warning",dismissible:!0,animation:!0}),_=>i.remove(_)]}class $t extends Y{constructor(s){super(),Z(this,s,nt,et,j,{alerts$:0})}get alerts$(){return this.$$.ctx[0]}}export{$t as default};
