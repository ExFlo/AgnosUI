import"./chunk-BYXBJQAS.js";import"./chunk-F7BZ6JND.js";import{T as s,V as g,l as E,m as F}from"./chunk-PGL2XZA6.js";import"./chunk-DMXSLBKY.js";import{$a as l,Bb as n,Cb as b,Ib as h,La as o,Sa as d,_ as p,bc as v,dc as y,kb as e,lb as t,mb as c,pb as f}from"./chunk-WXQMDDQY.js";var m=class u{constructor(){this.hasFocusApi=F();this.hasFocus=s(this.hasFocusApi.hasFocus$);this.activeElements=d([]);this.activeElementsJson=v(()=>JSON.stringify(this.activeElements()));this.activeElement=s(E);y(()=>{this.activeElements.update(r=>r.concat([{tagName:this.activeElement()?.tagName?.toLowerCase(),id:this.activeElement()?.id||void 0}]))},{allowSignalWrites:!0})}clear(){this.activeElements.set([])}static{this.\u0275fac=function(i){return new(i||u)}}static{this.\u0275cmp=p({type:u,selectors:[["ng-component"]],standalone:!0,features:[h],decls:19,vars:3,consts:[[1,"demo-focustrack"],[1,"my-2","p-2","border",3,"auUse"],["type","text","placeholder","Focusable input","id","focusableInput",1,"form-control"],["type","text","placeholder","Other focusable input","id","otherFocusableInput",1,"form-control"],["type","text","placeholder","Disabled input","id","disabledInput","disabled","",1,"form-control"],[1,"form-check","mb-2"],["type","checkbox","id","containerHasFocus","disabled","",1,"form-check-input",3,"checked"],["for","containerHasFocus",1,"form-check-label"],["for","activeElementHistory",1,"form-label"],["id","activeElementHistory","readonly","",1,"form-control","mb-2"],[1,"btn","btn-primary",3,"click"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"div",1)(2,"h5"),n(3,"Container"),t(),c(4,"input",2)(5,"br")(6,"input",3),t(),c(7,"input",4)(8,"br"),e(9,"div",5),c(10,"input",6),e(11,"label",7),n(12,"Focus in container"),t()(),e(13,"label",8),n(14,"Active element history:"),t(),e(15,"textarea",9),n(16),t(),e(17,"button",10),f("click",function(){return a.clear()}),n(18,"Clear"),t()()),i&2&&(o(),l("auUse",a.hasFocusApi.directive),o(9),l("checked",a.hasFocus()),o(6),b(a.activeElementsJson()))},dependencies:[g],encapsulation:2,changeDetection:0})}};export{m as default};