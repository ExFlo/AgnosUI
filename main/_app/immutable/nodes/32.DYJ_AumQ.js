import{s as o,n}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as i,i as c,c as p,b as l,m,t as u,a as d,e as b}from"../chunks/index.BbxhXv5b.js";import{A as g}from"../chunks/ApiDoc.ecM97kul.js";import{g as h}from"../chunks/progressbar-SBcPMovz.C0vPJtlI.js";const f=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:51,character:2,position:1412},end:{line:51,character:20,position:1430},type:"boolean",defaultValue:"false"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:894},end:{line:30,character:20,position:912},type:"string",defaultValue:"'Progressbar'"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:87,character:2,position:2219},end:{line:87,character:91,position:2308},type:"(value: number, minimum: number, maximum: number) => string | undefined",defaultValue:"() => undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:42,character:2,position:1174},end:{line:42,character:17,position:1189},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:781},end:{line:21,character:14,position:793},type:"number",defaultValue:"100"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:712},end:{line:16,character:14,position:724},type:"number",defaultValue:"0"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:38,character:2,position:1051},end:{line:38,character:47,position:1096},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:34,character:2,position:965},end:{line:34,character:49,position:1012},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:46,character:2,position:1245},end:{line:46,character:19,position:1262},type:"boolean",defaultValue:"false"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:848},end:{line:26,character:16,position:862},type:"number",defaultValue:"0"}],y=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:51,character:2,position:1412},end:{line:51,character:20,position:1430},type:"boolean"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:894},end:{line:30,character:20,position:912},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:77,character:2,position:1935},end:{line:77,character:36,position:1969},type:"string | undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:73,character:2,position:1880},end:{line:73,character:20,position:1898},type:"boolean"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:42,character:2,position:1174},end:{line:42,character:17,position:1189},type:"string"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:781},end:{line:21,character:14,position:793},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:712},end:{line:16,character:14,position:724},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:65,character:2,position:1713},end:{line:65,character:21,position:1732},type:"number"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:38,character:2,position:1051},end:{line:38,character:47,position:1096},type:"SlotContent<ProgressbarContext>"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:34,character:2,position:965},end:{line:34,character:49,position:1012},type:"SlotContent<ProgressbarContext>"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:69,character:2,position:1796},end:{line:69,character:19,position:1813},type:"boolean"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:46,character:2,position:1245},end:{line:46,character:19,position:1262},type:"boolean"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:848},end:{line:26,character:16,position:862},type:"number"}],N=[],v={props:f,state:y,api:N};function x(a){let e,t;return e=new g({props:{doc:v,defaultValues:h()}}),{c(){p(e.$$.fragment)},l(r){l(e.$$.fragment,r)},m(r,s){m(e,r,s),t=!0},p:n,i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){d(e.$$.fragment,r),t=!1},d(r){b(e,r)}}}class P extends i{constructor(e){super(),c(this,e,null,x,o,{})}}export{P as component};
