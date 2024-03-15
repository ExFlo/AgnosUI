function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as O,a as g,g as E,i as d,f as v,n as h,e as I,c as A,q as L}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as R,i as T,c as i,b as f,m as u,t as c,a as _,d as $}from"../chunks/index.DuhoGsBs.js";import{_ as p}from"../chunks/preload-helper.BQ24v_F8.js";import{S as x}from"../chunks/Sample.DsYEAEWe.js";import{S as P}from"../chunks/Section.DKkQgSL7.js";const V={componentName:"modal",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"",entryPoint:"default.component.ts",files:{"default.component.ts":()=>p(()=>import("../chunks/default.route.CoMWMN1K.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}},react:{complementaryUrl:"/app",entryPoint:"default.tsx",files:{"default.tsx":()=>p(()=>import("../chunks/Default.route.BlIOFDAg.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}},svelte:{complementaryUrl:"/app",entryPoint:"default.svelte",files:{"default.svelte":()=>p(()=>import("../chunks/Default.route.r4e_xQcu.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}}}},b={componentName:"modal",style:"bootstrap",sampleName:"component",files:{angular:{complementaryUrl:"",entryPoint:"component.component.ts",files:{"component.component.ts":()=>p(()=>import("../chunks/component.route.DSNQn_44.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default),"custom-content.component.ts":()=>p(()=>import("../chunks/custom-content.component.BBs1t8pN.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}},react:{complementaryUrl:"/app",entryPoint:"component.tsx",files:{"component.tsx":()=>p(()=>import("../chunks/Component.route.Bu-Bbk4e.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}},svelte:{complementaryUrl:"/app",entryPoint:"component.svelte",files:{"component.svelte":()=>p(()=>import("../chunks/Component.route.D6EB5kFz.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default),"ComponentModal.svelte":()=>p(()=>import("../chunks/ComponentModal.oNrfSh-C.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}}}},C={componentName:"modal",style:"bootstrap",sampleName:"stack",files:{angular:{complementaryUrl:"",entryPoint:"stack.component.ts",files:{"stack.component.ts":()=>p(()=>import("../chunks/stack.route.Cvvs6yM2.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}},react:{complementaryUrl:"/app",entryPoint:"stack.tsx",files:{"stack.tsx":()=>p(()=>import("../chunks/Stack.route.C7-tIQ_e.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}},svelte:{complementaryUrl:"/app",entryPoint:"stack.svelte",files:{"stack.svelte":()=>p(()=>import("../chunks/Stack.route.B-ce6Uqs.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default),"StackModal.svelte":()=>p(()=>import("../chunks/StackModal.DVxWreEs.js"),__vite__mapDeps([]),import.meta.url).then(n=>n.default)}}}};function U(n){let t,s;return t=new x({props:{title:"Default example",sample:V,height:300,noresize:!0}}),{c(){i(t.$$.fragment)},l(a){f(t.$$.fragment,a)},m(a,l){u(t,a,l),s=!0},p:h,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){_(t.$$.fragment,a),s=!1},d(a){$(t,a)}}}function S(n){let t,s="You may use an existing component as content.",a,l,r;return l=new x({props:{title:"Component as content example",sample:b,height:300,noresize:!0}}),{c(){t=I("p"),t.textContent=s,a=g(),i(l.$$.fragment)},l(o){t=A(o,"P",{"data-svelte-h":!0}),L(t)!=="svelte-1cfx4nr"&&(t.textContent=s),a=E(o),f(l.$$.fragment,o)},m(o,e){d(o,t,e),d(o,a,e),u(l,o,e),r=!0},p:h,i(o){r||(c(l.$$.fragment,o),r=!0)},o(o){_(l.$$.fragment,o),r=!1},d(o){o&&(v(t),v(a)),$(l,o)}}}function N(n){let t,s="It is possible to stack modals on top of each other. Note that for better User Experience, stacking modals should be avoided as much as possible.",a,l,r;return l=new x({props:{title:"Modal stack example",sample:C,height:400,noresize:!0}}),{c(){t=I("p"),t.textContent=s,a=g(),i(l.$$.fragment)},l(o){t=A(o,"P",{"data-svelte-h":!0}),L(t)!=="svelte-sfrmgh"&&(t.textContent=s),a=E(o),f(l.$$.fragment,o)},m(o,e){d(o,t,e),d(o,a,e),u(l,o,e),r=!0},p:h,i(o){r||(c(l.$$.fragment,o),r=!0)},o(o){_(l.$$.fragment,o),r=!1},d(o){o&&(v(t),v(a)),$(l,o)}}}function w(n){let t,s,a,l,r,o;return t=new P({props:{label:"Default modal",level:2,$$slots:{default:[U]},$$scope:{ctx:n}}}),a=new P({props:{label:"Component as content",level:2,$$slots:{default:[S]},$$scope:{ctx:n}}}),r=new P({props:{label:"Modal stack",level:2,$$slots:{default:[N]},$$scope:{ctx:n}}}),{c(){i(t.$$.fragment),s=g(),i(a.$$.fragment),l=g(),i(r.$$.fragment)},l(e){f(t.$$.fragment,e),s=E(e),f(a.$$.fragment,e),l=E(e),f(r.$$.fragment,e)},m(e,m){u(t,e,m),d(e,s,m),u(a,e,m),d(e,l,m),u(r,e,m),o=!0},p(e,[m]){const y={};m&1&&(y.$$scope={dirty:m,ctx:e}),t.$set(y);const D={};m&1&&(D.$$scope={dirty:m,ctx:e}),a.$set(D);const k={};m&1&&(k.$$scope={dirty:m,ctx:e}),r.$set(k)},i(e){o||(c(t.$$.fragment,e),c(a.$$.fragment,e),c(r.$$.fragment,e),o=!0)},o(e){_(t.$$.fragment,e),_(a.$$.fragment,e),_(r.$$.fragment,e),o=!1},d(e){e&&(v(s),v(l)),$(t,e),$(a,e),$(r,e)}}}class B extends R{constructor(t){super(),T(this,t,null,w,O,{})}}export{B as component};
