import type {
	SlotContent as CoreSlotContent,
	WidgetsConfig as CoreWidgetsConfig,
	Partial2Levels,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
	WidgetsConfigStore,
} from '@agnos-ui/core';
import {createWidgetsConfig, findChangedProperties} from '@agnos-ui/core';
import {computed} from '@amadeus-it-group/tansu';
import type {ComponentType, SvelteComponent} from 'svelte';
import {getContext, setContext, createEventDispatcher as svelteCreateEventDispatcher} from 'svelte';

export function createPatchChangedProps<T extends object>(patchFn: (arg: Partial<T>) => void) {
	let previousProps: Partial<T> = {};
	return (props: Partial<T>) => {
		const changedProps = findChangedProperties(previousProps, props);
		previousProps = props;
		if (changedProps) {
			patchFn(changedProps);
		}
	};
}

/**
 * Key used in the Svelte context to get or set the widgets default configuration store.
 */
export const widgetsDefaultConfigKey = Symbol('widgetsConfig');

/**
 * Creates in the Svelte context hierarchy a new widgets default configuration store that inherits from any widgets default configuration
 * store already defined at an upper level in the Svelte context hierarchy.
 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.
 *
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * defined at an upper level in the Svelte context hierarchy (or an empty object if there is none) and returns the widgets
 * default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 *
 * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:
 * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
 * The resulting store is writable, its set function is actually the set function of the own$ store.
 *
 * @example
 * ```ts
 * const widgetsConfig = createWidgetsDefaultConfig((parentConfig) => {
 *   // first step configuration: transforms the parent configuration
 *   parentConfig.rating = parentConfig.rating ?? {};
 *   parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
 *   return parentConfig;
 * });
 * widgetsConfig.set({
 *   // second step configuration: overrides the parent configuration
 *   rating: {
 *     slotStar: MyCustomSlotStar
 *   }
 * });
 * ```
 */
export const createWidgetsDefaultConfig = (adaptParentConfig?: (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>) => {
	const parent$ = getContext<WidgetsConfigStore<WidgetsConfig>>(widgetsDefaultConfigKey);
	const child$ = createWidgetsConfig(parent$, adaptParentConfig);
	setContext(widgetsDefaultConfigKey, child$);
	return child$;
};

export function withPatchChangedProps<T extends {patch: (arg: object) => void}>(api: T): T & {patchChangedProps: T['patch']} {
	const patchChangedProps = createPatchChangedProps(api.patch);
	return {...api, patchChangedProps};
}

export const createEventDispatcher = <T extends object>() =>
	svelteCreateEventDispatcher<{[K in keyof T]: T[K] extends CustomEvent<infer U> ? U : never}>();

export type WidgetPropsProps<Props extends object> = Partial<Omit<Props, `on${string}`>>;

export type WidgetPropsEvents<Props extends object> = {
	[K in keyof Props & `on${string}` as K extends `on${infer U}` ? Uncapitalize<U> : never]: NonNullable<Props[K]> extends (arg: infer U) => void
		? CustomEvent<U>
		: never;
};

export type WidgetPropsSlots<Props extends object> = {
	[K in keyof Props & `slot${string}` as K extends `slot${infer U}` ? Uncapitalize<U> : never]: Props[K] extends SlotContent<infer U> ? U : never;
};

export type SlotsPresent<Props extends object> = {
	[K in keyof Props & `slot${string}` as K extends `slot${infer U}` ? Uncapitalize<U> : never]: boolean;
};

const getContextWidgetConfig = <Props extends object>(
	widgetName: keyof WidgetsConfig | null,
	slots: SlotsPresent<Props>,
	defaultConfig?: Partial<Props>
) => {
	const config$ = widgetName ? getContext<WidgetsConfigStore<WidgetsConfig>>(widgetsDefaultConfigKey) : undefined;
	const processedSlots: any = {};
	for (const [name, present] of Object.entries(slots)) {
		if (present) {
			processedSlots[`slot${name[0].toUpperCase()}${name.substring(1)}`] = useSvelteSlot;
		}
	}
	return computed(() => ({...defaultConfig, ...(widgetName ? config$?.()[widgetName] : undefined), ...processedSlots}));
};

export const callWidgetFactory = <W extends Widget>(
	factory: WidgetFactory<W>,
	widgetName: keyof WidgetsConfig | null,
	slots: SlotsPresent<WidgetProps<AdaptWidgetSlots<W>>>,
	defaultConfig?: Partial<WidgetProps<AdaptWidgetSlots<W>>>
): AdaptWidgetSlots<W> & {patchChangedProps: AdaptWidgetSlots<W>['patch']} =>
	withPatchChangedProps(factory({config: getContextWidgetConfig(widgetName, slots, defaultConfig)}) as any);

export const useSvelteSlot = Symbol('useSvelteSlot');

export type SlotSvelteComponent<Props extends object = object> = ComponentType<
	SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>
>;

export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;

export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U>
	? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>>
	: AdaptPropsSlots<Props>;

export type AdaptPropsSlots<Props> = Omit<Props, `slot${string}`> & {
	[K in keyof Props & `slot${string}`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};

export type WidgetsConfig = {
	[WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptPropsSlots<WidgetProps<W>>,
	AdaptPropsSlots<WidgetState<W>>,
	W['api'],
	W['actions'],
	W['directives']
>;

export const isSvelteComponent = <Props extends object>(content: SlotContent<Props>): content is SlotSvelteComponent<Props> => {
	// in prod mode, a svelte component has $set on its prototype
	// in dev mode with hmr (hot module reload), a svelte component has nothing on its prototype, but its name starts with Proxy<
	return (
		(typeof content === 'function' && !!content.prototype && (content.prototype.$set || /^Proxy</.test(content.name))) ||
		// when using Server Side Rendering, a svelte component is an object with a render function:
		// (cf https://svelte.dev/docs/server-side-component-api)
		typeof (content as any)?.render === 'function'
	);
};