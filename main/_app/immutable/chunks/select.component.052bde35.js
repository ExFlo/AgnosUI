const t=`import { createSelect } from '@agnos-ui/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { callWidgetFactory } from '../slot.directive';
import { UseDirective } from '../transition/use.directive';
import { patchSimpleChanges } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SelectComponent {
    constructor() {
        /**
         * Callback called when the text filter change
         */
        this.filterTextChange = new EventEmitter();
        this._widget = callWidgetFactory(createSelect, 'select');
        this.api = this._widget.api;
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onFilterTextChange: (event) => this.filterTextChange.emit(event),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    itemCtxTrackBy(_, itemCtx) {
        return itemCtx.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: SelectComponent, isStandalone: true, selector: "au-select", inputs: { items: "items", opened: "opened", filterText: "filterText", className: "className", disabled: "disabled", matchFn: "matchFn", itemId: "itemId", selected: "selected", loading: "loading" }, outputs: { filterTextChange: "filterTextChange" }, host: { properties: { "class": "\\"au-select dropdown input-group input-group-sm mb-3 d-block\\" + state$().className" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container>\\n\\t<div [auUse]=\\"_widget.directives.hasFocusDirective\\" role=\\"combobox\\" class=\\"input-group\\" aria-haspopup=\\"listbox\\" aria-expanded=\\"true\\">\\n\\t\\t<ng-container *ngIf=\\"state$().selected as selected\\">\\n\\t\\t\\t<div *ngIf=\\"selected.length\\" class=\\"input-group-text\\" (mousedown)=\\"$event.preventDefault()\\">\\n\\t\\t\\t\\t<div *ngFor=\\"let item of selected\\" class=\\"badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1\\">\\n\\t\\t\\t\\t\\t<div class=\\"me-1\\">{{ item }}</div>\\n\\t\\t\\t\\t\\t<span role=\\"button\\" tabindex=\\"-1\\" aria-label=\\"Close\\" (click)=\\"api.unselect(item)\\">x</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</ng-container>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t[value]=\\"state$().filterText\\"\\n\\t\\t\\taria-autocomplete=\\"list\\"\\n\\t\\t\\tautoCorrect=\\"off\\"\\n\\t\\t\\tautoCapitalize=\\"none\\"\\n\\t\\t\\tautoComplete=\\"off\\"\\n\\t\\t\\t(keydown)=\\"_widget.actions.onInputKeydown($event)\\"\\n\\t\\t\\t(input)=\\"_widget.actions.onInput($event)\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<ul\\n\\t\\t*ngIf=\\"state$().opened && state$().visible.length\\"\\n\\t\\t[auUse]=\\"_widget.directives.hasFocusDirective\\"\\n\\t\\tclass=\\"dropdown-menu show w-100\\"\\n\\t\\tdata-popper-placement=\\"bottom-start\\"\\n\\t\\t(mousedown)=\\"$event.preventDefault()\\"\\n\\t>\\n\\t\\t<li\\n\\t\\t\\t*ngFor=\\"let itemCtx of state$().visible; trackBy: itemCtxTrackBy\\"\\n\\t\\t\\tclass=\\"dropdown-item position-relative\\"\\n\\t\\t\\t[class.bg-light]=\\"itemCtx === state$().highlighted\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"form-check\\">\\n\\t\\t\\t\\t<input type=\\"checkbox\\" tabindex=\\"-1\\" class=\\"form-check-input\\" [id]=\\"itemCtx.id\\" [checked]=\\"itemCtx.selected\\" (change)=\\"itemCtx.toggle()\\" />\\n\\t\\t\\t\\t<label [for]=\\"itemCtx.id\\" class=\\"form-check-label stretched-link\\" (click)=\\"itemCtx.toggle(); $event.preventDefault()\\">\\n\\t\\t\\t\\t\\t{{ itemCtx.item }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t</ul>\\n</ng-container>\\n<style>\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n</style>\\n", styles: ["\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n"], dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [UseDirective, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, selector: 'au-select', host: {
                        '[class]': '"au-select dropdown input-group input-group-sm mb-3 d-block" + state$().className',
                    }, template: "<ng-container>\\n\\t<div [auUse]=\\"_widget.directives.hasFocusDirective\\" role=\\"combobox\\" class=\\"input-group\\" aria-haspopup=\\"listbox\\" aria-expanded=\\"true\\">\\n\\t\\t<ng-container *ngIf=\\"state$().selected as selected\\">\\n\\t\\t\\t<div *ngIf=\\"selected.length\\" class=\\"input-group-text\\" (mousedown)=\\"$event.preventDefault()\\">\\n\\t\\t\\t\\t<div *ngFor=\\"let item of selected\\" class=\\"badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1\\">\\n\\t\\t\\t\\t\\t<div class=\\"me-1\\">{{ item }}</div>\\n\\t\\t\\t\\t\\t<span role=\\"button\\" tabindex=\\"-1\\" aria-label=\\"Close\\" (click)=\\"api.unselect(item)\\">x</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</ng-container>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t[value]=\\"state$().filterText\\"\\n\\t\\t\\taria-autocomplete=\\"list\\"\\n\\t\\t\\tautoCorrect=\\"off\\"\\n\\t\\t\\tautoCapitalize=\\"none\\"\\n\\t\\t\\tautoComplete=\\"off\\"\\n\\t\\t\\t(keydown)=\\"_widget.actions.onInputKeydown($event)\\"\\n\\t\\t\\t(input)=\\"_widget.actions.onInput($event)\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<ul\\n\\t\\t*ngIf=\\"state$().opened && state$().visible.length\\"\\n\\t\\t[auUse]=\\"_widget.directives.hasFocusDirective\\"\\n\\t\\tclass=\\"dropdown-menu show w-100\\"\\n\\t\\tdata-popper-placement=\\"bottom-start\\"\\n\\t\\t(mousedown)=\\"$event.preventDefault()\\"\\n\\t>\\n\\t\\t<li\\n\\t\\t\\t*ngFor=\\"let itemCtx of state$().visible; trackBy: itemCtxTrackBy\\"\\n\\t\\t\\tclass=\\"dropdown-item position-relative\\"\\n\\t\\t\\t[class.bg-light]=\\"itemCtx === state$().highlighted\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"form-check\\">\\n\\t\\t\\t\\t<input type=\\"checkbox\\" tabindex=\\"-1\\" class=\\"form-check-input\\" [id]=\\"itemCtx.id\\" [checked]=\\"itemCtx.selected\\" (change)=\\"itemCtx.toggle()\\" />\\n\\t\\t\\t\\t<label [for]=\\"itemCtx.id\\" class=\\"form-check-label stretched-link\\" (click)=\\"itemCtx.toggle(); $event.preventDefault()\\">\\n\\t\\t\\t\\t\\t{{ itemCtx.item }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t</ul>\\n</ng-container>\\n<style>\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n</style>\\n", styles: ["\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { items: [{
                type: Input
            }], opened: [{
                type: Input
            }], filterText: [{
                type: Input
            }], className: [{
                type: Input
            }], filterTextChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], matchFn: [{
                type: Input
            }], itemId: [{
                type: Input
            }], selected: [{
                type: Input
            }], loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxVQUFVLENBQUM7OztBQWdCNUMsTUFBTSxPQUFPLGVBQWU7SUF1RDNCO1FBckNBOztXQUVHO1FBQ08scUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQTZCL0MsWUFBTyxHQUFHLGlCQUFpQixDQUFxQixZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEUsUUFBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWhDLFdBQU0sR0FBNEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFHcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbEIsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2hFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGNBQWMsQ0FBQyxDQUFTLEVBQUUsT0FBc0I7UUFDL0MsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OEdBbkVXLGVBQWU7a0dBQWYsZUFBZSw2Y0N6QjVCLGlsRUFzREEsNFFEdENXLFlBQVkscUZBQUUsWUFBWTs7MkZBU3hCLGVBQWU7a0JBWDNCLFNBQVM7aUNBQ0csSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxXQUFXLFFBR2Y7d0JBQ0wsU0FBUyxFQUFFLG1GQUFtRjtxQkFDOUY7MEVBTVEsS0FBSztzQkFBYixLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0ksZ0JBQWdCO3NCQUF6QixNQUFNO2dCQUtFLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUcsT0FBTztzQkFBZixLQUFLO2dCQU1HLE1BQU07c0JBQWQsS0FBSztnQkFLRyxRQUFRO3NCQUFoQixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtXaWRnZXRQcm9wcywgV2lkZ2V0U3RhdGUsIEl0ZW1DdHh9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0fSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgdHlwZSB7QWRhcHRXaWRnZXRTbG90c30gZnJvbSAnLi4vc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtVc2VEaXJlY3RpdmV9IGZyb20gJy4uL3RyYW5zaXRpb24vdXNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge3BhdGNoU2ltcGxlQ2hhbmdlc30gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBTZWxlY3RXaWRnZXQ8SXRlbT4gPSBBZGFwdFdpZGdldFNsb3RzPFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVNlbGVjdDxJdGVtPj4+O1xuZXhwb3J0IHR5cGUgU2VsZWN0UHJvcHM8SXRlbT4gPSBXaWRnZXRQcm9wczxTZWxlY3RXaWRnZXQ8SXRlbT4+O1xuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgQ29tbW9uTW9kdWxlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnYXUtc2VsZWN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlczogW10sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImF1LXNlbGVjdCBkcm9wZG93biBpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbSBtYi0zIGQtYmxvY2tcIiArIHN0YXRlJCgpLmNsYXNzTmFtZScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdC8qKlxuXHQgKiBMaXN0IG9mIGF2YWlsYWJsZSBpdGVtcyBmb3IgdGhlIGRyb3Bkb3duXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtczogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgb3BlblxuXHQgKi9cblx0QElucHV0KCkgb3BlbmVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKi9cblx0QElucHV0KCkgZmlsdGVyVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCkgZmlsdGVyVGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcblx0ICovXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZnVuY3Rpb24gdG8gZmlsdGVyIGFuIGl0ZW0uXG5cdCAqIEJ5IGRlZmF1bHQsIGl0ZW0gaXMgY29uc2lkZXJlZCBhcyBhIHN0cmluZywgYW5kIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRydWUgaWYgdGhlIHRleHQgaXMgZm91bmRcblx0ICovXG5cdEBJbnB1dCgpIG1hdGNoRm46ICgoaXRlbTogSXRlbSwgdGV4dDogc3RyaW5nKSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VzdG9tIGZ1bmN0aW9uIHRvIGdldCB0aGUgaWQgb2YgYW4gaXRlbVxuXHQgKiBCeSBkZWZhdWx0LCB0aGUgaXRlbSBpcyByZXR1cm5lZFxuXHQgKi9cblx0QElucHV0KCkgaXRlbUlkOiAoKGl0ZW06IEl0ZW0pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2Ygc2VsZWN0ZWQgaXRlbXNcblx0ICovXG5cdEBJbnB1dCgpIHNlbGVjdGVkOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgYSBsb2FkaW5nIHByb2Nlc3MgaXMgYmVpbmcgZG9uZVxuXHQgKi9cblx0QElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8U2VsZWN0V2lkZ2V0PEl0ZW0+PihjcmVhdGVTZWxlY3QsICdzZWxlY3QnKTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHRzdGF0ZSQ6IFNpZ25hbDxXaWRnZXRTdGF0ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+PiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQsIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRvbkZpbHRlclRleHRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5maWx0ZXJUZXh0Q2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cblx0aXRlbUN0eFRyYWNrQnkoXzogbnVtYmVyLCBpdGVtQ3R4OiBJdGVtQ3R4PEl0ZW0+KSB7XG5cdFx0cmV0dXJuIGl0ZW1DdHguaWQ7XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXI+XG5cdDxkaXYgW2F1VXNlXT1cIl93aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZVwiIHJvbGU9XCJjb21ib2JveFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIiBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+XG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInN0YXRlJCgpLnNlbGVjdGVkIGFzIHNlbGVjdGVkXCI+XG5cdFx0XHQ8ZGl2ICpuZ0lmPVwic2VsZWN0ZWQubGVuZ3RoXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlbGVjdGVkXCIgY2xhc3M9XCJiYWRnZSByb3VuZGVkLXBpbGwgdGV4dC1iZy1wcmltYXJ5IGQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG0tMVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZS0xXCI+e3sgaXRlbSB9fTwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImFwaS51bnNlbGVjdChpdGVtKVwiPng8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PGlucHV0XG5cdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRbdmFsdWVdPVwic3RhdGUkKCkuZmlsdGVyVGV4dFwiXG5cdFx0XHRhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuXHRcdFx0YXV0b0NvcnJlY3Q9XCJvZmZcIlxuXHRcdFx0YXV0b0NhcGl0YWxpemU9XCJub25lXCJcblx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHQoa2V5ZG93bik9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dEtleWRvd24oJGV2ZW50KVwiXG5cdFx0XHQoaW5wdXQpPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXQoJGV2ZW50KVwiXG5cdFx0Lz5cblx0PC9kaXY+XG5cdDx1bFxuXHRcdCpuZ0lmPVwic3RhdGUkKCkub3BlbmVkICYmIHN0YXRlJCgpLnZpc2libGUubGVuZ3RoXCJcblx0XHRbYXVVc2VdPVwiX3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlXCJcblx0XHRjbGFzcz1cImRyb3Bkb3duLW1lbnUgc2hvdyB3LTEwMFwiXG5cdFx0ZGF0YS1wb3BwZXItcGxhY2VtZW50PVwiYm90dG9tLXN0YXJ0XCJcblx0XHQobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0PlxuXHRcdDxsaVxuXHRcdFx0Km5nRm9yPVwibGV0IGl0ZW1DdHggb2Ygc3RhdGUkKCkudmlzaWJsZTsgdHJhY2tCeTogaXRlbUN0eFRyYWNrQnlcIlxuXHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCJcblx0XHRcdFtjbGFzcy5iZy1saWdodF09XCJpdGVtQ3R4ID09PSBzdGF0ZSQoKS5oaWdobGlnaHRlZFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBbaWRdPVwiaXRlbUN0eC5pZFwiIFtjaGVja2VkXT1cIml0ZW1DdHguc2VsZWN0ZWRcIiAoY2hhbmdlKT1cIml0ZW1DdHgudG9nZ2xlKClcIiAvPlxuXHRcdFx0XHQ8bGFiZWwgW2Zvcl09XCJpdGVtQ3R4LmlkXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIHN0cmV0Y2hlZC1saW5rXCIgKGNsaWNrKT1cIml0ZW1DdHgudG9nZ2xlKCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XG5cdFx0XHRcdFx0e3sgaXRlbUN0eC5pdGVtIH19XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuPC9uZy1jb250YWluZXI+XG48c3R5bGU+XG5cdC5pbnB1dC1ncm91cC10ZXh0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQuZHJvcGRvd24tbWVudSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGluc2V0OiAwcHggYXV0byBhdXRvIDBweDtcblx0XHRtYXJnaW46IDBweDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgNDVweCwgMHB4KTtcblx0fVxuPC9zdHlsZT5cbiJdfQ==`;export{t as default};
