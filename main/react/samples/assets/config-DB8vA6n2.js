import{j as f,r as n}from"./index-BFPvNuqQ.js";import{w as x,i as d,c as W,d as y}from"./func-BRtNsj1u.js";import{u as j}from"./widget-BgflldE_.js";import{a as h}from"./stores-B3KeH2wz.js";const l=new WeakMap,F=t=>s=>f.jsx(f.Fragment,{children:t(s)}),S=t=>{let e=l.get(t);return e||(e=F(t),l.set(t,e)),e},b=t=>t.prototype instanceof n.Component,O=({slotContent:t,props:e})=>{if(typeof t=="function"){const o=b(t)?t:S(t);return f.jsx(o,{...e})}return f.jsx(f.Fragment,{children:t})},a=(t,e,s=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&s>=1)for(const o of Object.keys(e))Object.prototype.hasOwnProperty.call(e,o)&&(o==="__proto__"||o==="constructor"||(t[o]=a(t[o]??{},e[o],s-1)));else return e;return t},C=(t,e=d)=>{const s=x({}),o=e===d?t:W(()=>e(a({},t==null?void 0:t(),2)));return y(W(()=>a(a({},o==null?void 0:o(),2),s(),2)),{...s,own$:s,adaptedParent$:o,parent$:t})},_=(t=n.createContext(void 0))=>{const e=(i,c)=>{const r=n.useContext(t),u=h(c);return n.useMemo(()=>W(()=>({...u(),...i?r==null?void 0:r()[i]:void 0})),[r])};return{widgetsConfigContext:t,useWidgetContext:e,useWidgetWithConfig:(i,c,r,u)=>j(i,c,{config:e(r,u)}),WidgetsDefaultConfig:({children:i,adaptParentConfig:c,...r})=>{const u=n.useContext(t);let p=!1;const g=n.useMemo(()=>{const m=C(u,c);return m.set(r),p=!0,m},[u,c]);return n.useEffect(()=>{p||g.set(r)},[r]),f.jsx(t.Provider,{value:g,children:i})}}},{widgetsConfigContext:R,WidgetsDefaultConfig:w,useWidgetContext:I,useWidgetWithConfig:v}=_();export{O as S,w as W,v as u};