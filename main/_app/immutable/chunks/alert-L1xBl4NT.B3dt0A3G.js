import{g as p,c as g}from"./common-DiT2qefC.BjiEbEuS.js";import{c as u,b as d,d as b}from"./stores.BTSUJW2z.js";import{a as C}from"./baseTransitions.BQJRFivv.js";const h=(c,f,l)=>r=>{const o=u(f,r,l),e=c(r);return{...e,...d({...e.stores,...o}),patch:m=>b(()=>{let t;for(const[a,s]of Object.entries(m??{})){const n=o[`${a}$`];n?n.set(s):(t||(t={}),t[a]=s)}t&&e.patch(t)})}},i={type:"primary"},x={type:C};function P(){return{...p(),...i}}const w=h(g,i,x);export{w as c,P as g};