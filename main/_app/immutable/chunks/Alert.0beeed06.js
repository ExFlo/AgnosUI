const t=`import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createAlert } from '@agnos-ui/core';
import { forwardRef, useImperativeHandle } from 'react';
import { Slot } from './Slot';
import { useDirective, useWidgetWithConfig } from './utils';
const DefaultSlotStructure = (slotContext) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "alert-body", children: _jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }), slotContext.state.dismissible ? (_jsx("button", { type: "button", className: "btn-close ms-auto", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })) : null] }));
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
    return (_jsx(_Fragment, { children: state.hidden ? null : (_jsx("div", { className: \`au-alert d-flex alert w-100 alert-\${state.type}\`, role: "alert", ref: refTransition, children: _jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) })) }));
});
`;export{t as default};
