import{c as n,j as o}from"./App-DI9ur9y5.js";import{u as c}from"./config-nOnPRMsC.js";import{u as i}from"./directive-DNXkB1Wc-BT0zWdco.js";import{c as a}from"./modal-BEVbQExQ-ClKAJ1C-.js";import"./directive-CKEccryv-BXYvEkQs.js";import"./stores-B8YEDwZq-BE6uiFF1.js";import"./writables-DoU_XYTX-CmGvgT4E.js";import"./baseTransitions-C7uvcCOg.js";import"./promise-CY2U8bTP-D7Q2lx8N.js";const r=({directives:e})=>o.jsx("form",{method:"dialog",children:o.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",...i(e.closeButtonDirective),children:"✕"})});function d(e){const{state:t,api:s,directives:l}=c(a,e,"modal",{closeButton:!0});return o.jsxs("dialog",{className:"modal modal-bottom sm:modal-middle",onClose:s.close,...i(l.dialogDirective),children:[o.jsxs("div",{className:"modal-box",children:[e.children,t.closeButton&&o.jsx(r,{directives:l})]}),e.closeOnOutsideClick&&o.jsx("form",{method:"dialog",className:"modal-backdrop",children:o.jsx("button",{onClick:s.close,children:"Close"})})]})}async function m(e){const t=document.createElement("div"),s=n.createRoot(t);try{document.body.append(t),await new Promise(l=>{s.render(o.jsx(d,{...e,visible:!0,onVisibleChange:()=>l()}))}),t.remove()}finally{s.unmount()}}const v=()=>o.jsx("button",{className:"btn","aria-haspopup":"dialog",onClick:()=>m({closeOnOutsideClick:!0,children:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"font-bold text-lg",children:"A simple modal"}),o.jsx("p",{className:"py-4",children:"Press ESC key, click on ✕ button or click outside the modal to close"})]})}),children:"Open modal"});export{v as default};
