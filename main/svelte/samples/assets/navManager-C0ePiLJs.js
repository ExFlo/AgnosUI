import{H as S,G as N}from"./AppCommon-ClvmpOkk.js";import{r as k,p as D,a as x}from"./directive-CGjTRxRh-BvEKR48r.js";const C=t=>{let r=t;for(;r;){const s=getComputedStyle(r);if(r.inert||r.hidden||s.display==="none"||s.visibility==="hidden")return!0;r=r.parentElement}return!1},h=t=>{var r;if(t.disabled)return!1;const s=(r=t.parentElement)==null?void 0:r.closest("fieldset");return s?h(s):!0},O=t=>t.isContentEditable||!!t.hasAttribute("tabindex"),$={INPUT:t=>t.type!=="hidden"&&h(t),SELECT:h,TEXTAREA:h,BUTTON:h,A:t=>!!t.href||O(t)},v=t=>document.contains(t)&&!C(t)&&($[t.tagName]??O)(t),P=(t,r)=>{if(t===r)return 0;const s=t.compareDocumentPosition(r);if(s&Node.DOCUMENT_POSITION_FOLLOWING)return-1;if(s&Node.DOCUMENT_POSITION_PRECEDING)return 1;throw new Error("failed to compare elements")},b=t=>getComputedStyle(t).direction,K=new Set(["text","search","url","tel","password"]),L=t=>t instanceof HTMLInputElement&&K.has(t.type),M=t=>{let r=t.key;return t.shiftKey&&(r=`Shift+${r}`),t.altKey&&(r=`Alt+${r}`),t.ctrlKey&&(r=`Ctrl+${r}`),t.metaKey&&(r=`Meta+${r}`),r},_=t=>{const{target:r,key:s}=t;if(L(r)&&(s==="ArrowLeft"||s==="ArrowRight"||s==="Home"||s==="End")){let i;if(s==="ArrowLeft"||s==="ArrowRight"){const a=b(r);i=s===(a==="ltr"?"ArrowLeft":"ArrowRight")}else i=s==="Home";const f=r.selectionStart===r.selectionEnd?r.selectionStart:null;if(i&&f!==0||!i&&f!==r.value.length)return!0}return!1},H=t=>[t],X=()=>{const t=k(),r=S({}),s=(e=!0)=>{r.set({}),e&&(f(),a())},i=N(()=>{r();const e=[];for(const o of t())e.push(...o());return e}),f=N(()=>D(i()),{equal:Object.is}),a=N(()=>[...i()].sort(P)),d=()=>{const e=f();return e?b(e):"ltr"},g=(e,o)=>(e&&(o==null||o.preventDefault()),e),p=(e,o=0)=>{const c=a();for(;e>=0&&e<c.length;){const n=c[e];if(v(n)){if(n.focus(),o!=0&&L(n)){const u=d()!==b(n),l=o>0!==u?0:n.value.length;n.setSelectionRange(l,l,l===0?"forward":"backward")}return n}if(o===0)break;e+=o}return null},E=e=>({event:o,referenceElement:c=(o==null?void 0:o.target)??document.activeElement}={})=>{const n=c?a().indexOf(c):-1;return n>-1?g(p(n+e,e),o):null},R=x((e,o)=>{const c=u=>{var l;if(_(u))return;const F=M(u),A=(l=o.keys)==null?void 0:l[F];A&&(s(!1),A({event:u,directiveElement:e,navManager:T,context:o.context}))};e.addEventListener("keydown",c);const n=t.register(()=>((o==null?void 0:o.selector)??H)(e));return{update(u){o=u},destroy(){e.removeEventListener("keydown",c),n()}}}),y=E(-1),m=E(1),w=({event:e}={})=>g(p(0,1),e),I=({event:e}={})=>g(p(a().length-1,-1),e),T={elementsInDomOrder$:a,directive:R,focusIndex:p,focusPrevious:y,focusNext:m,focusFirst:w,focusFirstLeft:(...e)=>(d()==="rtl"?I:w)(...e),focusFirstRight:(...e)=>(d()==="rtl"?w:I)(...e),focusLast:I,focusLeft:(...e)=>(d()==="rtl"?m:y)(...e),focusRight:(...e)=>(d()==="rtl"?y:m)(...e),refreshElements:s};return T};export{X as c};
