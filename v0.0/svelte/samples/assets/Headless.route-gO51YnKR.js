import{S as I,i as J,s as K,Q as y,j as h,n as d,g as _,t as p,y as L,z as M,a as g,h as m,U as P,M as Q,b as S,A as N,L as j,c as v,f as R,m as w,p as T,d as b,O as z,l as W,B,C as H,H as D,I as E,J as G,K as V,o as C}from"./index-2zKz2ixV.js";/* empty css               */import{c as X}from"./config-sp8SshpP.js";import{c as Y}from"./rating-RJlqdiKa.js";import{S as Z}from"./Slot-2Ge4f3go.js";import"./func-tK0QDe5R.js";import"./stores-iA5ZNWiP.js";import"./rating-YpC1adIK.js";import"./writables-dPXVMmRP.js";function U(r,t,o){const a=r.slice();return a[12]=t[o].fill,a[13]=t[o].index,a}const x=r=>r&65536,tt=r=>({}),q=r=>({slot:"slot",...r[16]});function et(r){let t,o,a;const l=[r[16]];var e=r[17];function f(n,i){let s={};if(i!==void 0&&i&65536)s=B(l,[H(n[16])]);else for(let c=0;c<l.length;c+=1)s=N(s,l[c]);return{props:s}}return e&&(t=z(e,f(r))),{c(){t&&v(t.$$.fragment),o=W()},m(n,i){t&&w(t,n,i),_(n,o,i),a=!0},p(n,i){if(i&131072&&e!==(e=n[17])){if(t){L();const s=t;g(s.$$.fragment,1,0,()=>{b(s,1)}),M()}e?(t=z(e,f(n,i)),v(t.$$.fragment),p(t.$$.fragment,1),w(t,o.parentNode,o)):t=null}else if(e){const s=i&65536?B(l,[H(n[16])]):{};t.$set(s)}},i(n){a||(t&&p(t.$$.fragment,n),a=!0)},o(n){t&&g(t.$$.fragment,n),a=!1},d(n){n&&m(o),t&&b(t,n)}}}function st(r){let t;const o=r[6].star,a=D(o,r,r[7],q);return{c(){a&&a.c()},m(l,e){a&&a.m(l,e),t=!0},p(l,e){a&&a.p&&(!t||e&65664)&&E(a,o,l,l[7],x(e)||!t?G(l[7]):V(o,l[7],e,tt),q)},i(l){t||(p(a,l),t=!0)},o(l){g(a,l),t=!1},d(l){a&&a.d(l)}}}function A(r){let t,o,a,l;return o=new Z({props:{slotContent:r[2],props:{fill:r[12],index:r[13]},$$slots:{slot:[st,({props:e})=>({16:e}),({props:e})=>e?65536:0],default:[et,({component:e,props:f})=>({17:e,16:f}),({component:e,props:f})=>(e?131072:0)|(f?65536:0)]},$$scope:{ctx:r}}}),{c(){t=h("span"),v(o.$$.fragment),a=R(),d(t,"class","au-rating-star")},m(e,f){_(e,t,f),w(o,t,null),T(t,a),l=!0},p(e,f){const n={};f&4&&(n.slotContent=e[2]),f&2&&(n.props={fill:e[12],index:e[13]}),f&196736&&(n.$$scope={dirty:f,ctx:e}),o.$set(n)},i(e){l||(p(o.$$.fragment,e),l=!0)},o(e){g(o.$$.fragment,e),l=!1},d(e){e&&m(t),b(o)}}}function nt(r){let t,o,a,l=y(r[1]),e=[];for(let n=0;n<l.length;n+=1)e[n]=A(U(r,l,n));const f=n=>g(e[n],1,1,()=>{e[n]=null});return{c(){t=h("div");for(let n=0;n<e.length;n+=1)e[n].c();d(t,"class",o="d-inline-flex au-rating "+r[0])},m(n,i){_(n,t,i);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null);a=!0},p(n,[i]){if(i&196742){l=y(n[1]);let s;for(s=0;s<l.length;s+=1){const c=U(n,l,s);e[s]?(e[s].p(c,i),p(e[s],1)):(e[s]=A(c),e[s].c(),p(e[s],1),e[s].m(t,null))}for(L(),s=l.length;s<e.length;s+=1)f(s);M()}(!a||i&1&&o!==(o="d-inline-flex au-rating "+n[0]))&&d(t,"class",o)},i(n){if(!a){for(let i=0;i<l.length;i+=1)p(e[i]);a=!0}},o(n){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)g(e[i]);a=!1},d(n){n&&m(t),P(e,n)}}}function at(r,t,o){let a,l,e,{$$slots:f={},$$scope:n}=t;const i=Q(f),s=X({factory:Y,widgetName:"rating",$$slots:i,$$props:{...t,readonly:!0},events:{onRatingChange:()=>{}}}),{stores:{stars$:c,className$:$,slotStar$:k},patchChangedProps:O}=s;return S(r,c,u=>o(1,l=u)),S(r,$,u=>o(0,a=u)),S(r,k,u=>o(2,e=u)),r.$$set=u=>{o(10,t=N(N({},t),j(u))),"$$scope"in u&&o(7,n=u.$$scope)},r.$$.update=()=>{O(t)},t=j(t),[a,l,e,c,$,k,f,n]}class F extends I{constructor(t){super(),J(this,t,at,nt,K,{})}}function ot(r){let t;return{c(){t=h("span"),t.textContent="★",d(t,"slot","star"),d(t,"class","star"),C(t,"filled",r[0]===100),C(t,"bad",r[1]<3)},m(o,a){_(o,t,a)},p(o,a){a&1&&C(t,"filled",o[0]===100),a&2&&C(t,"bad",o[1]<3)},d(o){o&&m(t)}}}function lt(r){let t,o,a,l,e,f,n,i;return a=new F({props:{rating:7,maxRating:10}}),n=new F({props:{rating:7,maxRating:10,className:"rating-custom",$$slots:{star:[ot,({fill:s,index:c})=>({0:s,1:c}),({fill:s,index:c})=>(s?1:0)|(c?2:0)]},$$scope:{ctx:r}}}),{c(){t=h("div"),t.textContent="The readonly rating without slot:",o=R(),v(a.$$.fragment),l=R(),e=h("div"),e.textContent="Using a slot to customize the display:",f=R(),v(n.$$.fragment),d(e,"class","mt-2")},m(s,c){_(s,t,c),_(s,o,c),w(a,s,c),_(s,l,c),_(s,e,c),_(s,f,c),w(n,s,c),i=!0},p(s,[c]){const $={};c&7&&($.$$scope={dirty:c,ctx:s}),n.$set($)},i(s){i||(p(a.$$.fragment,s),p(n.$$.fragment,s),i=!0)},o(s){g(a.$$.fragment,s),g(n.$$.fragment,s),i=!1},d(s){s&&(m(t),m(o),m(l),m(e),m(f)),b(a,s),b(n,s)}}}class dt extends I{constructor(t){super(),J(this,t,null,lt,K,{})}}export{dt as default};