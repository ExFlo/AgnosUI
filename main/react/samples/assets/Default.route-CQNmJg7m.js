import{r as o,j as e}from"./App-XNADZBio.js";import{P as a}from"./pagination-CZ9CIrix-B0W9txnz.js";import"./index-B1g2MtgY.js";import"./pagination-sJZws_Rh-C31brp9p.js";import"./stores-bzJrTsnV.js";import"./writables-DoU_XYTX-CBor1g6-.js";import"./config-CXwd_Qkq.js";import"./config-CnQZr086.js";import"./widget-DAs9_HQ1-Ds05mpz4.js";import"./stores-B8YEDwZq-DmEjO4KH.js";import"./index-Bh3NuAq4.js";const P=()=>{const[i,n]=o.useState(4),[t,s]=o.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic pagination:"}),e.jsx(a,{page:i,collectionSize:60,onPageChange:n}),e.jsx("h5",{children:"No direction links:"}),e.jsx(a,{page:i,collectionSize:60,directionLinks:!1,onPageChange:n}),e.jsx("h5",{children:"With boundary links:"}),e.jsx(a,{page:i,collectionSize:60,boundaryLinks:!0,onPageChange:n}),e.jsxs("div",{className:"mb-3",children:["Current page: ",e.jsx("span",{id:"defaultPage",children:i})]}),e.jsx("h5",{children:"Disabled pagination:"}),e.jsx(a,{page:t,collectionSize:60,ariaLabel:"Disabled pagination",disabled:!0,onPageChange:s})]})};export{P as default};