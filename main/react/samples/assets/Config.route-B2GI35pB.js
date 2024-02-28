import{r as i,j as e}from"./index-DirDLOJB.js";import{A as d}from"./alert-Bxa_J7kT.js";import"./extendWidget-COyguEMJ.js";import"./baseTransitions-Clu8Knh9.js";import"./func-BRtNsj1u.js";import"./writables-DStU4YH7.js";import"./stores-BVQoVfUJ.js";import"./promise-DMV7Hn63.js";import"./directive-D_wNpsc4.js";import"./fade-Dked202W.js";import"./simpleClassTransition-DHD_E3eD.js";import"./cssTransitions-b4jo4tZj.js";import"./dom-Hs1W5kAC.js";import"./config-DcxvzJMn.js";import"./widget-C1VaBxHi.js";var c=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(c||{});const R=()=>{const t=i.useRef(null),[n,l]=i.useState(!0),[r,m]=i.useState(!0),[a,h]=i.useState(!0),[o,p]=i.useState("success");return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn btn-primary showAlert",onClick:()=>{var s;return(s=t.current)==null?void 0:s.open()},children:"Show alert"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("div",{className:"d-flex form-group",children:[e.jsxs("label",{className:"align-self-center me-3",htmlFor:"typeSelect",children:["Alert type:"," "]}),e.jsx("select",{id:"typeSelect",className:"form-select w-auto",value:o,onChange:s=>p(s.target.value),children:Object.entries(c).map(s=>({value:s[1],label:s[0]})).map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))})]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:n,onChange:s=>l(s.target.checked)}),"Animation on init"]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:r,onChange:s=>m(s.target.checked)}),"Animation"]}),e.jsxs("label",{children:[e.jsx("input",{className:"dismissibleInput form-check-input me-1",type:"checkbox",defaultChecked:a,onChange:s=>h(s.target.checked)}),"Dismissible"]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(d,{ref:t,animationOnInit:n,animation:r,dismissible:a,type:o,children:[e.jsx("h4",{className:"alert-heading",children:"Well done!"}),e.jsx("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsx("hr",{}),e.jsx("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})]})};export{c as AlertStatus,R as default};
