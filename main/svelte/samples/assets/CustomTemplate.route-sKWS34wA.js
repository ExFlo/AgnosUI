import{S as m,i as p,s as l,c,m as u,t as f,a as g,d as _,k as $,q as i,u as n,g as d,h}from"./AppCommon-Bd7c79Sv.js";/* empty css               */import{R as b}from"./Rating-B11Mrp_w.js";import"./rating-Dx4K8Qid.js";import"./rating-CNQcp5pm-g2x63X3B.js";import"./rating-BR5wD7y2-XTg1dDHw.js";import"./directive-DCYlDznf-2vjIImQS.js";import"./writables-DoU_XYTX-Cg6V7d5t.js";import"./extendWidget-BVNG4-cR.js";import"./Slot--Urk653d.js";import"./config-CvPzCiDZ.js";function C(r){let t;return{c(){t=$("span"),t.textContent="★",i(t,"slot","star"),i(t,"class","star"),n(t,"filled",r[0]===100),n(t,"bad",r[1]<3)},m(e,a){d(e,t,a)},p(e,a){a&1&&n(t,"filled",e[0]===100),a&2&&n(t,"bad",e[1]<3)},d(e){e&&h(t)}}}function q(r){let t,e;return t=new b({props:{className:"rating-custom",rating:7,ariaLabel:"custom rating",$$slots:{star:[C,({fill:a,index:s})=>({0:a,1:s}),({fill:a,index:s})=>(a?1:0)|(s?2:0)]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},m(a,s){u(t,a,s),e=!0},p(a,[s]){const o={};s&7&&(o.$$scope={dirty:s,ctx:a}),t.$set(o)},i(a){e||(f(t.$$.fragment,a),e=!0)},o(a){g(t.$$.fragment,a),e=!1},d(a){_(t,a)}}}class A extends m{constructor(t){super(),p(this,t,null,q,l,{})}}export{A as default};