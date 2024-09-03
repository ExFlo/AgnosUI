const Q=`import { Component, Directive, EnvironmentInjector, Input, TemplateRef, ViewChild, ViewContainerRef, createComponent, inject, reflectComponentType, } from '@angular/core';
import { ComponentTemplate } from './types';
import * as i0 from "@angular/core";
const _c0 = ["text"];
function StringSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const content_r1 = ctx.content;
    i0.ɵɵtextInterpolate(content_r1);
} }
class SlotHandler {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    slotChange(_slot, _props) { }
    propsChange(_slot, _props) { }
    destroy() { }
}
class StringSlotComponent {
    static { this.ɵfac = function StringSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StringSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StringSlotComponent, selectors: [["ng-component"]], viewQuery: function StringSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.text = _t.first);
        } }, decls: 2, vars: 0, consts: [["text", ""]], template: function StringSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StringSlotComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StringSlotComponent, [{
        type: Component,
        args: [{
                template: \`<ng-template #text let-content="content">{{ content }}</ng-template>\`,
            }]
    }], null, { text: [{
            type: ViewChild,
            args: ['text', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StringSlotComponent, { className: "StringSlotComponent", filePath: "slot.directive.ts", lineNumber: 28 }); })();
const stringSlotComponentTemplate = new ComponentTemplate(StringSlotComponent, 'text');
class StringSlotHandler extends SlotHandler {
    #templateRefSlotHandler = new ComponentTemplateSlotHandler(this.viewContainerRef);
    #initialized = false;
    slotChange(content) {
        if (!this.#initialized) {
            this.#initialized = true;
            this.#templateRefSlotHandler.slotChange(stringSlotComponentTemplate, { content });
        }
        else {
            this.#templateRefSlotHandler.propsChange(stringSlotComponentTemplate, { content });
        }
    }
    destroy() {
        this.#templateRefSlotHandler.destroy();
    }
}
class FunctionSlotHandler extends SlotHandler {
    #stringSlotHandler = new StringSlotHandler(this.viewContainerRef);
    slotChange(slot, props) {
        this.#stringSlotHandler.slotChange(slot(props));
    }
    propsChange(slot, props) {
        this.#stringSlotHandler.slotChange(slot(props));
    }
    destroy() {
        this.#stringSlotHandler.destroy();
    }
}
class ComponentSlotHandler extends SlotHandler {
    #componentRef;
    #properties;
    slotChange(slot, props) {
        if (this.#componentRef) {
            this.destroy();
        }
        this.#componentRef = this.viewContainerRef.createComponent(slot);
        this.#applyProperties(props);
    }
    #applyProperties(props, oldProperties) {
        const properties = Object.keys(props);
        this.#properties = properties;
        const componentRef = this.#componentRef;
        for (const property of properties) {
            componentRef.setInput(property, props[property]);
            oldProperties?.delete(property);
        }
    }
    propsChange(_slot, props) {
        const oldProperties = new Set(this.#properties);
        this.#applyProperties(props, oldProperties);
        const componentRef = this.#componentRef;
        for (const property of oldProperties) {
            componentRef.setInput(property, undefined);
        }
    }
    destroy() {
        this.viewContainerRef.clear();
        this.#componentRef = undefined;
    }
}
class TemplateRefSlotHandler extends SlotHandler {
    #viewRef;
    #props;
    slotChange(slot, props) {
        if (this.#viewRef) {
            this.destroy();
        }
        props = { ...props };
        this.#props = props;
        this.#viewRef = this.viewContainerRef.createEmbeddedView(slot, props);
    }
    propsChange(_slot, props) {
        if (this.#viewRef) {
            const templateProps = this.#props;
            const oldProperties = new Set(Object.keys(templateProps));
            for (const property of Object.keys(props)) {
                templateProps[property] = props[property];
                oldProperties.delete(property);
            }
            for (const oldProperty of oldProperties) {
                delete templateProps[oldProperty];
            }
            this.#viewRef.markForCheck();
        }
    }
    destroy() {
        this.viewContainerRef.clear();
    }
}
class ComponentTemplateSlotHandler extends SlotHandler {
    #componentRef;
    #templateSlotHandler = new TemplateRefSlotHandler(this.viewContainerRef);
    #templateRef;
    slotChange(slot, props) {
        if (this.#componentRef) {
            this.destroy();
        }
        this.#componentRef = createComponent(slot.component, {
            elementInjector: this.viewContainerRef.injector,
            environmentInjector: this.viewContainerRef.injector.get(EnvironmentInjector),
        });
        this.#templateRef = this.#componentRef.instance[slot.templateProp];
        this.#templateSlotHandler.slotChange(this.#templateRef, props);
    }
    propsChange(_slot, props) {
        this.#templateSlotHandler.propsChange(this.#templateRef, props);
    }
    destroy() {
        this.#templateSlotHandler.destroy();
        this.#componentRef?.destroy();
        this.#componentRef = undefined;
    }
}
const getSlotType = (value) => {
    if (!value)
        return undefined;
    const type = typeof value;
    switch (type) {
        case 'string':
            return StringSlotHandler;
        case 'function':
            if (reflectComponentType(value)) {
                return ComponentSlotHandler;
            }
            return FunctionSlotHandler;
        case 'object':
            if (value instanceof TemplateRef) {
                return TemplateRefSlotHandler;
            }
            if (value instanceof ComponentTemplate) {
                return ComponentTemplateSlotHandler;
            }
            break;
    }
    return undefined;
};
export class SlotDirective {
    constructor() {
        this._viewContainerRef = inject(ViewContainerRef);
    }
    /** @inheritdoc */
    ngOnChanges(changes) {
        const slotChange = changes['slot'];
        const propsChange = changes['props'];
        const slot = this.slot;
        if (slotChange) {
            const newSlotType = getSlotType(slot);
            if (newSlotType !== this._slotType) {
                this._slotHandler?.destroy();
                this._slotHandler = newSlotType ? new newSlotType(this._viewContainerRef) : undefined;
                this._slotType = newSlotType;
            }
            this._slotHandler?.slotChange(slot, this.props);
        }
        else if (propsChange) {
            this._slotHandler?.propsChange(slot, this.props);
        }
    }
    /** @inheritdoc */
    ngOnDestroy() {
        this._slotHandler?.destroy();
        this._slotHandler = undefined;
    }
    static { this.ɵfac = function SlotDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SlotDirective, selectors: [["", "auSlot", ""]], inputs: { slot: [0, "auSlot", "slot"], props: [0, "auSlotProps", "props"] }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotDirective, [{
        type: Directive,
        args: [{
                selector: '[auSlot]',
                standalone: true,
            }]
    }], null, { slot: [{
            type: Input,
            args: ['auSlot']
        }], props: [{
            type: Input,
            args: [{ alias: 'auSlotProps', required: true }]
        }] }); })();
/**
 * Directive that allows to pass the templateRef associated to a ng-content to a store.
 * The input of the directive is a {@link WritableSignal}<{children: {@link SlotContent}<T>}>.
 */
export class ContentAsSlotDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    /** @inheritdoc */
    ngOnInit() {
        this.auContentAsSlot.update((value) => ({ ...value, children: this.templateRef }));
    }
    static { this.ɵfac = function ContentAsSlotDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentAsSlotDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContentAsSlotDirective, selectors: [["", "auContentAsSlot", ""]], inputs: { auContentAsSlot: "auContentAsSlot" }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentAsSlotDirective, [{
        type: Directive,
        args: [{ selector: '[auContentAsSlot]', standalone: true }]
    }], null, { auContentAsSlot: [{
            type: Input,
            args: [{ alias: 'auContentAsSlot', required: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2xvdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsTUFBTSxFQUNOLG9CQUFvQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7SUFXVyxZQUFhOzs7SUFBYixnQ0FBYTs7QUFSbEUsTUFBZSxXQUFXO0lBQ3pCLFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUN6RCxVQUFVLENBQUMsS0FBVyxFQUFFLE1BQWEsSUFBRyxDQUFDO0lBQ3pDLFdBQVcsQ0FBQyxLQUFXLEVBQUUsTUFBYSxJQUFHLENBQUM7SUFDMUMsT0FBTyxLQUFJLENBQUM7Q0FDWjtBQUVELE1BR00sbUJBQW1CO29IQUFuQixtQkFBbUI7b0VBQW5CLG1CQUFtQjs7Ozs7O1lBRmIscUhBQXlDOzs7aUZBRS9DLG1CQUFtQjtjQUh4QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNFQUFzRTthQUNoRjtnQkFFbUMsSUFBSTtrQkFBdEMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkFENUIsbUJBQW1CO0FBR3pCLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBaUQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFdkksTUFBTSxpQkFBcUQsU0FBUSxXQUEwQjtJQUNuRix1QkFBdUIsR0FBRyxJQUFJLDRCQUE0QixDQUFpRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzSSxZQUFZLEdBQUcsS0FBSyxD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c0I7b0VBQXRCLHNCQUFzQjs7aUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztnQkFFUixlQUFlO2tCQUFqRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7Q29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUeXBlLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHREaXJlY3RpdmUsXG5cdEVudmlyb25tZW50SW5qZWN0b3IsXG5cdElucHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRjcmVhdGVDb21wb25lbnQsXG5cdGluamVjdCxcblx0cmVmbGVjdENvbXBvbmVudFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Q29tcG9uZW50VGVtcGxhdGV9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHR5cGUge1dyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5cbmFic3RyYWN0IGNsYXNzIFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiwgU2xvdCBleHRlbmRzIFNsb3RDb250ZW50PFByb3BzPiA9IFNsb3RDb250ZW50PFByb3BzPj4ge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblx0c2xvdENoYW5nZShfc2xvdDogU2xvdCwgX3Byb3BzOiBQcm9wcykge31cblx0cHJvcHNDaGFuZ2UoX3Nsb3Q6IFNsb3QsIF9wcm9wczogUHJvcHMpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3RleHQgbGV0LWNvbnRlbnQ9XCJjb250ZW50XCI+e3sgY29udGVudCB9fTwvbmctdGVtcGxhdGU+YCxcbn0pXG5jbGFzcyBTdHJpbmdTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgndGV4dCcsIHtzdGF0aWM6IHRydWV9KSB0ZXh0ITogVGVtcGxhdGVSZWY8e2NvbnRlbnQ6IHN0cmluZ30+O1xufVxuY29uc3Qgc3RyaW5nU2xvdENvbXBvbmVudFRlbXBsYXRlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlPHtjb250ZW50OiBzdHJpbmd9LCAndGV4dCcsIFN0cmluZ1Nsb3RDb21wb25lbnQ+KFN0cmluZ1Nsb3RDb21wb25lbnQsICd0ZXh0Jyk7XG5cbmNsYXNzIFN0cmluZ1Nsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgc3RyaW5nPiB7XG5cdHJlYWRvbmx5ICN0ZW1wbGF0ZVJlZlNsb3RIYW5kbGVyID0gbmV3IENvbXBvbmVudFRlbXBsYXRlU2xvdEhhbmRsZXI8e2NvbnRlbnQ6IHN0cmluZ30sICd0ZXh0JywgU3RyaW5nU2xvdENvbXBvbmVudD4odGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHR0aGlzLiN0ZW1wbGF0ZVJlZlNsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc3RyaW5nU2xvdENvbXBvbmVudFRlbXBsYXRlLCB7Y29udGVudH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiN0ZW1wbGF0ZVJlZlNsb3RIYW5kbGVyLnByb3BzQ2hhbmdlKHN0cmluZ1Nsb3RDb21wb25lbnRUZW1wbGF0ZSwge2NvbnRlbnR9KTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlUmVmU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHR9XG59XG5cbmNsYXNzIEZ1bmN0aW9uU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmc+IHtcblx0cmVhZG9ubHkgI3N0cmluZ1Nsb3RIYW5kbGVyID0gbmV3IFN0cmluZ1Nsb3RIYW5kbGVyKHRoaXMudmlld0NvbnRhaW5lclJlZik7XG5cblx0b3ZlcnJpZGUgc2xvdENoYW5nZShzbG90OiAocHJvcHM6IFByb3BzKSA9PiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3N0cmluZ1Nsb3RIYW5kbGVyLnNsb3RDaGFuZ2Uoc2xvdChwcm9wcykpO1xuXHR9XG5cblx0b3ZlcnJpZGUgcHJvcHNDaGFuZ2Uoc2xvdDogKHByb3BzOiBQcm9wcykgPT4gc3RyaW5nLCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHR0aGlzLiNzdHJpbmdTbG90SGFuZGxlci5zbG90Q2hhbmdlKHNsb3QocHJvcHMpKTtcblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy4jc3RyaW5nU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHR9XG59XG5cbmNsYXNzIENvbXBvbmVudFNsb3RIYW5kbGVyPFByb3BzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgVHlwZTx1bmtub3duPj4ge1xuXHQjY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiB8IHVuZGVmaW5lZDtcblx0I3Byb3BlcnRpZXM/OiBzdHJpbmdbXTtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IFR5cGU8dW5rbm93bj4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiNjb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLiNjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KHNsb3QpO1xuXHRcdHRoaXMuI2FwcGx5UHJvcGVydGllcyhwcm9wcyk7XG5cdH1cblxuXHQjYXBwbHlQcm9wZXJ0aWVzKHByb3BzOiBQcm9wcywgb2xkUHJvcGVydGllcz86IFNldDxzdHJpbmc+KSB7XG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHR0aGlzLiNwcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCBwcm9wc1twcm9wZXJ0eV0pO1xuXHRcdFx0b2xkUHJvcGVydGllcz8uZGVsZXRlKHByb3BlcnR5KTtcblx0XHR9XG5cdH1cblxuXHRvdmVycmlkZSBwcm9wc0NoYW5nZShfc2xvdDogVHlwZTx1bmtub3duPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQodGhpcy4jcHJvcGVydGllcyk7XG5cdFx0dGhpcy4jYXBwbHlQcm9wZXJ0aWVzKHByb3BzLCBvbGRQcm9wZXJ0aWVzKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLiNjb21wb25lbnRSZWYhO1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2Ygb2xkUHJvcGVydGllcykge1xuXHRcdFx0Y29tcG9uZW50UmVmLnNldElucHV0KHByb3BlcnR5LCB1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdG92ZXJyaWRlIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0dGhpcy4jY29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIFRlbXBsYXRlUmVmU2xvdEhhbmRsZXI8UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiBleHRlbmRzIFNsb3RIYW5kbGVyPFByb3BzLCBUZW1wbGF0ZVJlZjxQcm9wcz4+IHtcblx0I3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cdCNwcm9wcz86IFByb3BzO1xuXG5cdG92ZXJyaWRlIHNsb3RDaGFuZ2Uoc2xvdDogVGVtcGxhdGVSZWY8UHJvcHM+LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcblx0XHRpZiAodGhpcy4jdmlld1JlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHByb3BzID0gey4uLnByb3BzfTtcblx0XHR0aGlzLiNwcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuI3ZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHNsb3QsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKF9zbG90OiBUZW1wbGF0ZVJlZjxQcm9wcz4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLiN2aWV3UmVmKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVByb3BzID0gdGhpcy4jcHJvcHMhO1xuXHRcdFx0Y29uc3Qgb2xkUHJvcGVydGllcyA9IG5ldyBTZXQ8a2V5b2YgUHJvcHM+KE9iamVjdC5rZXlzKHRlbXBsYXRlUHJvcHMpKTtcblx0XHRcdGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMocHJvcHMpIGFzIChrZXlvZiBQcm9wcylbXSkge1xuXHRcdFx0XHR0ZW1wbGF0ZVByb3BzW3Byb3BlcnR5XSA9IHByb3BzW3Byb3BlcnR5XTtcblx0XHRcdFx0b2xkUHJvcGVydGllcy5kZWxldGUocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBvbGRQcm9wZXJ0eSBvZiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGRlbGV0ZSB0ZW1wbGF0ZVByb3BzW29sZFByb3BlcnR5XTtcblx0XHRcdH1cblx0XHRcdHRoaXMuI3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcnJpZGUgZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0fVxufVxuXG5jbGFzcyBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyPFxuXHRQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdEsgZXh0ZW5kcyBzdHJpbmcsXG5cdFQgZXh0ZW5kcyB7W2tleSBpbiBLXTogVGVtcGxhdGVSZWY8UHJvcHM+fSxcbj4gZXh0ZW5kcyBTbG90SGFuZGxlcjxQcm9wcywgQ29tcG9uZW50VGVtcGxhdGU8UHJvcHMsIEssIFQ+PiB7XG5cdCNjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IHVuZGVmaW5lZDtcblx0cmVhZG9ubHkgI3RlbXBsYXRlU2xvdEhhbmRsZXIgPSBuZXcgVGVtcGxhdGVSZWZTbG90SGFuZGxlcih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHQjdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFByb3BzPiB8IHVuZGVmaW5lZDtcblxuXHRvdmVycmlkZSBzbG90Q2hhbmdlKHNsb3Q6IENvbXBvbmVudFRlbXBsYXRlPFByb3BzLCBLLCBUPiwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuI2NvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IGNyZWF0ZUNvbXBvbmVudChzbG90LmNvbXBvbmVudCwge1xuXHRcdFx0ZWxlbWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IsXG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IuZ2V0KEVudmlyb25tZW50SW5qZWN0b3IpLFxuXHRcdH0pO1xuXHRcdHRoaXMuI3RlbXBsYXRlUmVmID0gdGhpcy4jY29tcG9uZW50UmVmLmluc3RhbmNlW3Nsb3QudGVtcGxhdGVQcm9wXTtcblx0XHR0aGlzLiN0ZW1wbGF0ZVNsb3RIYW5kbGVyLnNsb3RDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYsIHByb3BzKTtcblx0fVxuXG5cdG92ZXJyaWRlIHByb3BzQ2hhbmdlKF9zbG90OiBDb21wb25lbnRUZW1wbGF0ZTxQcm9wcywgSywgVD4sIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIucHJvcHNDaGFuZ2UodGhpcy4jdGVtcGxhdGVSZWYhLCBwcm9wcyk7XG5cdH1cblxuXHRvdmVycmlkZSBkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuI3RlbXBsYXRlU2xvdEhhbmRsZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuI2NvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcblx0fVxufVxuXG5jb25zdCBnZXRTbG90VHlwZSA9ICh2YWx1ZTogYW55KTogdW5kZWZpbmVkIHwge25ldyAodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZik6IFNsb3RIYW5kbGVyPGFueT59ID0+IHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcblx0Y29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdHJldHVybiBTdHJpbmdTbG90SGFuZGxlcjtcblx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRpZiAocmVmbGVjdENvbXBvbmVudFR5cGUodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnRTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBGdW5jdGlvblNsb3RIYW5kbGVyO1xuXHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHRyZXR1cm4gVGVtcGxhdGVSZWZTbG90SGFuZGxlcjtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvbXBvbmVudFRlbXBsYXRlKSB7XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnRUZW1wbGF0ZVNsb3RIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdVNsb3RdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xvdERpcmVjdGl2ZTxQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXHRASW5wdXQoJ2F1U2xvdCcpIHNsb3Q6IFNsb3RDb250ZW50PFByb3BzPjtcblx0QElucHV0KHthbGlhczogJ2F1U2xvdFByb3BzJywgcmVxdWlyZWQ6IHRydWV9KSBwcm9wcyE6IFByb3BzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cdHByaXZhdGUgX3Nsb3RUeXBlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTbG90VHlwZT47XG5cdHByaXZhdGUgX3Nsb3RIYW5kbGVyOiBTbG90SGFuZGxlcjxQcm9wcz4gfCB1bmRlZmluZWQ7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRjb25zdCBzbG90Q2hhbmdlID0gY2hhbmdlc1snc2xvdCddO1xuXHRcdGNvbnN0IHByb3BzQ2hhbmdlID0gY2hhbmdlc1sncHJvcHMnXTtcblx0XHRjb25zdCBzbG90ID0gdGhpcy5zbG90O1xuXHRcdGlmIChzbG90Q2hhbmdlKSB7XG5cdFx0XHRjb25zdCBuZXdTbG90VHlwZSA9IGdldFNsb3RUeXBlKHNsb3QpO1xuXHRcdFx0aWYgKG5ld1Nsb3RUeXBlICE9PSB0aGlzLl9zbG90VHlwZSkge1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdFx0XHR0aGlzLl9zbG90SGFuZGxlciA9IG5ld1Nsb3RUeXBlID8gbmV3IG5ld1Nsb3RUeXBlKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLl9zbG90VHlwZSA9IG5ld1Nsb3RUeXBlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnNsb3RDaGFuZ2Uoc2xvdCwgdGhpcy5wcm9wcyk7XG5cdFx0fSBlbHNlIGlmIChwcm9wc0NoYW5nZSkge1xuXHRcdFx0dGhpcy5fc2xvdEhhbmRsZXI/LnByb3BzQ2hhbmdlKHNsb3QsIHRoaXMucHJvcHMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBAaW5oZXJpdGRvYyAqL1xuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLl9zbG90SGFuZGxlcj8uZGVzdHJveSgpO1xuXHRcdHRoaXMuX3Nsb3RIYW5kbGVyID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWxsb3dzIHRvIHBhc3MgdGhlIHRlbXBsYXRlUmVmIGFzc29jaWF0ZWQgdG8gYSBuZy1jb250ZW50IHRvIGEgc3RvcmUuXG4gKiBUaGUgaW5wdXQgb2YgdGhlIGRpcmVjdGl2ZSBpcyBhIHtAbGluayBXcml0YWJsZVNpZ25hbH08e2NoaWxkcmVuOiB7QGxpbmsgU2xvdENvbnRlbnR9PFQ+fT4uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2F1Q29udGVudEFzU2xvdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBDb250ZW50QXNTbG90RGlyZWN0aXZlPFQgZXh0ZW5kcyBvYmplY3Q+IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KHthbGlhczogJ2F1Q29udGVudEFzU2xvdCcsIHJlcXVpcmVkOiB0cnVlfSkgYXVDb250ZW50QXNTbG90ITogV3JpdGFibGVTaWduYWw8e2NoaWxkcmVuPzogU2xvdENvbnRlbnQ8VD59PjtcblxuXHR0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUPik7XG5cblx0LyoqIEBpbmhlcml0ZG9jICovXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuYXVDb250ZW50QXNTbG90LnVwZGF0ZSgodmFsdWUpID0+ICh7Li4udmFsdWUsIGNoaWxkcmVuOiB0aGlzLnRlbXBsYXRlUmVmfSkpO1xuXHR9XG59XG4iXX0=`;export{Q as default};