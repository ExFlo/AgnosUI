import{r as o,j as a}from"./App-DI9ur9y5.js";import{h as n}from"./hashUtil-CQMTOV6I.js";import{P as p}from"./pagination-BDq1dOoH-C-2P2ZdR.js";import{W as m}from"./config-BcuXC-aU.js";import{u as l}from"./stores-B8YEDwZq-DemcncVp.js";import"./directive-CKEccryv-9fW5PEkg.js";import"./slot-Cdz7cIIo.js";import"./index-DYzswQoO.js";import"./directive-Kqp31pwt-DMhW1hGh.js";import"./pageFactory-BMdGxeJT-BeV-ypGc.js";import"./extendWidget-Nhg67Efd.js";import"./pagination-dkNo_5ex-BzccQRa6.js";import"./writables-DoU_XYTX-WNj2ILfP.js";import"./config-CfKS8A0J.js";import"./widget-DAs9_HQ1-VY0qubu8.js";const w=()=>{const i=l(n),r=+(i.split("#")[1]??4),e=o.useCallback(t=>location.hash=`#${i.split("#")[0]}#${t}`,[]),s=o.useCallback(t=>`#${i.split("#")[0]}#${t}`,[]);return a.jsx(a.Fragment,{children:a.jsxs(m,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with hrefs provided for each pagination element:"}),a.jsxs("p",{children:["Page hash: ",a.jsx("small",{children:"#"+i})]}),a.jsx(p,{ariaLabel:"Page navigation with customized hrefs",page:r,boundaryLinks:!0,pageLink:s,onPageChange:e})]})})};export{w as default};
