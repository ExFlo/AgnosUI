const e=`import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { PropsWithChildren } from 'react';
import type { SliderWidget, SliderSlotHandleContext, SliderContext, SliderProps } from './slider.gen';
export type * from './slider.gen';
export declare const createSlider: WidgetFactory<SliderWidget>;
export declare const DefaultSlotHandle: (slotContext: SliderSlotHandleContext) => import("react/jsx-runtime").JSX.Element;
export declare const DefaultSlotStructure: (slotContext: SliderContext) => import("react/jsx-runtime").JSX.Element;
export declare function Slider(props: PropsWithChildren<Partial<SliderProps>>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
