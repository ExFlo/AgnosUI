import{E,o as F,p as D}from"./chunk-GDIIEU3W.js";import{W as _,ha as b,ja as w,la as M,qa as v}from"./chunk-AWWQU5ES.js";import"./chunk-RIDGTTAP.js";import{Cb as r,Fb as C,Gb as S,Hb as h,Ib as T,Jb as x,La as s,Sa as g,_ as p,ab as c,cc as y,lb as t,mb as n,nb as m,qb as d}from"./chunk-DKG3CSSF.js";var f=class u{constructor(){this.mainList=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"];this.filterText=g(void 0);this.items=y(()=>this.filterText()?this.mainList.filter(l=>l.toLowerCase().startsWith(this.filterText())):this.mainList.slice(0,10));this.widgetsConfig$=D();this.widgetsConfig=_(this.widgetsConfig$);let l=location.hash.split("?")[1],o=new URL(l?`?${l}`:"",location.href);this.widgetsConfig$.set({select:{filterText:o.searchParams.get("filterText")??""}})}static{this.\u0275fac=function(o){return new(o||u)}}static{this.\u0275cmp=p({type:u,selectors:[["ng-component"]],standalone:!0,features:[T([F()]),x],decls:16,vars:3,consts:[[1,"mb-3"],[1,"form-label"],["auSelect","",3,"auFilterTextChange","auItems","auFilterText"],[1,"demo-select-config"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["type","button",1,"mt-3","btn","btn-outline-secondary",3,"click"]],template:function(o,i){if(o&1&&(t(0,"h2"),r(1,"Multiselect example"),n(),t(2,"div",0)(3,"label",1),r(4,"Multiselect"),n(),t(5,"div",2),h("auFilterTextChange",function(a){return S(i.filterText,a)||(i.filterText=a),a}),n()(),t(6,"div",3)(7,"strong"),r(8,"Default config"),n(),m(9,"br"),t(10,"label"),r(11," Default filterText: "),t(12,"input",4),d("ngModelChange",function(a){return i.widgetsConfig$.set({select:{filterText:a}})}),n()(),m(13,"br"),t(14,"button",5),d("click",function(){return i.filterText.set(void 0)}),r(15,"Reset widget filterText"),n()()),o&2){let e;s(5),c("auItems",i.items()),C("auFilterText",i.filterText),s(7),c("ngModel",(e=(e=i.widgetsConfig().select)==null?null:e.filterText)!==null&&e!==void 0?e:"")}},dependencies:[v,b,w,M,E],encapsulation:2})}};export{f as default};
