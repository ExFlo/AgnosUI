import{r as n,j as e}from"./App-XNADZBio.js";import{c as f,o as v,a as u,s as b,h as g}from"./floatingUI-DB8GZkYe.js";import{a as x}from"./directive-CGjTRxRh-C_4hKweU.js";import"./stores-B4F_j8QF.js";import{u as h}from"./stores-B8YEDwZq-C-BlpjsT.js";import{u as t}from"./directive-DoNpruyP-DMejdQBJ.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";const w=x(o=>{o.scrollTo({left:326,top:420})}),U=()=>{var i,a;const[o,p]=n.useState(!0),r=n.useMemo(()=>f({props:{arrowOptions:{padding:6},computePositionOptions:{middleware:[v(10),u(),b({padding:5}),g()]}}}),[]),s=h(r.state$),l=t(w),c=t(r.directives.referenceDirective),d=t(r.directives.floatingDirective),m=t(r.directives.arrowDirective);return e.jsxs("div",{ref:l,className:"position-relative overflow-auto border border-primary-subtle demo-floatingui",children:[e.jsx("button",{ref:c,type:"button",className:"btn btn-primary",onClick:()=>p(!o),children:"Toggle popover"}),o?e.jsxs("div",{ref:d,"data-popper-placement":s.placement,className:`popover bs-popover-auto position-absolute ${(a=(i=s.middlewareData)==null?void 0:i.hide)!=null&&a.referenceHidden?"invisible":""}`,role:"tooltip",children:[e.jsx("div",{className:"popover-arrow position-absolute",ref:m}),e.jsx("div",{className:"popover-body text-center",children:"This is a sample popover"})]}):null]})};export{U as default};
