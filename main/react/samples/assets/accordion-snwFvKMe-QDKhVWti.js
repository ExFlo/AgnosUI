import{r as h,j as m}from"./App-XNADZBio.js";import{w as G,c,a as J,s as K,m as Z,n as ee,b as p}from"./stores-bzJrTsnV.js";import{c as te}from"./baseTransitions-C1lKlPTV.js";import{c as ie}from"./collapse-BQC9zBIz-B75ZHVt-.js";import{t as b,a as u,b as d}from"./writables-DoU_XYTX-CBor1g6-.js";import{r as se,m as w,c as $,d as ae,g as oe,b as ne}from"./directive-DDb3YD5o-DXG-hRS2.js";import{u as L,S as M}from"./config-CXwd_Qkq.js";import{u as y}from"./directive-_62WM8Ul-DAmtt5js.js";function re(e,t,s){let n;return t.length==2?(s=s??t[0],n=t.find(r=>r!==s)):t.length>2&&(n=t[0]),n&&e.forEach(r=>{r.state$().itemId!==n&&r.state$().itemVisible&&r.patch({itemVisible:!1})}),e}function W(e,t){return e.find(s=>s.state$().itemId===t)}const i={closeOthers:!1,onShown:p,onHidden:p,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimated:!0,itemTransition:ie,itemHeadingTag:"",onItemShown:p,onItemHidden:p,onItemVisibleChange:p,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemBodyContainerClass:"",itemBodyClass:""},Q={itemId:i.itemId,itemDestroyOnHide:i.itemDestroyOnHide,itemDisabled:i.itemDisabled,itemVisible:i.itemVisible,itemAnimated:i.itemAnimated,itemTransition:i.itemTransition,onItemShown:i.onItemShown,onItemHidden:i.onItemHidden,onItemVisibleChange:i.onItemVisibleChange,slotItemStructure:i.slotItemStructure,slotItemBody:i.slotItemBody,slotItemHeader:i.slotItemHeader,itemClass:i.itemClass,itemHeaderClass:i.itemHeaderClass,itemButtonClass:i.itemButtonClass,itemBodyContainerClass:i.itemBodyContainerClass,itemBodyClass:i.itemBodyClass,itemHeadingTag:i.itemHeadingTag},q=Object.keys(Q),de={closeOthers:b,onShown:u,onHidden:u,itemId:d,itemDestroyOnHide:b,itemDisabled:b,itemVisible:b,itemAnimated:b,itemTransition:u,onItemShown:u,onItemHidden:u,onItemVisibleChange:u,itemClass:d,itemHeaderClass:d,itemButtonClass:d,itemBodyContainerClass:d,itemBodyClass:d,itemHeadingTag:d},ce={itemId:d,itemDestroyOnHide:b,itemDisabled:b,itemVisible:b,itemAnimated:b,itemTransition:u,onItemShown:u,onItemHidden:u,onItemVisibleChange:u,itemClass:d,itemHeaderClass:d,itemButtonClass:d,itemBodyContainerClass:d,itemBodyClass:d,itemHeadingTag:d};function me(e,t,s){const[{itemBodyClass$:n,itemButtonClass$:r,itemBodyContainerClass$:I,itemHeaderClass$:f,itemAnimated$:V,itemTransition$:T,itemDestroyOnHide$:x,onItemShown$:O,onItemHidden$:j,onItemVisibleChange$:N,itemVisible$:l,itemId$:E,itemDisabled$:v,...k},R]=G(Q,s,ce),D=J(!1),P=c(()=>oe()),g=c(()=>E()||P()),_=c(()=>x()===!1||!B.state$().hidden),B=te({props:{transition:T,visible:l,onVisibleChange:N,animated:V,animatedOnInit:!1,initDone:D,onHidden:()=>{t()(g()),j()()},onShown:()=>{e()(g()),O()()}}}),S=()=>{v()||l.update(H=>!H)},A=$(()=>({attributes:{id:c(()=>`${g()}-toggle`),"aria-expanded":c(()=>`${l()}`),"aria-disabled":c(()=>`${v()}`),"aria-controls":c(()=>`${g()}-body-container`),disabled:v()},classNames:{collapsed:c(()=>!l())},events:{click:S}}));return{...K({itemVisible$:l,itemId$:g,shouldBeInDOM$:_,itemDisabled$:v,itemBodyClass$:n,itemButtonClass$:r,itemBodyContainerClass$:I,itemHeaderClass$:f,...k}),patch:R,actions:{click:S},api:{initDone:()=>{D.set(!0)},collapse:()=>{l.set(!1)},expand:()=>{l.set(!0)},toggle:()=>{l.update(H=>!H)}},directives:{toggleDirective:A,buttonDirective:w(A,$(()=>({attributes:{type:"button",class:r()}}))),headerDirective:$(()=>({attributes:{class:f()}})),bodyDirective:$(()=>({attributes:{class:n()}})),bodyContainerDirective:w(ne(B.directives.directive),$(()=>({attributes:{id:c(()=>`${g()}-body-container`),class:I(),"aria-labelledby":c(()=>`${g()}-toggle`)}}))),accordionItemDirective:p}}}function le(e){const[{closeOthers$:t,onShown$:s,onHidden$:n,className$:r,itemId$:I,itemAnimated$:f,itemClass$:V,itemDisabled$:T,itemVisible$:x,itemTransition$:O,itemDestroyOnHide$:j,itemBodyClass$:N,itemButtonClass$:l,itemBodyContainerClass$:E,itemHeaderClass$:v,itemHeadingTag$:k,onItemVisibleChange$:R,onItemHidden$:D,onItemShown$:P,slotItemStructure$:g,slotItemBody$:_,slotItemHeader$:B,...S},A]=G(i,e,de),H={itemId:I,itemClass:V,itemAnimated:f,itemDisabled:T,itemVisible:x,itemTransition:O,itemDestroyOnHide:j,itemBodyClass:N,itemButtonClass:l,itemBodyContainerClass:E,itemHeaderClass:v,itemHeadingTag:k,onItemVisibleChange:R,onItemHidden:D,onItemShown:P,slotItemStructure:g,slotItemBody:_,slotItemHeader:B},C=se(),F=c(()=>{const a=[];return C().forEach(o=>{o.state$().itemVisible&&a.push(o.state$().itemId)}),a}),z=J(F()[0]),X=c(()=>{t()&&(re(C(),F(),z()),z.set(F()[0]))}),Y=c(()=>{X()});return{...K({itemsWidget$:C,className$:r,...S}),patch:A,actions:{},api:{expand:a=>{var o;(o=W(C(),a))==null||o.api.expand()},collapse:a=>{var o;(o=W(C(),a))==null||o.api.collapse()},toggle:a=>{var o;(o=W(C(),a))==null||o.api.toggle()},expandAll:()=>{C().forEach(a=>a.api.expand())},collapseAll:()=>{C().forEach(a=>a.api.collapse())},registerItem:a=>{const o=me(s,n,{config:Z(q,ee(q,a==null?void 0:a.config),H),props:a==null?void 0:a.props});return o.directives.accordionItemDirective=w(()=>({destroy:C.register(o)}),$(()=>({attributes:{class:o.stores.itemClass$,id:o.stores.itemId$}}))),o}},directives:{accordionDirective:w(ae(Y),$(()=>({attributes:{class:r()},classNames:{"au-accordion":!0}})))}}}const ue=le,Ie=e=>{const s=new RegExp("^h[1-6]$").test(e.headerTag)?e.headerTag:"h2";return m.jsx(s,{className:"accordion-header",...y(e.directive),children:e.children})},U=h.createContext({}),ge=e=>{const t=y(e.widget.directives.bodyContainerDirective),s=y(e.widget.directives.bodyDirective);return m.jsxs(m.Fragment,{children:[m.jsx(Ie,{directive:e.widget.directives.headerDirective,headerTag:e.state.itemHeadingTag,children:m.jsx("button",{className:"accordion-button",...y(e.widget.directives.buttonDirective),children:m.jsx(M,{slotContent:e.state.slotItemHeader,props:e})})}),e.state.shouldBeInDOM?m.jsx("div",{className:"accordion-collapse",...t,children:m.jsx("div",{className:"accordion-body",...s,children:m.jsx(M,{slotContent:e.state.slotItemBody,props:e})})}):null]})},Ce={slotItemStructure:ge},De=h.forwardRef(function(t,s){const{registerItem:n}=h.useContext(U),[r,I]=L(n,t,null,{...Ce}),f={state:r,widget:I};return h.useImperativeHandle(s,()=>I.api,[]),h.useEffect(()=>{I.api.initDone()},[]),m.jsx("div",{className:`accordion-item ${r.itemClass}`,...y(I.directives.accordionItemDirective),children:m.jsx(M,{slotContent:r.slotItemStructure,props:f})})}),Be=h.forwardRef(function(t,s){const n=L(ue,t,"accordion")[1];return h.useImperativeHandle(s,()=>n.api,[]),m.jsx(U.Provider,{value:n.api,children:m.jsx("div",{className:"accordion",...y(n.directives.accordionDirective),children:t.children})})});export{Be as A,De as a};