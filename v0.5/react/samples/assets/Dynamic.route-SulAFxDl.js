import{r as i,j as e}from"./App-DzjsJVPi.js";import{T as c}from"./toast-Dgfv5S_p-C5-amsv8.js";import"./slot-C-87TY4d.js";import"./directive-DNXkB1Wc-vM-qq65p.js";import"./directive-CKEccryv-BrWl76X8.js";import"./config-DsZWmgdO.js";import"./config-CksNrV0_.js";import"./widget-DaA-pe23-BBb8HF9F.js";import"./stores-B90XF8Sy-C-A2iTqV.js";import"./toast-CpvsibAI-wONKfwoh.js";import"./extendWidget-DH8OAK3L.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./common-Banw3FYN-MaCAbEsj.js";import"./baseTransitions-BTWrZiPl.js";import"./promise-CY2U8bTP-BBXElGUG.js";import"./fade-uOobJKgw-DqfTw5Cx.js";import"./simpleClassTransition-TUrNxN3_.js";import"./cssTransitions-CcrXbQiX.js";var o=(a=>(a.topLeft="top-0 start-0",a.topCenter="top-0 start-50 translate-middle-x",a.topRight="top-0 end-0",a.middleLeft="top-50 start-0 translate-middle-y",a.middleCenter="top-50 start-50 translate-middle",a.middleRight="top-50 end-0 translate-middle-y",a.bottomLeft="bottom-0 start-0",a.bottomCenter="bottom-0 start-50 translate-middle-x",a.bottomRight="bottom-0 end-0",a))(o||{});let h=0;const F=()=>{const[a,m]=i.useState(String(o.topLeft)),[r,n]=i.useState(new Map(Object.values(o).map(t=>[t,[]])));function d(){r.get(a).push({autoHide:!0,delay:3e3,className:a,id:h++}),n(new Map(r))}function p(t){r.set(t.className,r.get(t.className).filter(s=>s!==t))}return e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mb-2",children:["To position toast wherever you want you should have a ",e.jsx("code",{children:"toast-container"})," with a custom position defined by CSS classes."]}),e.jsxs("p",{className:"mb-2",children:["To ",e.jsx("strong",{children:"stack"})," toasts vertically, put them in the same container."," "]}),e.jsx("div",{className:"d-flex justify-content-between",children:e.jsxs("div",{className:"d-flex form-group align-items-center",children:[e.jsxs("label",{className:"me-3",htmlFor:"positionSelect",children:["Position:"," "]}),e.jsx("select",{id:"positionSelect",className:"form-select w-auto",value:a,onChange:t=>m(t.target.value),children:Object.entries(o).map(t=>({value:t[1],label:t[0]})).map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))}),e.jsx("button",{className:"btn btn-primary addToast ms-2",onClick:()=>d(),children:"Show toast"})]})}),e.jsx("div",{className:"d-flex position-relative mt-2 w-100","aria-live":"polite","aria-atomic":"true",style:{height:"500px",backgroundColor:"gray"},children:[...r].map(([t,s])=>e.jsx("div",{className:`toast-container p-3 ${t}`,children:s.map(l=>e.jsx(c,{onHidden:()=>p(l),header:"I am header",children:"Simple toast"},`${l.id}`))},t))})]})};export{F as default};
