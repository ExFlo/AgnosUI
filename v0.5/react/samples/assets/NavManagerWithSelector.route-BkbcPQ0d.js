import{j as e,r as s}from"./App-DzjsJVPi.js";import{c as l}from"./navManager-BJWTxkCt.js";import{u as c}from"./directive-DNXkB1Wc-vM-qq65p.js";import"./directive-CKEccryv-BrWl76X8.js";const r=({text:a})=>{const t=s.useMemo(l,[]),o=s.useMemo(()=>({keys:{ArrowLeft:t.focusLeft,ArrowRight:t.focusRight,Home:t.focusFirst,End:t.focusLast,"Meta+ArrowLeft":t.focusFirstLeft,"Meta+ArrowRight":t.focusFirstRight},selector:n=>n.querySelectorAll("input,span")}),[t]);return e.jsxs("div",{className:"d-flex demo-navmanager-line",...c(t.directive,o),children:[e.jsx("input",{type:"text",defaultValue:a,className:"form-control me-1"}),e.jsx("span",{tabIndex:-1,className:"form-control w-auto me-1",children:a}),e.jsx("input",{tabIndex:-1,type:"checkbox",className:"form-check-input align-self-center me-1"}),e.jsx("input",{tabIndex:-1,type:"text",defaultValue:a,disabled:!0,className:"form-control me-1"}),e.jsx("input",{tabIndex:-1,type:"text",defaultValue:a,className:"form-control me-1"})]})},f=()=>e.jsxs("div",{className:"demo-navmanager",children:[e.jsxs("div",{dir:"ltr",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Left-to-right"}),e.jsx(r,{text:"Hello"})]}),e.jsxs("div",{dir:"rtl",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Right-to-left"}),e.jsx(r,{text:"שָׁלוֹם"})]})]});export{f as default};
