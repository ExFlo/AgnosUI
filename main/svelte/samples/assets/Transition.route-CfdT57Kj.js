import{ab as Y,S as It,i as zt,s as Bt,k as s,f,l as k,q as a,u as j,g as pt,v as e,C as g,x as W,n as Ct,h as dt,B as Ft,b as A,j as Ht,a1 as Rt,r as $t,w as qt,y as Mt,z as St,ae as At,t as X,D as jt,a as ct,E as Et,c as Lt,m as Yt,d as Gt}from"./AppCommon-B0X1wpkD.js";import{c as Z,a as rt}from"./collapse-CVjUhnIz--8gmFXSU.js";import{f as ut}from"./fade-uOobJKgw-DEnnVFGu.js";import{c as Jt}from"./baseTransitions-BXL-cfKo.js";import"./directive-CKEccryv-C4vN6gkB.js";import"./cssTransitions-CJbIklrT.js";import"./promise-CY2U8bTP-Clg90S-3.js";import"./simpleClassTransition-CfBPAkxw.js";import"./writables-DoU_XYTX-CvfZwyIc.js";function Vt(n){let t,i,o,c,p,h=[{style:"max-width: 300px;"},{}],l={};for(let r=0;r<h.length;r+=1)l=Ht(l,h[r]);return{c(){t=s("div"),i=s("div"),i.innerHTML='<div class="card-body">You can collapse this card by clicking Toggle</div>',a(i,"class","card"),Rt(i,"width","300px"),$t(t,l)},m(r,d){pt(r,t,d),e(t,i),c||(p=qt(o=n[14].call(null,t,{transition:n[0],animated:n[2]})),c=!0)},p(r,d){$t(t,l=Mt(h,[{style:"max-width: 300px;"},d&5&&{}])),o&&St(o.update)&&d&5&&o.update.call(null,{transition:r[0],animated:r[2]})},d(r){r&&dt(t),c=!1,p()}}}function Kt(n){let t,i,o,c,p,h,l,r,d,E,D,R,V,v,L,O,I,w,q,z,B,y,G,J,F,C,K,x,$,H,u,M,mt,S,ft,T,N,ht,tt,bt,P,_t,et,kt,Q,gt,nt,vt,U,Tt,lt,wt,it,yt,b=(!n[1]||!n[8])&&Vt(n);return{c(){t=s("div"),i=s("div"),i.textContent="Transition:",o=f(),c=s("div"),p=s("button"),p.textContent="Vertical collapse",h=f(),l=s("button"),l.textContent="Horizontal collapse",r=f(),d=s("button"),d.textContent="Fade",E=f(),D=s("div"),D.textContent="Other properties:",R=f(),V=s("label"),v=s("input"),L=k("Animated"),O=f(),I=s("label"),w=s("input"),q=k("Animated on init"),z=f(),B=s("label"),y=s("input"),G=k("Remove from DOM"),J=f(),F=s("label"),C=s("input"),K=k("Visible"),x=f(),$=s("div"),H=s("button"),H.textContent="Toggle",u=f(),M=s("button"),M.textContent="Toggle with animation",mt=f(),S=s("button"),S.textContent="Toggle without animation",ft=f(),T=s("ul"),N=s("li"),ht=k("visible = "),tt=k(n[5]),bt=f(),P=s("li"),_t=k("transitioning = "),et=k(n[6]),kt=f(),Q=s("li"),gt=k("shown = "),nt=k(n[7]),vt=f(),U=s("li"),Tt=k("hidden = "),lt=k(n[8]),wt=f(),b&&b.c(),a(i,"class","h6 mt-2"),a(p,"type","button"),a(p,"class","btn btn-sm btn-outline-secondary"),j(p,"active",n[0]===Z),a(l,"type","button"),a(l,"class","btn btn-sm btn-outline-secondary"),j(l,"active",n[0]===rt),a(d,"type","button"),a(d,"class","btn btn-sm btn-outline-secondary"),j(d,"active",n[0]===ut),a(c,"class","d-flex flex-wrap gap-2"),a(D,"class","h6 mt-2"),a(v,"type","checkbox"),a(v,"class","form-check-input"),a(V,"class","form-check"),a(w,"type","checkbox"),a(w,"class","form-check-input"),a(I,"class","form-check"),a(y,"type","checkbox"),a(y,"class","form-check-input"),a(B,"class","form-check"),a(C,"type","checkbox"),a(C,"class","form-check-input"),a(F,"class","form-check mb-2"),a(H,"type","button"),a(H,"class","btn btn-outline-primary"),a(M,"type","button"),a(M,"class","btn btn-outline-primary"),a(S,"type","button"),a(S,"class","btn btn-outline-primary"),a($,"class","d-flex flex-wrap gap-2"),a(T,"class","mt-2"),a(t,"class","transition-inner")},m(m,_){pt(m,t,_),e(t,i),e(t,o),e(t,c),e(c,p),e(c,h),e(c,l),e(c,r),e(c,d),e(t,E),e(t,D),e(t,R),e(t,V),e(V,v),v.checked=n[2],e(V,L),e(t,O),e(t,I),e(I,w),w.checked=n[3],e(I,q),e(t,z),e(t,B),e(B,y),y.checked=n[1],e(B,G),e(t,J),e(t,F),e(F,C),C.checked=n[4],e(F,K),e(t,x),e(t,$),e($,H),e($,u),e($,M),e($,mt),e($,S),e(t,ft),e(t,T),e(T,N),e(N,ht),e(N,tt),e(T,bt),e(T,P),e(P,_t),e(P,et),e(T,kt),e(T,Q),e(Q,gt),e(Q,nt),e(T,vt),e(T,U),e(U,Tt),e(U,lt),e(t,wt),b&&b.m(t,null),it||(yt=[g(p,"click",n[17]),g(l,"click",n[18]),g(d,"click",n[19]),g(v,"change",n[20]),g(w,"change",n[21]),g(y,"change",n[22]),g(C,"change",n[23]),g(H,"click",n[24]),g(M,"click",n[25]),g(S,"click",n[26])],it=!0)},p(m,[_]){_&1&&j(p,"active",m[0]===Z),_&1&&j(l,"active",m[0]===rt),_&1&&j(d,"active",m[0]===ut),_&4&&(v.checked=m[2]),_&8&&(w.checked=m[3]),_&2&&(y.checked=m[1]),_&16&&(C.checked=m[4]),_&32&&W(tt,m[5]),_&64&&W(et,m[6]),_&128&&W(nt,m[7]),_&256&&W(lt,m[8]),!m[1]||!m[8]?b?b.p(m,_):(b=Vt(m),b.c(),b.m(t,null)):b&&(b.d(1),b=null)},i:Ct,o:Ct,d(m){m&&dt(t),b&&b.d(),it=!1,Ft(yt)}}}const Ot=Y(Z),at=Y(!0),st=Y(!1),Nt=Y(!0),ot=Y(!0);function Pt(n,t,i){let o,c,p,h,l,r,d,E,D;A(n,Ot,u=>i(0,o=u)),A(n,ot,u=>i(1,c=u)),A(n,at,u=>i(2,p=u)),A(n,st,u=>i(3,h=u));const{stores:{visible$:R,transitioning$:V,shown$:v,hidden$:L},api:{toggle:O},directives:{directive:I},patch:w}=Jt({props:{animatedOnInit:st,animated:at,visible:Nt}});A(n,R,u=>i(5,r=u)),A(n,V,u=>i(6,d=u)),A(n,v,u=>i(7,E=u)),A(n,L,u=>i(8,D=u));const q={subscribe:R.subscribe,set:u=>w({visible:u})};A(n,q,u=>i(4,l=u));const z=u=>{O(!1,!1),At(ot,c=!0,c),At(Ot,o=u,o)},B=()=>z(Z),y=()=>z(rt),G=()=>z(ut);function J(){p=this.checked,at.set(p)}function F(){h=this.checked,st.set(h)}function C(){c=this.checked,ot.set(c)}function K(){l=this.checked,q.set(l)}return[o,c,p,h,l,r,d,E,D,R,V,v,L,O,I,q,z,B,y,G,J,F,C,K,()=>O(),()=>O(void 0,!0),()=>O(void 0,!1)]}class Qt extends It{constructor(t){super(),zt(this,t,Pt,Kt,Bt,{})}}function Dt(n){let t,i;return t=new Qt({}),{c(){Lt(t.$$.fragment)},m(o,c){Yt(t,o,c),i=!0},i(o){i||(X(t.$$.fragment,o),i=!0)},o(o){ct(t.$$.fragment,o),i=!1},d(o){Gt(t,o)}}}function Ut(n){let t,i,o,c,p,h,l=n[0]&&Dt();return{c(){t=s("div"),i=s("button"),i.textContent="Toggle component",o=f(),l&&l.c(),a(i,"id","toggle-component"),a(i,"class","btn btn-outline-secondary"),a(t,"class","demo-transition mb-3")},m(r,d){pt(r,t,d),e(t,i),e(t,o),l&&l.m(t,null),c=!0,p||(h=g(i,"click",n[1]),p=!0)},p(r,[d]){r[0]?l?d&1&&X(l,1):(l=Dt(),l.c(),X(l,1),l.m(t,null)):l&&(jt(),ct(l,1,1,()=>{l=null}),Et())},i(r){c||(X(l),c=!0)},o(r){ct(l),c=!1},d(r){r&&dt(t),l&&l.d(),p=!1,h()}}}function Wt(n,t,i){let o=!0;return[o,()=>i(0,o=!o)]}class se extends It{constructor(t){super(),zt(this,t,Wt,Ut,Bt,{})}}export{se as default};