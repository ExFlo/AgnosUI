import{ac as t,ai as B}from"./AppCommon-Cm-6NtnE.js";import{w as C,y as M,s as I,a as h,h as g,I as U}from"./directive-CKEccryv-gyIcW13B.js";import{e as E,f as w,i as S,t as m,a as d,b as v}from"./writables-DCiBdIBK-BYLEJlA0.js";const L={rating:0,tabindex:0,maxRating:10,disabled:!1,readonly:!1,resettable:!0,ariaValueTextFn:(s,u)=>`${s} out of ${u}`,onHover:g,onLeave:g,onRatingChange:g,className:"",ariaLabel:"Rating",ariaLabelledBy:""};function J(){return{...L}}const z={rating:w,tabindex:w,maxRating:{normalizeValue:s=>S(s)?Math.max(0,s):U},disabled:m,readonly:m,resettable:m,ariaValueTextFn:d,onHover:d,onLeave:d,onRatingChange:d,className:v,ariaLabel:v,ariaLabelledBy:v};function K(s){const[{rating$:u,tabindex$:A,ariaValueTextFn$:D,onHover$:p,onLeave$:N,onRatingChange$:V,...f},k]=C(L,s,z),{ariaLabel$:P,ariaLabelledBy$:F,className$:H,disabled$:b,maxRating$:n,readonly$:$,resettable$:T}=f,x=t(()=>b()?-1:A()),r=M(u,V,a=>E(a,n(),0)),c=B(0),o=t(()=>!b()&&!$()),l=t(()=>{const a=c();return a!==0?a:r()}),y=t(()=>D()(l(),n())),_=t(()=>{const a=l();return Array.from({length:n()},(e,i)=>({fill:Math.round(Math.max(Math.min(a-i,1),0)*100),index:i}))}),R={...I({ariaValueText$:y,interactive$:o,rating$:r,stars$:_,tabindex$:x,visibleRating$:l,...f}),patch:k,directives:{containerDirective:h(()=>({events:{keydown:a=>{if(o()){const{key:e}=a;switch(e){case"ArrowLeft":case"ArrowDown":r.update(i=>i-1);break;case"ArrowRight":case"ArrowUp":r.update(i=>i+1);break;case"Home":case"PageDown":r.set(0);break;case"End":case"PageUp":r.set(n());break;default:return}a.preventDefault(),a.stopPropagation()}},mouseleave:()=>{o()&&R.api.leave()}},attributes:{role:"slider",class:H,"aria-valuemin":0,tabindex:x,"aria-valuemax":n,"aria-valuenow":l,"aria-valuetext":y,"aria-readonly":t(()=>$()?"true":void 0),"aria-disabled":t(()=>b()?"true":void 0),"aria-label":P,"aria-labelledby":t(()=>F()||void 0)},classNames:{"au-rating":!0}})),starDirective:h(a=>({events:{mouseenter:()=>{const e=a().index+1;o()&&e>0&&e<=n()&&(c.set(e),p()(e))},click:()=>{const e=a().index+1;o()&&e>0&&e<=n()&&r.update(i=>i===e&&T()?0:e)}},styles:{cursor:t(()=>o()?"pointer":"default")},classNames:{"au-rating-star":!0}}))},api:{setRating(a){r.set(a)},setHoveredRating(a){p()(a),c.set(a)},leave(){N()(l()),c.set(0)}}};return R}export{K as c,J as g};
