import{S as P,i as R,s as V,k as h,f as L,c as A,l as G,q as m,g,v as $,m as D,C as j,t as v,a as k,h as b,d as M,P as q,p as O,D as Q,E as X,y as F,F as U,I as S,J as H,K as B,L as N,j as W,e as Y,a2 as Z,a3 as y}from"./AppCommon-C1X_0L7p.js";import{T as x}from"./Toast-DtyVaB5j.js";import{b as tt}from"./check-circle-fill-BFB53SSU.js";import{S as et,a as st}from"./Slot-AcyzYqVT.js";import"./directive-DCYlDznf-BLyioqVS.js";import"./toast-8tWp6x89-DSRnTR39.js";import"./extendWidget-BmexbiiK.js";import"./writables-DoU_XYTX-gpfTGoGn.js";import"./common-DRdsw5m8-TkKKfQAb.js";import"./baseTransitions-CMZe44Vw.js";import"./promise-CY2U8bTP-C0Pa2v4R.js";import"./fade-uOobJKgw-B-q-cbUv.js";import"./simpleClassTransition-DQ6xmoDI.js";import"./cssTransitions-DKRKCc02.js";import"./config-actRtC2N.js";const nt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`,ot=n=>({state:n&1,widget:n&2}),z=n=>({state:n[0],widget:n[1]}),lt=n=>({state:n&1,widget:n&2}),E=n=>({state:n[0],widget:n[1]}),it=n=>({state:n&1,widget:n&2}),I=n=>({state:n[0],widget:n[1]}),at=n=>n&32,rt=n=>({}),J=n=>({...n[5]});function ut(n){let t;const l=n[2].default,e=S(l,n,n[4],z);return{c(){e&&e.c()},m(s,o){e&&e.m(s,o),t=!0},p(s,o){e&&e.p&&(!t||o&19)&&H(e,l,s,s[4],t?N(l,s[4],o,ot):B(s[4]),z)},i(s){t||(v(e,s),t=!0)},o(s){k(e,s),t=!1},d(s){e&&e.d(s)}}}function ft(n){let t;const l=n[2].header,e=S(l,n,n[4],E);return{c(){e&&e.c()},m(s,o){e&&e.m(s,o),t=!0},p(s,o){e&&e.p&&(!t||o&19)&&H(e,l,s,s[4],t?N(l,s[4],o,lt):B(s[4]),E)},i(s){t||(v(e,s),t=!0)},o(s){k(e,s),t=!1},d(s){e&&e.d(s)}}}function ct(n){let t;const l=n[2].structure,e=S(l,n,n[4],I);return{c(){e&&e.c()},m(s,o){e&&e.m(s,o),t=!0},p(s,o){e&&e.p&&(!t||o&19)&&H(e,l,s,s[4],t?N(l,s[4],o,it):B(s[4]),I)},i(s){t||(v(e,s),t=!0)},o(s){k(e,s),t=!1},d(s){e&&e.d(s)}}}function _t(n){let t,l,e;const s=[n[5]];var o=n[6];function u(a,r){let _={$$slots:{structure:[ct,({state:f,widget:d})=>({0:f,1:d}),({state:f,widget:d})=>(f?1:0)|(d?2:0)],header:[ft,({state:f,widget:d})=>({0:f,1:d}),({state:f,widget:d})=>(f?1:0)|(d?2:0)],default:[ut,({state:f,widget:d})=>({0:f,1:d}),({state:f,widget:d})=>(f?1:0)|(d?2:0)]},$$scope:{ctx:a}};for(let f=0;f<s.length;f+=1)_=W(_,s[f]);return r!==void 0&&r&32&&(_=W(_,F(s,[U(a[5])]))),{props:_}}return o&&(t=q(o,u(n))),{c(){t&&A(t.$$.fragment),l=O()},m(a,r){t&&D(t,a,r),g(a,l,r),e=!0},p(a,r){if(r&64&&o!==(o=a[6])){if(t){Q();const _=t;k(_.$$.fragment,1,0,()=>{M(_,1)}),X()}o?(t=q(o,u(a,r)),A(t.$$.fragment),v(t.$$.fragment,1),D(t,l.parentNode,l)):t=null}else if(o){const _=r&32?F(s,[U(a[5])]):{};r&19&&(_.$$scope={dirty:r,ctx:a}),t.$set(_)}},i(a){e||(t&&v(t.$$.fragment,a),e=!0)},o(a){t&&k(t.$$.fragment,a),e=!1},d(a){a&&b(l),t&&M(t,a)}}}function dt(n){let t;const l=n[2].default,e=S(l,n,n[4],J);return{c(){e&&e.c()},m(s,o){e&&e.m(s,o),t=!0},p(s,o){e&&e.p&&(!t||o&48)&&H(e,l,s,s[4],at(o)||!t?B(s[4]):N(l,s[4],o,rt),J)},i(s){t||(v(e,s),t=!0)},o(s){k(e,s),t=!1},d(s){e&&e.d(s)}}}function K(n){let t,l,e,s;return{c(){t=h("button"),m(t,"type","button"),m(t,"class","btn-close btn-close-white me-2 m-auto"),m(t,"aria-label",l=n[0].ariaCloseButtonLabel)},m(o,u){g(o,t,u),e||(s=j(t,"click",n[3]),e=!0)},p(o,u){u&1&&l!==(l=o[0].ariaCloseButtonLabel)&&m(t,"aria-label",l)},d(o){o&&b(t),e=!1,s()}}}function pt(n){let t,l,e,s,o,u,a,r,_,f,d,C,T;o=new et({props:{slotContent:n[0].slotDefault,props:{widget:n[1],state:n[0]},$$slots:{slot:[dt,({props:i})=>({5:i}),({props:i})=>i?32:0],default:[_t,({component:i,props:c})=>({6:i,5:c}),({component:i,props:c})=>(i?64:0)|(c?32:0)]},$$scope:{ctx:n}}});let p=n[0].dismissible&&K(n);return{c(){t=h("div"),l=h("div"),e=h("span"),s=L(),A(o.$$.fragment),u=L(),a=h("button"),r=h("span"),_=G("Undo"),f=L(),p&&p.c(),m(e,"class","d-flex me-2"),m(r,"class","me-2"),m(a,"type","button"),m(a,"class","btn btn-sm ms-auto text-bg-success"),m(l,"class","d-flex align-items-center flex-grow-1 toast-body"),m(t,"class","d-flex w-100")},m(i,c){g(i,t,c),$(t,l),$(l,e),e.innerHTML=tt,$(l,s),D(o,l,null),$(l,u),$(l,a),$(a,r),r.innerHTML=nt,$(a,_),$(t,f),p&&p.m(t,null),d=!0,C||(T=j(a,"click",mt),C=!0)},p(i,[c]){const w={};c&1&&(w.slotContent=i[0].slotDefault),c&3&&(w.props={widget:i[1],state:i[0]}),c&115&&(w.$$scope={dirty:c,ctx:i}),o.$set(w),i[0].dismissible?p?p.p(i,c):(p=K(i),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(i){d||(v(o.$$.fragment,i),d=!0)},o(i){k(o.$$.fragment,i),d=!1},d(i){i&&b(t),M(o),p&&p.d(),C=!1,T()}}}function mt(){window.alert("Undo")}function gt(n,t,l){let{$$slots:e={},$$scope:s}=t,{state:o}=t,{widget:u}=t;const a=()=>u.api.close();return n.$$set=r=>{"state"in r&&l(0,o=r.state),"widget"in r&&l(1,u=r.widget),"$$scope"in r&&l(4,s=r.$$scope)},[o,u,e,a,s]}class bt extends P{constructor(t){super(),R(this,t,gt,pt,V,{state:0,widget:1})}}function ht(n){let t;return{c(){t=G("This is a toast with action")},m(l,e){g(l,t,e)},d(l){l&&b(t)}}}function wt(n){let t,l,e,s,o,u,a,r,_,f,d,C;function T(i){n[2](i)}let p={$$slots:{default:[ht]},$$scope:{ctx:n}};return n[0]!==void 0&&(p.visible=n[0]),u=new x({props:p}),Y.push(()=>Z(u,"visible",T)),{c(){t=h("p"),t.textContent="To put the action in the toast simply create custom contents.",l=L(),e=h("p"),e.innerHTML="<strong>Note:</strong> When header is not present default display is <code>flex</code>",s=L(),o=h("div"),A(u.$$.fragment),r=L(),_=h("button"),_.textContent="Reset",m(o,"class","col-auto col-md-6"),m(_,"class","btn btn-primary mt-2")},m(i,c){g(i,t,c),g(i,l,c),g(i,e,c),g(i,s,c),g(i,o,c),D(u,o,null),g(i,r,c),g(i,_,c),f=!0,d||(C=j(_,"click",n[3]),d=!0)},p(i,[c]){const w={};c&16&&(w.$$scope={dirty:c,ctx:i}),!a&&c&1&&(a=!0,w.visible=i[0],y(()=>a=!1)),u.$set(w)},i(i){f||(v(u.$$.fragment,i),f=!0)},o(i){k(u.$$.fragment,i),f=!1},d(i){i&&(b(t),b(l),b(e),b(s),b(o),b(r),b(_)),M(u),d=!1,C()}}}function $t(n,t,l){st().set({toast:{autoHide:!1,dismissible:!0,className:"text-bg-success",slotStructure:bt}});let{visible:e=!0}=t;function s(){l(0,e=!0)}function o(a){e=a,l(0,e)}const u=()=>s();return n.$$set=a=>{"visible"in a&&l(0,e=a.visible)},[e,s,o,u]}class Ut extends P{constructor(t){super(),R(this,t,$t,wt,V,{visible:0})}}export{Ut as default};
