import{Q as D,R as g}from"./chunk-T6XCJEOV.js";import{Y as b}from"./chunk-H5IKKGQF.js";import"./chunk-6KLO2SVP.js";import{Bb as m,Db as M,Ib as p,La as f,Ua as C,W as d,_ as r,ka as u,kb as a,lb as i,pb as s}from"./chunk-DVQ4EFK2.js";var l=class e extends b{static{this.\u0275fac=(()=>{let o;return function(n){return(o||(o=u(e)))(n||e)}})()}static{this.\u0275cmp=r({type:e,selectors:[["ng-component"]],standalone:!0,features:[C,p],decls:4,vars:1,consts:[["type","button",1,"btn","btn-outline-primary",3,"click"]],template:function(t,n){t&1&&(a(0,"p"),m(1),i(),a(2,"button",0),s("click",function(){return n.api.close(!0)}),m(3,"Close"),i()),t&2&&(f(),M("Hello, ",n.state.contentData.name,"!"))},encapsulation:2})}};var c=class e{constructor(){this.modalService=d(g)}openModal(){this.modalService.open({title:"Hi there!",children:l,contentData:{name:"World"}})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["ng-component"]],standalone:!0,features:[p],decls:2,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){t&1&&(a(0,"button",0),s("click",function(){return n.openModal()}),m(1,"Launch demo modal"),i())},dependencies:[D],encapsulation:2})}};export{c as default};
