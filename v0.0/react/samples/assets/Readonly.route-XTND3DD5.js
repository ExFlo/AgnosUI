import{j as t}from"./index-my9D5qVr.js";import{R as e}from"./rating-3od-22HH.js";import"./rating-PIuOrjh_.js";import"./func-B0ufEirG.js";import"./stores-4c2CDOUD.js";import"./writables-UD4FGGxM.js";import"./slot-f2tA6c_f.js";import"./config-0Vh0wd26.js";import"./widget-LY2o5VAL.js";const r=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`,u=()=>t.jsx(e,{rating:3.64,readonly:!0,maxRating:5,className:"rating-readonly",slotStar:({fill:s})=>{const a=["star"];s===100&&a.push("full");const n={width:`${s}%`};return t.jsxs("span",{className:a.join(" "),children:[t.jsx("span",{className:"half",style:n,dangerouslySetInnerHTML:{__html:r}}),t.jsx("span",{dangerouslySetInnerHTML:{__html:r}})]})},ariaLabel:"readonly rating"});export{u as default};