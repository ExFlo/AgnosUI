import{a as T}from"./chunk-TO6AFQXH.js";import{H as I,I as U,J as S,O as E}from"./chunk-Y7KYDSHQ.js";import{S as h}from"./chunk-R6ULA5MM.js";import"./chunk-WI73FVBD.js";import{Ab as d,Cb as m,Hb as w,Ma as n,_a as p,ab as c,ba as D,cb as _,eb as b,hb as v,ka as x,la as g,lb as a,mb as o,pb as y,qb as f,rb as l,zb as A}from"./chunk-BJ5RCGRN.js";function M(t,r){if(t&1&&(a(0,"div",8)(1,"div",9),d(2),o()()),t&2){let e=l().widget,i=l();c("auUse",e.directives.bodyContainerDirective),n(),c("auUse",e.directives.bodyDirective),n(),m(" ",i.BODY," ")}}function O(t,r){if(t&1&&(a(0,"div",5)(1,"p",6),d(2),o(),a(3,"button",7),d(4," Toggle first "),o()(),p(5,M,3,3,"div",8)),t&2){let e=r.state,i=r.widget;_("collapsed",!e.visible),c("auUse",i.directives.headerDirective),n(2),m("First panel - ",e.visible?"opened":"collapsed",""),n(),b("btn btn-link p-0 ",e.buttonClassName," au-accordion-item-button"),c("auUse",i.directives.toggleDirective),n(2),v(e.shouldBeInDOM?5:-1)}}function k(t,r){if(t&1&&(a(0,"div",8)(1,"div",9),d(2),o()()),t&2){let e=l().widget,i=l();c("auUse",e.directives.bodyContainerDirective),n(),c("auUse",e.directives.bodyDirective),n(),m(" ",i.BODY," ")}}function B(t,r){if(t&1){let e=y();a(0,"div",5)(1,"p",6),d(2,"Second panel"),o(),a(3,"div",10)(4,"button",7),d(5," Toggle second "),o(),a(6,"button",11),f("click",function(){x(e);let s=l();return g(s.thirdDisabled=!s.thirdDisabled)}),d(7),o(),a(8,"button",12),f("click",function(){x(e),l();let s=A(1);return g(s.api.collapseAll())}),d(9,"Collapse all"),o()()(),p(10,k,3,3,"div",8)}if(t&2){let e=r.state,i=r.widget,s=l();_("collapsed",!e.visible),c("auUse",i.directives.headerDirective),n(4),b("btn btn-sm btn-outline-primary ",e.buttonClassName," au-accordion-item-button"),c("auUse",i.directives.toggleDirective),n(3),m(" ",s.thirdDisabled?"En":"Dis","able third "),n(3),v(e.shouldBeInDOM?10:-1)}}function N(t,r){t&1&&(a(0,"p",13),d(1,"[I'm\xA0disabled]"),o())}function P(t,r){if(t&1&&(a(0,"div",8)(1,"div",9),d(2),o()()),t&2){let e=l().widget,i=l();c("auUse",e.directives.bodyContainerDirective),n(),c("auUse",e.directives.bodyDirective),n(),m(" ",i.BODY," ")}}function V(t,r){if(t&1&&(a(0,"div",5)(1,"button",7),d(2," Third panel "),o(),p(3,N,2,0,"p",13),o(),p(4,P,3,3,"div",8)),t&2){let e=r.state,i=r.widget,s=l();_("collapsed",!e.visible),c("auUse",i.directives.headerDirective),n(),b("p-0 btn btn-link container-fluid text-start au-accordion-item-button ",e.buttonClassName,""),c("auUse",i.directives.toggleDirective),n(2),v(s.thirdDisabled?3:-1),n(),v(e.shouldBeInDOM?4:-1)}}var u=class u{constructor(){this.thirdDisabled=!1;this.BODY=T}};u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=D({type:u,selectors:[["ng-component"]],standalone:!0,features:[w],decls:8,vars:1,consts:[["accordion","auAccordion"],["auAccordion",""],["auAccordionItem",""],["auAccordionItemStructure",""],["auAccordionItem","",3,"auDisabled"],["role","heading","aria-level","2",1,"accordion-button","accordion-header","custom-header","justify-content-between",3,"auUse"],[1,"m-0"],["type","button",3,"auUse"],[1,"accordion-collapse",3,"auUse"],[1,"accordion-body",3,"auUse"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-muted","m-0","small"]],template:function(e,i){e&1&&(a(0,"div",1,0)(2,"div",2),p(3,O,6,9,"ng-template",3),o(),a(4,"div",2),p(5,B,11,9,"ng-template",3),o(),a(6,"div",4),p(7,V,5,9,"ng-template",3),o()()),e&2&&(n(6),c("auDisabled",i.thirdDisabled))},dependencies:[E,h,S,U,I],styles:[".custom-header[_ngcontent-%COMP%]:after{content:none!important}"]});var C=u;export{C as default};
