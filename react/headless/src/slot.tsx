import {Component} from 'react';
import type {SlotContent} from './types';

type SlotFunction<Props = Record<string, never>> = ((props: Props) => React.ReactNode) | React.FunctionComponent<Props>;

const slotWrapperCache = new WeakMap<SlotFunction<any>, React.FunctionComponent<any>>();

const slotWrapperFactory = <Props,>(slotContent: SlotFunction<Props>) => {
	const SlotWrapper = (props: Props) => <>{slotContent(props)}</>;
	return SlotWrapper;
};

const slotWrapper = <Props,>(slotContent: SlotFunction<Props>) => {
	let res = slotWrapperCache.get(slotContent);
	if (!res) {
		res = slotWrapperFactory(slotContent);
		slotWrapperCache.set(slotContent, res);
	}
	return res;
};

/* eslint-disable-next-line @typescript-eslint/no-unsafe-function-type */
const isReactComponent = <Props,>(item: Function): item is React.ComponentClass<Props, any> => item.prototype instanceof Component;

/**
 * The React Slot component, allowing to extensively customize widgets.
 *
 * The input slotContent can be a react component, a function or jsx.
 *
 * @param parameter - the react component parameter
 * @param parameter.slotContent - the slot content
 * @param parameter.props - the react component props
 * @returns the slot component
 */
export const Slot = <Props extends object>({slotContent, props}: {slotContent: SlotContent<Props>; props: Props}) => {
	const isFunction = typeof slotContent === 'function';
	if (isFunction) {
		const SlotComponent = isReactComponent<Props>(slotContent) ? slotContent : slotWrapper(slotContent);
		return <SlotComponent {...props} />;
	}
	return <>{slotContent}</>;
};
