import{D as F,o as b,p as v}from"./chunk-Y7KYDSHQ.js";import{Q as h,ca as S,ea as T,ga as x,la as _}from"./chunk-R6ULA5MM.js";import"./chunk-WI73FVBD.js";import{Ab as r,Gb as p,Hb as C,Ma as c,ab as d,ba as g,lb as l,mb as o,nb as u,qb as a}from"./chunk-BJ5RCGRN.js";var s=class s{constructor(){this.mainList=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"];this.items=[];this.widgetsConfig$=v();this.widgetsConfig=h(this.widgetsConfig$);let e=location.hash.split("?")[1],t=new URL(e?`?${e}`:"",location.href);this.widgetsConfig$.set({select:{filterText:t.searchParams.get("filterText")??""}})}onFilterTextChange(e){if(this.filterText!==e){this.filterText=e;let t=this.mainList;this.items=e?t.filter(n=>n.toLowerCase().startsWith(e??"")):t.slice(0,10)}}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=g({type:s,selectors:[["ng-component"]],standalone:!0,features:[p([b()]),C],decls:16,vars:3,consts:[[1,"mb-3"],[1,"form-label"],["auSelect","",3,"auFilterTextChange","auItems","auFilterText"],[1,"demo-select-config"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["type","button",1,"mt-3","btn","btn-outline-secondary",3,"click"]],template:function(t,n){if(t&1&&(l(0,"h2"),r(1,"Multiselect example"),o(),l(2,"div",0)(3,"label",1),r(4,"Multiselect"),o(),l(5,"div",2),a("auFilterTextChange",function(m){return n.onFilterTextChange(m)}),o()(),l(6,"div",3)(7,"strong"),r(8,"Default config"),o(),u(9,"br"),l(10,"label"),r(11," Default filterText: "),l(12,"input",4),a("ngModelChange",function(m){return n.widgetsConfig$.set({select:{filterText:m}})}),o()(),u(13,"br"),l(14,"button",5),a("click",function(){return n.filterText=void 0}),r(15,"Reset widget filterText"),o()()),t&2){let i;c(5),d("auItems",n.items)("auFilterText",n.filterText),c(7),d("ngModel",(i=(i=n.widgetsConfig().select)==null?null:i.filterText)!==null&&i!==void 0?i:"")}},dependencies:[_,S,T,x,F],encapsulation:2});var f=s;export{f as default};
