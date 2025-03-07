import {AlertComponent, provideWidgetsConfig, injectWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	imports: [AlertComponent],
	providers: [provideWidgetsConfig()],
	template: `
		<au-component auAlert auType="primary">Simple primary alert</au-component>
		<au-component auAlert auType="secondary">Simple secondary alert</au-component>
	`,
})
export default class GenericAlertComponent {
	readonly widgetConfig$ = injectWidgetsConfig({alert: {dismissible: false}});
}
