const e=[{name:"animated",description:"Whether the modal and its backdrop (if present) should be animated when shown or hidden.",fileName:"core/src/components/modal/modal.ts",start:{line:107,character:2,position:3508},end:{line:107,character:20,position:3526},type:"boolean",defaultValue:"true"},{name:"ariaCloseButtonLabel",description:"Value of the aria-label attribute to put on the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:44,character:2,position:1920},end:{line:44,character:31,position:1949},type:"string",defaultValue:"'Close'"},{name:"backdrop",description:"Whether a backdrop should be created behind the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:114,character:2,position:3627},end:{line:114,character:20,position:3645},type:"boolean",defaultValue:"true"},{name:"backdropClass",description:"Classes to add on the backdrop DOM element.",fileName:"core/src/components/modal/modal.ts",start:{line:51,character:2,position:2037},end:{line:51,character:24,position:2059},type:"string",defaultValue:"''"},{name:"backdropTransition",description:"The transition to use for the backdrop behind the modal (if present).",fileName:"core/src/components/modal/modal.ts",start:{line:124,character:2,position:3791},end:{line:124,character:35,position:3824},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"closeButton",description:"Whether to display the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:58,character:2,position:2142},end:{line:58,character:23,position:2163},type:"boolean",defaultValue:"true"},{name:"closeOnOutsideClick",description:"Whether the modal should be closed when clicking on the viewport outside the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:131,character:2,position:3954},end:{line:131,character:31,position:3983},type:"boolean",defaultValue:"true"},{name:"container",description:`Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.`,fileName:"core/src/components/modal/modal.ts",start:{line:70,character:2,position:2494},end:{line:70,character:32,position:2524},type:"HTMLElement",defaultValue:"typeof window !== 'undefined' ? document.body : null"},{name:"modalTransition",description:"The transition to use for the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:141,character:2,position:4096},end:{line:141,character:32,position:4126},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"onBeforeClose",description:"Event to be triggered when the modal is about to be closed (i.e. the close method was called).",fileName:"core/src/components/modal/modal.ts",start:{line:154,character:2,position:4468},end:{line:154,character:56,position:4522},type:"(event: ModalBeforeCloseEvent) => void",defaultValue:"() => {}"},{name:"onHidden",description:"Event to be triggered when the transition is completed and the modal is not visible.",fileName:"core/src/components/modal/modal.ts",start:{line:176,character:2,position:4906},end:{line:176,character:23,position:4927},type:"() => void",defaultValue:"() => {}"},{name:"onShown",description:"Event to be triggered when the transition is completed and the modal is visible.",fileName:"core/src/components/modal/modal.ts",start:{line:186,character:2,position:5078},end:{line:186,character:22,position:5098},type:"() => void",defaultValue:"() => {}"},{name:"onVisibleChange",description:"Event to be triggered when the visible property changes.",fileName:"core/src/components/modal/modal.ts",start:{line:166,character:2,position:4707},end:{line:166,character:46,position:4751},type:"(visible: boolean) => void",defaultValue:"() => {}"},{name:"visible",description:"Whether the modal should be visible when the transition is completed.",fileName:"core/src/components/modal/modal.ts",start:{line:77,character:2,position:2641},end:{line:77,character:19,position:2658},type:"boolean",defaultValue:"false"}],t=[{name:"ariaCloseButtonLabel",description:"Value of the aria-label attribute to put on the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:44,character:2,position:1920},end:{line:44,character:31,position:1949},type:"string"},{name:"backdropClass",description:"Classes to add on the backdrop DOM element.",fileName:"core/src/components/modal/modal.ts",start:{line:51,character:2,position:2037},end:{line:51,character:24,position:2059},type:"string"},{name:"backdropHidden",description:`Whether the backdrop is fully hidden. This can be true either because backdrop is false or
because visible is false and there is no current transition.`,fileName:"core/src/components/modal/modal.ts",start:{line:197,character:2,position:5443},end:{line:197,character:26,position:5467},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"closeButton",description:"Whether to display the close button.",fileName:"core/src/components/modal/modal.ts",start:{line:58,character:2,position:2142},end:{line:58,character:23,position:2163},type:"boolean"},{name:"container",description:`Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.`,fileName:"core/src/components/modal/modal.ts",start:{line:70,character:2,position:2494},end:{line:70,character:32,position:2524},type:"HTMLElement"},{name:"hidden",description:"Whether the modal is fully hidden.",fileName:"core/src/components/modal/modal.ts",start:{line:202,character:2,position:5519},end:{line:202,character:18,position:5535},type:"boolean"},{name:"modalElement",description:"DOM element of the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:212,character:2,position:5693},end:{line:212,character:35,position:5726},type:"HTMLElement"},{name:"transitioning",description:"Whether there is an active transition to either display or hide the modal.",fileName:"core/src/components/modal/modal.ts",start:{line:207,character:2,position:5627},end:{line:207,character:25,position:5650},type:"boolean"},{name:"visible",description:"Whether the modal should be visible when the transition is completed.",fileName:"core/src/components/modal/modal.ts",start:{line:77,character:2,position:2641},end:{line:77,character:19,position:2658},type:"boolean"}],o=[{name:"close",description:"Closes the modal with the given result.",fileName:"core/src/components/modal/modal.ts",start:{line:225,character:2,position:6164},end:{line:225,character:28,position:6190},type:"(result?: any) => void"},{name:"open",description:`Opens the modal and returns a promise that is resolved when the modal is closed.
The resolved value is the result passed to the close method and possibly changed by the
onBeforeClose event handler`,fileName:"core/src/components/modal/modal.ts",start:{line:232,character:2,position:6468},end:{line:232,character:23,position:6489},type:"() => Promise<any>"},{name:"patch",description:"Method to change some modal properties.",fileName:"core/src/components/modal/modal.ts",start:{line:237,character:2,position:6546},end:{line:237,character:30,position:6574},type:"(parameters: Partial<ModalProps>) => void"}],a={props:e,state:t,api:o};export{a as w};