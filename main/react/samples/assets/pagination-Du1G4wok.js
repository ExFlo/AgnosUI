import{g as m,r as f,j as t}from"./index-DwQI96OA.js";import{c as h}from"./pagination-mwgsi84m.js";import{u as b}from"./config-B7C5ER0C.js";import{S as p}from"./slot-C6u581j2.js";import{t as v}from"./stores-F1H_Kvbu.js";const j=h;var x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var e={}.hasOwnProperty;function s(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=n(a,r(l)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return s.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)e.call(a,l)&&a[l]&&(i=n(i,l));return i}function n(a,i){return i?a?a+" "+i:a+i:a}o.exports?(s.default=s,o.exports=s):window.classNames=s})()})(x);var N=x.exports;const d=m(N),u=f.forwardRef(({disabled:o,active:e,ariaLabel:s,activeLabel:r,className:n,children:a,href:i,...l},g)=>t.jsx("li",{ref:g,"aria-current":e?"page":void 0,className:d("page-item",{active:e,disabled:o}),children:t.jsxs("a",{className:d("page-link",n),"aria-label":s||void 0,...l,href:i,tabIndex:o?-1:void 0,"aria-disabled":o||void 0,children:[a,e&&r&&t.jsx("span",{className:"visually-hidden",children:r})]})}));u.displayName="PageItem";const c=f.forwardRef(({children:o,...e},s)=>t.jsx(u,{...e,ref:s,children:t.jsx("span",{"aria-hidden":"true",children:o})}));c.displayName="NavButton";function L(o){const{widget:e,state:s}=o,r=[];for(let n=0;n<s.pages.length;n++)e.api.isEllipsis(s.pages[n])?r.push(t.jsx(c,{disabled:!0,tabIndex:-1,className:"au-ellipsis",children:t.jsx(p,{slotContent:s.slotEllipsis,props:o})},"Ellipsis"+n)):r.push(t.jsx(u,{className:"au-page",disabled:s.disabled,active:s.pages[n]===s.page,onClick:a=>e.actions.select(s.pages[n],a.nativeEvent),href:s.pagesHrefs[n],ariaLabel:s.pagesLabel[n],activeLabel:s.activeLabel,children:t.jsx(p,{slotContent:s.slotNumberLabel,props:{...o,displayedPage:s.pages[n]}})},s.pages[n]));return r.length?t.jsx(t.Fragment,{children:r}):null}const C={slotPages:L};function w(o){const[e,s]=b(j,o,"pagination",C),r={state:e,widget:v(s)},n=[],a=[];return e.boundaryLinks&&n.push(t.jsx(c,{className:"au-first",ariaLabel:e.ariaFirstLabel,href:e.pagesHrefs[0],onClick:i=>s.actions.first(i.nativeEvent),disabled:e.previousDisabled,children:t.jsx(p,{slotContent:e.slotFirst,props:r})},"first")),e.directionLinks&&n.push(t.jsx(c,{className:"au-previous",ariaLabel:e.ariaPreviousLabel,href:e.directionsHrefs.previous,onClick:i=>s.actions.previous(i.nativeEvent),disabled:e.previousDisabled,children:t.jsx(p,{slotContent:e.slotPrevious,props:r})},"prev")),e.directionLinks&&a.push(t.jsx(c,{className:"au-next",ariaLabel:e.ariaNextLabel,href:e.directionsHrefs.next,onClick:i=>s.actions.next(i.nativeEvent),disabled:e.nextDisabled,children:t.jsx(p,{slotContent:e.slotNext,props:r})},"next")),e.boundaryLinks&&a.push(t.jsx(c,{className:"au-last",ariaLabel:e.ariaLastLabel,href:e.pagesHrefs.at(-1),onClick:i=>s.actions.last(i.nativeEvent),disabled:e.nextDisabled,children:t.jsx(p,{slotContent:e.slotLast,props:r})},"last")),t.jsxs("nav",{"aria-label":e.ariaLabel,children:[t.jsxs("ul",{className:d("au-pagination","pagination",e.size?`pagination-${e.size}`:"",e.className),children:[n,t.jsx(p,{slotContent:e.slotPages,props:r}),a]}),t.jsx("div",{"aria-live":"polite",className:"visually-hidden",children:e.page&&`Current page is ${e.page}`})]})}export{w as P};