import{j as t,R as o}from"./index-9pJeHDTl.js";/* empty css               */import{u as m}from"./config-DJC4cafJ.js";import{c as l}from"./rating-XpCOrFDn.js";import{S as c}from"./slot-tP7goYBj.js";import"./func-B0ufEirG.js";import"./widget-CY6-CZJQ.js";import"./stores-viY8-cTD.js";import"./rating-ncxOdQoa.js";import"./writables-x5uSRahj.js";function n(a){const[{className:i,stars:s,slotStar:e}]=m(l,{...a,readonly:!0},"rating");return t.jsx("div",{className:`d-inline-flex au-rating ${i}`,children:s.map(r=>t.jsx(o.Fragment,{children:t.jsx("span",{className:"au-rating-star",children:t.jsx(c,{slotContent:e,props:r})})},r.index))})}const d=({fill:a,index:i})=>{const s=["star"];return a===100&&s.push("filled"),i<3&&s.push("bad"),t.jsx("span",{className:s.join(" "),children:"★"})},y=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{children:"The readonly rating without slot:"}),t.jsx(n,{rating:7,maxRating:10}),t.jsx("div",{className:"mt-2",children:"Using a slot to customize the display:"}),t.jsx(n,{rating:7,maxRating:10,className:"rating-custom",slotStar:d})]});export{y as default};