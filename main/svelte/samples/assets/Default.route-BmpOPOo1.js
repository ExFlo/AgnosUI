import{p as b,k as e,n as v,U as h,c as f,a as g,t as x,R as w,h as s,M as y}from"./AppCommon-CC-VkUgW.js";import{S as k}from"./Select-Cfn0V3RV.js";import"./actions-D-dhIHRy.js";import"./class-CcTXRr1B.js";import"./Slot-9PryA5S7.js";import"./snippet-hepiiy-w.js";import"./config-DXyDsFs3.js";import"./config-BOSa1FB8.js";import"./directive-CKEccryv-BuQmRVBG.js";import"./index-client-CGLt60GO.js";import"./floatingUI-CPJPf_6-.js";import"./promise-CY2U8bTP-FiA19x-Q.js";import"./focustrack-9hjk9Hwz.js";import"./navManager-BIiqe4zm.js";import"./extendWidget-wveUl8Yn.js";var C=x('<div style="height: 400px"><div class="mb-3"><!></div></div>');function E(o,p){b(p,!0);const l=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],m=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],c=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],r=[...l,...m,...c];let t=w(""),d=y(()=>e(t)?r.filter(a=>a.toLowerCase().startsWith(e(t))):r.slice(0,10));var i=C(),n=s(i),u=s(n);k(u,{get items(){return e(d)},get filterText(){return e(t)},set filterText(a){v(t,h(a))},badgeClassName:"badge text-bg-light"}),f(o,i),g()}export{E as default};