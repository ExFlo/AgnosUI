import{S as T,Z as F,_ as M,$ as g,a0 as U,a1 as p,a2 as v,a3 as R,i as b,K as A,a4 as Y,a5 as Z,a6 as $,a7 as z,a8 as G,a9 as H,aa as V,e as K,ab as J,ac as Q,ad as j,ae as W,af as X,ag as k,k as B,ah as ee,ai as re,aj as ne,ak as x,al as te,am as ae}from"./runtime.D-xWURpp.js";import{c as ie}from"./store.D0vaWVf2.js";function I(e,n=null,f){if(typeof e!="object"||e===null||T in e)return e;const s=Z(e);if(s!==F&&s!==M)return e;var a=new Map,c=$(e),P=g(0);c&&a.set("length",g(e.length));var h;return new Proxy(e,{defineProperty(l,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&U();var i=a.get(r);return i===void 0?(i=g(t.value),a.set(r,i)):p(i,I(t.value,h)),!0},deleteProperty(l,r){var t=a.get(r);if(t===void 0)r in l&&a.set(r,g(v));else{if(c&&typeof r=="string"){var i=a.get("length"),u=Number(r);Number.isInteger(u)&&u<i.v&&p(i,u)}p(t,v),q(P)}return!0},get(l,r,t){if(r===T)return e;var i=a.get(r),u=r in l;if(i===void 0&&(!u||R(l,r)?.writable)&&(i=g(I(u?l[r]:v,h)),a.set(r,i)),i!==void 0){var d=b(i);return d===v?void 0:d}return Reflect.get(l,r,t)},getOwnPropertyDescriptor(l,r){var t=Reflect.getOwnPropertyDescriptor(l,r);if(t&&"value"in t){var i=a.get(r);i&&(t.value=b(i))}else if(t===void 0){var u=a.get(r),d=u?.v;if(u!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(l,r){if(r===T)return!0;var t=a.get(r),i=t!==void 0&&t.v!==v||Reflect.has(l,r);if(t!==void 0||A!==null&&(!i||R(l,r)?.writable)){t===void 0&&(t=g(i?I(l[r],h):v),a.set(r,t));var u=b(t);if(u===v)return!1}return i},set(l,r,t,i){var u=a.get(r),d=r in l;if(c&&r==="length")for(var y=t;y<u.v;y+=1){var _=a.get(y+"");_!==void 0?p(_,v):y in l&&(_=g(v),a.set(y+"",_))}u===void 0?(!d||R(l,r)?.writable)&&(u=g(void 0),p(u,I(t,h)),a.set(r,u)):(d=u.v!==v,p(u,I(t,h)));var O=Reflect.getOwnPropertyDescriptor(l,r);if(O?.set&&O.set.call(i,t),!d){if(c&&typeof r=="string"){var D=a.get("length"),w=Number(r);Number.isInteger(w)&&w>=D.v&&p(D,w+1)}q(P)}return!0},ownKeys(l){b(P);var r=Reflect.ownKeys(l).filter(u=>{var d=a.get(u);return d===void 0||d.v!==v});for(var[t,i]of a)i.v!==v&&!(t in l)&&r.push(t);return r},setPrototypeOf(){Y()}})}function q(e,n=1){p(e,e.v+n)}const se={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function de(e,n,f){return new Proxy({props:e,exclude:n},se)}const fe={get(e,n){let f=e.props.length;for(;f--;){let s=e.props[f];if(x(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},set(e,n,f){let s=e.props.length;for(;s--;){let a=e.props[s];x(a)&&(a=a());const c=R(a,n);if(c&&c.set)return c.set(f),!0}return!1},getOwnPropertyDescriptor(e,n){let f=e.props.length;for(;f--;){let s=e.props[f];if(x(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s){const a=R(s,n);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,n){for(let f of e.props)if(x(f)&&(f=f()),f!=null&&n in f)return!0;return!1},ownKeys(e){const n=[];for(let f of e.props){x(f)&&(f=f());for(const s in f)n.includes(s)||n.push(s)}return n}};function oe(...e){return new Proxy({props:e},fe)}function C(e){for(var n=A,f=A;n!==null&&!(n.f&(J|Q));)n=n.parent;try{return j(n),e()}finally{j(f)}}function ce(e,n,f,s){var a=(f&W)!==0,c=(f&X)!==0,P=(f&k)!==0,h=(f&te)!==0,l=!1,r;P?[r,l]=ie(()=>e[n]):r=e[n];var t=R(e,n)?.set,i=s,u=!0,d=!1,y=()=>(d=!0,u&&(u=!1,h?i=K(s):i=s),i);r===void 0&&s!==void 0&&(t&&c&&z(),r=y(),t&&t(r));var _;if(c)_=()=>{var o=e[n];return o===void 0?y():(u=!0,d=!1,o)};else{var O=C(()=>(a?B:ee)(()=>e[n]));O.f|=G,_=()=>{var o=b(O);return o!==void 0&&(i=void 0),o===void 0?i:o}}if(!(f&H))return _;if(t){var D=e.$$legacy;return function(o,m){return arguments.length>0?((!c||!m||D||l)&&t(m?_():o),o):_()}}var w=!1,L=!1,N=ae(r),E=C(()=>B(()=>{var o=_(),m=b(N),S=re;return w||o===void 0&&S.f&ne?(w=!1,L=!0,m):(L=!1,N.v=o)}));return a||(E.equals=V),function(o,m){if(arguments.length>0){const S=m?b(E):c&&P?I(o):o;return E.equals(S)||(w=!0,p(N,S),d&&i!==void 0&&(i=S),K(()=>b(E))),o}return b(E)}}export{I as a,ce as p,de as r,oe as s};
