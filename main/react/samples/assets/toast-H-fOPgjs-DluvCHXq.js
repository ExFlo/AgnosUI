import{f as e,p as u,o as a}from"./directive-CKEccryv-9fW5PEkg.js";import{e as l}from"./extendWidget-Nhg67Efd.js";import{t as n,h as m}from"./writables-DoU_XYTX-WNj2ILfP.js";import{c as d}from"./common-D-Y8i9g2-Bv751sxG.js";const p={autoHide:!0,delay:5e3},f={autoHide:n,delay:m(0,1/0,{strict:!0})};function $(s){let o;const t=l(d,p,f)(s),r=e(()=>{clearTimeout(o),t.stores.autoHide$()&&(o=setTimeout(()=>t.api.close(),t.stores.delay$()))}),i=a(()=>({attributes:{role:"alert","aria-atomic":"true",class:e(()=>t.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),c=a(()=>({attributes:{type:"button","aria-label":e(()=>t.stores.ariaCloseButtonLabel$())},events:{click:t.api.close}}));return{...t,directives:{...t.directives,autoHideDirective:u(r),bodyDirective:i,closeButtonDirective:c}}}export{$ as c};