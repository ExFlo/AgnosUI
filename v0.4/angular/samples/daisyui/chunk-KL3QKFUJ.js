import{a as q}from"./chunk-AO7SUHAN.js";import{c as j}from"./chunk-MREWHEL4.js";import{b as P,l as z,m as A,n as R}from"./chunk-JTOYIAPR.js";import{Ab as V,Cb as f,Ia as S,La as d,Ta as N,Ua as B,W as T,Xa as _,Ya as F,Za as I,_ as c,bb as L,cb as g,ga as x,gb as n,ha as D,hb as o,ka as w,lb as M,mb as p,nb as u,oa as y,ob as W,pa as m,pb as k,vb as b,yb as H,zb as E}from"./chunk-EL7BL32O.js";var K=["*"];function O(l,r){if(l&1){let e=M();n(0,"button",2),p("click",function(){x(e);let i=u(2);return D(i.api.close())}),o()}if(l&2){let e=u(2);I("innerHTML",e.closeIcon,S),F("aria-label",e.state().ariaCloseButtonLabel)}}function Q(l,r){if(l&1&&(n(0,"div"),k(1),_(2,O,1,2,"button",1),o()),l&2){let e=u();L("alert ",e.state().className," flex"),d(2),g(e.state().dismissible?2:-1)}}var s=class s extends z{constructor(){super(...arguments);this.closeIcon=T(j).bypassSecurityTrustHtml(q);this.visible=N(!1);this.dismissible=m(void 0,{transform:R});this.ariaCloseButtonLabel=m();this.className=m();this.hidden=y();this.shown=y();this._widget=A({factory:P,widgetName:"toast",events:{onVisibleChange:this.visible.set,onShown:()=>this.shown.emit(),onHidden:()=>this.hidden.emit()}})}};s.\u0275fac=(()=>{let e;return function(i){return(e||(e=w(s)))(i||s)}})(),s.\u0275cmp=c({type:s,selectors:[["app-toast"]],inputs:{visible:[1,"visible"],dismissible:[1,"dismissible"],ariaCloseButtonLabel:[1,"ariaCloseButtonLabel"],className:[1,"className"]},outputs:{visible:"visibleChange",hidden:"hidden",shown:"shown"},standalone:!0,features:[B,f],ngContentSelectors:K,decls:1,vars:1,consts:[[3,"class"],[1,"btn","btn-sm","btn-circle","btn-ghost",3,"innerHTML"],[1,"btn","btn-sm","btn-circle","btn-ghost",3,"click","innerHTML"]],template:function(t,i){t&1&&(W(),_(0,Q,3,4,"div",0)),t&2&&g(i.state().hidden?-1:0)},encapsulation:2,changeDetection:0});var C=s;var a=class a{constructor(){this.visible=!0}reset(){this.visible=!0}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c({type:a,selectors:[["ng-component"]],standalone:!0,features:[f],decls:8,vars:1,consts:[[1,"h-[215px]"],[1,"btn","btn-primary",3,"click"],[1,"toast"],["className","alert-success",3,"visibleChange","visible"],["className","alert-error","dismissible","false"]],template:function(e,t){e&1&&(n(0,"div",0)(1,"button",1),p("click",function(){return t.reset()}),b(2,"Reset Toast"),o(),n(3,"div",2)(4,"app-toast",3),V("visibleChange",function(h){return E(t.visible,h)||(t.visible=h),h}),b(5,"This is a success toast"),o(),n(6,"app-toast",4),b(7,"This is an error toast"),o()()()),e&2&&(d(4),H("visible",t.visible))},dependencies:[C],encapsulation:2});var v=a;export{v as default};