import{n as m}from"./stores.ece10173.js";const d=(n,t)=>{let o;const i=new Promise(r=>o=r);let e=()=>{n.removeEventListener(t,s),e=m};const s=r=>{r.target===n&&(o(r),e())};return n.addEventListener(t,s),{promise:i,unsubscribe(){e()}}},b=n=>{let t;return{promise:new Promise(o=>{t=setTimeout(()=>{t=void 0,o()},n)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}};function p(n){return window.getComputedStyle(n).transitionProperty!=="none"}function f(n){const{transitionDelay:t,transitionDuration:o}=window.getComputedStyle(n),i=parseFloat(t),e=parseFloat(o);return(i+e)*1e3}const w=n=>async(t,o,i,e,s)=>{const r=n(t,o,i,s)??m;if(i&&p(t)){const a=d(e,"abort"),u=d(t,"transitionend"),c=b(f(t));await Promise.race([a.promise,u.promise,c.promise]),a.unsubscribe(),u.unsubscribe(),c.unsubscribe()}e.aborted||r()};function g(n=document.body){n.getBoundingClientRect()}const y=(n,t)=>{t&&t.length>0&&n.classList.add(...t)},v=(n,t)=>{t&&t.length>0&&n.classList.remove(...t)};export{y as a,g as b,w as c,v as r};
