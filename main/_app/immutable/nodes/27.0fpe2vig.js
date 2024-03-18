function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as O,a as d,g as v,i as h,f as g,n as b,e as x,c as L,q as D}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as A,i as C,c as p,b as u,m as f,t as c,a as _,d as $}from"../chunks/index.DuhoGsBs.js";import{_ as m}from"../chunks/preload-helper.BQ24v_F8.js";import{S as y}from"../chunks/Sample.9cdhRw6K.js";import{S as P}from"../chunks/Section.DvX5gyF_.js";const I={componentName:"pagination",style:"bootstrap",sampleName:"custom",files:{angular:{complementaryUrl:"",entryPoint:"custom.component.ts",files:{"custom.component.ts":()=>m(()=>import("../chunks/custom.route.DN_FG5JC.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}},react:{complementaryUrl:"/app",entryPoint:"custom.tsx",files:{"custom.tsx":()=>m(()=>import("../chunks/Custom.route.DyC9ffNa.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}},svelte:{complementaryUrl:"/app",entryPoint:"custom.svelte",files:{"custom.svelte":()=>m(()=>import("../chunks/Custom.route.owvTzJrd.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default),"CustomPages.svelte":()=>m(()=>import("../chunks/CustomPages.CpKQnVwx.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}}}},R={componentName:"pagination",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"",entryPoint:"default.component.ts",files:{"default.component.ts":()=>m(()=>import("../chunks/default.route.CiwU0AG1.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}},react:{complementaryUrl:"/app",entryPoint:"default.tsx",files:{"default.tsx":()=>m(()=>import("../chunks/Default.route.spMdG6nh.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}},svelte:{complementaryUrl:"/app",entryPoint:"default.svelte",files:{"default.svelte":()=>m(()=>import("../chunks/Default.route.DfDdbT95.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}}}},V={componentName:"pagination",style:"bootstrap",sampleName:"hash",files:{angular:{complementaryUrl:"",entryPoint:"hash.component.ts",files:{"hash.component.ts":()=>m(()=>import("../chunks/hash.route.HMQvZe0u.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}},react:{complementaryUrl:"/app",entryPoint:"hash.tsx",files:{"hash.tsx":()=>m(()=>import("../chunks/Hash.route.CQqohcDW.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}},svelte:{complementaryUrl:"/app",entryPoint:"hash.svelte",files:{"hash.svelte":()=>m(()=>import("../chunks/Hash.route.C8eJV-Uy.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)}}}};function U(s){let t,l;return t=new y({props:{title:"Pagination example",sample:R,height:419}}),{c(){p(t.$$.fragment)},l(n){u(t.$$.fragment,n)},m(n,o){f(t,n,o),l=!0},p:b,i(n){l||(c(t.$$.fragment,n),l=!0)},o(n){_(t.$$.fragment,n),l=!1},d(n){$(t,n)}}}function N(s){let t,l="The pagination widget is fully customizable, from the page numbers to the arrows.",n,o,r;return o=new y({props:{title:"Custom Pagination example",sample:I,height:256}}),{c(){t=x("p"),t.textContent=l,n=d(),p(o.$$.fragment)},l(a){t=L(a,"P",{"data-svelte-h":!0}),D(t)!=="svelte-behp1x"&&(t.textContent=l),n=v(a),u(o.$$.fragment,a)},m(a,e){h(a,t,e),h(a,n,e),f(o,a,e),r=!0},p:b,i(a){r||(c(o.$$.fragment,a),r=!0)},o(a){_(o.$$.fragment,a),r=!1},d(a){a&&(g(t),g(n)),$(o,a)}}}function S(s){let t,l=`The example shows the pagination widget with hrefs provided for each page element.<br/>
		The <i>hrefs</i> customization is based on <b>pageLink</b> input. This receives a custom function which computes the href using the received page
		number and the location hash. On the <b>pageChange</b> output event, the location hash is updated with the <i>href</i> of the current page element.
		This strategy permits navigations in current browser tab, and opening a page in new tabs using the customized href.`,n,o,r;return o=new y({props:{title:"Pagination example with hrefs",sample:V,height:256}}),{c(){t=x("p"),t.innerHTML=l,n=d(),p(o.$$.fragment)},l(a){t=L(a,"P",{"data-svelte-h":!0}),D(t)!=="svelte-1uo392u"&&(t.innerHTML=l),n=v(a),u(o.$$.fragment,a)},m(a,e){h(a,t,e),h(a,n,e),f(o,a,e),r=!0},p:b,i(a){r||(c(o.$$.fragment,a),r=!0)},o(a){_(o.$$.fragment,a),r=!1},d(a){a&&(g(t),g(n)),$(o,a)}}}function z(s){let t,l,n,o,r,a;return t=new P({props:{label:"Basic paginations",level:2,$$slots:{default:[U]},$$scope:{ctx:s}}}),n=new P({props:{label:"Customization",level:2,$$slots:{default:[N]},$$scope:{ctx:s}}}),r=new P({props:{label:"Pagination with hrefs",level:2,$$slots:{default:[S]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment),l=d(),p(n.$$.fragment),o=d(),p(r.$$.fragment)},l(e){u(t.$$.fragment,e),l=v(e),u(n.$$.fragment,e),o=v(e),u(r.$$.fragment,e)},m(e,i){f(t,e,i),h(e,l,i),f(n,e,i),h(e,o,i),f(r,e,i),a=!0},p(e,[i]){const E={};i&1&&(E.$$scope={dirty:i,ctx:e}),t.$set(E);const w={};i&1&&(w.$$scope={dirty:i,ctx:e}),n.$set(w);const T={};i&1&&(T.$$scope={dirty:i,ctx:e}),r.$set(T)},i(e){a||(c(t.$$.fragment,e),c(n.$$.fragment,e),c(r.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),_(n.$$.fragment,e),_(r.$$.fragment,e),a=!1},d(e){e&&(g(l),g(o)),$(t,e),$(n,e),$(r,e)}}}class j extends A{constructor(t){super(),C(this,t,null,z,O,{})}}export{j as component};