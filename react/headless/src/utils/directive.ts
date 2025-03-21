import type {Directive, DirectivesAndOptParam} from '@agnos-ui/core/types';
import {attributesData, multiDirective} from '@agnos-ui/core/utils/directive';
import {BROWSER, DEV} from 'esm-env';
import type {RefCallback} from 'react';
import {useCallback, useEffect, useRef} from 'react';

export * from '@agnos-ui/core/utils/directive';

const attributesMap = new Map([
	['tabindex', 'tabIndex'],
	['for', 'htmlFor'],
	['autocomplete', 'autoComplete'],
	['autocapitalize', 'autoCapitalize'],
	['autocorrect', 'autoCorrect'],
]);

/**
 * Returns an object with the key/value attributes for JSX, derived from a list of directives.
 *
 * @template T — An array type representing the parameters for the directives.
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with key/value pairs to be applied on a JSX node.
 */
export function directiveAttributes<T extends any[]>(...directives: DirectivesAndOptParam<T>) {
	const reactAttributes: Record<string, any> = {};
	const {attributes, style, classNames} = attributesData(...directives);

	for (const [name, value] of Object.entries(attributes)) {
		reactAttributes[attributesMap.get(name) ?? name] = value;
	}

	if (classNames?.length) {
		reactAttributes.className = classNames.join(' ');
	}

	if (Object.keys(style).length) {
		reactAttributes.style = style;
	}

	return reactAttributes;
}

/**
 * Same as {@link directiveAttributes}, but returns an empty object when run in a browser environement.
 *
 * @returns JSON object with name/value for the attributes
 */
export const ssrAttributes: typeof directiveAttributes = BROWSER ? () => ({}) : directiveAttributes;

/**
 * The useDirective function.
 *
 * Allows to attach a provided directive to the current react component.
 *
 * @param directive - the directive
 * @param args - the args to pass to the directive
 * @returns the ref callback
 */
export const useDirective: {
	(directive: Directive): {ref: RefCallback<HTMLElement>};
	<T>(directive: Directive<T>, args: T): {ref: RefCallback<HTMLElement>};
} = BROWSER
	? DEV
		? <T>(directive: Directive<T>, args?: T): {ref: RefCallback<HTMLElement>} => {
				// This is a workaround for React StrictMode that is kinda ugly but kinda necessary due to how we handle transitions `animatedOnInit` property and how React handles ref callbacks in StrictMode (since React 19 anyway).
				const instance = useRef<ReturnType<typeof directive>>(undefined);
				const propsRef = useRef<T>(undefined);
				const refCalledOnce = useRef(false);

				useEffect(() => {
					queueMicrotask(() => {
						refCalledOnce.current = false;
					});
				}, [directive]);

				const ref = useCallback(
					(element: HTMLElement) => {
						if (!refCalledOnce.current) {
							instance.current = directive(element, propsRef.current as T);
							refCalledOnce.current = true;
						}
						return () => {
							if (!refCalledOnce.current) {
								instance.current?.destroy?.();
								instance.current = undefined;
							}
						};
					},
					[directive],
				);
				propsRef.current = args;
				instance.current?.update?.(args as T);
				return {ref};
			}
		: <T>(directive: Directive<T>, args?: T): {ref: RefCallback<HTMLElement>} => {
				const instance = useRef<ReturnType<typeof directive>>(undefined);
				const propsRef = useRef<T>(undefined);
				const ref = useCallback(
					(element: HTMLElement) => {
						instance.current = directive(element, propsRef.current as T);
						return () => {
							instance.current?.destroy?.();
							instance.current = undefined;
						};
					},
					[directive],
				);
				propsRef.current = args;
				instance.current?.update?.(args as T);
				return {ref};
			}
	: <T>(directive: Directive<T>, args?: T): {ref: RefCallback<HTMLElement>} => ssrAttributes([directive, args as T]) as any;

/**
 * The useDirectives function.
 *
 * Allows to attach multiple directives to the current react component.
 *
 * @param directives - directives
 * @returns the ref callback
 */
export const useDirectives: <T extends any[]>(...directives: DirectivesAndOptParam<T>) => {ref: RefCallback<HTMLElement>} = BROWSER
	? (...directives) => useDirective(multiDirective, directives)
	: (directiveAttributes as any);
