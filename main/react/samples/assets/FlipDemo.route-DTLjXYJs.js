import{r as o,j as i}from"./App-XNADZBio.js";import{c}from"./simpleClassTransition-B31dawEc.js";import{c as l}from"./baseTransitions-CSdQUVlz.js";import{u as d}from"./directive-DoNpruyP-DMejdQBJ.js";import"./cssTransitions-Y4Cwi2QU.js";import"./directive-CGjTRxRh-C_4hKweU.js";import"./stores-B4F_j8QF.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";import"./writables-DoU_XYTX-DoV7pQAs.js";const m=({hiddenText:s,children:e})=>{const{directives:{directive:t},api:{hide:n,show:r}}=o.useMemo(()=>l({props:{visible:!1,transition:c({hideClasses:["hide"],animationPendingHideClasses:["hide"]})}}),[]),a=d(t);return i.jsx("div",{className:"flip-card",children:i.jsxs("div",{className:"flip-card-inner",ref:a,children:[i.jsxs("div",{className:"flip-card-front",children:[e,i.jsx("button",{className:"btn btn-outline-secondary",onClick:()=>n(),children:"Hide again."})]}),i.jsx("div",{className:"flip-card-back",children:i.jsx("button",{className:"btn btn-outline-primary",onClick:()=>r(),children:s})})]})})},p=m,g=()=>i.jsx(p,{hiddenText:"What is hiding behing this ?",children:" Some new content ! "});export{g as default};
