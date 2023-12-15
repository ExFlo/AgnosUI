import{r as d,j as i}from"./index-ad620b39.js";import{A as u,a as r}from"./accordion-845ccf49.js";import{B as h}from"./body-92e21e3d.js";import{u as j}from"./directive-077a84f7.js";import"./stores-9a6629d7.js";import"./func-f2d0b1ef.js";import"./baseTransitions-1f4f5c96.js";import"./writables-6bbf4300.js";import"./promise-c1a9d9a6.js";import"./collapse-f47ea866.js";import"./cssTransitions-e5a2a4e0.js";import"./dom-cc7faf10.js";import"./slot-52131843.js";import"./config-69b12b2c.js";import"./widget-91343129.js";const T=()=>{const l=d.useRef(),[c,m]=d.useState(!1),t=e=>{const{state:a,widget:s}=e.slotContext,p=j(s.directives.collapseDirective);return i.jsx(i.Fragment,{children:a.shouldBeInDOM?i.jsx("div",{className:`accordion-collapse ${a.itemCollapseClass}`,id:`${a.itemId}-collapse`,"aria-labelledby":`${a.itemId}-toggle`,ref:p,children:i.jsx("div",{className:`accordion-body ${a.itemBodyClass}`,children:h})}):null})},n=e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[i.jsxs("p",{className:"m-0",children:["First panel - ",e.state.itemVisible?"opened":"collapsed"]}),i.jsx("button",{type:"button",id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,className:`btn btn-link p-0 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle first"})]}),i.jsx(t,{slotContext:e})]}),o=e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[i.jsx("p",{className:"m-0",children:"Second panel"}),i.jsxs("div",{children:[i.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary me-2 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle second"}),i.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary me-2",onClick:()=>m(a=>!a),children:[c?"En":"Dis","able third"]}),i.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger me-2",onClick:()=>{var a,s;return(s=(a=l.current)==null?void 0:a.collapseAll)==null?void 0:s.call(a)},children:"Collapse all"})]})]}),i.jsx(t,{slotContext:e})]}),b=e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[i.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"} `,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-disabled":e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-expanded":e.state.itemVisible,children:"Third panel"}),e.state.itemDisabled?i.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"}):i.jsx(i.Fragment,{})]}),i.jsx(t,{slotContext:e})]});return i.jsxs(u,{ref:l,children:[i.jsx(r,{slotItemStructure:n}),i.jsx(r,{slotItemStructure:o}),i.jsx(r,{slotItemStructure:b,itemDisabled:c})]})};export{T as default};