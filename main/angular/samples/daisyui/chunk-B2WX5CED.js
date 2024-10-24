import{a as O,j as _,k as S,l as M,m as A,n as b,o as h}from"./chunk-LDRIEDOF.js";import{$a as F,Cb as N,Ja as p,Pa as x,Qa as g,T as U,Ta as E,Wa as s,X as l,db as i,eb as o,gb as v,hb as C,jb as H,lb as D,mb as y,oa as m,pa as a,sb as c,zb as u}from"./chunk-SP56K5OG.js";var k=["*"],f=class t extends A{constructor(){super(b({factory:_,widgetName:"accordion",events:{onItemShown:e=>this.itemShown.emit(e),onItemHidden:e=>this.itemHidden.emit(e)}}));this.closeOthers=a(void 0,{transform:h});this.itemDestroyOnHide=a(void 0,{transform:h});this.className=a();this.itemShown=m();this.itemHidden=m()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-accordion"]],inputs:{closeOthers:[1,"closeOthers"],itemDestroyOnHide:[1,"itemDestroyOnHide"],className:[1,"className"]},outputs:{itemShown:"itemShown",itemHidden:"itemHidden"},standalone:!0,features:[g,u],ngContentSelectors:k,decls:2,vars:1,consts:[[1,"flex","flex-col","gap-2",3,"auUse"]],template:function(n,r){n&1&&(D(),i(0,"div",0),y(1),o()),n&2&&s("auUse",r.directives.accordionDirective)},dependencies:[S],encapsulation:2,changeDetection:0})}};var B=[[["","header",""]],"*"],P=["[header]","*"],V=(t,d)=>[t,d];function q(t,d){t&1&&y(0,1)}var w=class t extends A{constructor(){super(b({factory:e=>U(f).api.registerItem(e),defaultConfig:{transition:O({showClasses:["collapse-open"],animationPendingShowClasses:["collapse-open"]})},events:{onVisibleChange:e=>this.visible.set(e),onHidden:()=>this.hidden.emit(),onShown:()=>this.shown.emit()}}));this.className=a();this.destroyOnHide=a(void 0,{transform:h});this.visible=x(!1);this.id=a();this.shown=m();this.hidden=m()}ngAfterViewInit(){queueMicrotask(()=>this.api.initDone())}onEnter(e){e.key==="Enter"&&this.api.toggle()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-accordion-item"]],inputs:{className:[1,"className"],destroyOnHide:[1,"destroyOnHide"],visible:[1,"visible"],id:[1,"id"]},outputs:{visible:"visibleChange",shown:"shown",hidden:"hidden"},standalone:!0,features:[g,u],ngContentSelectors:P,decls:5,vars:7,consts:[[1,"collapse","collapse-arrow","bg-base-200",3,"auUseMulti"],["role","button","tabindex","0",1,"collapse-title","text-xl","font-medium","focus-visible:outline-none",3,"keydown","auUse"],[1,"collapse-content",3,"auUse"]],template:function(n,r){n&1&&(D(B),i(0,"div",0)(1,"div",1),H("keydown",function(j){return r.onEnter(j)}),y(2),o(),i(3,"div",2),E(4,q,1,0),o()()),n&2&&(s("auUseMulti",N(4,V,r.directives.itemDirective,r.directives.transitionDirective)),p(),s("auUse",r.directives.toggleDirective),p(2),s("auUse",r.directives.bodyContainerAttrsDirective),p(),F(r.state.shouldBeInDOM()?4:-1))},dependencies:[S,M],encapsulation:2,changeDetection:0})}};var I=class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],standalone:!0,features:[u],decls:13,vars:1,consts:[["closeOthers","","itemDestroyOnHide",""],[3,"visible"],["header",""]],template:function(e,n){e&1&&(i(0,"app-accordion",0)(1,"app-accordion-item",1),v(2,2),c(3," First header "),C(),c(4," First content "),o(),i(5,"app-accordion-item"),v(6,2),c(7," Second header "),C(),c(8," Second content "),o(),i(9,"app-accordion-item"),v(10,2),c(11," Third header "),C(),c(12," Third content "),o()()),e&2&&(p(),s("visible",!0))},dependencies:[f,w],encapsulation:2})}};export{I as default};