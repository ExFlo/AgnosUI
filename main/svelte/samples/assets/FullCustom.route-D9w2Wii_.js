import{p as h,g as F,e as k,c as m,a as w,t as _,h as s,U as N,k as e,n as o,a7 as Q,b as d,W as x,w as S,Q as U,j as W,r as y}from"./AppCommon-CRrVgjjK.js";import{P as q}from"./Progressbar-CGsFpPFn.js";import"./actions-DMIFV9qL.js";import"./progressbar-CgdwPfQW-DI4zpruc.js";import"./writables-DoU_XYTX-DMLOF105.js";import"./directive-CKEccryv-CZ-m_LIt.js";import"./extendWidget--tzkYf88.js";import"./Slot-Do_YzuMi.js";import"./snippet-CHfuuZJF.js";import"./config-D6r3EYnL.js";import"./config-OMIq8Q7I.js";import"./class-zI9kEawh.js";import"./style-Bk7ejTAN.js";var z=_('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),A=_('<div class="position-relative" style="height: 300px"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div>');function B(i,a){h(a,!0);var t=A(),r=s(t),u=s(r),l=s(u),v=s(l);F(v,()=>a.state.percentage>=50,c=>{var p=z();m(c,p)}),k(()=>N(l,"style",`height: ${1.7*a.state.percentage}px;`)),m(i,t),w()}const E=(i,a)=>{o(a,!0)},G=(i,a)=>{o(a,!e(a))},H=(i,a,t)=>{o(a,0),o(t,!1)};var J=_('<div class="d-flex align-items-center flex-wrap"><div style="width: 350px"><!></div> <div class="d-flex flex-column justify-content-evenly h-100 ms-5"><div class="btn-group" role="group"><button class="btn btn-outline-primary">Start</button> <button class="btn btn-outline-primary"> </button> <button class="btn btn-outline-primary">Reset</button></div> <p class="mt-3"><span> </span></p></div></div>');function rt(i,a){h(a,!0);let t=x(0),r=x(!1);const u=setInterval(()=>{e(r)&&e(t)<100&&o(t,e(t)+10)},500);Q(()=>{clearInterval(u)});var l=J(),v=s(l),c=s(v);q(c,{get value(){return e(t)},structure:(I,D=U)=>{B(I,S(D))}});var p=d(v,2),f=s(p),b=s(f);b.__click=[E,r];var n=d(b,2);n.__click=[G,r];var R=s(n),g=d(n,2);g.__click=[H,t,r];var P=d(f,2),j=s(P),C=s(j);k(()=>{b.disabled=e(t)>0,n.disabled=e(t)===0||e(t)>=100,y(R,e(r)?"Pause":"Resume"),g.disabled=e(t)===0,y(C,e(t)===0?"Need to wake up.":e(t)<100?`Retrieving coffee... ${e(t)}%`:"Ready to work !")}),m(i,l),w()}W(["click"]);export{rt as default};
