const e=`import { SvelteComponentTyped } from "svelte";
import type { SliderContext, SliderSlots } from './slider';
declare const __propDef: {
    props: SliderContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: SliderSlots;
};
export type SliderDefaultStructureProps = typeof __propDef.props;
export type SliderDefaultStructureEvents = typeof __propDef.events;
export type SliderDefaultStructureSlots = typeof __propDef.slots;
export default class SliderDefaultStructure extends SvelteComponentTyped<SliderDefaultStructureProps, SliderDefaultStructureEvents, SliderDefaultStructureSlots> {
}
export {};
`;export{e as default};