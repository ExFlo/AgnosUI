import{g as N}from"./chunk-HFDDICDQ.js";import{Q as I,S as E,u as F}from"./chunk-VIY4ZAN7.js";import"./chunk-XPVCXEMV.js";import{$a as v,Ab as d,Cb as T,Hb as m,Jb as P,Kb as S,Ma as l,Xa as f,Zb as O,_a as C,ab as h,ba as p,cb as x,hb as b,lb as t,ma as g,mb as a,nb as y,qb as _,rb as D,sb as w,tb as M}from"./chunk-CKC7SV4U.js";var U=["*"],z=n=>({visible:n}),A=(n,o)=>[n,o];function V(n,o){if(n&1&&(t(0,"div",7)(1,"div",8),M(2),a()()),n&2){let e=D();h("auUse",S(3,A,e.transition.directives.directive,P(1,z,e.expanded)))}}var s=class s{constructor(){this.transition=F({props:{transition:N}});this.state=I(this.transition.state$);this.expanded=!1}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=p({type:s,selectors:[["app-collapse"]],inputs:{headerText:"headerText",expanded:[2,"expanded","expanded",O]},standalone:!0,features:[f,m],ngContentSelectors:U,decls:9,vars:5,consts:[[1,"card"],[1,"card-header","p-0"],["type","button","id","collapse-toggle","aria-controls","collapse-content",1,"btn","toggle-button",3,"click"],[1,"ms-1","collapse-icon"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 100 100"],["x","20","y","45","width","60","height","10","fill","currentColor",1,"horizontal"],["x","45","y","20","width","10","height","60","fill","currentColor",1,"vertical"],["id","collapse-content",3,"auUse"],[1,"card-body"]],template:function(e,i){e&1&&(w(),t(0,"div",0)(1,"div",1)(2,"button",2),_("click",function(){return i.transition.api.toggle()}),d(3),t(4,"span",3),g(),t(5,"svg",4),y(6,"rect",5)(7,"rect",6),a()()()(),C(8,V,3,6,"div",7),a()),e&2&&(l(2),v("aria-expanded",i.state().visible),l(),T(" ",i.headerText," "),l(),x("expanded",i.state().visible),l(4),b(i.state().hidden?-1:8))},dependencies:[E],styles:[".collapse-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{transition:transform .35s ease-in-out}.collapse-icon[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]{transform:rotate(0);transform-origin:center}.collapse-icon.expanded[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]{transform:rotate(90deg)}.toggle-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.toggle-button[_ngcontent-%COMP%]:focus-visible{z-index:3;outline:0;box-shadow:0 0 0 .25rem #0d6efc40}.toggle-button[_ngcontent-%COMP%]:active{border-color:transparent!important}"],changeDetection:0});var c=s;var r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=p({type:r,selectors:[["ng-component"]],standalone:!0,features:[m],decls:2,vars:0,consts:[["headerText","Toggle content","expanded",""]],template:function(e,i){e&1&&(t(0,"app-collapse",0),d(1," Content to display / hide. "),a())},dependencies:[c],encapsulation:2,changeDetection:0});var u=r;export{u as default};
