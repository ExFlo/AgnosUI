import{g as S,w}from"./chunk-TZPYKQGP.js";import"./chunk-3N3J2CGC.js";import{L as P,b as u,d as C}from"./chunk-6YJY4GWZ.js";import"./chunk-DXHK7RUN.js";import{Ib as h,Jb as f,Ma as p,Pb as v,Sa as l,X as g,hb as c,sb as a,tb as r,yb as m}from"./chunk-42V3TINI.js";var d=typeof window>"u"?u(""):u("",t=>{function e(){let i=location.hash;t(i?i.substring(1):"")}return window.addEventListener("hashchange",e),e(),()=>window.removeEventListener("hashchange",e)}),$=C(()=>{let t=d().split("#").at(-1);(!t||t.at(0)!=="{")&&(t="{}");let{config:e={},props:i={}}=JSON.parse(decodeURIComponent(t));return{config:e,props:i}});var N=(()=>{let e=class e{constructor(){this.hash=P(d),this.pageNumber=l(()=>+(this.hash().split("#")[1]??4)),this.pageLink=n=>`#${this.hash().split("#")[0]}#${n}`,this.pageChange=n=>location.hash=`#${this.hash().split("#")[0]}#${n}`}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["ng-component"]],standalone:!0,features:[v],decls:7,vars:3,consts:[["auPagination","","auCollectionSize","60","auBoundaryLinks","true","auAriaLabel","Page navigation with customized hrefs",3,"auPage","auPageLink","auPageChange"]],template:function(o,s){o&1&&(a(0,"p"),h(1,"A pagination with hrefs provided for each pagination element:"),r(),a(2,"p"),h(3," Page hash: "),a(4,"small"),h(5),r()(),a(6,"nav",0),m("auPageChange",function(y){return s.pageChange(y)}),r()),o&2&&(p(5),f("#"+s.hash()),p(),c("auPage",s.pageNumber())("auPageLink",s.pageLink))},dependencies:[w,S],encapsulation:2});let t=e;return t})();export{N as default};