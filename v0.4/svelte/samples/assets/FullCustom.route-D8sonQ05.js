import{S as K,i as L,s as M,k as d,q as f,a1 as O,g as _,v as r,n as G,h as g,f as k,c as Q,l as P,m as T,C as j,x as H,t as U,a as V,d as W,B as X,a5 as Y}from"./AppCommon-EGvQgKwz.js";import{P as Z}from"./Progressbar-DxUpBTLD.js";import"./progressbar-BybOg5FE-BAI4UbAr.js";import"./writables-DoU_XYTX-esNIv65O.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./extendWidget-8zXnCiQz.js";import"./Slot-mNzUgnjX.js";import"./config-DGww47Fx.js";function J(a){let t,n,s,l,o;return{c(){t=d("div"),n=k(),s=d("div"),l=k(),o=d("div"),f(t,"class","bubble bubble-1"),f(s,"class","bubble bubble-2"),f(o,"class","bubble bubble-3")},m(e,i){_(e,t,i),_(e,n,i),_(e,s,i),_(e,l,i),_(e,o,i)},d(e){e&&(g(t),g(n),g(s),g(l),g(o))}}}function x(a){let t,n,s,l,o,e=a[0].percentage>=50&&J();return{c(){t=d("div"),n=d("div"),s=d("div"),l=d("div"),e&&e.c(),f(l,"class","cup-fill"),f(l,"style",o=`height: ${1.7*a[0].percentage}px;`),f(s,"class","cup-fill-parent"),f(n,"class","cup"),f(t,"class","position-relative"),O(t,"height","300px")},m(i,c){_(i,t,c),r(t,n),r(n,s),r(s,l),e&&e.m(l,null)},p(i,[c]){i[0].percentage>=50?e||(e=J(),e.c(),e.m(l,null)):e&&(e.d(1),e=null),c&1&&o!==(o=`height: ${1.7*i[0].percentage}px;`)&&f(l,"style",o)},i:G,o:G,d(i){i&&g(t),e&&e.d()}}}function ee(a,t,n){let{state:s}=t;return a.$$set=l=>{"state"in l&&n(0,s=l.state)},[s]}class te extends K{constructor(t){super(),L(this,t,ee,x,M,{state:0})}}function se(a){let t,n,s,l,o,e,i,c,h,B,m,$=a[1]?"Pause":"Resume",S,y,D,v,F,w,z,R,q,C=a[0]===0?"Need to wake up.":a[0]<100?`Retrieving coffee... ${a[0]}%`:"Ready to work !",I,p,N,A;return s=new Z({props:{value:a[0],structure:te}}),{c(){t=d("div"),n=d("div"),Q(s.$$.fragment),l=k(),o=d("div"),e=d("div"),i=d("button"),c=P("Start"),B=k(),m=d("button"),S=P($),D=k(),v=d("button"),F=P("Reset"),z=k(),R=d("p"),q=d("span"),I=P(C),O(n,"width","350px"),f(i,"class","btn btn-outline-primary"),i.disabled=h=a[0]>0,f(m,"class","btn btn-outline-primary"),m.disabled=y=a[0]===0||a[0]>=100,f(v,"class","btn btn-outline-primary"),v.disabled=w=a[0]===0,f(e,"class","btn-group"),f(e,"role","group"),f(R,"class","mt-3"),f(o,"class","d-flex flex-column justify-content-evenly h-100 ms-5"),f(t,"class","d-flex align-items-center flex-wrap")},m(u,b){_(u,t,b),r(t,n),T(s,n,null),r(t,l),r(t,o),r(o,e),r(e,i),r(i,c),r(e,B),r(e,m),r(m,S),r(e,D),r(e,v),r(v,F),r(o,z),r(o,R),r(R,q),r(q,I),p=!0,N||(A=[j(i,"click",a[2]),j(m,"click",a[3]),j(v,"click",a[4])],N=!0)},p(u,[b]){const E={};b&1&&(E.value=u[0]),s.$set(E),(!p||b&1&&h!==(h=u[0]>0))&&(i.disabled=h),(!p||b&2)&&$!==($=u[1]?"Pause":"Resume")&&H(S,$),(!p||b&1&&y!==(y=u[0]===0||u[0]>=100))&&(m.disabled=y),(!p||b&1&&w!==(w=u[0]===0))&&(v.disabled=w),(!p||b&1)&&C!==(C=u[0]===0?"Need to wake up.":u[0]<100?`Retrieving coffee... ${u[0]}%`:"Ready to work !")&&H(I,C)},i(u){p||(U(s.$$.fragment,u),p=!0)},o(u){V(s.$$.fragment,u),p=!1},d(u){u&&g(t),W(s),N=!1,X(A)}}}function le(a,t,n){let s=0,l=!1;const o=setInterval(()=>{l&&s<100&&n(0,s=s+10)},500);return Y(()=>{clearInterval(o)}),[s,l,()=>{n(1,l=!0)},()=>{n(1,l=!l)},()=>{n(0,s=0),n(1,l=!1)}]}class pe extends K{constructor(t){super(),L(this,t,le,se,M,{})}}export{pe as default};