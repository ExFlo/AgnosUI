import{r as e,j as t}from"./index-ad620b39.js";import{S as f}from"./select-afced10d.js";import{W as p}from"./config-69b12b2c.js";import"./func-f2d0b1ef.js";import"./floatingUI-48655b05.js";import"./directive-077a84f7.js";import"./promise-c1a9d9a6.js";import"./stores-9a6629d7.js";import"./focustrack-0b765310.js";import"./slot-52131843.js";import"./widget-91343129.js";function h(){const s=location.hash.split("?")[1];return new URL(s?`?${s}`:"",location.href).searchParams.get("filterText")??""}const k=()=>{const[s]=e.useState(["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"]),[i,o]=e.useState(h),a=e.useCallback(r=>o(r.target.value),[]),[n,c]=e.useState([]),[m,l]=e.useState(void 0),x=e.useCallback(r=>{l(r),c(r?s.filter(u=>u.toLowerCase().startsWith(r)):s.slice(0,10))},[]);return t.jsxs(p,{select:{filterText:i},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(f,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:i,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>l(void 0),children:"Reset widget filterText"})]})]})};export{k as default};