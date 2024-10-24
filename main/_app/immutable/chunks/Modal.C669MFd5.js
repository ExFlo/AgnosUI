const t=`<script lang="ts" generics="Data">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {ModalWidget, ModalProps, ModalApi, ModalContext} from './modal.gen';
	import {createModal} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import ModalDefaultHeader from './ModalDefaultHeader.svelte';
	import ModalDefaultStructure from './ModalDefaultStructure.svelte';

	let {visible = $bindable(), ...props}: Partial<ModalProps<Data>> = $props();

	const widget = callWidgetFactory<ModalWidget<Data>>({
		factory: createModal,
		widgetName: 'modal',
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		defaultConfig: {
			header,
			structure,
		},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	export const api: ModalApi<Data> = widget.api;

	const {
		directives: {backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective},
		state,
	} = widget;
<\/script>

{#snippet structure(props: ModalContext<Data>)}
	<ModalDefaultStructure {...props} />
{/snippet}
{#snippet header(props: ModalContext<Data>)}
	<ModalDefaultHeader {...props} />
{/snippet}

{#if !state.backdropHidden}
	<div use:__AgnosUISveltePreprocess__classDirective={"modal-backdrop"} use:backdropPortalDirective use:backdropDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(backdropPortalDirective, backdropDirective, [__AgnosUISveltePreprocess__classDirective, "modal-backdrop"])}></div>
{/if}

{#if !state.hidden}
	<div use:__AgnosUISveltePreprocess__classDirective={"modal d-block"} use:modalPortalDirective use:modalDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(modalPortalDirective, modalDirective, [__AgnosUISveltePreprocess__classDirective, "modal d-block"])}>
		<div class="modal-dialog {state.fullscreen ? 'modal-fullscreen' : ''}">
			<div class="modal-content">
				<Slot content={state.structure} props={widget} />
			</div>
		</div>
	</div>
{/if}
`;export{t as default};