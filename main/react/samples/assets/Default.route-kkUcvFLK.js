import{r as t,j as a}from"./index-9pJeHDTl.js";import{S as p}from"./select-bhzw7pWF.js";import"./func-B0ufEirG.js";import"./floatingUI-RYcEiIvH.js";import"./directive-p5f-O7x0.js";import"./promise-8x5-Wnj7.js";import"./stores-viY8-cTD.js";import"./focustrack-CpG7r95w.js";import"./config-DJC4cafJ.js";import"./widget-CY6-CZJQ.js";import"./slot-tP7goYBj.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],y=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{y as default};