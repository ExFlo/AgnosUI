import{S as f,i as u,s as d,e as _,a2 as b,j as m,c as g,n as h,a1 as $,g as v,p as x,m as T,a3 as w,t as k,a as y,h as C,d as S}from"./index-93n6bwsl.js";import{S as L}from"./Select-7jEtQi5c.js";import"./config-hWDDs27y.js";import"./func-tK0QDe5R.js";import"./stores-dvMhDENG.js";import"./floatingUI-j8inI7lP.js";import"./directive-yQBF63DW.js";import"./promise-VmoOm-gS.js";import"./focustrack-ir6GpMEZ.js";import"./Slot-hSjqm3-S.js";function j(a){let s,i,e,l,n;function p(t){a[2](t)}let c={items:a[1],badgeClassName:"badge text-bg-light"};return a[0]!==void 0&&(c.filterText=a[0]),e=new L({props:c}),_.push(()=>b(e,"filterText",p)),{c(){s=m("div"),i=m("div"),g(e.$$.fragment),h(i,"class","mb-3"),$(s,"height","400px")},m(t,o){v(t,s,o),x(s,i),T(e,i,null),n=!0},p(t,[o]){const r={};o&2&&(r.items=t[1]),!l&&o&1&&(l=!0,r.filterText=t[0],w(()=>l=!1)),e.$set(r)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){t&&C(s),S(e)}}}function q(a,s,i){let e;const l=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],n=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],p=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],c=[...l,...n,...p];let t="";function o(r){t=r,i(0,t)}return a.$$.update=()=>{a.$$.dirty&1&&i(1,e=t?c.filter(r=>r.toLowerCase().startsWith(t)):c.slice(0,10))},[t,e,o]}class I extends f{constructor(s){super(),u(this,s,q,j,d,{})}}export{I as default};
