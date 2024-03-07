import{S as P,i as Q,s as U,j as X,a2 as Y,e as u,k as _,c as w,a as b,b as n,m as x,r as g,u as Z,a3 as y,t as T,d as k,f as l,g as C,l as S}from"./AppCommon-8WcyAiwy.js";import{T as N}from"./Toast-BE3hisx0.js";import{a as tt}from"./config-9ZsmhOP0.js";import"./Slot-BVtwqnTN.js";import"./extendWidget-DJO1swjP.js";import"./baseTransitions-B1xRXKlx.js";import"./writables-DpUyGzv6.js";import"./stores-CfRcYhwQ.js";import"./func-fOTgS_tI.js";import"./promise-BzsAHvVS.js";import"./directive-CYDsg8WW.js";import"./fade-DFUCJ85_.js";import"./simpleClassTransition-GyDuSbvs.js";import"./cssTransitions-CzvUW6-4.js";import"./dom-Hs1W5kAC.js";function et(i){let e;return{c(){e=S("Simple primary toast")},m(s,a){n(s,e,a)},d(s){s&&l(e)}}}function st(i){let e;return{c(){e=S("This is a success toast")},m(s,a){n(s,e,a)},d(s){s&&l(e)}}}function at(i){let e;return{c(){e=S("This is an error toast")},m(s,a){n(s,e,a)},d(s){s&&l(e)}}}function ot(i){let e;return{c(){e=S("This is an info toast")},m(s,a){n(s,e,a)},d(s){s&&l(e)}}}function it(i){let e;return{c(){e=S("This is a warning toast")},m(s,a){n(s,e,a)},d(s){s&&l(e)}}}function nt(i){let e,s,a,v,h,f,c,D,L,r,H,m,V,j,$,W,q,p,z,B,d,I,M,A;function O(t){i[2](t)}let E={className:"text-bg-primary",slotHeader:"I am header",autohide:!1,dismissible:!0,$$slots:{default:[et]},$$scope:{ctx:i}};return i[0]!==void 0&&(E.visible=i[0]),a=new N({props:E}),X.push(()=>Y(a,"visible",O)),m=new N({props:{className:"text-bg-success",$$slots:{default:[st]},$$scope:{ctx:i}}}),$=new N({props:{className:"text-bg-danger",$$slots:{default:[at]},$$scope:{ctx:i}}}),p=new N({props:{className:"text-bg-info",$$slots:{default:[ot]},$$scope:{ctx:i}}}),d=new N({props:{className:"text-bg-warning",$$slots:{default:[it]},$$scope:{ctx:i}}}),{c(){e=u("p"),e.innerHTML=`Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes <code>.text-bg-*</code>,
	e.g. <code>.text.bg-primary</code>`,s=_(),w(a.$$.fragment),h=_(),f=u("button"),f.textContent="Reset",c=_(),D=u("h3"),D.textContent="Variations",L=_(),r=u("div"),H=u("div"),w(m.$$.fragment),V=_(),j=u("div"),w($.$$.fragment),W=_(),q=u("div"),w(p.$$.fragment),z=_(),B=u("div"),w(d.$$.fragment),b(e,"class","mb-2"),b(f,"class","btn btn-primary my-2"),b(H,"class","col-auto"),b(j,"class","col-auto"),b(q,"class","col-auto"),b(B,"class","col-auto"),b(r,"class","row gy-2 gx-3")},m(t,o){n(t,e,o),n(t,s,o),x(a,t,o),n(t,h,o),n(t,f,o),n(t,c,o),n(t,D,o),n(t,L,o),n(t,r,o),g(r,H),x(m,H,null),g(r,V),g(r,j),x($,j,null),g(r,W),g(r,q),x(p,q,null),g(r,z),g(r,B),x(d,B,null),I=!0,M||(A=Z(f,"click",i[3]),M=!0)},p(t,[o]){const R={};o&16&&(R.$$scope={dirty:o,ctx:t}),!v&&o&1&&(v=!0,R.visible=t[0],y(()=>v=!1)),a.$set(R);const F={};o&16&&(F.$$scope={dirty:o,ctx:t}),m.$set(F);const G={};o&16&&(G.$$scope={dirty:o,ctx:t}),$.$set(G);const J={};o&16&&(J.$$scope={dirty:o,ctx:t}),p.$set(J);const K={};o&16&&(K.$$scope={dirty:o,ctx:t}),d.$set(K)},i(t){I||(T(a.$$.fragment,t),T(m.$$.fragment,t),T($.$$.fragment,t),T(p.$$.fragment,t),T(d.$$.fragment,t),I=!0)},o(t){k(a.$$.fragment,t),k(m.$$.fragment,t),k($.$$.fragment,t),k(p.$$.fragment,t),k(d.$$.fragment,t),I=!1},d(t){t&&(l(e),l(s),l(h),l(f),l(c),l(D),l(L),l(r)),C(a,t),C(m),C($),C(p),C(d),M=!1,A()}}}function lt(i,e,s){tt().set({toast:{autohide:!1,dismissible:!1}});let{visible:a=!0}=e;function v(){s(0,a=!0)}function h(c){a=c,s(0,a)}const f=()=>v();return i.$$set=c=>{"visible"in c&&s(0,a=c.visible)},[a,v,h,f]}class Tt extends P{constructor(e){super(),Q(this,e,lt,nt,U,{visible:0})}}export{Tt as default};