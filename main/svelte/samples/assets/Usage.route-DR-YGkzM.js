import{S as h,i as D,s as L,e as r,k as d,a as f,b as u,V as y,u as S,x as C,$ as E,n as $,f as a,w as T}from"./AppCommon-DYyriHmo.js";const q=(l,n)=>{console.log("Directive has been executed on node ",l.id);const o=s=>{console.log(n,s.target)};return l.addEventListener("click",o),{update:s=>n=s,destroy:()=>{l.removeEventListener("click",o),console.log("Destroy function executed ",l.id)}}};function w(l){let n,o,s,c,b,i,v,_,m,p,k,x;return{c(){n=r("div"),n.innerHTML='<button class="btn btn-primary" id="test">button 1</button> <button class="btn btn-primary" id="test2">button 2</button>',s=d(),c=r("hr"),b=d(),i=r("input"),v=d(),_=r("hr"),m=d(),p=r("span"),p.textContent="(Open the console to see the outputs)",f(i,"class","form-control"),f(i,"id","clickText"),f(i,"type","text"),f(i,"aria-label","text input to configure the directive")},m(e,t){u(e,n,t),u(e,s,t),u(e,c,t),u(e,b,t),u(e,i,t),y(i,l[0]),u(e,v,t),u(e,_,t),u(e,m,t),u(e,p,t),k||(x=[S(o=q.call(null,n,l[0])),C(i,"input",l[1])],k=!0)},p(e,[t]){o&&E(o.update)&&t&1&&o.update.call(null,e[0]),t&1&&i.value!==e[0]&&y(i,e[0])},i:$,o:$,d(e){e&&(a(n),a(s),a(c),a(b),a(i),a(v),a(_),a(m),a(p)),k=!1,T(x)}}}function H(l,n,o){let s="focus element clicked";function c(){s=this.value,o(0,s)}return[s,c]}class O extends h{constructor(n){super(),D(this,n,H,w,L,{})}}export{O as default};