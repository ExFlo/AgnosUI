import{a7 as a,ab as Pe}from"./AppCommon-C1X_0L7p.js";import{w as ke,B as _e,C as F,s as Re,e as W,g as D,j as Ee}from"./directive-DCYlDznf-BLyioqVS.js";import{g as te,d as ee,h as Se,t as $,b as U}from"./writables-DoU_XYTX-gpfTGoGn.js";import{c as Ne}from"./resizeObserver-DIeBqtPn.js";const ze=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function X(n){var c;const d=(""+n).match(ze);return Math.max(0,(((c=d[1])==null?void 0:c.length)??0)-(+d[2]||0))}const Y={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:n=>""+n,ariaValueText:n=>""+n,onValuesChange:Ee,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1},He={min:ee,max:ee,stepSize:Se(0,1/0,{strict:!0}),readonly:$,disabled:$,vertical:$,ariaLabelHandle:U,ariaValueText:U,onValuesChange:U,values:te,showValueLabels:$,showMinMaxLabels:$,rtl:$},Oe=(n,c,d,v,o)=>{const y=Math.pow(10,o);if(n>=d)return d;if(n<=c)return c;const R=Math.floor((n-c)*y/v);return+(((n-c)*y%v<v/2?R:R+1)*v/y+c).toFixed(o)},N=(n,c,d,v)=>{c.update(o=>(o=[...o],o[n]=o[n]+d*v,o))},z=(n,c,d)=>n&&c?d?1:-1:n&&!c?-1:!n&&c?d?-1:1:!n&&!c?-1:1,b=n=>n!=null?`${n}%`:"";function qe(n){const[{min$:c,max$:d,stepSize$:v,rtl$:o,values$:y,ariaLabelHandle$:R,ariaValueText$:ae,onValuesChange$:ie,showValueLabels$:H,showMinMaxLabels$:O,...B},re]=ke(Y,n,He),{vertical$:l,disabled$:V,readonly$:C}=B;let E=-1;const g=a(()=>{const e=c(),t=d();return e===t?Y.min:Math.min(e,t)}),L=a(()=>{const e=c(),t=d();return e===t?Y.max:Math.max(e,t)}),G=a(()=>Math.max(X(v()),X(g()),X(L()))),se=a(()=>v()*Math.pow(10,G())),m=_e(y,ie,e=>{const t=g(),i=L(),s=se(),r=G();return e.map(u=>Oe(u,t,i,s,r))},te.equal),{directive:le,element$:ne}=F(),{directive:oe,element$:ce}=F(),{directive:ue,element$:de}=F(),{directive:me,dimensions$:T}=Ne(),M=Pe({}),S=a(()=>{var e;return T(),M(),((e=ne())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),be=a(()=>{var e;return T(),M(),((e=ce())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),ve=a(()=>{var e;return T(),M(),((e=de())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),fe=a(()=>l()?S().top:S().left),A=a(()=>l()?S().height:S().width),J=a(()=>[...m()].sort((e,t)=>e-t)),pe=a(()=>m().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),he=a(()=>{const e=R(),t=ae();return pe().map((i,s)=>({...i,ariaLabel:e(i.value,s,i.id),ariaValueText:t(i.value,s,i.id)}))}),w=a(()=>m().map(e=>$e(e))),j=a(()=>[...w()].sort((e,t)=>e-t)),ge=a(()=>be().width/A()*100),De=a(()=>ve().width/A()*100),K=a(()=>{if(O()){if(!H())return!0}else return!1;const e=ge();return o()?!w().some(t=>100-t>100-e-1):!w().some(t=>t<e+1)}),Q=a(()=>{if(O()){if(!H())return!0}else return!1;const e=De();return o()?!w().some(t=>100-t<e+1):!w().some(t=>t>100-e-1)}),Le=a(()=>{const e=m();return e.length==2&&Math.abs(e[0]-e[1])<10}),x=a(()=>!V()&&!C()),Z=a(()=>{const e=j(),t=(e[0]+e[1])/2;return l()||e.length!=2?0:o()?100-t:t}),I=a(()=>{const e=j(),t=100-(e[0]+e[1])/2;return l()&&e.length==2?o()?100-t:t:0}),P=a(()=>{const e=l(),t=o();return w().map((i,s)=>({left:t?e?null:100-i:e?null:i,top:t?e?i:null:e?100-i:null}))}),we=a(()=>{const e=l(),t=j(),i=o();return t.length===1?[{left:e||i?null:0,right:e?null:i?0:null,bottom:e?i?null:0:null,top:e&&i?0:null,width:e?100:t[0],height:e?t[0]:100}]:t.map((s,r,u)=>({left:e||i?null:s,right:e?null:i?u[r]:null,bottom:e?i?null:s:null,top:e&&i?u[r]:null,width:e?100:r===u.length-1?s:u[r+1]-s,height:e?r===u.length-1?s:u[r+1]-s:100})).slice(0,t.length-1)}),$e=e=>{const t=g();return(e-t)*100/(L()-t)},ye=e=>{const t=m();if(t.length===1)return 0;const i=J(),s=i.find(p=>p>e*100),r=s?i.indexOf(s):i.length-1,u=i[r-1]+(i[r]-i[r-1])/2,_=i[e*100<=u?r-1:r];return t.indexOf(_)},q=(e,t)=>{if(x()){const i=A(),s=fe();let r=l()?(i-e+s)/i:(e-s)/i;r=o()?1-r:r;const u=t??ye(r),_=r*(L()-g())+g();m.update(p=>(p=[...p],p[u]=_,p))}},f=a(()=>!l()),Ve=D(()=>({attributes:{"aria-disabled":a(()=>V()?"true":void 0),class:B.className$},classNames:{"au-slider":!0,"au-slider-vertical":l,"au-slider-horizontal":f,disabled:V}})),Me=D(()=>({classNames:{"au-slider-label-vertical":l,"au-slider-label-vertical-min":l,"au-slider-label":f,"au-slider-label-min":f,"au-slider-rtl":o,invisible:a(()=>!K())}})),xe=D(()=>({classNames:{"au-slider-label-vertical":l,"au-slider-label-vertical-max":l,"au-slider-label":f,"au-slider-label-max":f,"au-slider-rtl":o,invisible:a(()=>!Q())}})),k={...Re({min$:g,max$:L,stepSize$:v,values$:m,sortedValues$:J,sortedHandles$:he,minValueLabelDisplay$:K,maxValueLabelDisplay$:Q,combinedLabelDisplay$:Le,interactive$:x,combinedLabelPositionLeft$:Z,combinedLabelPositionTop$:I,progressDisplayOptions$:we,handleDisplayOptions$:P,showValueLabels$:H,showMinMaxLabels$:O,rtl$:o,...B}),patch:re,api:{},directives:{sliderDirective:W(le,me,Ve),progressDisplayDirective:D(e=>({styles:{left:a(()=>b(e().option.left)),right:a(()=>b(e().option.right)),top:a(()=>b(e().option.top)),bottom:a(()=>b(e().option.bottom)),width:a(()=>b(e().option.width)),height:a(()=>b(e().option.height))},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:D(()=>({events:{click:e=>k.actions.click(e)},classNames:{"au-slider-clickable-area":f,"au-slider-clickable-area-vertical":l}})),handleDirective:D(e=>({events:{keydown:t=>k.actions.keydown(t,e().item.id),mousedown:t=>k.actions.mouseDown(t,e().item.id),touchstart:t=>k.actions.touchStart(t,e().item.id)},attributes:{role:"slider","aria-valuemin":g,"aria-valuemax":L,"aria-valuenow":a(()=>e().item.value),"aria-valuetext":a(()=>e().item.ariaValueText),"aria-label":a(()=>e().item.ariaLabel),"aria-orientation":a(()=>l()?"vertical":void 0),"aria-disabled":a(()=>V()?"true":void 0),disabled:V,"aria-readonly":a(()=>C()?"true":void 0)},styles:{left:a(()=>b(P()[e().item.id].left)),top:a(()=>b(P()[e().item.id].top))},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":l,"au-slider-handle-horizontal":f}})),minLabelDirective:W(oe,Me),maxLabelDirective:W(ue,xe),combinedHandleLabelDisplayDirective:D(()=>({classNames:{"au-slider-label-vertical":l,"au-slider-label-vertical-now":l,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(Z())),top:a(()=>b(I()))}})),handleLabelDisplayDirective:D(e=>({classNames:{"au-slider-label-vertical":l,"au-slider-label-vertical-now":l,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(P()[e().index].left)),top:a(()=>b(P()[e().index].top))}}))},actions:{click(e){q(l()?e.clientY:e.clientX)},keydown(e,t){const{key:i}=e,s=o(),r=v(),u=g(),_=L(),p=l();if(x()){switch(i){case"ArrowDown":N(t,m,r,z(p,s,!0));break;case"ArrowLeft":N(t,m,r,z(p,s,!1));break;case"ArrowUp":N(t,m,r,-1*z(p,s,!0));break;case"ArrowRight":N(t,m,r,-1*z(p,s,!1));break;case"Home":m.update(h=>(h=[...h],h[t]=u,h));break;case"End":m.update(h=>(h=[...h],h[t]=_,h));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,t){e.preventDefault();const i=e.target,s=r=>{r.preventDefault();const u=l()?r.clientY:r.clientX;i.focus(),E!==u&&(E=u,q(u,t))};x()&&(M.set({}),i.focus(),document.addEventListener("mousemove",s),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",s)},{once:!0}))},touchStart(e,t){e.preventDefault();const i=s=>{s.preventDefault();const r=l()?s.touches[0].clientY:s.touches[0].clientX;e.target.focus(),E!==r&&(E=r,q(r,t))};x()&&(M.set({}),e.target.focus(),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchcancel",i)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchend",i)},{once:!0}))}}};return k}export{qe as c};
