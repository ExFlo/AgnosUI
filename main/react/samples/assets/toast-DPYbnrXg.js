import{r as l,j as e}from"./App-DHhP8U0X.js";import{c as d}from"./func-DR0n-ShK-BRtNsj1u.js";import{e as u,c as m}from"./extendWidget-5qJ9z6u2.js";import{d as f,g as p}from"./directive-K96iLHtm.js";import{t as b,h as v}from"./writables-DoU_XYTX-Cc045fOB.js";import{u as g}from"./config-CzThtGqV.js";import{S as r}from"./slot-Is8FqGrj.js";const j={autoHide:!0,delay:5e3,slotHeader:void 0},h={autoHide:b,delay:v(0,1/0,{strict:!0})};function H(t){let i;const a=u(m,j,h)(t),s=d(()=>{clearTimeout(i),a.stores.autoHide$()&&(i=setTimeout(()=>a.api.close(),a.stores.delay$()))});return{...a,directives:{...a.directives,autoHideDirective:f(s)}}}const y=H,D=t=>e.jsxs(e.Fragment,{children:[t.state.slotHeader?e.jsxs("div",{className:"toast-header",children:[e.jsx(r,{slotContent:t.state.slotHeader,props:t}),t.state.dismissible?e.jsx("button",{type:"button",className:"btn-close me-0 ms-auto",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel}):null]}):null,e.jsx("div",{className:"toast-body",children:e.jsx(r,{slotContent:t.state.slotDefault,props:t})}),t.state.dismissible&&!t.state.slotHeader?e.jsx("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel}):null]}),T={slotStructure:D},I=l.forwardRef(function(i,a){const[s,o]=g(y,i,"toast",{...T,slotDefault:i.children}),c=p([o.directives.transitionDirective,o.directives.autoHideDirective]);l.useImperativeHandle(a,()=>o.api,[]);const n={state:s,widget:o};return e.jsx(e.Fragment,{children:s.hidden?null:e.jsx("div",{className:`au-toast toast ${s.className} ${s.dismissible?"toast-dismissible":""} ${s.slotHeader?"":"d-flex"}`,role:"alert",ref:c,"aria-atomic":"true",children:e.jsx(r,{slotContent:s.slotStructure,props:n})})})});export{I as T};
