import{J as Q,T as B,W as P,Y as f,_ as k}from"./chunk-ZTGIUBNC.js";import"./chunk-76C65R65.js";import{Ab as N,Cb as M,Db as H,Fb as m,Mb as d,Na as s,Qa as v,W as g,X as c,Ya as x,Z as S,Za as F,bb as p,eb as l,gb as _,hb as D,mb as T,nb as I,ob as b,pa as C,pb as i,qb as r,rb as w,wb as E,xa as h}from"./chunk-CYWWGTBG.js";function j(e,t){}function q(e,t){if(e&1&&(i(0,"span",1),p(1,j,0,0,"ng-template",2),r()),e&2){let u=t.$implicit,a=E();s(),l("auSlot",a.state().slotStar)("auSlotProps",u)}}var y=(()=>{let t=class t{constructor(){this.templateRef=C(v)}static ngTemplateContextGuard(a,n){return!0}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=S({type:t,selectors:[["ng-template","appRatingStar",""]],standalone:!0});let e=t;return e})(),z=(()=>{let t=class t extends B{constructor(){super(...arguments),this._widget=P({factory:Q,widgetName:"rating",defaultConfig:{readonly:!0},events:{onHover:()=>{},onLeave:()=>{},onRatingChange:()=>{}}})}ngAfterContentChecked(){this._widget.patchSlots({slotStar:this.slotStarFromContent?.templateRef})}};t.\u0275fac=(()=>{let a;return function(o){return(a||(a=h(t)))(o||t)}})(),t.\u0275cmp=c({type:t,selectors:[["app-rating-readonly"]],contentQueries:function(n,o,A){if(n&1&&N(A,y,5),n&2){let R;M(R=H())&&(o.slotStarFromContent=R.first)}},inputs:{slotStar:"slotStar",rating:[g.HasDecoratorInputTransform,"rating","rating",f],maxRating:[g.HasDecoratorInputTransform,"maxRating","maxRating",f],className:"className"},standalone:!0,features:[F,x,d],decls:3,vars:2,consts:[[1,"d-inline-flex","au-rating"],[1,"au-rating-star"],[3,"auSlot","auSlotProps"],["class","au-rating-star"]],template:function(n,o){n&1&&(i(0,"div",0),I(1,q,2,2,"span",3,T),r()),n&2&&(D(o.state().className),s(),b(o.state().stars))},dependencies:[k],encapsulation:2,changeDetection:0});let e=t;return e})();function G(e,t){if(e&1&&(i(0,"span",4),m(1,"\u2605"),r()),e&2){let u=t.fill,a=t.index;_("filled",u===100)("bad",a<3)}}var Z=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[d],decls:7,vars:4,consts:[[3,"rating","maxRating"],[1,"mt-2"],["className","rating-custom",3,"rating","maxRating"],["appRatingStar",""],[1,"star"]],template:function(n,o){n&1&&(i(0,"div"),m(1,"The readonly rating without slot:"),r(),w(2,"app-rating-readonly",0),i(3,"div",1),m(4,"Using a slot to customize the display:"),r(),i(5,"app-rating-readonly",2),p(6,G,2,4,"ng-template",3),r()),n&2&&(s(2),l("rating",7)("maxRating",10),s(3),l("rating",7)("maxRating",10))},dependencies:[z,y],styles:[`.rating-custom .star{font-size:150%;color:#b0c4de}.rating-custom .filled{color:#1e90ff}.rating-custom .bad{color:#deb0b0}.rating-custom .filled.bad{color:#ff1e1e}
`],encapsulation:2});let e=t;return e})();export{Z as default};