import{n as c}from"./stores.2a7cc933.js";import{c as u,r as i,a as l,b as h}from"./cssTransitions.21643ea1.js";const I=({dimension:t="height",showClasses:o,hideClasses:n,animationPendingClasses:s}={})=>u((e,d,f,p)=>{if(f){let{maxSize:a,minSize:r}=p;a||(i(e,s),i(e,n),l(e,o),a=e.getBoundingClientRect()[t]+"px",p.maxSize=a),r||(i(e,s),i(e,o),l(e,n),r=e.getBoundingClientRect()[t]+"px",p.minSize=r),i(e,o),i(e,n);const m=d==="show"?[r,a]:[a,r];e.style[t]=m[0],h(e),l(e,s),h(e),e.style[t]=m[1]}else i(e,d==="show"?n:o);return()=>{i(e,s),l(e,d==="show"?o:n),e.style[t]=""}}),b={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},g=I(b),y={closeOthers:!1,onShown:c,onHidden:c,className:"",itemId:"",itemDestroyOnHide:!1,itemDisabled:!1,itemVisible:!1,itemAnimation:!0,itemTransition:g,onItemShown:c,onItemHidden:c,onItemVisibleChange:c,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemCollapseClass:"",itemBodyClass:""};function S(){return{...y}}const v=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"closeOthers",description:"If `true`, only one item at the time can stay open.",fileName:"core/lib/accordion.ts",start:{line:55,character:2,position:1726},end:{line:55,character:23,position:1747},type:"boolean",defaultValue:"false"},{name:"itemAnimation",description:"If `true`, accordion-item will be animated.\n\nIt is a prop of the accordion-item.",fileName:"core/lib/accordion.ts",start:{line:99,character:2,position:2930},end:{line:99,character:25,position:2953},type:"boolean",defaultValue:"true"},{name:"itemBodyClass",description:`Classes to add on the accordion-item body DOM element.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:175,character:2,position:4992},end:{line:175,character:24,position:5014},type:"string",defaultValue:"''"},{name:"itemButtonClass",description:`Classes to add on the accordion-item toggle button DOM element.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:163,character:2,position:4708},end:{line:163,character:26,position:4732},type:"string",defaultValue:"''"},{name:"itemClass",description:`Classes to add on the accordion-item DOM element.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:151,character:2,position:4425},end:{line:151,character:20,position:4443},type:"string",defaultValue:"''"},{name:"itemCollapseClass",description:`Classes to add on the accordion-item collapse DOM element.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:169,character:2,position:4851},end:{line:169,character:28,position:4877},type:"string",defaultValue:"''"},{name:"itemDestroyOnHide",description:"If `true`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.\n\nIt is a prop of the accordion-item.",fileName:"core/lib/accordion.ts",start:{line:80,character:2,position:2393},end:{line:80,character:29,position:2420},type:"boolean",defaultValue:"false"},{name:"itemDisabled",description:`If \`true\`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:87,character:2,position:2623},end:{line:87,character:24,position:2645},type:"boolean",defaultValue:"false"},{name:"itemHeaderClass",description:`Classes to add on the accordion-item header DOM element.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:157,character:2,position:4560},end:{line:157,character:26,position:4584},type:"string",defaultValue:"''"},{name:"itemId",description:`The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:74,character:2,position:2200},end:{line:74,character:17,position:2215},type:"string",defaultValue:"''"},{name:"itemTransition",description:`The transition to use for the accordion-item collapse when is toggled.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:105,character:2,position:3084},end:{line:105,character:31,position:3113},type:"TransitionFn",defaultValue:"collapseVerticalTransition"},{name:"itemVisible",description:"If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).\n\nIt is a prop of the accordion-item.",fileName:"core/lib/accordion.ts",start:{line:93,character:2,position:2805},end:{line:93,character:23,position:2826},type:"boolean",defaultValue:"false"},{name:"onHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/lib/accordion.ts",start:{line:67,character:2,position:1980},end:{line:67,character:37,position:2015},type:"(itemId: string) => void",defaultValue:"noop"},{name:"onItemHidden",description:`An event fired when an item is hidden.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:117,character:2,position:3334},end:{line:117,character:27,position:3359},type:"() => void",defaultValue:"noop"},{name:"onItemShown",description:`An event fired when an item is shown.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:111,character:2,position:3211},end:{line:111,character:26,position:3235},type:"() => void",defaultValue:"noop"},{name:"onItemVisibleChange",description:`An event fired when the \`visible\` value changes.

Event payload is the new value of visible.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:125,character:2,position:3519},end:{line:125,character:50,position:3567},type:"(visible: boolean) => void",defaultValue:"noop"},{name:"onShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/lib/accordion.ts",start:{line:61,character:2,position:1846},end:{line:61,character:36,position:1880},type:"(itemId: string) => void",defaultValue:"noop"},{name:"slotItemBody",description:`Content present in the accordion body.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:139,character:2,position:4088},end:{line:139,character:50,position:4136},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemHeader",description:`Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:145,character:2,position:4265},end:{line:145,character:52,position:4315},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemStructure",description:`Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion collapse; the accordion header contains the accordion button
(that contains \`slotItemHeader\`), while the accordion collapse contains the accordion body (that contains slotItemBody).

It is a prop of the accordion-item.`,fileName:"core/lib/accordion.ts",start:{line:133,character:2,position:3936},end:{line:133,character:55,position:3989},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"}],w=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"itemsWidget",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/lib/accordion.ts",start:{line:182,character:2,position:5171},end:{line:182,character:37,position:5206},type:"AccordionItemWidget[]"}],C=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/lib/accordion.ts",start:{line:203,character:2,position:5738},end:{line:203,character:33,position:5769},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/lib/accordion.ts",start:{line:219,character:2,position:6171},end:{line:219,character:22,position:6191},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/lib/accordion.ts",start:{line:197,character:2,position:5570},end:{line:197,character:31,position:5599},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/lib/accordion.ts",start:{line:215,character:2,position:6078},end:{line:215,character:20,position:6096},type:"() => void"},{name:"isExpanded",description:"Given the itemId, it will return if such item is visible (expanded) or not.\n\nIf the itemId is not a valid id it will return `false`.",fileName:"core/lib/accordion.ts",start:{line:191,character:2,position:5397},end:{line:191,character:38,position:5433},type:"(itemId: string) => boolean"},{name:"registerItem",description:"Creates a new in accordionItem.",fileName:"core/lib/accordion.ts",start:{line:223,character:2,position:6239},end:{line:223,character:82,position:6319},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/lib/accordion.ts",start:{line:209,character:2,position:5906},end:{line:209,character:31,position:5935},type:"(itemId: string) => void"}],A={props:v,state:w,api:C};export{A as d,S as g};
