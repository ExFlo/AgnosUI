import{ac as l,ae as m,Y as p,af as u,ai as f,ab as b}from"./AppCommon-Cm-6NtnE.js";import{h as a}from"./directive-CKEccryv-gyIcW13B.js";const d={status:"pending"},S=e=>{const t=typeof e;return t==="object"&&e!==null||t==="function"?typeof e.then=="function":!1},v=e=>{const t=f(d);return Promise.resolve(e).then(s=>t.set({status:"fulfilled",value:s}),s=>t.set({status:"rejected",reason:s})),b(t)},c=new WeakMap,P=e=>{if(!S(e))return p({status:"fulfilled",value:e});let t=c.get(e);return t||(t=v(e),c.set(e,t)),t},T=(e,t)=>Object.is(e,t)||e.status===t.status&&(e.status!=="fulfilled"||u(e.value,t.value))&&(e.status!=="rejected"||u(e.reason,t.reason)),h=e=>l(()=>P(e())(),{equal:T}),w=(e,t,s)=>m(e,{derive:(i,o)=>{i.status==="fulfilled"&&o(i.value)},equal:s},t),y=(e,t,s)=>w(h(e),t,s),g=e=>!!e,E=(e,t=g)=>{let s;const i=new Promise(r=>s=r);let o=()=>{n(),o=a},n=a;return n=e.subscribe(r=>{t(r)&&(s(r),o())}),o===a&&n(),{promise:i,unsubscribe(){o()}}},F=(e,t)=>{let s;const i=new Promise(r=>s=r);let o=()=>{e.removeEventListener(t,n),o=a};const n=r=>{r.target===e&&(s(r),o())};return e.addEventListener(t,n),{promise:i,unsubscribe(){o()}}},L=e=>{let t;return{promise:new Promise(s=>{t=setTimeout(()=>{t=void 0,s()},e)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}},V=()=>{let e;return{promise:new Promise(s=>{e=s}),resolve:e}};export{F as a,L as b,y as c,E as d,V as p};
