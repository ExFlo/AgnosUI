import"./chunk-BYXBJQAS.js";import"./chunk-Y7KYDSHQ.js";import{Q as m,S as F,i as E,j as g}from"./chunk-R6ULA5MM.js";import"./chunk-WI73FVBD.js";import{$b as v,Ab as i,Bb as b,Hb as h,Ma as c,Va as d,ab as s,ba as p,bc as y,lb as e,mb as t,nb as r,qb as f}from"./chunk-BJ5RCGRN.js";var n=class n{constructor(){this.hasFocusApi=g();this.hasFocus=m(this.hasFocusApi.hasFocus$);this.activeElements=d([]);this.activeElementsJson=v(()=>JSON.stringify(this.activeElements()));this.activeElement=m(E);y(()=>{this.activeElements.update(l=>l.concat([{tagName:this.activeElement()?.tagName?.toLowerCase(),id:this.activeElement()?.id||void 0}]))},{allowSignalWrites:!0})}clear(){this.activeElements.set([])}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=p({type:n,selectors:[["ng-component"]],standalone:!0,features:[h],decls:19,vars:3,consts:[[1,"demo-focustrack"],[1,"my-2","p-2","border",3,"auUse"],["type","text","placeholder","Focusable input","id","focusableInput",1,"form-control"],["type","text","placeholder","Other focusable input","id","otherFocusableInput",1,"form-control"],["type","text","placeholder","Disabled input","id","disabledInput","disabled","",1,"form-control"],[1,"form-check","mb-2"],["type","checkbox","id","containerHasFocus","disabled","",1,"form-check-input",3,"checked"],["for","containerHasFocus",1,"form-check-label"],["for","activeElementHistory",1,"form-label"],["id","activeElementHistory","readonly","",1,"form-control","mb-2"],[1,"btn","btn-primary",3,"click"]],template:function(a,o){a&1&&(e(0,"div",0)(1,"div",1)(2,"h5"),i(3,"Container"),t(),r(4,"input",2)(5,"br")(6,"input",3),t(),r(7,"input",4)(8,"br"),e(9,"div",5),r(10,"input",6),e(11,"label",7),i(12,"Focus in container"),t()(),e(13,"label",8),i(14,"Active element history:"),t(),e(15,"textarea",9),i(16),t(),e(17,"button",10),f("click",function(){return o.clear()}),i(18,"Clear"),t()()),a&2&&(c(),s("auUse",o.hasFocusApi.directive),c(9),s("checked",o.hasFocus()),c(6),b(o.activeElementsJson()))},dependencies:[F],encapsulation:2,changeDetection:0});var u=n;export{u as default};
