import{r as a,j as e}from"./App-BfPwE0cP.js";import{u as l,S as i}from"./config-Ct1NMvm_.js";import{a as d}from"./directive-Kqp31pwt-DH7mp87U.js";import{c as m}from"./alert-DdGuK__c-D45dGIsc.js";import{a as p}from"./writables-DoU_XYTX-8sqxFTfY.js";import{e as u}from"./extendWidget-CY6dlHOY.js";import{f}from"./fade-uOobJKgw-BJsoKbPR.js";import{c as g}from"./directive-3-8yr-ZK-C5h7Dwqe.js";const j={structure:void 0,children:void 0,type:"primary"},v={transition:f},b={type:p},h=u(m,j,b,v),x=h,y=t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"alert-body",children:e.jsx(i,{slotContent:t.state.children,props:t})}),t.state.dismissible&&e.jsx("button",{type:"button",className:"btn-close",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel})]}),A={structure:y},S=t=>e.jsx("div",{role:"alert",...d([g,`au-alert alert alert-${t.state.type} ${t.state.className} ${t.state.dismissible?"alert-dismissible":""}`],t.widget.directives.transitionDirective),children:e.jsx(i,{slotContent:t.state.structure,props:t})}),R=a.forwardRef(function(o,c){const[r,s]=l(x,o,"alert",A);a.useImperativeHandle(c,()=>s.api,[]);const n={state:r,widget:s};return e.jsx(e.Fragment,{children:!r.hidden&&e.jsx(S,{...n})})});export{R as A};