import{c as D,e as Mt}from"./func-B0ufEirG.js";import{e as rt,m as dt,d as mt}from"./directive-94uXunAa.js";import{d as Bt}from"./promise-8x5-Wnj7.js";import{w as Ht,s as Wt}from"./stores-ae3sjr2N.js";const At=["top","right","bottom","left"],pt=["start","end"],gt=At.reduce((t,e)=>t.concat(e,e+"-"+pt[0],e+"-"+pt[1]),[]),W=Math.min,E=Math.max,Q=Math.round,J=Math.floor,N=t=>({x:t,y:t}),Nt={left:"right",right:"left",bottom:"top",top:"bottom"},Vt={start:"end",end:"start"};function st(t,e,n){return E(t,W(e,n))}function z(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function P(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(I(t))?"y":"x"}function lt(t){return Rt(K(t))}function kt(t,e,n){n===void 0&&(n=!1);const o=P(t),i=lt(t),s=ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ht(r)),[r,ht(r)]}function _t(t){return t.replace(/start|end/g,e=>Vt[e])}function ht(t){return t.replace(/left|right|bottom|top/g,e=>Nt[e])}function zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ct(t){return typeof t!="number"?zt(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function wt(t,e,n){let{reference:o,floating:i}=t;const s=K(e),r=lt(e),l=ct(r),c=I(e),a=s==="y",m=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:m,y:o.y-i.height};break;case"bottom":f={x:m,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(P(e)){case"start":f[r]-=g*(n&&a?-1:1);break;case"end":f[r]+=g*(n&&a?-1:1);break}return f}const It=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=wt(a,o,c),g=o,f={},d=0;for(let w=0;w<l.length;w++){const{name:x,fn:h}=l[w],{x:y,y:v,data:C,reset:O}=await h({x:m,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});m=y??m,u=v??u,f={...f,[x]:{...f[x],...C}},O&&d<=50&&(d++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:m,y:u}=wt(a,g,c)),w=-1)}return{x:m,y:u,placement:g,strategy:i,middlewareData:f}};async function U(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=z(e,t),d=Ct(f),x=l[g?u==="floating"?"reference":"floating":u],h=Z(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:m,strategy:c})),y=u==="floating"?{...r.floating,x:o,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),C=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=Z(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:c}):y);return{top:(h.top-O.top+d.top)/C.y,bottom:(O.bottom-h.bottom+d.bottom)/C.y,left:(h.left-O.left+d.left)/C.x,right:(O.right-h.right+d.right)/C.x}}const Yt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:m=0}=z(t,e)||{};if(a==null)return{};const u=Ct(m),g={x:n,y:o},f=lt(i),d=ct(f),w=await r.getDimensions(a),x=f==="y",h=x?"top":"left",y=x?"bottom":"right",v=x?"clientHeight":"clientWidth",C=s.reference[d]+s.reference[f]-g[f]-s.floating[d],O=g[f]-s.reference[f],A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let S=A?A[v]:0;(!S||!await(r.isElement==null?void 0:r.isElement(A)))&&(S=l.floating[v]||s.floating[d]);const p=C/2-O/2,b=S/2-w[d]/2-1,R=W(u[h],b),L=W(u[y],b),M=R,Y=S-w[d]-L,k=S/2-w[d]/2+p,nt=st(M,k,Y),ot=!c.arrow&&P(i)!=null&&k!==nt&&s.reference[d]/2-(k<M?R:L)-w[d]/2<0,it=ot?k<M?k-M:k-Y:0;return{[f]:g[f]+it,data:{[f]:nt,centerOffset:k-nt-it,...ot&&{alignmentOffset:it}},reset:ot}}});function Xt(t,e,n){return(t?[...n.filter(i=>P(i)===t),...n.filter(i=>P(i)!==t)]:n.filter(i=>I(i)===i)).filter(i=>t?P(i)===t||(e?_t(i)!==i:!1):!0)}const jt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:a}=e,{crossAxis:m=!1,alignment:u,allowedPlacements:g=gt,autoAlignment:f=!0,...d}=z(t,e),w=u!==void 0||g===gt?Xt(u||null,f,g):g,x=await U(e,d),h=((n=r.autoPlacement)==null?void 0:n.index)||0,y=w[h];if(y==null)return{};const v=kt(y,s,await(c.isRTL==null?void 0:c.isRTL(a.floating)));if(l!==y)return{reset:{placement:w[0]}};const C=[x[I(y)],x[v[0]],x[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:C}],A=w[h+1];if(A)return{data:{index:h+1,overflows:O},reset:{placement:A}};const S=O.map(R=>{const L=P(R.placement);return[R.placement,L&&m?R.overflows.slice(0,2).reduce((M,Y)=>M+Y,0):R.overflows[0],R.overflows]}).sort((R,L)=>R[1]-L[1]),b=((i=S.filter(R=>R[2].slice(0,P(R[0])?2:3).every(L=>L<=0))[0])==null?void 0:i[0])||S[0][0];return b!==l?{data:{index:h+1,overflows:O},reset:{placement:b}}:{}}}};function yt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function xt(t){return At.some(e=>t[e]>=0)}const Ut=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=z(t,e);switch(o){case"referenceHidden":{const s=await U(e,{...i,elementContext:"reference"}),r=yt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:xt(r)}}}case"escaped":{const s=await U(e,{...i,altBoundary:!0}),r=yt(s,n.floating);return{data:{escapedOffsets:r,escaped:xt(r)}}}default:return{}}}}};async function qt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=I(n),l=P(n),c=K(n)==="y",a=["left","top"].includes(r)?-1:1,m=s&&c?-1:1,u=z(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof d=="number"&&(f=l==="end"?d*-1:d),c?{x:f*m,y:g*a}:{x:g*a,y:f*m}}const Ae=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await qt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},Kt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:h,y}=x;return{x:h,y}}},...c}=z(t,e),a={x:n,y:o},m=await U(e,c),u=K(I(i)),g=Rt(u);let f=a[g],d=a[u];if(s){const x=g==="y"?"top":"left",h=g==="y"?"bottom":"right",y=f+m[x],v=f-m[h];f=st(y,f,v)}if(r){const x=u==="y"?"top":"left",h=u==="y"?"bottom":"right",y=d+m[x],v=d-m[h];d=st(y,d,v)}const w=l.fn({...e,[g]:f,[u]:d});return{...w,data:{x:w.x-n,y:w.y-o}}}}},Gt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=z(t,e),c=await U(e,l),a=I(n),m=P(n),u=K(n)==="y",{width:g,height:f}=o.floating;let d,w;a==="top"||a==="bottom"?(d=a,w=m===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(w=a,d=m==="end"?"top":"bottom");const x=f-c[d],h=g-c[w],y=!e.middlewareData.shift;let v=x,C=h;if(u){const A=g-c.left-c.right;C=m||y?W(h,A):A}else{const A=f-c.top-c.bottom;v=m||y?W(x,A):A}if(y&&!m){const A=E(c.left,0),S=E(c.right,0),p=E(c.top,0),b=E(c.bottom,0);u?C=g-2*(A!==0||S!==0?A+S:E(c.left,c.right)):v=f-2*(p!==0||b!==0?p+b:E(c.top,c.bottom))}await r({...e,availableWidth:C,availableHeight:v});const O=await i.getDimensions(s.floating);return g!==O.width||f!==O.height?{reset:{rects:!0}}:{}}}};function V(t){return St(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(St(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function St(t){return t instanceof Node||t instanceof T(t).Node}function B(t){return t instanceof Element||t instanceof T(t).Element}function F(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function G(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Jt(t){return["table","td","th"].includes(V(t))}function at(t){const e=ft(),n=$(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Qt(t){let e=j(t);for(;F(e)&&!tt(e);){if(at(e))return e;e=j(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(V(t))}function $(t){return T(t).getComputedStyle(t)}function et(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||H(t);return vt(e)?e.host:e}function Et(t){const e=j(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&G(e)?e:Et(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Et(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=T(i);return s?e.concat(r,r.visualViewport||[],G(i)?i:[],r.frameElement&&n?q(r.frameElement):[]):e.concat(i,q(i,[],n))}function Tt(t){const e=$(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=Q(n)!==s||Q(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function ut(t){return B(t)?t:t.contextElement}function X(t){const e=ut(t);if(!F(e))return N(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Tt(e);let r=(s?Q(n.width):n.width)/o,l=(s?Q(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Zt=N(0);function $t(t){const e=T(t);return!ft()||!e.visualViewport?Zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function te(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function _(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ut(t);let r=N(1);e&&(o?B(o)&&(r=X(o)):r=X(t));const l=te(s,n,o)?$t(s):N(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,m=i.width/r.x,u=i.height/r.y;if(s){const g=T(s),f=o&&B(o)?T(o):o;let d=g.frameElement;for(;d&&o&&f!==g;){const w=X(d),x=d.getBoundingClientRect(),h=$(d),y=x.left+(d.clientLeft+parseFloat(h.paddingLeft))*w.x,v=x.top+(d.clientTop+parseFloat(h.paddingTop))*w.y;c*=w.x,a*=w.y,m*=w.x,u*=w.y,c+=y,a+=v,d=T(d).frameElement}}return Z({width:m,height:u,x:c,y:a})}const ee=[":popover-open",":modal"];function Dt(t){return ee.some(e=>{try{return t.matches(e)}catch{return!1}})}function ne(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=H(o),l=e?Dt(e.floating):!1;if(o===r||l&&s)return n;let c={scrollLeft:0,scrollTop:0},a=N(1);const m=N(0),u=F(o);if((u||!u&&!s)&&((V(o)!=="body"||G(r))&&(c=et(o)),F(o))){const g=_(o);a=X(o),m.x=g.x+o.clientLeft,m.y=g.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+m.x,y:n.y*a.y-c.scrollTop*a.y+m.y}}function oe(t){return Array.from(t.getClientRects())}function Lt(t){return _(H(t)).left+et(t).scrollLeft}function ie(t){const e=H(t),n=et(t),o=t.ownerDocument.body,i=E(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=E(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Lt(t);const l=-n.scrollTop;return $(o).direction==="rtl"&&(r+=E(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function re(t,e){const n=T(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=ft();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function se(t,e){const n=_(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=F(t)?X(t):N(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function bt(t,e,n){let o;if(e==="viewport")o=re(t,n);else if(e==="document")o=ie(H(t));else if(B(e))o=se(e,n);else{const i=$t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Z(o)}function Pt(t,e){const n=j(t);return n===e||!B(n)||tt(n)?!1:$(n).position==="fixed"||Pt(n,e)}function ce(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(l=>B(l)&&V(l)!=="body"),i=null;const s=$(t).position==="fixed";let r=s?j(t):t;for(;B(r)&&!tt(r);){const l=$(r),c=at(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(r)&&!c&&Pt(t,r))?o=o.filter(m=>m!==r):i=l,r=j(r)}return e.set(t,o),o}function le(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ce(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,m)=>{const u=bt(e,m,i);return a.top=E(u.top,a.top),a.right=W(u.right,a.right),a.bottom=W(u.bottom,a.bottom),a.left=E(u.left,a.left),a},bt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ae(t){const{width:e,height:n}=Tt(t);return{width:e,height:n}}function fe(t,e,n){const o=F(e),i=H(e),s=n==="fixed",r=_(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=N(0);if(o||!o&&!s)if((V(e)!=="body"||G(i))&&(l=et(e)),o){const u=_(e,!0,s,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Lt(i));const a=r.left+l.scrollLeft-c.x,m=r.top+l.scrollTop-c.y;return{x:a,y:m,width:r.width,height:r.height}}function Ot(t,e){return!F(t)||$(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ft(t,e){const n=T(t);if(!F(t)||Dt(t))return n;let o=Ot(t,e);for(;o&&Jt(o)&&$(o).position==="static";)o=Ot(o,e);return o&&(V(o)==="html"||V(o)==="body"&&$(o).position==="static"&&!at(o))?n:o||Qt(t)||n}const ue=async function(t){const e=this.getOffsetParent||Ft,n=this.getDimensions;return{reference:fe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function de(t){return $(t).direction==="rtl"}const me={convertOffsetParentRelativeRectToViewportRelativeRect:ne,getDocumentElement:H,getClippingRect:le,getOffsetParent:Ft,getElementRects:ue,getClientRects:oe,getDimensions:ae,getScale:X,isElement:B,isRTL:de};function pe(t,e){let n=null,o;const i=H(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:m,width:u,height:g}=t.getBoundingClientRect();if(l||e(),!u||!g)return;const f=J(m),d=J(i.clientWidth-(a+u)),w=J(i.clientHeight-(m+g)),x=J(a),y={rootMargin:-f+"px "+-d+"px "+-w+"px "+-x+"px",threshold:E(0,W(1,c))||1};let v=!0;function C(O){const A=O[0].intersectionRatio;if(A!==c){if(!v)return r();A?r(!1,A):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(C,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,y)}n.observe(t)}return r(!0),s}function ge(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ut(t),m=i||s?[...a?q(a):[],...q(e)]:[];m.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const u=a&&l?pe(a,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(h=>{let[y]=h;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let d,w=c?_(t):null;c&&x();function x(){const h=_(t);w&&(h.x!==w.x||h.y!==w.y||h.width!==w.width||h.height!==w.height)&&n(),w=h,d=requestAnimationFrame(x)}return n(),()=>{var h;m.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(h=f)==null||h.disconnect(),f=null,c&&cancelAnimationFrame(d)}}const Re=jt,Ce=Kt,Se=Gt,Ee=Ut,he=Yt,we=(t,e,n)=>{const o=new Map,i={platform:me,...n},s={...i.platform,_c:o};return It(t,e,{...i,platform:s})},ye={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Te=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Ht(ye,t),{directive:s,element$:r}=rt(),{directive:l,element$:c}=rt(),{directive:a,element$:m}=rt(),u=D(()=>{const p=m();if(!p)return null;const b=o();return typeof b=="function"?R=>({...b(R),element:p}):{...b,element:p}}),g=D(()=>{let p=n();const b=u();return b&&(p={...p,middleware:[...p.middleware??[],he(b)]}),p}),f=Mt([r,c,g,e],([p,b,R,L],M)=>{if(p&&b){const Y=ge(b,p,()=>{M(we(b,p,R))},L);return()=>{M(null),Y()}}},null),d=Bt(f,null),w=D(()=>{var p;return(p=d())==null?void 0:p.placement}),x=D(()=>{var p;return(p=d())==null?void 0:p.middlewareData}),h=D(()=>{var p;return(p=d())==null?void 0:p.x}),y=D(()=>{var p;return(p=d())==null?void 0:p.y}),v=D(()=>{var p;return(p=d())==null?void 0:p.strategy}),C=D(()=>{var p,b;return(b=(p=x())==null?void 0:p.arrow)==null?void 0:b.x}),O=D(()=>{var p,b;return(b=(p=x())==null?void 0:p.arrow)==null?void 0:b.y}),A=D(()=>{const p=r();p&&(p.style.left=`${h()??0}px`,p.style.top=`${y()??0}px`)}),S=D(()=>{const p=m();if(p){const b=C(),R=O();p.style.left=b!=null?`${b}px`:"",p.style.top=R!=null?`${R}px`:""}});return{patch:i,...Wt({x$:h,y$:y,strategy$:v,placement$:w,middlewareData$:x}),directives:{referenceDirective:l,floatingDirective:dt(s,mt(A)),arrowDirective:dt(a,mt(S))}}};export{Re as a,Se as b,Te as c,Ee as h,Ae as o,Ce as s};
