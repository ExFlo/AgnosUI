import{s as z,t as F}from"./chunk-WCVLRTJE.js";import{e as S,f as m,h as T,l as D,m as L}from"./chunk-76PPKLBT.js";import{Q as E}from"./chunk-7BWFRTAR.js";import"./chunk-MHKULNZV.js";import{G as g,Jb as c,Lb as k,Na as b,Qb as u,X as p,Za as w,ab as v,ba as f,fb as _,gb as y,ib as l,jb as M,lb as O,pa as x,tb as r,ub as a,vb as d,xa as C,zb as P}from"./chunk-Z267U77Q.js";var H=(()=>{let e=class e extends E{constructor(){super(...arguments),this._zone=x(w)}onKeyDown(i,n,t){t(i,n),this._zone.onStable.pipe(g(1)).subscribe(()=>{i.target.focus()})}};e.\u0275fac=(()=>{let i;return function(t){return(i||(i=C(e)))(t||e)}})(),e.\u0275cmp=p({type:e,selectors:[["ng-component"]],hostAttrs:[2,"display","contents"],inputs:{item:"item"},standalone:!0,features:[v,u],decls:3,vars:15,consts:[["role","slider",1,"au-custom-slider-handle",3,"disabled","keydown","mousedown","touchstart"],["xmlns","http://www.w3.org/2000/svg","fill","var(--bs-slider-handle-color)","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor"],["stroke-linecap","round","stroke-linejoin","round","d","M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"]],template:function(n,t){n&1&&(r(0,"button",0),P("keydown",function(s){return t.onKeyDown(s,t.item.id,t.widget.actions.keydown)})("mousedown",function(s){return t.widget.actions.mouseDown(s,t.item.id)})("touchstart",function(s){return t.widget.actions.touchStart(s,t.item.id)}),f(),r(1,"svg",1),d(2,"path",2),a()()),n&2&&(O(t.state.vertical?"au-custom-slider-handle-vertical":"au-custom-slider-handle-horizontal"),M("left",t.state.handleDisplayOptions[t.item.id].left,"%")("top",t.state.handleDisplayOptions[t.item.id].top,"%"),l("disabled",t.state.disabled),y("aria-valuemin",t.state.min)("aria-valuemax",t.state.max)("aria-readonly",t.state.readonly?!0:null)("aria-disabled",t.state.disabled?!0:null)("aria-valuenow",t.item.value)("aria-valuetext",t.item.ariaValueText)("aria-label",t.item.ariaLabel)("aria-orientation",t.state.vertical?"vertical":null))},styles:[`@media (max-width: 576px){.au-slider.au-custom-slider-container[_ngcontent-%COMP%]{width:95%}}.au-custom-slider-handle[_ngcontent-%COMP%]{background-color:transparent;border:var(--bs-slider-handle-border);outline:var(--bs-slider-handle-outline);position:absolute;width:2.8rem;height:2.8rem;border-bottom:.15rem solid transparent}.au-custom-slider-handle[_ngcontent-%COMP%]:focus, .au-custom-slider-handle[_ngcontent-%COMP%]:focus-within{border-bottom:.15rem solid var(--bs-slider-handle-color)}.au-custom-slider-handle[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:inherit;height:inherit;background-color:transparent}.au-custom-slider-handle-horizontal[_ngcontent-%COMP%]{top:calc(50% - 1.4rem);transform:var(--bs-slider-translate-horizontal)}.custom-slider[_ngcontent-%COMP%]{background-color:transparent;height:210px!important;margin:50px auto;display:flex;flex-direction:column}.cup-container[_ngcontent-%COMP%]{width:300px;height:400px}@media (min-width: 576px){.cup-container[_ngcontent-%COMP%]{width:350px}}.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}.coffee-indicator[_ngcontent-%COMP%]{background-color:var(--bs-body-color);color:var(--bs-body-bg);border:var(--bs-slider-handle-border);border-radius:var(--bs-slider-handle-border-radius);outline:var(--bs-slider-handle-outline);position:absolute;width:45px;height:45px;font-size:1rem}@media (min-width: 576px){.coffee-indicator[_ngcontent-%COMP%]{width:60px;height:60px;font-size:1.5rem}}.coffee-indicator[_ngcontent-%COMP%]:before{content:" ";position:absolute;top:50%;left:50%;width:0;height:0;transform:translate(55%,-50%);border-left:25px solid var(--bs-body-color);border-top:18px solid transparent;border-bottom:18px solid transparent}@media (min-width: 576px){.coffee-indicator[_ngcontent-%COMP%]:before{border-left:35px solid var(--bs-body-color);border-top:23px solid transparent;border-bottom:23px solid transparent}}.coffee-indicator[_ngcontent-%COMP%]:focus{box-shadow:0 0 1rem .5rem var(--bs-slider-handle-color)}`],changeDetection:0});let o=e;return o})();function G(o,e){if(o&1&&c(0),o&2){let B=e.value;k("",B,"%")}}var W=(()=>{let e=class e{constructor(){this.sliderCustomSlotHandle=H,this.sliderCustomLabelControl=new m([70]),this.sliderCustomHandleControl=new m([50])}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],standalone:!0,features:[u],decls:8,vars:3,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1","auClassName","au-custom-slider-container",3,"formControl"],["auSliderLabel",""],["auSlider","","auMin","0","auMax","100","auStepSize","1","auClassName","au-custom-slider-container",3,"formControl","auSlotHandle"]],template:function(n,t){n&1&&(r(0,"h2"),c(1,"Slider with custom labels"),a(),r(2,"div",0),_(3,G,1,1,"ng-template",1),a(),d(4,"hr"),r(5,"h2"),c(6,"Slider with custom handle"),a(),d(7,"div",2)),n&2&&(b(2),l("formControl",t.sliderCustomLabelControl),b(5),l("formControl",t.sliderCustomHandleControl)("auSlotHandle",t.sliderCustomSlotHandle))},dependencies:[F,z,L,S,T,D],styles:[`@media (max-width: 576px){.au-slider.au-custom-slider-container[_ngcontent-%COMP%]{width:95%}}.au-custom-slider-handle[_ngcontent-%COMP%]{background-color:transparent;border:var(--bs-slider-handle-border);outline:var(--bs-slider-handle-outline);position:absolute;width:2.8rem;height:2.8rem;border-bottom:.15rem solid transparent}.au-custom-slider-handle[_ngcontent-%COMP%]:focus, .au-custom-slider-handle[_ngcontent-%COMP%]:focus-within{border-bottom:.15rem solid var(--bs-slider-handle-color)}.au-custom-slider-handle[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:inherit;height:inherit;background-color:transparent}.au-custom-slider-handle-horizontal[_ngcontent-%COMP%]{top:calc(50% - 1.4rem);transform:var(--bs-slider-translate-horizontal)}.custom-slider[_ngcontent-%COMP%]{background-color:transparent;height:210px!important;margin:50px auto;display:flex;flex-direction:column}.cup-container[_ngcontent-%COMP%]{width:300px;height:400px}@media (min-width: 576px){.cup-container[_ngcontent-%COMP%]{width:350px}}.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}.coffee-indicator[_ngcontent-%COMP%]{background-color:var(--bs-body-color);color:var(--bs-body-bg);border:var(--bs-slider-handle-border);border-radius:var(--bs-slider-handle-border-radius);outline:var(--bs-slider-handle-outline);position:absolute;width:45px;height:45px;font-size:1rem}@media (min-width: 576px){.coffee-indicator[_ngcontent-%COMP%]{width:60px;height:60px;font-size:1.5rem}}.coffee-indicator[_ngcontent-%COMP%]:before{content:" ";position:absolute;top:50%;left:50%;width:0;height:0;transform:translate(55%,-50%);border-left:25px solid var(--bs-body-color);border-top:18px solid transparent;border-bottom:18px solid transparent}@media (min-width: 576px){.coffee-indicator[_ngcontent-%COMP%]:before{border-left:35px solid var(--bs-body-color);border-top:23px solid transparent;border-bottom:23px solid transparent}}.coffee-indicator[_ngcontent-%COMP%]:focus{box-shadow:0 0 1rem .5rem var(--bs-slider-handle-color)}`]});let o=e;return o})();export{W as default};
