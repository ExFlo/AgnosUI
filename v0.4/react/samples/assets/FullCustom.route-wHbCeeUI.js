import{j as e,r}from"./App-A0XPvMD_.js";import{S as t}from"./slider-CxodlRoZ-TdOJRw9G.js";/* empty css               */import{u as l}from"./directive-Kqp31pwt-CY8MqhJI.js";import"./config-aqAfPk5l.js";import"./config-DBGVES8N.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./widget-DAs9_HQ1-8frXUQXT.js";import"./stores-B8YEDwZq-l6gu5SAM.js";import"./slider-ByDkbyr1-DxKVOF9f.js";import"./writables-DoU_XYTX-8sqxFTfY.js";import"./resizeObserver-heha_eCE.js";import"./extendWidget-CY6dlHOY.js";const a=s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-relative cup-container",children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${s.state.progressDisplayOptions[0].height}%`},children:s.state.progressDisplayOptions[0].height>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),e.jsx("button",{className:"coffee-indicator",...l(s.widget.directives.handleDirective,{item:s.state.sortedHandles[0]}),children:""+s.state.sortedHandles[0].value})]}),N=()=>{const[s,i]=r.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Fully custom slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:s,onValuesChange:i,structure:a,vertical:!0,className:"custom-slider"})]})};export{N as default};