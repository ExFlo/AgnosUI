import{S as D,i as j,s as z,e as A,a5 as B,c as E,f as F,k as u,l as _,q as h,m as G,g as C,v as a,a6 as I,x as H,t as J,a as K,h as S,d as M}from"./AppCommon-Bd7c79Sv.js";import{R as N}from"./Rating-B11Mrp_w.js";import"./rating-Dx4K8Qid.js";import"./rating-CNQcp5pm-g2x63X3B.js";import"./rating-BR5wD7y2-XTg1dDHw.js";import"./directive-DCYlDznf-2vjIImQS.js";import"./writables-DoU_XYTX-Cg6V7d5t.js";import"./extendWidget-BVNG4-cR.js";import"./Slot--Urk653d.js";import"./config-CvPzCiDZ.js";function O(r){let n,o,l,e,m,p,g,d,i,c,$,k,R,b,L,f;function w(t){r[5](t)}let q={onHover:r[3],onLeave:r[4],ariaLabel:"rating"};return r[0]!==void 0&&(q.rating=r[0]),n=new N({props:q}),A.push(()=>B(n,"rating",w)),{c(){E(n.$$.fragment),l=F(),e=u("div"),m=_("Current rate: "),p=u("span"),g=_(r[0]),d=u("br"),i=_(`
	Hovered: `),c=u("span"),$=_(r[1]),k=u("br"),R=_(`
	Left: `),b=u("span"),L=_(r[2]),h(p,"id","defaultRating"),h(c,"id","defaultHovered"),h(b,"id","defaultLeft")},m(t,s){G(n,t,s),C(t,l,s),C(t,e,s),a(e,m),a(e,p),a(p,g),a(e,d),a(e,i),a(e,c),a(c,$),a(e,k),a(e,R),a(e,b),a(b,L),f=!0},p(t,[s]){const v={};s&2&&(v.onHover=t[3]),s&4&&(v.onLeave=t[4]),!o&&s&1&&(o=!0,v.rating=t[0],I(()=>o=!1)),n.$set(v),(!f||s&1)&&H(g,t[0]),(!f||s&2)&&H($,t[1]),(!f||s&4)&&H(L,t[2])},i(t){f||(J(n.$$.fragment,t),f=!0)},o(t){K(n.$$.fragment,t),f=!1},d(t){t&&(S(l),S(e)),M(n,t)}}}function P(r,n,o){let l=3,e=0,m=0;const p=i=>o(1,e=i),g=i=>o(2,m=i);function d(i){l=i,o(0,l)}return[l,e,m,p,g,d]}class tt extends D{constructor(n){super(),j(this,n,P,O,z,{})}}export{tt as default};