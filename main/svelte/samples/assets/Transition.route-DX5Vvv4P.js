import{H as E,S as Ht,i as It,s as zt,e as o,k as m,l as k,a as i,q as L,b as pt,r as e,x as g,v as W,n as Ct,f as mt,w as Dt,h as A,a1 as Ft,u as Rt,$ as qt,a6 as $t,t as X,y as Bt,d as ct,z as Mt,c as St,m as Lt,g as Yt}from"./AppCommon-ClvmpOkk.js";import{c as Z,a as rt}from"./collapse-BQC9zBIz-nfY-HtID.js";import{f as ut}from"./fade-7-Etejps-BF0T2foY.js";import{c as jt}from"./baseTransitions-BoBpwsrd.js";import"./directive-CGjTRxRh-BvEKR48r.js";import"./stores-CYKhcBtR.js";import"./cssTransitions-DnwxVjt8.js";import"./promise-CY2U8bTP-C_xLmk0r.js";import"./simpleClassTransition-B3zKs25b.js";import"./writables-DoU_XYTX-BRZiYGy-.js";function At(n){let t,l,s,c;return{c(){t=o("div"),t.innerHTML='<div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div>',Ft(t,"max-width","300px")},m(r,f){pt(r,t,f),s||(c=Rt(l=n[14].call(null,t,{transition:n[0],animated:n[2]})),s=!0)},p(r,f){l&&qt(l.update)&&f&5&&l.update.call(null,{transition:r[0],animated:r[2]})},d(r){r&&mt(t),s=!1,c()}}}function Et(n){let t,l,s,c,r,f,a,_,d,Y,H,q,V,v,j,O,I,w,B,z,D,y,G,J,F,C,K,x,$,R,u,M,dt,S,ft,T,N,ht,tt,bt,P,_t,et,kt,Q,gt,nt,vt,U,Tt,lt,wt,it,yt,h=(!n[1]||!n[8])&&At(n);return{c(){t=o("div"),l=o("div"),l.textContent="Transition:",s=m(),c=o("div"),r=o("button"),r.textContent="Vertical collapse",f=m(),a=o("button"),a.textContent="Horizontal collapse",_=m(),d=o("button"),d.textContent="Fade",Y=m(),H=o("div"),H.textContent="Other properties:",q=m(),V=o("label"),v=o("input"),j=k("Animated"),O=m(),I=o("label"),w=o("input"),B=k("Animated on init"),z=m(),D=o("label"),y=o("input"),G=k("Remove from DOM"),J=m(),F=o("label"),C=o("input"),K=k("Visible"),x=m(),$=o("div"),R=o("button"),R.textContent="Toggle",u=m(),M=o("button"),M.textContent="Toggle with animation",dt=m(),S=o("button"),S.textContent="Toggle without animation",ft=m(),T=o("ul"),N=o("li"),ht=k("visible = "),tt=k(n[5]),bt=m(),P=o("li"),_t=k("transitioning = "),et=k(n[6]),kt=m(),Q=o("li"),gt=k("shown = "),nt=k(n[7]),vt=m(),U=o("li"),Tt=k("hidden = "),lt=k(n[8]),wt=m(),h&&h.c(),i(l,"class","h6 mt-2"),i(r,"type","button"),i(r,"class","btn btn-sm btn-outline-secondary"),L(r,"active",n[0]===Z),i(a,"type","button"),i(a,"class","btn btn-sm btn-outline-secondary"),L(a,"active",n[0]===rt),i(d,"type","button"),i(d,"class","btn btn-sm btn-outline-secondary"),L(d,"active",n[0]===ut),i(c,"class","d-flex flex-wrap gap-2"),i(H,"class","h6 mt-2"),i(v,"type","checkbox"),i(v,"class","form-check-input"),i(V,"class","form-check"),i(w,"type","checkbox"),i(w,"class","form-check-input"),i(I,"class","form-check"),i(y,"type","checkbox"),i(y,"class","form-check-input"),i(D,"class","form-check"),i(C,"type","checkbox"),i(C,"class","form-check-input"),i(F,"class","form-check mb-2"),i(R,"type","button"),i(R,"class","btn btn-outline-primary"),i(M,"type","button"),i(M,"class","btn btn-outline-primary"),i(S,"type","button"),i(S,"class","btn btn-outline-primary"),i($,"class","d-flex flex-wrap gap-2"),i(T,"class","mt-2"),i(t,"class","transition-inner")},m(p,b){pt(p,t,b),e(t,l),e(t,s),e(t,c),e(c,r),e(c,f),e(c,a),e(c,_),e(c,d),e(t,Y),e(t,H),e(t,q),e(t,V),e(V,v),v.checked=n[2],e(V,j),e(t,O),e(t,I),e(I,w),w.checked=n[3],e(I,B),e(t,z),e(t,D),e(D,y),y.checked=n[1],e(D,G),e(t,J),e(t,F),e(F,C),C.checked=n[4],e(F,K),e(t,x),e(t,$),e($,R),e($,u),e($,M),e($,dt),e($,S),e(t,ft),e(t,T),e(T,N),e(N,ht),e(N,tt),e(T,bt),e(T,P),e(P,_t),e(P,et),e(T,kt),e(T,Q),e(Q,gt),e(Q,nt),e(T,vt),e(T,U),e(U,Tt),e(U,lt),e(t,wt),h&&h.m(t,null),it||(yt=[g(r,"click",n[17]),g(a,"click",n[18]),g(d,"click",n[19]),g(v,"change",n[20]),g(w,"change",n[21]),g(y,"change",n[22]),g(C,"change",n[23]),g(R,"click",n[24]),g(M,"click",n[25]),g(S,"click",n[26])],it=!0)},p(p,[b]){b&1&&L(r,"active",p[0]===Z),b&1&&L(a,"active",p[0]===rt),b&1&&L(d,"active",p[0]===ut),b&4&&(v.checked=p[2]),b&8&&(w.checked=p[3]),b&2&&(y.checked=p[1]),b&16&&(C.checked=p[4]),b&32&&W(tt,p[5]),b&64&&W(et,p[6]),b&128&&W(nt,p[7]),b&256&&W(lt,p[8]),!p[1]||!p[8]?h?h.p(p,b):(h=At(p),h.c(),h.m(t,null)):h&&(h.d(1),h=null)},i:Ct,o:Ct,d(p){p&&mt(t),h&&h.d(),it=!1,Dt(yt)}}}const Vt=E(Z),at=E(!0),ot=E(!1),Gt=E(!0),st=E(!0);function Jt(n,t,l){let s,c,r,f,a,_,d,Y,H;A(n,Vt,u=>l(0,s=u)),A(n,st,u=>l(1,c=u)),A(n,at,u=>l(2,r=u)),A(n,ot,u=>l(3,f=u));const{stores:{visible$:q,transitioning$:V,shown$:v,hidden$:j},api:{toggle:O},directives:{directive:I},patch:w}=jt({props:{animatedOnInit:ot,animated:at,visible:Gt}});A(n,q,u=>l(5,_=u)),A(n,V,u=>l(6,d=u)),A(n,v,u=>l(7,Y=u)),A(n,j,u=>l(8,H=u));const B={subscribe:q.subscribe,set:u=>w({visible:u})};A(n,B,u=>l(4,a=u));const z=u=>{O(!1,!1),$t(st,c=!0,c),$t(Vt,s=u,s)},D=()=>z(Z),y=()=>z(rt),G=()=>z(ut);function J(){r=this.checked,at.set(r)}function F(){f=this.checked,ot.set(f)}function C(){c=this.checked,st.set(c)}function K(){a=this.checked,B.set(a)}return[s,c,r,f,a,_,d,Y,H,q,V,v,j,O,I,B,z,D,y,G,J,F,C,K,()=>O(),()=>O(void 0,!0),()=>O(void 0,!1)]}class Kt extends Ht{constructor(t){super(),It(this,t,Jt,Et,zt,{})}}function Ot(n){let t,l;return t=new Kt({}),{c(){St(t.$$.fragment)},m(s,c){Lt(t,s,c),l=!0},i(s){l||(X(t.$$.fragment,s),l=!0)},o(s){ct(t.$$.fragment,s),l=!1},d(s){Yt(t,s)}}}function Nt(n){let t,l,s,c,r,f,a=n[0]&&Ot();return{c(){t=o("div"),l=o("button"),l.textContent="Toggle component",s=m(),a&&a.c(),i(l,"id","toggle-component"),i(l,"class","btn btn-outline-secondary"),i(t,"class","demo-transition mb-3")},m(_,d){pt(_,t,d),e(t,l),e(t,s),a&&a.m(t,null),c=!0,r||(f=g(l,"click",n[1]),r=!0)},p(_,[d]){_[0]?a?d&1&&X(a,1):(a=Ot(),a.c(),X(a,1),a.m(t,null)):a&&(Bt(),ct(a,1,1,()=>{a=null}),Mt())},i(_){c||(X(a),c=!0)},o(_){ct(a),c=!1},d(_){_&&mt(t),a&&a.d(),r=!1,f()}}}function Pt(n,t,l){let s=!0;return[s,()=>l(0,s=!s)]}class ie extends Ht{constructor(t){super(),It(this,t,Pt,Nt,zt,{})}}export{ie as default};
