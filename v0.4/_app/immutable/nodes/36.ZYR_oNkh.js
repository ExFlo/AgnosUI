import{s as m}from"../chunks/scheduler.BCoUmZgo.js";import{S as p,i as h,c as u,b as f,m as b,t as g,a as y,e as v}from"../chunks/index.Dun_Df-H.js";import{P as w}from"../chunks/Playground.Biul0l3I.js";import{_ as l}from"../chunks/preload-helper.Dch09mLN.js";import{c,n as i}from"../chunks/stores.n1gx4xfv.js";import{l as N}from"../chunks/app.gJ1HYWTj.js";import{f as d}from"../chunks/Alert.CIbU6pZG.js";const C=()=>{const o=Math.abs(window.innerWidth-document.documentElement.clientWidth),t=document.body,n=t.style,{overflow:e,paddingRight:a}=n;if(o>0){const r=parseFloat(window.getComputedStyle(t).paddingRight);n.paddingRight=`${r+o}px`}return n.overflow="hidden",()=>{o>0&&(n.paddingRight=a),n.overflow=e}};let s=i;const V=()=>{s(),s=C()},_=()=>{s(),s=i},P={animated:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:async()=>{},closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:async()=>{},onBeforeClose:i,onVisibleChange:i,onHidden:i,onShown:i,visible:!1};function k(){return{...P}}const T=N(),M=c(()=>T().length>0),S=c(()=>{M()?V():_()});c(()=>{S()});const E={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},O={backdropTransition:d,modalTransition:d};function W(){return{...k(),...E,...O}}const D=W,$={componentName:"modal",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>l(()=>import("../chunks/playground.route.RP5itLqe.js"),[],import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"playground.tsx",files:{"playground.tsx":()=>l(()=>import("../chunks/Playground.route.DD0EcPvv.js"),[],import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"playground.svelte",files:{"playground.svelte":()=>l(()=>import("../chunks/Playground.route.BROIG3lR.js"),[],import.meta.url).then(o=>o.default)}}}},B=[{name:"animated",description:"Whether the modal and its backdrop (if present) should be animated when shown or hidden.",fileName:"core/src/components/modal/modal.ts",start:{line:107,character:2,position:3501},end:{line:107,character:20,position:3519},type:"boolean",defaultValue:"true"},{name:"ariaCloseButtonLabel",description:"Value of the aria-label attribute to put on the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:44,character:2,position:1913},end:{line:44,character:31,position:1942},type:"string",defaultValue:"'Close'"},{name:"backdrop",description:"Whether a backdrop should be created behind the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:114,character:2,position:3620},end:{line:114,character:20,position:3638},type:"boolean",defaultValue:"true"},{name:"backdropClass",description:"Classes to add on the backdrop DOM element.",fileName:"core/src/components/modal/modal.ts",start:{line:51,character:2,position:2030},end:{line:51,character:24,position:2052},type:"string",defaultValue:"''"},{name:"backdropTransition",description:"The transition to use for the backdrop behind the modal (if present).",fileName:"core/src/components/modal/modal.ts",start:{line:124,character:2,position:3784},end:{line:124,character:35,position:3817},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"closeButton",description:"Whether to display the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:58,character:2,position:2135},end:{line:58,character:23,position:2156},type:"boolean",defaultValue:"true"},{name:"closeOnOutsideClick",description:"Whether the modal should be closed when clicking on the viewport outside the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:131,character:2,position:3947},end:{line:131,character:31,position:3976},type:"boolean",defaultValue:"true"},{name:"container",description:`Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.`,fileName:"core/src/components/modal/modal.ts",start:{line:70,character:2,position:2487},end:{line:70,character:32,position:2517},type:"HTMLElement",defaultValue:"typeof window !== 'undefined' ? document.body : null"},{name:"modalTransition",description:"The transition to use for the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:141,character:2,position:4089},end:{line:141,character:32,position:4119},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"onBeforeClose",description:"Event to be triggered when the modal is about to be closed (i.e. the close method was called).",fileName:"core/src/components/modal/modal.ts",start:{line:154,character:2,position:4461},end:{line:154,character:56,position:4515},type:"(event: ModalBeforeCloseEvent) => void",defaultValue:"() => {}"},{name:"onHidden",description:"Event to be triggered when the transition is completed and the modal is not visible.",fileName:"core/src/components/modal/modal.ts",start:{line:176,character:2,position:4899},end:{line:176,character:23,position:4920},type:"() => void",defaultValue:"() => {}"},{name:"onShown",description:"Event to be triggered when the transition is completed and the modal is visible.",fileName:"core/src/components/modal/modal.ts",start:{line:186,character:2,position:5071},end:{line:186,character:22,position:5091},type:"() => void",defaultValue:"() => {}"},{name:"onVisibleChange",description:"Event to be triggered when the visible property changes.",fileName:"core/src/components/modal/modal.ts",start:{line:166,character:2,position:4700},end:{line:166,character:46,position:4744},type:"(visible: boolean) => void",defaultValue:"() => {}"},{name:"visible",description:"Whether the modal should be visible when the transition is completed.",fileName:"core/src/components/modal/modal.ts",start:{line:77,character:2,position:2634},end:{line:77,character:19,position:2651},type:"boolean",defaultValue:"false"}],L=[{name:"ariaCloseButtonLabel",description:"Value of the aria-label attribute to put on the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:44,character:2,position:1913},end:{line:44,character:31,position:1942},type:"string"},{name:"backdropClass",description:"Classes to add on the backdrop DOM element.",fileName:"core/src/components/modal/modal.ts",start:{line:51,character:2,position:2030},end:{line:51,character:24,position:2052},type:"string"},{name:"backdropHidden",description:`Whether the backdrop is fully hidden. This can be true either because backdrop is false or
because visible is false and there is no current transition.`,fileName:"core/src/components/modal/modal.ts",start:{line:197,character:2,position:5422},end:{line:197,character:26,position:5446},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"closeButton",description:"Whether to display the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:58,character:2,position:2135},end:{line:58,character:23,position:2156},type:"boolean"},{name:"container",description:`Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.`,fileName:"core/src/components/modal/modal.ts",start:{line:70,character:2,position:2487},end:{line:70,character:32,position:2517},type:"HTMLElement"},{name:"hidden",description:"Whether the modal is fully hidden.",fileName:"core/src/components/modal/modal.ts",start:{line:202,character:2,position:5498},end:{line:202,character:18,position:5514},type:"boolean"},{name:"modalElement",description:"DOM element of the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:212,character:2,position:5672},end:{line:212,character:35,position:5705},type:"HTMLElement"},{name:"transitioning",description:"Whether there is an active transition to either display or hide the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:207,character:2,position:5606},end:{line:207,character:25,position:5629},type:"boolean"},{name:"visible",description:"Whether the modal should be visible when the transition is completed.",fileName:"core/src/components/modal/modal.ts",start:{line:77,character:2,position:2634},end:{line:77,character:19,position:2651},type:"boolean"}],R=[{name:"close",description:"Closes the modal with the given result.",fileName:"core/src/components/modal/modal.ts",start:{line:225,character:2,position:6143},end:{line:225,character:28,position:6169},type:"(result?: any) => void"},{name:"open",description:`Opens the modal and returns a promise that is resolved when the modal is closed.
The resolved value is the result passed to the close method and possibly changed by the
onBeforeClose event handler`,fileName:"core/src/components/modal/modal.ts",start:{line:232,character:2,position:6447},end:{line:232,character:23,position:6468},type:"() => Promise<any>"},{name:"patch",description:"Method to change some modal properties.",fileName:"core/src/components/modal/modal.ts",start:{line:237,character:2,position:6525},end:{line:237,character:30,position:6553},type:"(parameters: Partial<ModalProps>) => void"}],x={props:B,state:L,api:R};function H(o){let t,n;return t=new w({props:{sample:$,config:D(),height:250,noresize:!0,doc:x,listPropsValues:o[0]}}),{c(){u(t.$$.fragment)},l(e){f(t.$$.fragment,e)},m(e,a){b(t,e,a),n=!0},p(e,[a]){const r={};a&1&&(r.listPropsValues=e[0]),t.$set(r)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function A(o,t,n){let{listPropsValues:e={backdropTransition:["fade"],modalTransition:["fade"],onBeforeClose:["noop","log"],onHidden:["noop","log"],onShown:["noop","log"],onVisibleChange:["noop","log"]}}=t;return o.$$set=a=>{"listPropsValues"in a&&n(0,e=a.listPropsValues)},[e]}class J extends p{constructor(t){super(),h(this,t,A,H,m,{listPropsValues:0})}}export{J as component};
