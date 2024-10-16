const e=`import { jsx } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getCollapseDefaultConfig, createCollapse } from "@agnos-ui/core-bootstrap/components/collapse";
import { useDirectives } from "@agnos-ui/react-headless/utils/directive";
const export_getCollapseDefaultConfig = getCollapseDefaultConfig;
const export_createCollapse = createCollapse;
const Collapse = forwardRef(
  function Collapse2(props, ref) {
    const [_state, widget] = useWidgetWithConfig(export_createCollapse, props, "collapse", {});
    useImperativeHandle(ref, () => widget.api, []);
    return /* @__PURE__ */ jsx("div", { ...useDirectives(widget.directives.transitionDirective), children: props.children });
  }
);
export {
  Collapse as C,
  export_createCollapse as a,
  export_getCollapseDefaultConfig as e
};
`;export{e as default};
