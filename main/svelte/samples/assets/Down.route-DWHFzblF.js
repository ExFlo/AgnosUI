import{S as g,i as _,s as y,c as i,m as f,t as $,d as m,g as u,l as x,b as l,f as p,k as A}from"./AppCommon-ClvmpOkk.js";import{A as b}from"./Alert-BOf4el6n.js";import{a as S}from"./config-DRK-U59L.js";import"./Slot-Bf2N7XfR.js";import"./alert-DfmDW9HG.js";import"./extendWidget-B_ms86pT.js";import"./baseTransitions-BoBpwsrd.js";import"./writables-DoU_XYTX-BRZiYGy-.js";import"./stores-CYKhcBtR.js";import"./promise-CY2U8bTP-C_xLmk0r.js";import"./directive-CGjTRxRh-BvEKR48r.js";import"./fade-7-Etejps-BF0T2foY.js";import"./simpleClassTransition-B3zKs25b.js";import"./cssTransitions-DnwxVjt8.js";function h(n){let e;return{c(){e=x("Alert not dismissible and of type secondary, respecting the parent config")},m(s,t){l(s,e,t)},d(s){s&&p(e)}}}function v(n){let e,s;return e=new b({props:{$$slots:{default:[h]},$$scope:{ctx:n}}}),{c(){i(e.$$.fragment)},m(t,o){f(e,t,o),s=!0},p(t,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}class C extends g{constructor(e){super(),_(this,e,null,v,y,{})}}function D(n){let e;return{c(){e=x("Alert not dismissible and of type success, type overriden by child config")},m(s,t){l(s,e,t)},d(s){s&&p(e)}}}function k(n){let e,s;return e=new b({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),{c(){i(e.$$.fragment)},m(t,o){f(e,t,o),s=!0},p(t,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}function q(n){return S().set({alert:{type:"success"}}),[]}class W extends g{constructor(e){super(),_(this,e,q,k,y,{})}}function j(n){let e;return{c(){e=x("Alert not dismissible and of type secondary")},m(s,t){l(s,e,t)},d(s){s&&p(e)}}}function z(n){let e,s,t,o,a,d;return e=new b({props:{$$slots:{default:[j]},$$scope:{ctx:n}}}),t=new C({}),a=new W({}),{c(){i(e.$$.fragment),s=A(),i(t.$$.fragment),o=A(),i(a.$$.fragment)},m(r,c){f(e,r,c),l(r,s,c),f(t,r,c),l(r,o,c),f(a,r,c),d=!0},p(r,[c]){const w={};c&1&&(w.$$scope={dirty:c,ctx:r}),e.$set(w)},i(r){d||($(e.$$.fragment,r),$(t.$$.fragment,r),$(a.$$.fragment,r),d=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(a.$$.fragment,r),d=!1},d(r){r&&(p(s),p(o)),u(e,r),u(t,r),u(a,r)}}}function B(n){return S().set({alert:{dismissible:!1,type:"secondary"}}),[]}class T extends g{constructor(e){super(),_(this,e,B,z,y,{})}}export{T as default};
