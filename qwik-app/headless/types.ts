export * from '@agnos-ui/core';

import type {/*SlotContent as CoreSlotContent,*/ Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState} from '@agnos-ui/core';
import {QRL} from '@builder.io/qwik';

export type CoreSlotContent<Props extends object = object> = undefined | null | string | QRL<(props: Props) => string>;

export type SlotContent<Props extends object = object> = CoreSlotContent<Props>;
/*| ((props: Props) => React.ReactNode)
	| React.ComponentType<Props>
	| React.ReactNode*/

export type AdaptSlotContentProps<Props extends Record<string, any>> =
	Props extends WidgetSlotContext<infer U>
		? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>>
		: AdaptPropsSlots<Props>;

export type AdaptPropsSlots<Props> = Omit<Props, `slot${string}`> & {
	[K in keyof Props & `slot${string}`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};

// infer element
export type AdaptFunctionSlots<T> = {
	[K in keyof T]: T[K] extends (...args: infer Args) => infer Result ? QRL<(...args: Args) => Result> : T[K];
};

export type AdaptWidgetFactories<T> = {
	[K in keyof T]: T[K] extends WidgetFactory<infer U> ? WidgetFactory<AdaptWidgetSlots<U>> : T[K];
};

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptFunctionSlots<AdaptPropsSlots<WidgetProps<W>>>,
	AdaptFunctionSlots<AdaptPropsSlots<WidgetState<W>>>,
	AdaptWidgetFactories<W['api']>,
	W['actions'],
	W['directives']
>;
