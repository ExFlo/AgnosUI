import{p as f,u,s as e,f as $,g as v,d as _,b as P,a as b,t as x,x as L,a3 as k,e as i,q as w,n as z}from"./AppCommon-DpjxpKbi.js";import{P as C}from"./Pagination-B6IlKVop.js";import"./pageFactory-CZZJDqOh-CJ4qYgg8.js";import"./extendWidget-C6WMN4LK.js";import"./directive-CKEccryv-ocPWyJ_x.js";import"./pagination-DwDRot6q-BWtf3tDo.js";import"./writables-DCiBdIBK-eyYf7wu0.js";import"./Slot-nk-rByji.js";import"./snippet-NpXm27Vp.js";import"./config-BJ3FVXXn.js";import"./config-BVsBkNcU.js";import"./index-client-pTWJ3zsz.js";import"./actions-hEUS7_0h.js";import"./class-BAnC4OqB.js";var q=x("<p>A pagination with hrefs provided for each pagination element:</p> <p>Page hash: <small> </small></p> <!>",1);function N(r,p){f(p,!0);const n=u(),a=()=>L(k,"$hash$",n);let m=w(()=>+(a().split("#")[1]??4));const h=t=>`#${a().split("#")[0]}#${t}`,l=t=>location.hash=`#${a().split("#")[0]}#${t}`;var s=q(),o=e($(s),2),g=e(i(o)),c=i(g),d=e(o,2);C(d,{get page(){return v(m)},collectionSize:60,boundaryLinks:!0,ariaLabel:"Page navigation with customized hrefs",pageLink:h,onPageChange:l}),_(()=>z(c,"#"+a())),P(r,s),b()}export{N as default};
