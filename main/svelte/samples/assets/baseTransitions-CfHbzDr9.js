import{G as d,H as q,ab as Q,aa as G}from"./AppCommon-DYyriHmo.js";import{t as C,a as f,d as X}from"./writables-DoU_XYTX-DitVUiGE.js";import{a as N}from"./promise-CY2U8bTP-AyFFDeg3.js";import{a as m,w as Y,c as Z,s as F}from"./stores-C1NdtlUV.js";import{f as T,m as nn,d as en,h as tn}from"./directive-DwUkVgn3.js";const R=new Promise(m),on=async(b,h)=>{b.style.display=h==="show"?"":"none"},sn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:on,onShown:m,onHidden:m,onVisibleChange:m},ln={animated:C,animatedOnInit:C,visible:C,transition:f,onShown:f,onHidden:f,onVisibleChange:f,initDone:X},pn=b=>{const[{animated$:h,initDone$:$,visible$:c,transition$:U,onShown$:W,onHidden$:_,onVisibleChange$:j,animatedOnInit$:k},S]=Y(sn,b,ln),{element$:w,directive:z}=T(),A=d(()=>!!w()),u=Z(j,[c],([n])=>n),a=q(null),y=d(()=>!!a()),x=()=>{let n;return a.update(e=>(e==null||e.abort.abort(),n=e==null?void 0:e.context,null)),n},J=(n,e,s,i)=>G(()=>{const p=new AbortController,o=p.signal,l=x()??{},{promise:r,resolve:V}=N(),v={abort:p,animated:e,visible:n,context:l,element:s,transitionFn:i,promise:r};return a.set(v),V((async()=>{var E;try{await i(s,n?"show":"hide",e,o,l)}finally{o.aborted?await R:(a.set(null),(E=(n?W:_)())==null||E())}})()),v}),K=d(()=>!y()&&u()&&A()),L=d(()=>!y()&&!u()),H=d(()=>$()?h():k()),g=q(null);let O,P=c(),t=null;const I=Q([u,w,H,g,U,a],([n,e,s,i,p,o])=>{const l=O!==e;O=e;const r=P!==n;if(P=n,e){$()==null&&$.set(!0);const V=i!=null&&o&&o.animated!=i;if(l||r||V){(r||i!=null)&&(t=null);const v=i??(t==null?void 0:t.animated)??(l&&!n?!1:s);o=J(n,v,e,p),t==null||t.resolve(o.promise),t=null}}else l&&(x(),o=null),(r||n&&(t==null?void 0:t.animated)!==i)&&(t=n&&i!=null?{animated:i,...N()}:null);return(t==null?void 0:t.promise)??(o==null?void 0:o.promise)});let B={};const D=async(n=!c(),e=H())=>{const s={};B=s;try{await G(()=>{try{return g.set(e),c.set(n),I()}finally{g.set(null)}})}finally{B!==s&&await R}},M=nn(z,tn(S),en(I));return{...F({visible$:u,element$:w,elementPresent$:A,transitioning$:y,shown$:K,hidden$:L}),patch:S,directives:{directive:M},actions:{},api:{show:D.bind(null,!0),hide:D.bind(null,!1),toggle:D}}};export{pn as c};