import{p as le,L as ce,e as ue,c as he,a as fe,t as de,M as pe,q as ve,h as be}from"./AppCommon-CRrVgjjK.js";import{s as _e}from"./snippet-CHfuuZJF.js";import{a as me}from"./actions-DMIFV9qL.js";import{c as Se}from"./baseTransitions-CA7OwSb7.js";import{w as xe,s as we,b as ge}from"./directive-CKEccryv-CZ-m_LIt.js";import{t as ye}from"./writables-DoU_XYTX-DMLOF105.js";import{a as Ce,c as Ie}from"./collapse-CVjUhnIz-Dz_PfDbj.js";import{c as ke}from"./config-D6r3EYnL.js";var L=e=>{throw TypeError(e)},N=(e,t,s)=>t.has(e)||L("Cannot "+s),n=(e,t,s)=>(N(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),r=(e,t,s,i)=>(N(e,t,"write to private field"),t.set(e,s),s),l=(e,t,s)=>(N(e,t,"access private method"),s),qe=(e,t,s,i)=>({set _(a){r(e,t,a)},get _(){return n(e,t,i)}}),d,k,p,v,x,C,W,S,X,J,O,E,_,w,f,H,h,K,Y,$,I,Z,Q;const A=typeof Symbol=="function"&&Symbol.observable||"@@observable",j=Symbol(),m=()=>{},F=()=>{};F.unsubscribe=F;const R=(e,t)=>{const s=e?e[t]:null;return typeof s=="function"?s.bind(e):m},We=e=>({next:typeof e=="function"?e.bind(null):R(e,"next"),pause:R(e,"pause"),resume:R(e,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),Me=function(){return this},ee=e=>{if(!e)return F;if(e.unsubscribe===e)return e;const t=typeof e=="function"?()=>e():()=>e.unsubscribe();return t.unsubscribe=t,t},G=new WeakSet,Ee=e=>{let t=e.subscribe;return G.has(t)||(t=(...s)=>ee(e.subscribe(...s)),G.add(t)),t},D=e=>{const t="subscribe"in e?e:e[A]();return Ee(t)},$e=e=>{let t;return e(s=>t=s)(),t};function te(e,t){const s=D(e),i=Object.assign(()=>Pe(i),t,{subscribe:s,[A]:Me});return i}function Oe(e,t){return te(e,{...t,set:m,update:m})}const b=Symbol(),se=Symbol();let T=!1;const M=new Set,Ue=1e3,ie=e=>{if(e>Ue)throw new Error("reached maximum number of store changes in one shot")},U=e=>{const t=!T;t&&(T=!0);try{return e()}finally{if(t)try{const s=new Map;for(const i of M){const a=s.get(i)??0;ie(a),s.set(i,a+1),M.delete(i),i[se]()}}finally{M.clear(),T=!1}}},ne=e=>$e(D(e));let g=ne;const Pe=e=>g(e),B=e=>({[e]:!0,[e-1]:!1,0:!1}),P=Symbol(),Ve=(e,t)=>Object.is(e,t)&&(!e||typeof e!="object")&&typeof e!="function";class ze{constructor(t){u(this,S),u(this,d),u(this,k),u(this,p),u(this,v),u(this,x),u(this,C),u(this,W),r(this,d,new Set),r(this,k,null),r(this,p,!1),r(this,v,1),r(this,C,B(1)),r(this,W,new WeakMap),this[Q]=!1,r(this,x,t)}[(Q=P,se)](){const t=n(this,v);for(const s of[...n(this,d)]){if(n(this,p)||n(this,v)!==t)return;s._valueIndex!==0&&l(this,S,O).call(this,s)}}[b](){}equal(t,s){return!this.notEqual(t,s)}notEqual(t,s){return!Ve(t,s)}pauseSubscribers(){if(!n(this,p)){r(this,p,!0),M.delete(this);for(const t of[...n(this,d)])t._valueIndex===0||t._paused||(t._paused=!0,t.pause())}}resumeSubscribers(){n(this,p)&&(r(this,p,!1),U(()=>{M.add(this)}))}set(t){const s=this[P];if(s||!this.equal(n(this,x),t)){const i=n(this,v)+1;r(this,v,i),r(this,x,t),r(this,C,B(i)),s&&delete n(this,C)[i-1],this.pauseSubscribers()}this.resumeSubscribers()}update(t){this.set(t(n(this,x)))}onUse(){}subscribe(t){const s=We(t),i=t==null?void 0:t[j];if(i){const o=n(this,W).get(i);o&&(s._value=o._value,s._valueIndex=o._valueIndex)}n(this,d).add(s),U(()=>{n(this,d).size==1?l(this,S,X).call(this):this[b]()}),l(this,S,O).call(this,s);const a=()=>{const o=n(this,d).delete(s);s.next=m,s.pause=m,s.resume=m,o&&(n(this,W).set(a,s),n(this,d).size===0&&l(this,S,J).call(this))};return a[b]=()=>{this[b](),l(this,S,O).call(this,s)},a.unsubscribe=a,a}[A](){return this}}d=new WeakMap;k=new WeakMap;p=new WeakMap;v=new WeakMap;x=new WeakMap;C=new WeakMap;W=new WeakMap;S=new WeakSet;X=function(){r(this,k,ee(this.onUse()))};J=function(){const e=n(this,k);e&&(r(this,k,null),e())};O=function(e){const t=n(this,C),s=n(this,v),i=n(this,x);let a=t[e._valueIndex];a==null&&(a=!!this.equal(e._value,i),t[e._valueIndex]=a),e._valueIndex=s,a?!n(this,p)&&e._paused&&(e._paused=!1,e.resume()):(e._value=i,e._paused=!1,e.next(i))};const Re=(e,t)=>{const{onUse:s,equal:i,notEqual:a}=t;return s&&(e.onUse=function(){const o=c=>this.set(c);return o.set=o,o.update=c=>this.update(c),s(o)}),i&&(e.equal=function(o,c){return i(o,c)}),a&&(e.notEqual=function(o,c){return a(o,c)}),e},Te=e=>{const t=g;try{return g=ne,e()}finally{g=t}},Fe=({unsubscribe:e})=>e(),Ne=({resubscribe:e})=>e();class He extends ze{constructor(){super(void 0),u(this,h),u(this,E,!1),u(this,_,!1),u(this,w,0),u(this,f,new Map),u(this,H,t=>Te(()=>l(this,h,Y).call(this,t))),this[P]=!0}resumeSubscribers(){l(this,h,I).call(this)||super.resumeSubscribers()}[b](){var t;if(n(this,E))throw new Error("recursive computed");let s=0;for(;l(this,h,I).call(this);){ie(++s),r(this,_,!0);try{for(const[,{pending:i,unsubscribe:a}]of n(this,f))i&&((t=a[b])==null||t.call(a))}finally{r(this,_,!1)}if(l(this,h,I).call(this))break;l(this,h,$).call(this)}}onUse(){return l(this,h,$).call(this,!0),this[b](),()=>n(this,f).forEach(Fe)}}E=new WeakMap;_=new WeakMap;w=new WeakMap;f=new WeakMap;H=new WeakMap;h=new WeakSet;K=function(e){const t={versionIndex:n(this,w),unsubscribe:m,resubscribe:m,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},s=i=>{t.value=i,t.valueIndex++,t.pending=!1,!n(this,_)&&!l(this,h,I).call(this)&&U(()=>l(this,h,$).call(this))};return s.next=s,s.pause=()=>{t.pending=!0,this.pauseSubscribers()},s.resume=()=>{t.pending=!1,!n(this,_)&&!l(this,h,I).call(this)&&U(()=>l(this,h,$).call(this))},t.resubscribe=()=>{t.unsubscribe=e(s),s[j]=t.unsubscribe},t.resubscribe(),t};Y=function(e){var t,s;let i=n(this,f).get(e);return i?(i.versionIndex=n(this,w),(s=(t=i.unsubscribe)[b])==null||s.call(t)):(i=l(this,h,K).call(this,D(e)),n(this,f).set(e,i)),i.usedValueIndex=i.valueIndex,i.value};$=function(e=!1){r(this,E,!0),r(this,_,!0);try{if(n(this,w)>0&&(e&&n(this,f).forEach(Ne),!l(this,h,Z).call(this))){this.resumeSubscribers();return}qe(this,w)._++;const t=n(this,w),s=g;let i;try{g=n(this,H),i=this.compute()}finally{g=s}this.set(i),this[P]=!1;for(const[a,o]of n(this,f))o.versionIndex!==t&&(n(this,f).delete(a),o.unsubscribe())}finally{r(this,_,!1),r(this,E,!1)}};I=function(){for(const[,{pending:e}]of n(this,f))if(e)return!0;return!1};Z=function(){for(const[,{valueIndex:e,usedValueIndex:t}]of n(this,f))if(e!=t)return!0;return!1};function Ae(e,t={}){const s=class extends He{compute(){return e()}};return te(Re(new s,{...t,onUse:void 0}))}const De={visible:!0,horizontal:!1,onVisibleChange:()=>{},onShown:()=>{},onHidden:()=>{},animated:!0,animatedOnInit:!1,className:""},Qe={horizontal:ye};function Ge(e){const[{animatedOnInit$:t,animated$:s,visible$:i,onVisibleChange$:a,onHidden$:o,onShown$:c,horizontal$:q,...V},z]=xe(De,e,Qe),ae=Oe(Ae(()=>q()?Ce:Ie)),y=Se({props:{transition:ae,visible:i,animated:s,animatedOnInit:t,onVisibleChange:a,onHidden:o,onShown:c}}),oe=y.stores.visible$,re=y.stores.hidden$;return{...we({...V,visible$:oe,hidden$:re,horizontal$:q}),patch:z,api:{open:y.api.show,close:y.api.hide,toggle:y.api.toggle},directives:{transitionDirective:ge(y.directives.directive)},actions:{}}}const Be=Ge;var Le=de("<div><!></div>");function st(e,t){le(t,!0);let s=pe(t,["$$slots","$$events","$$legacy","children"]);const i=ke({factory:Be,widgetName:"collapse",props:s}),a=i.api,{directives:{transitionDirective:o}}=i;ce(()=>i.patchChangedProps({...s}));var c=Le();let q;ue(()=>q=ve(c,q,{}));var V=be(c);return _e(V,()=>t.children),me(c,z=>o(z)),he(e,c),fe({api:a})}export{st as C};
