import{r as e,j as t}from"./index-pzBCvWhL.js";import{S as p}from"./select-BT31VhtC.js";import{W as f}from"./config-kCetFwoV.js";import"./func-BRtNsj1u.js";import"./floatingUI-BHOohxXM.js";import"./directive-CwFE7IJ9.js";import"./promise-DMV7Hn63.js";import"./stores-DMMxm4b0.js";import"./focustrack-BpZzj6e9.js";import"./navManager-Dn--TeAR.js";import"./dom-Hs1W5kAC.js";import"./widget-CvpsmUpg.js";function h(){const s=location.hash.split("?")[1];return new URL(s?`?${s}`:"",location.href).searchParams.get("filterText")??""}const w=()=>{const[s]=e.useState(["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"]),[i,l]=e.useState(h),a=e.useCallback(r=>l(r.target.value),[]),[n,c]=e.useState([]),[m,o]=e.useState(void 0),x=e.useCallback(r=>{o(r),c(r?s.filter(u=>u.toLowerCase().startsWith(r)):s.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:i},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(p,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:i,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{w as default};