"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[787],{5787:(f,_,p)=>{p.r(_),p.d(_,{default:()=>C});var g=p(6937),t=p(8976);function s(e,l){1&e&&t._uU(0,"Prev")}function c(e,l){1&e&&t._uU(0,"Next")}function m(e,l){if(1&e&&t._uU(0),2&e){const n=l.displayedPage,a=t.oxw();t.Oqu(a.getPageSymbol(n))}}function r(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"li",7)(1,"div",8)(2,"label",9),t._uU(3,"Page"),t.qZA(),t.TgZ(4,"input",10,11),t.NdJ("keyup.enter",function(){t.CHM(n);const o=t.MAs(5),i=t.oxw().widget,u=t.oxw();return t.KtG(u.handleTheChange(o,i))})("blur",function(){t.CHM(n);const o=t.MAs(5),i=t.oxw().widget,u=t.oxw();return t.KtG(u.handleTheChange(o,i))})("input",function(){t.CHM(n);const o=t.MAs(5),i=t.oxw(2);return t.KtG(i.formatInput(o))}),t.qZA(),t.TgZ(6,"span",12),t._uU(7),t.qZA()()()}if(2&e){const n=t.oxw().state;t.xp6(4),t.Q6J("value",n.page),t.xp6(3),t.hij(" of ",n.pages.length,"")}}function P(e,l){1&e&&t.YNc(0,r,8,2,"li",6),2&e&&t.um2(0,l.state.pages.length>0?0:-1)}const d=/[^0-9]/g;let C=(()=>{class e{constructor(){this.customPage=4}getPageSymbol(n){return["A","B","C","D","E","F"][n-1]}formatInput(n){n.value=n.value.replace(d,"")}handleTheChange(n,a){const i=parseInt(n.value);a.actions.select(i),n.value=a.stores.page$().toString()}static#t=this.\u0275fac=function(a){return new(a||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:11,vars:2,consts:[["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized links",3,"auPage","auPageChange"],["auPaginationPrevious",""],["auPaginationNext",""],["auPaginationNumber",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized pages",3,"auPage","auPageChange"],["auPaginationPages",""],["class","au-custom-pages-item"],[1,"au-custom-pages-item"],[1,"mb-3","d-flex","flex-nowrap","px-2"],["id","paginationInputLabel","for","paginationInput",1,"col-form-label","me-2","ms-1"],["type","text","inputmode","numeric","pattern","[0-9]*","id","paginationInput","aria-labelledby","paginationInputLabel paginationDescription",1,"form-control","custom-pages-input",2,"width","2.5rem",3,"value","keyup.enter","blur","input"],["i",""],["id","paginationDescription",1,"col-form-label","text-nowrap","px-2"]],template:function(a,o){1&a&&(t.TgZ(0,"p"),t._uU(1,"A pagination with customized links:"),t.qZA(),t.TgZ(2,"nav",0),t.NdJ("auPageChange",function(u){return o.customPage=u}),t.YNc(3,s,1,0,"ng-template",1)(4,c,1,0,"ng-template",2)(5,m,1,1,"ng-template",3),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"p"),t._uU(8,"A pagination with customized pages:"),t.qZA(),t.TgZ(9,"nav",4),t.NdJ("auPageChange",function(u){return o.customPage=u}),t.YNc(10,P,1,1,"ng-template",5),t.qZA()),2&a&&(t.xp6(2),t.Q6J("auPage",o.customPage),t.xp6(7),t.Q6J("auPage",o.customPage))},dependencies:[g.NS,g.Qt,g.Uq,g.oC,g.QR,g.El],encapsulation:2})}return e})()}}]);