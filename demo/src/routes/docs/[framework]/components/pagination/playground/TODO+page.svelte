<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getPaginationDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import sample from '@agnos-ui/samples/bootstrap/pagination/playground';
	import doc from '@agnos-ui/generated/doc/api.json?pagination&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	interface Props {
		listPropsValues?: {[key in keyof ReturnType<typeof getPaginationDefaultConfig>]?: PropsValues[]};
	}

	let {
		listPropsValues = {
			onPageChange: ['noop', 'log'],
			pagesFactory: ['defaultPageFactory'],
			ariaPageLabel: ['simpleLabel', 'pageLabel'],
			numberLabel: ['numberLabel'],
		},
	}: Props = $props();
</script>

<Playground {sample} config={getPaginationDefaultConfig()} {doc} {listPropsValues} />
