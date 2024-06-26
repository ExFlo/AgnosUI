import type {ToastDirectives, ToastState as CoreState, ToastProps as CoreProps, ToastApi} from '@agnos-ui/core/components/toast';
import {createToast as createCoreToast, getToastDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/toast';
import type {SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import type {ExtendWidgetAdaptSlotWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {fadeTransition} from '../../services/transitions';

export * from '@agnos-ui/core/components/toast';

export type ToastContext = WidgetSlotContext<ToastWidget>;

export interface ToastExtraProps {
	/**
	 * Global template for the toast component
	 */
	slotStructure: SlotContent<ToastContext>;
	/**
	 * Template for the toast content
	 */
	slotDefault: SlotContent<ToastContext>;
	/**
	 * Header template for the toast component
	 */
	slotHeader: SlotContent<ToastContext>;
}

export interface ToastState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, ToastExtraProps, object> {}
export interface ToastProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, ToastExtraProps, object> {}

export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, object, ToastDirectives>;

const defaultConfigExtraProps: ToastExtraProps = {
	slotStructure: undefined,
	slotDefault: undefined,
	slotHeader: undefined,
};
const coreOverride: Partial<CoreProps> = {
	transition: fadeTransition,
};

/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
export function getToastDefaultConfig(): ToastProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride} as any;
}

/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
export const createToast: WidgetFactory<ToastWidget> = extendWidgetProps(createCoreToast, defaultConfigExtraProps, {}, coreOverride);
