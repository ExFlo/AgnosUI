<script lang="ts">
	import {page} from '$app/stores';
	import {createTransition} from '@agnos-ui/core/services/transitions/baseTransitions';
	import {collapseVerticalTransition} from '@agnos-ui/core/services/transitions/bootstrap';
	import {writable} from '@amadeus-it-group/tansu';
	import type {Page} from '@sveltejs/kit';
	import {onMount} from 'svelte';
	import {get} from 'svelte/store';

	export let headerText: string;

	function toKebabCase(original: string): string {
		return original
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
			.join('-')
			.toLowerCase();
	}

	const paramTransition$ = writable(collapseVerticalTransition);
	const paramAnimation$ = writable(false);
	const defaultVisible = isOnPage(get(page));
	const paramVisible$ = writable(defaultVisible);
	onMount(() => {
		paramAnimation$.set(true);
		return page.subscribe((p) => {
			if (paramVisible$() === false) {
				paramVisible$.set(isOnPage(p));
			}
		});
	});
	const {
		stores: {visible$, hidden$},
		api: {toggle},
		directives: {directive},
	} = createTransition({
		props: {
			animation: paramAnimation$,
			animationOnInit: paramAnimation$,
			visible: paramVisible$,
		},
	});

	function isOnPage(page: Page<Record<string, string>, string | null>) {
		return page.url.pathname?.includes(toKebabCase(headerText));
	}
</script>

<div class="mb-2">
	<button
		class="btn p-1 d-flex align-items-center btn-header fw-semibold w-100 justify-content-between"
		aria-expanded={$visible$}
		on:click={() => toggle()}
		>{headerText}
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1">
			<rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
			<rect class="vertical" class:expanded={$visible$} x="45" y="20" width="10" height="60" fill="currentColor" />
		</svg>
	</button>
	{#if !$hidden$}
		<div class="contents" use:directive={{transition: $paramTransition$, animation: $paramAnimation$}}>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.btn-header:focus-visible,
	.btn-header:hover,
	.btn-header:focus-visible:active {
		background-color: var(--bs-secondary-bg-subtle);
		border-color: var(--bs-secondary-bg-subtle);
	}

	svg {
		rect {
			transition: transform 0.35s ease-in-out;
		}

		.vertical {
			transform: rotate(0);
			transform-origin: center;
			&.expanded {
				transform: rotate(90deg);
			}
		}
	}
</style>