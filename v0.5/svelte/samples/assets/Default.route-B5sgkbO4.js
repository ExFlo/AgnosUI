import{s as a,f as _,g as i,j as r,T as o,d as k,b as x,t as z,k as c,e as u,n as S}from"./AppCommon-Cm-6NtnE.js";import{P as n}from"./Pagination-3etBm6JA.js";import"./pageFactory-CZZJDqOh-8ueOcjFz.js";import"./extendWidget-CKqcYLS9.js";import"./directive-CKEccryv-gyIcW13B.js";import"./pagination-DwDRot6q-DZFGthTi.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./Slot-HBv0E13p.js";import"./snippet-DaCt2Zif.js";import"./config-CGoDt1jV.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";import"./actions-gBvwwZne.js";import"./class-CZUVYx7F.js";var y=z('<h5>Basic pagination:</h5> <!> <h5>No direction links:</h5> <!> <h5>With boundary links:</h5> <!> <div class="mb-3">Current page: <span id="defaultPage"> </span></div> <h5>Disabled pagination:</h5> <!>',1);function G(f){let e=c(4),p=c(1);var s=y(),l=a(_(s),2);n(l,{get page(){return i(e)},set page(t){r(e,o(t))},collectionSize:60});var g=a(l,4);n(g,{get page(){return i(e)},set page(t){r(e,o(t))},collectionSize:60,directionLinks:!1});var d=a(g,4);n(d,{get page(){return i(e)},set page(t){r(e,o(t))},collectionSize:60,boundaryLinks:!0});var m=a(d,2),v=a(u(m)),h=u(v),b=a(m,4);n(b,{get page(){return i(p)},set page(t){r(p,o(t))},collectionSize:60,disabled:!0,ariaLabel:"Disabled pagination"}),k(()=>S(h,i(e))),x(f,s)}export{G as default};
