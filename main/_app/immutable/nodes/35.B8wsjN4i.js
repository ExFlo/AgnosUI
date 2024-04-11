import{s as o,n}from"../chunks/scheduler.DHbooxev.js";import{S as i,i as c,c as p,b as l,m,t as b,a as g,e as d}from"../chunks/index.BK_xdHAZ.js";import{A as h}from"../chunks/ApiDoc.6_itbXK4.js";const u=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:36,character:2,position:1281},end:{line:36,character:20,position:1299},type:"boolean",defaultValue:"false"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:868},end:{line:30,character:20,position:886},type:"string"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:66,character:2,position:1675},end:{line:66,character:91,position:1764},type:"(value: number, minimum: number, maximum: number) => string"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:27,character:2,position:1043},end:{line:27,character:17,position:1058},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:755},end:{line:21,character:14,position:767},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:686},end:{line:16,character:14,position:698},type:"number"},{name:"slotDefault",description:"Label of the progress.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:23,character:2,position:920},end:{line:23,character:47,position:965},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:19,character:2,position:834},end:{line:19,character:49,position:881},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:31,character:2,position:1114},end:{line:31,character:19,position:1131},type:"boolean",defaultValue:"false"},{name:"type",description:"Type of the progressbar, following bootstrap types.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:40,character:2,position:1367},end:{line:40,character:107,position:1472},type:'"success" | "info" | "warning" | "danger" | "primary" | "secondary" | "light" | "dark"',defaultValue:"undefined"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:822},end:{line:26,character:16,position:836},type:"number"}],f=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:36,character:2,position:1281},end:{line:36,character:20,position:1299},type:"boolean"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:868},end:{line:30,character:20,position:886},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:56,character:2,position:1391},end:{line:56,character:36,position:1425},type:"string"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:52,character:2,position:1336},end:{line:52,character:20,position:1354},type:"boolean"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:27,character:2,position:1043},end:{line:27,character:17,position:1058},type:"string"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:755},end:{line:21,character:14,position:767},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:686},end:{line:16,character:14,position:698},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:44,character:2,position:1169},end:{line:44,character:21,position:1188},type:"number"},{name:"slotDefault",description:"Label of the progress.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:23,character:2,position:920},end:{line:23,character:47,position:965},type:"SlotContent<ProgressbarContext>"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:19,character:2,position:834},end:{line:19,character:49,position:881},type:"SlotContent<ProgressbarContext>"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:48,character:2,position:1252},end:{line:48,character:19,position:1269},type:"boolean"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:31,character:2,position:1114},end:{line:31,character:19,position:1131},type:"boolean"},{name:"type",description:"Type of the progressbar, following bootstrap types.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:40,character:2,position:1367},end:{line:40,character:107,position:1472},type:'"success" | "info" | "warning" | "danger" | "primary" | "secondary" | "light" | "dark"'},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:822},end:{line:26,character:16,position:836},type:"number"}],y=[],N={props:u,state:f,api:y};function v(s){let e,t;return e=new h({props:{doc:N}}),{c(){p(e.$$.fragment)},l(r){l(e.$$.fragment,r)},m(r,a){m(e,r,a),t=!0},p:n,i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){g(e.$$.fragment,r),t=!1},d(r){d(e,r)}}}class C extends i{constructor(e){super(),c(this,e,null,v,o,{})}}export{C as component};
