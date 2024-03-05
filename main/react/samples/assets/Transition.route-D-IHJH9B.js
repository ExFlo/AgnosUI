import{j as n,r as f}from"./index-DQEbs3Q8.js";import{w as s}from"./func-BRtNsj1u.js";import{u as v}from"./widget-CN-RiqsN.js";import{c as h,a as u}from"./collapse-hyOmdecH.js";import{u as a}from"./stores-BcQPaB3X.js";import{u as k}from"./directive-Be-EOLpQ.js";import{f as x}from"./fade-Z0oyjVmj.js";import{c as N}from"./baseTransitions-C-x44wKd.js";import"./stores-m8eykaCI.js";import"./cssTransitions-b4jo4tZj.js";import"./promise-DMV7Hn63.js";import"./dom-Hs1W5kAC.js";import"./simpleClassTransition-DHD_E3eD.js";import"./writables-BNxSaSLV.js";const l=s(h),m=s(!0),p=s(!1),y=s(!0),d=s(!0),C=()=>{const e=a(l),o=a(m),b=a(p),c=a(d),[t,i]=v(N,{},{props:{transition:l,animation:m,animationOnInit:p,visible:y}}),j=k(i.directives.directive),r=g=>{i.api.toggle(!1,!1),d.set(!0),l.set(g)};return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"transition-inner",children:[n.jsx("div",{className:"h6 mt-2",children:"Transition:"}),n.jsxs("div",{children:[n.jsx("button",{type:"button",className:`ms-2 btn btn-sm btn-outline-secondary ${e===h?"active":""}`,onClick:()=>r(h),children:"Vertical collapse"}),n.jsx("button",{type:"button",className:`ms-2 btn btn-sm btn-outline-secondary ${e===u?"active":""}`,onClick:()=>r(u),children:"Horizontal collapse"}),n.jsx("button",{type:"button",className:`ms-2 btn btn-sm btn-outline-secondary ${e===x?"active":""}`,onClick:()=>r(x),children:"Fade"})]}),n.jsx("div",{className:"h6 mt-2",children:"Other properties:"}),n.jsxs("label",{className:"form-check",children:[n.jsx("input",{type:"checkbox",className:"form-check-input",checked:o,onChange:()=>m.set(!o)}),"Animation"]}),n.jsxs("label",{className:"form-check",children:[n.jsx("input",{type:"checkbox",className:"form-check-input",checked:b,onChange:()=>p.set(!b)}),"Animation on init"]}),n.jsxs("label",{className:"form-check",children:[n.jsx("input",{type:"checkbox",className:"form-check-input",checked:c,onChange:()=>d.set(!c)}),"Remove from DOM"]}),n.jsxs("label",{className:"form-check mb-2",children:[n.jsx("input",{type:"checkbox",className:"form-check-input",checked:t.visible,onChange:()=>i.patch({visible:!t.visible})}),"Visible"]}),n.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[n.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>i.api.toggle(),children:"Toggle"}),n.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>i.api.toggle(void 0,!0),children:"Toggle with animation"}),n.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>i.api.toggle(void 0,!1),children:"Toggle without animation"})]}),n.jsxs("ul",{className:"mt-2",children:[n.jsxs("li",{children:["visible = ",t.visible+""]}),n.jsxs("li",{children:["transitioning = ",t.transitioning+""]}),n.jsxs("li",{children:["shown = ",t.shown+""]}),n.jsxs("li",{children:["hidden = ",t.hidden+""]})]}),c&&t.hidden?null:n.jsx("div",{ref:j,style:{maxWidth:"300px"},children:n.jsx("div",{className:"card",style:{width:"300px"},children:n.jsx("div",{className:"card-body",children:"You can collapse this card by clicking Toggle"})})})]})})},T=C,M=()=>{const[e,o]=f.useState(!0);return n.jsxs("div",{className:"demo-transition mb-3",children:[n.jsx("button",{id:"toggle-component",className:"btn btn-outline-secondary",onClick:()=>o(!e),children:"Toggle component"}),e&&n.jsx(T,{})]})};export{M as default};
