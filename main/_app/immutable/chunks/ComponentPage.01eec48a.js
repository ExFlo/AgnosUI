import{s as se,n as Z,e as H,c as ce,u as fe,g as _e,d as he}from"./scheduler.f4aa3cfc.js";import{S as ne,i as oe,g as k,m as V,s as I,h as w,j as D,n as F,f as p,c as L,k as s,A as R,a as U,y as b,o as ie,z as me,r as ge,B as de,u as be,v as ve,d as y,t as $,w as pe}from"./index.320fb0b4.js";import{g as x,a as ee}from"./app.197acf07.js";import{s as ue,p as Ee,f as ke,a as we}from"./stores.41c2ba82.js";import{e as te}from"./each.2630a2a3.js";function ae(e,r,t){const n=e.slice();n[2]=r[t].title,n[9]=r[t].key,n[10]=r[t].path;const m=n[1]===n[9];return n[11]=m,n}function re(e){let r,t,n=e[2]+"",m,h,f,u;return{c(){r=k("li"),t=k("a"),m=V(n),u=I(),this.h()},l(l){r=w(l,"LI",{class:!0,role:!0});var _=D(r);t=w(_,"A",{href:!0,role:!0,class:!0,"aria-selected":!0});var c=D(t);m=F(c,n),c.forEach(p),u=L(_),_.forEach(p),this.h()},h(){s(t,"href",h=`${e[7]}${e[3]}${e[10]}`),s(t,"role","tab"),s(t,"class","nav-link link-body-emphasis"),s(t,"aria-selected",f=e[11]),R(t,"active",e[11]),s(r,"class","nav-item"),s(r,"role","presentation")},m(l,_){U(l,r,_),b(r,t),b(t,m),b(r,u)},p(l,_){_&1&&n!==(n=l[2]+"")&&ie(m,n),_&137&&h!==(h=`${l[7]}${l[3]}${l[10]}`)&&s(t,"href",h),_&3&&f!==(f=l[11])&&s(t,"aria-selected",f),_&3&&R(t,"active",l[11])},d(l){l&&p(r)}}}function Ae(e){let r,t,n,m,h,f,u,l,_,c,a,o,d,M,j,B,P,A,W,q,z,G,N,S=te(e[0]),E=[];for(let i=0;i<S.length;i+=1)E[i]=re(ae(e,S,i));return{c(){r=k("header"),t=k("div"),n=k("h1"),m=V(e[2]),h=I(),f=k("div"),u=k("div"),l=k("a"),_=V("Angular"),o=I(),d=k("a"),M=V("React"),P=I(),A=k("a"),W=V("Svelte"),G=I(),N=k("ul");for(let i=0;i<E.length;i+=1)E[i].c();this.h()},l(i){r=w(i,"HEADER",{class:!0});var v=D(r);t=w(v,"DIV",{class:!0});var g=D(t);n=w(g,"H1",{class:!0});var C=D(n);m=F(C,e[2]),C.forEach(p),h=L(g),f=w(g,"DIV",{class:!0});var K=D(f);u=w(K,"DIV",{class:!0,role:!0,"aria-label":!0});var T=D(u);l=w(T,"A",{href:!0,class:!0,"aria-current":!0});var O=D(l);_=F(O,"Angular"),O.forEach(p),o=L(T),d=w(T,"A",{href:!0,class:!0,"aria-current":!0});var Q=D(d);M=F(Q,"React"),Q.forEach(p),P=L(T),A=w(T,"A",{href:!0,class:!0,"aria-current":!0});var X=D(A);W=F(X,"Svelte"),X.forEach(p),T.forEach(p),K.forEach(p),g.forEach(p),G=L(v),N=w(v,"UL",{class:!0,role:!0});var Y=D(N);for(let J=0;J<E.length;J+=1)E[J].l(Y);Y.forEach(p),v.forEach(p),this.h()},h(){s(n,"class","col-auto me-auto me-md-none mb-0 p-3"),s(l,"href",c=`${e[7]}angular/${e[8]}`),s(l,"class","btn btn-outline-primary"),s(l,"aria-current",a=!e[6]||"page"),R(l,"active",e[6]),s(d,"href",j=`${e[7]}react/${e[8]}`),s(d,"class","btn btn-outline-primary"),s(d,"aria-current",B=!e[5]||"page"),R(d,"active",e[5]),s(A,"href",q=`${e[7]}svelte/${e[8]}`),s(A,"class","btn btn-outline-primary"),s(A,"aria-current",z=!e[4]||"page"),R(A,"active",e[4]),s(u,"class","btn-group btn-group-sm me-2 bg-white"),s(u,"role","group"),s(u,"aria-label","Basic radio toggle button group"),s(f,"class","col flex-grow-0"),s(t,"class","row mb-4 align-items-center w-100"),s(N,"class","nav-tabs px-4 px-lg-5 content-tabset justify-content-start nav"),s(N,"role","tablist"),s(r,"class","bg-light pt-4 pb-5 px-4 px-lg-5 d-flex mb-4 align-items-center title")},m(i,v){U(i,r,v),b(r,t),b(t,n),b(n,m),b(t,h),b(t,f),b(f,u),b(u,l),b(l,_),b(u,o),b(u,d),b(d,M),b(u,P),b(u,A),b(A,W),b(r,G),b(r,N);for(let g=0;g<E.length;g+=1)E[g]&&E[g].m(N,null)},p(i,[v]){if(v&4&&ie(m,i[2]),v&384&&c!==(c=`${i[7]}angular/${i[8]}`)&&s(l,"href",c),v&64&&a!==(a=!i[6]||"page")&&s(l,"aria-current",a),v&64&&R(l,"active",i[6]),v&384&&j!==(j=`${i[7]}react/${i[8]}`)&&s(d,"href",j),v&32&&B!==(B=!i[5]||"page")&&s(d,"aria-current",B),v&32&&R(d,"active",i[5]),v&384&&q!==(q=`${i[7]}svelte/${i[8]}`)&&s(A,"href",q),v&16&&z!==(z=!i[4]||"page")&&s(A,"aria-current",z),v&16&&R(A,"active",i[4]),v&139){S=te(i[0]);let g;for(g=0;g<S.length;g+=1){const C=ae(i,S,g);E[g]?E[g].p(C,v):(E[g]=re(C),E[g].c(),E[g].m(N,null))}for(;g<E.length;g+=1)E[g].d(1);E.length=S.length}},i:Z,o:Z,d(i){i&&p(r),me(E,i)}}}function De(e,r,t){let n,m,h,f,u,l;H(e,ue,o=>t(3,f=o)),H(e,Ee,o=>t(7,u=o)),H(e,ke,o=>t(8,l=o));let{title:_}=r,{tabs:c}=r,{tab:a=""}=r;return e.$$set=o=>{"title"in o&&t(2,_=o.title),"tabs"in o&&t(0,c=o.tabs),"tab"in o&&t(1,a=o.tab)},e.$$.update=()=>{e.$$.dirty&8&&t(6,n=f==="angular"),e.$$.dirty&8&&t(5,m=f==="react"),e.$$.dirty&8&&t(4,h=f==="svelte")},[c,a,_,f,h,m,n,u,l]}class Ne extends ne{constructor(r){super(),oe(this,r,De,Ae,se,{title:2,tabs:0,tab:1})}}const Re=e=>({tab:e&4}),le=e=>({tab:e[2]});function Ie(e){let r,t,n,m,h,f,u,l;document.title=r=x(e[3],e[4]),h=new Ne({props:{title:e[0],tabs:e[1],tab:e[2]}});const _=e[7].default,c=ce(_,e,e[6],le);return{c(){t=k("meta"),m=I(),ge(h.$$.fragment),f=I(),u=k("div"),c&&c.c(),this.h()},l(a){const o=de("svelte-ll89db",document.head);t=w(o,"META",{name:!0,content:!0}),o.forEach(p),m=L(a),be(h.$$.fragment,a),f=L(a),u=w(a,"DIV",{class:!0});var d=D(u);c&&c.l(d),d.forEach(p),this.h()},h(){s(t,"name","description"),s(t,"content",n=ee(e[3],e[4])),s(u,"class","main-content")},m(a,o){b(document.head,t),U(a,m,o),ve(h,a,o),U(a,f,o),U(a,u,o),c&&c.m(u,null),l=!0},p(a,[o]){(!l||o&24)&&r!==(r=x(a[3],a[4]))&&(document.title=r),(!l||o&24&&n!==(n=ee(a[3],a[4])))&&s(t,"content",n);const d={};o&1&&(d.title=a[0]),o&2&&(d.tabs=a[1]),o&4&&(d.tab=a[2]),h.$set(d),c&&c.p&&(!l||o&68)&&fe(c,_,a,a[6],l?he(_,a[6],o,Re):_e(a[6]),le)},i(a){l||(y(h.$$.fragment,a),y(c,a),l=!0)},o(a){$(h.$$.fragment,a),$(c,a),l=!1},d(a){a&&(p(m),p(f),p(u)),p(t),pe(h,a),c&&c.d(a)}}}function Le(e,r,t){let n,m,h,f;H(e,we,a=>t(2,h=a)),H(e,ue,a=>t(4,f=a));let{$$slots:u={},$$scope:l}=r,{componentName:_}=r,{tabs:c}=r;return e.$$set=a=>{"componentName"in a&&t(0,_=a.componentName),"tabs"in a&&t(1,c=a.tabs),"$$scope"in a&&t(6,l=a.$$scope)},e.$$.update=()=>{e.$$.dirty&6&&t(5,n=c.find(a=>a.key===h)),e.$$.dirty&33&&t(3,m=`${_} ${(n==null?void 0:n.title.toLowerCase())??""}`)},[_,c,h,m,f,n,l,u]}class He extends ne{constructor(r){super(),oe(this,r,Le,Ie,se,{componentName:0,tabs:1})}}export{He as C};
