import{i as m,p as c,a as b}from"./app.Becy6EfT.js";import{n as d}from"./stores.QPCMo2Uh.js";function f(t){return window.getComputedStyle(t).transitionProperty!=="none"}function w(t){const{transitionDelay:o,transitionDuration:i}=window.getComputedStyle(t),n=parseFloat(o),r=parseFloat(i);return(n+r)*1e3}const D=t=>async(o,i,n,r,u)=>{const p=t(o,i,n,u)??d;if(m(o)&&n&&f(o)){const s=c(r,"abort"),a=c(o,"transitionend"),e=b(w(o));await Promise.race([s.promise,a.promise,e.promise]),s.unsubscribe(),a.unsubscribe(),e.unsubscribe()}r.aborted||p()};export{D as c};
