import{d as l,e as s,b as m,a as V}from"./writables-DoU_XYTX-DPIJ9iVk.js";import{w as y,s as F,g as P}from"./directive-CKEccryv-BAfxyCuh.js";import{ab as r}from"./AppCommon-D_B8a5G6.js";const T={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",ariaValueTextFn:()=>{}},h={min:s,max:s,value:s,ariaLabel:m,className:m,ariaValueTextFn:V};function D(u){const[{max$:p,value$:x,min$:a,ariaValueTextFn$:b,ariaLabel$:o,...$},v]=y(T,u,h),e=r(()=>Math.max(a(),p())),t=r(()=>l(x(),e(),a())),d=r(()=>{const c=e(),i=a();return c>i?l((t()-i)*100/(c-i),100,0):0}),f=r(()=>t()>a()),g=r(()=>t()===e()),n=r(()=>b()(t(),a(),e()));return{...F({min$:a,max$:e,value$:t,percentage$:d,started$:f,finished$:g,ariaValueText$:n,ariaLabel$:o,...$}),patch:v,api:{},directives:{ariaDirective:P(()=>({attributes:{role:"progressbar","aria-label":o,"aria-valuenow":t,"aria-valuemin":a,"aria-valuemax":e,"aria-valuetext":n}}))}}}export{D as c};
