import{s as o,n}from"../chunks/scheduler.Hr4oCa1m.js";import{S as i,i as c,c as p,b as l,m,t as b,a as d,e as g}from"../chunks/index.DS88fdNR.js";import{A as u}from"../chunks/ApiDoc.1MwL_izX.js";const h=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:44,character:2,position:1370},end:{line:44,character:20,position:1388},type:"boolean",defaultValue:"false"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:33,character:2,position:833},end:{line:33,character:20,position:851},type:"string",defaultValue:"'Progressbar'"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:74,character:2,position:1700},end:{line:74,character:91,position:1789},type:"(value: number, minimum: number, maximum: number) => string",defaultValue:"() => undefined"},{name:"children",description:"Label of the progress.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:25,character:2,position:925},end:{line:25,character:44,position:967},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:31,character:2,position:1072},end:{line:31,character:17,position:1087},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:676},end:{line:21,character:14,position:688},type:"number",defaultValue:"100"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:15,character:2,position:601},end:{line:15,character:14,position:613},type:"number",defaultValue:"0"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:37,character:2,position:1173},end:{line:37,character:19,position:1190},type:"boolean",defaultValue:"false"},{name:"structure",description:"Global template for the Progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:843},end:{line:21,character:45,position:886},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"type",description:"Type of the progressbar, following bootstrap types.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:48,character:2,position:1456},end:{line:48,character:38,position:1492},type:'"primary" | "success" | "info" | "warning" | "danger" | "secondary" | "light" | "dark"',defaultValue:"undefined"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:27,character:2,position:749},end:{line:27,character:16,position:763},type:"number",defaultValue:"0"}],f=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:44,character:2,position:1370},end:{line:44,character:20,position:1388},type:"boolean"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:33,character:2,position:833},end:{line:33,character:20,position:851},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:59,character:2,position:1356},end:{line:59,character:36,position:1390},type:"string"},{name:"children",description:"Label of the progress.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:25,character:2,position:925},end:{line:25,character:44,position:967},type:"SlotContent<ProgressbarContext>"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:55,character:2,position:1301},end:{line:55,character:20,position:1319},type:"boolean"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:31,character:2,position:1072},end:{line:31,character:17,position:1087},type:"string"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:676},end:{line:21,character:14,position:688},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:15,character:2,position:601},end:{line:15,character:14,position:613},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:47,character:2,position:1134},end:{line:47,character:21,position:1153},type:"number"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:51,character:2,position:1217},end:{line:51,character:19,position:1234},type:"boolean"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:37,character:2,position:1173},end:{line:37,character:19,position:1190},type:"boolean"},{name:"structure",description:"Global template for the Progressbar.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:843},end:{line:21,character:45,position:886},type:"SlotContent<ProgressbarContext>"},{name:"type",description:"Type of the progressbar, following bootstrap types.",fileName:"core-bootstrap/src/components/progressbar/progressbar.ts",start:{line:48,character:2,position:1456},end:{line:48,character:38,position:1492},type:'"primary" | "success" | "info" | "warning" | "danger" | "secondary" | "light" | "dark"'},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:27,character:2,position:749},end:{line:27,character:16,position:763},type:"number"}],y=[],N={props:h,state:f,api:y};function v(a){let e,t;return e=new u({props:{doc:N}}),{c(){p(e.$$.fragment)},l(r){l(e.$$.fragment,r)},m(r,s){m(e,r,s),t=!0},p:n,i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){d(e.$$.fragment,r),t=!1},d(r){g(e,r)}}}class V extends i{constructor(e){super(),c(this,e,null,v,o,{})}}export{V as component};