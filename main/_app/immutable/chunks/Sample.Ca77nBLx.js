const __vite__fileDeps=["./Code.4h3ltOcQ.js","./scheduler.DDKLfDno.js","./index.DMnRV_Lo.js","./app.BenaLyw7.js","./stores.toppmJtn.js","./stores.IJzaBGes.js","./entry.BEtVwGce.js","./preload-helper.Dch09mLN.js","./tooltip.ChxID15W.js","./Svg.DVorqz_I.js","../assets/Code.CqPCqTut.css","./index.B0U5aRM9.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as _e}from"./preload-helper.Dch09mLN.js";import{_ as Be,$ as Ve,Q as q,K as Me,s as pe,x as K,i as N,f as w,a0 as ee,F as V,a1 as Oe,l as be,u as ve,o as ge,p as we,C as te,e as z,a as M,c as T,b as C,g as O,X as P,W as I,m as y,E as le,h as S,Y as B,L as ne,I as ke,k as Z,q as Le,a2 as x,z as Pe,t as Ue,d as Re,j as He,n as Ae}from"./scheduler.DDKLfDno.js";import{g as Q,a as D,d as X,t as L,S as Ee,i as De,c as U,b as W,m as R,e as H}from"./index.DMnRV_Lo.js";import{k as Y,w as se,q as Fe,v as We,n as J,e as re}from"./app.BenaLyw7.js";import{t as G}from"./tooltip.ChxID15W.js";import{e as je,n as qe,d as ae,h as Je,s as Ke,p as Qe}from"./stores.toppmJtn.js";import{S as $}from"./Svg.DVorqz_I.js";import{d as Xe}from"./entry.BEtVwGce.js";function oe(s,e){const n=e.token={};function t(l,r,a,o){if(e.token!==n)return;e.resolved=o;let u=e.ctx;a!==void 0&&(u=u.slice(),u[a]=o);const i=l&&(e.current=l)(u);let d=!1;e.block&&(e.blocks?e.blocks.forEach((v,E)=>{E!==r&&v&&(Q(),D(v,1,1,()=>{e.blocks[E]===v&&(e.blocks[E]=null)}),X())}):e.block.d(1),i.c(),L(i,1),i.m(e.mount(),e.anchor),d=!0),e.block=i,e.blocks&&(e.blocks[r]=i),d&&Me()}if(Be(s)){const l=Ve();if(s.then(r=>{q(l),t(e.then,1,e.value,r),q(null)},r=>{if(q(l),t(e.catch,2,e.error,r),q(null),!e.hasCatch)throw r}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,s),!0;e.resolved=s}}function Ye(s,e,n){const t=e.slice(),{resolved:l}=s;s.current===s.then&&(t[s.value]=l),s.current===s.catch&&(t[s.error]=l),s.block.p(t,n)}const Ze=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>`,Ge=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>`,$e=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M8 18.1176H14.8868L10.8359 28L24 13.8824H17.1132L21.1641 4L8 18.1176Z" fill="currentColor"/>
</svg>
`,xe=s=>({}),ie=s=>({});function et(s){let e;const n=s[4].error,t=be(n,s,s[3],ie);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&8)&&ve(t,n,l,l[3],e?we(n,l[3],r,xe):ge(l[3]),ie)},i(l){e||(L(t,l),e=!0)},o(l){D(t,l),e=!1},d(l){t&&t.d(l)}}}function tt(s){let e,n,t;const l=[s[1]];var r=s[5].default;function a(o,u){let i={};for(let d=0;d<l.length;d+=1)i=V(i,l[d]);return u!==void 0&&u&2&&(i=V(i,Y(l,[se(o[1])]))),{props:i}}return r&&(e=te(r,a(s))),{c(){e&&U(e.$$.fragment),n=K()},l(o){e&&W(e.$$.fragment,o),n=K()},m(o,u){e&&R(e,o,u),N(o,n,u),t=!0},p(o,u){if(u&1&&r!==(r=o[5].default)){if(e){Q();const i=e;D(i.$$.fragment,1,0,()=>{H(i,1)}),X()}r?(e=te(r,a(o,u)),U(e.$$.fragment),L(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const i=u&2?Y(l,[se(o[1])]):{};e.$set(i)}},i(o){t||(e&&L(e.$$.fragment,o),t=!0)},o(o){e&&D(e.$$.fragment,o),t=!1},d(o){o&&w(n),e&&H(e,o)}}}function lt(s){let e;const n=s[4].default,t=be(n,s,s[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&8)&&ve(t,n,l,l[3],e?we(n,l[3],r,null):ge(l[3]),null)},i(l){e||(L(t,l),e=!0)},o(l){D(t,l),e=!1},d(l){t&&t.d(l)}}}function nt(s){let e,n,t,l={ctx:s,current:null,token:null,hasCatch:!0,pending:lt,then:tt,catch:et,value:5,blocks:[,,,]};return oe(n=s[0],l),{c(){e=K(),l.block.c()},l(r){e=K(),l.block.l(r)},m(r,a){N(r,e,a),l.block.m(r,l.anchor=a),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(r,[a]){s=r,l.ctx=s,a&1&&n!==(n=s[0])&&oe(n,l)||Ye(l,s,a)},i(r){t||(L(l.block),t=!0)},o(r){for(let a=0;a<3;a+=1){const o=l.blocks[a];D(o)}t=!1},d(r){r&&w(e),l.block.d(r),l.token=null,l=null}}}function st(s,e,n){let t;const l=["component"];let r=ee(e,l),{$$slots:a={},$$scope:o}=e,{component:u}=e;return s.$$set=i=>{e=V(V({},e),Oe(i)),n(1,r=ee(e,l)),"component"in i&&n(2,u=i.component),"$$scope"in i&&n(3,o=i.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&n(0,t=u())},[t,r,u,o,a]}class rt extends Ee{constructor(e){super(),De(this,e,st,nt,pe,{component:2})}}const at=()=>{const{element$:s,directive:e}=Fe();return{dimensions$:je(s,(t,l)=>{if(t===null)return qe;const r=new ResizeObserver(a=>{l(a[0])});return r.observe(t),()=>r?.disconnect()},void 0),directive:e}};function ot(s,e=!0,n="sampleload",t=300){const l=ae(!0),r=ae(!1);let a;const{dimensions$:o,directive:u}=at();let i;const d=Xe([o,l],([m,b],k)=>{const h=m?.borderBoxSize?.[0]?.blockSize;b&&h&&k(Math.ceil(h))},s),v=m=>{const b=m.contentDocument?.getElementById("root");b&&(i?.destroy?.(),i=u(b))},E=m=>{m.target instanceof HTMLIFrameElement&&(v(m.target),m.target.classList.add("loaded"))};return{showSpinner$:Je(r),handlerDirective:We((m,b)=>{let k;m.onload=E,v(m),e?(k?.(),k=d.subscribe(f=>m.height=f+"px")):m.height=s+"px";const h=f=>{(!m.contentWindow?.location?.href?.startsWith(f)||!m.contentDocument||m.contentDocument.readyState==="loading")&&(m.classList.remove("loaded"),l.set(!1),a&&clearTimeout(a),a=setTimeout(()=>{r.set(!0),a=void 0},t))};h(b);const _=f=>{f instanceof MessageEvent&&f.data.type===n&&f.source===m.contentWindow&&(a&&(clearTimeout(a),a=void 0),l.set(!0),r.set(!1),m.classList.add("loaded"))};return window.addEventListener("message",_,!1),{update:h,destroy:()=>{window.removeEventListener("message",_),k?.(),i?.destroy?.()}}})}}function ce(s,e,n){const t=s.slice();return t[25]=e[n],t}function ue(s){let e,n='<div class="spinner-border text-primary-emphasis" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=z("div"),e.innerHTML=n,this.h()},l(t){e=T(t,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-1js4y66"&&(e.innerHTML=n),this.h()},h(){y(e,"class","position-absolute top-50 start-50 translate-middle iframeSpinner svelte-v70n3d")},m(t,l){N(t,e,l)},d(t){t&&w(e)}}}function fe(s){let e,n,t,l,r,a,o,u,i,d,v,E;t=new $({props:{className:"icon-24 align-middle",svg:Ge}});let m=[{"aria-label":"Show or hide the code"},{}],b={};for(let c=0;c<m.length;c+=1)b=V(b,m[c]);a=new $({props:{className:"icon-24 align-middle",svg:$e}});let k=[{"aria-label":"Open example in stackblitz"},{}],h={};for(let c=0;c<k.length;c+=1)h=V(h,k[c]);i=new $({props:{className:"icon-20 align-middle",svg:Ze}});let _=[{href:s[10]},{target:"_blank"},{rel:"noreferrer nofollow external"},{"aria-label":"View sample in new tab"},{}],f={};for(let c=0;c<_.length;c+=1)f=V(f,_[c]);return{c(){e=z("div"),n=z("button"),U(t.$$.fragment),l=M(),r=z("button"),U(a.$$.fragment),o=M(),u=z("a"),U(i.$$.fragment),this.h()},l(c){e=T(c,"DIV",{class:!0,role:!0,"aria-label":!0});var g=C(e);n=T(g,"BUTTON",{"aria-label":!0});var A=C(n);W(t.$$.fragment,A),A.forEach(w),l=O(g),r=T(g,"BUTTON",{"aria-label":!0});var j=C(r);W(a.$$.fragment,j),j.forEach(w),o=O(g),u=T(g,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var F=C(u);W(i.$$.fragment,F),F.forEach(w),g.forEach(w),this.h()},h(){P(n,b),I(n,"svelte-v70n3d",!0),P(r,h),I(r,"svelte-v70n3d",!0),P(u,f),I(u,"svelte-v70n3d",!0),y(e,"class","btn-toolbar border border-top-0 d-flex align-items-center p-1"),y(e,"role","toolbar"),y(e,"aria-label","Toolbar with button groups")},m(c,g){N(c,e,g),S(e,n),R(t,n,null),n.autofocus&&n.focus(),S(e,l),S(e,r),R(a,r,null),r.autofocus&&r.focus(),S(e,o),S(e,u),R(i,u,null),d=!0,v||(E=[B(J.call(null,n,"btn btn-sm btn-link m-1 p-0")),B(G.call(null,n,{content:"Toggle code"})),x(n,"click",s[21]),B(J.call(null,r,"btn btn-sm btn-link m-1 p-0")),B(G.call(null,r,{content:"Edit in Stackblitz"})),x(r,"click",s[22]),B(J.call(null,u,"action m-1 p-0")),B(G.call(null,u,{content:"Open example in a new tab"}))],v=!0)},p(c,g){I(n,"svelte-v70n3d",!0),I(r,"svelte-v70n3d",!0),P(u,f=Y(_,[(!d||g&1024)&&{href:c[10]},{target:"_blank"},{rel:"noreferrer nofollow external"},{"aria-label":"View sample in new tab"},{}])),I(u,"svelte-v70n3d",!0)},i(c){d||(L(t.$$.fragment,c),L(a.$$.fragment,c),L(i.$$.fragment,c),d=!0)},o(c){D(t.$$.fragment,c),D(a.$$.fragment,c),D(i.$$.fragment,c),d=!1},d(c){c&&w(e),H(t),H(a),H(i),v=!1,ke(E)}}}function de(s){let e,n,t,l,r=s[11].length>1&&me(s);return t=new rt({props:{component:ft,code:s[9],fileName:s[6],language:s[7]?s[8]:void 0,$$slots:{default:[it]},$$scope:{ctx:s}}}),{c(){r&&r.c(),e=M(),n=z("div"),U(t.$$.fragment),this.h()},l(a){r&&r.l(a),e=O(a),n=T(a,"DIV",{class:!0});var o=C(n);W(t.$$.fragment,o),o.forEach(w),this.h()},h(){y(n,"class","border border-top-0")},m(a,o){r&&r.m(a,o),N(a,e,o),N(a,n,o),R(t,n,null),l=!0},p(a,o){a[11].length>1?r?r.p(a,o):(r=me(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null);const u={};o&512&&(u.code=a[9]),o&64&&(u.fileName=a[6]),o&384&&(u.language=a[7]?a[8]:void 0),o&268435456&&(u.$$scope={dirty:o,ctx:a}),t.$set(u)},i(a){l||(L(t.$$.fragment,a),l=!0)},o(a){D(t.$$.fragment,a),l=!1},d(a){a&&(w(e),w(n)),r&&r.d(a),H(t)}}}function me(s){let e,n=re(s[11]),t=[];for(let l=0;l<n.length;l+=1)t[l]=he(ce(s,n,l));return{c(){e=z("ul");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=T(l,"UL",{class:!0});var r=C(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(w),this.h()},h(){y(e,"class","nav nav-underline p-3 border-start border-end")},m(l,r){N(l,e,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(l,r){if(r&2112){n=re(l[11]);let a;for(a=0;a<n.length;a+=1){const o=ce(l,n,a);t[a]?t[a].p(o,r):(t[a]=he(o),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(l){l&&w(e),Pe(t,l)}}}function he(s){let e,n,t=s[25]+"",l,r,a,o;function u(){return s[23](s[25])}return{c(){e=z("li"),n=z("button"),l=Ue(t),r=M(),this.h()},l(i){e=T(i,"LI",{class:!0});var d=C(e);n=T(d,"BUTTON",{class:!0});var v=C(n);l=Re(v,t),v.forEach(w),r=O(d),d.forEach(w),this.h()},h(){y(n,"class","nav-link"),I(n,"active",s[6]===s[25]),y(e,"class","nav-item")},m(i,d){N(i,e,d),S(e,n),S(n,l),S(e,r),a||(o=x(n,"click",u),a=!0)},p(i,d){s=i,d&2048&&t!==(t=s[25]+"")&&He(l,t),d&2112&&I(n,"active",s[6]===s[25])},d(i){i&&w(e),a=!1,o()}}}function it(s){let e,n='<span class="visually-hidden">Loading...</span>';return{c(){e=z("div"),e.innerHTML=n,this.h()},l(t){e=T(t,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),Le(e)!=="svelte-15rvxc2"&&(e.innerHTML=n),this.h()},h(){y(e,"class","spinner-border text-primary-emphasis"),y(e,"role","status")},m(t,l){N(t,e,l)},p:Ae,d(t){t&&w(e)}}}function ct(s){let e,n,t,l,r,a,o,u,i,d,v,E,m=s[12]&&ue(),b=[{title:s[1]},{}],k={};for(let f=0;f<b.length;f+=1)k=V(k,b[f]);let h=s[4]&&fe(s),_=s[0]&&de(s);return{c(){e=z("div"),n=z("div"),m&&m.c(),t=M(),l=z("iframe"),u=M(),h&&h.c(),i=M(),_&&_.c(),this.h()},l(f){e=T(f,"DIV",{class:!0});var c=C(e);n=T(c,"DIV",{class:!0});var g=C(n);m&&m.l(g),t=O(g),l=T(g,"IFRAME",{title:!0}),C(l).forEach(w),g.forEach(w),u=O(c),h&&h.l(c),i=O(c),_&&_.l(c),c.forEach(w),this.h()},h(){P(l,k),I(l,"svelte-v70n3d",!0),y(n,"class",o=le(`position-relative ${s[3]?"border-bottom":"border"} iframe-container`)+" svelte-v70n3d"),y(e,"class","mb-4 py-2 px-0 px-sm-3")},m(f,c){N(f,e,c),S(e,n),m&&m.m(n,null),S(n,t),S(n,l),S(e,u),h&&h.m(e,null),S(e,i),_&&_.m(e,null),d=!0,v||(E=[B(J.call(null,l,"demo-sample d-block")),B(r=ut.call(null,l,s[10])),B(a=s[14].call(null,l,s[5]))],v=!0)},p(f,[c]){f[12]?m||(m=ue(),m.c(),m.m(n,t)):m&&(m.d(1),m=null),P(l,k=Y(b,[(!d||c&2)&&{title:f[1]},c&1056&&{}])),r&&ne(r.update)&&c&1024&&r.update.call(null,f[10]),a&&ne(a.update)&&c&32&&a.update.call(null,f[5]),I(l,"svelte-v70n3d",!0),(!d||c&8&&o!==(o=le(`position-relative ${f[3]?"border-bottom":"border"} iframe-container`)+" svelte-v70n3d"))&&y(n,"class",o),f[4]?h?(h.p(f,c),c&16&&L(h,1)):(h=fe(f),h.c(),L(h,1),h.m(e,i)):h&&(Q(),D(h,1,1,()=>{h=null}),X()),f[0]?_?(_.p(f,c),c&1&&L(_,1)):(_=de(f),_.c(),L(_,1),_.m(e,null)):_&&(Q(),D(_,1,1,()=>{_=null}),X())},i(f){d||(L(h),L(_),d=!0)},o(f){D(h),D(_),d=!1},d(f){f&&w(e),m&&m.d(),h&&h.d(),_&&_.d(),v=!1,ke(E)}}}const ut=(s,e)=>{const n=t=>s.contentWindow?.location.replace(new URL(t,window.location.href));return n(e),{update:n}},ft=()=>_e(()=>import("./Code.4h3ltOcQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);function dt(s,e,n){let t,l,r,a,o,u,i,d,v,E;Z(s,Ke,p=>n(8,d=p)),Z(s,Qe,p=>n(20,v=p));let{title:m}=e,{sample:b}=e,{noresize:k=!1}=e,{height:h}=e,{isDoc:_=!1}=e,{urlParameters:f=void 0}=e,{showButtons:c=!0}=e,{showCode:g=!1}=e,A="";async function j(p,Ce,Ie,Ne){n(9,A=p?await Ie.files[Ce].files[Ne]():"")}const{showSpinner$:F,handlerDirective:Se}=ot(h,!k);Z(s,F,p=>n(12,E=p));const ze=()=>n(0,g=!g),Te=async()=>(await _e(()=>import("./index.B0U5aRM9.js"),__vite__mapDeps([11,7]),import.meta.url)).openInStackblitz(b,d),ye=p=>n(6,a=p);return s.$$set=p=>{"title"in p&&n(1,m=p.title),"sample"in p&&n(2,b=p.sample),"noresize"in p&&n(15,k=p.noresize),"height"in p&&n(16,h=p.height),"isDoc"in p&&n(3,_=p.isDoc),"urlParameters"in p&&n(17,f=p.urlParameters),"showButtons"in p&&n(4,c=p.showButtons),"showCode"in p&&n(0,g=p.showCode)},s.$$.update=()=>{s.$$.dirty&260&&n(7,t=b.files[d].entryPoint==="placeholder"),s.$$.dirty&132&&n(18,l=t?"placeholder/placeholdersample":`${b.componentName}/${b.sampleName}`.toLowerCase()),s.$$.dirty&260&&n(11,r=Object.keys(b.files[d].files)),s.$$.dirty&260&&n(6,a=b.files[d].entryPoint),s.$$.dirty&260&&n(19,o=b.files[d].complementaryUrl),s.$$.dirty&325&&j(g,d,b,a),s.$$.dirty&1835264&&n(5,u=`${v}${d}/samples${o}/#/${l}`),s.$$.dirty&131104&&n(10,i=u+(f?`#${JSON.stringify(f)}`:""))},[g,m,b,_,c,u,a,t,d,A,i,r,E,F,Se,k,h,f,l,o,v,ze,Te,ye]}class kt extends Ee{constructor(e){super(),De(this,e,dt,ct,pe,{title:1,sample:2,noresize:15,height:16,isDoc:3,urlParameters:17,showButtons:4,showCode:0})}}export{kt as S,oe as h,Ye as u};