import{J as T,M as W}from"./chunk-OIHYBCJG.js";import{ba as C,ea as S,fa as c,ga as b,ha as _,la as V,ma as v}from"./chunk-KS4K2MOI.js";import"./chunk-5HDSQWAY.js";import{Ab as o,Cb as M,Db as r,Eb as d,Fb as s,Hb as y,La as l,ab as p,ba as f,lb as n,mb as t,nb as m,qb as w}from"./chunk-NDHFY5LM.js";var B=(()=>{let a=class a{constructor(){this.sliderControl=new c([70]),this.disabledControl=new c(60),this.sliderValues=[20],this.disabledToggle=!0,this.readonlyToggle=!0,this.showMinMax=!0,this.showValues=!0}ngOnInit(){this.disabledControl.disable()}handleDisabled(){this.disabledToggle?this.disabledControl.disable():this.disabledControl.enable()}};a.\u0275fac=function(h){return new(h||a)},a.\u0275cmp=f({type:a,selectors:[["ng-component"]],standalone:!0,features:[y],decls:29,vars:12,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auShowMinMaxLabels","auShowValueLabels"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"auValuesChange","auValues"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auReadonly"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","disabled",1,"form-check-input",3,"ngModelChange","change","ngModel"],["for","disabled",1,"form-check-label"],["type","checkbox","role","switch","id","readonly",1,"form-check-input",3,"ngModelChange","ngModel"],["for","readonly",1,"form-check-label"],["type","checkbox","role","switch","id","showMinMax",1,"form-check-input",3,"ngModelChange","ngModel"],["for","showMinMax",1,"form-check-label"],["type","checkbox","role","switch","id","showValues",1,"form-check-input",3,"ngModelChange","ngModel"],["for","showValues",1,"form-check-label"]],template:function(h,e){h&1&&(n(0,"h2"),o(1,"Slider with form control"),t(),m(2,"div",0),o(3),m(4,"hr"),n(5,"h2"),o(6,"Slider with value"),t(),n(7,"div",1),s("auValuesChange",function(i){return d(e.sliderValues,i)||(e.sliderValues=i),i}),t(),o(8),m(9,"hr"),n(10,"h2"),o(11,"Disabled slider"),t(),m(12,"div",2),n(13,"div",3)(14,"input",4),s("ngModelChange",function(i){return d(e.disabledToggle,i)||(e.disabledToggle=i),i}),w("change",function(){return e.handleDisabled()}),t(),n(15,"label",5),o(16,"Disabled"),t()(),n(17,"div",3)(18,"input",6),s("ngModelChange",function(i){return d(e.readonlyToggle,i)||(e.readonlyToggle=i),i}),t(),n(19,"label",7),o(20,"Readonly"),t()(),n(21,"div",3)(22,"input",8),s("ngModelChange",function(i){return d(e.showMinMax,i)||(e.showMinMax=i),i}),t(),n(23,"label",9),o(24,"Min-Max label visibility"),t()(),n(25,"div",3)(26,"input",10),s("ngModelChange",function(i){return d(e.showValues,i)||(e.showValues=i),i}),t(),n(27,"label",11),o(28,"Value label visibility"),t()()),h&2&&(l(2),p("formControl",e.sliderControl)("auShowMinMaxLabels",e.showMinMax)("auShowValueLabels",e.showValues),l(),M(" Form control value: ",e.sliderControl.value," "),l(4),r("auValues",e.sliderValues),l(),M(" Value: ",e.sliderValues," "),l(4),p("formControl",e.disabledControl)("auReadonly",e.readonlyToggle),l(2),r("ngModel",e.disabledToggle),l(4),r("ngModel",e.readonlyToggle),l(4),r("ngModel",e.showMinMax),l(4),r("ngModel",e.showValues))},dependencies:[W,T,v,C,S,_,V,b],encapsulation:2});let g=a;return g})();export{B as default};