import{S as y,i as C,s as D,e as z,a as m,b as p,u as B,x as b,n as h,f as v,w as E,h as g,B as k,M as w,j as F,a2 as I,k as M,c as N,l as S,m as P,a3 as U,v as W,t as A,d as G,g as J}from"./AppCommon-ClvmpOkk.js";import{c as K}from"./slider-C0nHfrq6.js";import{c as O}from"./config-DRK-U59L.js";import"./directive-CGjTRxRh-BvEKR48r.js";import"./stores-CYKhcBtR.js";import"./writables-DoU_XYTX-BRZiYGy-.js";import"./resizeObserver-uQnwmRXl.js";function Q(a){let e,l,s,r,u;return{c(){e=z("input"),m(e,"type","range"),m(e,"min",a[0]),m(e,"max",a[1]),e.value=l=a[2][0].value,m(e,"step",a[3]),m(e,"class","range"),m(e,"aria-label",s=a[2][0].ariaLabel)},m(i,o){p(i,e,o),r||(u=[B(a[9].call(null,e)),b(e,"click",a[4].actions.click),b(e,"keydown",a[11]),b(e,"mousedown",a[12]),b(e,"touchstart",a[13])],r=!0)},p(i,[o]){o&1&&m(e,"min",i[0]),o&2&&m(e,"max",i[1]),o&4&&l!==(l=i[2][0].value)&&(e.value=l),o&8&&m(e,"step",i[3]),o&4&&s!==(s=i[2][0].ariaLabel)&&m(e,"aria-label",s)},i:h,o:h,d(i){i&&v(e),r=!1,E(u)}}}function R(a,e,l){let s,r,u,i,{values:o=void 0}=e;const d=O({factory:K,widgetName:"slider",$$props:e,events:{onValuesChange:n=>{l(10,o=n)}}}),{stores:{min$:f,max$:t,stepSize$:c,sortedHandles$:_},directives:{sliderDirective:V},patchChangedProps:H}=d;g(a,f,n=>l(0,s=n)),g(a,t,n=>l(1,r=n)),g(a,c,n=>l(3,i=n)),g(a,_,n=>l(2,u=n));const L=n=>d.actions.keydown(n,0),j=n=>d.actions.mouseDown(n,0),q=n=>d.actions.touchStart(n,0);return a.$$set=n=>{l(15,e=k(k({},e),w(n))),"values"in n&&l(10,o=n.values)},a.$$.update=()=>{H(e)},e=w(e),[s,r,u,i,d,f,t,c,_,V,o,L,j,q]}class T extends y{constructor(e){super(),C(this,e,R,Q,D,{values:10})}}function X(a){let e,l,s,r,u,i,o;function d(t){a[1](t)}let f={min:0,max:100,stepSize:1};return a[0]!==void 0&&(f.values=a[0]),s=new T({props:f}),F.push(()=>I(s,"values",d)),{c(){e=z("h2"),e.textContent="DaisyUI Example",l=M(),N(s.$$.fragment),u=S(`
Value: `),i=S(a[0]),m(e,"class","text-lg mb-2")},m(t,c){p(t,e,c),p(t,l,c),P(s,t,c),p(t,u,c),p(t,i,c),o=!0},p(t,[c]){const _={};!r&&c&1&&(r=!0,_.values=t[0],U(()=>r=!1)),s.$set(_),(!o||c&1)&&W(i,t[0])},i(t){o||(A(s.$$.fragment,t),o=!0)},o(t){G(s.$$.fragment,t),o=!1},d(t){t&&(v(e),v(l),v(u),v(i)),J(s,t)}}}function Y(a,e,l){let s=[20];function r(u){s=u,l(0,s)}return[s,r]}class ne extends y{constructor(e){super(),C(this,e,Y,X,D,{})}}export{ne as default};
