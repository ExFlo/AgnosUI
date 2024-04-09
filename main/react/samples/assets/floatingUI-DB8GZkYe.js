import{w as _t,c as D,k as Bt,s as Mt}from"./stores-B4F_j8QF.js";import{o as rt,m as dt,d as mt}from"./directive-CGjTRxRh-C_4hKweU.js";import{d as Wt}from"./promise-CY2U8bTP-B6m5TA-Q.js";const At=["top","right","bottom","left"],pt=["start","end"],gt=At.reduce((t,e)=>t.concat(e,e+"-"+pt[0],e+"-"+pt[1]),[]),W=Math.min,E=Math.max,Q=Math.round,J=Math.floor,H=t=>({x:t,y:t}),Ht={left:"right",right:"left",bottom:"top",top:"bottom"},Nt={start:"end",end:"start"};function st(t,e,n){return E(t,W(e,n))}function z(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function P(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(I(t))?"y":"x"}function lt(t){return Rt(K(t))}function Vt(t,e,n){n===void 0&&(n=!1);const o=P(t),i=lt(t),s=ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ht(r)),[r,ht(r)]}function kt(t){return t.replace(/start|end/g,e=>Nt[e])}function ht(t){return t.replace(/left|right|bottom|top/g,e=>Ht[e])}function zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ct(t){return typeof t!="number"?zt(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function wt(t,e,n){let{reference:o,floating:i}=t;const s=K(e),r=lt(e),l=ct(r),c=I(e),a=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(P(e)){case"start":f[r]-=g*(n&&a?-1:1);break;case"end":f[r]+=g*(n&&a?-1:1);break}return f}const It=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=wt(a,o,c),g=o,f={},m=0;for(let w=0;w<l.length;w++){const{name:y,fn:h}=l[w],{x,y:v,data:A,reset:O}=await h({x:d,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});d=x??d,u=v??u,f={...f,[y]:{...f[y],...A}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:d,y:u}=wt(a,g,c)),w=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:f}};async function U(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=z(e,t),m=Ct(f),y=l[g?u==="floating"?"reference":"floating":u],h=Z(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:d,strategy:c})),x=u==="floating"?{...r.floating,x:o,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),A=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=Z(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:v,strategy:c}):x);return{top:(h.top-O.top+m.top)/A.y,bottom:(O.bottom-h.bottom+m.bottom)/A.y,left:(h.left-O.left+m.left)/A.x,right:(O.right-h.right+m.right)/A.x}}const Yt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:d=0}=z(t,e)||{};if(a==null)return{};const u=Ct(d),g={x:n,y:o},f=lt(i),m=ct(f),w=await r.getDimensions(a),y=f==="y",h=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",A=s.reference[m]+s.reference[f]-g[f]-s.floating[m],O=g[f]-s.reference[f],R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let S=R?R[v]:0;(!S||!await(r.isElement==null?void 0:r.isElement(R)))&&(S=l.floating[v]||s.floating[m]);const p=A/2-O/2,b=S/2-w[m]/2-1,C=W(u[h],b),L=W(u[x],b),_=C,Y=S-w[m]-L,V=S/2-w[m]/2+p,nt=st(_,V,Y),ot=!c.arrow&&P(i)!=null&&V!==nt&&s.reference[m]/2-(V<_?C:L)-w[m]/2<0,it=ot?V<_?V-_:V-Y:0;return{[f]:g[f]+it,data:{[f]:nt,centerOffset:V-nt-it,...ot&&{alignmentOffset:it}},reset:ot}}});function Xt(t,e,n){return(t?[...n.filter(i=>P(i)===t),...n.filter(i=>P(i)!==t)]:n.filter(i=>I(i)===i)).filter(i=>t?P(i)===t||(e?kt(i)!==i:!1):!0)}const jt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:g=gt,autoAlignment:f=!0,...m}=z(t,e),w=u!==void 0||g===gt?Xt(u||null,f,g):g,y=await U(e,m),h=((n=r.autoPlacement)==null?void 0:n.index)||0,x=w[h];if(x==null)return{};const v=Vt(x,s,await(c.isRTL==null?void 0:c.isRTL(a.floating)));if(l!==x)return{reset:{placement:w[0]}};const A=[y[I(x)],y[v[0]],y[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:A}],R=w[h+1];if(R)return{data:{index:h+1,overflows:O},reset:{placement:R}};const S=O.map(C=>{const L=P(C.placement);return[C.placement,L&&d?C.overflows.slice(0,2).reduce((_,Y)=>_+Y,0):C.overflows[0],C.overflows]}).sort((C,L)=>C[1]-L[1]),b=((i=S.filter(C=>C[2].slice(0,P(C[0])?2:3).every(L=>L<=0))[0])==null?void 0:i[0])||S[0][0];return b!==l?{data:{index:h+1,overflows:O},reset:{placement:b}}:{}}}};function yt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function xt(t){return At.some(e=>t[e]>=0)}const Ut=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=z(t,e);switch(o){case"referenceHidden":{const s=await U(e,{...i,elementContext:"reference"}),r=yt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:xt(r)}}}case"escaped":{const s=await U(e,{...i,altBoundary:!0}),r=yt(s,n.floating);return{data:{escapedOffsets:r,escaped:xt(r)}}}default:return{}}}}};async function qt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=I(n),l=P(n),c=K(n)==="y",a=["left","top"].includes(r)?-1:1,d=s&&c?-1:1,u=z(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),c?{x:f*d,y:g*a}:{x:g*a,y:f*d}}const Oe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await qt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},Kt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:h,y:x}=y;return{x:h,y:x}}},...c}=z(t,e),a={x:n,y:o},d=await U(e,c),u=K(I(i)),g=Rt(u);let f=a[g],m=a[u];if(s){const y=g==="y"?"top":"left",h=g==="y"?"bottom":"right",x=f+d[y],v=f-d[h];f=st(x,f,v)}if(r){const y=u==="y"?"top":"left",h=u==="y"?"bottom":"right",x=m+d[y],v=m-d[h];m=st(x,m,v)}const w=l.fn({...e,[g]:f,[u]:m});return{...w,data:{x:w.x-n,y:w.y-o}}}}},Gt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=z(t,e),c=await U(e,l),a=I(n),d=P(n),u=K(n)==="y",{width:g,height:f}=o.floating;let m,w;a==="top"||a==="bottom"?(m=a,w=d===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(w=a,m=d==="end"?"top":"bottom");const y=f-c[m],h=g-c[w],x=!e.middlewareData.shift;let v=y,A=h;if(u){const R=g-c.left-c.right;A=d||x?W(h,R):R}else{const R=f-c.top-c.bottom;v=d||x?W(y,R):R}if(x&&!d){const R=E(c.left,0),S=E(c.right,0),p=E(c.top,0),b=E(c.bottom,0);u?A=g-2*(R!==0||S!==0?R+S:E(c.left,c.right)):v=f-2*(p!==0||b!==0?p+b:E(c.top,c.bottom))}await r({...e,availableWidth:A,availableHeight:v});const O=await i.getDimensions(s.floating);return g!==O.width||f!==O.height?{reset:{rects:!0}}:{}}}};function N(t){return St(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(St(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function St(t){return t instanceof Node||t instanceof T(t).Node}function B(t){return t instanceof Element||t instanceof T(t).Element}function F(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function G(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Jt(t){return["table","td","th"].includes(N(t))}function at(t){const e=ft(),n=$(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Qt(t){let e=j(t);for(;F(e)&&!tt(e);){if(at(e))return e;e=j(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(N(t))}function $(t){return T(t).getComputedStyle(t)}function et(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if(N(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||M(t);return vt(e)?e.host:e}function Et(t){const e=j(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&G(e)?e:Et(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Et(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=T(i);return s?e.concat(r,r.visualViewport||[],G(i)?i:[],r.frameElement&&n?q(r.frameElement):[]):e.concat(i,q(i,[],n))}function Tt(t){const e=$(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=Q(n)!==s||Q(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function ut(t){return B(t)?t:t.contextElement}function X(t){const e=ut(t);if(!F(e))return H(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Tt(e);let r=(s?Q(n.width):n.width)/o,l=(s?Q(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Zt=H(0);function $t(t){const e=T(t);return!ft()||!e.visualViewport?Zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function te(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function k(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ut(t);let r=H(1);e&&(o?B(o)&&(r=X(o)):r=X(t));const l=te(s,n,o)?$t(s):H(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const g=T(s),f=o&&B(o)?T(o):o;let m=g,w=m.frameElement;for(;w&&o&&f!==m;){const y=X(w),h=w.getBoundingClientRect(),x=$(w),v=h.left+(w.clientLeft+parseFloat(x.paddingLeft))*y.x,A=h.top+(w.clientTop+parseFloat(x.paddingTop))*y.y;c*=y.x,a*=y.y,d*=y.x,u*=y.y,c+=v,a+=A,m=T(w),w=m.frameElement}}return Z({width:d,height:u,x:c,y:a})}const ee=[":popover-open",":modal"];function Dt(t){return ee.some(e=>{try{return t.matches(e)}catch{return!1}})}function ne(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=M(o),l=e?Dt(e.floating):!1;if(o===r||l&&s)return n;let c={scrollLeft:0,scrollTop:0},a=H(1);const d=H(0),u=F(o);if((u||!u&&!s)&&((N(o)!=="body"||G(r))&&(c=et(o)),F(o))){const g=k(o);a=X(o),d.x=g.x+o.clientLeft,d.y=g.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+d.x,y:n.y*a.y-c.scrollTop*a.y+d.y}}function oe(t){return Array.from(t.getClientRects())}function Lt(t){return k(M(t)).left+et(t).scrollLeft}function ie(t){const e=M(t),n=et(t),o=t.ownerDocument.body,i=E(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=E(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Lt(t);const l=-n.scrollTop;return $(o).direction==="rtl"&&(r+=E(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function re(t,e){const n=T(t),o=M(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=ft();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function se(t,e){const n=k(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=F(t)?X(t):H(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function bt(t,e,n){let o;if(e==="viewport")o=re(t,n);else if(e==="document")o=ie(M(t));else if(B(e))o=se(e,n);else{const i=$t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Z(o)}function Pt(t,e){const n=j(t);return n===e||!B(n)||tt(n)?!1:$(n).position==="fixed"||Pt(n,e)}function ce(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(l=>B(l)&&N(l)!=="body"),i=null;const s=$(t).position==="fixed";let r=s?j(t):t;for(;B(r)&&!tt(r);){const l=$(r),c=at(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(r)&&!c&&Pt(t,r))?o=o.filter(d=>d!==r):i=l,r=j(r)}return e.set(t,o),o}function le(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ce(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,d)=>{const u=bt(e,d,i);return a.top=E(u.top,a.top),a.right=W(u.right,a.right),a.bottom=W(u.bottom,a.bottom),a.left=E(u.left,a.left),a},bt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ae(t){const{width:e,height:n}=Tt(t);return{width:e,height:n}}function fe(t,e,n){const o=F(e),i=M(e),s=n==="fixed",r=k(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=H(0);if(o||!o&&!s)if((N(e)!=="body"||G(i))&&(l=et(e)),o){const u=k(e,!0,s,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Lt(i));const a=r.left+l.scrollLeft-c.x,d=r.top+l.scrollTop-c.y;return{x:a,y:d,width:r.width,height:r.height}}function Ot(t,e){return!F(t)||$(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ft(t,e){const n=T(t);if(!F(t)||Dt(t))return n;let o=Ot(t,e);for(;o&&Jt(o)&&$(o).position==="static";)o=Ot(o,e);return o&&(N(o)==="html"||N(o)==="body"&&$(o).position==="static"&&!at(o))?n:o||Qt(t)||n}const ue=async function(t){const e=this.getOffsetParent||Ft,n=this.getDimensions;return{reference:fe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function de(t){return $(t).direction==="rtl"}const me={convertOffsetParentRelativeRectToViewportRelativeRect:ne,getDocumentElement:M,getClippingRect:le,getOffsetParent:Ft,getElementRects:ue,getClientRects:oe,getDimensions:ae,getScale:X,isElement:B,isRTL:de};function pe(t,e){let n=null,o;const i=M(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:d,width:u,height:g}=t.getBoundingClientRect();if(l||e(),!u||!g)return;const f=J(d),m=J(i.clientWidth-(a+u)),w=J(i.clientHeight-(d+g)),y=J(a),x={rootMargin:-f+"px "+-m+"px "+-w+"px "+-y+"px",threshold:E(0,W(1,c))||1};let v=!0;function A(O){const R=O[0].intersectionRatio;if(R!==c){if(!v)return r();R?r(!1,R):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(A,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(A,x)}n.observe(t)}return r(!0),s}function ge(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ut(t),d=i||s?[...a?q(a):[],...q(e)]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const u=a&&l?pe(a,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(h=>{let[x]=h;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let m,w=c?k(t):null;c&&y();function y(){const h=k(t);w&&(h.x!==w.x||h.y!==w.y||h.width!==w.width||h.height!==w.height)&&n(),w=h,m=requestAnimationFrame(y)}return n(),()=>{var h;d.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),u==null||u(),(h=f)==null||h.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const Ae=jt,Re=Kt,Ce=Gt,Se=Ut,he=Yt,we=(t,e,n)=>{const o=new Map,i={platform:me,...n},s={...i.platform,_c:o};return It(t,e,{...i,platform:s})},ye={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Ee=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=_t(ye,t),{directive:s,element$:r}=rt(),{directive:l,element$:c}=rt(),{directive:a,element$:d}=rt(),u=D(()=>{const p=d();if(!p)return null;const b=o();return typeof b=="function"?C=>({...b(C),element:p}):{...b,element:p}}),g=D(()=>{let p=n();const b=u();return b&&(p={...p,middleware:[...p.middleware??[],he(b)]}),p}),f=Bt([r,c,g,e],([p,b,C,L],_)=>{if(p&&b){const Y=ge(b,p,()=>{_(we(b,p,C))},L);return()=>{_(null),Y()}}},null),m=Wt(f,null),w=D(()=>{var p;return(p=m())==null?void 0:p.placement}),y=D(()=>{var p;return(p=m())==null?void 0:p.middlewareData}),h=D(()=>{var p;return(p=m())==null?void 0:p.x}),x=D(()=>{var p;return(p=m())==null?void 0:p.y}),v=D(()=>{var p;return(p=m())==null?void 0:p.strategy}),A=D(()=>{var p,b;return(b=(p=y())==null?void 0:p.arrow)==null?void 0:b.x}),O=D(()=>{var p,b;return(b=(p=y())==null?void 0:p.arrow)==null?void 0:b.y}),R=D(()=>{const p=r();p&&(p.style.left=`${h()??0}px`,p.style.top=`${x()??0}px`)}),S=D(()=>{const p=d();if(p){const b=A(),C=O();p.style.left=b!=null?`${b}px`:"",p.style.top=C!=null?`${C}px`:""}});return{patch:i,...Mt({x$:h,y$:x,strategy$:v,placement$:w,middlewareData$:y}),directives:{referenceDirective:l,floatingDirective:dt(s,mt(R)),arrowDirective:dt(a,mt(S))}}};export{Ae as a,Ce as b,Ee as c,Se as h,Oe as o,Re as s};
