import{n as e,f as t}from"./modal.9ddb67bd.js";import"./stores.726d9968.js";const i={visible:!0,dismissible:!0,type:"primary",ariaCloseButtonLabel:"Close",onVisibleChange:e,onShown:e,onHidden:e,slotStructure:void 0,slotDefault:void 0,animation:!0,animationOnInit:!1,transition:t};function s(){return{...i}}const n=[{name:"animation",description:"If `true`, alert closing will be animated.\n\nAnimation is triggered  when clicked on the close button (×),\nvia the `.close()` function or the visible prop is changed",fileName:"core/lib/alert.ts",start:{line:85,character:2,position:2290},end:{line:85,character:21,position:2309},type:"boolean",defaultValue:"true"},{name:"animationOnInit",description:"If `true`, alert opening will be animated.\n\nAnimation is triggered  when the `.open()` function is called\nor the visible prop is changed",fileName:"core/lib/alert.ts",start:{line:78,character:2,position:2073},end:{line:78,character:27,position:2098},type:"boolean",defaultValue:"false"},{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/lib/alert.ts",start:{line:42,character:2,position:1200},end:{line:42,character:31,position:1229},type:"string",defaultValue:"'Close'"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/lib/alert.ts",start:{line:16,character:2,position:701},end:{line:16,character:23,position:722},type:"boolean",defaultValue:"true"},{name:"onHidden",description:"Callback called when the alert is hidden.",fileName:"core/lib/alert.ts",start:{line:58,character:2,position:1549},end:{line:58,character:23,position:1570},type:"() => void",defaultValue:"noop"},{name:"onShown",description:"Callback called when the alert is shown.",fileName:"core/lib/alert.ts",start:{line:63,character:2,position:1628},end:{line:63,character:22,position:1648},type:"() => void",defaultValue:"noop"},{name:"onVisibleChange",description:"Callback called when the alert visibility changed.",fileName:"core/lib/alert.ts",start:{line:53,character:2,position:1446},end:{line:53,character:46,position:1490},type:"(visible: boolean) => void",defaultValue:"noop"},{name:"slotDefault",description:"Template for the alert content",fileName:"core/lib/alert.ts",start:{line:27,character:2,position:936},end:{line:27,character:41,position:975},type:"SlotContent<AlertContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the alert component",fileName:"core/lib/alert.ts",start:{line:32,character:2,position:1032},end:{line:32,character:43,position:1073},type:"SlotContent<AlertContext>",defaultValue:"undefined"},{name:"transition",description:`The transition function will be executed when the alert is displayed or hidden.

Depending on the value of AlertProps.animationOnInit, the animation can be optionally skipped during the showing process.`,fileName:"core/lib/alert.ts",start:{line:70,character:2,position:1883},end:{line:70,character:27,position:1908},type:"TransitionFn",defaultValue:"fadeTransition"},{name:"type",description:`Type of the alert.
The are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.`,fileName:"core/lib/alert.ts",start:{line:22,character:2,position:875},end:{line:22,character:15,position:888},type:"string",defaultValue:"'primary'"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/lib/alert.ts",start:{line:37,character:2,position:1133},end:{line:37,character:19,position:1150},type:"boolean",defaultValue:"true"}],a=[{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/lib/alert.ts",start:{line:42,character:2,position:1200},end:{line:42,character:31,position:1229},type:"string"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/lib/alert.ts",start:{line:16,character:2,position:701},end:{line:16,character:23,position:722},type:"boolean"},{name:"hidden",description:"",fileName:"core/lib/alert.ts",start:{line:46,character:2,position:1297},end:{line:46,character:18,position:1313},type:"boolean"},{name:"slotDefault",description:"Template for the alert content",fileName:"core/lib/alert.ts",start:{line:27,character:2,position:936},end:{line:27,character:41,position:975},type:"SlotContent<AlertContext>"},{name:"slotStructure",description:"Global template for the alert component",fileName:"core/lib/alert.ts",start:{line:32,character:2,position:1032},end:{line:32,character:43,position:1073},type:"SlotContent<AlertContext>"},{name:"type",description:`Type of the alert.
The are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.`,fileName:"core/lib/alert.ts",start:{line:22,character:2,position:875},end:{line:22,character:15,position:888},type:"string"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/lib/alert.ts",start:{line:37,character:2,position:1133},end:{line:37,character:19,position:1150},type:"boolean"}],o=[{name:"close",description:"Triggers alert closing programmatically (same as clicking on the close button (×)).",fileName:"core/lib/alert.ts",start:{line:92,character:2,position:2440},end:{line:92,character:16,position:2454},type:"() => void"},{name:"open",description:"Triggers the alert to be displayed for the user.",fileName:"core/lib/alert.ts",start:{line:97,character:2,position:2520},end:{line:97,character:15,position:2533},type:"() => void"}],c={props:n,state:a,api:o};export{c as d,s as g};