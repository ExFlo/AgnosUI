import{x as b,a9 as g,F as p,z as v,aj as h,ac as c,a6 as d}from"./AppCommon-CRrVgjjK.js";import{g as r}from"./pageFactory-BMdGxeJT-C3IOw3eu.js";import{g as n}from"./rating-C1UqlpFs-CyhIfgZT.js";import{c as m}from"./collapse-CVjUhnIz-Dz_PfDbj.js";import{f as $}from"./fade-uOobJKgw-CIJCYmNe.js";import{a as L}from"./config-D6r3EYnL.js";function D(a,e,t){var l=a,s=h,o;b(()=>{g(s,s=e())&&(o&&p(o),o=v(()=>t(l)))})}const i=c(()=>{let a=d().split("#").at(-1);(!a||a.at(0)!=="{")&&(a="{}");const{config:e={},props:t={}}=JSON.parse(decodeURIComponent(a));return{config:e,props:t}}),u={log:{value:a=>console.log(a),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:m,label:"Collapse"},fade:{value:$,label:"Fade"},ratingValueFunction:{value:n().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(a,e)=>`${a} ${a===1?"heart":"hearts"} out of ${e} ${e===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(a,e)=>`${a} ${a===1?"star":"stars"} out of ${e} ${e===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:n().star,label:"StarIconRating"},heartIconRating:{value:({fill:a})=>String.fromCharCode(a===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:r().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:r().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(a,e)=>`Page ${a} of ${e}`,label:"PageLabel"},numberLabel:{value:r().numberLabel,label:"NumberLabel"},sliderLabelHandleDefault:{value:a=>`${a}`,label:"SliderLabelHandleDefault"},sliderValueTextUnits:{value:a=>`${a} units`,label:"SliderValueTextUnits"}},f=a=>{const e={...a};for(const[t,l]of Object.entries(e))u[l==null?void 0:l.value]!==void 0&&(e[t]=u[l.value].value);return e};function F(a){return L(()=>({[a]:f(i().config)})),c(()=>f(i().props))}export{F as h,D as k};
