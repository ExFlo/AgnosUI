import{C as w}from"./chunk-HFDDICDQ.js";import"./chunk-VIY4ZAN7.js";import"./chunk-XPVCXEMV.js";import{Ab as d,Cb as E,Hb as C,Ma as g,Na as u,T as v,ab as I,ba as p,ib as P,jb as S,ka as _,kb as k,la as A,lb as r,mb as a,nb as f,pb as T,qb as s,rb as D}from"./chunk-CKC7SV4U.js";function F(h,t){if(h&1){let e=T();r(0,"au-component",1),s("auHidden",function(){let c=_(e).$implicit,x=D();return A(x.removeAlert(c))}),a()}if(h&2){let e=t.$implicit;I("auAnimated",e.animated)("auAnimatedOnInit",e.animatedOnInit)("auDismissible",e.dismissible)("auType",e.type)("auChildren",e.children)}}var i=class i{constructor(){this.alerts=[]}add(t){this.alerts.push(t)}remove(t){this.alerts=this.alerts.filter(e=>e!==t)}clear(){this.alerts=[]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"});var m=i,o=class o{constructor(t){this.alertContainerService=t}removeAlert(t){this.alertContainerService.remove(t)}};o.\u0275fac=function(e){return new(e||o)(u(m))},o.\u0275cmp=p({type:o,selectors:[["app-alert-child"]],standalone:!0,features:[C],decls:2,vars:0,consts:[["auAlert","",3,"auAnimated","auAnimatedOnInit","auDismissible","auType","auChildren"],["auAlert","",3,"auHidden","auAnimated","auAnimatedOnInit","auDismissible","auType","auChildren"]],template:function(e,n){e&1&&S(0,F,1,5,"au-component",0,P),e&2&&k(n.alertContainerService.alerts)},dependencies:[w],encapsulation:2});var b=o,l=class l{constructor(t){this.alertContainerService=t}addError(){this.alertContainerService.add({type:"danger",children:"Error",dismissible:!0,animated:!0})}addWarning(){this.alertContainerService.add({type:"warning",children:"Warning",dismissible:!0,animated:!0})}addInfo(){this.alertContainerService.add({type:"info",children:"Info",dismissible:!0,animated:!0})}};l.\u0275fac=function(e){return new(e||l)(u(m))},l.\u0275cmp=p({type:l,selectors:[["ng-component"]],standalone:!0,features:[C],decls:10,vars:1,consts:[[1,"btn","btn-primary","addError","me-1",3,"click"],[1,"btn","btn-primary","addInfo","me-1",3,"click"],[1,"btn","btn-primary","addWarning","me-1",3,"click"],[1,"alertCount","mb-3"]],template:function(e,n){e&1&&(r(0,"button",0),s("click",function(){return n.addError()}),d(1,"Add error"),a(),r(2,"button",1),s("click",function(){return n.addInfo()}),d(3,"Add info"),a(),r(4,"button",2),s("click",function(){return n.addWarning()}),d(5,"Add warning"),a(),f(6,"br"),r(7,"div",3),d(8),a(),f(9,"app-alert-child")),e&2&&(g(8),E("Alerts in the service: ",n.alertContainerService.alerts.length,""))},dependencies:[b],encapsulation:2});var y=l;export{b as ChildComponent,y as default};
