import{a as c,t as d}from"../chunks/disclose-version.DO4KS_Xh.js";import{R as _,f,s as l}from"../chunks/runtime.BY4A4uhu.js";import{_ as e}from"../chunks/preload-helper.CmsKOCeN.js";import{S as s}from"../chunks/Sample.tjX_kEjH.js";import{S as i}from"../chunks/Section.DcHnqSLW.js";const h={componentName:"toast",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"default.component.ts",files:{"default.component.ts":()=>e(()=>import("../chunks/default.route.DOeOIsms.js"),[],import.meta.url).then(t=>t.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"default.tsx",files:{"default.tsx":()=>e(()=>import("../chunks/Default.route.CXC2obnZ.js"),[],import.meta.url).then(t=>t.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"default.svelte",files:{"default.svelte":()=>e(()=>import("../chunks/Default.route._s_7Xqmm.js"),[],import.meta.url).then(t=>t.default)}}}},v={componentName:"toast",style:"bootstrap",sampleName:"dynamic",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"dynamic.component.ts",files:{"dynamic.component.ts":()=>e(()=>import("../chunks/dynamic.route.Bb8eACBe.js"),[],import.meta.url).then(t=>t.default),"toast-positions.enum.ts":()=>e(()=>import("../chunks/toast-positions.enum.1xcHjqpd.js"),[],import.meta.url).then(t=>t.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"dynamic.tsx",files:{"dynamic.tsx":()=>e(()=>import("../chunks/Dynamic.route.DC0i5qr8.js"),[],import.meta.url).then(t=>t.default),"toast-positions.enum.ts":()=>e(()=>import("../chunks/toast-positions.enum.1xcHjqpd.js"),[],import.meta.url).then(t=>t.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"dynamic.svelte",files:{"dynamic.svelte":()=>e(()=>import("../chunks/Dynamic.route.BWDFtuNM.js"),[],import.meta.url).then(t=>t.default),"toast-positions.enum.ts":()=>e(()=>import("../chunks/toast-positions.enum.1xcHjqpd.js"),[],import.meta.url).then(t=>t.default)}}}},y={componentName:"toast",style:"bootstrap",sampleName:"action",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"action.component.ts",files:{"action.component.ts":()=>e(()=>import("../chunks/action.route.DwsGo1S5.js"),[],import.meta.url).then(t=>t.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"action.tsx",files:{"action.tsx":()=>e(()=>import("../chunks/Action.route.CtyxMKO1.js"),[],import.meta.url).then(t=>t.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"action.svelte",files:{"action.svelte":()=>e(()=>import("../chunks/Action.route.DZUnF1CW.js"),[],import.meta.url).then(t=>t.default),"ActionStructure.svelte":()=>e(()=>import("../chunks/ActionStructure.XGzhOTF0.js"),[],import.meta.url).then(t=>t.default)}}}};var b=d(`<p>Toasts are a notification for a user when something changes, in order to allow assistive technologies to announce new information automatically the
	toasts should be wrapped into <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank">aria-live region</a> along with <code>aria-atomic="true"</code> to ensure that the whole toast is read and not only parts of it.</p> <p><strong>Note:</strong> the aria-live region won't be announced if you add it dynamically to the markup. Ensure that it is present before the toast generation.</p> <p>When <code>autoHide: false</code> the close button must be added, so that the toast can be dismissed. <br> <strong>Note:</strong> set <code>dismissible: true</code> to have the close button automatically.</p>`,1);function E(t){var a=b();_(4),c(t,a)}var P=d("<!> <!> <!> <!>",1);function T(t){var a=P(),n=f(a);i(n,{label:"Basic toast",id:"default",level:2,children:(o,r)=>{s(o,{title:"Generic example",sample:h,height:315})},$$slots:{default:!0}});var m=l(n,2);i(m,{label:"Dynamic toast with stacking",id:"dynamic",level:2,children:(o,r)=>{s(o,{title:"Dynamic example",sample:v,height:600})},$$slots:{default:!0}});var p=l(m,2);i(p,{label:"Toast with action",id:"action",level:2,children:(o,r)=>{s(o,{title:"Toast with action",sample:y,height:215})},$$slots:{default:!0}});var u=l(p,2);i(u,{label:"Accessibility",id:"accessibility",level:2,children:(o,r)=>{E(o)},$$slots:{default:!0}}),c(t,a)}export{T as component};