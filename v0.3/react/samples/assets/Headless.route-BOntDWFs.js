import{j as t,R as e}from"./App-XNADZBio.js";/* empty css               */import{c as m}from"./rating-Cvad2Z2H-DeH4_ixQ.js";import{u as l,S as c}from"./config-CCs_7nqP.js";import"./directive-Kqp31pwt-CpBdIrAv.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./rating-CNQcp5pm-5ljrNsL1.js";import"./rating-BR5wD7y2-PNvDhEe6.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";import"./extendWidget-B-unuY20.js";import"./config-B1OT1TA4.js";import"./widget-DAs9_HQ1-Dcw9QXPm.js";import"./stores-B8YEDwZq-BUsucSP7.js";function n(a){const[{className:i,stars:s,slotStar:o}]=l(m,{...a,readonly:!0},"rating");return t.jsx("div",{className:`d-inline-flex au-rating ${i}`,children:s.map(r=>t.jsx(e.Fragment,{children:t.jsx("span",{className:"au-rating-star",children:t.jsx(c,{slotContent:o,props:r})})},r.index))})}const p=({fill:a,index:i})=>{const s=["star"];return a===100&&s.push("filled"),i<3&&s.push("bad"),t.jsx("span",{className:s.join(" "),children:"★"})},F=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{children:"The readonly rating without slot:"}),t.jsx(n,{rating:7,maxRating:10}),t.jsx("div",{className:"mt-2",children:"Using a slot to customize the display:"}),t.jsx(n,{rating:7,maxRating:10,className:"rating-custom",slotStar:p})]});export{F as default};