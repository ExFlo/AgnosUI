import{d as b}from"./directive-CKEccryv-B1ye-Yy0.js";import{h as g}from"./hashUtil-B-6NIHJw.js";import{g as o}from"./pageFactory-BMdGxeJT-DE2GdZV9.js";import{g as r}from"./rating-C1UqlpFs-DFfHXU0X.js";import{c as f}from"./collapse-CVjUhnIz-CGP0nVpM.js";import{f as p}from"./fade-uOobJKgw-Bf-N6q4C.js";import{u as s}from"./stores-B8YEDwZq-rhLwL-y_.js";const n=b(()=>{let a=g().split("#").at(-1);(!a||a.at(0)!=="{")&&(a="{}");const{config:e={},props:t={}}=JSON.parse(decodeURIComponent(a));return{config:e,props:t}}),u={log:{value:a=>console.log(a),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:f,label:"Collapse"},fade:{value:p,label:"Fade"},ratingValueFunction:{value:r().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(a,e)=>`${a} ${a===1?"heart":"hearts"} out of ${e} ${e===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(a,e)=>`${a} ${a===1?"star":"stars"} out of ${e} ${e===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:r().star,label:"StarIconRating"},heartIconRating:{value:({fill:a})=>String.fromCharCode(a===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:o().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:o().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(a,e)=>`Page ${a} of ${e}`,label:"PageLabel"},numberLabel:{value:o().numberLabel,label:"NumberLabel"},sliderLabelHandleDefault:{value:a=>`${a}`,label:"SliderLabelHandleDefault"},sliderValueTextUnits:{value:a=>`${a} units`,label:"SliderValueTextUnits"}},i=a=>{const e={...a};for(const[t,l]of Object.entries(e))u[l==null?void 0:l.value]!==void 0&&(e[t]=u[l.value].value);return e};function V(){return{config:i(s(n).config),props:i(s(n).props)}}export{V as u};