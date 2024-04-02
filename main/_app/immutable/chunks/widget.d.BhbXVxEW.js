const e=`import { type ReadableSignal } from '@amadeus-it-group/tansu';
import type { OnChanges, OnInit, Signal, SimpleChanges } from '@angular/core';
import { type AngularWidget, type ContextWidget, type Widget, type WidgetFactory, type WidgetProps, type WidgetState } from '../types';
import * as i0 from "@angular/core";
/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.afterInit - a callback to call after successful setup of the widget
 * @returns the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget<object, object, object, object, object>>({ factory, defaultConfig, widgetConfig, events, afterInit, }: {
    factory: WidgetFactory<W>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`> | undefined;
    afterInit?: (() => void) | undefined;
}) => AngularWidget<W>;
/**
 * Stores the result of the first call to the getter and returns that result directly for subsequent calls
 *
 * Applies to: class getters
 *
 * @param target - the target
 * @param property - the property
 * @param descriptor - the property descriptor
 */
export declare const CachedProperty: (target: any, property: PropertyKey, descriptor: PropertyDescriptor) => void;
export declare abstract class BaseWidgetDirective<W extends Widget> implements OnChanges, OnInit {
    protected abstract readonly _widget: AngularWidget<W>;
    get api(): W['api'];
    get state(): Signal<WidgetState<W>>;
    get widget(): ContextWidget<W>;
    /** @inheritdoc */
    ngOnChanges(changes: SimpleChanges): void;
    /** @inheritdoc */
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseWidgetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseWidgetDirective<any>, never, never, {}, {}, never, never, false, never>;
}
`;export{e as default};