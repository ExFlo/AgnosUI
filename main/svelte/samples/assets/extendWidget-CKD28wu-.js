import{ab as u,al as b}from"./AppCommon-D_B8a5G6.js";import{u as h,v as x,s as P}from"./directive-CKEccryv-BAfxyCuh.js";const w=(l,p,f,a)=>t=>{const r=h(p,t,f),e=t==null?void 0:t.config,d=x(e)?u(()=>({...a,...e()})):{...a,...e??{}},o=l({props:t==null?void 0:t.props,config:d});return{...o,...P({...o.stores,...r}),patch:m=>b(()=>{let s;for(const[c,i]of Object.entries(m??{})){const n=r[`${c}$`];n?n.set(i):(s||(s={}),s[c]=i)}s&&o.patch(s)})}};export{w as e};
