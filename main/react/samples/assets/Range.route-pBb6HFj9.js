import{r as s,j as e}from"./App-DHhP8U0X.js";import{S as o}from"./slider-DMIinwEC-KQFJULUX.js";import"./func-DR0n-ShK-BRtNsj1u.js";import"./directive-CX0hxCpP-DoRNka9I.js";import"./stores-CeiBlAbJ.js";import"./writables-DoU_XYTX-Cc045fOB.js";import"./resizeObserver-C--itYOB.js";import"./config-jsbGLsCa.js";import"./widget-DAs9_HQ1-CbiAEhyH.js";import"./stores-B8YEDwZq-DwZpK94w.js";import"./slot-Is8FqGrj.js";const V=()=>{const[r,i]=s.useState([10,40,50,60,90]),[t,a]=s.useState([10,40]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control values: ",r==null?void 0:r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with values"}),e.jsx(o,{min:0,max:100,stepSize:1,values:t,onValuesChange:a}),"Values: ",t.join(", ")]})};export{V as default};