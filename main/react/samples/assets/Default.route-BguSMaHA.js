import{r as t,j as a}from"./App-DI9ur9y5.js";import{S as l}from"./select-DmgOBdqs-CX_bOyWH.js";import"./slot-Cdz7cIIo.js";import"./directive-Kqp31pwt-DMhW1hGh.js";import"./directive-CKEccryv-9fW5PEkg.js";import"./index-DYzswQoO.js";import"./config-BcuXC-aU.js";import"./config-CfKS8A0J.js";import"./widget-DAs9_HQ1-VY0qubu8.js";import"./stores-B8YEDwZq-DemcncVp.js";import"./floatingUI-CoQomRAB.js";import"./promise-CY2U8bTP-CrILgJUw.js";import"./focustrack-Bl40dCuM.js";import"./navManager-CPjBJNcF.js";import"./extendWidget-Nhg67Efd.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],N=()=>{const[r]=t.useState([...n,...b,...u]),[s,o]=t.useState([]),[i,c]=t.useState(void 0),m=t.useCallback(e=>{c(e),o(e?r.filter(p=>p.toLowerCase().startsWith(e)):r.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(l,{items:s,filterText:i,onFilterTextChange:m,badgeClassName:"badge text-bg-light"})})})};export{N as default};
