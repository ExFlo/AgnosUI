import{c as k,j as F,l as T,m as I,n as z,o as g}from"./chunk-XPV67JFZ.js";import{Cb as f,Ma as y,Sa as h,Ta as w,Ya as D,Za as p,_ as m,ab as b,gb as l,hb as d,ka as _,mb as c,sa as s,vb as S,xb as N}from"./chunk-7TOUH2W6.js";var i=class i extends T{constructor(){super(...arguments);this.disabled=s(void 0,{transform:z});this.min=s(void 0,{transform:g});this.max=s(void 0,{transform:g});this.stepSize=s(void 0,{transform:g});this.values=h([0]);this.className=s();this._widget=I({factory:k,widgetName:"slider",events:{onValuesChange:t=>{this.values.set(t)}}})}};i.\u0275fac=(()=>{let t;return function(e){return(t||(t=_(i)))(e||i)}})(),i.\u0275cmp=m({type:i,selectors:[["app-slider"]],inputs:{disabled:[1,"disabled"],min:[1,"min"],max:[1,"max"],stepSize:[1,"stepSize"],values:[1,"values"],className:[1,"className"]},outputs:{values:"valuesChange"},standalone:!0,features:[w,f],decls:1,vars:8,consts:[["type","range",3,"click","keydown","mousedown","touchstart","auUse","min","max","value","step"]],template:function(n,e){n&1&&(l(0,"input",0),c("click",function(a){return e.widget.actions.click(a)})("keydown",function(a){return e.widget.actions.keydown(a,0)})("mousedown",function(a){return e.widget.actions.mouseDown(a,0)})("touchstart",function(a){return e.widget.actions.touchStart(a,0)}),d()),n&2&&(b("range"),p("auUse",e.widget.directives.sliderDirective)("min",e.state().min)("max",e.state().max)("value",e.state().sortedHandles[0].value)("step",e.state().stepSize),D("aria-label",e.state().sortedHandles[0].ariaLabel))},dependencies:[F],encapsulation:2,changeDetection:0});var v=i;var r=class r{constructor(){this.values=[20]}valuesChange(u){this.values=u}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=m({type:r,selectors:[["ng-component"]],standalone:!0,features:[f],decls:4,vars:2,consts:[[1,"text-lg","mb-2"],["min","0","max","100","stepSize","1",3,"valuesChange","values"]],template:function(t,n){t&1&&(l(0,"h2",0),S(1,"DaisyUI Example"),d(),l(2,"app-slider",1),c("valuesChange",function(o){return n.valuesChange(o)}),d(),S(3)),t&2&&(y(2),p("values",n.values),y(),N(" Value: ",n.values," "))},dependencies:[v],encapsulation:2});var C=r;export{C as default};