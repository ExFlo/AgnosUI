import{f as m,e as i,b as o,t as u,a as y}from"./writables-DoU_XYTX-DoV7pQAs.js";import{w as V,c as r,s as F}from"./stores-B4F_j8QF.js";import{c as P}from"./directive-DYh4g5Bk.js";const T={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",slotStructure:void 0,slotDefault:void 0,height:"",striped:!1,animated:!1,ariaValueTextFn:()=>{}},w={min:i,max:i,value:i,ariaLabel:o,className:o,height:o,striped:u,animated:u,ariaValueTextFn:y};function D(p){const[{max$:d,value$:v,min$:a,ariaValueTextFn$:x,ariaLabel$:n,...$},b]=V(T,p,w),e=r(()=>Math.max(a(),d())),t=r(()=>m(v(),e(),a())),f=r(()=>{const l=e(),s=a();return l>s?m((t()-s)*100/(l-s),100,0):0}),g=r(()=>t()>a()),h=r(()=>t()===e()),c=r(()=>x()(t(),a(),e()));return{...F({min$:a,max$:e,value$:t,percentage$:f,started$:g,finished$:h,ariaValueText$:c,ariaLabel$:n,...$}),patch:b,api:{},directives:{ariaDirective:P(()=>({attributes:{role:"progressbar","aria-label":n,"aria-valuenow":t,"aria-valuemin":a,"aria-valuemax":e,"aria-valuetext":c}}))},actions:{}}}const M=D;export{M as c};