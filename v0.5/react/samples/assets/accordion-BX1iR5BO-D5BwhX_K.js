import{r as i,j as r}from"./App-DzjsJVPi.js";import{S as s}from"./slot-C-87TY4d.js";import{a as t}from"./directive-DNXkB1Wc-vM-qq65p.js";import{c as o}from"./directive-CKEccryv-BrWl76X8.js";import{u as m}from"./config-DsZWmgdO.js";import{g,f as p,c as x}from"./accordion-BGv150k9-B-RPSwaj.js";import{c as f}from"./collapse-CVjUhnIz-DC-QW7j_.js";import{e as j}from"./extendWidget-DH8OAK3L.js";const D={itemStructure:void 0},A={structure:void 0,children:void 0,header:void 0},I={...g(),...D},b={animated:!1,transition:f,destroyOnHide:!1,onShown:()=>{},onHidden:()=>{},onVisibleChange:()=>{},visible:!1,disabled:!1,id:"",headerClassName:"",buttonClassName:"",bodyContainerClassName:"",bodyClassName:"",headingTag:"",className:"",structure:void 0,children:void 0,header:void 0},C=Object.keys(b),y=j(x,A),T={itemTransition:f};function w(){return{...I,...T}}const E=p(y,C,w()),H=E,N=e=>{const n=new RegExp("^h[1-6]$").test(e.headerTag)?e.headerTag:"h2";return r.jsx(n,{...t([o,"accordion-header"],e.directive),children:e.children})},P=e=>r.jsx("div",{...t([o,"accordion-collapse"],e.directives.bodyContainerDirective),children:r.jsx("div",{...t([o,"accordion-body"],e.directives.bodyDirective),children:r.jsx(s,{slotContent:e.state.children,props:e})})}),v=i.createContext({}),S=e=>r.jsxs(r.Fragment,{children:[r.jsx(N,{directive:e.directives.headerDirective,headerTag:e.state.headingTag,children:r.jsx("button",{...t([o,"accordion-button"],e.directives.buttonDirective),children:r.jsx(s,{slotContent:e.state.header,props:e})})}),e.state.shouldBeInDOM&&r.jsx(P,{...e})]}),M=i.forwardRef(function(c,n){const{registerItem:a}=i.useContext(v),d=m(a,c,null,{structure:S}),{state:l,api:u,directives:h}=d;return i.useImperativeHandle(n,()=>u,[]),i.useEffect(()=>{u.initDone()},[]),r.jsx("div",{...t([o,`accordion-item ${l.className}`],h.itemDirective),children:r.jsx(s,{slotContent:l.structure,props:d})})}),_=i.forwardRef(function(c,n){const a=m(H,c,"accordion");return i.useImperativeHandle(n,()=>a.api,[]),r.jsx(v.Provider,{value:a.api,children:r.jsx("div",{...t([o,"accordion"],a.directives.accordionDirective),children:c.children})})});export{_ as A,M as a};
