import{r,j as t}from"./index-XASst4hv.js";import{M as a,m as i,a as l}from"./modal-eW0YaZx7.js";import"./func-B0ufEirG.js";import"./writables-QkOlGMv2.js";import"./stores-jV90dqJT.js";import"./baseTransitions-cU_n8DSl.js";import"./promise-8x5-Wnj7.js";import"./directive-IkpQ2nnW.js";import"./fade-I23ZSOQK.js";import"./cssTransitions-uBV_yeX9.js";import"./dom-2S7XI5EU.js";import"./slot-ZfAJ-kbL.js";import"./config-ElZC2Ap6.js";import"./widget-EsdIPURF.js";const N=()=>{const e=r.useRef(null),[n,o]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(a,{ref:e,slotTitle:"Save changes",slotFooter:t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>e.current.close(!0),children:"Yes"}),t.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>e.current.close(!1),children:"No"})]}),children:"Do you want to save your changes?"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:async()=>{o("");const s=await e.current.open();o(s===i?"You clicked on the close button.":s===l?"You clicked outside the modal.":`You answered the question with "${s?"Yes":"No"}".`)},children:"Launch demo modal"}),t.jsx("div",{className:"mt-3","data-testid":"message",children:n})]})};export{N as default};