import{n as e}from"./stores.41c2ba82.js";import{f as t}from"./fade.e6e5d115.js";const i={visible:!0,dismissible:!0,type:"primary",ariaCloseButtonLabel:"Close",onVisibleChange:e,onShown:e,onHidden:e,slotStructure:void 0,slotDefault:void 0,animation:!0,animationOnInit:!1,transition:t,className:""};function s(){return{...i}}const a=[{name:"animation",description:"If `true`, alert closing will be animated.\n\nAnimation is triggered  when clicked on the close button (×),\nvia the `.close()` function or the visible prop is changed",fileName:"core/lib/alert.ts",start:{line:89,character:2,position:2513},end:{line:89,character:21,position:2532},type:"boolean",defaultValue:"true"},{name:"animationOnInit",description:"If `true`, alert opening will be animated.\n\nAnimation is triggered  when the `.open()` function is called\nor the visible prop is changed",fileName:"core/lib/alert.ts",start:{line:82,character:2,position:2296},end:{line:82,character:27,position:2321},type:"boolean",defaultValue:"false"},{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/lib/alert.ts",start:{line:43,character:2,position:1300},end:{line:43,character:31,position:1329},type:"string",defaultValue:"'Close'"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/lib/alert.ts",start:{line:17,character:2,position:799},end:{line:17,character:23,position:820},type:"boolean",defaultValue:"true"},{name:"onHidden",description:"Callback called when the alert is hidden.",fileName:"core/lib/alert.ts",start:{line:62,character:2,position:1772},end:{line:62,character:23,position:1793},type:"() => void",defaultValue:"noop"},{name:"onShown",description:"Callback called when the alert is shown.",fileName:"core/lib/alert.ts",start:{line:67,character:2,position:1851},end:{line:67,character:22,position:1871},type:"() => void",defaultValue:"noop"},{name:"onVisibleChange",description:"Callback called when the alert visibility changed.",fileName:"core/lib/alert.ts",start:{line:57,character:2,position:1669},end:{line:57,character:46,position:1713},type:"(visible: boolean) => void",defaultValue:"noop"},{name:"slotDefault",description:"Template for the alert content",fileName:"core/lib/alert.ts",start:{line:28,character:2,position:1036},end:{line:28,character:41,position:1075},type:"SlotContent<AlertContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the alert component",fileName:"core/lib/alert.ts",start:{line:33,character:2,position:1132},end:{line:33,character:43,position:1173},type:"SlotContent<AlertContext>",defaultValue:"undefined"},{name:"transition",description:`The transition function will be executed when the alert is displayed or hidden.

Depending on the value of AlertProps.animationOnInit, the animation can be optionally skipped during the showing process.`,fileName:"core/lib/alert.ts",start:{line:74,character:2,position:2106},end:{line:74,character:27,position:2131},type:"TransitionFn",defaultValue:"fadeTransition"},{name:"type",description:`Type of the alert.
There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.`,fileName:"core/lib/alert.ts",start:{line:23,character:2,position:975},end:{line:23,character:15,position:988},type:"string",defaultValue:"'primary'"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/lib/alert.ts",start:{line:38,character:2,position:1233},end:{line:38,character:19,position:1250},type:"boolean",defaultValue:"true"}],n=[{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/lib/alert.ts",start:{line:43,character:2,position:1300},end:{line:43,character:31,position:1329},type:"string"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/lib/alert.ts",start:{line:17,character:2,position:799},end:{line:17,character:23,position:820},type:"boolean"},{name:"hidden",description:"Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.",fileName:"core/lib/alert.ts",start:{line:50,character:2,position:1520},end:{line:50,character:18,position:1536},type:"boolean"},{name:"slotDefault",description:"Template for the alert content",fileName:"core/lib/alert.ts",start:{line:28,character:2,position:1036},end:{line:28,character:41,position:1075},type:"SlotContent<AlertContext>"},{name:"slotStructure",description:"Global template for the alert component",fileName:"core/lib/alert.ts",start:{line:33,character:2,position:1132},end:{line:33,character:43,position:1173},type:"SlotContent<AlertContext>"},{name:"type",description:`Type of the alert.
There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.`,fileName:"core/lib/alert.ts",start:{line:23,character:2,position:975},end:{line:23,character:15,position:988},type:"string"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/lib/alert.ts",start:{line:38,character:2,position:1233},end:{line:38,character:19,position:1250},type:"boolean"}],o=[{name:"close",description:"Triggers alert closing programmatically (same as clicking on the close button (×)).",fileName:"core/lib/alert.ts",start:{line:96,character:2,position:2663},end:{line:96,character:16,position:2677},type:"() => void"},{name:"open",description:"Triggers the alert to be displayed for the user.",fileName:"core/lib/alert.ts",start:{line:101,character:2,position:2743},end:{line:101,character:15,position:2756},type:"() => void"}],c={props:a,state:n,api:o};export{c as d,s as g};