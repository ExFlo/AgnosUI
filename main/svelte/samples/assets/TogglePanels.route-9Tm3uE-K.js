import{S as P,i as Y,s as v,c as y,k as g,e as b,a as h,m as A,b as m,r as f,x as B,t as I,d as H,f as p,g as S,w as z,j as q,l as C,n as E}from"./AppCommon-ClvmpOkk.js";import{B as F}from"./body-DBRiX_SX.js";import{A as G,I as D}from"./Item-DABxsnWy.js";import"./stores-CYKhcBtR.js";import"./baseTransitions-BoBpwsrd.js";import"./writables-DoU_XYTX-BRZiYGy-.js";import"./promise-CY2U8bTP-C_xLmk0r.js";import"./directive-CGjTRxRh-BvEKR48r.js";import"./collapse-BQC9zBIz-nfY-HtID.js";import"./cssTransitions-DnwxVjt8.js";import"./config-DRK-U59L.js";import"./Slot-Bf2N7XfR.js";function J(s){let t;return{c(){t=C("First panel")},m(n,e){m(n,t,e)},d(n){n&&p(t)}}}function K(s){let t;return{c(){t=C(F)},m(n,e){m(n,t,e)},p:E,d(n){n&&p(t)}}}function L(s){let t;return{c(){t=C("Second panel")},m(n,e){m(n,t,e)},d(n){n&&p(t)}}}function M(s){let t;return{c(){t=C(F)},m(n,e){m(n,t,e)},p:E,d(n){n&&p(t)}}}function N(s){let t,n,e,l;t=new D({props:{itemId:"first",$$slots:{itemBody:[K],itemHeader:[J]},$$scope:{ctx:s}}});let i={itemId:"second",$$slots:{itemBody:[M],itemHeader:[L]},$$scope:{ctx:s}};return e=new D({props:i}),s[2](e),{c(){y(t.$$.fragment),n=g(),y(e.$$.fragment)},m(o,c){A(t,o,c),m(o,n,c),A(e,o,c),l=!0},p(o,c){const a={};c&256&&(a.$$scope={dirty:c,ctx:o}),t.$set(a);const _={};c&256&&(_.$$scope={dirty:c,ctx:o}),e.$set(_)},i(o){l||(I(t.$$.fragment,o),I(e.$$.fragment,o),l=!0)},o(o){H(t.$$.fragment,o),H(e.$$.fragment,o),l=!1},d(o){o&&p(n),S(t,o),s[2](null),S(e,o)}}}function Q(s){let t,n,e,l,i,o,c,a,_,$,u,k,x,w,T,O={$$slots:{default:[N]},$$scope:{ctx:s}};return t=new G({props:O}),s[3](t),{c(){y(t.$$.fragment),n=g(),e=b("hr"),l=g(),i=b("div"),o=b("button"),o.textContent="Toggle first",c=g(),a=b("button"),a.textContent="Toggle second",_=g(),$=b("button"),$.textContent="Expand all",u=g(),k=b("button"),k.textContent="Collapse all",h(o,"class","btn btn-sm btn-outline-primary"),h(a,"class","btn btn-sm btn-outline-primary"),h($,"class","btn btn-sm btn-outline-primary"),h(k,"class","btn btn-sm btn-outline-primary"),h(i,"class","d-flex flex-wrap gap-2")},m(r,d){A(t,r,d),m(r,n,d),m(r,e,d),m(r,l,d),m(r,i,d),f(i,o),f(i,c),f(i,a),f(i,_),f(i,$),f(i,u),f(i,k),x=!0,w||(T=[B(o,"click",s[4]),B(a,"click",s[5]),B($,"click",s[6]),B(k,"click",s[7])],w=!0)},p(r,[d]){const j={};d&258&&(j.$$scope={dirty:d,ctx:r}),t.$set(j)},i(r){x||(I(t.$$.fragment,r),x=!0)},o(r){H(t.$$.fragment,r),x=!1},d(r){r&&(p(n),p(e),p(l),p(i)),s[3](null),S(t,r),w=!1,z(T)}}}function R(s,t,n){let e,l;function i(u){q[u?"unshift":"push"](()=>{l=u,n(1,l)})}function o(u){q[u?"unshift":"push"](()=>{e=u,n(0,e)})}return[e,l,i,o,()=>e.api.toggle("first"),()=>l.api.toggle(),()=>e.api.expandAll(),()=>e.api.collapseAll()]}class lt extends P{constructor(t){super(),Y(this,t,R,Q,v,{})}}export{lt as default};
