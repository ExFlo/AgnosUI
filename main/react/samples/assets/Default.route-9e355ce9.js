import{r as t,j as a}from"./index-a1897422.js";import{S as p}from"./select-69c544de.js";import"./func-f2d0b1ef.js";import"./floatingUI-45cee349.js";import"./directive-b30080a6.js";import"./promise-c1a9d9a6.js";import"./stores-ae26ce61.js";import"./focustrack-2033d9a9.js";import"./config-b1c82cd5.js";import"./widget-e433708a.js";import"./slot-50fa40d8.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],y=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{y as default};