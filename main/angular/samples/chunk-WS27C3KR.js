import{t as E,u as k}from"./chunk-DFJ7SQZQ.js";import"./chunk-WAOX7T3W.js";import"./chunk-XBN3IS3P.js";import"./chunk-HAS6OM4L.js";import{B as m,Gb as _,Hb as l,Ib as y,Jb as w,La as e,Pb as P,Q as g,X as f,db as c,gb as s,hb as x,nb as v,rb as a,sb as r,tb as h,xb as d,yb as C}from"./chunk-RNBRMLEW.js";function M(t,i){t&1&&h(0,"div",13)(1,"div",14)(2,"div",15)}function O(t,i){if(t&1&&(a(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12),c(4,M,3,0),r()()()()),t&2){let b=C();e(3),x("height",b.value*1.7,"px"),e(),v(4,b.value>=50?4:-1)}}var F=(()=>{let i=class i{constructor(){this.value=0}start(){this.subscription||(this.subscription=m(500).pipe(g(()=>this.value<100)).subscribe(()=>{this.value+=10}))}stop(u=!1){this.subscription?.unsubscribe(),this.subscription=void 0,u&&(this.value=0)}toggleProgress(){this.subscription?this.stop():this.start()}ngOnDestroy(){this.stop()}};i.\u0275fac=function(p){return new(p||i)},i.\u0275cmp=f({type:i,selectors:[["ng-component"]],standalone:!0,features:[P],decls:16,vars:6,consts:[[1,"d-flex","align-items-center","flex-wrap"],[2,"width","350px"],["auProgressbar","",3,"auValue"],["progressbar",""],["auProgressbarContent",""],[1,"d-flex","flex-column","justify-content-evenly","h-100","ms-5"],["role","group",1,"btn-group"],[1,"btn","btn-outline-primary",3,"disabled","click"],[1,"mt-3"],[1,"position-relative",2,"height","300px"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(p,n){if(p&1&&(a(0,"div",0)(1,"div",1)(2,"div",2,3),c(4,O,5,3,"ng-template",4),r()(),a(5,"div",5)(6,"div",6)(7,"button",7),d("click",function(){return n.start()}),l(8,"Start"),r(),a(9,"button",7),d("click",function(){return n.toggleProgress()}),l(10),r(),a(11,"button",7),d("click",function(){return n.stop(!0)}),l(12,"Reset"),r()(),a(13,"p",8)(14,"span"),l(15),r()()()()),p&2){let o=_(3);e(2),s("auValue",n.value),e(5),s("disabled",o.state().started),e(2),s("disabled",!o.state().started||o.state().finished),e(),w(" ",n.subscription?"Pause":"Resume"," "),e(),s("disabled",!o.state().started),e(4),y(n.value===0?"Need to wake up.":n.value<100?"Retrieving coffee... "+n.value+"%":"Ready to work !")}},dependencies:[k,E],styles:[`.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}`]});let t=i;return t})();export{F as default};
