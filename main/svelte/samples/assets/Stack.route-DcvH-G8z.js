import{S as D,i as T,s as E,l as q,e as u,k as y,a as _,b as l,x,n as p,f as n,w as F}from"./AppCommon-TiDPFPMK.js";import{o as L}from"./modalService-DY5-KMHC.js";import"./Modal-9aX7RlzJ.js";import"./Slot-CbrzWcII.js";import"./config-Cgqp9Cxe.js";import"./stores-CzF8MSUm.js";import"./writables-DoU_XYTX-B1ZWx4_I.js";import"./baseTransitions-HR0BWexj.js";import"./promise-CY2U8bTP-en5UEHMu.js";import"./directive-DDb3YD5o-CdQo3NBV.js";import"./fade-7-Etejps-yQ9LM2Wa.js";import"./simpleClassTransition-z6jkww8v.js";import"./cssTransitions-DnXcDYCS.js";function N(i){let t,r,s,a,m,f,k,d,c,C,h,b,w,S;return{c(){t=q("This is a modal"),r=u("br"),s=u("br"),a=y(),m=u("button"),m.textContent="Launch other modal",f=u("br"),k=y(),d=u("button"),d.textContent="Enable backdrop",c=u("button"),c.textContent="Disable backdrop",C=u("br"),h=y(),b=u("button"),b.textContent="Close",_(m,"class","btn btn-outline-primary m-1"),_(d,"class","btn btn-outline-secondary m-1"),_(c,"class","btn btn-outline-secondary m-1"),_(b,"class","btn btn-outline-secondary m-1")},m(e,o){l(e,t,o),l(e,r,o),l(e,s,o),l(e,a,o),l(e,m,o),l(e,f,o),l(e,k,o),l(e,d,o),l(e,c,o),l(e,C,o),l(e,h,o),l(e,b,o),w||(S=[x(m,"click",i[2]),x(d,"click",i[3]),x(c,"click",i[4]),x(b,"click",i[5])],w=!0)},p,i:p,o:p,d(e){e&&(n(t),n(r),n(s),n(a),n(m),n(f),n(k),n(d),n(c),n(C),n(h),n(b)),w=!1,F(S)}}}function O(i,t,r){let{widget:s}=t,{state:a}=t;const m=()=>L({slotTitle:"Other modal",slotDefault:M,container:a.modalElement}),f=()=>s.api.patch({backdrop:!0}),k=()=>s.api.patch({backdrop:!1}),d=()=>s.api.close();return i.$$set=c=>{"widget"in c&&r(0,s=c.widget),"state"in c&&r(1,a=c.state)},[s,a,m,f,k,d]}class M extends D{constructor(t){super(),T(this,t,O,N,E,{widget:0,state:1})}}function j(i){let t,r,s;return{c(){t=u("button"),t.textContent="Launch demo modal",_(t,"class","btn btn-primary")},m(a,m){l(a,t,m),r||(s=x(t,"click",i[0]),r=!0)},p,i:p,o:p,d(a){a&&n(t),r=!1,s()}}}function v(i){return[()=>L({slotTitle:"First modal",className:"modal-sm",slotDefault:M})]}class W extends D{constructor(t){super(),T(this,t,v,j,E,{})}}export{W as default};