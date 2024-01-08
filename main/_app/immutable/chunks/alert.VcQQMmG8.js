const t=`import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createAlert } from '@agnos-ui/react-headless/components/alert';
import { Slot } from '@agnos-ui/react-headless/slot';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { useDirective } from '@agnos-ui/react-headless/utils/directive';
import { forwardRef, useImperativeHandle } from 'react';
export * from '@agnos-ui/react-headless/components/alert';
const DefaultSlotStructure = (slotContext) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "alert-body", children: _jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }), slotContext.state.dismissible ? (_jsx("button", { type: "button", className: "btn-close", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })) : null] }));
const defaultConfig = {
    slotStructure: DefaultSlotStructure,
};
export const Alert = forwardRef(function Alert(props, ref) {
    const [state, widget] = useWidgetWithConfig(createAlert, props, 'alert', { ...defaultConfig, slotDefault: props.children });
    const refTransition = useDirective(widget.directives.transitionDirective);
    useImperativeHandle(ref, () => widget.api, []);
    const slotContext = {
        state,
        widget,
    };
    return (_jsx(_Fragment, { children: state.hidden ? null : (_jsx("div", { className: \`au-alert alert alert-\${state.type} \${state.className} \${state.dismissible ? 'alert-dismissible' : ''}\`, role: "alert", ref: refTransition, children: _jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) })) }));
});
`;export{t as default};