import {computed, readable} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {typeBoolean, typeFunction, typeHTMLElementOrNull, typeString} from '../../utils/writables';
import {stateStores, writablesForProps} from '../../utils/stores';
import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import {promiseFromStore} from '../../utils/internal/promise';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {noop} from '../../utils/func';
import {removeScrollbars, revertScrollbars} from '../../utils/internal/scrollbars';
import {
	bindDirective,
	browserDirective,
	createAttributesDirective,
	directiveSubscribe,
	mergeDirectives,
	registrationArray,
} from '../../utils/directive';
import {portal} from '../../services/portal';
import {siblingsInert} from '../../services/siblingsInert';

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
export const modalOutsideClick: unique symbol = Symbol();

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
export const modalCloseButtonClick: unique symbol = Symbol();

/**
 * Properties of the modal widget that are also in the state of the modal.
 */
interface ModalCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * Value of the aria-label attribute to put on the close button.
	 *
	 * @defaultValue `'Close'`
	 */
	ariaCloseButtonLabel: string;

	/**
	 * Classes to add on the backdrop DOM element.
	 *
	 * @defaultValue `''`
	 */
	backdropClass: string;

	/**
	 * Whether to display the close button.
	 *
	 * @defaultValue `true`
	 */
	closeButton: boolean;

	/**
	 * Which element should contain the modal and backdrop DOM elements.
	 * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
	 * Otherwise, they stay where the widget is located.
	 *
	 * @defaultValue
	 * ```ts
	 * typeof window !== 'undefined' ? document.body : null
	 * ```
	 */
	container: HTMLElement | null;

	/**
	 * Whether the modal should be visible when the transition is completed.
	 *
	 * @defaultValue `false`
	 */
	visible: boolean;
}

/**
 * Type of the parameter of {@link ModalProps.onBeforeClose|onBeforeClose}.
 */
export interface ModalBeforeCloseEvent {
	/**
	 * Result of the modal, which is the value passed to the {@link ModalApi.close|close} method
	 * and later resolved by the promise returned by the {@link ModalApi.open|open} method.
	 * If needed, it can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
	 */
	result: any;

	/**
	 * Whether to cancel the close of the modal.
	 * It can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
	 */
	cancel: boolean;
}

/**
 * Properties of the modal widget.
 */
export interface ModalProps extends ModalCommonPropsAndState {
	/**
	 * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
	 *
	 * @defaultValue `true`
	 */
	animated: boolean;

	/**
	 * Whether a backdrop should be created behind the modal.
	 *
	 * @defaultValue `true`
	 */
	backdrop: boolean;

	/**
	 * The transition to use for the backdrop behind the modal (if present).
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	backdropTransition: TransitionFn;

	/**
	 * Whether the modal should be closed when clicking on the viewport outside the modal.
	 *
	 * @defaultValue `true`
	 */
	closeOnOutsideClick: boolean;

	/**
	 * The transition to use for the modal.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	modalTransition: TransitionFn;

	/**
	 * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
	 *
	 * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
	 * to cancel the close process.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onBeforeClose: (event: ModalBeforeCloseEvent) => void;

	/**
	 * Event to be triggered when the visible property changes.
	 *
	 * @param visible - new value of the visible propery
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Event to be triggered when the transition is completed and the modal is not visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHidden: () => void;

	/**
	 * Event to be triggered when the transition is completed and the modal is visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onShown: () => void;
}

/**
 * State of the modal widget.
 */
export interface ModalState extends ModalCommonPropsAndState {
	/**
	 * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdrop|backdrop} is false or
	 * because {@link ModalProps.visible|visible} is false and there is no current transition.
	 */
	backdropHidden: boolean;

	/**
	 * Whether the modal is fully hidden.
	 */
	hidden: boolean;

	/**
	 * Whether there is an active transition to either display or hide the modal.
	 */
	transitioning: boolean;

	/**
	 * DOM element of the modal.
	 */
	modalElement: HTMLElement | null;
}

/**
 * API of the modal widget.
 */
export interface ModalApi {
	/**
	 * Closes the modal with the given result.
	 *
	 * @param result - result of the modal, as passed in the {@link ModalBeforeCloseEvent.result|result} property of the event passed to the
	 * {@link ModalProps.onBeforeClose|onBeforeClose} event handler (and possibly changed by it) and resolved by the promise returned by the {@link ModalApi.open|open} method.
	 */
	close(result?: any): void;

	/**
	 * Opens the modal and returns a promise that is resolved when the modal is closed.
	 * The resolved value is the result passed to the {@link ModalApi.close|close} method and possibly changed by the
	 * {@link ModalProps.onBeforeClose|onBeforeClose} event handler
	 */
	open(): Promise<any>;

	/**
	 * Method to change some modal properties.
	 */
	patch: ModalWidget['patch'];
}

/**
 * Directives of the modal widget.
 */
export interface ModalDirectives {
	/**
	 * Directive to put on the modal DOM element.
	 */
	modalDirective: Directive;

	/**
	 * Directive to put on the backdrop DOM element.
	 */
	backdropDirective: Directive;

	/**
	 * Portal directive to put on the modal DOM element.
	 */
	modalPortalDirective: Directive;

	/**
	 * Portal directive to put on the backdrop DOM element.
	 */
	backdropPortalDirective: Directive;

