import{ac as d,ai as ke,ad as $e,ag as Fe,p as Te,s as Ne,P as ve,L as Se,e as b,R as xe,b as Ce,g as Pe,c as I,a as Ae,t as G,d as g,u as _e,M as Me,h as q,j as Ee,r as we,q as S,U as De,Y as Oe,k as $,O as be}from"./AppCommon-CRrVgjjK.js";import{a as p}from"./actions-DMIFV9qL.js";import{t as Be}from"./class-zI9kEawh.js";import{S as ye}from"./Slot-Do_YzuMi.js";import{c as Ke}from"./config-D6r3EYnL.js";import{c as Re,o as He,a as ze,b as Ue}from"./floatingUI-vEzbPOSa.js";import{c as We}from"./focustrack-XdHrgh6L.js";import{c as qe}from"./navManager-C2D2dSuT.js";import{w as je,l as Ye,B as Ge,z as Je,s as Qe,g as Ve,E as Xe,k as he,h as j,c as Y}from"./directive-CKEccryv-CZ-m_LIt.js";import{e as Ze}from"./extendWidget--tzkYf88.js";const et={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:u=>u.querySelectorAll(".au-select-badge,input"),itemIdFn:u=>""+u,onOpenChange:he,onFilterTextChange:he,onSelectedChange:he,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:""};function tt(u){const[{id$:x,open$:l,filterText$:J,items$:Q,itemIdFn$:L,onOpenChange$:P,onFilterTextChange$:V,onSelectedChange$:X,allowedPlacements$:Z,navSelector$:ee,className$:A,badgeClassName$:M,ariaLabel$:te,menuClassName$:E,...O},k]=je(et,u),{selected$:C}=O,_=d(()=>x()??Ye()),F=Ge(J,V),{hasFocus$:w,directive:se}=We(),m=Je(P,[l,w],([e,t])=>e&&t),T=d(()=>{const e=new Map,t=L();for(const a of C()){const c=t(a);e.set(c,{item:a,id:t(a),selected:!0})}return e}),ae=d(()=>[...T().values()]),h=function(){const e=ke(0);return $e(e,t=>{const{length:a}=y();t!=null&&(a?t<0?t=a-1:t>=a&&(t=0):t=void 0),e.set(t)})}(),B=d(()=>{const e=new Map;if(m()){const t=T(),a=L();for(const c of Q()){const s=a(c);e.set(s,{item:c,id:s,selected:t.has(s)})}}return e}),y=d(()=>m()?[...B().values()]:[]),K=d(()=>{const e=y(),t=h();return e.length&&t!=null?e[t]:void 0}),{directives:{floatingDirective:ie,referenceDirective:oe},stores:{placement$:R}}=Re({props:{computePositionOptions:$e(d(()=>({middleware:[He(5),ze({allowedPlacements:Z()}),Ue()]})))}}),{directive:ne,refreshElements:re,focusFirst:le,focusLast:ce,focusLeft:N,focusRight:H}=qe(),de=d(()=>({keys:{Home:le,End:ce,ArrowLeft:N,ArrowRight:H},selector:ee()})),z=(e,t)=>{const a=e.target;re(),n.api.unselect(t),a instanceof HTMLElement&&setTimeout(()=>{N({event:e,referenceElement:a})||H({event:e,referenceElement:a})}),e.preventDefault()},pe=j(()=>({attributes:{role:"combobox","aria-haspopup":"listbox","aria-expanded":d(()=>`${m()}`),"aria-controls":d(()=>`${_()}-menu`)}})),ue=j(e=>({attributes:{tabindex:-1,class:M},classNames:{"au-select-badge":!0},events:{keydown:t=>n.actions.onBadgeKeydown(t,e().item)}})),D=j(()=>({attributes:{role:"listbox",id:d(()=>`${_()}-menu`),"data-popper-placement":R,class:E},events:{mousedown:e=>e.preventDefault()}})),U=j(e=>({attributes:{role:"option","aria-selected":d(()=>`${e().selected}`),style:"cursor: pointer"},classNames:{"au-select-item":!0,selected:d(()=>e().selected)},events:{click:()=>n.api.toggleItem(e().item)}})),n={...Qe({id$:_,visibleItems$:y,highlighted$:K,open$:m,selectedContexts$:ae,filterText$:F,placement$:R,className$:A,badgeClassName$:M,ariaLabel$:te,menuClassName$:E,...O}),patch:k,api:{clear(){C.set([])},select(e){n.api.toggleItem(e,!0)},unselect(e){n.api.toggleItem(e,!1)},toggleItem(e,t){const a=L(),c=a(e),i=T().has(c);t==null&&(t=!i),!(t&&!B().has(c)||!t&&!i)&&C.update(r=>{var o;if(r=[...r],t&&!i)r.push(e);else if(!t&&i){const v=r.findIndex(f=>a(f)===c);r.splice(v,1)}return(o=X())==null||o(r),r})},clearText(){},highlight(e){const t=y().findIndex(a=>a.item===e);h.set(t===-1?void 0:t)},highlightFirst(){h.set(0)},highlightPrevious(){h.update(e=>e!=null?e-1:-1)},highlightNext(){h.update(e=>e!=null?e+1:1/0)},highlightLast(){h.set(-1)},open:()=>n.api.toggle(!0),close:()=>n.api.toggle(!1),toggle(e){m.update(t=>e??!t)}},directives:{hasFocusDirective:se,floatingDirective:ie,referenceDirective:oe,inputContainerDirective:Ve(Xe(ne,de),pe),badgeAttributesDirective:ue,menuAttributesDirective:D,itemAttributesDirective:U},actions:{onInput({target:e}){const t=e.value;Fe(()=>{m.set(t!=null&&t!==""),F.set(t)})},onRemoveBadgeClick(e,t){z(e,t)},onInputKeydown(e){const{ctrlKey:t,key:a}=e;let c=!0;switch(a){case"ArrowDown":{m()?t?n.api.highlightLast():n.api.highlightNext():(n.api.open(),n.api.highlightFirst());break}case"ArrowUp":t?n.api.highlightFirst():n.api.highlightPrevious();break;case"Enter":{const s=K();s&&n.api.toggleItem(s.item);break}case"Escape":m.set(!1);break;default:c=!1}c&&e.preventDefault()},onBadgeKeydown(e,t){let a=!1;switch(e.key){case"Backspace":case"Delete":{z(e,t),a=!0;break}}a&&e.preventDefault()}}};return n}const st={badgeLabel:({itemContext:u})=>u.item,itemLabel:({itemContext:u})=>u.item},at=Ze(tt,st,{}),it=at;var ot=G("<div><!></div>"),nt=G("<li><!></li>"),rt=G("<ul></ul>"),lt=G('<div><div><!> <input type="text" class="au-select-input flex-grow-1 border-0" aria-autocomplete="list" autoCorrect="off" autoCapitalize="none" autoComplete="off"></div> <!></div>');function $t(u,x){Te(x,!0);const l=Ne(),J=()=>g(oe,"$className$",l),Q=()=>g(B,"$selectedContexts$",l),L=()=>g(y,"$badgeLabel$",l),P=()=>g(ne,"$state$",l),V=()=>g(m,"$id$",l),X=()=>g(T,"$ariaLabel$",l),Z=()=>g(R,"$filterText$",l),ee=()=>g(h,"$open$",l),A=()=>g(ie,"$visibleItems$",l),M=()=>g(ae,"$highlighted$",l),te=()=>g(K,"$itemLabel$",l),E=(s,i)=>{let r=()=>i==null?void 0:i().itemContext;var o=_e();b(()=>we(o,r().item)),I(s,o)},O=(s,i)=>{let r=()=>i==null?void 0:i().itemContext;var o=_e();b(()=>we(o,r().item)),I(s,o)};let k=ve(x,"open",15,!1),C=ve(x,"filterText",15),_=ve(x,"selected",15),F=Me(x,["$$slots","$$events","$$legacy","open","filterText","selected"]);const w=Ke({factory:it,widgetName:"select",props:{...F,open:k(),filterText:C(),selected:_()},defaultConfig:{badgeLabel:E,itemLabel:O},events:{onOpenChange(s){k(s)},onSelectedChange:s=>{_(s)},onFilterTextChange:s=>{C(s)}}}),se=w.api,{stores:{id$:m,ariaLabel$:T,highlighted$:ae,open$:h,selectedContexts$:B,badgeLabel$:y,itemLabel$:K,visibleItems$:ie,className$:oe,filterText$:R},state$:ne,actions:{onInput:re,onInputKeydown:le},directives:{floatingDirective:ce,hasFocusDirective:N,referenceDirective:H,inputContainerDirective:de,badgeAttributesDirective:z,menuAttributesDirective:pe,itemAttributesDirective:ue}}=w;Se(()=>w.patchChangedProps({...F,open:k(),filterText:C(),selected:_()}));var D=lt();let U;b(()=>U=S(D,U,{}));var n=q(D);let e;b(()=>e=S(n,e,{}));var t=q(n);xe(t,1,Q,s=>s.id,(s,i)=>{var r=ot();let o;b(()=>o=S(r,o,{}));var v=q(r),f=be(()=>({state:P(),widget:w,itemContext:$(i)}));ye(v,{get content(){return L()},get props(){return $(f)}}),p(r,(ge,W)=>z(ge,W),()=>$(i)),I(s,r)});var a=Ce(t,2);a.__input=re,a.__keydown=le;var c=Ce(n,2);return Pe(c,()=>ee()&&A().length>0,s=>{var i=rt();let r;b(()=>r=S(i,r,{})),xe(i,5,A,o=>o.id,(o,v)=>{var f=nt();const ge=be(()=>$(v)===M());let W;b(()=>W=S(f,W,{}));var Ie=q(f),Le=be(()=>({state:P(),widget:w,itemContext:$(v)}));ye(Ie,{get content(){return te()},get props(){return $(Le)}}),b(()=>Be(f,"text-bg-primary",$(ge))),p(f,(me,fe)=>Y(me,fe),()=>"dropdown-item position-relative"),p(f,(me,fe)=>ue(me,fe),()=>$(v)),I(o,f)}),p(i,o=>N(o)),p(i,o=>ce(o)),p(i,o=>pe(o)),p(i,(o,v)=>Y(o,v),()=>"dropdown-menu show"),I(s,i)}),b(()=>{De(a,"id",V()),De(a,"aria-label",X()),Oe(a,Z())}),p(n,s=>N(s)),p(n,s=>de(s)),p(n,(s,i)=>Y(s,i),()=>"d-flex align-items-center flex-wrap gap-1"),p(D,s=>H(s)),p(D,(s,i)=>Y(s,i),()=>"au-select dropdown border border-1 p-1 mb-3 d-block "+J()),I(u,D),Ae({api:se})}Ee(["input","keydown"]);export{$t as S};
