import{a as B}from"./chunk-OLUGLI4Z.js";import{c as V}from"./chunk-67FW6DUS.js";import{N as P,O as W,o as N}from"./chunk-Y7KYDSHQ.js";import{V as L,_ as v}from"./chunk-R6ULA5MM.js";import"./chunk-WI73FVBD.js";import{$a as A,Ab as a,Gb as y,Hb as h,Ja as C,Kb as z,Ma as m,Wa as M,Z as D,_a as g,a as k,ab as p,b as F,ba as d,hb as H,ka as f,la as b,lb as i,mb as o,na as I,nb as w,pb as T,qb as u,rb as _,zb as E}from"./chunk-BJ5RCGRN.js";var U=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`;var G=(l,n)=>({widget:l,state:n});function J(l,n){}function K(l,n){if(l&1){let e=T();i(0,"button",7),u("click",function(){f(e);let t=_();return b(t.widget.api.close())}),o()}if(l&2){let e=_();A("aria-label",e.state.ariaCloseButtonLabel)}}var r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=d({type:r,selectors:[["ng-component"]],standalone:!0,features:[y([N(n=>(n.toast=F(k({},n.toast),{className:"text-bg-success",autoHide:!1,dismissible:!0,structure:S}),n))]),h],decls:14,vars:0,consts:[["toast",""],[1,"col-auto","col-md-6"],["auToast",""],[1,"btn","btn-primary","mt-2",3,"click"]],template:function(e,c){if(e&1){let t=T();i(0,"p"),a(1,"To put the action in the toast simply create custom contents."),o(),i(2,"p")(3,"strong"),a(4,"Note:"),o(),a(5," When header is not present default display is "),i(6,"code"),a(7,"flex"),o()(),i(8,"div",1)(9,"au-component",2,0),a(11,"This is a toast with action"),o()(),i(12,"button",3),u("click",function(){f(t);let R=E(10);return b(R.api.open())}),a(13,"Reset"),o()}},dependencies:[W,P],encapsulation:2});var x=r,s=class s extends L{constructor(){super(...arguments);this.sanitizer=D(V);this.biCheckCircleFill=B;this.biArrowCounterClockwise=U}actionDemo(){window.alert("Undo")}};s.\u0275fac=(()=>{let e;return function(t){return(e||(e=I(s)))(t||s)}})(),s.\u0275cmp=d({type:s,selectors:[["app-icon-structure"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[y([v]),M,h],decls:8,vars:8,consts:[[1,"d-flex","w-100"],[1,"d-flex","align-items-center","flex-grow-1","toast-body"],[1,"d-flex","me-2",3,"innerHTML"],[3,"auSlot","auSlotProps"],["type","button",1,"btn","btn-sm","ms-auto","text-bg-success",3,"click"],[1,"me-2",3,"innerHTML"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"]],template:function(c,t){c&1&&(i(0,"div",0)(1,"div",1),w(2,"span",2),g(3,J,0,0,"ng-template",3),i(4,"button",4),u("click",function(){return t.actionDemo()}),w(5,"span",5),a(6,"Undo "),o()(),g(7,K,1,1,"button",6),o()),c&2&&(m(2),p("innerHTML",t.sanitizer.bypassSecurityTrustHtml(t.biCheckCircleFill),C),m(),p("auSlot",t.state.children)("auSlotProps",z(5,G,t.widget,t.state)),m(2),p("innerHTML",t.sanitizer.bypassSecurityTrustHtml(t.biArrowCounterClockwise),C),m(2),H(t.state.dismissible?7:-1))},dependencies:[v],encapsulation:2});var S=s;export{S as ToastIconComponent,x as default};
