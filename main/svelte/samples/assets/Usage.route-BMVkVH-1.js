import{S as w,i as x,s as h,c as f,f as y,m as $,g as p,t as u,a as c,h as m,d,l as v}from"./AppCommon-EGvQgKwz.js";import{A as _}from"./Alert-D7gsp_Gr.js";import"./Slot-EOGLaSNM.js";import"./config-rI9A-K5E.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./alert-8ilqhLst-C0vWFrLC.js";import"./common-BCEqowKw-BDxW3zpb.js";import"./baseTransitions-o4G_vBWq.js";import"./writables-DoU_XYTX-esNIv65O.js";import"./promise-CY2U8bTP-CDYUm4pL.js";import"./extendWidget-8zXnCiQz.js";import"./fade-uOobJKgw-RbFJ57K3.js";import"./simpleClassTransition-CTFkEAKQ.js";import"./cssTransitions-DczX0sNo.js";function A(a){let t;return{c(){t=v("Label provided by slot")},m(s,r){p(s,t,r)},d(s){s&&m(t)}}}function D(a){let t;return{c(){t=v("This content is ignored.")},m(s,r){p(s,t,r)},d(s){s&&m(t)}}}function L(a){let t,s,r,l,n,i;return t=new _({props:{type:"primary",dismissible:!1,$$slots:{default:[A]},$$scope:{ctx:a}}}),r=new _({props:{type:"secondary",dismissible:!1,slotDefault:"Label provided by property"}}),n=new _({props:{type:"info",dismissible:!1,slotDefault:"When both prop and slot are provided, the prop's content will take precedence.",$$slots:{default:[D]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment),s=y(),f(r.$$.fragment),l=y(),f(n.$$.fragment)},m(e,o){$(t,e,o),p(e,s,o),$(r,e,o),p(e,l,o),$(n,e,o),i=!0},p(e,[o]){const b={};o&1&&(b.$$scope={dirty:o,ctx:e}),t.$set(b);const g={};o&1&&(g.$$scope={dirty:o,ctx:e}),n.$set(g)},i(e){i||(u(t.$$.fragment,e),u(r.$$.fragment,e),u(n.$$.fragment,e),i=!0)},o(e){c(t.$$.fragment,e),c(r.$$.fragment,e),c(n.$$.fragment,e),i=!1},d(e){e&&(m(s),m(l)),d(t,e),d(r,e),d(n,e)}}}class I extends w{constructor(t){super(),x(this,t,null,L,h,{})}}export{I as default};