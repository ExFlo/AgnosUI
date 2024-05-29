import{S as W,i as Z,s as z,p as Q,g,t as h,D as U,a as N,E as X,h as v,j,M as E,I as Y,k,f as I,q as m,v as C,J as w,K as x,L as ee,C as A,n as T,Z as P,e as se,a2 as te,c as F,m as H,a3 as ie,d as J,l as G}from"./AppCommon-C1X_0L7p.js";import{c as ae}from"./config-actRtC2N.js";import{c as le}from"./close_icon-BnSzxVRN.js";import{c as ne}from"./toast-8tWp6x89-DSRnTR39.js";import"./directive-DCYlDznf-BLyioqVS.js";import"./extendWidget-BmexbiiK.js";import"./writables-DoU_XYTX-gpfTGoGn.js";import"./common-DRdsw5m8-TkKKfQAb.js";import"./baseTransitions-CMZe44Vw.js";import"./promise-CY2U8bTP-C0Pa2v4R.js";function K(a){let e,i,s,t;const n=a[12].default,r=Y(n,a,a[11],null);let o=a[7]&&R(a);return{c(){e=k("div"),r&&r.c(),i=I(),o&&o.c(),m(e,"class",s="alert "+a[6]+" flex")},m(l,f){g(l,e,f),r&&r.m(e,null),C(e,i),o&&o.m(e,null),t=!0},p(l,f){r&&r.p&&(!t||f&2048)&&w(r,n,l,l[11],t?ee(n,l[11],f,null):x(l[11]),null),l[7]?o?o.p(l,f):(o=R(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!t||f&64&&s!==(s="alert "+l[6]+" flex"))&&m(e,"class",s)},i(l){t||(h(r,l),t=!0)},o(l){N(r,l),t=!1},d(l){l&&v(e),r&&r.d(l),o&&o.d()}}}function R(a){let e,i,s;return{c(){e=k("button"),m(e,"class","btn btn-sm btn-circle btn-ghost"),m(e,"aria-label",a[8])},m(t,n){g(t,e,n),e.innerHTML=le,i||(s=A(e,"click",a[4].close),i=!0)},p(t,n){n&256&&m(e,"aria-label",t[8])},d(t){t&&v(e),i=!1,s()}}}function oe(a){let e,i,s=!a[5]&&K(a);return{c(){s&&s.c(),e=Q()},m(t,n){s&&s.m(t,n),g(t,e,n),i=!0},p(t,[n]){t[5]?s&&(U(),N(s,1,1,()=>{s=null}),X()):s?(s.p(t,n),n&32&&h(s,1)):(s=K(t),s.c(),h(s,1),s.m(e.parentNode,e))},i(t){i||(h(s),i=!0)},o(t){N(s),i=!1},d(t){t&&v(e),s&&s.d(t)}}}function re(a,e,i){let s,t=T,n=()=>(t(),t=P(y,c=>i(5,s=c)),y),r,o=T,l=()=>(o(),o=P(p,c=>i(6,r=c)),p),f,_=T,L=()=>(_(),_=P(S,c=>i(7,f=c)),S),B,d=T,u=()=>(d(),d=P(q,c=>i(8,B=c)),q);a.$$.on_destroy.push(()=>t()),a.$$.on_destroy.push(()=>o()),a.$$.on_destroy.push(()=>_()),a.$$.on_destroy.push(()=>d());let{$$slots:b={},$$scope:$}=e;const{stores:{className$:p,dismissible$:S,ariaCloseButtonLabel$:q,hidden$:y},patchChangedProps:M,api:O}=ae({factory:ne,widgetName:"toast",$$props:e,events:{onVisibleChange:c=>{i(9,D=c)}}});l(),L(),u(),n();let{visible:D=void 0}=e;return a.$$set=c=>{i(13,e=j(j({},e),E(c))),"visible"in c&&i(9,D=c.visible),"$$scope"in c&&i(11,$=c.$$scope)},a.$$.update=()=>{M(e)},e=E(e),[p,S,q,y,O,s,r,f,B,D,M,$,b]}class V extends W{constructor(e){super(),Z(this,e,re,oe,z,{className$:0,dismissible$:1,ariaCloseButtonLabel$:2,hidden$:3,patchChangedProps:10,api:4,visible:9})}get className$(){return this.$$.ctx[0]}get dismissible$(){return this.$$.ctx[1]}get ariaCloseButtonLabel$(){return this.$$.ctx[2]}get hidden$(){return this.$$.ctx[3]}get patchChangedProps(){return this.$$.ctx[10]}get api(){return this.$$.ctx[4]}}function ue(a){let e;return{c(){e=G("This is a success toast")},m(i,s){g(i,e,s)},d(i){i&&v(e)}}}function ce(a){let e;return{c(){e=G("This is an error toast")},m(i,s){g(i,e,s)},d(i){i&&v(e)}}}function fe(a){let e,i,s,t,n,r,o,l,f,_,L;function B(u){a[2](u)}let d={className:"alert-success",$$slots:{default:[ue]},$$scope:{ctx:a}};return a[0]!==void 0&&(d.visible=a[0]),n=new V({props:d}),se.push(()=>te(n,"visible",B)),l=new V({props:{className:"alert-error",dismissible:!1,$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){e=k("div"),i=k("button"),i.textContent="Reset Toast",s=I(),t=k("div"),F(n.$$.fragment),o=I(),F(l.$$.fragment),m(i,"class","btn btn-primary"),m(t,"class","toast"),m(e,"class","h-[215px]")},m(u,b){g(u,e,b),C(e,i),C(e,s),C(e,t),H(n,t,null),C(t,o),H(l,t,null),f=!0,_||(L=A(i,"click",a[1]),_=!0)},p(u,[b]){const $={};b&8&&($.$$scope={dirty:b,ctx:u}),!r&&b&1&&(r=!0,$.visible=u[0],ie(()=>r=!1)),n.$set($);const p={};b&8&&(p.$$scope={dirty:b,ctx:u}),l.$set(p)},i(u){f||(h(n.$$.fragment,u),h(l.$$.fragment,u),f=!0)},o(u){N(n.$$.fragment,u),N(l.$$.fragment,u),f=!1},d(u){u&&v(e),J(n),J(l),_=!1,L()}}}function be(a,e,i){let s=!0;const t=()=>i(0,s=!0);function n(r){s=r,i(0,s)}return[s,t,n]}class Ne extends W{constructor(e){super(),Z(this,e,be,fe,z,{})}}export{Ne as default};
