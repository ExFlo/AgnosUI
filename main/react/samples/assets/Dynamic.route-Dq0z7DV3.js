import{r as n,j as t}from"./App-DHhP8U0X.js";import{A as a}from"./alert-B3TTk8hQ.js";import"./extendWidget-5qJ9z6u2.js";import"./baseTransitions-8mCJHLnO.js";import"./func-DR0n-ShK-BRtNsj1u.js";import"./writables-DoU_XYTX-Cc045fOB.js";import"./stores-CeiBlAbJ.js";import"./promise-CY2U8bTP-DjCDzrRF.js";import"./directive-K96iLHtm.js";import"./fade-7-Etejps-Dp2lkL24.js";import"./simpleClassTransition-VAIO8Pdo.js";import"./cssTransitions-eA9C8msh.js";import"./dom-B9Oy3i4s-Hs1W5kAC.js";import"./slot-Is8FqGrj.js";import"./config-CzThtGqV.js";import"./widget-Do-16ZHe.js";import"./stores-DwZpK94w.js";const o=n.createContext([]),s=n.createContext(null);let d=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:d++}];case"remove":return r.filter(i=>i!==e.alert)}}const k=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(o.Provider,{value:r,children:t.jsx(s.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const r=n.useContext(o),e=n.useContext(s);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(a,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,slotDefault:i.slotDefault,onHidden:()=>e({type:"remove",alert:i})},`${i.id}`))})};export{k as default};
