import{s as i,c,u as m,g as u,d as f}from"../chunks/scheduler.2ed3e821.js";import{S as _,i as $,r as g,u as d,v as h,d as r,t as p,w as y}from"../chunks/index.6f5125a4.js";import{C as b}from"../chunks/ComponentPage.64bdc6cb.js";function k(s){let o;const n=s[1].default,t=c(n,s,s[2],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,a){t&&t.m(e,a),o=!0},p(e,a){t&&t.p&&(!o||a&4)&&m(t,n,e,e[2],o?f(n,e[2],a,null):u(e[2]),null)},i(e){o||(r(t,e),o=!0)},o(e){p(t,e),o=!1},d(e){t&&t.d(e)}}}function C(s){let o,n;return o=new b({props:{componentName:v,tabs:s[0],$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){g(o.$$.fragment)},l(t){d(o.$$.fragment,t)},m(t,e){h(o,t,e),n=!0},p(t,[e]){const a={};e&4&&(a.$$scope={dirty:e,ctx:t}),o.$set(a)},i(t){n||(r(o.$$.fragment,t),n=!0)},o(t){p(o.$$.fragment,t),n=!1},d(t){y(o,t)}}}const v="Alert";function w(s,o,n){let{$$slots:t={},$$scope:e}=o;const a=[{title:"Examples",key:"examples",path:"/components/alert/examples"},{title:"Api",key:"api",path:"/components/alert/api"},{title:"Playground",key:"playground",path:'/components/alert/playground#{"props":{"slotDefault":"This is an alert"}}'}];return s.$$set=l=>{"$$scope"in l&&n(2,e=l.$$scope)},[a,t,e]}class q extends _{constructor(o){super(),$(this,o,w,C,i,{})}}export{q as component};