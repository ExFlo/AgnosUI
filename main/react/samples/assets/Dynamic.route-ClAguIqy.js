import{r as i,j as e}from"./App-DI9ur9y5.js";import{T as c}from"./toast-mHo1ulYm-BQ-CiN6E.js";import"./slot-Cdz7cIIo.js";import"./directive-DNXkB1Wc-BT0zWdco.js";import"./directive-CKEccryv-BXYvEkQs.js";import"./config-aYUxiFUz.js";import"./config-nOnPRMsC.js";import"./stores-B8YEDwZq-BE6uiFF1.js";import"./toast-m-dpsTSI-z0AjcvyH.js";import"./extendWidget-BdAld2Yx.js";import"./writables-DoU_XYTX-CmGvgT4E.js";import"./common-BHk3fJTO-hjcHjfEI.js";import"./baseTransitions-C7uvcCOg.js";import"./promise-CY2U8bTP-D7Q2lx8N.js";import"./fade-uOobJKgw-B7hdw-R8.js";import"./simpleClassTransition-BgeDgH8O.js";import"./cssTransitions-RkXy3lNs.js";var s=(a=>(a.topLeft="top-0 start-0",a.topCenter="top-0 start-50 translate-middle-x",a.topRight="top-0 end-0",a.middleLeft="top-50 start-0 translate-middle-y",a.middleCenter="top-50 start-50 translate-middle",a.middleRight="top-50 end-0 translate-middle-y",a.bottomLeft="bottom-0 start-0",a.bottomCenter="bottom-0 start-50 translate-middle-x",a.bottomRight="bottom-0 end-0",a))(s||{});let h=0;const E=()=>{const[a,m]=i.useState(String(s.topLeft)),[r,n]=i.useState(new Map(Object.values(s).map(t=>[t,[]])));function d(){r.get(a).push({autoHide:!0,delay:3e3,className:a,id:h++}),n(new Map(r))}function p(t){r.set(t.className,r.get(t.className).filter(o=>o!==t))}return e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mb-2",children:["To position toast wherever you want you should have a ",e.jsx("code",{children:"toast-container"})," with a custom position defined by CSS classes."]}),e.jsxs("p",{className:"mb-2",children:["To ",e.jsx("strong",{children:"stack"})," toasts vertically, put them in the same container."," "]}),e.jsx("div",{className:"d-flex justify-content-between",children:e.jsxs("div",{className:"d-flex form-group align-items-center",children:[e.jsxs("label",{className:"me-3",htmlFor:"positionSelect",children:["Position:"," "]}),e.jsx("select",{id:"positionSelect",className:"form-select w-auto",value:a,onChange:t=>m(t.target.value),children:Object.entries(s).map(t=>({value:t[1],label:t[0]})).map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))}),e.jsx("button",{className:"btn btn-primary addToast ms-2",onClick:()=>d(),children:"Show toast"})]})}),e.jsx("div",{className:"d-flex position-relative mt-2 w-100","aria-live":"polite","aria-atomic":"true",style:{height:"500px",backgroundColor:"gray"},children:[...r].map(([t,o])=>e.jsx("div",{className:`toast-container p-3 ${t}`,children:o.map(l=>e.jsx(c,{onHidden:()=>p(l),header:"I am header",children:"Simple toast"},`${l.id}`))},t))})]})};export{E as default};
