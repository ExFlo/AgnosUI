import{s as O,e as A,a as b,c as T,q as L,g as E,i as c,n as y,f as u}from"../chunks/scheduler.DgwQYuXV.js";import{S as V,i as U,c as f,b as _,m as $,t as d,a as g,e as v}from"../chunks/index.cY-xcbHs.js";import{_ as l}from"../chunks/preload-helper.CmsKOCeN.js";import{S as w}from"../chunks/Sample.-UJDqPOx.js";import{S as P}from"../chunks/Section.B59b8yot.js";const N={componentName:"toast",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"default.component.ts",files:{"default.component.ts":()=>l(()=>import("../chunks/default.route.DOeOIsms.js"),[],import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"default.tsx",files:{"default.tsx":()=>l(()=>import("../chunks/Default.route.CXC2obnZ.js"),[],import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"default.svelte",files:{"default.svelte":()=>l(()=>import("../chunks/Default.route.DTRQ_nox.js"),[],import.meta.url).then(a=>a.default)}}}},S={componentName:"toast",style:"bootstrap",sampleName:"dynamic",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"dynamic.component.ts",files:{"dynamic.component.ts":()=>l(()=>import("../chunks/dynamic.route.Bb8eACBe.js"),[],import.meta.url).then(a=>a.default),"toast-positions.enum.ts":()=>l(()=>import("../chunks/toast-positions.enum.1xcHjqpd.js"),[],import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"dynamic.tsx",files:{"dynamic.tsx":()=>l(()=>import("../chunks/Dynamic.route.DC0i5qr8.js"),[],import.meta.url).then(a=>a.default),"toast-positions.enum.ts":()=>l(()=>import("../chunks/toast-positions.enum.1xcHjqpd.js"),[],import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"dynamic.svelte",files:{"dynamic.svelte":()=>l(()=>import("../chunks/Dynamic.route.Cb6fkyzL.js"),[],import.meta.url).then(a=>a.default),"toast-positions.enum.ts":()=>l(()=>import("../chunks/toast-positions.enum.1xcHjqpd.js"),[],import.meta.url).then(a=>a.default)}}}},H={componentName:"toast",style:"bootstrap",sampleName:"action",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"action.component.ts",files:{"action.component.ts":()=>l(()=>import("../chunks/action.route.DwsGo1S5.js"),[],import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"action.tsx",files:{"action.tsx":()=>l(()=>import("../chunks/Action.route.CtyxMKO1.js"),[],import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"action.svelte",files:{"action.svelte":()=>l(()=>import("../chunks/Action.route.D0PjZAC5.js"),[],import.meta.url).then(a=>a.default),"ActionStructure.svelte":()=>l(()=>import("../chunks/ActionStructure.D6g9Hiw0.js"),[],import.meta.url).then(a=>a.default)}}}};function M(a){let e,n=`Toasts are a notification for a user when something changes, in order to allow assistive technologies to announce new information automatically the
	toasts should be wrapped into <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank">aria-live region</a>
	along with <code>aria-atomic=&quot;true&quot;</code> to ensure that the whole toast is read and not only parts of it.`,t,s,m="<strong>Note:</strong> the aria-live region won&#39;t be announced if you add it dynamically to the markup. Ensure that it is present before the toast generation.",p,i,h=`When <code>autoHide: false</code> the close button must be added, so that the toast can be dismissed.
	<br/> <strong>Note:</strong> set <code>dismissible: true</code> to have the close button automatically.`;return{c(){e=A("p"),e.innerHTML=n,t=b(),s=A("p"),s.innerHTML=m,p=b(),i=A("p"),i.innerHTML=h},l(o){e=T(o,"P",{"data-svelte-h":!0}),L(e)!=="svelte-go024x"&&(e.innerHTML=n),t=E(o),s=T(o,"P",{"data-svelte-h":!0}),L(s)!=="svelte-o195bv"&&(s.innerHTML=m),p=E(o),i=T(o,"P",{"data-svelte-h":!0}),L(i)!=="svelte-k74wk8"&&(i.innerHTML=h)},m(o,r){c(o,e,r),c(o,t,r),c(o,s,r),c(o,p,r),c(o,i,r)},p:y,i:y,o:y,d(o){o&&(u(e),u(t),u(s),u(p),u(i))}}}class k extends V{constructor(e){super(),U(this,e,null,M,O,{})}}function q(a){let e,n;return e=new w({props:{title:"Generic example",sample:N,height:315}}),{c(){f(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},p:y,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function C(a){let e,n;return e=new w({props:{title:"Dynamic example",sample:S,height:600}}),{c(){f(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},p:y,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function W(a){let e,n;return e=new w({props:{title:"Toast with action",sample:H,height:215}}),{c(){f(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},p:y,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function z(a){let e,n;return e=new k({}),{c(){f(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function B(a){let e,n,t,s,m,p,i,h;return e=new P({props:{label:"Basic toast",id:"default",level:2,$$slots:{default:[q]},$$scope:{ctx:a}}}),t=new P({props:{label:"Dynamic toast with stacking",id:"dynamic",level:2,$$slots:{default:[C]},$$scope:{ctx:a}}}),m=new P({props:{label:"Toast with action",id:"action",level:2,$$slots:{default:[W]},$$scope:{ctx:a}}}),i=new P({props:{label:"Accessibility",id:"accessibility",level:2,$$slots:{default:[z]},$$scope:{ctx:a}}}),{c(){f(e.$$.fragment),n=b(),f(t.$$.fragment),s=b(),f(m.$$.fragment),p=b(),f(i.$$.fragment)},l(o){_(e.$$.fragment,o),n=E(o),_(t.$$.fragment,o),s=E(o),_(m.$$.fragment,o),p=E(o),_(i.$$.fragment,o)},m(o,r){$(e,o,r),c(o,n,r),$(t,o,r),c(o,s,r),$(m,o,r),c(o,p,r),$(i,o,r),h=!0},p(o,[r]){const D={};r&1&&(D.$$scope={dirty:r,ctx:o}),e.$set(D);const R={};r&1&&(R.$$scope={dirty:r,ctx:o}),t.$set(R);const I={};r&1&&(I.$$scope={dirty:r,ctx:o}),m.$set(I);const x={};r&1&&(x.$$scope={dirty:r,ctx:o}),i.$set(x)},i(o){h||(d(e.$$.fragment,o),d(t.$$.fragment,o),d(m.$$.fragment,o),d(i.$$.fragment,o),h=!0)},o(o){g(e.$$.fragment,o),g(t.$$.fragment,o),g(m.$$.fragment,o),g(i.$$.fragment,o),h=!1},d(o){o&&(u(n),u(s),u(p)),v(e,o),v(t,o),v(m,o),v(i,o)}}}class Q extends V{constructor(e){super(),U(this,e,null,B,O,{})}}export{Q as component};