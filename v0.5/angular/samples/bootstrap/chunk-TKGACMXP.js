import"./chunk-BYXBJQAS.js";import"./chunk-JFL6FQYB.js";import{R,a as B,g as I,h as P}from"./chunk-GDIIEU3W.js";import{A as w,W as A,Y as F,c as g,ga as x,ja as O,la as V,qa as N}from"./chunk-AWWQU5ES.js";import{m as D,n as h}from"./chunk-RIDGTTAP.js";import{Cb as i,Eb as f,Jb as T,La as o,Pb as m,Qb as d,Sa as M,Za as b,_,ab as u,cb as C,hb as v,lb as t,mb as n,nb as k,qb as a,rb as $}from"./chunk-DKG3CSSF.js";function q(l,p){if(l&1&&(t(0,"div",9)(1,"div",10)(2,"div",11),i(3,"You can collapse this card by clicking Toggle"),n()()()),l&2){let r=$();u("auUse",r.transition.directives.directive)}}var S=g(I),z=g(!0),H=g(!1),G=g(!0),U=g(!0),y=class l{constructor(){this.bootstrap={collapseHorizontalTransition:P,collapseVerticalTransition:I,fadeTransition:B};this.paramTransition$=S;this.paramAnimated$=z;this.paramAnimatedOnInit$=H;this.paramRemoveFromDom$=U;this.transition=w({props:{animatedOnInit:H,animated:z,visible:G,transition:S}});this.state=A(this.transition.state$)}changeTransition(p){this.transition.api.toggle(!1,!1),U.set(!0),S.set(p)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=_({type:l,selectors:[["app-transition-inner"]],standalone:!0,features:[T],decls:49,vars:31,consts:[[1,"transition-inner"],[1,"h6","mt-2"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check","mb-2"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"mt-2"],[2,"max-width","300px",3,"auUse"],[1,"card",2,"width","300px"],[1,"card-body"]],template:function(r,e){r&1&&(t(0,"div",0)(1,"div",1),i(2,"Transition:"),n(),t(3,"div",2)(4,"button",3),m(5,"async"),a("click",function(){return e.changeTransition(e.bootstrap.collapseVerticalTransition)}),i(6," Vertical collapse "),n(),t(7,"button",3),m(8,"async"),a("click",function(){return e.changeTransition(e.bootstrap.collapseHorizontalTransition)}),i(9," Horizontal collapse "),n(),t(10,"button",3),m(11,"async"),a("click",function(){return e.changeTransition(e.bootstrap.fadeTransition)}),i(12," Fade "),n()(),t(13,"div",1),i(14,"Other properties:"),n(),t(15,"label",4)(16,"input",5),m(17,"async"),a("ngModelChange",function(c){return e.paramAnimated$.set(c)}),n(),i(18,"Animated"),n(),t(19,"label",4)(20,"input",5),m(21,"async"),a("ngModelChange",function(c){return e.paramAnimatedOnInit$.set(c)}),n(),i(22,"Animated on init"),n(),t(23,"label",4)(24,"input",5),m(25,"async"),a("ngModelChange",function(c){return e.paramRemoveFromDom$.set(c)}),n(),i(26,"Remove from DOM"),n(),t(27,"label",6)(28,"input",5),m(29,"async"),a("ngModelChange",function(c){return e.transition.patch({visible:c})}),n(),i(30,"Visible"),n(),t(31,"div",2)(32,"button",7),a("click",function(){return e.transition.api.toggle()}),i(33,"Toggle"),n(),t(34,"button",7),a("click",function(){return e.transition.api.toggle(void 0,!0)}),i(35,"Toggle with animation"),n(),t(36,"button",7),a("click",function(){return e.transition.api.toggle(void 0,!1)}),i(37,"Toggle without animation"),n()(),t(38,"ul",8)(39,"li"),i(40),n(),t(41,"li"),i(42),n(),t(43,"li"),i(44),n(),t(45,"li"),i(46),n()(),b(47,q,4,1,"div",9),m(48,"async"),n()),r&2&&(o(4),C("active",d(5,15,e.paramTransition$)===e.bootstrap.collapseVerticalTransition),o(3),C("active",d(8,17,e.paramTransition$)===e.bootstrap.collapseHorizontalTransition),o(3),C("active",d(11,19,e.paramTransition$)===e.bootstrap.fadeTransition),o(6),u("ngModel",d(17,21,e.paramAnimated$)),o(4),u("ngModel",d(21,23,e.paramAnimatedOnInit$)),o(4),u("ngModel",d(25,25,e.paramRemoveFromDom$)),o(4),u("ngModel",d(29,27,e.transition.stores.visible$)),o(12),f("visible = ",e.state().visible,""),o(2),f("transitioning = ",e.state().transitioning,""),o(2),f("shown = ",e.state().shown,""),o(2),f("hidden = ",e.state().hidden,""),o(),v(d(48,29,e.paramRemoveFromDom$)===!1||e.state().hidden===!1?47:-1))},dependencies:[R,F,N,x,O,V,h,D],encapsulation:2,changeDetection:0})}};function J(l,p){l&1&&k(0,"app-transition-inner")}var E=class l{constructor(){this.showComponent=M(!0)}toggleShow(){this.showComponent.update(p=>!p)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=_({type:l,selectors:[["ng-component"]],standalone:!0,features:[T],decls:4,vars:1,consts:[[1,"demo-transition","mb-3"],["id","toggle-component",1,"btn","btn-outline-secondary",3,"click"]],template:function(r,e){r&1&&(t(0,"div",0)(1,"button",1),a("click",function(){return e.toggleShow()}),i(2,"Toggle component"),n(),b(3,J,1,0,"app-transition-inner"),n()),r&2&&(o(3),v(e.showComponent()?3:-1))},dependencies:[h,y],encapsulation:2,changeDetection:0})}};export{E as default};
