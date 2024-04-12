import{w as Pe,c as a,o as ke,a as Se,s as _e,b as Re}from"./stores-bzJrTsnV.js";import{p as F,m as W,c as D}from"./directive-DDb3YD5o-DXG-hRS2.js";import{g as te,e as ee,h as Ee,t as $,a as U}from"./writables-DoU_XYTX-CBor1g6-.js";import{c as Ne}from"./resizeObserver-DvH5eCkx.js";const ze=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function X(s){var c;const d=(""+s).match(ze);return Math.max(0,(((c=d[1])==null?void 0:c.length)??0)-(+d[2]||0))}const Y={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:s=>""+s,ariaValueText:s=>""+s,onValuesChange:Re,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1,slotStructure:void 0,slotLabel:({value:s})=>""+s,slotHandle:void 0},He={min:ee,max:ee,stepSize:Ee(0,1/0,{strict:!0}),readonly:$,disabled:$,vertical:$,ariaLabelHandle:U,ariaValueText:U,onValuesChange:U,values:te,showValueLabels:$,showMinMaxLabels:$,rtl:$},Oe=(s,c,d,v,o)=>{const y=Math.pow(10,o);if(s>=d)return d;if(s<=c)return c;const _=Math.floor((s-c)*y/v);return+(((s-c)*y%v<v/2?_:_+1)*v/y+c).toFixed(o)},N=(s,c,d,v)=>{c.update(o=>(o=[...o],o[s]=o[s]+d*v,o))},z=(s,c,d)=>s&&c?d?1:-1:s&&!c?-1:!s&&c?d?-1:1:!s&&!c?-1:1,b=s=>s!=null?`${s}%`:"";function Te(s){const[{min$:c,max$:d,stepSize$:v,rtl$:o,values$:y,ariaLabelHandle$:_,ariaValueText$:ae,onValuesChange$:ie,showValueLabels$:H,showMinMaxLabels$:O,...T},re]=Pe(Y,s,He),{vertical$:n,disabled$:V,readonly$:C}=T;let R=-1;const g=a(()=>{const e=c(),t=d();return e===t?Y.min:Math.min(e,t)}),L=a(()=>{const e=c(),t=d();return e===t?Y.max:Math.max(e,t)}),G=a(()=>Math.max(X(v()),X(g()),X(L()))),le=a(()=>v()*Math.pow(10,G())),m=ke(y,ie,e=>{const t=g(),i=L(),l=le(),r=G();return e.map(u=>Oe(u,t,i,l,r))},te.equal),{directive:se,element$:ne}=F(),{directive:oe,element$:ce}=F(),{directive:ue,element$:de}=F(),{directive:me,dimensions$:A}=Ne(),M=Se({}),E=a(()=>{var e;return A(),M(),((e=ne())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),be=a(()=>{var e;return A(),M(),((e=ce())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),ve=a(()=>{var e;return A(),M(),((e=de())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),fe=a(()=>n()?E().top:E().left),B=a(()=>n()?E().height:E().width),J=a(()=>[...m()].sort((e,t)=>e-t)),pe=a(()=>m().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),he=a(()=>{const e=_(),t=ae();return pe().map((i,l)=>({...i,ariaLabel:e(i.value,l,i.id),ariaValueText:t(i.value,l,i.id)}))}),w=a(()=>m().map(e=>$e(e))),j=a(()=>[...w()].sort((e,t)=>e-t)),ge=a(()=>be().width/B()*100),De=a(()=>ve().width/B()*100),K=a(()=>{if(O()){if(!H())return!0}else return!1;const e=ge();return o()?!w().some(t=>100-t>100-e-1):!w().some(t=>t<e+1)}),Q=a(()=>{if(O()){if(!H())return!0}else return!1;const e=De();return o()?!w().some(t=>100-t<e+1):!w().some(t=>t>100-e-1)}),Le=a(()=>{const e=m();return e.length==2&&Math.abs(e[0]-e[1])<10}),x=a(()=>!V()&&!C()),Z=a(()=>{const e=j(),t=(e[0]+e[1])/2;return n()||e.length!=2?0:o()?100-t:t}),I=a(()=>{const e=j(),t=100-(e[0]+e[1])/2;return n()&&e.length==2?o()?100-t:t:0}),P=a(()=>{const e=n(),t=o();return w().map((i,l)=>({left:t?e?null:100-i:e?null:i,top:t?e?i:null:e?100-i:null}))}),we=a(()=>{const e=n(),t=j(),i=o();return t.length===1?[{left:e||i?null:0,right:e?null:i?0:null,bottom:e?i?null:0:null,top:e&&i?0:null,width:e?100:t[0],height:e?t[0]:100}]:t.map((l,r,u)=>({left:e||i?null:l,right:e?null:i?u[r]:null,bottom:e?i?null:l:null,top:e&&i?u[r]:null,width:e?100:r===u.length-1?l:u[r+1]-l,height:e?r===u.length-1?l:u[r+1]-l:100})).slice(0,t.length-1)}),$e=e=>{const t=g();return(e-t)*100/(L()-t)},ye=e=>{const t=m();if(t.length===1)return 0;const i=J(),l=i.find(p=>p>e*100),r=l?i.indexOf(l):i.length-1,u=i[r-1]+(i[r]-i[r-1])/2,S=i[e*100<=u?r-1:r];return t.indexOf(S)},q=(e,t)=>{if(x()){const i=B(),l=fe();let r=n()?(i-e+l)/i:(e-l)/i;r=o()?1-r:r;const u=t??ye(r),S=r*(L()-g())+g();m.update(p=>(p=[...p],p[u]=S,p))}},f=a(()=>!n()),Ve=D(()=>({attributes:{"aria-disabled":a(()=>V()?"true":void 0),class:T.className$},classNames:{"au-slider":!0,"au-slider-vertical":n,"au-slider-horizontal":f,disabled:V}})),Me=D(()=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-min":n,"au-slider-label":f,"au-slider-label-min":f,"au-slider-rtl":o,invisible:a(()=>!K())}})),xe=D(()=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-max":n,"au-slider-label":f,"au-slider-label-max":f,"au-slider-rtl":o,invisible:a(()=>!Q())}})),k={..._e({min$:g,max$:L,stepSize$:v,values$:m,sortedValues$:J,sortedHandles$:he,minValueLabelDisplay$:K,maxValueLabelDisplay$:Q,combinedLabelDisplay$:Le,interactive$:x,combinedLabelPositionLeft$:Z,combinedLabelPositionTop$:I,progressDisplayOptions$:we,handleDisplayOptions$:P,showValueLabels$:H,showMinMaxLabels$:O,rtl$:o,...T}),patch:re,api:{},directives:{sliderDirective:W(se,me,Ve),progressDisplayDirective:D(e=>({styles:{left:a(()=>b(e().option.left)),right:a(()=>b(e().option.right)),top:a(()=>b(e().option.top)),bottom:a(()=>b(e().option.bottom)),width:a(()=>b(e().option.width)),height:a(()=>b(e().option.height))},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:D(()=>({events:{click:e=>k.actions.click(e)},classNames:{"au-slider-clickable-area":f,"au-slider-clickable-area-vertical":n}})),handleDirective:D(e=>({events:{keydown:t=>k.actions.keydown(t,e().item.id),mousedown:t=>k.actions.mouseDown(t,e().item.id),touchstart:t=>k.actions.touchStart(t,e().item.id)},attributes:{role:"slider","aria-valuemin":g,"aria-valuemax":L,"aria-valuenow":a(()=>e().item.value),"aria-valuetext":a(()=>e().item.ariaValueText),"aria-label":a(()=>e().item.ariaLabel),"aria-orientation":a(()=>n()?"vertical":void 0),"aria-disabled":a(()=>V()?"true":void 0),disabled:V,"aria-readonly":a(()=>C()?"true":void 0)},styles:{left:a(()=>b(P()[e().item.id].left)),top:a(()=>b(P()[e().item.id].top))},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":n,"au-slider-handle-horizontal":f}})),minLabelDirective:W(oe,Me),maxLabelDirective:W(ue,xe),combinedHandleLabelDisplayDirective:D(()=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-now":n,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(Z())),top:a(()=>b(I()))}})),handleLabelDisplayDirective:D(e=>({classNames:{"au-slider-label-vertical":n,"au-slider-label-vertical-now":n,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(P()[e().index].left)),top:a(()=>b(P()[e().index].top))}}))},actions:{click(e){q(n()?e.clientY:e.clientX)},keydown(e,t){const{key:i}=e,l=o(),r=v(),u=g(),S=L(),p=n();if(x()){switch(i){case"ArrowDown":N(t,m,r,z(p,l,!0));break;case"ArrowLeft":N(t,m,r,z(p,l,!1));break;case"ArrowUp":N(t,m,r,-1*z(p,l,!0));break;case"ArrowRight":N(t,m,r,-1*z(p,l,!1));break;case"Home":m.update(h=>(h=[...h],h[t]=u,h));break;case"End":m.update(h=>(h=[...h],h[t]=S,h));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,t){e.preventDefault();const i=e.target,l=r=>{r.preventDefault();const u=n()?r.clientY:r.clientX;i.focus(),R!==u&&(R=u,q(u,t))};x()&&(M.set({}),i.focus(),document.addEventListener("mousemove",l),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",l)},{once:!0}))},touchStart(e,t){e.preventDefault();const i=l=>{l.preventDefault();const r=n()?l.touches[0].clientY:l.touches[0].clientX;e.target.focus(),R!==r&&(R=r,q(r,t))};x()&&(M.set({}),e.target.focus(),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchcancel",i)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchend",i)},{once:!0}))}}};return k}const Fe=Te;export{Fe as c};