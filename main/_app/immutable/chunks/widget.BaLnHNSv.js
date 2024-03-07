const e=`import { findChangedProperties } from '@agnos-ui/core/utils/stores';
import { useEffect, useMemo, useRef } from 'react';
import { useObservable } from './stores';
/**
 * The useWidget function.
 *
 * Allows to create and attach an agnos-ui/core widget to the current react component.
 *
 * @param createWidget - the widget factory
 * @param props - the props
 * @param propsConfig - the props config
 * @returns the state and api to track and interact with the widget
 */
export function useWidget(createWidget, props = {}, propsConfig) {
    const api = useMemo(() => createWidget({ ...propsConfig, props: { ...propsConfig?.props, ...props } }), []);
    const previousProps = useRef(props);
    useEffect(() => {
        const changedProps = findChangedProperties(previousProps.current, props);
        previousProps.current = props;
        if (changedProps) {
            api.patch(changedProps);
        }
    }, [props]);
    const state = useObservable(api.state$);
    return [state, api];
}
`;export{e as default};