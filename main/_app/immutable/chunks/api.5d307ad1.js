import{c as o}from"./collapse.a50d5b92.js";import{n as e}from"./stores.9f517952.js";const t={closeOthers:!1,onShown:e,onHidden:e,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimation:!0,itemTransition:o,itemHeadingTag:"",onItemShown:e,onItemHidden:e,onItemVisibleChange:e,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemCollapseClass:"",itemBodyClass:""};function s(){return{...t}}const i=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"closeOthers",description:"If `true`, only one item at the time can stay open.",fileName:"core/src/components/accordion/accordion.ts",start:{line:47,character:2,position:1968},end:{line:47,character:23,position:1989},type:"boolean",defaultValue:"false"},{name:"itemAnimation",description:"If `true`, accordion-item will be animated.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:91,character:2,position:3172},end:{line:91,character:25,position:3195},type:"boolean",defaultValue:"true"},{name:"itemBodyClass",description:`Classes to add on the accordion-item body DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:167,character:2,position:5234},end:{line:167,character:24,position:5256},type:"string",defaultValue:"''"},{name:"itemButtonClass",description:`Classes to add on the accordion-item toggle button DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:155,character:2,position:4950},end:{line:155,character:26,position:4974},type:"string",defaultValue:"''"},{name:"itemClass",description:`Classes to add on the accordion-item DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:143,character:2,position:4667},end:{line:143,character:20,position:4685},type:"string",defaultValue:"''"},{name:"itemCollapseClass",description:`Classes to add on the accordion-item collapse DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:161,character:2,position:5093},end:{line:161,character:28,position:5119},type:"string",defaultValue:"''"},{name:"itemDestroyOnHide",description:"If `true`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:72,character:2,position:2635},end:{line:72,character:29,position:2662},type:"boolean",defaultValue:"true"},{name:"itemDisabled",description:`If \`true\`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:79,character:2,position:2865},end:{line:79,character:24,position:2887},type:"boolean",defaultValue:"false"},{name:"itemHeaderClass",description:`Classes to add on the accordion-item header DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:149,character:2,position:4802},end:{line:149,character:26,position:4826},type:"string",defaultValue:"''"},{name:"itemHeadingTag",description:`The html tag to use for the accordion-item-header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:173,character:2,position:5367},end:{line:173,character:25,position:5390},type:"string",defaultValue:"''"},{name:"itemId",description:`The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:66,character:2,position:2442},end:{line:66,character:17,position:2457},type:"string",defaultValue:"''"},{name:"itemTransition",description:`The transition to use for the accordion-item collapse when is toggled.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:97,character:2,position:3326},end:{line:97,character:31,position:3355},type:"TransitionFn",defaultValue:"collapseVerticalTransition"},{name:"itemVisible",description:"If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:85,character:2,position:3047},end:{line:85,character:23,position:3068},type:"boolean",defaultValue:"false"},{name:"onHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:59,character:2,position:2222},end:{line:59,character:37,position:2257},type:"(itemId: string) => void",defaultValue:"noop"},{name:"onItemHidden",description:`An event fired when an item is hidden.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:109,character:2,position:3576},end:{line:109,character:27,position:3601},type:"() => void",defaultValue:"noop"},{name:"onItemShown",description:`An event fired when an item is shown.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:103,character:2,position:3453},end:{line:103,character:26,position:3477},type:"() => void",defaultValue:"noop"},{name:"onItemVisibleChange",description:`An event fired when the \`visible\` value changes.

Event payload is the new value of visible.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:117,character:2,position:3761},end:{line:117,character:50,position:3809},type:"(visible: boolean) => void",defaultValue:"noop"},{name:"onShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:53,character:2,position:2088},end:{line:53,character:36,position:2122},type:"(itemId: string) => void",defaultValue:"noop"},{name:"slotItemBody",description:`Content present in the accordion body.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:131,character:2,position:4330},end:{line:131,character:50,position:4378},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemHeader",description:`Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:137,character:2,position:4507},end:{line:137,character:52,position:4557},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemStructure",description:`Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion collapse; the accordion header contains the accordion button
(that contains \`slotItemHeader\`), while the accordion collapse contains the accordion body (that contains slotItemBody).

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:125,character:2,position:4178},end:{line:125,character:55,position:4231},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"}],n=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"itemsWidget",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:180,character:2,position:5547},end:{line:180,character:37,position:5582},type:"AccordionItemWidget[]"}],a=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:201,character:2,position:6114},end:{line:201,character:33,position:6145},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:217,character:2,position:6547},end:{line:217,character:22,position:6567},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:195,character:2,position:5946},end:{line:195,character:31,position:5975},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:213,character:2,position:6454},end:{line:213,character:20,position:6472},type:"() => void"},{name:"isExpanded",description:"Given the itemId, it will return if such item is visible (expanded) or not.\n\nIf the itemId is not a valid id it will return `false`.",fileName:"core/src/components/accordion/accordion.ts",start:{line:189,character:2,position:5773},end:{line:189,character:38,position:5809},type:"(itemId: string) => boolean"},{name:"registerItem",description:"Creates a new accordionItem.",fileName:"core/src/components/accordion/accordion.ts",start:{line:221,character:2,position:6612},end:{line:221,character:82,position:6692},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:207,character:2,position:6282},end:{line:207,character:31,position:6311},type:"(itemId: string) => void"}],d={props:i,state:n,api:a};export{d,s as g};