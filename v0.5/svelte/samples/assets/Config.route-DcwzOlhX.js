import{p as A,f as B,s as i,e as r,R as E,g as a,b as v,a as F,t as f,h as G,j as o,k as n,d as H,n as J,S as K}from"./AppCommon-Cm-6NtnE.js";import{b as h}from"./input-DVSvjeX4.js";import{b as L}from"./select-BRrq0PYn.js";import{b as M}from"./this-9x4NzZSl.js";import{A as N}from"./Alert-Bvi6Jvz2.js";import"./shared-CeO5upHl.js";import"./actions-gBvwwZne.js";import"./Slot-HBv0E13p.js";import"./snippet-DaCt2Zif.js";import"./alert-DJ2l7bcA-BYrWzFCd.js";import"./common-Banw3FYN-B7RGMRwh.js";import"./baseTransitions-B-oSxy54.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./directive-CKEccryv-gyIcW13B.js";import"./promise-CY2U8bTP-Di3LO9sj.js";import"./extendWidget-CKqcYLS9.js";import"./fade-uOobJKgw-CA5Q4wdK.js";import"./simpleClassTransition-Ct7U0yg9.js";import"./cssTransitions-Crcz6VTe.js";import"./types-Bw2nvhNr.js";import"./config-CGoDt1jV.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";var j=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(j||{}),Q=f("<option> </option>"),U=f(`<h4 class="alert-heading">Well done!</h4> <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.</p> <hr> <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>`,1),V=f('<button class="btn btn-primary showAlert" type="button">Show alert</button> <br> <br> <div class="d-flex flex-column"><div class="d-flex form-group"><label class="align-self-center me-3" for="typeSelect">Alert type:</label> <select id="typeSelect" class="form-select w-auto"></select></div> <label><input class="form-check-input me-1" type="checkbox">Animated on init</label> <label><input class="form-check-input me-1" type="checkbox">Animated</label> <label><input class="dismissibleInput form-check-input me-1" type="checkbox">Dismissible</label></div> <br> <br> <!>',1);function _e(t,W){A(W,!0);let p,m=n(!0),c=n(!0),u=n(!0),d=n("success");const $=Object.entries(j).map(e=>({value:e[1],label:e[0]}));var g=V(),_=B(g);_.__click=()=>p.api.open();var y=i(_,6),k=r(y),x=i(r(k),2);E(x,21,()=>$,K,(e,b)=>{let s=()=>a(b).value,q=()=>a(b).label;var l=Q(),O={},z=r(l);H(()=>{O!==(O=s())&&(l.value=(l.__value=s())==null?"":s()),J(z,q())}),v(e,l)});var w=i(k,2),C=r(w),I=i(w,2),D=r(I),P=i(I,2),R=r(P),T=i(y,6);M(N(T,{get dismissible(){return a(u)},get animatedOnInit(){return a(m)},get animated(){return a(c)},get type(){return a(d)},children:(e,b)=>{var s=U();v(e,s)},$$slots:{default:!0}}),e=>p=e,()=>p),L(x,()=>a(d),e=>o(d,e)),h(C,()=>a(m),e=>o(m,e)),h(D,()=>a(c),e=>o(c,e)),h(R,()=>a(u),e=>o(u,e)),v(t,g),F()}G(["click"]);export{_e as default};
