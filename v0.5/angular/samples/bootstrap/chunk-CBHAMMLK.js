import{g as E}from"./chunk-GDIIEU3W.js";import{A as P,W as T,Y as O}from"./chunk-AWWQU5ES.js";import"./chunk-RIDGTTAP.js";import{$a as h,Cb as p,Eb as M,Jb as d,La as l,Ua as f,Za as C,_ as r,ab as c,cb as x,ec as S,hb as v,ja as g,lb as n,mb as i,nb as b,qb as y,ra as u,rb as _,sb as D,tb as w}from"./chunk-DKG3CSSF.js";var j=["*"];function k(t,o){if(t&1&&(n(0,"div",7)(1,"div",8),w(2),i()()),t&2){let e=_();c("auUse",e.transition.directives.directive)}}var s=class t{constructor(){this.headerText=u();this.expanded=f(!1);this.transition=P({props:{transition:E,onVisibleChange:o=>this.expanded.set(o)}});this.hidden=T(this.transition.stores.hidden$);S(()=>{this.transition.patch({visible:this.expanded()})},{allowSignalWrites:!0})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=r({type:t,selectors:[["app-collapse"]],inputs:{headerText:[1,"headerText"],expanded:[1,"expanded"]},outputs:{expanded:"expandedChange"},standalone:!0,features:[d],ngContentSelectors:j,decls:9,vars:5,consts:[[1,"card"],[1,"card-header","p-0"],["type","button","id","collapse-toggle","aria-controls","collapse-content",1,"btn","toggle-button",3,"click"],[1,"ms-1","collapse-icon"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 100 100"],["x","20","y","45","width","60","height","10","fill","currentColor",1,"horizontal"],["x","45","y","20","width","10","height","60","fill","currentColor",1,"vertical"],["id","collapse-content",3,"auUse"],[1,"card-body"]],template:function(e,a){e&1&&(D(),n(0,"div",0)(1,"div",1)(2,"button",2),y("click",function(){return a.transition.api.toggle()}),p(3),n(4,"span",3),g(),n(5,"svg",4),b(6,"rect",5)(7,"rect",6),i()()()(),C(8,k,3,1,"div",7),i()),e&2&&(l(2),h("aria-expanded",a.expanded()),l(),M(" ",a.headerText()," "),l(),x("expanded",a.expanded()),l(4),v(a.hidden()?-1:8))},dependencies:[O],styles:[".collapse-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{transition:transform .35s ease-in-out}.collapse-icon[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]{transform:rotate(0);transform-origin:center}.collapse-icon.expanded[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]{transform:rotate(90deg)}.toggle-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.toggle-button[_ngcontent-%COMP%]:focus-visible{z-index:3;outline:0;box-shadow:0 0 0 .25rem #0d6efc40}.toggle-button[_ngcontent-%COMP%]:active{border-color:transparent!important}"],changeDetection:0})}};var m=class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=r({type:t,selectors:[["ng-component"]],standalone:!0,features:[d],decls:2,vars:1,consts:[["headerText","Toggle content",3,"expanded"]],template:function(e,a){e&1&&(n(0,"app-collapse",0),p(1," Content to display / hide. "),i()),e&2&&c("expanded",!0)},dependencies:[s],encapsulation:2,changeDetection:0})}};export{m as default};
