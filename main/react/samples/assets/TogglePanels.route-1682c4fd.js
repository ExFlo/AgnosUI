import{r as n,j as r}from"./index-ad620b39.js";import{A as m,a as s}from"./accordion-845ccf49.js";import{B as i}from"./body-92e21e3d.js";import"./stores-9a6629d7.js";import"./func-f2d0b1ef.js";import"./baseTransitions-1f4f5c96.js";import"./writables-6bbf4300.js";import"./promise-c1a9d9a6.js";import"./directive-077a84f7.js";import"./collapse-f47ea866.js";import"./cssTransitions-e5a2a4e0.js";import"./dom-cc7faf10.js";import"./slot-52131843.js";import"./config-69b12b2c.js";import"./widget-91343129.js";const C=()=>{const e=n.useRef(),o=n.useRef();return r.jsxs(r.Fragment,{children:[r.jsxs(m,{ref:e,children:[r.jsx(s,{slotItemHeader:"First panel",slotItemBody:i,itemId:"first"}),r.jsx(s,{slotItemHeader:"Second panel",slotItemBody:i,itemId:"second",ref:o})]}),r.jsx("hr",{}),r.jsx("button",{className:"btn btn-sm btn-outline-primary me-2",onClick:()=>{var t;return(t=e.current)==null?void 0:t.toggle("first")},children:"Toggle first"}),r.jsx("button",{className:"btn btn-sm btn-outline-primary me-2",onClick:()=>{var t;return(t=o.current)==null?void 0:t.toggle()},children:"Toggle second"}),r.jsx("button",{className:"btn btn-sm btn-outline-primary me-2",onClick:()=>{var t;return(t=e.current)==null?void 0:t.expandAll()},children:"Expand all"}),r.jsx("button",{className:"btn btn-sm btn-outline-primary me-2",onClick:()=>{var t;return(t=e.current)==null?void 0:t.collapseAll()},children:"Collapse all"})]})};export{C as default};