import{S as P,i as Q,s as T,e as B,a2 as D,j as h,f as b,c as E,k as S,g as l,m as G,a3 as H,u as I,t as J,a as K,h as i,d as L}from"./index-1sS8ioLs.js";import{S as M}from"./Slider-xiJC10da.js";import"./config-xiwqc8Uv.js";import"./func-tK0QDe5R.js";import"./stores-Nsl5-xhl.js";import"./directive-x2fO-dbA.js";import"./writables-kfZr2FXF.js";function U(n){var q;let o,f,t,r,_,p=((q=n[0])==null?void 0:q.join(", "))+"",a,j,c,g,d,w,u,C,k,v=n[1].join(", ")+"",$,m;function N(e){n[2](e)}let z={min:0,max:100,stepSize:1};n[0]!==void 0&&(z.values=n[0]),t=new M({props:z}),B.push(()=>D(t,"values",N));function O(e){n[3](e)}let V={min:0,max:100,stepSize:1};return n[1]!==void 0&&(V.values=n[1]),u=new M({props:V}),B.push(()=>D(u,"values",O)),{c(){o=h("h2"),o.textContent="Slider with form control",f=b(),E(t.$$.fragment),_=S(`
Form control values: `),a=S(p),j=b(),c=h("hr"),g=b(),d=h("h2"),d.textContent="Slider with values",w=b(),E(u.$$.fragment),k=S(`
Values: `),$=S(v)},m(e,s){l(e,o,s),l(e,f,s),G(t,e,s),l(e,_,s),l(e,a,s),l(e,j,s),l(e,c,s),l(e,g,s),l(e,d,s),l(e,w,s),G(u,e,s),l(e,k,s),l(e,$,s),m=!0},p(e,[s]){var A;const F={};!r&&s&1&&(r=!0,F.values=e[0],H(()=>r=!1)),t.$set(F),(!m||s&1)&&p!==(p=((A=e[0])==null?void 0:A.join(", "))+"")&&I(a,p);const R={};!C&&s&2&&(C=!0,R.values=e[1],H(()=>C=!1)),u.$set(R),(!m||s&2)&&v!==(v=e[1].join(", ")+"")&&I($,v)},i(e){m||(J(t.$$.fragment,e),J(u.$$.fragment,e),m=!0)},o(e){K(t.$$.fragment,e),K(u.$$.fragment,e),m=!1},d(e){e&&(i(o),i(f),i(_),i(a),i(j),i(c),i(g),i(d),i(w),i(k),i($)),L(t,e),L(u,e)}}}function W(n,o,f){let t=[10,40,50,60,90],r=[10,40];function _(a){t=a,f(0,t)}function p(a){r=a,f(1,r)}return[t,r,_,p]}class te extends P{constructor(o){super(),Q(this,o,W,U,T,{})}}export{te as default};