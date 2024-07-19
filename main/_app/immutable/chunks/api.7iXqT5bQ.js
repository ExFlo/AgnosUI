const e=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"closeOthers",description:"If `true`, only one accordion-item at the time can stay open.",fileName:"core/src/components/accordion/accordion.ts",start:{line:41,character:2,position:1773},end:{line:41,character:23,position:1794},type:"boolean",defaultValue:"false"},{name:"itemAnimated",description:"If `true`, accordion-item will be animated.",fileName:"core/src/components/accordion/accordion.ts",start:{line:75,character:2,position:2483},end:{line:75,character:24,position:2505},type:"boolean",defaultValue:"true"},{name:"itemBodyClassName",description:"CSS classes to add on the accordion-item body DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:115,character:2,position:3440},end:{line:115,character:28,position:3466},type:"string",defaultValue:"''"},{name:"itemBodyContainerClassName",description:`CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:109,character:2,position:3303},end:{line:109,character:37,position:3338},type:"string",defaultValue:"''"},{name:"itemButtonClassName",description:"CSS classes to add on the accordion-item toggle button DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:102,character:2,position:3067},end:{line:102,character:30,position:3095},type:"string",defaultValue:"''"},{name:"itemClassName",description:"CSS classes to add on the accordion-item DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:90,character:2,position:2802},end:{line:90,character:24,position:2824},type:"string",defaultValue:"''"},{name:"itemDestroyOnHide",description:"If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.",fileName:"core/src/components/accordion/accordion.ts",start:{line:69,character:2,position:2367},end:{line:69,character:29,position:2394},type:"boolean",defaultValue:"true"},{name:"itemHeaderClassName",description:"CSS classes to add on the accordion-item header DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:96,character:2,position:2928},end:{line:96,character:30,position:2956},type:"string",defaultValue:"''"},{name:"itemHeadingTag",description:"The html tag to use for the accordion-item-header.",fileName:"core/src/components/accordion/accordion.ts",start:{line:121,character:2,position:3560},end:{line:121,character:25,position:3583},type:"string",defaultValue:"''"},{name:"itemTransition",description:"The transition to use for the accordion-item body-container when the accordion-item is toggled.",fileName:"core/src/components/accordion/accordion.ts",start:{line:84,character:2,position:2676},end:{line:84,character:31,position:2705},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"onItemHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:63,character:2,position:2137},end:{line:63,character:41,position:2176},type:"(itemId: string) => void",defaultValue:"() => {}"},{name:"onItemShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:52,character:2,position:1946},end:{line:52,character:40,position:1984},type:"(itemId: string) => void",defaultValue:"() => {}"}],t=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"itemWidgets",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:128,character:2,position:3740},end:{line:128,character:37,position:3775},type:"AccordionItemWidget[]"}],o=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:143,character:2,position:4115},end:{line:143,character:33,position:4146},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:159,character:2,position:4548},end:{line:159,character:22,position:4568},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:137,character:2,position:3947},end:{line:137,character:31,position:3976},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:155,character:2,position:4455},end:{line:155,character:20,position:4473},type:"() => void"},{name:"registerItem",description:"Creates a new accordionItem.",fileName:"core/src/components/accordion/accordion.ts",start:{line:163,character:2,position:4613},end:{line:163,character:82,position:4693},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:149,character:2,position:4283},end:{line:149,character:31,position:4312},type:"(itemId: string) => void"}],i={props:e,state:t,api:o};export{i as w};