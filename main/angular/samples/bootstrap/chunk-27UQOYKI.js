import{M as F,o as B}from"./chunk-KNR2FEPD.js";import{V as S}from"./chunk-PT4WDSOZ.js";import"./chunk-XPVCXEMV.js";import{A as v,Ab as d,Bb as T,Cb as V,Gb as D,Hb as x,Ma as t,P as w,Wa as _,_a as P,ab as p,ba as c,bb as E,hb as k,ka as u,la as g,lb as r,mb as s,na as y,nb as f,pb as M,qb as m,zb as O}from"./chunk-CKC7SV4U.js";function G(L,o){L&1&&f(0,"div",4)(1,"div",5)(2,"div",6)}var a=class a extends S{};a.\u0275fac=(()=>{let o;return function(e){return(o||(o=y(a)))(e||a)}})(),a.\u0275cmp=c({type:a,selectors:[["ng-component"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[_,x],decls:5,vars:3,consts:[[1,"position-relative",2,"height","300px"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(n,e){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),P(4,G,3,0),s()()()()),n&2&&(t(3),E("height",e.state.value*1.7,"px"),t(),k(e.state.value>=50?4:-1))},styles:[`.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}`]});var b=a;var l=class l{constructor(){this.value=0}start(){this.subscription||(this.subscription=v(500).pipe(w(()=>this.value<100)).subscribe(()=>{this.value+=10}))}stop(o=!1){this.subscription?.unsubscribe(),this.subscription=void 0,o&&(this.value=0)}toggleProgress(){this.subscription?this.stop():this.start()}ngOnDestroy(){this.stop()}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=c({type:l,selectors:[["ng-component"]],standalone:!0,features:[D([B(()=>({progressbar:{structure:b}}))]),x],decls:15,vars:6,consts:[["progressbar",""],[1,"d-flex","align-items-center","flex-wrap"],[2,"width","350px"],["auProgressbar","",3,"auValue"],[1,"d-flex","flex-column","justify-content-evenly","h-100","ms-5"],["role","group",1,"btn-group"],[1,"btn","btn-outline-primary",3,"click","disabled"],[1,"mt-3"]],template:function(n,e){if(n&1){let i=M();r(0,"div",1)(1,"div",2),f(2,"div",3,0),s(),r(4,"div",4)(5,"div",5)(6,"button",6),m("click",function(){return u(i),g(e.start())}),d(7,"Start"),s(),r(8,"button",6),m("click",function(){return u(i),g(e.toggleProgress())}),d(9),s(),r(10,"button",6),m("click",function(){return u(i),g(e.stop(!0))}),d(11,"Reset"),s()(),r(12,"p",7)(13,"span"),d(14),s()()()()}if(n&2){let i=O(3);t(2),p("auValue",e.value),t(4),p("disabled",i.state().started),t(2),p("disabled",!i.state().started||i.state().finished),t(),V(" ",e.subscription?"Pause":"Resume"," "),t(),p("disabled",!i.state().started),t(4),T(e.value===0?"Need to wake up.":e.value<100?"Retrieving coffee... "+e.value+"%":"Ready to work !")}},dependencies:[F],styles:[`.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}`]});var C=l;export{C as default};