import{r,j as t}from"./index-DQEbs3Q8.js";import{A as a}from"./alert-D2ybhbqf.js";import"./extendWidget-DRUMybzo.js";import"./baseTransitions-C-x44wKd.js";import"./func-BRtNsj1u.js";import"./writables-BNxSaSLV.js";import"./stores-m8eykaCI.js";import"./promise-DMV7Hn63.js";import"./directive-Be-EOLpQ.js";import"./fade-Z0oyjVmj.js";import"./simpleClassTransition-DHD_E3eD.js";import"./cssTransitions-b4jo4tZj.js";import"./dom-Hs1W5kAC.js";import"./config-D7JUinin.js";import"./widget-CN-RiqsN.js";import"./stores-BcQPaB3X.js";const o=r.createContext([]),s=r.createContext(null);let d=0;function m(i,e){switch(e.type){case"add":return[...i,{...e.payload,id:d++}];case"remove":return i.filter(n=>n!==e.alert)}}const N=()=>{const[i,e]=r.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animation:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animation:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animation:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",i.length]}),t.jsx(o.Provider,{value:i,children:t.jsx(s.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const i=r.useContext(o),e=r.useContext(s);return t.jsx(t.Fragment,{children:i==null?void 0:i.map(n=>t.jsx(a,{animationOnInit:n.animationOnInit,animation:n.animation,dismissible:n.dismissible,type:n.type,slotDefault:n.slotDefault,onHidden:()=>e({type:"remove",alert:n})},`${n.id}`))})};export{N as default};
