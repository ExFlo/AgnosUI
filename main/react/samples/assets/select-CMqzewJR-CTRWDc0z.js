import{j as n}from"./App-DI9ur9y5.js";import{S as J}from"./slot-Cdz7cIIo.js";import{a as L,u as A}from"./directive-DNXkB1Wc-BT0zWdco.js";import{c as pe}from"./index-DYzswQoO.js";import{u as me}from"./config-aYUxiFUz.js";import{w as ge,f as o,t as fe,J as he,E as ve,e as be,g as q,s as xe,o as $e,M as De,n as k,p as f,B as we,c as y}from"./directive-CKEccryv-BXYvEkQs.js";import{c as Ce,o as Fe,a as Ie,b as je}from"./floatingUI-xDXX4152.js";import{c as Ne}from"./focustrack-CicyDi2C.js";import{c as Se}from"./navManager-Cn248sWl.js";import{e as ke}from"./extendWidget-BdAld2Yx.js";const Le={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:s=>s.querySelectorAll(".au-select-badge,input"),itemIdFn:s=>""+s,onOpenChange:k,onFilterTextChange:k,onSelectedChange:k,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:""};function ye(s){const[{id$:a,open$:l,filterText$:h,items$:m,itemIdFn$:v,onOpenChange$:D,onFilterTextChange$:w,onSelectedChange$:C,allowedPlacements$:F,navSelector$:I,className$:j,badgeClassName$:M,ariaLabel$:P,menuClassName$:T,...E},G]=ge(Le,s),{selected$:N}=E,b=o(()=>a()??fe()),B=he(h,w),{hasFocus$:Q,directive:V}=Ne(),u=ve(D,[l,Q],([e,t])=>e&&t),S=o(()=>{const e=new Map,t=v();for(const i of N()){const c=t(i);e.set(c,{item:i,id:t(i),selected:!0})}return e}),X=o(()=>[...S().values()]),g=function(){const e=be(0);return q(e,t=>{const{length:i}=x();t!=null&&(i?t<0?t=i-1:t>=i&&(t=0):t=void 0),e.set(t)})}(),O=o(()=>{const e=new Map;if(u()){const t=S(),i=v();for(const c of m()){const d=i(c);e.set(d,{item:c,id:d,selected:t.has(d)})}}return e}),x=o(()=>u()?[...O().values()]:[]),R=o(()=>{const e=x(),t=g();return e.length&&t!=null?e[t]:void 0}),{directives:{floatingDirective:Y,referenceDirective:Z},stores:{placement$:_}}=Ce({props:{computePositionOptions:q(o(()=>({middleware:[Fe(5),Ie({allowedPlacements:F()}),je()]})))}}),{directive:K,refreshElements:ee,focusFirst:te,focusLast:se,focusLeft:W,focusRight:H}=Se(),ie=o(()=>({keys:{Home:te,End:se,ArrowLeft:W,ArrowRight:H},selector:I()})),z=(e,t)=>{const i=e.target;ee(),r.api.unselect(t),i instanceof HTMLElement&&setTimeout(()=>{W({event:e,referenceElement:i})||H({event:e,referenceElement:i})}),e.preventDefault()},ae=f(()=>({attributes:{role:"combobox","aria-haspopup":"listbox","aria-expanded":o(()=>`${u()}`),"aria-controls":o(()=>`${b()}-menu`)}})),ne=f(e=>({attributes:{tabindex:-1,class:M},classNames:{"au-select-badge":!0},events:{keydown:t=>{let i=!1;switch(t.key){case"Backspace":case"Delete":{z(t,e().item),i=!0;break}}i&&t.preventDefault()}}})),re=f(()=>({attributes:{role:"listbox",id:o(()=>`${b()}-menu`),"data-popper-placement":_,class:T},events:{mousedown:e=>e.preventDefault()}})),oe=f(e=>({attributes:{role:"option","aria-selected":o(()=>`${e().selected}`),style:"cursor: pointer"},classNames:{"au-select-item":!0,selected:o(()=>e().selected)},events:{click:()=>r.api.toggleItem(e().item)}})),ce=f(()=>({attributes:{id:b(),type:"text","aria-label":P(),"aria-autocomplete":"list",autocorrect:"off",autocapitalize:"none",autocomplete:"off"},classNames:{"au-select-input":!0},events:{input:e=>{const t=e.target.value;we(()=>{u.set(t!=null&&t!==""),B.set(t)})},keydown:({ctrlKey:e,key:t,preventDefault:i})=>{let c=!0;switch(t){case"ArrowDown":{u()?e?r.api.highlightLast():r.api.highlightNext():(r.api.open(),r.api.highlightFirst());break}case"ArrowUp":e?r.api.highlightFirst():r.api.highlightPrevious();break;case"Enter":{const d=R();d&&r.api.toggleItem(d.item);break}case"Escape":u.set(!1);break;default:c=!1}c&&i()}}})),le=f(e=>({events:{click:t=>{z(t,e().item)}}})),r={...xe({id$:b,visibleItems$:x,highlighted$:R,open$:u,selectedContexts$:X,filterText$:B,placement$:_,className$:j,badgeClassName$:M,ariaLabel$:P,menuClassName$:T,...E}),patch:G,api:{clear(){N.set([])},select(e){r.api.toggleItem(e,!0)},unselect(e){r.api.toggleItem(e,!1)},toggleItem(e,t){const i=v(),c=i(e),$=S().has(c);t==null&&(t=!$),!(t&&!O().has(c)||!t&&!$)&&N.update(p=>{var U;if(p=[...p],t&&!$)p.push(e);else if(!t&&$){const ue=p.findIndex(de=>i(de)===c);p.splice(ue,1)}return(U=C())==null||U(p),p})},clearText(){},highlight(e){const t=x().findIndex(i=>i.item===e);g.set(t===-1?void 0:t)},highlightFirst(){g.set(0)},highlightPrevious(){g.update(e=>e!=null?e-1:-1)},highlightNext(){g.update(e=>e!=null?e+1:1/0)},highlightLast(){g.set(-1)},open:()=>r.api.toggle(!0),close:()=>r.api.toggle(!1),toggle(e){u.update(t=>e??!t)}},directives:{hasFocusDirective:V,floatingDirective:Y,referenceDirective:Z,inputContainerDirective:$e(De(K,ie),ae),badgeAttributesDirective:ne,menuAttributesDirective:re,itemAttributesDirective:oe,inputDirective:ce,badgeCloseButtonDirective:le}};return r}const Ae={badgeLabel:({itemContext:s})=>s.item,itemLabel:({itemContext:s})=>s.item},Me=ke(ye,Ae,{}),Pe=Me;function Te(s){return n.jsx(n.Fragment,{children:""+s.itemContext.item})}function Ee(s){return n.jsx(n.Fragment,{children:""+s.itemContext.item})}function Be({itemContext:s,slotContext:a}){return n.jsx("div",{...A(a.directives.badgeAttributesDirective,s),children:n.jsx(J,{slotContent:a.state.badgeLabel,props:{...a,itemContext:s}})})}function Oe({slotContext:s}){const a=[];for(const l of s.state.selectedContexts)a.push(n.jsx(Be,{itemContext:l,slotContext:s},l.id));return a.length?n.jsx(n.Fragment,{children:a}):null}function Re({itemContext:s,slotContext:a}){const l=pe("dropdown-item","position-relative",{"text-bg-primary":s===a.state.highlighted});return n.jsx("li",{className:l,...A(a.directives.itemAttributesDirective,s),children:n.jsx(J,{slotContent:a.state.itemLabel,props:{...a,itemContext:s}})})}function _e({slotContext:s}){const{directives:{hasFocusDirective:a,floatingDirective:l,menuAttributesDirective:h}}=s;return n.jsx("ul",{...L([y,"dropdown-menu show"],a,l,h),children:s.state.visibleItems.map(m=>n.jsx(Re,{slotContext:s,itemContext:m},m.id))})}const We={badgeLabel:Te,itemLabel:Ee};function Ze(s){const a=me(Pe,s,"select",We),{state:{id:l,visibleItems:h,filterText:m,open:v,className:D},directives:{hasFocusDirective:w,referenceDirective:C,inputContainerDirective:F,inputDirective:I}}=a,j=`${l}-menu`;return n.jsxs("div",{...L([y,`au-select dropdown border border-1 p-1 mb-3 d-block ${D}`],C),children:[n.jsxs("div",{...L([y,"d-flex align-items-center flex-wrap gap-1"],w,F),children:[n.jsx(Oe,{slotContext:a}),n.jsx("input",{value:m,...A(I),onChange:()=>{}})]}),v&&h.length>0&&n.jsx(_e,{slotContext:a,menuId:j})]})}export{Ze as S};
