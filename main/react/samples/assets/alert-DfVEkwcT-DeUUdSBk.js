import{r as s,j as t}from"./App-DI9ur9y5.js";import{S as a}from"./slot-Cdz7cIIo.js";import{a as c}from"./directive-DNXkB1Wc-BT0zWdco.js";import{u as n}from"./config-aYUxiFUz.js";import{c as l}from"./alert-BZyrc6h_-DFjRl-Tu.js";import{b as m}from"./writables-DoU_XYTX-CmGvgT4E.js";import{e as d}from"./extendWidget-BdAld2Yx.js";import{f as p}from"./fade-uOobJKgw-B7hdw-R8.js";import{c as u}from"./directive-CKEccryv-BXYvEkQs.js";const f={structure:void 0,children:void 0,type:"primary"},b={transition:p},g={type:m},j=d(l,f,g,b),v=j,h=e=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"alert-body",children:t.jsx(a,{slotContent:e.state.children,props:e})}),e.state.dismissible&&t.jsx("button",{type:"button",className:"btn-close",onClick:e.api.close,"aria-label":e.state.ariaCloseButtonLabel})]}),x={structure:h},y=e=>t.jsx("div",{role:"alert",...c([u,`au-alert alert alert-${e.state.type} ${e.state.className} ${e.state.dismissible?"alert-dismissible":""}`],e.directives.transitionDirective),children:t.jsx(a,{slotContent:e.state.structure,props:e})}),P=s.forwardRef(function(i,o){const r=n(v,i,"alert",x);return s.useImperativeHandle(o,()=>r.api,[]),t.jsx(t.Fragment,{children:!r.state.hidden&&t.jsx(y,{...r})})});export{P as A};
