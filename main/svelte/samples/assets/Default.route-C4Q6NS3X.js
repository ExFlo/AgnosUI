import{S,i as y,s as A,c as f,m as u,t as l,d as _,g as d,k as D,b as c,f as a,l as $,n as g,e as I}from"./AppCommon-GnCbihN4.js";import{B as H}from"./body-DBRiX_SX.js";import{A as k,I as B}from"./Item-CcyHvCHU.js";import"./stores-CSU0LRQn.js";import"./func-fOTgS_tI.js";import"./baseTransitions-CFYMEabQ.js";import"./writables-CmIZoFf6.js";import"./promise-Cl7lLoyu.js";import"./directive-BpYnEYaR.js";import"./collapse-Cnj9Jvjp.js";import"./cssTransitions-DGCdIdkQ.js";import"./dom-Hs1W5kAC.js";import"./config-B7yeB3UJ.js";import"./Slot-FqUAaK6k.js";function q(n){let e;return{c(){e=$("Simple")},m(t,o){c(t,e,o)},d(t){t&&a(e)}}}function v(n){let e;return{c(){e=$(H)},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function C(n){let e;return{c(){e=I("span"),e.innerHTML="★ <b>Fancy</b> title ★"},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function F(n){let e;return{c(){e=$(H)},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function L(n){let e;return{c(){e=$("Disabled")},m(t,o){c(t,e,o)},d(t){t&&a(e)}}}function M(n){let e;return{c(){e=$(H)},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function O(n){let e,t,o,m,i,p;return e=new B({props:{itemVisible:!0,$$slots:{itemBody:[v],itemHeader:[q]},$$scope:{ctx:n}}}),o=new B({props:{$$slots:{itemBody:[F],itemHeader:[C]},$$scope:{ctx:n}}}),i=new B({props:{itemDisabled:!0,$$slots:{itemBody:[M],itemHeader:[L]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment),t=D(),f(o.$$.fragment),m=D(),f(i.$$.fragment)},m(r,s){u(e,r,s),c(r,t,s),u(o,r,s),c(r,m,s),u(i,r,s),p=!0},p(r,s){const b={};s&1&&(b.$$scope={dirty:s,ctx:r}),e.$set(b);const x={};s&1&&(x.$$scope={dirty:s,ctx:r}),o.$set(x);const w={};s&1&&(w.$$scope={dirty:s,ctx:r}),i.$set(w)},i(r){p||(l(e.$$.fragment,r),l(o.$$.fragment,r),l(i.$$.fragment,r),p=!0)},o(r){_(e.$$.fragment,r),_(o.$$.fragment,r),_(i.$$.fragment,r),p=!1},d(r){r&&(a(t),a(m)),d(e,r),d(o,r),d(i,r)}}}function T(n){let e,t;return e=new k({props:{$$slots:{default:[O]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment)},m(o,m){u(e,o,m),t=!0},p(o,[m]){const i={};m&1&&(i.$$scope={dirty:m,ctx:o}),e.$set(i)},i(o){t||(l(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){d(e,o)}}}class X extends S{constructor(e){super(),y(this,e,null,T,A,{})}}export{X as default};