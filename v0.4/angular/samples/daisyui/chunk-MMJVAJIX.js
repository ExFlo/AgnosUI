import{a as _,i as B,j as I,k as j,l as A,m as F,n as v}from"./chunk-XTZ7RIMD.js";import{Cb as f,Db as T,La as u,Ta as O,Ua as D,W as N,Xa as U,Za as r,_ as m,cb as M,gb as i,hb as n,jb as w,ka as C,kb as S,mb as W,oa as p,ob as b,pa as a,pb as h,vb as s}from"./chunk-ZXQKIO4X.js";var q=["*"],c=class c extends A{constructor(){super(...arguments);this.closeOthers=a(void 0,{transform:v});this.itemDestroyOnHide=a(void 0,{transform:v});this.className=a();this.itemShown=p();this.itemHidden=p();this._widget=F({factory:B,widgetName:"accordion",events:{onItemShown:e=>this.itemShown.emit(e),onItemHidden:e=>this.itemHidden.emit(e)}})}};c.\u0275fac=(()=>{let e;return function(t){return(e||(e=C(c)))(t||c)}})(),c.\u0275cmp=m({type:c,selectors:[["app-accordion"]],inputs:{closeOthers:[1,"closeOthers"],itemDestroyOnHide:[1,"itemDestroyOnHide"],className:[1,"className"]},outputs:{itemShown:"itemShown",itemHidden:"itemHidden"},standalone:!0,features:[D,f],ngContentSelectors:q,decls:2,vars:1,consts:[[1,"flex","flex-col","gap-2",3,"auUse"]],template:function(o,t){o&1&&(b(),i(0,"div",0),h(1),n()),o&2&&r("auUse",t.widget.directives.accordionDirective)},dependencies:[I],encapsulation:2,changeDetection:0});var g=c;var K=[[["","header",""]],"*"],z=["[header]","*"],G=(E,l)=>[E,l];function J(E,l){E&1&&h(0,1)}var d=class d extends A{constructor(){super(...arguments);this.className=a();this.destroyOnHide=a(void 0,{transform:v});this.visible=O(!1);this.id=a();this.shown=p();this.hidden=p();this.accordionComponent=N(g);this._widget=F({factory:e=>this.accordionComponent.api.registerItem(e),defaultConfig:{transition:_({showClasses:["collapse-open"],animationPendingShowClasses:["collapse-open"]})},events:{onVisibleChange:e=>this.visible.set(e),onHidden:()=>this.hidden.emit(),onShown:()=>this.shown.emit()}})}ngAfterViewInit(){queueMicrotask(()=>this.api.initDone())}onEnter(e){e.key==="Enter"&&this.widget.api.toggle()}};d.\u0275fac=(()=>{let e;return function(t){return(e||(e=C(d)))(t||d)}})(),d.\u0275cmp=m({type:d,selectors:[["app-accordion-item"]],inputs:{className:[1,"className"],destroyOnHide:[1,"destroyOnHide"],visible:[1,"visible"],id:[1,"id"]},outputs:{visible:"visibleChange",shown:"shown",hidden:"hidden"},standalone:!0,features:[D,f],ngContentSelectors:z,decls:5,vars:7,consts:[[1,"collapse","collapse-arrow","bg-base-200",3,"auUseMulti"],["role","button","tabindex","0",1,"collapse-title","text-xl","font-medium","focus-visible:outline-none",3,"keydown","auUse"],[1,"collapse-content",3,"auUse"]],template:function(o,t){o&1&&(b(K),i(0,"div",0)(1,"div",1),W("keydown",function(V){return t.onEnter(V)}),h(2),n(),i(3,"div",2),U(4,J,1,0),n()()),o&2&&(r("auUseMulti",T(4,G,t.widget.directives.itemDirective,t.widget.directives.transitionDirective)),u(),r("auUse",t.widget.directives.toggleDirective),u(2),r("auUse",t.widget.directives.bodyContainerAttrsDirective),u(),M(t.state().shouldBeInDOM?4:-1))},dependencies:[I,j],encapsulation:2,changeDetection:0});var x=d;var y=class y{};y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=m({type:y,selectors:[["ng-component"]],standalone:!0,features:[f],decls:13,vars:1,consts:[["closeOthers","","itemDestroyOnHide",""],[3,"visible"],["header",""]],template:function(e,o){e&1&&(i(0,"app-accordion",0)(1,"app-accordion-item",1),w(2,2),s(3," First header "),S(),s(4," First content "),n(),i(5,"app-accordion-item"),w(6,2),s(7," Second header "),S(),s(8," Second content "),n(),i(9,"app-accordion-item"),w(10,2),s(11," Third header "),S(),s(12," Third content "),n()()),e&2&&(u(),r("visible",!0))},dependencies:[g,x],encapsulation:2});var H=y;export{H as default};
