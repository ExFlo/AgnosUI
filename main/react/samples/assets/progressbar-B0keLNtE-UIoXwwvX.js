import{j as s}from"./App-DI9ur9y5.js";import{S as n}from"./slot-Cdz7cIIo.js";import{u as p}from"./directive-Kqp31pwt-DMhW1hGh.js";import{c as d}from"./index-DYzswQoO.js";import{u as m}from"./config-BcuXC-aU.js";import{c as g}from"./progressbar-CgdwPfQW-DNPuaCb_.js";import{b as a,t as i}from"./writables-DoU_XYTX-WNj2ILfP.js";import{e as l}from"./extendWidget-Nhg67Efd.js";import{t as f}from"./directive-CKEccryv-9fW5PEkg.js";const u={structure:void 0,children:void 0,height:"",striped:!1,animated:!1,type:void 0},h={height:a,striped:i,animated:i,type:a},v=l(g,u,h),b=v;function x(t){const{striped:e,animated:r,type:o}=t.state,c=d("progress-bar",{"progress-bar-striped":e},{"progress-bar-animated":r},{[`text-bg-${o}`]:!!o});return s.jsx("div",{className:"progress",style:{height:t.state.height||void 0},children:s.jsx("div",{className:c,style:{width:`${t.state.percentage}%`},children:s.jsx(n,{slotContent:t.state.children,props:t})})})}const j={structure:x},E=t=>{const[e,r]=m(b,t,"progressbar",j),o={state:e,widget:f(r)};return s.jsx("div",{...p(r.directives.ariaDirective),className:e.className||void 0,children:s.jsx(n,{slotContent:e.structure,props:o})})};export{E as P};