import{O as x}from"./chunk-NWU4XFDS.js";import{S as h,g as M}from"./chunk-3WPPCHJ6.js";import"./chunk-TARSZI4R.js";import{Ab as m,Bb as g,Hb as c,Kb as v,Ma as o,ab as s,ba as u,lb as l,mb as n,nb as p}from"./chunk-2GMDX5JN.js";var b=(y,t)=>[y,t],i=class i{constructor(){this.text="";this.navManager=M();this.navManagerConfig={keys:{ArrowLeft:this.navManager.focusLeft,ArrowRight:this.navManager.focusRight,Home:this.navManager.focusFirst,End:this.navManager.focusLast,"Meta+ArrowLeft":this.navManager.focusFirstLeft,"Meta+ArrowRight":this.navManager.focusFirstRight},selector:t=>t.querySelectorAll("input,span")}}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u({type:i,selectors:[["app-navmanager-line"]],inputs:{text:"text"},standalone:!0,features:[c],decls:7,vars:8,consts:[[1,"d-flex","demo-navmanager-line",3,"auUse"],["type","text",1,"form-control","me-1",3,"value"],["tabindex","-1",1,"form-control","w-auto","me-1"],["tabindex","-1","type","checkbox",1,"form-check-input","align-self-center","me-1"],["tabindex","-1","type","text","disabled","",1,"form-control","me-1",3,"value"],["tabindex","-1","type","text",1,"form-control","me-1",3,"value"]],template:function(e,a){e&1&&(l(0,"div",0),p(1,"input",1),l(2,"span",2),m(3),n(),p(4,"input",3)(5,"input",4)(6,"input",5),n()),e&2&&(s("auUse",v(5,b,a.navManager.directive,a.navManagerConfig)),o(),s("value",a.text),o(2),g(a.text),o(2),s("value",a.text),o(),s("value",a.text))},dependencies:[x,h],encapsulation:2});var d=i,r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u({type:r,selectors:[["ng-component"]],standalone:!0,features:[c],decls:9,vars:0,consts:[[1,"demo-navmanager"],["dir","ltr",1,"mt-3","pb-3"],["text","Hello"],["dir","rtl",1,"mt-3","pb-3"],["text","\u05E9\u05C1\u05B8\u05DC\u05D5\u05B9\u05DD"]],template:function(e,a){e&1&&(l(0,"div",0)(1,"div",1)(2,"h2"),m(3,"Left-to-right"),n(),p(4,"app-navmanager-line",2),n(),l(5,"div",3)(6,"h2"),m(7,"Right-to-left"),n(),p(8,"app-navmanager-line",4),n()())},dependencies:[d],encapsulation:2});var f=r;export{d as NavmanagerLineComponent,f as default};