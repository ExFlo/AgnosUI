import{j as a}from"./App-DHhP8U0X.js";import{a as b,c as s}from"./index-1FLejirM.js";import{u as c}from"./config-jsbGLsCa.js";import"./pagination-C_gYTMDt-oCwscL9X.js";import"./func-DR0n-ShK-BRtNsj1u.js";import"./stores-CeiBlAbJ.js";import"./writables-DoU_XYTX-Cc045fOB.js";import"./widget-DAs9_HQ1-CbiAEhyH.js";import"./stores-B8YEDwZq-DwZpK94w.js";function u(n){const[i,{actions:{first:t,last:l,next:r,previous:d,select:o}}]=c(b,n,"pagination",{});return a.jsxs("nav",{"aria-label":i.ariaLabel,children:[a.jsxs("div",{className:s("join",i.className),children:[i.boundaryLinks&&a.jsx("button",{className:"join-item btn btn-outline","aria-label":i.ariaFirstLabel,onClick:()=>t(),disabled:i.previousDisabled,"aria-disabled":i.previousDisabled?"true":void 0,tabIndex:i.previousDisabled?-1:void 0,children:a.jsx("span",{"aria-hidden":"true",children:" « "})}),i.directionLinks&&a.jsx("button",{className:"join-item btn btn-outline",disabled:i.previousDisabled,"aria-label":i.ariaPreviousLabel,onClick:()=>d(),tabIndex:i.previousDisabled?-1:void 0,"aria-disabled":i.previousDisabled?"true":void 0,children:a.jsx("span",{"aria-hidden":"true",children:" ‹ "})}),i.pages.map(e=>a.jsxs("button",{className:s("join-item","btn","btn-outline",e===i.page?"btn-active":""),"aria-current":e===i.page?"page":void 0,tabIndex:e===-1||i.disabled?-1:void 0,onClick:e===-1?()=>{}:()=>o(e),disabled:e===-1||i.disabled,children:[e,i.page===e&&a.jsx("span",{className:"sr-only",children:i.activeLabel})]},e)),i.directionLinks&&a.jsx("button",{className:"join-item btn btn-outline",disabled:i.nextDisabled,"aria-label":i.ariaNextLabel,onClick:()=>r(),tabIndex:i.nextDisabled?-1:void 0,"aria-disabled":i.nextDisabled?"true":void 0,children:a.jsx("span",{"aria-hidden":"true",children:" › "})}),i.boundaryLinks&&a.jsx("button",{className:"join-item btn btn-outline","aria-label":i.ariaLastLabel,onClick:()=>l(),disabled:i.nextDisabled,tabIndex:i.nextDisabled?-1:void 0,"aria-disabled":i.nextDisabled?"true":void 0,children:a.jsx("span",{"aria-hidden":"true",children:" » "})})]}),a.jsx("div",{"aria-live":"polite",className:"sr-only",children:`Current page is ${i.page}`})]})}const k=()=>a.jsxs(a.Fragment,{children:[a.jsx("h2",{className:"text-lg mb-2",children:"DaisyUI Example"}),a.jsx(u,{collectionSize:40,boundaryLinks:!0})]});export{k as default};