	/**
	 * Directive that adds all the necessary attributes to the close button
	 */
	closeButtonDirective: Directive;
	/**
	 * Directive to apply to the dialog element when using the native {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement | HTMLDialogElement}
	 */
	dialogDirective: Directive;
}

/**
 * Modal widget.
 */
export type ModalWidget = Widget<ModalProps, ModalState, ModalApi, ModalDirectives>;

const defaultConfig: ModalProps = {
	animated: true,
	ariaCloseButtonLabel: 'Close',
	backdrop: true,
	backdropClass: '',
	backdropTransition: noop,
	closeButton: true,
	closeOnOutsideClick: true,
	container: typeof window !== 'undefined' ? document.body : null,
	className: '',
	modalTransition: noop,
	onBeforeClose: noop,
	onVisibleChange: noop,
	onHidden: noop,
	onShown: noop,
	visible: false,
};

const configValidator: ConfigValidator<ModalProps> = {
	animated: typeBoolean,
	ariaCloseButtonLabel: typeString,
	backdrop: typeBoolean,
	backdropClass: typeString,
	backdropTransition: typeFunction,
	closeButton: typeBoolean,
	closeOnOutsideClick: typeBoolean,
	container: typeHTMLElementOrNull,
	className: typeString,
	modalTransition: typeFunction,
	onBeforeClose: typeFunction,
	onVisibleChange: typeFunction,
	onHidden: typeFunction,
	onShown: typeFunction,
	visible: typeBoolean,
};

/**
 * Returns a copy of the default modal config.
 * @returns a copy of the default modal config
 */
export function getModalDefaultConfig(): ModalProps {
	return {...defaultConfig};
}

const modals$ = registrationArray<ModalWidget>();
const hasModals$ = computed(() => modals$().length > 0);
const scrollbarsAction$ = computed(() => {
	if (hasModals$()) {
		removeScrollbars();
	} else {
		revertScrollbars();
	}
});
const modalsAction$ = computed(() => {
	scrollbarsAction$();
});

/**
 * Creates a new modal widget instance.
 * @param config$ - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export function createModal(config$?: PropsConfig<ModalProps>): ModalWidget {
	const [
		{
			animated$,
			backdrop$,
			backdropTransition$,
			closeOnOutsideClick$,
			container$,
			modalTransition$,
			onBeforeClose$,
			onVisibleChange$,
			onHidden$,
			onShown$,
			ariaCloseButtonLabel$,
			className$,
			backdropClass$,
			visible$: requestedVisible$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config$, configValidator);
	const modalTransition = createTransition({
		props: {
			transition: modalTransition$,
			visible: requestedVisible$,
			animated: animated$,
			animatedOnInit: animated$,
			onVisibleChange: onVisibleChange$,
			// TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
			// (especially in case one of the two transitions takes more time than the other)
			onHidden: onHidden$,
			onShown: onShown$,
		},
	});
	const visible$ = modalTransition.stores.visible$;
	const backdropTransition = createTransition({
		props: {
			transition: backdropTransition$,
			visible: requestedVisible$,
			animated: animated$,
			animatedOnInit: animated$,
		},
	});
	const transitioning$ = computed(() => modalTransition.stores.transitioning$() || (backdrop$() && backdropTransition.stores.transitioning$()));
	const hidden$ = computed(() => !transitioning$() && !visible$());
	const backdropHidden$ = computed(() => !backdrop$() || hidden$());
	let hideResult: any;

	const close = (result: any) => {
		hideResult = result;
		const beforeCloseEvent: ModalBeforeCloseEvent = {
			get result() {
				return hideResult;
			},
			set result(value: any) {
				hideResult = value;
			},
			cancel: false,
		};
		onBeforeClose$()(beforeCloseEvent);
		if (beforeCloseEvent.cancel) {
			return;
		}
		patch({visible: false});
	};

	const modalPortalDirective = bindDirective(
		portal,
		computed(() => ({container: container$()})),
	);
	const backdropPortalDirective = bindDirective(
		portal,
		computed(() => {
			const container = container$();
			const element = container ? modalTransition.stores.element$() : undefined;
			return {
				container,
				insertBefore: element?.parentElement === container ? element : undefined,
			};
		}),
	);
	const registerModalAction$ = readable(undefined, () => modals$.register(res));
	const action$ = computed(() => {
		if (modalTransition.stores.elementPresent$() && !hidden$()) {
			registerModalAction$();
		}
		modalsAction$();
	});

	const closeButtonDirective = createAttributesDirective(() => ({
		attributes: {
			type: readable('button'),
			'aria-label': ariaCloseButtonLabel$,
		},
		events: {
			click: () => close(modalCloseButtonClick),
		},
	}));

	const backdropAttributeDirective = createAttributesDirective(() => ({
		attributes: {
			class: backdropClass$,
		},
	}));

	const modalAttributeDirective = createAttributesDirective(() => ({
		attributes: {
			class: className$,
		},
		events: {
			click: (event) => {
				if (event.currentTarget === event.target && closeOnOutsideClick$()) {
					close(modalOutsideClick);
				}
			},
		},
	}));

	const res: ModalWidget = {
		...stateStores({
			backdropHidden$,
			container$,
			hidden$,
			transitioning$,
			visible$,
			modalElement$: modalTransition.stores.element$,
			ariaCloseButtonLabel$,
			className$,
			backdropClass$,
			...stateProps,
		}),
		directives: {
			modalPortalDirective,
			backdropPortalDirective,
			backdropDirective: mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
			modalDirective: mergeDirectives(modalTransition.directives.directive, siblingsInert, directiveSubscribe(action$), modalAttributeDirective),
			closeButtonDirective,
			dialogDirective: bindDirective(
				browserDirective((dialog: HTMLDialogElement, visible: boolean) => {
					const update = (visible: boolean) => {
						if (visible) {
							dialog.showModal();
						} else {
							dialog.close();
						}
					};
					update(visible);
					return {
						update,
					};
				}),
				visible$,
			),
		},
		patch,
		api: {
			close,
			async open() {
				patch({visible: true});
				await promiseFromStore(hidden$).promise;
				return hideResult;
			},
			patch,
		},
	};

	return res;
}
