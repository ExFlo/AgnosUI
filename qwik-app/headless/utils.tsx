// import type {Widget, WidgetFactory, WidgetProps} from '@agnos-ui/core';
// import {toReadableStore} from '@agnos-ui/core';
// import type {ReadableSignal} from '@amadeus-it-group/tansu';
// import {computed, writable} from '@amadeus-it-group/tansu';

// export const callWidgetFactoryWithConfig = <W extends Widget>({
// 	factory,
// 	defaultConfig,
// 	widgetConfig,
// 	events,
// }: {
// 	factory: WidgetFactory<W>;
// 	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
// 	widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
// 	events: Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>;
// }): WithPatchSlots<W> => {
// 	const defaultConfig$ = toReadableStore(defaultConfig);
// 	const slots$ = writable({});
// 	const widget = factory({
// 		config: computed(() => ({...defaultConfig$(), ...widgetConfig?.(), ...slots$(), ...(events as Partial<WidgetProps<W>>)})),
// 	});
// 	return {
// 		...widget,
// 		patch: widget.patch,
// 		directives: widget.directives,
// 		actions: widget.actions,
// 		api: widget.api,
// 		patchSlots: createPatchSlots(slots$.set),
// 	};
// };
