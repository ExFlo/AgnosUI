import{e as i,n as c}from"./func-BRtNsj1u.js";import{e as d}from"./directive-BGb3KH8X.js";const u=()=>{const{element$:n,directive:t}=d();return{dimensions$:i(n,(r,s)=>{if(r===null)return c;const e=new ResizeObserver(o=>{s(o[0])});return e.observe(r),()=>e==null?void 0:e.disconnect()},void 0),directive:t}};export{u as c};