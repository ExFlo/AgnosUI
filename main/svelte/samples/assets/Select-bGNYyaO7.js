import{G as P,H as je,a6 as Ce,a9 as Ge,S as Je,i as Ye,s as Ze,R as ue,e as A,k as we,a as w,b as z,q as y,r as ee,x,y as te,Y as Be,Z as Ee,z as se,t as k,d as $,f as U,w as Ke,N as Qe,h as L,B as me,M as ke,c as R,m as H,g as q,ae as Ve,p as O,ad as Xe,P as ge,o as Oe,C as _e,D as pe,I as W,J as j,K as G,L as J}from"./AppCommon-NgCdTdCo.js";import{c as ye}from"./config-_LMdh2br.js";import{c as xe,o as et,a as tt,b as st}from"./floatingUI-1PTB4uQr.js";import{c as lt}from"./focustrack--0UW5fWW.js";import{c as nt}from"./navManager-gGkBTVgG.js";import{a as ot}from"./directive-giyt7Uzs.js";import{n as be}from"./func-tK0QDe5R.js";import{w as at,c as it,b as rt,s as ct}from"./stores-exy7-RvQ.js";import{S as Ae}from"./Slot-p_iK9D6-.js";const ft=t=>""+t,ut={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:t=>t.querySelectorAll(".au-select-badge,input"),itemIdFn:ft,onOpenChange:be,onFilterTextChange:be,onSelectedChange:be,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:"",slotBadgeLabel:({itemContext:t})=>t.item,slotItem:({itemContext:t})=>t.item};function mt(t){const[{open$:e,filterText$:l,items$:s,itemIdFn$:n,onOpenChange$:a,onFilterTextChange$:m,onSelectedChange$:c,allowedPlacements$:_,navSelector$:r,...o},i]=at(ut,t),{selected$:p}=o,T=it(l,m),{hasFocus$:C,directive:h}=lt(),d=rt(a,[e,C],([u,g])=>u&&g),I=P(()=>{const u=new Map,g=n();for(const b of p()){const F=g(b);u.set(F,{item:b,id:g(b),selected:!0})}return u}),le=P(()=>[...I().values()]),S=function(){const u=je(0);return Ce(u,g=>{const{length:b}=M();g!=null&&(b?g<0?g=b-1:g>=b&&(g=0):g=void 0),u.set(g)})}(),ne=P(()=>{const u=new Map;if(d()){const g=I(),b=n();for(const F of s()){const N=b(F);u.set(N,{item:F,id:N,selected:g.has(N)})}}return u}),M=P(()=>d()?[...ne().values()]:[]),B=P(()=>{const u=M(),g=S();return u.length&&g!=null?u[g]:void 0}),{directives:{floatingDirective:Y,referenceDirective:E},stores:{placement$:oe}}=xe({props:{computePositionOptions:Ce(P(()=>({middleware:[et(5),tt({allowedPlacements:_()}),st()]})))}}),{directive:ae,refreshElements:ie,focusFirst:re,focusLast:ce,focusLeft:Z,focusRight:Q}=nt(),fe=P(()=>({keys:{Home:re,End:ce,ArrowLeft:Z,ArrowRight:Q},selector:r()})),V=(u,g)=>{const b=u.target;ie(),v.api.unselect(g),b instanceof HTMLElement&&setTimeout(()=>{Z({event:u,referenceElement:b})||Q({event:u,referenceElement:b})}),u.preventDefault()},v={...ct({visibleItems$:M,highlighted$:B,open$:d,selectedContexts$:le,filterText$:T,placement$:oe,...o}),patch:i,api:{clear(){p.set([])},select(u){v.api.toggleItem(u,!0)},unselect(u){v.api.toggleItem(u,!1)},toggleItem(u,g){const b=n(),F=b(u),K=I().has(F);g==null&&(g=!K),!(g&&!ne().has(F)||!g&&!K)&&p.update(D=>{var X;if(D=[...D],g&&!K)D.push(u);else if(!g&&K){const de=D.findIndex(he=>b(he)===F);D.splice(de,1)}return(X=c())==null||X(D),D})},clearText(){},highlight(u){const g=M().findIndex(b=>b.item===u);S.set(g===-1?void 0:g)},highlightFirst(){S.set(0)},highlightPrevious(){S.update(u=>u!=null?u-1:-1)},highlightNext(){S.update(u=>u!=null?u+1:1/0)},highlightLast(){S.set(-1)},open:()=>v.api.toggle(!0),close:()=>v.api.toggle(!1),toggle(u){d.update(g=>u??!g)}},directives:{hasFocusDirective:h,floatingDirective:Y,referenceDirective:E,inputContainerDirective:ot(ae,fe)},actions:{onInput({target:u}){const g=u.value;Ge(()=>{d.set(g!=null&&g!==""),T.set(g)})},onRemoveBadgeClick(u,g){V(u,g)},onInputKeydown(u){const{ctrlKey:g,key:b}=u;let F=!0;switch(b){case"ArrowDown":{d()?g?v.api.highlightLast():v.api.highlightNext():(v.api.open(),v.api.highlightFirst());break}case"ArrowUp":g?v.api.highlightFirst():v.api.highlightPrevious();break;case"Enter":{const N=B();N&&v.api.toggleItem(N.item);break}case"Escape":d.set(!1);break;default:F=!1}F&&u.preventDefault()},onBadgeKeydown(u,g){let b=!1;switch(u.key){case"Backspace":case"Delete":{V(u,g),b=!0;break}}b&&u.preventDefault()}}};return v}const gt=mt;function ve(t,e,l){const s=t.slice();s[48]=e[l];const n=s[48]===s[12];return s[49]=n,s}const _t=t=>({itemContext:t[1]&131072,state:t[1]&8388608,widget:t[1]&64}),$e=t=>({slot:"badgeLabel",itemContext:t[48],state:t[54],widget:t[37]}),pt=t=>({itemContext:t[1]&131072,state:t[1]&8388608,widget:t[1]&64}),Le=t=>({slot:"item",itemContext:t[48],state:t[54],widget:t[37]}),dt=t=>t[1]&2097152,ht=t=>({}),Ie=t=>({slot:"slot",...t[52]});function Fe(t,e,l){const s=t.slice();return s[48]=e[l],s}const bt=t=>({itemContext:t[1]&131072,state:t[1]&8388608,widget:t[1]&64}),Ne=t=>({slot:"badgeLabel",itemContext:t[48],state:t[54],widget:t[37]}),wt=t=>({itemContext:t[1]&131072,state:t[1]&8388608,widget:t[1]&64}),Se=t=>({slot:"item",itemContext:t[48],state:t[54],widget:t[37]}),Ct=t=>t[1]&2097152,kt=t=>({}),De=t=>({slot:"slot",...t[52]});function vt(t){let e;const l=t[41].badgeLabel,s=W(l,t,t[45],Ne);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a[1]&8536128)&&j(s,l,n,n[45],e?J(l,n[45],a,bt):G(n[45]),Ne)},i(n){e||(k(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function $t(t){let e;const l=t[41].item,s=W(l,t,t[45],Se);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a[1]&8536128)&&j(s,l,n,n[45],e?J(l,n[45],a,wt):G(n[45]),Se)},i(n){e||(k(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function Lt(t){let e,l,s;const n=[t[52]];var a=t[53];function m(c,_){let r={$$slots:{item:[$t,({widget:o,state:i,itemContext:p})=>({37:o,54:i,48:p}),({widget:o,state:i,itemContext:p})=>[0,(o?64:0)|(i?8388608:0)|(p?131072:0)]],badgeLabel:[vt,({widget:o,state:i,itemContext:p})=>({37:o,54:i,48:p}),({widget:o,state:i,itemContext:p})=>[0,(o?64:0)|(i?8388608:0)|(p?131072:0)]]},$$scope:{ctx:c}};if(_!==void 0&&_[1]&2097152)r=_e(n,[pe(c[52])]);else for(let o=0;o<n.length;o+=1)r=me(r,n[o]);return{props:r}}return a&&(e=ge(a,m(t))),{c(){e&&R(e.$$.fragment),l=Oe()},m(c,_){e&&H(e,c,_),z(c,l,_),s=!0},p(c,_){if(_[1]&4194304&&a!==(a=c[53])){if(e){te();const r=e;$(r.$$.fragment,1,0,()=>{q(r,1)}),se()}a?(e=ge(a,m(c,_)),R(e.$$.fragment),k(e.$$.fragment,1),H(e,l.parentNode,l)):e=null}else if(a){const r=_[1]&2097152?_e(n,[pe(c[52])]):{};_[1]&8536128&&(r.$$scope={dirty:_,ctx:c}),e.$set(r)}},i(c){s||(e&&k(e.$$.fragment,c),s=!0)},o(c){e&&$(e.$$.fragment,c),s=!1},d(c){c&&U(l),e&&q(e,c)}}}function It(t){let e;const l=t[41].badgeLabel,s=W(l,t,t[45],De);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a[1]&2113536)&&j(s,l,n,n[45],Ct(a)||!e?G(n[45]):J(l,n[45],a,kt),De)},i(n){e||(k(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function Te(t,e){let l,s,n,a,m,c;s=new Ae({props:{slotContent:e[4],props:{state:e[5],widget:e[37],itemContext:e[48]},$$slots:{slot:[It,({props:r})=>({52:r}),({props:r})=>[0,r?2097152:0]],default:[Lt,({component:r,props:o})=>({53:r,52:o}),({component:r,props:o})=>[0,(r?4194304:0)|(o?2097152:0)]]},$$scope:{ctx:e}}});function _(...r){return e[43](e[48],...r)}return{key:t,first:null,c(){l=A("div"),R(s.$$.fragment),w(l,"tabindex","-1"),w(l,"class",n=`au-select-badge me-1 ${e[3]}`),this.first=l},m(r,o){z(r,l,o),H(s,l,null),a=!0,m||(c=ee(l,"keydown",_),m=!0)},p(r,o){e=r;const i={};o[0]&16&&(i.slotContent=e[4]),o[0]&36&&(i.props={state:e[5],widget:e[37],itemContext:e[48]}),o[1]&6307840&&(i.$$scope={dirty:o,ctx:e}),s.$set(i),(!a||o[0]&8&&n!==(n=`au-select-badge me-1 ${e[3]}`))&&w(l,"class",n)},i(r){a||(k(s.$$.fragment,r),a=!0)},o(r){$(s.$$.fragment,r),a=!1},d(r){r&&U(l),q(s),m=!1,c()}}}function Me(t){let e,l=[],s=new Map,n,a,m,c,_=ue(t[9]);const r=o=>o[48].id;for(let o=0;o<_.length;o+=1){let i=ve(t,_,o),p=r(i);s.set(p,l[o]=Pe(p,i))}return{c(){e=A("ul");for(let o=0;o<l.length;o+=1)l[o].c();w(e,"class",n="dropdown-menu show "+t[10]),w(e,"data-popper-placement",t[11])},m(o,i){z(o,e,i);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(e,null);a=!0,m||(c=[x(t[34].call(null,e)),x(t[33].call(null,e)),ee(e,"mousedown",Ve(t[42]))],m=!0)},p(o,i){i[0]&29216|i[1]&14827584&&(_=ue(o[9]),te(),l=Be(l,i,r,1,o,_,s,e,Ee,Pe,null,ve),se()),(!a||i[0]&1024&&n!==(n="dropdown-menu show "+o[10]))&&w(e,"class",n),(!a||i[0]&2048)&&w(e,"data-popper-placement",o[11])},i(o){if(!a){for(let i=0;i<_.length;i+=1)k(l[i]);a=!0}},o(o){for(let i=0;i<l.length;i+=1)$(l[i]);a=!1},d(o){o&&U(e);for(let i=0;i<l.length;i+=1)l[i].d();m=!1,Ke(c)}}}function Ft(t){let e;const l=t[41].badgeLabel,s=W(l,t,t[45],$e);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a[1]&8536128)&&j(s,l,n,n[45],e?J(l,n[45],a,_t):G(n[45]),$e)},i(n){e||(k(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function Nt(t){let e;const l=t[41].item,s=W(l,t,t[45],Le);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a[1]&8536128)&&j(s,l,n,n[45],e?J(l,n[45],a,pt):G(n[45]),Le)},i(n){e||(k(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function St(t){let e,l,s;const n=[t[52]];var a=t[53];function m(c,_){let r={$$slots:{item:[Nt,({widget:o,state:i,itemContext:p})=>({37:o,54:i,48:p}),({widget:o,state:i,itemContext:p})=>[0,(o?64:0)|(i?8388608:0)|(p?131072:0)]],badgeLabel:[Ft,({widget:o,state:i,itemContext:p})=>({37:o,54:i,48:p}),({widget:o,state:i,itemContext:p})=>[0,(o?64:0)|(i?8388608:0)|(p?131072:0)]]},$$scope:{ctx:c}};if(_!==void 0&&_[1]&2097152)r=_e(n,[pe(c[52])]);else for(let o=0;o<n.length;o+=1)r=me(r,n[o]);return{props:r}}return a&&(e=ge(a,m(t))),{c(){e&&R(e.$$.fragment),l=Oe()},m(c,_){e&&H(e,c,_),z(c,l,_),s=!0},p(c,_){if(_[1]&4194304&&a!==(a=c[53])){if(e){te();const r=e;$(r.$$.fragment,1,0,()=>{q(r,1)}),se()}a?(e=ge(a,m(c,_)),R(e.$$.fragment),k(e.$$.fragment,1),H(e,l.parentNode,l)):e=null}else if(a){const r=_[1]&2097152?_e(n,[pe(c[52])]):{};_[1]&8536128&&(r.$$scope={dirty:_,ctx:c}),e.$set(r)}},i(c){s||(e&&k(e.$$.fragment,c),s=!0)},o(c){e&&$(e.$$.fragment,c),s=!1},d(c){c&&U(l),e&&q(e,c)}}}function Dt(t){let e;const l=t[41].item,s=W(l,t,t[45],Ie);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a[1]&2113536)&&j(s,l,n,n[45],dt(a)||!e?G(n[45]):J(l,n[45],a,ht),Ie)},i(n){e||(k(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function Pe(t,e){let l,s,n,a,m,c,_;s=new Ae({props:{slotContent:e[14],props:{state:e[5],widget:e[37],itemContext:e[48]},$$slots:{slot:[Dt,({props:o})=>({52:o}),({props:o})=>[0,o?2097152:0]],default:[St,({component:o,props:i})=>({53:o,52:i}),({component:o,props:i})=>[0,(o?4194304:0)|(i?2097152:0)]]},$$scope:{ctx:e}}});function r(){return e[44](e[48])}return{key:t,first:null,c(){l=A("li"),R(s.$$.fragment),n=we(),w(l,"class",a=`au-select-item dropdown-item position-relative ${e[13]}`),O(l,"bg-primary",e[49]),O(l,"text-light",e[49]),O(l,"selected",e[48].selected),this.first=l},m(o,i){z(o,l,i),H(s,l,null),y(l,n),m=!0,c||(_=ee(l,"click",r),c=!0)},p(o,i){e=o;const p={};i[0]&16384&&(p.slotContent=e[14]),i[0]&544&&(p.props={state:e[5],widget:e[37],itemContext:e[48]}),i[1]&6307840&&(p.$$scope={dirty:i,ctx:e}),s.$set(p),(!m||i[0]&8192&&a!==(a=`au-select-item dropdown-item position-relative ${e[13]}`))&&w(l,"class",a),(!m||i[0]&12800)&&O(l,"bg-primary",e[49]),(!m||i[0]&12800)&&O(l,"text-light",e[49]),(!m||i[0]&8704)&&O(l,"selected",e[48].selected)},i(o){m||(k(s.$$.fragment,o),m=!0)},o(o){$(s.$$.fragment,o),m=!1},d(o){o&&U(l),q(s),c=!1,_()}}}function Tt(t){let e,l,s=[],n=new Map,a,m,c,_,r,o,i,p=ue(t[2]);const T=h=>h[48].id;for(let h=0;h<p.length;h+=1){let d=Fe(t,p,h),I=T(d);n.set(I,s[h]=Te(I,d))}let C=t[1]&&t[9].length>0&&Me(t);return{c(){e=A("div"),l=A("div");for(let h=0;h<s.length;h+=1)s[h].c();a=we(),m=A("input"),c=we(),C&&C.c(),w(m,"id",t[6]),w(m,"aria-label",t[7]),w(m,"type","text"),w(m,"class","au-select-input flex-grow-1 border-0"),m.value=t[8],w(m,"aria-autocomplete","list"),w(m,"autocorrect","off"),w(m,"autocapitalize","none"),w(m,"autocomplete","off"),w(l,"role","combobox"),w(l,"class","d-flex align-items-center flex-wrap"),w(l,"aria-haspopup","listbox"),w(l,"aria-expanded",t[1]),w(e,"class",_="au-select dropdown border border-1 p-1 mb-3 d-block "+t[0])},m(h,d){z(h,e,d),y(e,l);for(let I=0;I<s.length;I+=1)s[I]&&s[I].m(l,null);y(l,a),y(l,m),y(e,c),C&&C.m(e,null),r=!0,o||(i=[ee(m,"input",t[30]),ee(m,"keydown",t[31]),x(t[34].call(null,l)),x(t[36].call(null,l)),x(t[35].call(null,e))],o=!0)},p(h,d){d[0]&60|d[1]&14827586&&(p=ue(h[2]),te(),s=Be(s,d,T,1,h,p,n,l,Ee,Te,a,Fe),se()),(!r||d[0]&64)&&w(m,"id",h[6]),(!r||d[0]&128)&&w(m,"aria-label",h[7]),(!r||d[0]&256&&m.value!==h[8])&&(m.value=h[8]),(!r||d[0]&2)&&w(l,"aria-expanded",h[1]),h[1]&&h[9].length>0?C?(C.p(h,d),d[0]&514&&k(C,1)):(C=Me(h),C.c(),k(C,1),C.m(e,null)):C&&(te(),$(C,1,1,()=>{C=null}),se()),(!r||d[0]&1&&_!==(_="au-select dropdown border border-1 p-1 mb-3 d-block "+h[0]))&&w(e,"class",_)},i(h){if(!r){for(let d=0;d<p.length;d+=1)k(s[d]);k(C),r=!0}},o(h){for(let d=0;d<s.length;d+=1)$(s[d]);$(C),r=!1},d(h){h&&U(e);for(let d=0;d<s.length;d+=1)s[d].d();C&&C.d(),o=!1,Ke(i)}}}function Mt(t,e,l){let s,n,a,m,c,_,r,o,i,p,T,C,h,d,I,{$$slots:le={},$$scope:S}=e;const ne=Qe(le);let{open:M=!1}=e,{filterText:B=void 0}=e,{selected:Y=void 0}=e;const E=ye({factory:gt,widgetName:"select",$$slots:ne,$$props:e,events:{onOpenChange(f){l(38,M=f)},onSelectedChange:f=>{l(40,Y=f)},onFilterTextChange:f=>{l(39,B=f)}}}),{stores:{id$:oe,ariaLabel$:ae,badgeClassName$:ie,className$:re,filterText$:ce,highlighted$:Z,menuClassName$:Q,menuItemClassName$:fe,open$:V,placement$:v,selectedContexts$:u,slotBadgeLabel$:g,slotItem$:b,visibleItems$:F},state$:N,actions:{onInput:K,onInputKeydown:D,onBadgeKeydown:X},directives:{floatingDirective:de,hasFocusDirective:he,referenceDirective:Re,inputContainerDirective:He}}=E;L(t,oe,f=>l(6,r=f)),L(t,ae,f=>l(7,o=f)),L(t,ie,f=>l(3,m=f)),L(t,re,f=>l(0,s=f)),L(t,ce,f=>l(8,i=f)),L(t,Z,f=>l(12,h=f)),L(t,Q,f=>l(10,T=f)),L(t,fe,f=>l(13,d=f)),L(t,V,f=>l(1,n=f)),L(t,v,f=>l(11,C=f)),L(t,u,f=>l(2,a=f)),L(t,g,f=>l(4,c=f)),L(t,b,f=>l(14,I=f)),L(t,F,f=>l(9,p=f)),L(t,N,f=>l(5,_=f));function qe(f){Xe.call(this,t,f)}const ze=(f,We)=>X(We,f.item),Ue=f=>E.api.toggleItem(f.item);return t.$$set=f=>{l(46,e=me(me({},e),ke(f))),"open"in f&&l(38,M=f.open),"filterText"in f&&l(39,B=f.filterText),"selected"in f&&l(40,Y=f.selected),"$$scope"in f&&l(45,S=f.$$scope)},t.$$.update=()=>{E.patchChangedProps(e)},e=ke(e),[s,n,a,m,c,_,r,o,i,p,T,C,h,d,I,oe,ae,ie,re,ce,Z,Q,fe,V,v,u,g,b,F,N,K,D,X,de,he,Re,He,E,M,B,Y,le,qe,ze,Ue,S]}class Pt extends Je{constructor(e){super(),Ye(this,e,Mt,Tt,Ze,{open:38,filterText:39,selected:40},null,[-1,-1])}}const Ut=Pt;export{Ut as S};
