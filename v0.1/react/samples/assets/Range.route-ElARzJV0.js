import{r as t,j as e}from"./index-swMVOEdb.js";import{S as o}from"./slider-GSGyFPAc.js";import"./config-2-MXpfG2.js";import"./func-B0ufEirG.js";import"./widget-7PjIBdfy.js";import"./stores-xGmoBAgM.js";import"./directive-Tjiq1YGH.js";import"./writables-0gUpArvH.js";const h=()=>{const[r,i]=t.useState([10,40,50,60,90]),[s,a]=t.useState([10,40]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control values: ",r==null?void 0:r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with values"}),e.jsx(o,{min:0,max:100,stepSize:1,values:s,onValuesChange:a}),"Values: ",s.join(", ")]})};export{h as default};