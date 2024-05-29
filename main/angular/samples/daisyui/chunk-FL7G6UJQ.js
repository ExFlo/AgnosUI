import{e as x,h as b,i as F,j as h,l as o}from"./chunk-22UU6AO4.js";import{Ia as s,Pa as f,Qa as v,Va as D,Wa as n,Xa as N,Za as y,_ as m,db as p,eb as l,fb as u,ka as g,pb as d,rb as C,wb as c}from"./chunk-4GVTKJWB.js";var S=(()=>{let e=class e extends F{constructor(){super(...arguments),this._widget=h({factory:x,widgetName:"progressbar"})}};e.\u0275fac=(()=>{let i;return function(t){return(i||(i=g(e)))(t||e)}})(),e.\u0275cmp=m({type:e,selectors:[["app-progressbar"]],inputs:{max:[2,"max","max",o],value:[2,"value","value",o],ariaLabel:"ariaLabel",className:"className",ariaValueTextFn:"ariaValueTextFn"},standalone:!0,features:[v,f,c],decls:1,vars:5,consts:[[1,"progress",3,"auUse"]],template:function(a,t){a&1&&u(0,"progress",0),a&2&&(y(t.state().className),n("auUse",t.widget.directives.ariaDirective),D("value",t.state().value)("max",t.state().max))},dependencies:[b],encapsulation:2,changeDetection:0});let r=e;return r})();var T=(()=>{let e=class e extends F{constructor(){super(...arguments),this._widget=h({factory:x,widgetName:"progressbar"}),this.percentFormat=new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1})}};e.\u0275fac=(()=>{let i;return function(t){return(i||(i=g(e)))(t||e)}})(),e.\u0275cmp=m({type:e,selectors:[["app-radial-progress"]],inputs:{min:[2,"min","min",o],max:[2,"max","max",o],value:[2,"value","value",o],ariaLabel:"ariaLabel",className:"className",ariaValueTextFn:"ariaValueTextFn"},standalone:!0,features:[v,f,c],decls:2,vars:8,consts:[[1,"radial-progress",3,"auUse"]],template:function(a,t){a&1&&(p(0,"div",0),d(1),l()),a&2&&(y(t.state().className),N("--thickness","0.4rem")("--value",t.state().percentage),n("auUse",t.widget.directives.ariaDirective),s(),C(" ",t.percentFormat.format(t.state().percentage/100)," "))},dependencies:[b],encapsulation:2,changeDetection:0});let r=e;return r})();var L=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],standalone:!0,features:[c],decls:9,vars:9,consts:[[1,"text-lg","mb-2"],["className","progress-primary",3,"value"],["className","progress-info",3,"value","max"],[1,"text-lg","mt-4","mb-2"],[1,"flex","gap-6"],["className","text-primary",3,"min","max","value"],["className","bg-info text-info-content border-4 border-info",3,"min","max","value"]],template:function(a,t){a&1&&(p(0,"h2",0),d(1,"Simple progressbars"),l(),u(2,"app-progressbar",1)(3,"app-progressbar",2),p(4,"h2",3),d(5,"Radial progress"),l(),p(6,"div",4),u(7,"app-radial-progress",5)(8,"app-radial-progress",6),l()),a&2&&(s(2),n("value",20),s(),n("value",4)("max",5),s(4),n("min",10)("max",20)("value",13),s(),n("min",9)("max",20)("value",17))},dependencies:[S,T],encapsulation:2});let r=e;return r})();export{L as default};