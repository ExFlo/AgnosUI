import{r,j as t}from"./index-4Io7j_B-.js";import{A as a}from"./alert-HGQ7ZKMf.js";import"./extendWidget-hKWZ7txh.js";import"./baseTransitions-jmGlsZHy.js";import"./func-DcknktoK.js";import"./writables-HsDsavUX.js";import"./stores-I0eZAdss.js";import"./promise-2z3lKB8W.js";import"./directive-LllSSkp9.js";import"./fade-_276o2aS.js";import"./cssTransitions-vKFrt6bk.js";import"./dom-2S7XI5EU.js";import"./slot-m25UiUtH.js";import"./config-byFtmPHe.js";import"./widget-BOhwLCkO.js";const o=r.createContext([]),s=r.createContext(null);let d=0;function m(n,e){switch(e.type){case"add":return[...n,{...e.payload,id:d++}];case"remove":return n.filter(i=>i!==e.alert)}}const I=()=>{const[n,e]=r.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animation:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animation:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animation:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",n.length]}),t.jsx(o.Provider,{value:n,children:t.jsx(s.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const n=r.useContext(o),e=r.useContext(s);return t.jsx(t.Fragment,{children:n==null?void 0:n.map(i=>t.jsx(a,{animationOnInit:i.animationOnInit,animation:i.animation,dismissible:i.dismissible,type:i.type,slotDefault:i.slotDefault,onHidden:()=>e({type:"remove",alert:i})},`${i.id}`))})};export{I as default};