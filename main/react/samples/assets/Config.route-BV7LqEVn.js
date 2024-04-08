import{r as i,j as e}from"./App-XNADZBio.js";import{A as h}from"./alert-BOEWPNEW-CyFkxz1W.js";import"./index-BvwGi6GH.js";import"./extendWidget-DkF8JkSy.js";import"./baseTransitions-Dn4UJ8zK.js";import"./stores-B4F_j8QF.js";import"./writables-DoU_XYTX-DoV7pQAs.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";import"./directive-DYh4g5Bk.js";import"./fade-7-Etejps-C5KAY-6u.js";import"./simpleClassTransition-CKf3PBnB.js";import"./cssTransitions-BiCvyljD.js";import"./slot-DrPnuT9k.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./directive-CX0hxCpP-BVZ9V1VD.js";var l=(s=>(s.success="success",s.info="info",s.warning="warning",s.danger="danger",s.primary="primary",s.secondary="secondary",s.light="light",s.dark="dark",s))(l||{});const F=()=>{const s=i.useRef(null),[n,o]=i.useState(!0),[r,m]=i.useState(!0),[a,d]=i.useState(!0),[c,p]=i.useState("success");return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn btn-primary showAlert",onClick:()=>{var t;return(t=s.current)==null?void 0:t.open()},children:"Show alert"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("div",{className:"d-flex form-group",children:[e.jsxs("label",{className:"align-self-center me-3",htmlFor:"typeSelect",children:["Alert type:"," "]}),e.jsx("select",{id:"typeSelect",className:"form-select w-auto",value:c,onChange:t=>p(t.target.value),children:Object.entries(l).map(t=>({value:t[1],label:t[0]})).map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:n,onChange:t=>o(t.target.checked)}),"Animated on init"]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:r,onChange:t=>m(t.target.checked)}),"Animated"]}),e.jsxs("label",{children:[e.jsx("input",{className:"dismissibleInput form-check-input me-1",type:"checkbox",defaultChecked:a,onChange:t=>d(t.target.checked)}),"Dismissible"]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(h,{ref:s,animatedOnInit:n,animated:r,dismissible:a,type:c,children:[e.jsx("h4",{className:"alert-heading",children:"Well done!"}),e.jsx("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsx("hr",{}),e.jsx("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})]})};export{l as AlertStatus,F as default};
