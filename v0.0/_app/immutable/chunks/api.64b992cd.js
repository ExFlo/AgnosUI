import"./index.es.5c333286.js";import"./modal.becd5ecb.js";const t=()=>{},i={rating:0,tabindex:0,maxRating:10,disabled:!1,readonly:!1,resettable:!0,ariaValueTextFn:(e,a)=>`${e} out of ${a}`,onHover:t,onLeave:t,onRatingChange:t,className:"",slotStar:({fill:e})=>String.fromCharCode(e===100?9733:9734),ariaLabel:"Rating",ariaLabelledBy:""};function c(){return{...i}}const n=[{name:"ariaLabel",description:"The aria label",fileName:"core/lib/rating.ts",start:{line:66,character:2,position:1485},end:{line:66,character:20,position:1503},type:"string",defaultValue:"'Rating'"},{name:"ariaLabelledBy",description:"The aria labelled by",fileName:"core/lib/rating.ts",start:{line:71,character:2,position:1541},end:{line:71,character:25,position:1564},type:"string",defaultValue:"''"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-value' attribute.",fileName:"core/lib/rating.ts",start:{line:80,character:2,position:1779},end:{line:80,character:65,position:1842},type:"(rating: number, maxRating: number) => string",defaultValue:"(rating: number, maxRating: number) => `${rating} out of ${maxRating}`"},{name:"className",description:"Classname to be applied on the rating container",fileName:"core/lib/rating.ts",start:{line:56,character:2,position:1326},end:{line:56,character:20,position:1344},type:"string",defaultValue:"''"},{name:"disabled",description:"If `true`, the rating is disabled.",fileName:"core/lib/rating.ts",start:{line:33,character:2,position:847},end:{line:33,character:20,position:865},type:"boolean",defaultValue:"false"},{name:"maxRating",description:"The maximum rating that can be given.",fileName:"core/lib/rating.ts",start:{line:28,character:2,position:777},end:{line:28,character:20,position:795},type:"number",defaultValue:"10"},{name:"onHover",description:`An event emitted when the user is hovering over a given rating.

Event payload is equal to the rating being hovered over.`,fileName:"core/lib/rating.ts",start:{line:94,character:2,position:2152},end:{line:94,character:36,position:2186},type:"(rating: number) => void",defaultValue:"noop"},{name:"onLeave",description:`An event emitted when the user stops hovering over a given rating.

Event payload is equal to the rating of the last item being hovered over.`,fileName:"core/lib/rating.ts",start:{line:101,character:2,position:2352},end:{line:101,character:36,position:2386},type:"(rating: number) => void",defaultValue:"noop"},{name:"onRatingChange",description:`An event emitted when the rating is changed.

Event payload is equal to the newly selected rating.`,fileName:"core/lib/rating.ts",start:{line:87,character:2,position:1965},end:{line:87,character:43,position:2006},type:"(rating: number) => void",defaultValue:"noop"},{name:"rating",description:"The current rating. Could be a decimal value like `3.75`.",fileName:"core/lib/rating.ts",start:{line:23,character:2,position:707},end:{line:23,character:17,position:722},type:"number",defaultValue:"0"},{name:"readonly",description:"If `true`, the rating can't be changed.",fileName:"core/lib/rating.ts",start:{line:38,character:2,position:922},end:{line:38,character:20,position:940},type:"boolean",defaultValue:"false"},{name:"resettable",description:`Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.`,fileName:"core/lib/rating.ts",start:{line:45,character:2,position:1094},end:{line:45,character:22,position:1114},type:"boolean",defaultValue:"true"},{name:"slotStar",description:"The template to override the way each star is displayed.",fileName:"core/lib/rating.ts",start:{line:61,character:2,position:1418},end:{line:61,character:37,position:1453},type:"SlotContent<StarContext>",defaultValue:"({fill}) => String.fromCharCode(fill === 100 ? 9733 : 9734)"},{name:"tabindex",description:"Allows setting a custom rating tabindex.\nIf the component is disabled, `tabindex` will still be set to `-1`.",fileName:"core/lib/rating.ts",start:{line:51,character:2,position:1244},end:{line:51,character:19,position:1261},type:"number",defaultValue:"0"}],r=[{name:"ariaLabel",description:"The aria label",fileName:"core/lib/rating.ts",start:{line:66,character:2,position:1485},end:{line:66,character:20,position:1503},type:"string"},{name:"ariaLabelledBy",description:"The aria labelled by",fileName:"core/lib/rating.ts",start:{line:71,character:2,position:1541},end:{line:71,character:25,position:1564},type:"string"},{name:"ariaValueText",description:"the aria value of the rating",fileName:"core/lib/rating.ts",start:{line:108,character:2,position:2499},end:{line:108,character:24,position:2521},type:"string"},{name:"className",description:"Classname to be applied on the rating container",fileName:"core/lib/rating.ts",start:{line:56,character:2,position:1326},end:{line:56,character:20,position:1344},type:"string"},{name:"disabled",description:"If `true`, the rating is disabled.",fileName:"core/lib/rating.ts",start:{line:33,character:2,position:847},end:{line:33,character:20,position:865},type:"boolean"},{name:"isInteractive",description:"is the rating interactive i.e. listening to hover, click and keyboard events",fileName:"core/lib/rating.ts",start:{line:116,character:2,position:2769},end:{line:116,character:25,position:2792},type:"boolean"},{name:"maxRating",description:"The maximum rating that can be given.",fileName:"core/lib/rating.ts",start:{line:28,character:2,position:777},end:{line:28,character:20,position:795},type:"number"},{name:"rating",description:"The current rating. Could be a decimal value like `3.75`.",fileName:"core/lib/rating.ts",start:{line:23,character:2,position:707},end:{line:23,character:17,position:722},type:"number"},{name:"readonly",description:"If `true`, the rating can't be changed.",fileName:"core/lib/rating.ts",start:{line:38,character:2,position:922},end:{line:38,character:20,position:940},type:"boolean"},{name:"resettable",description:`Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.`,fileName:"core/lib/rating.ts",start:{line:45,character:2,position:1094},end:{line:45,character:22,position:1114},type:"boolean"},{name:"slotStar",description:"The template to override the way each star is displayed.",fileName:"core/lib/rating.ts",start:{line:61,character:2,position:1418},end:{line:61,character:37,position:1453},type:"SlotContent<StarContext>"},{name:"stars",description:"the list of stars",fileName:"core/lib/rating.ts",start:{line:120,character:2,position:2826},end:{line:120,character:23,position:2847},type:"StarContext[]"},{name:"tabindex",description:"Allows setting a custom rating tabindex.\nIf the component is disabled, `tabindex` will still be set to `-1`.",fileName:"core/lib/rating.ts",start:{line:51,character:2,position:1244},end:{line:51,character:19,position:1261},type:"number"},{name:"visibleRating",description:"the visible value of the rating (it changes when hovering over the rating even though the real value did not change)",fileName:"core/lib/rating.ts",start:{line:112,character:2,position:2654},end:{line:112,character:24,position:2676},type:"number"}],o=[],p={props:n,state:r,api:o};export{p as d,c as g};