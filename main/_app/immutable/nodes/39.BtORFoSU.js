import{s as V,a as P,g as h,i as g,f as b,n as y,t as x,d as S,e as I,c as L,q as O}from"../chunks/scheduler.DDKLfDno.js";import{S as U,i as w,c as u,b as f,m as _,t as c,a as $,e as d}from"../chunks/index.DMnRV_Lo.js";import{S as E}from"../chunks/Section.BsMgGFDV.js";import{S as C}from"../chunks/Sample.B8wgb8xW.js";import{_ as i}from"../chunks/preload-helper.Dch09mLN.js";const z={componentName:"progressbar",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"default.component.ts",files:{"default.component.ts":()=>i(()=>import("../chunks/default.route.CHCsLurP.js"),[],import.meta.url).then(e=>e.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"default.tsx",files:{"default.tsx":()=>i(()=>import("../chunks/Default.route.AFWNKYkG.js"),[],import.meta.url).then(e=>e.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"default.svelte",files:{"default.svelte":()=>i(()=>import("../chunks/Default.route.BBlOln2E.js"),[],import.meta.url).then(e=>e.default)}}}},N={componentName:"progressbar",style:"bootstrap",sampleName:"simpleCustom",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"simpleCustom.component.ts",files:{"simpleCustom.component.ts":()=>i(()=>import("../chunks/simpleCustom.route.Dlj0wgLu.js"),[],import.meta.url).then(e=>e.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"simpleCustom.tsx",files:{"simpleCustom.tsx":()=>i(()=>import("../chunks/SimpleCustom.route.BorBmHKs.js"),[],import.meta.url).then(e=>e.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"simpleCustom.svelte",files:{"simpleCustom.svelte":()=>i(()=>import("../chunks/SimpleCustom.route.BRSdbk7H.js"),[],import.meta.url).then(e=>e.default)}}}},k={componentName:"progressbar",style:"bootstrap",sampleName:"fullCustom",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"fullCustom.component.ts",files:{"fullCustom.component.ts":()=>i(()=>import("../chunks/fullCustom.route.BAV-Yzvj.js"),[],import.meta.url).then(e=>e.default),"cofee-progressbar.component.ts":()=>i(()=>import("../chunks/cofee-progressbar.component.B3G1Jn-K.js"),[],import.meta.url).then(e=>e.default),"custom.scss":()=>i(()=>import("../chunks/custom.BFJtSIIt.js"),[],import.meta.url).then(e=>e.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"fullCustom.tsx",files:{"fullCustom.tsx":()=>i(()=>import("../chunks/FullCustom.route.D1ZR4wqg.js"),[],import.meta.url).then(e=>e.default),"custom.scss":()=>i(()=>import("../chunks/custom.BFJtSIIt.js"),[],import.meta.url).then(e=>e.default),"Coffee.tsx":()=>i(()=>import("../chunks/Coffee.DUFDwaQS.js"),[],import.meta.url).then(e=>e.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"fullCustom.svelte",files:{"fullCustom.svelte":()=>i(()=>import("../chunks/FullCustom.route.DBIrq-bp.js"),[],import.meta.url).then(e=>e.default),"Coffee.svelte":()=>i(()=>import("../chunks/Coffee.CBluIjmo.js"),[],import.meta.url).then(e=>e.default),"custom.scss":()=>i(()=>import("../chunks/custom.BFJtSIIt.js"),[],import.meta.url).then(e=>e.default)}}}};function q(e){let t,l;return t=new C({props:{title:"Progressbar example",sample:z,height:147}}),{c(){u(t.$$.fragment)},l(o){f(t.$$.fragment,o)},m(o,r){_(t,o,r),l=!0},p:y,i(o){l||(c(t.$$.fragment,o),l=!0)},o(o){$(t.$$.fragment,o),l=!1},d(o){d(t,o)}}}function F(e){let t,l,o;return l=new C({props:{title:"Simple customization",sample:N,height:187}}),{c(){t=x(`The label and display of the progressbar can be customized.
	`),u(l.$$.fragment)},l(r){t=S(r,`The label and display of the progressbar can be customized.
	`),f(l.$$.fragment,r)},m(r,m){g(r,t,m),_(l,r,m),o=!0},p:y,i(r){o||(c(l.$$.fragment,r),o=!0)},o(r){$(l.$$.fragment,r),o=!1},d(r){r&&b(t),d(l,r)}}}function H(e){let t,l="The display can be fully customized while keeping the widget's functionality and accessibility.",o,r,m;return r=new C({props:{title:"Customized progressbar",sample:k,height:335}}),{c(){t=I("p"),t.textContent=l,o=P(),u(r.$$.fragment)},l(a){t=L(a,"P",{"data-svelte-h":!0}),O(t)!=="svelte-1kz5d16"&&(t.textContent=l),o=h(a),f(r.$$.fragment,a)},m(a,p){g(a,t,p),g(a,o,p),_(r,a,p),m=!0},p:y,i(a){m||(c(r.$$.fragment,a),m=!0)},o(a){$(r.$$.fragment,a),m=!1},d(a){a&&(b(t),b(o)),d(r,a)}}}function M(e){let t,l='The progressbar component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role" target="_blank">ARIA progressbar role</a>.';return{c(){t=I("p"),t.innerHTML=l},l(o){t=L(o,"P",{"data-svelte-h":!0}),O(t)!=="svelte-1t3b2v5"&&(t.innerHTML=l)},m(o,r){g(o,t,r)},p:y,d(o){o&&b(t)}}}function W(e){let t,l,o,r,m,a,p,v;return t=new E({props:{label:"Default progressbar",level:2,$$slots:{default:[q]},$$scope:{ctx:e}}}),o=new E({props:{label:"Simple customization",level:2,$$slots:{default:[F]},$$scope:{ctx:e}}}),m=new E({props:{label:"Fully customized",level:2,$$slots:{default:[H]},$$scope:{ctx:e}}}),p=new E({props:{label:"Accessibility",level:2,$$slots:{default:[M]},$$scope:{ctx:e}}}),{c(){u(t.$$.fragment),l=P(),u(o.$$.fragment),r=P(),u(m.$$.fragment),a=P(),u(p.$$.fragment)},l(s){f(t.$$.fragment,s),l=h(s),f(o.$$.fragment,s),r=h(s),f(m.$$.fragment,s),a=h(s),f(p.$$.fragment,s)},m(s,n){_(t,s,n),g(s,l,n),_(o,s,n),g(s,r,n),_(m,s,n),g(s,a,n),_(p,s,n),v=!0},p(s,[n]){const A={};n&1&&(A.$$scope={dirty:n,ctx:s}),t.$set(A);const T={};n&1&&(T.$$scope={dirty:n,ctx:s}),o.$set(T);const R={};n&1&&(R.$$scope={dirty:n,ctx:s}),m.$set(R);const D={};n&1&&(D.$$scope={dirty:n,ctx:s}),p.$set(D)},i(s){v||(c(t.$$.fragment,s),c(o.$$.fragment,s),c(m.$$.fragment,s),c(p.$$.fragment,s),v=!0)},o(s){$(t.$$.fragment,s),$(o.$$.fragment,s),$(m.$$.fragment,s),$(p.$$.fragment,s),v=!1},d(s){s&&(b(l),b(r),b(a)),d(t,s),d(o,s),d(m,s),d(p,s)}}}class Q extends U{constructor(t){super(),w(this,t,null,W,V,{})}}export{Q as component};