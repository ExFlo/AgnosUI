import{s as zt,L as et,G as Et,e as mt,t as Xt,a as Yt,c as pt,b as ht,d as jt,f as nt,g as Ut,m as qt,Z as ot,i as Gt,h as it,_ as rt,j as Jt,n as vt,J as Kt,$ as Zt}from"./scheduler.sZeTUDDy.js";import{n as Rt,k as $t,q as gt,s as Qt,m as Ct,d as Lt,t as te}from"./app.gL1Fuuyo.js";import{S as ee,i as ne}from"./index.D-uqoLVu.js";import{w as oe,c as C,f as ie,g as re}from"./stores.CHqcV6NS.js";function se(t){let e,o,n,i,r,s,c,a=[{"data-popper-arrow":""},{}],l={};for(let m=0;m<a.length;m+=1)l=Et(l,a[m]);let f=[{role:"tooltip"},{"data-show":""},{"data-popper-placement":t[4]},{}],d={};for(let m=0;m<f.length;m+=1)d=Et(d,f[m]);return{c(){e=mt("div"),o=mt("div"),n=Xt(t[0]),i=Yt(),r=mt("div"),this.h()},l(m){e=pt(m,"DIV",{role:!0,"data-show":!0,"data-popper-placement":!0});var u=ht(e);o=pt(u,"DIV",{class:!0});var h=ht(o);n=jt(h,t[0]),h.forEach(nt),i=Ut(u),r=pt(u,"DIV",{"data-popper-arrow":!0}),ht(r).forEach(nt),u.forEach(nt),this.h()},h(){qt(o,"class","tooltip-inner"),ot(r,l),ot(e,d)},m(m,u){Gt(m,e,u),it(e,o),it(o,n),it(e,i),it(e,r),s||(c=[rt(t[3].call(null,r)),rt(Rt.call(null,r,"tooltip-arrow position-absolute")),rt(t[2].call(null,e)),rt(Rt.call(null,e,"tooltip bs-tooltip-auto fade show position-absolute"))],s=!0)},p(m,[u]){u&1&&Jt(n,m[0]),ot(r,l=$t(a,[{"data-popper-arrow":""},u&8&&{}])),ot(e,d=$t(f,[{role:"tooltip"},{"data-show":""},u&16&&{"data-popper-placement":m[4]},u&4&&{}]))},i:vt,o:vt,d(m){m&&nt(e),s=!1,Kt(c)}}}function ce(t,e,o){let n,i=vt,r=()=>(i(),i=Zt(c,f=>o(4,n=f)),c);t.$$.on_destroy.push(()=>i());let{content:s}=e,{placement$:c}=e;r();let{directive:a}=e,{arrowDirective:l}=e;return t.$$set=f=>{"content"in f&&o(0,s=f.content),"placement$"in f&&r(o(1,c=f.placement$)),"directive"in f&&o(2,a=f.directive),"arrowDirective"in f&&o(3,l=f.arrowDirective)},[s,c,a,l,n]}class le extends ee{constructor(e){super(),ne(this,e,ce,se,zt,{content:0,placement$:1,directive:2,arrowDirective:3})}get content(){return this.$$.ctx[0]}set content(e){this.$$set({content:e}),et()}get placement$(){return this.$$.ctx[1]}set placement$(e){this.$$set({placement$:e}),et()}get directive(){return this.$$.ctx[2]}set directive(e){this.$$set({directive:e}),et()}get arrowDirective(){return this.$$.ctx[3]}set arrowDirective(e){this.$$set({arrowDirective:e}),et()}}const U=Math.min,z=Math.max,ct=Math.round,st=Math.floor,W=t=>({x:t,y:t}),ae={left:"right",right:"left",bottom:"top",top:"bottom"},fe={start:"end",end:"start"};function ue(t,e,o){return z(t,U(e,o))}function ft(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function de(t){return t==="x"?"y":"x"}function yt(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(q(t))?"y":"x"}function bt(t){return de(K(t))}function me(t,e,o){o===void 0&&(o=!1);const n=Q(t),i=bt(t),r=yt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=lt(s)),[s,lt(s)]}function pe(t){const e=lt(t);return[xt(t),e,xt(e)]}function xt(t){return t.replace(/start|end/g,e=>fe[e])}function he(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function ge(t,e,o,n){const i=Q(t);let r=he(q(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(xt)))),r}function lt(t){return t.replace(/left|right|bottom|top/g,e=>ae[e])}function we(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ft(t){return typeof t!="number"?we(t):{top:t,right:t,bottom:t,left:t}}function at(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function _t(t,e,o){let{reference:n,floating:i}=t;const r=K(e),s=bt(e),c=yt(s),a=q(e),l=r==="y",f=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,m=n[c]/2-i[c]/2;let u;switch(a){case"top":u={x:f,y:n.y-i.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:d};break;case"left":u={x:n.x-i.width,y:d};break;default:u={x:n.x,y:n.y}}switch(Q(e)){case"start":u[s]-=m*(o&&l?-1:1);break;case"end":u[s]+=m*(o&&l?-1:1);break}return u}const ve=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:d}=_t(l,n,a),m=n,u={},h=0;for(let g=0;g<c.length;g++){const{name:v,fn:w}=c[g],{x:y,y:O,data:A,reset:b}=await w({x:f,y:d,initialPlacement:n,placement:m,strategy:i,middlewareData:u,rects:l,platform:s,elements:{reference:t,floating:e}});f=y??f,d=O??d,u={...u,[v]:{...u[v],...A}},b&&h<=50&&(h++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(l=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:f,y:d}=_t(l,m,a)),g=-1)}return{x:f,y:d,placement:m,strategy:i,middlewareData:u}};async function xe(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=ft(e,t),h=Ft(u),v=c[m?d==="floating"?"reference":"floating":d],w=at(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),y=d==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,O=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),A=await(r.isElement==null?void 0:r.isElement(O))?await(r.getScale==null?void 0:r.getScale(O))||{x:1,y:1}:{x:1,y:1},b=at(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:O,strategy:a}):y);return{top:(w.top-b.top+h.top)/A.y,bottom:(b.bottom-w.bottom+h.bottom)/A.y,left:(w.left-b.left+h.left)/A.x,right:(b.right-w.right+h.right)/A.x}}const ye=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:f=0}=ft(t,e)||{};if(l==null)return{};const d=Ft(f),m={x:o,y:n},u=bt(i),h=yt(u),g=await s.getDimensions(l),v=u==="y",w=v?"top":"left",y=v?"bottom":"right",O=v?"clientHeight":"clientWidth",A=r.reference[h]+r.reference[u]-m[u]-r.floating[h],b=m[u]-r.reference[u],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let F=$?$[O]:0;(!F||!await(s.isElement==null?void 0:s.isElement($)))&&(F=c.floating[O]||r.floating[h]);const p=A/2-b/2,x=F/2-g[h]/2-1,D=U(d[w],x),M=U(d[y],x),T=D,H=F-g[h]-M,E=F/2-g[h]/2+p,Y=ue(T,E,H),k=!a.arrow&&Q(i)!=null&&E!==Y&&r.reference[h]/2-(E<T?D:M)-g[h]/2<0,P=k?E<T?E-T:E-H:0;return{[u]:m[u]+P,data:{[u]:Y,centerOffset:E-Y-P,...k&&{alignmentOffset:P}},reset:k}}}),be=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...v}=ft(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=q(i),y=K(c),O=q(c)===c,A=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=m||(O||!g?[lt(c)]:pe(c)),$=h!=="none";!m&&$&&b.push(...ge(c,g,h,A));const F=[c,...b],p=await xe(e,v),x=[];let D=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&x.push(p[w]),d){const E=me(i,s,A);x.push(p[E[0]],p[E[1]])}if(D=[...D,{placement:i,overflows:x}],!x.every(E=>E<=0)){var M,T;const E=(((M=r.flip)==null?void 0:M.index)||0)+1,Y=F[E];if(Y)return{data:{index:E,overflows:D},reset:{placement:Y}};let k=(T=D.filter(P=>P.overflows[0]<=0).sort((P,B)=>P.overflows[1]-B.overflows[1])[0])==null?void 0:T.placement;if(!k)switch(u){case"bestFit":{var H;const P=(H=D.filter(B=>{if($){const N=K(B.placement);return N===y||N==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(N=>N>0).reduce((N,Ht)=>N+Ht,0)]).sort((B,N)=>B[1]-N[1])[0])==null?void 0:H[0];P&&(k=P);break}case"initialPlacement":k=c;break}if(i!==k)return{reset:{placement:k}}}return{}}}};async function Oe(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=q(o),c=Q(o),a=K(o)==="y",l=["left","top"].includes(s)?-1:1,f=r&&a?-1:1,d=ft(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof h=="number"&&(u=c==="end"?h*-1:h),a?{x:u*f,y:m*l}:{x:m*l,y:u*f}}const Ae=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,a=await Oe(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}};function J(t){return kt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(kt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function kt(t){return t instanceof Node||t instanceof R(t).Node}function L(t){return t instanceof Element||t instanceof R(t).Element}function S(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function Tt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function De(t){return["table","td","th"].includes(J(t))}function ut(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ot(t){const e=At(),o=L(t)?_(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Ee(t){let e=I(t);for(;S(e)&&!G(e);){if(Ot(e))return e;if(ut(e))return null;e=I(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(t){return["html","body","#document"].includes(J(t))}function _(t){return R(t).getComputedStyle(t)}function dt(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Tt(t)&&t.host||V(t);return Tt(e)?e.host:e}function Vt(t){const e=I(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&tt(e)?e:Vt(e)}function Z(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Vt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=R(i);return r?e.concat(s,s.visualViewport||[],tt(i)?i:[],s.frameElement&&o?Z(s.frameElement):[]):e.concat(i,Z(i,[],o))}function Bt(t){const e=_(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=S(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=ct(o)!==r||ct(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function Dt(t){return L(t)?t:t.contextElement}function j(t){const e=Dt(t);if(!S(e))return W(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Bt(e);let s=(r?ct(o.width):o.width)/n,c=(r?ct(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Re=W(0);function Nt(t){const e=R(t);return!At()||!e.visualViewport?Re:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $e(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function X(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=Dt(t);let s=W(1);e&&(n?L(n)&&(s=j(n)):s=j(t));const c=$e(r,o,n)?Nt(r):W(0);let a=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(r){const m=R(r),u=n&&L(n)?R(n):n;let h=m,g=h.frameElement;for(;g&&n&&u!==h;){const v=j(g),w=g.getBoundingClientRect(),y=_(g),O=w.left+(g.clientLeft+parseFloat(y.paddingLeft))*v.x,A=w.top+(g.clientTop+parseFloat(y.paddingTop))*v.y;a*=v.x,l*=v.y,f*=v.x,d*=v.y,a+=O,l+=A,h=R(g),g=h.frameElement}}return at({width:f,height:d,x:a,y:l})}function Ce(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=V(n),c=e?ut(e.floating):!1;if(n===s||c&&r)return o;let a={scrollLeft:0,scrollTop:0},l=W(1);const f=W(0),d=S(n);if((d||!d&&!r)&&((J(n)!=="body"||tt(s))&&(a=dt(n)),S(n))){const m=X(n);l=j(n),f.x=m.x+n.clientLeft,f.y=m.y+n.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-a.scrollLeft*l.x+f.x,y:o.y*l.y-a.scrollTop*l.y+f.y}}function Le(t){return Array.from(t.getClientRects())}function Wt(t){return X(V(t)).left+dt(t).scrollLeft}function _e(t){const e=V(t),o=dt(t),n=t.ownerDocument.body,i=z(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=z(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Wt(t);const c=-o.scrollTop;return _(n).direction==="rtl"&&(s+=z(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Te(t,e){const o=R(t),n=V(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,a=0;if(i){r=i.width,s=i.height;const l=At();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:c,y:a}}function Pe(t,e){const o=X(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=S(t)?j(t):W(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,a=i*r.x,l=n*r.y;return{width:s,height:c,x:a,y:l}}function Pt(t,e,o){let n;if(e==="viewport")n=Te(t,o);else if(e==="document")n=_e(V(t));else if(L(e))n=Pe(e,o);else{const i=Nt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return at(n)}function It(t,e){const o=I(t);return o===e||!L(o)||G(o)?!1:_(o).position==="fixed"||It(o,e)}function Se(t,e){const o=e.get(t);if(o)return o;let n=Z(t,[],!1).filter(c=>L(c)&&J(c)!=="body"),i=null;const r=_(t).position==="fixed";let s=r?I(t):t;for(;L(s)&&!G(s);){const c=_(s),a=Ot(s);!a&&c.position==="fixed"&&(i=null),(r?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!a&&It(t,s))?n=n.filter(f=>f!==s):i=c,s=I(s)}return e.set(t,n),n}function Fe(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?ut(e)?[]:Se(e,this._c):[].concat(o),n],c=s[0],a=s.reduce((l,f)=>{const d=Pt(e,f,i);return l.top=z(d.top,l.top),l.right=U(d.right,l.right),l.bottom=U(d.bottom,l.bottom),l.left=z(d.left,l.left),l},Pt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ke(t){const{width:e,height:o}=Bt(t);return{width:e,height:o}}function Ve(t,e,o){const n=S(e),i=V(e),r=o==="fixed",s=X(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=W(0);if(n||!n&&!r)if((J(e)!=="body"||tt(i))&&(c=dt(e)),n){const d=X(e,!0,r,e);a.x=d.x+e.clientLeft,a.y=d.y+e.clientTop}else i&&(a.x=Wt(i));const l=s.left+c.scrollLeft-a.x,f=s.top+c.scrollTop-a.y;return{x:l,y:f,width:s.width,height:s.height}}function wt(t){return _(t).position==="static"}function St(t,e){return!S(t)||_(t).position==="fixed"?null:e?e(t):t.offsetParent}function Mt(t,e){const o=R(t);if(ut(t))return o;if(!S(t)){let i=I(t);for(;i&&!G(i);){if(L(i)&&!wt(i))return i;i=I(i)}return o}let n=St(t,e);for(;n&&De(n)&&wt(n);)n=St(n,e);return n&&G(n)&&wt(n)&&!Ot(n)?o:n||Ee(t)||o}const Be=async function(t){const e=this.getOffsetParent||Mt,o=this.getDimensions,n=await o(t.floating);return{reference:Ve(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Ne(t){return _(t).direction==="rtl"}const We={convertOffsetParentRelativeRectToViewportRelativeRect:Ce,getDocumentElement:V,getClippingRect:Fe,getOffsetParent:Mt,getElementRects:Be,getClientRects:Le,getDimensions:ke,getScale:j,isElement:L,isRTL:Ne};function Ie(t,e){let o=null,n;const i=V(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();const{left:l,top:f,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const u=st(f),h=st(i.clientWidth-(l+d)),g=st(i.clientHeight-(f+m)),v=st(l),y={rootMargin:-u+"px "+-h+"px "+-g+"px "+-v+"px",threshold:z(0,U(1,a))||1};let O=!0;function A(b){const $=b[0].intersectionRatio;if($!==a){if(!O)return s();$?s(!1,$):n=setTimeout(()=>{s(!1,1e-7)},1e3)}O=!1}try{o=new IntersectionObserver(A,{...y,root:i.ownerDocument})}catch{o=new IntersectionObserver(A,y)}o.observe(t)}return s(!0),r}function Me(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,l=Dt(t),f=i||r?[...l?Z(l):[],...Z(e)]:[];f.forEach(w=>{i&&w.addEventListener("scroll",o,{passive:!0}),r&&w.addEventListener("resize",o)});const d=l&&c?Ie(l,o):null;let m=-1,u=null;s&&(u=new ResizeObserver(w=>{let[y]=w;y&&y.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var O;(O=u)==null||O.observe(e)})),o()}),l&&!a&&u.observe(l),u.observe(e));let h,g=a?X(t):null;a&&v();function v(){const w=X(t);g&&(w.x!==g.x||w.y!==g.y||w.width!==g.width||w.height!==g.height)&&o(),g=w,h=requestAnimationFrame(v)}return o(),()=>{var w;f.forEach(y=>{i&&y.removeEventListener("scroll",o),r&&y.removeEventListener("resize",o)}),d?.(),(w=u)==null||w.disconnect(),u=null,a&&cancelAnimationFrame(h)}}const He=Ae,ze=be,Xe=ye,Ye=(t,e,o)=>{const n=new Map,i={platform:We,...o},r={...i.platform,_c:n};return ve(t,e,{...i,platform:r})},je={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Ue=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:o,arrowOptions$:n},i]=oe(je,t),{directive:r,element$:s}=gt(),{directive:c,element$:a}=gt(),{directive:l,element$:f}=gt(),d=C(()=>{const p=f();if(!p)return null;const x=n();return typeof x=="function"?D=>({...x(D),element:p}):{...x,element:p}}),m=C(()=>{let p=o();const x=d();return x&&(p={...p,middleware:[...p.middleware??[],Xe(x)]}),p}),u=ie([s,a,m,e],([p,x,D,M],T)=>{if(p&&x){const H=Me(x,p,()=>{T(Ye(x,p,D))},M);return()=>{T(null),H()}}},null),h=Qt(u,null),g=C(()=>{var p;return(p=h())==null?void 0:p.placement}),v=C(()=>{var p;return(p=h())==null?void 0:p.middlewareData}),w=C(()=>{var p;return(p=h())==null?void 0:p.x}),y=C(()=>{var p;return(p=h())==null?void 0:p.y}),O=C(()=>{var p;return(p=h())==null?void 0:p.strategy}),A=C(()=>{var p,x;return(x=(p=v())==null?void 0:p.arrow)==null?void 0:x.x}),b=C(()=>{var p,x;return(x=(p=v())==null?void 0:p.arrow)==null?void 0:x.y}),$=C(()=>{const p=s();p&&(p.style.left=`${w()??0}px`,p.style.top=`${y()??0}px`)}),F=C(()=>{const p=f();if(p){const x=A(),D=b();p.style.left=x!=null?`${x}px`:"",p.style.top=D!=null?`${D}px`:""}});return{patch:i,...re({x$:w,y$:y,strategy$:O,placement$:g,middlewareData$:v}),directives:{referenceDirective:c,floatingDirective:Ct(r,Lt($)),arrowDirective:Ct(l,Lt(F))}}},Ze=te((t,e)=>{const o=e.content;let n;const{directives:{floatingDirective:i,referenceDirective:r,arrowDirective:s},stores:{placement$:c}}=Ue({props:{arrowOptions:{padding:6},computePositionOptions:{placement:"top",middleware:[He(8),ze()]}}}),a=r(t);t.addEventListener("mouseenter",l),t.addEventListener("mouseleave",f);function l(){n||(n=new le({target:document.body,props:{content:o,placement$:c,directive:i,arrowDirective:s}}))}function f(){n?.$destroy(),n=void 0}return{update(d){n&&(n.content=d.content)},destroy(){f(),a?.destroy?.(),t.removeEventListener("mouseenter",l),t.removeEventListener("mouseleave",f)}}});export{Ze as t};