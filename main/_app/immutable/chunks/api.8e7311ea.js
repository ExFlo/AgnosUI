import{r as c,w as m,b as p,n as a,c as s}from"./stores.7b910c75.js";import{f as d}from"./fade.e6e5d115.js";c(void 0);const h={equal:Object.is},u=()=>{const t=m([],h);return p(t,{register:i=>{let e=!1;return t.update(o=>[...o,i]),()=>{e||(e=!0,t.update(o=>{const n=o.indexOf(i);if(n>-1){const l=[...o];return l.splice(n,1),l}return o}))}}})},f=()=>{const t=Math.abs(window.innerWidth-document.documentElement.clientWidth),i=document.body,e=i.style,{overflow:o,paddingRight:n}=e;if(t>0){const l=parseFloat(window.getComputedStyle(i).paddingRight);e.paddingRight=`${l+t}px`}return e.overflow="hidden",()=>{t>0&&(e.paddingRight=n),e.overflow=o}};let r=a;const b=()=>{r(),r=f()},y=()=>{r(),r=a},g={animation:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:d,closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:d,onBeforeClose:a,onVisibleChange:a,onHidden:a,onShown:a,slotDefault:void 0,slotFooter:void 0,slotHeader:void 0,slotStructure:void 0,slotTitle:void 0,visible:!1};function k(){return{...g}}const v=u(),C=s(()=>v().length>0),N=s(()=>{C()?b():y()});s(()=>{N()});const w=[{name:"animation",description:"Whether the modal and its backdrop (if present) should be animated when shown or hidden.",fileName:"core/lib/modal/modal.ts",start:{line:123,character:2,position:3768},end:{line:123,character:21,position:3787},type:"boolean",defaultValue:"true"},{name:"ariaCloseButtonLabel",description:"Value of the aria-label attribute to put on the close button.",fileName:"core/lib/modal/modal.ts",start:{line:47,character:2,position:1723},end:{line:47,character:31,position:1752},type:"string",defaultValue:"'Close'"},{name:"backdrop",description:"Whether a backdrop should be created behind the modal.",fileName:"core/lib/modal/modal.ts",start:{line:128,character:2,position:3859},end:{line:128,character:20,position:3877},type:"boolean",defaultValue:"true"},{name:"backdropClass",description:"Classes to add on the backdrop DOM element.",fileName:"core/lib/modal/modal.ts",start:{line:52,character:2,position:1813},end:{line:52,character:24,position:1835},type:"string",defaultValue:"''"},{name:"backdropTransition",description:"The transition to use for the backdrop behind the modal (if present).",fileName:"core/lib/modal/modal.ts",start:{line:133,character:2,position:3964},end:{line:133,character:35,position:3997},type:"TransitionFn",defaultValue:"fadeTransition"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"closeButton",description:"Whether to display the close button.",fileName:"core/lib/modal/modal.ts",start:{line:57,character:2,position:1889},end:{line:57,character:23,position:1910},type:"boolean",defaultValue:"true"},{name:"closeOnOutsideClick",description:"Whether the modal should be closed when clicking on the viewport outside the modal.",fileName:"core/lib/modal/modal.ts",start:{line:138,character:2,position:4098},end:{line:138,character:31,position:4127},type:"boolean",defaultValue:"true"},{name:"container",description:`Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.`,fileName:"core/lib/modal/modal.ts",start:{line:64,character:2,position:2144},end:{line:64,character:32,position:2174},type:"HTMLElement | null",defaultValue:"typeof window !== 'undefined' ? document.body : null"},{name:"modalTransition",description:"The transition to use for the modal.",fileName:"core/lib/modal/modal.ts",start:{line:143,character:2,position:4181},end:{line:143,character:32,position:4211},type:"TransitionFn",defaultValue:"fadeTransition"},{name:"onBeforeClose",description:"Event to be triggered when the modal is about to be closed (i.e. the close method was called).",fileName:"core/lib/modal/modal.ts",start:{line:151,character:2,position:4500},end:{line:151,character:56,position:4554},type:"(event: ModalBeforeCloseEvent) => void",defaultValue:"noop"},{name:"onHidden",description:"Event to be triggered when the transition is completed and the modal is not visible.",fileName:"core/lib/modal/modal.ts",start:{line:163,character:2,position:4832},end:{line:163,character:23,position:4853},type:"() => void",defaultValue:"noop"},{name:"onShown",description:"Event to be triggered when the transition is completed and the modal is visible.",fileName:"core/lib/modal/modal.ts",start:{line:168,character:2,position:4951},end:{line:168,character:22,position:4971},type:"() => void",defaultValue:"noop"},{name:"onVisibleChange",description:"Event to be triggered when the visible property changes.",fileName:"core/lib/modal/modal.ts",start:{line:158,character:2,position:4686},end:{line:158,character:46,position:4730},type:"(visible: boolean) => void",defaultValue:"noop"},{name:"slotDefault",description:"Body of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:69,character:2,position:2210},end:{line:69,character:41,position:2249},type:"SlotContent<ModalContext>",defaultValue:"undefined"},{name:"slotFooter",description:"Footer of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:74,character:2,position:2287},end:{line:74,character:40,position:2325},type:"SlotContent<ModalContext>",defaultValue:"undefined"},{name:"slotHeader",description:"Header of the modal. The default header includes slotTitle.",fileName:"core/lib/modal/modal.ts",start:{line:79,character:2,position:2445},end:{line:79,character:40,position:2483},type:"SlotContent<ModalContext>",defaultValue:"undefined"},{name:"slotStructure",description:`Structure of the modal.
The default structure uses slotHeader, slotDefault and slotFooter.`,fileName:"core/lib/modal/modal.ts",start:{line:85,character:2,position:2728},end:{line:85,character:43,position:2769},type:"SlotContent<ModalContext>",defaultValue:"undefined"},{name:"slotTitle",description:"Title of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:90,character:2,position:2806},end:{line:90,character:39,position:2843},type:"SlotContent<ModalContext>",defaultValue:"undefined"},{name:"visible",description:"Whether the modal should be visible when the transition is completed.",fileName:"core/lib/modal/modal.ts",start:{line:95,character:2,position:2930},end:{line:95,character:19,position:2947},type:"boolean",defaultValue:"false"}],T=[{name:"ariaCloseButtonLabel",description:"Value of the aria-label attribute to put on the close button.",fileName:"core/lib/modal/modal.ts",start:{line:47,character:2,position:1723},end:{line:47,character:31,position:1752},type:"string"},{name:"backdropClass",description:"Classes to add on the backdrop DOM element.",fileName:"core/lib/modal/modal.ts",start:{line:52,character:2,position:1813},end:{line:52,character:24,position:1835},type:"string"},{name:"backdropHidden",description:`Whether the backdrop is fully hidden. This can be true either because backdrop is false or
because visible is false and there is no current transition.`,fileName:"core/lib/modal/modal.ts",start:{line:179,character:2,position:5316},end:{line:179,character:26,position:5340},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"closeButton",description:"Whether to display the close button.",fileName:"core/lib/modal/modal.ts",start:{line:57,character:2,position:1889},end:{line:57,character:23,position:1910},type:"boolean"},{name:"container",description:`Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.`,fileName:"core/lib/modal/modal.ts",start:{line:64,character:2,position:2144},end:{line:64,character:32,position:2174},type:"HTMLElement | null"},{name:"hidden",description:"Whether the modal is fully hidden.",fileName:"core/lib/modal/modal.ts",start:{line:184,character:2,position:5392},end:{line:184,character:18,position:5408},type:"boolean"},{name:"modalElement",description:"DOM element of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:194,character:2,position:5566},end:{line:194,character:35,position:5599},type:"HTMLElement | null"},{name:"slotDefault",description:"Body of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:69,character:2,position:2210},end:{line:69,character:41,position:2249},type:"SlotContent<ModalContext>"},{name:"slotFooter",description:"Footer of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:74,character:2,position:2287},end:{line:74,character:40,position:2325},type:"SlotContent<ModalContext>"},{name:"slotHeader",description:"Header of the modal. The default header includes slotTitle.",fileName:"core/lib/modal/modal.ts",start:{line:79,character:2,position:2445},end:{line:79,character:40,position:2483},type:"SlotContent<ModalContext>"},{name:"slotStructure",description:`Structure of the modal.
The default structure uses slotHeader, slotDefault and slotFooter.`,fileName:"core/lib/modal/modal.ts",start:{line:85,character:2,position:2728},end:{line:85,character:43,position:2769},type:"SlotContent<ModalContext>"},{name:"slotTitle",description:"Title of the modal.",fileName:"core/lib/modal/modal.ts",start:{line:90,character:2,position:2806},end:{line:90,character:39,position:2843},type:"SlotContent<ModalContext>"},{name:"transitioning",description:"Whether there is an active transition to either display or hide the modal.",fileName:"core/lib/modal/modal.ts",start:{line:189,character:2,position:5500},end:{line:189,character:25,position:5523},type:"boolean"},{name:"visible",description:"Whether the modal should be visible when the transition is completed.",fileName:"core/lib/modal/modal.ts",start:{line:95,character:2,position:2930},end:{line:95,character:19,position:2947},type:"boolean"}],M=[{name:"close",description:"Closes the modal with the given result.",fileName:"core/lib/modal/modal.ts",start:{line:207,character:2,position:6037},end:{line:207,character:28,position:6063},type:"(result?: any) => void"},{name:"open",description:`Opens the modal and returns a promise that is resolved when the modal is closed.
The resolved value is the result passed to the close method and possibly changed by the
onBeforeClose event handler`,fileName:"core/lib/modal/modal.ts",start:{line:214,character:2,position:6341},end:{line:214,character:23,position:6362},type:"() => Promise<any>"},{name:"patch",description:"Method to change some modal properties.",fileName:"core/lib/modal/modal.ts",start:{line:219,character:2,position:6419},end:{line:219,character:30,position:6447},type:"ModalWidget['patch']"}],O={props:w,state:T,api:M};export{O as d,k as g};