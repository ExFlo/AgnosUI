import{c as S,r as a,a as i,b as t}from"./dom.splNC_z2.js";const c=g=>{const{animationPendingClasses:h,animationPendingShowClasses:n,animationPendingHideClasses:r,showClasses:d,hideClasses:C}=g;return S((s,o,P,w)=>{if(a(s,d),a(s,C),P){if(a(s,o==="show"?r:n),!w.started){w.started=!0;const f=o==="show"?C:d;i(s,f),t(s),a(s,f)}i(s,h),t(s),i(s,o==="show"?n:r)}return()=>{a(s,h),a(s,n),a(s,r),i(s,o==="show"?d:C)}})},p=c({animationPendingClasses:["fade"],animationPendingShowClasses:["show"],showClasses:["show","fade"],hideClasses:["d-none","fade"]});export{p as f};