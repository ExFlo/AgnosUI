const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createProgressbar, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function ProgressbarDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r1 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵstyleProp("height", state_r1.height);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", state_r1.percentage, "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r1.striped)("progress-bar-animated", state_r1.animated);
    i0.ɵɵproperty("ngClass", state_r1.className);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(11, _c1, state_r1, widget_r2));
} }
const _c2 = ["auProgressbar", ""];
const _c3 = ["*"];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { }
export class ProgressbarStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarStructureDirective_Factory(t) { return new (t || ProgressbarStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarStructureDirective, selectors: [["ng-template", "auProgressbarStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarStructure]', standalone: true }]
    }], null, null); })();
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(t) { return new (t || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auProgressbarStructure", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 14, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [NgClass, SlotDirective, ProgressbarStructureDirective],
                template: \`
		<ng-template auProgressbarStructure #structure let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.className"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 46 }); })();
export const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: progressbarDefaultSlotStructure,
};
export class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({
            factory: createProgressbar,
            widgetName: 'progressbar',
            defaultConfig: this.defaultSlots,
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.ariaDirective);
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: undefined,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProgressbarComponent_BaseFactory; return function ProgressbarComponent_Factory(t) { return (ɵProgressbarComponent_BaseFactory || (ɵProgressbarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ProgressbarComponent)))(t || ProgressbarComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], value: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auValue", "value", auNumberAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], height: [i0.ɵɵInputFlags.None, "auHeight", "height"], animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], striped: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStriped", "striped", auBooleanAttribute], ariaValueTextFn: [i0.ɵɵInputFlags.None, "auAriaValueTextFn", "ariaValueTextFn"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 6, consts: [[3, "auSlotDefault"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, ctx.state(), ctx.widget));
        } }, dependencies: [SlotDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: '[auProgressbar]',
                standalone: true,
                imports: [SlotDirective, SlotDefaultDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`,
            }]
    }], null, { ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], min: [{
            type: Input,
            args: [{ alias: 'auMin', transform: auNumberAttribute }]
        }], max: [{
            type: Input,
            args: [{ alias: 'auMax', transform: auNumberAttribute }]
        }], value: [{
            type: Input,
            args: [{ alias: 'auValue', transform: auNumberAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], slotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ProgressbarStructureDirective, { static: false }]
        }], height: [{
            type: Input,
            args: ['auHeight']
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
        }], striped: [{
            type: Input,
            args: [{ alias: 'auStriped', transform: auBooleanAttribute }]
        }], ariaValueTextFn: [{
            type: Input,
            args: ['auAriaValueTextFn']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 67 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQWlCN0gsQUFERCw4QkFBb0QsYUFPbEQ7SUFDQSwrR0FBMEU7SUFFNUUsQUFEQyxpQkFBTSxFQUNEOzs7O0lBVmdCLHlDQUE2QjtJQU1qRCxjQUFrQztJQUFsQyxpREFBa0M7SUFGbEMsQUFEQSx3REFBNEMsNENBQ0U7SUFDOUMsNENBQTJCO0lBR2QsY0FBNEI7SUFBQyxBQUE3Qiw2Q0FBNEIsaUVBQWdDOzs7OztJQXVCaEMsa0JBQXlCOzs7QUE1Q3ZFLE1BQU0sT0FBTyw2QkFBNkI7SUFEMUM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStCLENBQUEsQ0FBQyxDQUFDO0tBSTdEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQW1DLEVBQUUsT0FBZ0I7UUFDbEYsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhGQUpXLDZCQUE2QjtvRUFBN0IsNkJBQTZCOztp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Q3NDLHdCQUF3QjtrQkFBckYsWUFBWTttQkFBQyw2QkFBNkIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFLekMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBTTRDLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtDLE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUs5QixlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjs7a0ZBcERkLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQcm9ncmVzc2JhckNvbnRleHQsIFByb2dyZXNzYmFyUHJvcHMsIFByb2dyZXNzYmFyV2lkZ2V0LCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REZWZhdWx0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUHJvZ3Jlc3NiYXIsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7dHlwZSBXcml0YWJsZVNpZ25hbCwgd3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQcm9ncmVzc2JhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nQ2xhc3MsIFNsb3REaXJlY3RpdmUsIFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQcm9ncmVzc2JhclN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzXCIgW3N0eWxlLmhlaWdodF09XCJzdGF0ZS5oZWlnaHRcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdPVwic3RhdGUuc3RyaXBlZFwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1hbmltYXRlZF09XCJzdGF0ZS5hbmltYXRlZFwiXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwic3RhdGUuY2xhc3NOYW1lXCJcblx0XHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJzdGF0ZS5wZXJjZW50YWdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQcm9ncmVzc2JhckRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5leHBvcnQgdHlwZSBQYXJ0aWFsUHJvZ3Jlc3NiYXJQcm9wcyA9IFBhcnRpYWw8UHJvZ3Jlc3NiYXJQcm9wcz47XG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsUHJvZ3Jlc3NiYXJQcm9wcyA9IHtcblx0c2xvdFN0cnVjdHVyZTogcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdFN0cnVjdHVyZSxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVByb2dyZXNzYmFyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90RGVmYXVsdF09XCJkZWZhdWx0U2xvdHNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFByb2dyZXNzYmFyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxQcm9ncmVzc2JhclByb3BzPiA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1pbmltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZhbHVlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0cmlwZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVQcm9ncmVzc2Jhcixcblx0XHR3aWRnZXROYW1lOiAncHJvZ3Jlc3NiYXInLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hcmlhRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdERlZmF1bHQ6IHVuZGVmaW5lZCxcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};