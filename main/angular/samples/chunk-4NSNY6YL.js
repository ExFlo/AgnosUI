import{u as O}from"./chunk-TZPYKQGP.js";import"./chunk-3N3J2CGC.js";import{P as k,S as M}from"./chunk-6YJY4GWZ.js";import"./chunk-DXHK7RUN.js";import{$a as h,B as f,Hb as y,Ib as d,Jb as _,Kb as E,Ma as o,Ob as P,Pb as g,Q as m,X as b,eb as C,hb as p,ib as v,ob as w,sb as r,tb as a,ub as c,wa as x,yb as u}from"./chunk-42V3TINI.js";function B(n,t){n&1&&c(0,"div",4)(1,"div",5)(2,"div",6)}var T=(()=>{let t=class t extends k{};t.\u0275fac=(()=>{let s;return function(e){return(s||(s=x(t)))(e||t)}})(),t.\u0275cmp=b({type:t,selectors:[["ng-component"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[h,g],decls:5,vars:3,consts:[[1,"position-relative",2,"height","300px"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(i,e){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,B,3,0),a()()()()),i&2&&(o(3),v("height",e.state.value*1.7,"px"),o(),w(4,e.state.value>=50?4:-1))},styles:[`.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}`]});let n=t;return n})();var I=(()=>{let t=class t{constructor(){this.value=0}start(){this.subscription||(this.subscription=f(500).pipe(m(()=>this.value<100)).subscribe(()=>{this.value+=10}))}stop(s=!1){this.subscription?.unsubscribe(),this.subscription=void 0,s&&(this.value=0)}toggleProgress(){this.subscription?this.stop():this.start()}ngOnDestroy(){this.stop()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["ng-component"]],standalone:!0,features:[P([M(()=>({progressbar:{slotStructure:T}}))]),g],decls:15,vars:6,consts:[[1,"d-flex","align-items-center","flex-wrap"],[2,"width","350px"],["auProgressbar","",3,"auValue"],["progressbar",""],[1,"d-flex","flex-column","justify-content-evenly","h-100","ms-5"],["role","group",1,"btn-group"],[1,"btn","btn-outline-primary",3,"disabled","click"],[1,"mt-3"]],template:function(i,e){if(i&1&&(r(0,"div",0)(1,"div",1),c(2,"div",2,3),a(),r(4,"div",4)(5,"div",5)(6,"button",6),u("click",function(){return e.start()}),d(7,"Start"),a(),r(8,"button",6),u("click",function(){return e.toggleProgress()}),d(9),a(),r(10,"button",6),u("click",function(){return e.stop(!0)}),d(11,"Reset"),a()(),r(12,"p",7)(13,"span"),d(14),a()()()()),i&2){let l=y(3);o(2),p("auValue",e.value),o(4),p("disabled",l.state().started),o(2),p("disabled",!l.state().started||l.state().finished),o(),E(" ",e.subscription?"Pause":"Resume"," "),o(),p("disabled",!l.state().started),o(4),_(e.value===0?"Need to wake up.":e.value<100?"Retrieving coffee... "+e.value+"%":"Ready to work !")}},dependencies:[O],styles:[`.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}`]});let n=t;return n})();export{I as default};