import{r as t,j as e}from"./index-9pJeHDTl.js";import{S as o}from"./slider-QND70F0A.js";import"./config-DJC4cafJ.js";import"./func-B0ufEirG.js";import"./widget-CY6-CZJQ.js";import"./stores-viY8-cTD.js";import"./directive-p5f-O7x0.js";import"./writables-x5uSRahj.js";const h=()=>{const[r,i]=t.useState([10,40,50,60,90]),[s,a]=t.useState([10,40]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control values: ",r==null?void 0:r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with values"}),e.jsx(o,{min:0,max:100,stepSize:1,values:s,onValuesChange:a}),"Values: ",s.join(", ")]})};export{h as default};