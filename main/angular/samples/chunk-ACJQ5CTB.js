import{w as g}from"./chunk-DFJ7SQZQ.js";import"./chunk-WAOX7T3W.js";import{N as k,w as E,x as F}from"./chunk-XBN3IS3P.js";import{m as v,n as y}from"./chunk-HAS6OM4L.js";import{Hb as n,Ib as d,La as a,Pb as f,Tb as h,Ub as b,X as p,gb as m,rb as e,sb as t,tb as c,xb as u}from"./chunk-RNBRMLEW.js";var I=(()=>{let i=class i{constructor(){this.activeElements=[],this.activeElementsJson="",this.unsubscribe=()=>{},this.hasFocusApi=F(),this.unsubscribe=E.subscribe(o=>{this.activeElements.push({tagName:o?.tagName.toLowerCase(),id:o?.id||void 0}),this.activeElementsJson=JSON.stringify(this.activeElements)})}ngOnDestroy(){this.unsubscribe()}clear(){this.activeElements=[],this.activeElementsJson=JSON.stringify([])}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=p({type:i,selectors:[["ng-component"]],standalone:!0,features:[f],decls:20,vars:5,consts:[[1,"demo-focustrack"],[1,"my-2","p-2","border",3,"auUse"],["type","text","placeholder","Focusable input","id","focusableInput",1,"form-control"],["type","text","placeholder","Other focusable input","id","otherFocusableInput",1,"form-control"],["type","text","placeholder","Disabled input","id","disabledInput","disabled","",1,"form-control"],[1,"form-check","mb-2"],["type","checkbox","id","containerHasFocus","disabled","",1,"form-check-input",3,"checked"],["for","containerHasFocus",1,"form-check-label"],["for","activeElementHistory",1,"form-label"],["id","activeElementHistory","readonly","",1,"form-control","mb-2"],[1,"btn","btn-primary",3,"click"]],template:function(s,r){s&1&&(e(0,"div",0)(1,"div",1)(2,"h5"),n(3,"Container"),t(),c(4,"input",2)(5,"br")(6,"input",3),t(),c(7,"input",4)(8,"br"),e(9,"div",5),c(10,"input",6),h(11,"async"),e(12,"label",7),n(13,"Focus in container"),t()(),e(14,"label",8),n(15,"Active element history:"),t(),e(16,"textarea",9),n(17),t(),e(18,"button",10),u("click",function(){return r.clear()}),n(19,"Clear"),t()()),s&2&&(a(),m("auUse",r.hasFocusApi.directive),a(9),m("checked",b(11,3,r.hasFocusApi.hasFocus$)),a(7),d(r.activeElementsJson))},dependencies:[g,k,y,v],encapsulation:2});let l=i;return l})();export{I as default};
