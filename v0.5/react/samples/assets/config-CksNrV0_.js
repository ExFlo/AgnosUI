import{r as u,j as C}from"./App-DzjsJVPi.js";import{f as m,i as l,g,h as x}from"./directive-CKEccryv-BrWl76X8.js";import{u as y}from"./widget-DaA-pe23-BBb8HF9F.js";import{a as v}from"./stores-B90XF8Sy-C-A2iTqV.js";const c=(t,e,i=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&i>=1){t||(t={});for(const o of Object.keys(e))Object.prototype.hasOwnProperty.call(e,o)&&(o==="__proto__"||o==="constructor"||(t[o]=c(t[o],e[o],i-1)))}else return e;return t},h=(t,e=l)=>{const i=m({}),o=e===l?t:g(()=>e(c({},t==null?void 0:t(),2)));return x(g(()=>c(c({},o==null?void 0:o(),2),i(),2)),{...i,own$:i,adaptedParent$:o,parent$:t})},j=(t=u.createContext(void 0))=>{const e=(n,r)=>{const s=u.useContext(t),f=v(r);return u.useMemo(()=>g(()=>({...f(),...n?s==null?void 0:s()[n]:void 0})),[s])};return{widgetsConfigContext:t,useWidgetContext:e,useWidgetWithConfig:(n,r,s,f)=>y(n,r,{config:e(s,f)}),WidgetsDefaultConfig:({children:n,adaptParentConfig:r,...s})=>{const f=u.useContext(t);let d=!1;const W=u.useMemo(()=>{const a=h(f,r);return a.set(s),d=!0,a},[f,r]);return u.useEffect(()=>{d||W.set(s)},[s]),C.jsx(t.Provider,{value:W,children:n})}}},{widgetsConfigContext:_,WidgetsDefaultConfig:E,useWidgetContext:O,useWidgetWithConfig:k}=j();export{k as u,j as w};
