import{r as o,j as a}from"./App-DI9ur9y5.js";import{P as r}from"./pagination-CLYSUqpN-DAnxhWE2.js";import{W as u}from"./config-aYUxiFUz.js";import"./slot-Cdz7cIIo.js";import"./index-DYzswQoO.js";import"./directive-DNXkB1Wc-BT0zWdco.js";import"./directive-CKEccryv-BXYvEkQs.js";import"./pageFactory-BMdGxeJT-B82mjm5r.js";import"./extendWidget-BdAld2Yx.js";import"./pagination-DQTcHLgn-D7sw6-h-.js";import"./writables-DoU_XYTX-CmGvgT4E.js";import"./config-nOnPRMsC.js";import"./stores-B8YEDwZq-BE6uiFF1.js";const d=/[^0-9]/g;function x({state:e,api:n}){const[p,i]=o.useState(e.page.toString());function l(t){t.key==="Enter"&&s(t)}function s(t){const c=t.currentTarget.value,m=parseInt(c);n.select(m),i(e.page.toString())}function g(t){i(t.currentTarget.value.replace(d,""))}return o.useEffect(()=>{i(e.page.toString())},[e.page]),e.pages.length&&a.jsx("li",{className:"au-custom-pages-item",children:a.jsxs("div",{className:"mb-3 d-flex flex-nowrap px-2",children:[a.jsx("label",{id:"paginationInputLabel",htmlFor:"paginationInput",className:"col-form-label me-2 ms-1",children:"Page"}),a.jsx("input",{value:p,type:"text",inputMode:"numeric",pattern:"[0-9]*",className:"form-control custom-pages-input",id:"paginationInput",onInput:g,onBlur:s,onKeyUp:l,"aria-labelledby":"paginationInputLabel paginationDescription",style:{width:"2.5rem"}}),a.jsxs("span",{id:"paginationDescription",className:"col-form-label text-nowrap px-2",children:[" ","of ",e.pages.length]})]})})}const h=({displayedPage:e})=>["A","B","C","D","E","F"][e-1],N=()=>{const[e,n]=o.useState(4);return a.jsxs(u,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with customized links:"}),a.jsx(r,{ariaLabel:"Page navigation with customized links",previousPageLabel:"Prev",nextPageLabel:"Next",numberLabel:h,page:e,onPageChange:n}),a.jsx("hr",{}),a.jsx("p",{children:"A pagination with customized pages:"}),a.jsx(r,{page:e,onPageChange:n,pagesDisplay:x,ariaLabel:"Page navigation with customized pages"})]})};export{N as default};
