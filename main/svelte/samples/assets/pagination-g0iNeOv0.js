import{G as r}from"./AppCommon-NgCdTdCo.js";import{w as C,c as F,s as S,I as v}from"./stores-exy7-RvQ.js";import{d as x,e as c,t as g,a as b,b as i,i as h}from"./writables-gvqJIzCo.js";import{n as A}from"./func-tK0QDe5R.js";const L={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:A,pagesFactory:(e,o)=>{const l=[];for(let n=1;n<=o;n++)l.push(n);return l},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(e,o)=>`Page ${e} of ${o}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",className:"",slotEllipsis:"…",slotFirst:"«",slotPrevious:"‹",slotNext:"›",slotLast:"»",slotPages:void 0,slotNumberLabel:({displayedPage:e})=>`${e}`};function _(){return{...L}}const D={page:c,collectionSize:c,pageSize:c,disabled:g,directionLinks:g,boundaryLinks:g,size:{normalizeValue:e=>e==="lg"||e==="sm"||e===null?e:v},onPageChange:b,pagesFactory:b,ariaLabel:i,activeLabel:i,ariaPageLabel:b,ariaFirstLabel:i,ariaPreviousLabel:i,ariaNextLabel:i,ariaLastLabel:i,className:i};function B(e){const[{page$:o,collectionSize$:l,pageSize$:n,onPageChange$:d,pagesFactory$:f,ariaPageLabel$:P,...p},m]=C(L,e,D),s=r(()=>{let a=Math.ceil(l()/n());return(!h(a)||a<1)&&(a=1),a}),t=F(o,d,a=>x(a,s(),1)),u=r(()=>f()(t(),s())),$=r(()=>t()===s()||p.disabled$()),y=r(()=>t()===1||p.disabled$()),z=r(()=>{const a=P(),N=s();return u().map(k=>a(k,N))});return{...S({pageCount$:s,page$:t,pages$:u,nextDisabled$:$,previousDisabled$:y,pagesLabel$:z,...p}),patch:m,actions:{select(a){t.set(a)},first(){t.set(1)},previous(){t.update(a=>a-1)},next(){t.update(a=>a+1)},last(){t.set(s())}},api:{isEllipsis(a){return a===-1}},directives:{}}}export{B as c,_ as g};
