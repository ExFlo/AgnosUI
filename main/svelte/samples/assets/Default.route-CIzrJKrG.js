import{k as a,R as i,s as t,f as R,g as l,j as r,d as S,b as $,t as F,n as V,e as s}from"./AppCommon-DpjxpKbi.js";import{b as o}from"./input-C-lKqKSI.js";import{S as p}from"./Slider-Bl8Nwd_N.js";import"./actions-hEUS7_0h.js";import"./slider-DYrwS7Mv-M4I3dViG.js";import"./directive-CKEccryv-ocPWyJ_x.js";import"./writables-DCiBdIBK-eyYf7wu0.js";import"./resizeObserver-CcBmV2tw.js";import"./extendWidget-C6WMN4LK.js";import"./Slot-nk-rByji.js";import"./snippet-NpXm27Vp.js";import"./config-BJ3FVXXn.js";import"./config-BVsBkNcU.js";import"./index-client-pTWJ3zsz.js";var q=F('<h2>Slider with form control</h2> <!> <hr> <h2>Slider with value</h2> <!> <hr> <h2>Disabled slider</h2> <!> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="disabled"> <label class="form-check-label" for="disabled">Disabled</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="readonly"> <label class="form-check-label" for="readonly">Readonly</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showMinMax"> <label class="form-check-label" for="showMinMax">Min-Max label visibility</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showValues"> <label class="form-check-label" for="showValues">Value label visibility</label></div>',1);function X(L){let c=a(i([70])),v=a(i([60])),d=a(i([20])),n=a(!0),m=a(!0),h=a(!0),u=a(!0);var b=q(),f=t(R(b),2);p(f,{min:0,max:100,stepSize:1,get values(){return l(c)},set values(e){r(c,i(e))},get showMinMaxLabels(){return l(h)},get showValueLabels(){return l(u)}});var g=t(f);S(()=>V(g,` Form control value: ${l(c).join(", ")??""} `));var k=t(g,5);p(k,{min:0,max:100,stepSize:1,get values(){return l(d)},set values(e){r(d,i(e))}});var x=t(k),w=t(x,5);p(w,{min:0,max:100,stepSize:1,get values(){return l(v)},set values(e){r(v,i(e))},get disabled(){return l(n)},get readonly(){return l(m)}});var _=t(w,2),T=s(_),y=t(_,2),z=s(y),M=t(y,2),D=s(M),j=t(M,2),C=s(j);S(()=>V(x,` Value:
${l(d)??""} `)),o(T,()=>l(n),e=>r(n,e)),o(z,()=>l(m),e=>r(m,e)),o(D,()=>l(h),e=>r(h,e)),o(C,()=>l(u),e=>r(u,e)),$(L,b)}export{X as default};
