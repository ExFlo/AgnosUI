import{p as b,k as e,n as v,W as h,c as f,a as g,t as x,V as w,h as s,M as y}from"./AppCommon-D_B8a5G6.js";import{S as k}from"./Select-DuXSsYHi.js";import"./actions-B64vG8Da.js";import"./class-1L5W2JgY.js";import"./Slot-Bt2_y6gy.js";import"./snippet-CHDzym81.js";import"./config-BmaADpVL.js";import"./config-CpwOCg7e.js";import"./directive-CKEccryv-BAfxyCuh.js";import"./floatingUI-BbI9geYn.js";import"./promise-CY2U8bTP-Bo1v6H0G.js";import"./focustrack-CsH95dnP.js";import"./navManager-vnOjB-HU.js";import"./extendWidget-CKD28wu-.js";var C=x('<div style="height: 400px"><div class="mb-3"><!></div></div>');function E(o,p){b(p,!0);const l=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],m=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],c=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],r=[...l,...m,...c];let t=w(""),d=y(()=>e(t)?r.filter(a=>a.toLowerCase().startsWith(e(t))):r.slice(0,10));var i=C(),n=s(i),u=s(n);k(u,{get items(){return e(d)},get filterText(){return e(t)},set filterText(a){v(t,h(a))},badgeClassName:"badge text-bg-light"}),f(o,i),g()}export{E as default};
