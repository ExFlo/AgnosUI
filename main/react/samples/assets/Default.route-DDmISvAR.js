import{j as s,r as o}from"./App-DI9ur9y5.js";import{u as a}from"./config-C0ibonqk.js";import{u as l}from"./directive-Kqp31pwt-Z1XipxII.js";import{S as c}from"./close_icon-DR10euea.js";import{c as m}from"./alert-Dr0Q8aY8-iXA30lIP.js";import{c as d}from"./simpleClassTransition-DM5VzvLh.js";import"./directive-CKEccryv-B1ye-Yy0.js";import"./widget-DAs9_HQ1-7RGw_aKa.js";import"./stores-B8YEDwZq-rhLwL-y_.js";import"./common-B7Hzs2vg-B_-881K7.js";import"./baseTransitions-DZKc2Zuo.js";import"./writables-DoU_XYTX-CPJYVIsx.js";import"./promise-CY2U8bTP-C0h_X4yL.js";import"./cssTransitions-Pg2qqAzo.js";const p=({widget:t,state:e,children:r})=>s.jsxs("div",{role:"alert",className:`flex alert ${e.className}`,...l(t.directives.transitionDirective),children:[r,e.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost ms-auto",onClick:t.api.close,"aria-label":`${e.ariaCloseButtonLabel}`,children:s.jsx(c,{})})]}),i=t=>{const e=d({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),[r,n]=a(m,t,"alert",{transition:e});return s.jsx(s.Fragment,{children:!r.hidden&&s.jsx(p,{widget:n,state:r,children:t.children})})},D=()=>{const[t,e]=o.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>e(!0),children:"Reset Alert"}),s.jsxs("div",{className:"flex flex-col gap-3 mt-3",children:[s.jsxs(i,{className:"alert-success",visible:t,onVisibleChange:e,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is a success!"})]}),s.jsxs(i,{className:"alert-error",dismissible:!1,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is an error!"})]})]})]})};export{D as default};