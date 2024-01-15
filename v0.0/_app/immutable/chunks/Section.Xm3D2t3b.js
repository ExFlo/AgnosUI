import{s as E,a as j,u as q,g as y,b as B,h as k,i as D}from"./scheduler.MXnwm5xh.js";import{S as I,i as O,e as p,s as A,c as b,a as w,f as L,d as u,r as h,g as z,h as c,n as M,o as C,t as T,k as U,b as F,l as G,D as N,m as H,j as J,p as K}from"./index.MJGoEjPo.js";import{g as P}from"./tooltip.wDRmBN-4.js";import{S as Q}from"./Svg.MdOYaY-Q.js";const R=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>`;function g(r){let a,o,_,n,s,m,t,e,l;s=new Q({props:{className:"icon-24 align-middle",svg:R}});let v=[{id:r[2]},{class:e=k(r[3])+" svelte-1fw63p"}],d={};for(let i=0;i<v.length;i+=1)d=D(d,v[i]);return{c(){a=p("h"+r[0]),o=T(r[1]),_=A(),n=p("a"),U(s.$$.fragment),this.h()},l(i){a=b(i,("h"+r[0]||"null").toUpperCase(),{id:!0,class:!0});var f=w(a);o=F(f,r[1]),_=L(f),n=b(f,"A",{class:!0,href:!0,"aria-label":!0});var S=w(n);G(s.$$.fragment,S),S.forEach(u),f.forEach(u),this.h()},h(){h(n,"class","anchor-link svelte-1fw63p"),h(n,"href",m="#"+r[2]),h(n,"aria-label",t="link to "+r[1]),N("h"+r[0])(a,d)},m(i,f){z(i,a,f),c(a,o),c(a,_),c(a,n),H(s,n,null),l=!0},p(i,f){(!l||f&2)&&J(o,i[1]),(!l||f&4&&m!==(m="#"+i[2]))&&h(n,"href",m),(!l||f&2&&t!==(t="link to "+i[1]))&&h(n,"aria-label",t),N("h"+i[0])(a,d=P(v,[(!l||f&4)&&{id:i[2]},(!l||f&8&&e!==(e=k(i[3])+" svelte-1fw63p"))&&{class:e}]))},i(i){l||(M(s.$$.fragment,i),l=!0)},o(i){C(s.$$.fragment,i),l=!1},d(i){i&&u(a),K(s)}}}function V(r){let a,o="h"+r[0],_,n,s="h"+r[0]&&g(r);const m=r[5].default,t=j(m,r,r[4],null);return{c(){a=p("section"),s&&s.c(),_=A(),t&&t.c(),this.h()},l(e){a=b(e,"SECTION",{class:!0});var l=w(a);s&&s.l(l),_=L(l),t&&t.l(l),l.forEach(u),this.h()},h(){h(a,"class","svelte-1fw63p")},m(e,l){z(e,a,l),s&&s.m(a,null),c(a,_),t&&t.m(a,null),n=!0},p(e,[l]){"h"+e[0]?o?E(o,"h"+e[0])?(s.d(1),s=g(e),o="h"+e[0],s.c(),s.m(a,_)):s.p(e,l):(s=g(e),o="h"+e[0],s.c(),s.m(a,_)):o&&(s.d(1),s=null,o="h"+e[0]),t&&t.p&&(!n||l&16)&&q(t,m,e,e[4],n?B(m,e[4],l,null):y(e[4]),null)},i(e){n||(M(t,e),n=!0)},o(e){C(s,e),C(t,e),n=!1},d(e){e&&u(a),s&&s.d(e),t&&t.d(e)}}}function W(r,a,o){let{$$slots:_={},$$scope:n}=a,{level:s}=a,{label:m}=a,{id:t}=a,{headerClassName:e=void 0}=a;return r.$$set=l=>{"level"in l&&o(0,s=l.level),"label"in l&&o(1,m=l.label),"id"in l&&o(2,t=l.id),"headerClassName"in l&&o(3,e=l.headerClassName),"$$scope"in l&&o(4,n=l.$$scope)},[s,m,t,e,n,_]}class x extends I{constructor(a){super(),O(this,a,W,V,E,{level:0,label:1,id:2,headerClassName:3})}}export{x as S};
