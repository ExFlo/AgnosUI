import{S as f,i as u,s as d,e as _,a5 as b,k as m,c as g,q as h,a4 as $,g as v,v as x,m as T,a6 as k,t as w,a as y,h as C,d as S}from"./AppCommon-Bd7c79Sv.js";import{S as q}from"./Select-DQ8KsOc1.js";import"./floatingUI-Cw3YEUdT.js";import"./directive-DCYlDznf-2vjIImQS.js";import"./promise-CY2U8bTP-cdt_EYoz.js";import"./focustrack-DHcoEO1D.js";import"./navManager-Dweow_uA.js";import"./extendWidget-BVNG4-cR.js";import"./Slot--Urk653d.js";import"./config-CvPzCiDZ.js";function L(a){let s,i,e,l,n;function p(t){a[2](t)}let c={items:a[1],badgeClassName:"badge text-bg-light"};return a[0]!==void 0&&(c.filterText=a[0]),e=new q({props:c}),_.push(()=>b(e,"filterText",p)),{c(){s=m("div"),i=m("div"),g(e.$$.fragment),h(i,"class","mb-3"),$(s,"height","400px")},m(t,o){v(t,s,o),x(s,i),T(e,i,null),n=!0},p(t,[o]){const r={};o&2&&(r.items=t[1]),!l&&o&1&&(l=!0,r.filterText=t[0],k(()=>l=!1)),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){t&&C(s),S(e)}}}function A(a,s,i){let e;const l=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],n=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],p=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],c=[...l,...n,...p];let t="";function o(r){t=r,i(0,t)}return a.$$.update=()=>{a.$$.dirty&1&&i(1,e=t?c.filter(r=>r.toLowerCase().startsWith(t)):c.slice(0,10))},[t,e,o]}class I extends f{constructor(s){super(),u(this,s,A,L,d,{})}}export{I as default};