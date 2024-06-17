const t=`import { SvelteComponent } from "svelte";
import type { AccordionItemContext, AccordionItemSlots } from './accordion';
declare const __propDef: {
    props: AccordionItemContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AccordionItemSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ItemDefaultStructureProps = typeof __propDef.props;
export type ItemDefaultStructureEvents = typeof __propDef.events;
export type ItemDefaultStructureSlots = typeof __propDef.slots;
export default class ItemDefaultStructure extends SvelteComponent<ItemDefaultStructureProps, ItemDefaultStructureEvents, ItemDefaultStructureSlots> {
}
export {};
`;export{t as default};