import{r,j as t}from"./index-E1S85dop.js";import{M as a,m as i,a as l}from"./modal-Quns2GXB.js";import"./func-B0ufEirG.js";import"./writables-OyOtM5rk.js";import"./stores-JgT84mg8.js";import"./baseTransitions-kXZI_gNf.js";import"./promise-8x5-Wnj7.js";import"./directive-0FrlA-7l.js";import"./fade-ESQBTf3v.js";import"./cssTransitions-uBV_yeX9.js";import"./dom-2S7XI5EU.js";import"./slot-clfMybp_.js";import"./config-zDWraNqZ.js";import"./widget-xxPN8IKN.js";const N=()=>{const e=r.useRef(null),[n,o]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(a,{ref:e,slotTitle:"Save changes",slotFooter:t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>e.current.close(!0),children:"Yes"}),t.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>e.current.close(!1),children:"No"})]}),children:"Do you want to save your changes?"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:async()=>{o("");const s=await e.current.open();o(s===i?"You clicked on the close button.":s===l?"You clicked outside the modal.":`You answered the question with "${s?"Yes":"No"}".`)},children:"Launch demo modal"}),t.jsx("div",{className:"mt-3","data-testid":"message",children:n})]})};export{N as default};