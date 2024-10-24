const e=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { createContext, forwardRef, useContext, useImperativeHandle, useEffect } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getAccordionDefaultConfig, createAccordionItem, createAccordion, factoryCreateAccordion } from "@agnos-ui/core-bootstrap/components/accordion";
const export_getAccordionDefaultConfig = getAccordionDefaultConfig;
const export_createAccordionItem = createAccordionItem;
const export_createAccordion = createAccordion;
const export_factoryCreateAccordion = factoryCreateAccordion;
const Header = (props) => {
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsx(Heading, { ...useDirectives([classDirective, "accordion-header"], props.directive), children: props.children });
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-collapse"], slotContext.directives.bodyContainerDirective), children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-body"], slotContext.directives.bodyDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = createContext({});
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Header, { directive: slotContext.directives.headerDirective, headerTag: slotContext.state.headingTag, children: /* @__PURE__ */ jsx("button", { ...useDirectives([classDirective, "accordion-button"], slotContext.directives.buttonDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsx(ItemContent, { ...slotContext })
] });
const defaultConfig = {
  structure: DefaultSlotStructure
};
const AccordionItem = forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = useContext(AccordionDIContext);
    const widgetContext = useWidgetWithConfig(registerItem, props, null, defaultConfig);
    const { state, api, directives } = widgetContext;
    useImperativeHandle(ref, () => api, []);
    useEffect(() => {
      api.initDone();
    }, []);
    return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, \`accordion-item \${state.className}\`], directives.itemDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: widgetContext }) });
  }
);
const Accordion = forwardRef(
  function Accordion2(props, ref) {
    const widget = useWidgetWithConfig(export_createAccordion, props, "accordion");
    useImperativeHandle(ref, () => widget.api, []);
    return /* @__PURE__ */ jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion"], widget.directives.accordionDirective), children: props.children }) });
  }
);
export {
  AccordionItem as A,
  Accordion as a,
  export_createAccordionItem as b,
  export_createAccordion as c,
  export_factoryCreateAccordion as d,
  export_getAccordionDefaultConfig as e
};
`;export{e as default};