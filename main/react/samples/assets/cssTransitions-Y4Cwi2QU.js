import{j as m}from"./directive-CGjTRxRh-C_4hKweU.js";import{b}from"./stores-B4F_j8QF.js";import{b as c,c as d}from"./promise-CY2U8bTP-B6m5TA-Q.js";function f(t){return window.getComputedStyle(t).transitionProperty!=="none"}function w(t){const{transitionDelay:o,transitionDuration:i}=window.getComputedStyle(t),r=parseFloat(o),n=parseFloat(i);return(r+n)*1e3}const F=t=>async(o,i,r,n,u)=>{const p=t(o,i,r,u)??b;if(m(o)&&r&&f(o)){const s=c(n,"abort"),a=c(o,"transitionend"),e=d(w(o));await Promise.race([s.promise,a.promise,e.promise]),s.unsubscribe(),a.unsubscribe(),e.unsubscribe()}n.aborted||p()};export{F as c};
