import{S as u,i as _,s as c,l as f,g,y as d,a as i,x as $,z as h,t as p,h as k,b,A as y,c as v,m as C,B as P,C as S,d as j}from"./index-31ef738a.js";import{P as q}from"./Pagination-350d8ecc.js";import{h as w}from"./utils-1d28cef0.js";import"./index-bc5867f8.js";import"./config-5661a0ad.js";import"./directive-8b598cc7.js";import"./stores-4d692201.js";import"./baseTransitions-38fe2092.js";import"./writables-5db1063d.js";import"./promise-2d771008.js";import"./fade-d3f9ac74.js";import"./dom-cc7faf10.js";import"./rating-ae212278.js";import"./floatingUI-fd90e6f5.js";import"./focustrack-30fdc4bb.js";function m(s){let e,r;const n=[s[0]];let o={};for(let t=0;t<n.length;t+=1)o=y(o,n[t]);return e=new q({props:o}),{c(){v(e.$$.fragment)},m(t,a){C(e,t,a),r=!0},p(t,a){const l=a&1?P(n,[S(t[0])]):{};e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){i(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function z(s){let e=s[0],r,n,o=m(s);return{c(){o.c(),r=f()},m(t,a){o.m(t,a),g(t,r,a),n=!0},p(t,[a]){a&1&&c(e,e=t[0])?(d(),i(o,1,1,$),h(),o=m(t),o.c(),p(o,1),o.m(r.parentNode,r)):o.p(t,a)},i(t){n||(p(o),n=!0)},o(t){i(o),n=!1},d(t){t&&k(r),o.d(t)}}}function A(s,e,r){let n;const o=w("pagination");return b(s,o,t=>r(0,n=t)),[n,o]}class R extends u{constructor(e){super(),_(this,e,A,z,c,{})}}export{R as default};