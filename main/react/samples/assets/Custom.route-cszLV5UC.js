import{r as o,j as e}from"./index-DQEbs3Q8.js";import{P as r}from"./pagination-DPRRlvdv.js";import{W as m}from"./config-D7JUinin.js";import"./pagination-B-Bpbpgr.js";import"./func-BRtNsj1u.js";import"./stores-m8eykaCI.js";import"./writables-BNxSaSLV.js";import"./widget-CN-RiqsN.js";import"./stores-BcQPaB3X.js";const x=/[^0-9]/g;function d({widget:a,state:t}){const[l,i]=o.useState(t.page.toString());function p(n){n.key==="Enter"&&s(n)}function s(n){const c=n.currentTarget.value,u=parseInt(c);a.actions.select(u),i(a.stores.page$().toString())}function g(n){i(n.currentTarget.value.replace(x,""))}return o.useEffect(()=>{i(t.page.toString())},[t.page]),t.pages.length?e.jsx(e.Fragment,{children:e.jsx("li",{className:"au-custom-pages-item",children:e.jsxs("div",{className:"mb-3 d-flex flex-nowrap px-2",children:[e.jsx("label",{id:"paginationInputLabel",htmlFor:"paginationInput",className:"col-form-label me-2 ms-1",children:"Page"}),e.jsx("input",{value:l,type:"text",inputMode:"numeric",pattern:"[0-9]*",className:"form-control custom-pages-input",id:"paginationInput",onInput:g,onBlur:s,onKeyUp:p,"aria-labelledby":"paginationInputLabel paginationDescription",style:{width:"2.5rem"}}),e.jsxs("span",{id:"paginationDescription",className:"col-form-label text-nowrap px-2",children:[" ","of ",t.pages.length]})]})})}):null}const h=({displayedPage:a})=>["A","B","C","D","E","F"][a-1],y=()=>{const[a,t]=o.useState(4);return e.jsx(e.Fragment,{children:e.jsxs(m,{pagination:{collectionSize:60},children:[e.jsx("p",{children:"A pagination with customized links:"}),e.jsx(r,{ariaLabel:"Page navigation with customized links",slotPrevious:"Prev",slotNext:"Next",slotNumberLabel:h,page:a,onPageChange:t}),e.jsx("hr",{}),e.jsx("p",{children:"A pagination with customized pages:"}),e.jsx(r,{page:a,onPageChange:t,slotPages:d,ariaLabel:"Page navigation with customized pages"})]})})};export{y as default};
