import{j as e,r}from"./App-BfPwE0cP.js";import{S as t}from"./slider-CxodlRoZ-ClUy_2P3.js";/* empty css               */import{u as l}from"./directive-Kqp31pwt-DH7mp87U.js";import"./config-Ct1NMvm_.js";import"./config-CjflpFmi.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./widget-DAs9_HQ1-SgNH3epH.js";import"./stores-B8YEDwZq-BygUU0Dp.js";import"./slider-ByDkbyr1-DxKVOF9f.js";import"./writables-DoU_XYTX-8sqxFTfY.js";import"./resizeObserver-heha_eCE.js";import"./extendWidget-CY6dlHOY.js";const a=s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-relative cup-container",children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${s.state.progressDisplayOptions[0].height}%`},children:s.state.progressDisplayOptions[0].height>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),e.jsx("button",{className:"coffee-indicator",...l(s.widget.directives.handleDirective,{item:s.state.sortedHandles[0]}),children:""+s.state.sortedHandles[0].value})]}),N=()=>{const[s,i]=r.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Fully custom slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:s,onValuesChange:i,structure:a,vertical:!0,className:"custom-slider"})]})};export{N as default};