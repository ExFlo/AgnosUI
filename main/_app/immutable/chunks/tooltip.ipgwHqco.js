import{s as qt,e as ct,t as zt,a as Xt,c as lt,b as at,d as Yt,f as Q,g as Ut,m as N,i as Kt,h as Z,$ as Ot,j as Gt,n as dt,y as Jt,a1 as Qt}from"./scheduler.dcax7kZy.js";import{S as Zt,i as te}from"./index.wXF5KIfE.js";import{r as Pt,w as mt,b as gt,d as ft,n as $t,c as L,e as kt,f as Et,g as ee,h as ne}from"./stores.EWdFul8l.js";function en(t,e){const n={},o={},i={$$scope:1};let r=t.length;for(;r--;){const s=t[r],l=e[r];if(l){for(const c in s)c in l||(o[c]=1);for(const c in l)i[c]||(n[c]=l[c],i[c]=1);t[r]=l}else for(const c in s)i[c]=1}for(const s in o)s in n||(n[s]=void 0);return n}function nn(t){return typeof t=="object"&&t!==null?t:{}}function oe(t){let e,n,o,i,r,s,l;return{c(){e=ct("div"),n=ct("div"),o=zt(t[0]),i=Xt(),r=ct("div"),this.h()},l(c){e=lt(c,"DIV",{role:!0,class:!0,"data-show":!0,"data-popper-placement":!0});var a=at(e);n=lt(a,"DIV",{class:!0});var f=at(n);o=Yt(f,t[0]),f.forEach(Q),i=Ut(a),r=lt(a,"DIV",{class:!0,"data-popper-arrow":!0}),at(r).forEach(Q),a.forEach(Q),this.h()},h(){N(n,"class","tooltip-inner"),N(r,"class","tooltip-arrow position-absolute"),N(r,"data-popper-arrow",""),N(e,"role","tooltip"),N(e,"class","tooltip bs-tooltip-auto fade show position-absolute"),N(e,"data-show",""),N(e,"data-popper-placement",t[4])},m(c,a){Kt(c,e,a),Z(e,n),Z(n,o),Z(e,i),Z(e,r),s||(l=[Ot(t[3].call(null,r)),Ot(t[2].call(null,e))],s=!0)},p(c,[a]){a&1&&Gt(o,c[0]),a&16&&N(e,"data-popper-placement",c[4])},i:dt,o:dt,d(c){c&&Q(e),s=!1,Jt(l)}}}function ie(t,e,n){let o,i=dt,r=()=>(i(),i=Qt(l,f=>n(4,o=f)),l);t.$$.on_destroy.push(()=>i());let{content:s}=e,{placement$:l}=e;r();let{directive:c}=e,{arrowDirective:a}=e;return t.$$set=f=>{"content"in f&&n(0,s=f.content),"placement$"in f&&r(n(1,l=f.placement$)),"directive"in f&&n(2,c=f.directive),"arrowDirective"in f&&n(3,a=f.arrowDirective)},[s,l,c,a,o]}class re extends Zt{constructor(e){super(),te(this,e,ie,oe,qt,{content:0,placement$:1,directive:2,arrowDirective:3})}}const X=Math.min,I=Math.max,et=Math.round,tt=Math.floor,W=t=>({x:t,y:t}),se={left:"right",right:"left",bottom:"top",top:"bottom"},ce={start:"end",end:"start"};function le(t,e,n){return I(t,X(e,n))}function it(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function G(t){return t.split("-")[1]}function ae(t){return t==="x"?"y":"x"}function ht(t){return t==="y"?"height":"width"}function wt(t){return["top","bottom"].includes(Y(t))?"y":"x"}function yt(t){return ae(wt(t))}function fe(t,e,n){n===void 0&&(n=!1);const o=G(t),i=yt(t),r=ht(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=nt(s)),[s,nt(s)]}function ue(t){const e=nt(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>ce[e])}function de(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function pe(t,e,n,o){const i=G(t);let r=de(Y(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(pt)))),r}function nt(t){return t.replace(/left|right|bottom|top/g,e=>se[e])}function me(t){return{top:0,right:0,bottom:0,left:0,...t}}function _t(t){return typeof t!="number"?me(t):{top:t,right:t,bottom:t,left:t}}function ot(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Rt(t,e,n){let{reference:o,floating:i}=t;const r=wt(e),s=yt(e),l=ht(s),c=Y(e),a=r==="y",f=o.x+o.width/2-i.width/2,m=o.y+o.height/2-i.height/2,w=o[l]/2-i[l]/2;let u;switch(c){case"top":u={x:f,y:o.y-i.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:m};break;case"left":u={x:o.x-i.width,y:m};break;default:u={x:o.x,y:o.y}}switch(G(e)){case"start":u[s]-=w*(n&&a?-1:1);break;case"end":u[s]+=w*(n&&a?-1:1);break}return u}const ge=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:m}=Rt(a,o,c),w=o,u={},p=0;for(let g=0;g<l.length;g++){const{name:v,fn:h}=l[g],{x:b,y:O,data:E,reset:x}=await h({x:f,y:m,initialPlacement:o,placement:w,strategy:i,middlewareData:u,rects:a,platform:s,elements:{reference:t,floating:e}});if(f=b??f,m=O??m,u={...u,[v]:{...u[v],...E}},x&&p<=50){p++,typeof x=="object"&&(x.placement&&(w=x.placement),x.rects&&(a=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:f,y:m}=Rt(a,w,c)),g=-1;continue}}return{x:f,y:m,placement:w,strategy:i,middlewareData:u}};async function he(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:w=!1,padding:u=0}=it(e,t),p=_t(u),v=l[w?m==="floating"?"reference":"floating":m],h=ot(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(v)))==null||n?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:f,strategy:c})),b=m==="floating"?{...s.floating,x:o,y:i}:s.reference,O=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),E=await(r.isElement==null?void 0:r.isElement(O))?await(r.getScale==null?void 0:r.getScale(O))||{x:1,y:1}:{x:1,y:1},x=ot(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:O,strategy:c}):b);return{top:(h.top-x.top+p.top)/E.y,bottom:(x.bottom-h.bottom+p.bottom)/E.y,left:(h.left-x.left+p.left)/E.x,right:(x.right-h.right+p.right)/E.x}}const we=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:f=0}=it(t,e)||{};if(a==null)return{};const m=_t(f),w={x:n,y:o},u=yt(i),p=ht(u),g=await s.getDimensions(a),v=u==="y",h=v?"top":"left",b=v?"bottom":"right",O=v?"clientHeight":"clientWidth",E=r.reference[p]+r.reference[u]-w[u]-r.floating[p],x=w[u]-r.reference[u],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let S=A?A[O]:0;(!S||!await(s.isElement==null?void 0:s.isElement(A)))&&(S=l.floating[O]||r.floating[p]);const d=E/2-x/2,y=S/2-g[p]/2-1,C=X(m[h],y),j=X(m[b],y),R=C,H=S-g[p]-j,D=S/2-g[p]/2+d,$=le(R,D,H),k=!c.arrow&&G(i)!=null&&D!=$&&r.reference[p]/2-(D<R?C:j)-g[p]/2<0,F=k?D<R?D-R:D-H:0;return{[u]:w[u]+F,data:{[u]:$,centerOffset:D-$-F,...k&&{alignmentOffset:F}},reset:k}}}),ye=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:w,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...v}=it(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const h=Y(i),b=Y(l)===l,O=await(c.isRTL==null?void 0:c.isRTL(a.floating)),E=w||(b||!g?[nt(l)]:ue(l));!w&&p!=="none"&&E.push(...pe(l,g,p,O));const x=[l,...E],A=await he(e,v),S=[];let d=((o=r.flip)==null?void 0:o.overflows)||[];if(f&&S.push(A[h]),m){const R=fe(i,s,O);S.push(A[R[0]],A[R[1]])}if(d=[...d,{placement:i,overflows:S}],!S.every(R=>R<=0)){var y,C;const R=(((y=r.flip)==null?void 0:y.index)||0)+1,H=x[R];if(H)return{data:{index:R,overflows:d},reset:{placement:H}};let D=(C=d.filter($=>$.overflows[0]<=0).sort(($,k)=>$.overflows[1]-k.overflows[1])[0])==null?void 0:C.placement;if(!D)switch(u){case"bestFit":{var j;const $=(j=d.map(k=>[k.placement,k.overflows.filter(F=>F>0).reduce((F,It)=>F+It,0)]).sort((k,F)=>k[1]-F[1])[0])==null?void 0:j[0];$&&(D=$);break}case"initialPlacement":D=l;break}if(i!==D)return{reset:{placement:D}}}return{}}}};async function ve(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Y(n),l=G(n),c=wt(n)==="y",a=["left","top"].includes(s)?-1:1,f=r&&c?-1:1,m=it(e,t);let{mainAxis:w,crossAxis:u,alignmentAxis:p}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return l&&typeof p=="number"&&(u=l==="end"?p*-1:p),c?{x:u*f,y:w*a}:{x:w*a,y:u*f}}const xe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await ve(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}};function B(t){return Ft(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(Ft(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ft(t){return t instanceof Node||t instanceof T(t).Node}function V(t){return t instanceof Element||t instanceof T(t).Element}function _(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function be(t){return["table","td","th"].includes(B(t))}function vt(t){const e=xt(),n=P(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Oe(t){let e=U(t);for(;_(e)&&!rt(e);){if(vt(e))return e;e=U(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(B(t))}function P(t){return T(t).getComputedStyle(t)}function st(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||M(t);return At(e)?e.host:e}function Vt(t){const e=U(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&J(e)?e:Vt(e)}function K(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=T(i);return r?e.concat(s,s.visualViewport||[],J(i)?i:[],s.frameElement&&n?K(s.frameElement):[]):e.concat(i,K(i,[],n))}function Mt(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=_(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=et(n)!==r||et(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function bt(t){return V(t)?t:t.contextElement}function z(t){const e=bt(t);if(!_(e))return W(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Mt(e);let s=(r?et(n.width):n.width)/o,l=(r?et(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ee=W(0);function Nt(t){const e=T(t);return!xt()||!e.visualViewport?Ee:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Re(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=bt(t);let s=W(1);e&&(o?V(o)&&(s=z(o)):s=z(t));const l=Re(r,n,o)?Nt(r):W(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,f=i.width/s.x,m=i.height/s.y;if(r){const w=T(r),u=o&&V(o)?T(o):o;let p=w.frameElement;for(;p&&o&&u!==w;){const g=z(p),v=p.getBoundingClientRect(),h=P(p),b=v.left+(p.clientLeft+parseFloat(h.paddingLeft))*g.x,O=v.top+(p.clientTop+parseFloat(h.paddingTop))*g.y;c*=g.x,a*=g.y,f*=g.x,m*=g.y,c+=b,a+=O,p=T(p).frameElement}}return ot({width:f,height:m,x:c,y:a})}function Ae(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=_(n),r=M(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=W(1);const c=W(0);if((i||!i&&o!=="fixed")&&((B(n)!=="body"||J(r))&&(s=st(n)),_(n))){const a=q(n);l=z(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+c.x,y:e.y*l.y-s.scrollTop*l.y+c.y}}function De(t){return Array.from(t.getClientRects())}function Wt(t){return q(M(t)).left+st(t).scrollLeft}function Te(t){const e=M(t),n=st(t),o=t.ownerDocument.body,i=I(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=I(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Wt(t);const l=-n.scrollTop;return P(o).direction==="rtl"&&(s+=I(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Se(t,e){const n=T(t),o=M(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=xt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Ce(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?z(t):W(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function Dt(t,e,n){let o;if(e==="viewport")o=Se(t,n);else if(e==="document")o=Te(M(t));else if(V(e))o=Ce(e,n);else{const i=Nt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ot(o)}function Bt(t,e){const n=U(t);return n===e||!V(n)||rt(n)?!1:P(n).position==="fixed"||Bt(n,e)}function Le(t,e){const n=e.get(t);if(n)return n;let o=K(t,[],!1).filter(l=>V(l)&&B(l)!=="body"),i=null;const r=P(t).position==="fixed";let s=r?U(t):t;for(;V(s)&&!rt(s);){const l=P(s),c=vt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(s)&&!c&&Bt(t,s))?o=o.filter(f=>f!==s):i=l,s=U(s)}return e.set(t,o),o}function Pe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Le(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,f)=>{const m=Dt(e,f,i);return a.top=I(m.top,a.top),a.right=X(m.right,a.right),a.bottom=X(m.bottom,a.bottom),a.left=I(m.left,a.left),a},Dt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function $e(t){const{width:e,height:n}=Mt(t);return{width:e,height:n}}function ke(t,e,n){const o=_(e),i=M(e),r=n==="fixed",s=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=W(0);if(o||!o&&!r)if((B(e)!=="body"||J(i))&&(l=st(e)),o){const a=q(e,!0,r,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=Wt(i));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function Tt(t,e){return!_(t)||P(t).position==="fixed"?null:e?e(t):t.offsetParent}function jt(t,e){const n=T(t);if(!_(t))return n;let o=Tt(t,e);for(;o&&be(o)&&P(o).position==="static";)o=Tt(o,e);return o&&(B(o)==="html"||B(o)==="body"&&P(o).position==="static"&&!vt(o))?n:o||Oe(t)||n}const _e=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||jt,r=this.getDimensions;return{reference:ke(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Fe(t){return P(t).direction==="rtl"}const Ve={convertOffsetParentRelativeRectToViewportRelativeRect:Ae,getDocumentElement:M,getClippingRect:Pe,getOffsetParent:jt,getElementRects:_e,getClientRects:De,getDimensions:$e,getScale:z,isElement:V,isRTL:Fe};function Me(t,e){let n=null,o;const i=M(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:f,width:m,height:w}=t.getBoundingClientRect();if(l||e(),!m||!w)return;const u=tt(f),p=tt(i.clientWidth-(a+m)),g=tt(i.clientHeight-(f+w)),v=tt(a),b={rootMargin:-u+"px "+-p+"px "+-g+"px "+-v+"px",threshold:I(0,X(1,c))||1};let O=!0;function E(x){const A=x[0].intersectionRatio;if(A!==c){if(!O)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}O=!1}try{n=new IntersectionObserver(E,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(t)}return s(!0),r}function Ne(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=bt(t),f=i||r?[...a?K(a):[],...K(e)]:[];f.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const m=a&&l?Me(a,n):null;let w=-1,u=null;s&&(u=new ResizeObserver(h=>{let[b]=h;b&&b.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{u&&u.observe(e)})),n()}),a&&!c&&u.observe(a),u.observe(e));let p,g=c?q(t):null;c&&v();function v(){const h=q(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,p=requestAnimationFrame(v)}return n(),()=>{f.forEach(h=>{i&&h.removeEventListener("scroll",n),r&&h.removeEventListener("resize",n)}),m&&m(),u&&u.disconnect(),u=null,c&&cancelAnimationFrame(p)}}const We=ye,Be=we,je=(t,e,n)=>{const o=new Map,i={platform:Ve,...n},r={...i.platform,_c:o};return ge(t,e,{...i,platform:r})};Pt(void 0);const St=(t,e=!0)=>()=>{const n=t.subscribe($t);return{destroy:async()=>{e&&await 0,n()}}},Ht={equal:Object.is},on=()=>{const t=mt([],Ht);return gt(t,{register:e=>{let n=!1;return t.update(o=>[...o,e]),()=>{n||(n=!0,t.update(o=>{const i=o.indexOf(e);if(i>-1){const r=[...o];return r.splice(i,1),r}return o}))}}})},ut=()=>{const t=mt(null,Ht);return{element$:gt(t),directive:e=>{let n=!1;return t.update(o=>o?(console.error("The directive cannot be used on multiple elements.",o,e),o):(n=!0,e)),n?{destroy(){t.update(o=>e===o?null:o)}}:void 0}}},Ct=(...t)=>(e,n)=>{const o=ft(()=>t.map(i=>i(e,n)));return{update(i){ft(()=>o.forEach(r=>{var s;return(s=r==null?void 0:r.update)==null?void 0:s.call(r,i)}))},destroy(){ft(()=>o.reverse().forEach(i=>{var r;return(r=i==null?void 0:i.destroy)==null?void 0:r.call(i)}))}}},He={status:"pending"},Ie=t=>{const e=typeof t;return e==="object"&&t!==null||e==="function"?typeof t.then=="function":!1},qe=t=>{const e=mt(He);return Promise.resolve(t).then(n=>e.set({status:"fulfilled",value:n}),n=>e.set({status:"rejected",reason:n})),gt(e)},Lt=new WeakMap,ze=t=>{if(!Ie(t))return Pt({status:"fulfilled",value:t});let e=Lt.get(t);return e||(e=qe(t),Lt.set(t,e)),e},Xe=(t,e)=>Object.is(t,e)||t.status===e.status&&(t.status!=="fulfilled"||Et(t.value,e.value))&&(t.status!=="rejected"||Et(t.reason,e.reason)),Ye=t=>L(()=>ze(t())(),{equal:Xe}),Ue=(t,e,n)=>kt(t,{derive:(o,i)=>{o.status==="fulfilled"&&i(o.value)},equal:n},e),Ke=(t,e,n)=>Ue(Ye(t),e,n),rn=(t,e)=>{let n;const o=new Promise(s=>n=s);let i=()=>{t.removeEventListener(e,r),i=$t};const r=s=>{s.target===t&&(n(s),i())};return t.addEventListener(e,r),{promise:o,unsubscribe(){i()}}},sn=t=>{let e;return{promise:new Promise(n=>{e=setTimeout(()=>{e=void 0,n()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},Ge={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Je=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=ee(Ge,t),{directive:r,element$:s}=ut(),{directive:l,element$:c}=ut(),{directive:a,element$:f}=ut(),m=L(()=>{const d=f();if(!d)return null;const y=o();return typeof y=="function"?C=>({...y(C),element:d}):{...y,element:d}}),w=L(()=>{let d=n();const y=m();return y&&(d={...d,middleware:[...d.middleware??[],Be(y)]}),d}),u=kt([s,c,w,e],([d,y,C,j],R)=>{if(d&&y){const H=Ne(y,d,()=>{R(je(y,d,C))},j);return()=>{R(null),H()}}},null),p=Ke(u,null),g=L(()=>{var d;return(d=p())==null?void 0:d.placement}),v=L(()=>{var d;return(d=p())==null?void 0:d.middlewareData}),h=L(()=>{var d;return(d=p())==null?void 0:d.x}),b=L(()=>{var d;return(d=p())==null?void 0:d.y}),O=L(()=>{var d;return(d=p())==null?void 0:d.strategy}),E=L(()=>{var d,y;return(y=(d=v())==null?void 0:d.arrow)==null?void 0:y.x}),x=L(()=>{var d,y;return(y=(d=v())==null?void 0:d.arrow)==null?void 0:y.y}),A=L(()=>{const d=s();d&&(d.style.left=`${h()??0}px`,d.style.top=`${b()??0}px`)}),S=L(()=>{const d=f();if(d){const y=E(),C=x();d.style.left=y!=null?`${y}px`:"",d.style.top=C!=null?`${C}px`:""}});return{patch:i,...ne({x$:h,y$:b,strategy$:O,placement$:g,middlewareData$:v}),directives:{referenceDirective:l,floatingDirective:Ct(r,St(A)),arrowDirective:Ct(a,St(S))}}};function cn(t,e){const n=e.content;let o;const{directives:{floatingDirective:i,referenceDirective:r,arrowDirective:s},stores:{placement$:l}}=Je({props:{arrowOptions:{padding:6},computePositionOptions:{placement:"top",middleware:[xe(8),We()]}}}),c=r(t);t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",f);function a(){o||(o=new re({target:document.body,props:{content:n,placement$:l,directive:i,arrowDirective:s}}))}function f(){o==null||o.$destroy(),o=void 0}return{destroy(){var m;f(),(m=c==null?void 0:c.destroy)==null||m.call(c),t.removeEventListener("mouseenter",a),t.removeEventListener("mouseleave",f)}}}export{sn as a,nn as b,en as g,rn as p,on as r,cn as t};