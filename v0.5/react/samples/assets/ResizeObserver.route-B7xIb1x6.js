import{r as o,j as e}from"./App-DzjsJVPi.js";import{c as l}from"./resizeObserver-BeXUZ_dI.js";import{u as m}from"./stores-B90XF8Sy-C-A2iTqV.js";import{u as d}from"./directive-DNXkB1Wc-vM-qq65p.js";import"./directive-CKEccryv-BrWl76X8.js";const f=()=>{var a;const i=o.useMemo(l,[]),[n,r]=o.useState(180),s=m(i.dimensions$),t=(a=s==null?void 0:s.contentRect)==null?void 0:a.height,h=()=>{r((t||0)+50)},c=()=>{r(t?t-50:0)};return e.jsxs("div",{className:"demo-resize-observer",children:[e.jsx("label",{htmlFor:"resizable",children:"Resizable textarea:"}),e.jsx("textarea",{name:"resizable",id:"resizable",rows:6,cols:50,style:{height:n},className:`form-control ${t&&t>200?"fontsize":""}`,defaultValue:`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.`,...d(i.directive)}),e.jsxs("div",{children:["Textarea content height: ",e.jsx("span",{id:"dynamic-height",children:t}),"px"]}),e.jsx("button",{type:"button",className:"btn btn-primary m-2",id:"decreaseHeight",onClick:c,children:"Height --"}),e.jsx("button",{type:"button",className:"btn btn-primary m-2",id:"increaseHeight",onClick:h,children:"Height ++"})]})};export{f as default};
