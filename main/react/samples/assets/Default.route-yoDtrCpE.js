import{r,j as t}from"./index-4Io7j_B-.js";import{M as a,m as i,a as l}from"./modal-sqyZRERm.js";import"./func-DcknktoK.js";import"./writables-HsDsavUX.js";import"./stores-I0eZAdss.js";import"./baseTransitions-jmGlsZHy.js";import"./promise-2z3lKB8W.js";import"./directive-LllSSkp9.js";import"./fade-_276o2aS.js";import"./cssTransitions-vKFrt6bk.js";import"./dom-2S7XI5EU.js";import"./slot-m25UiUtH.js";import"./config-byFtmPHe.js";import"./widget-BOhwLCkO.js";const N=()=>{const e=r.useRef(null),[n,o]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(a,{ref:e,slotTitle:"Save changes",slotFooter:t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>e.current.close(!0),children:"Yes"}),t.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>e.current.close(!1),children:"No"})]}),children:"Do you want to save your changes?"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:async()=>{o("");const s=await e.current.open();o(s===i?"You clicked on the close button.":s===l?"You clicked outside the modal.":`You answered the question with "${s?"Yes":"No"}".`)},children:"Launch demo modal"}),t.jsx("div",{className:"mt-3","data-testid":"message",children:n})]})};export{N as default};