import{C as P,D as L,E as U,R as A}from"./chunk-GDIIEU3W.js";import{Y as M}from"./chunk-AWWQU5ES.js";import"./chunk-RIDGTTAP.js";import{$a as C,Cb as r,Db as m,Ja as u,Jb as F,La as o,Mb as E,Sa as d,Za as g,_ as v,a as _,ab as f,b as x,d as S,hb as h,ib as T,jb as y,kb as w,lb as l,mb as a,nb as I,qb as k,rb as p}from"./chunk-DKG3CSSF.js";function D(n,e){let t;return(...i)=>{t&&clearTimeout(t),t=setTimeout(()=>{n(...i)},e)}}var N=n=>{let e;return(...t)=>(e?.abort(),e=new AbortController,n(e.signal,...t))};var R=(n,e)=>[n,e];function W(n,e){if(n&1&&(l(0,"a",5),r(1),a(),I(2,"button",6)),n&2){let t=e.itemContext,i=e.directives,c=p();C("href",c.basePageUrl+t.item.pageid,u),o(),m(t.item.title),o(),f("auUse",E(3,R,i.badgeCloseButtonDirective,t))}}function B(n,e){if(n&1&&(l(0,"div",4),r(1),a(),l(2,"div",7),r(3),a()),n&2){let t=e.itemContext;o(),m(t.item.title),o(2),m(t.item.snippet)}}function H(n,e){if(n&1&&(l(0,"a",8),r(1),a()),n&2){let t=e.$implicit,i=p(2);C("href",i.basePageUrl+t.pageid,u),o(),m(t.title)}}function O(n,e){if(n&1&&y(0,H,2,2,"a",8,T),n&2){let t=p();w(t.selected())}}function z(n,e){n&1&&r(0," none ")}var q=new Intl.Collator("en").compare;function j(n){let e=document.createElement("div");return e.innerHTML=n,e.innerText}var b=class n{constructor(){this.basePageUrl="https://en.wikipedia.org/?curid=";this.items=d([]);this.selected=d([]);this.onFilterTextChange=D(N((e,t)=>S(this,null,function*(){let c=yield(yield fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+t,{signal:e})).json();this.items.set(c.query?.search.map(s=>x(_({},s),{snippet:j(s.snippet)}))??[])})),200)}itemIdFn(e){return"page-"+e.pageid}navSelector(e){return e.querySelectorAll("a,button,input")}onSelectedChange(e){this.selected.set((e||[]).sort((t,i)=>q(t.title,i.title)))}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["ng-component"]],standalone:!0,features:[F],decls:8,vars:4,consts:[[1,"custom-select","my-auto","mb-3"],["auSelect","","auBadgeClassName","badge text-bg-light d-flex align-items-center",3,"auFilterTextChange","auSelectedChange","auItems","auItemIdFn","auNavSelector"],["auSelectBadgeLabel",""],["auSelectItemLabel",""],[1,"fw-bold"],["target","_blank","rel","noreferrer"],["type","button","aria-label","Close",1,"btn-close","ms-1","wiki-btn-close",3,"auUse"],[1,"text-wrap","wiki-desc"],[1,"pe-2"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),k("auFilterTextChange",function(s){return i.onFilterTextChange(s)})("auSelectedChange",function(s){return i.onSelectedChange(s)}),g(2,W,3,6,"ng-template",2)(3,B,4,2,"ng-template",3),a(),l(4,"span",4),r(5,"Selection: "),a(),g(6,O,2,0)(7,z,1,0),a()),t&2&&(o(),f("auItems",i.items())("auItemIdFn",i.itemIdFn)("auNavSelector",i.navSelector),o(5),h(i.selected.length?6:7))},dependencies:[A,U,P,L,M],styles:[".custom-select[_ngcontent-%COMP%]{max-width:500px;height:400px}.au-select[_ngcontent-%COMP%]   .wiki-desc[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-moz-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2}.wiki-btn-close[_ngcontent-%COMP%]{font-size:10px}"]})}};export{b as default};
