import{I as g,H as i,a7 as m,G as p,F as C}from"./AppCommon-B0o63QXa.js";import{i as y}from"./func-DR0n-ShK-fOTgS_tI.js";import{a as W,f as h}from"./stores-Dsairave.js";const d=(t,e,o=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&o>=1)for(const n of Object.keys(e))Object.prototype.hasOwnProperty.call(e,n)&&(n==="__proto__"||n==="constructor"||(t[n]=d(t[n]??{},e[n],o-1)));else return e;return t},S=(t,e=y)=>{const o=g({}),n=e===y?t:i(()=>e(d({},t==null?void 0:t(),2)));return m(i(()=>d(d({},n==null?void 0:n(),2),o(),2)),{...o,own$:o,adaptedParent$:n,parent$:t})},F=Symbol("useSvelteSlot");function j(t,e){return o=>{const n=h(t,o);t=o,n&&e(n)}}const v=(t,e)=>e?(...o)=>{t(...o),e(...o)}:t,x=(t,e)=>{const o=g(e,{equal:Object.is});return m(i(()=>v(t,o())),{set:o.set,update:o.update})},O=({factory:t,$$slots:e,defaultConfig:o,widgetConfig:n,events:r,$$props:s})=>{const c=W(o),l={};for(const[a,b]of Object.entries(e))b&&(l[`slot${a[0].toUpperCase()}${a.substring(1)}`]=F);const f={...s};for(const a of Object.keys(r))f[a]=x(r[a],s[a]);const u=t({config:i(()=>({...c(),...n==null?void 0:n(),...l})),props:f});return{...u,patchChangedProps:j(s,u.patch)}},$=t=>typeof t=="function"&&!!t.prototype&&(t.prototype.$set||/^Proxy</.test(t.name))||typeof(t==null?void 0:t.render)=="function",P=(t=Symbol("widgetsConfig"))=>{const e=r=>{const s=p(t),c=S(s,r);return C(t,c),c},o=r=>{const s=p(t);return i(()=>s==null?void 0:s()[r])};return{widgetsDefaultConfigKey:t,createWidgetsDefaultConfig:e,getContextWidgetConfig:o,callWidgetFactory:({factory:r,widgetName:s=null,$$slots:c,defaultConfig:l={},events:f,$$props:u})=>O({factory:r,$$slots:c,defaultConfig:l,widgetConfig:s?o(s):null,events:f,$$props:u})}},{widgetsDefaultConfigKey:q,createWidgetsDefaultConfig:E,getContextWidgetConfig:G,callWidgetFactory:H}=P();export{E as a,H as c,$ as i,F as u};