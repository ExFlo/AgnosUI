import{j as s,R as l}from"./App-DzjsJVPi.js";import{S as r}from"./slot-C-87TY4d.js";import{u as i}from"./directive-DNXkB1Wc-vM-qq65p.js";import{u as c}from"./config-DsZWmgdO.js";import{c as t}from"./slider-DYrwS7Mv-DY7MyluR.js";import{e as p}from"./extendWidget-DH8OAK3L.js";const n={structure:void 0,label:({value:e})=>""+e,handle:void 0},u=p(t,n),v=u,m=e=>s.jsx("button",{...i(e.directives.handleDirective,{item:e.item}),children:" "}),j=({directive:e,option:a})=>s.jsx("div",{...i(e,{option:a})}),b=({directive:e,index:a,children:d})=>s.jsx("div",{...i(e,{index:a}),children:d}),h=e=>s.jsxs(s.Fragment,{children:[s.jsx("div",{...i(e.directives.minLabelDirective),children:s.jsx(r,{slotContent:e.state.label,props:{value:e.state.min,...e}})}),s.jsx("div",{...i(e.directives.maxLabelDirective),children:s.jsx(r,{slotContent:e.state.label,props:{value:e.state.max,...e}})})]}),D=e=>s.jsx("div",{...i(e.directives.combinedHandleLabelDisplayDirective),children:e.state.rtl?s.jsxs(s.Fragment,{children:[s.jsx(r,{slotContent:e.state.label,props:{value:e.state.sortedValues[1],...e}})," - ",s.jsx(r,{slotContent:e.state.label,props:{value:e.state.sortedValues[0],...e}})]}):s.jsxs(s.Fragment,{children:[s.jsx(r,{slotContent:e.state.label,props:{value:e.state.sortedValues[0],...e}})," - ",s.jsx(r,{slotContent:e.state.label,props:{value:e.state.sortedValues[1],...e}})]})}),g=e=>s.jsxs(s.Fragment,{children:[e.state.progressDisplayOptions.map((a,d)=>s.jsx(j,{directive:e.directives.progressDisplayDirective,option:a},d)),s.jsx("div",{...i(e.directives.clickableAreaDirective)}),e.state.showMinMaxLabels&&s.jsx(h,{...e}),e.state.showValueLabels&&e.state.combinedLabelDisplay&&s.jsx(D,{...e}),e.state.sortedHandles.map((a,d)=>s.jsxs(l.Fragment,{children:[s.jsx(r,{slotContent:e.state.handle,props:{item:a,...e}}),e.state.showValueLabels&&!e.state.combinedLabelDisplay&&s.jsx(b,{directive:e.directives.handleLabelDisplayDirective,index:d,children:s.jsx(r,{slotContent:e.state.label,props:{value:e.state.values[d],...e}})})]},a.id))]});function F(e){const a=c(v,e,"slider",{structure:g,handle:m});return s.jsx("div",{...i(a.directives.sliderDirective),children:s.jsx(r,{slotContent:a.state.structure,props:a})})}export{F as S};
