import{j as o}from"./index-4Io7j_B-.js";import{c as h,w as X,d as R,b as Y,n as M}from"./func-DcknktoK.js";import{c as Z,o as ee,a as te,b as se}from"./floatingUI-QMQRPHI6.js";import{c as ne}from"./focustrack-zPKRLVU1.js";import{c as oe}from"./navManager-8iCKIfyp.js";import{a as ae,u as ie,g as A}from"./directive-LllSSkp9.js";import{w as re,c as le,b as ce,s as de,t as ue}from"./stores-I0eZAdss.js";import{u as pe}from"./config-byFtmPHe.js";import{S as O}from"./slot-m25UiUtH.js";const fe=s=>""+s,ge={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:s=>s.querySelectorAll(".au-select-badge,input"),itemIdFn:fe,onOpenChange:M,onFilterTextChange:M,onSelectedChange:M,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:"",slotBadgeLabel:({itemContext:s})=>s.item,slotItem:({itemContext:s})=>s.item};function me(s){const[{open$:i,filterText$:a,items$:u,itemIdFn$:l,onOpenChange$:b,onFilterTextChange$:g,onSelectedChange$:F,allowedPlacements$:C,navSelector$:j,...I},y]=re(ge,s),{selected$:v}=I,x=le(a,g),{hasFocus$:S,directive:N}=ne(),d=ce(b,[i,S],([e,t])=>e&&t),w=h(()=>{const e=new Map,t=l();for(const n of v()){const c=t(n);e.set(c,{item:n,id:t(n),selected:!0})}return e}),k=h(()=>[...w().values()]),p=function(){const e=X(0);return R(e,t=>{const{length:n}=$();t!=null&&(n?t<0?t=n-1:t>=n&&(t=0):t=void 0),e.set(t)})}(),B=h(()=>{const e=new Map;if(d()){const t=w(),n=l();for(const c of u()){const f=n(c);e.set(f,{item:c,id:f,selected:t.has(f)})}}return e}),$=h(()=>d()?[...B().values()]:[]),L=h(()=>{const e=$(),t=p();return e.length&&t!=null?e[t]:void 0}),{directives:{floatingDirective:W,referenceDirective:H},stores:{placement$:z}}=Z({props:{computePositionOptions:R(h(()=>({middleware:[ee(5),te({allowedPlacements:C()}),se()]})))}}),{directive:U,refreshElements:_,focusFirst:q,focusLast:G,focusLeft:P,focusRight:T}=oe(),J=h(()=>({keys:{Home:q,End:G,ArrowLeft:P,ArrowRight:T},selector:j()})),E=(e,t)=>{const n=e.target;_(),r.api.unselect(t),n instanceof HTMLElement&&setTimeout(()=>{P({event:e,referenceElement:n})||T({event:e,referenceElement:n})}),e.preventDefault()},r={...de({visibleItems$:$,highlighted$:L,open$:d,selectedContexts$:k,filterText$:x,placement$:z,...I}),patch:y,api:{clear(){v.set([])},select(e){r.api.toggleItem(e,!0)},unselect(e){r.api.toggleItem(e,!1)},toggleItem(e,t){const n=l(),c=n(e),D=w().has(c);t==null&&(t=!D),!(t&&!B().has(c)||!t&&!D)&&v.update(m=>{var K;if(m=[...m],t&&!D)m.push(e);else if(!t&&D){const Q=m.findIndex(V=>n(V)===c);m.splice(Q,1)}return(K=F())==null||K(m),m})},clearText(){},highlight(e){const t=$().findIndex(n=>n.item===e);p.set(t===-1?void 0:t)},highlightFirst(){p.set(0)},highlightPrevious(){p.update(e=>e!=null?e-1:-1)},highlightNext(){p.update(e=>e!=null?e+1:1/0)},highlightLast(){p.set(-1)},open:()=>r.api.toggle(!0),close:()=>r.api.toggle(!1),toggle(e){d.update(t=>e??!t)}},directives:{hasFocusDirective:N,floatingDirective:W,referenceDirective:H,inputContainerDirective:ae(U,J)},actions:{onInput({target:e}){const t=e.value;Y(()=>{d.set(t!=null&&t!==""),x.set(t)})},onRemoveBadgeClick(e,t){E(e,t)},onInputKeydown(e){const{ctrlKey:t,key:n}=e;let c=!0;switch(n){case"ArrowDown":{d()?t?r.api.highlightLast():r.api.highlightNext():(r.api.open(),r.api.highlightFirst());break}case"ArrowUp":t?r.api.highlightFirst():r.api.highlightPrevious();break;case"Enter":{const f=L();f&&r.api.toggleItem(f.item);break}case"Escape":d.set(!1);break;default:c=!1}c&&e.preventDefault()},onBadgeKeydown(e,t){let n=!1;switch(e.key){case"Backspace":case"Delete":{E(e,t),n=!0;break}}n&&e.preventDefault()}}};return r}const he=me;function be(s){s.preventDefault()}function ve(s){return o.jsx(o.Fragment,{children:""+s.itemContext.item})}function xe(s){return o.jsx(o.Fragment,{children:""+s.itemContext.item})}function we({itemContext:s,slotContext:i}){const a=i.state;return o.jsx("div",{tabIndex:-1,className:`au-select-badge me-1 ${a.badgeClassName}`,onKeyDown:u=>i.widget.actions.onBadgeKeydown(u.nativeEvent,s.item),children:o.jsx(O,{slotContent:a.slotBadgeLabel,props:{...i,itemContext:s}})},s.id)}function Ce({slotContext:s}){const i=[];for(const a of s.state.selectedContexts)i.push(o.jsx(we,{itemContext:a,slotContext:s},a.id));return i.length?o.jsx(o.Fragment,{children:i}):null}function Ie({slotContext:s}){const{widget:i,state:a}=s,u=a.highlighted;return o.jsx(o.Fragment,{children:a.visibleItems.map(l=>{const{id:b}=l,g=["au-select-item dropdown-item position-relative"];return l===u&&g.push("bg-primary text-light"),l.selected&&g.push("selected"),o.jsx("li",{className:g.join(" "),onClick:()=>i.api.toggleItem(l.item),children:o.jsx(O,{slotContent:a.slotItem,props:{...s,itemContext:l}})},b)})})}const $e={slotBadgeLabel:ve,slotItem:xe};function Le(s){const[i,a]=pe(he,s,"select",$e),u={state:i,widget:ue(a)},{id:l,ariaLabel:b,visibleItems:g,filterText:F,open:C,className:j,menuClassName:I,placement:y}=i,{directives:{floatingDirective:v,hasFocusDirective:x,referenceDirective:S,inputContainerDirective:N}}=a,d=ie(S),w=A([x,N]),k=A([x,v]);return o.jsxs("div",{ref:d,className:`au-select dropdown border border-1 p-1 mb-3 d-block ${j}`,children:[o.jsxs("div",{ref:w,role:"combobox",className:"d-flex align-items-center flex-wrap","aria-haspopup":"listbox","aria-expanded":C,children:[o.jsx(Ce,{slotContext:u}),o.jsx("input",{id:l,"aria-label":b,className:"au-select-input flex-grow-1 border-0",type:"text",value:F,"aria-autocomplete":"list",autoCorrect:"off",autoCapitalize:"none",autoComplete:"off",onInput:a.actions.onInput,onKeyDown:p=>a.actions.onInputKeydown(p.nativeEvent)})]}),C&&g.length>0&&o.jsx("ul",{ref:k,className:`dropdown-menu show ${I}`,"data-popper-placement":y,onMouseDown:be,children:o.jsx(Ie,{slotContext:u})})]})}export{Le as S};