import{r as n,j as e}from"./App-XNADZBio.js";import{c}from"./stores-B4F_j8QF.js";import{e as m,c as f}from"./extendWidget-BFkftCxe.js";import{d as p,c as d}from"./directive-CGjTRxRh-C_4hKweU.js";import{t as v,h as b}from"./writables-DoU_XYTX-DoV7pQAs.js";import{u as D}from"./config-DQAExDHC.js";import{S as l}from"./slot-DrPnuT9k.js";import{a as j,u as g}from"./directive-DoNpruyP-DMejdQBJ.js";const h={autoHide:!0,delay:5e3,slotHeader:void 0},y={autoHide:v,delay:b(0,1/0,{strict:!0})};function H(t){let i;const s=m(f,h,y)(t),a=c(()=>{clearTimeout(i),s.stores.autoHide$()&&(i=setTimeout(()=>s.api.close(),s.stores.delay$()))}),r=d(()=>({attributes:{role:"alert","aria-atomic":"true",class:c(()=>s.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),o=d(()=>({attributes:{type:"button","aria-label":c(()=>s.stores.ariaCloseButtonLabel$())},events:{click:s.api.close}}));return{...s,directives:{...s.directives,autoHideDirective:p(a),bodyDirective:r,closeButtonDirective:o}}}const x=H,N=t=>{const i=g(t.widget.directives.closeButtonDirective);return e.jsxs(e.Fragment,{children:[t.state.slotHeader&&e.jsxs("div",{className:"toast-header",children:[e.jsx(l,{slotContent:t.state.slotHeader,props:t}),t.state.dismissible&&e.jsx("button",{className:"btn-close me-0 ms-auto",ref:i})]}),e.jsx("div",{className:"toast-body",children:e.jsx(l,{slotContent:t.state.slotDefault,props:t})}),t.state.dismissible&&!t.state.slotHeader&&e.jsx("button",{className:"btn-close btn-close-white me-2 m-auto",ref:i})]})},T={slotStructure:N},R=n.forwardRef(function(i,s){const[a,r]=D(x,i,"toast",{...T,slotDefault:i.children}),o=j([r.directives.transitionDirective,r.directives.autoHideDirective,r.directives.bodyDirective]);n.useImperativeHandle(s,()=>r.api,[]);const u={state:a,widget:r};return e.jsx(e.Fragment,{children:!a.hidden&&e.jsx("div",{className:`toast ${a.dismissible?"toast-dismissible":""} ${a.slotHeader?"":"d-flex"}`,ref:o,children:e.jsx(l,{slotContent:a.slotStructure,props:u})})})});export{R as T};
