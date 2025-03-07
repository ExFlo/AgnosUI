import type {SlotContent as CoreSlotContent, Widget, WidgetState, Extends} from '@agnos-ui/core/types';
import type {Signal, TemplateRef, Type} from '@angular/core';
import {computed, Directive, input} from '@angular/core';

export * from '@agnos-ui/core/types';

/**
 * Represents a template for a component with specified properties.
 *
 * @template Props - The type of properties that the template accepts.
 * @template K - The key in the template object that maps to the template reference.
 * @template T - An object type where each key of type K maps to a TemplateRef of Props.
 *
 * @param component - The component type that contains the template.
 * @param templateProp - The key in the component that maps to the template reference.
 */
export class ComponentTemplate<Props, K extends string, T extends {[key in K]: Signal<TemplateRef<Props>>}> {
	constructor(
		public readonly component: Type<T>,
		public readonly templateProp: K,
	) {}
}

/**
 * Represents the content that can be used in a slot.
 *
 * @template Props - The type of the properties that the slot content can accept.
 *
 * This type can be one of the following:
 * - `undefined | null`: Nullish value
 * - `string`: A static string
 * - `(props: Props) => string`: A function that takes props as input and returns a string template
 * - `TemplateRef<Props>`: A reference to an Angular template with the specified properties.
 * - `Type<unknown>`: A type representing an unknown component or directive.
 * - `ComponentTemplate<Props, any, any>`: A component template with the specified properties.
 */
export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| TemplateRef<Props>
	| Type<unknown>
	| ComponentTemplate<Props, any, any>;

/**
 * A directive representing a slot component that can be used to manage the state and context of a widget.
 *
 * @template W - The type of the widget that this slot component manages.
 */
@Directive()
export abstract class SlotComponent<W extends Widget> {
	/**
	 * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
	 */
	readonly state = input.required<AngularState<W>>();
	/**
	 * all the api functions to interact with the widget
	 */
	readonly api = input.required<W['api']>();
	/**
	 * directives to be used on html elements in the template of the slot
	 */
	readonly directives = input.required<W['directives']>();
	/**
	 * The slot context, to be used when the slot component uses other slots.
	 */
	readonly slotContext = computed(() => ({state: this.state(), api: this.api(), directives: this.directives()}));
}

/**
 * Type utility to determine if a given type `T` is or extends `SlotContent<any>`.
 *
 * This type alias uses conditional types to check if `T` extends `SlotContent<any>` or if `SlotContent<any>` extends `T`.
 * If either condition is true, it resolves to `T`, otherwise it resolves to `0`.
 *
 * @template T - The type to be checked.
 */
export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;

/**
 * Represents the state of an Angular widget, where each key in the widget's state
 * is mapped to a Signal of the corresponding state value.
 *
 * @template W - The type of the widget.
 */
export type AngularState<W extends Widget> = {[key in keyof WidgetState<W>]: Signal<WidgetState<W>[key]>};

/**
 * Represents an Angular widget that extends a base widget type.
 *
 * @template W - The type of the base widget.
 */
export interface AngularWidget<W extends Widget> extends Pick<W, 'api' | 'directives' | 'patch'> {
	/**
	 * A promise that resolves when the widget is initialized
	 */
	initialized: Promise<void>;
	/**
	 * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
	 */
	state: AngularState<W>;
	/**
	 * A function to initialize the Angular widget.
	 */
	ngInit: () => void;
	/**
	 * A utility function to update the slot properties.
	 */
	updateSlots: () => void;
}

/**
 * Represents the context for a widget slot, providing access to the widget and its state.
 *
 * @template W - The type of the widget.
 */
export interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api' | 'directives'> {
	/**
	 * The state of the widget. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
	 */
	state: AngularState<W>;
}
