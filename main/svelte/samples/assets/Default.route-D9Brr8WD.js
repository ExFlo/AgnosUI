import{p as b,e as g,c as v,a as x,t as d,L as h,q as $,r as P,h as y,b as c,f as w}from"./AppCommon-D_B8a5G6.js";import{a as m}from"./actions-B64vG8Da.js";import{c as N}from"./config-CpwOCg7e.js";import{c as _}from"./progressbar-SWdDtjxf-iSn4l-0M.js";import{c as D}from"./directive-CKEccryv-BAfxyCuh.js";import"./writables-DoU_XYTX-DPIJ9iVk.js";var C=d("<progress></progress>");function u(i,t){b(t,!0);let s=h(t,["$$slots","$$events","$$legacy"]);const{state:e,directives:{ariaDirective:l}}=N({factory:_,widgetName:"progressbar",get props(){return s},enablePatchChanged:!0});var r=C();let a;g(()=>a=$(r,a,{value:e.value,max:e.max})),m(r,o=>l(o)),m(r,(o,n)=>D(o,n),()=>"progress "+e.className),v(i,r),x()}var R=d("<div> </div>");function f(i,t){b(t,!0);let s=h(t,["$$slots","$$events","$$legacy"]);const{state:e,directives:{ariaDirective:l}}=N({factory:_,widgetName:"progressbar",get props(){return s},enablePatchChanged:!0}),r=new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1});var a=R();let o;g(()=>o=$(a,o,{style:`--thickness: 0.4rem; --value:${e.percentage??""};`}));var n=y(a);g(()=>P(n,r.format(e.percentage/100))),m(a,p=>l(p)),m(a,(p,F)=>D(p,F),()=>"radial-progress "+e.className),v(i,a),x()}var k=d('<h2 class="text-lg mb-2">Simple progressbars</h2> <!> <!> <h2 class="text-lg mt-4 mb-2">Radial progress</h2> <div class="flex gap-6"><!> <!></div>',1);function z(i){var t=k(),s=c(w(t),2);u(s,{className:"progress-primary",value:20});var e=c(s,2);u(e,{className:"progress-info",value:4,max:5});var l=c(e,4),r=y(l);f(r,{className:"text-primary",min:10,max:20,value:13});var a=c(r,2);f(a,{className:"bg-info text-info-content border-4 border-info",min:9,max:20,value:17}),v(i,t)}export{z as default};
