import{F as l}from"./index-93n6bwsl.js";import{w as k,c as v,s as C,I as S}from"./stores-dvMhDENG.js";import{d as x,e as b,t as u,a as L,b as i,i as h}from"./writables-33ZGRyq0.js";import{n as A}from"./func-tK0QDe5R.js";const f={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:A,pagesFactory:(e,n)=>{const g=[];for(let r=1;r<=n;r++)g.push(r);return g},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(e,n)=>`Page ${e} of ${n}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",className:"",slotEllipsis:"…",slotFirst:"«",slotPrevious:"‹",slotNext:"›",slotLast:"»",slotPages:void 0,slotNumberLabel:({displayedPage:e})=>`${e}`};function _(){return{...f}}const D={page:b,collectionSize:b,pageSize:b,disabled:u,directionLinks:u,boundaryLinks:u,size:{normalizeValue:e=>e==="lg"||e==="sm"||e===null?e:S},onPageChange:L,pagesFactory:L,ariaLabel:i,activeLabel:i,ariaPageLabel:L,ariaFirstLabel:i,ariaPreviousLabel:i,ariaNextLabel:i,ariaLastLabel:i,className:i};function B(e){const[{page$:n,collectionSize$:g,pageSize$:r,onPageChange$:m,pagesFactory$:P,ariaPageLabel$:$,...p},t]=k(f,e,D),s=l(()=>{let a=Math.ceil(g()/r());return(!h(a)||a<1)&&(a=1),a}),o=v(m,[n,s],([a,c])=>x(a,c,1)),d=l(()=>P()(o(),s())),y=l(()=>o()===s()||p.disabled$()),z=l(()=>o()===1||p.disabled$()),F=l(()=>{const a=$(),c=s();return d().map(N=>a(N,c))});return{...C({pageCount$:s,page$:o,pages$:d,nextDisabled$:y,previousDisabled$:z,pagesLabel$:F,...p}),patch:t,actions:{select(a){t({page:a})},first(){t({page:1})},previous(){t({page:o()-1})},next(){t({page:o()+1})},last(){t({page:s()})}},api:{isEllipsis(a){return a===-1}},directives:{}}}export{B as c,_ as g};
