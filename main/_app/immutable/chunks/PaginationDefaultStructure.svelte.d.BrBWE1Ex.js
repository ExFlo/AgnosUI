const t=`import { SvelteComponentTyped } from "svelte";
import type { PaginationContext, PaginationSlots } from './pagination';
declare const __propDef: {
    props: PaginationContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: PaginationSlots;
};
export type PaginationDefaultStructureProps = typeof __propDef.props;
export type PaginationDefaultStructureEvents = typeof __propDef.events;
export type PaginationDefaultStructureSlots = typeof __propDef.slots;
export default class PaginationDefaultStructure extends SvelteComponentTyped<PaginationDefaultStructureProps, PaginationDefaultStructureEvents, PaginationDefaultStructureSlots> {
}
export {};
`;export{t as default};