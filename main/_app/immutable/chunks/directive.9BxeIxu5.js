import{n as p,c as b,d as v,r as f,e as d,w as u,b as c,f as a}from"./stores.dQaqP47x.js";const S={status:"pending"},y=e=>{const t=typeof e;return t==="object"&&e!==null||t==="function"?typeof e.then=="function":!1},h=e=>{const t=u(S);return Promise.resolve(e).then(s=>t.set({status:"fulfilled",value:s}),s=>t.set({status:"rejected",reason:s})),c(t)},l=new WeakMap,T=e=>{if(!y(e))return f({status:"fulfilled",value:e});let t=l.get(e);return t||(t=h(e),l.set(e,t)),t},g=(e,t)=>Object.is(e,t)||e.status===t.status&&(e.status!=="fulfilled"||d(e.value,t.value))&&(e.status!=="rejected"||d(e.reason,t.reason)),w=e=>b(()=>T(e())(),{equal:g}),P=(e,t,s)=>v(e,{derive:(r,o)=>{r.status==="fulfilled"&&o(r.value)},equal:s},t),q=(e,t,s)=>P(w(e),t,s),O=(e,t)=>{let s;const r=new Promise(i=>s=i);let o=()=>{e.removeEventListener(t,n),o=p};const n=i=>{i.target===e&&(s(i),o())};return e.addEventListener(t,n),{promise:r,unsubscribe(){o()}}},x=e=>{let t;return{promise:new Promise(s=>{t=setTimeout(()=>{t=void 0,s()},e)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}},L=()=>{let e;return{promise:new Promise(s=>{e=s}),resolve:e}};f(void 0);const W=(e,t=!0)=>()=>{const s=e.subscribe(p);return{destroy:async()=>{t&&await 0,s()}}},$=e=>(t,s)=>(e(s),{update:e}),m={equal:Object.is},k=()=>{const e=u([],m);return c(e,{register:t=>{let s=!1;return e.update(r=>[...r,t]),()=>{s||(s=!0,e.update(r=>{const o=r.indexOf(t);if(o>-1){const n=[...r];return n.splice(o,1),n}return r}))}}})},D=()=>{const e=u(null,m);return{element$:c(e),directive:t=>{let s=!1;return e.update(r=>r?(console.error("The directive cannot be used on multiple elements.",r,t),r):(s=!0,t)),s?{destroy(){e.update(r=>t===r?null:r)}}:void 0}}},F=(...e)=>(t,s)=>{const r=a(()=>e.map(o=>o(t,s)));return{update(o){a(()=>r.forEach(n=>n?.update?.(o)))},destroy(){a(()=>r.reverse().forEach(o=>o?.destroy?.()))}}};export{x as a,q as b,D as c,W as d,L as e,$ as f,F as m,O as p,k as r};
