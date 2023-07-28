const t=`<script lang="ts">
	import {Alert} from '@agnos-ui/svelte';

	let alert: Alert;
	let [animationOnInit, animation, dismissible] = [true, true, true];
	let type = 'success';

	enum AlertStatus {
		success = 'success',
		info = 'info',
		warning = 'warning',
		danger = 'danger',
		primary = 'primary',
		secondary = 'secondary',
		light = 'light',
		dark = 'dark',
	}

	const styles = Object.entries(AlertStatus).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
<\/script>

<button class="btn btn-primary showAlert" on:click={() => alert.api.open()} type="button">Show alert</button>

<br />
<br />

<div class="d-flex flex-column">
	<div class="d-flex form-group">
		<label class="align-self-center me-3" for="typeSelect">Alert type: </label>
		<select id="typeSelect" class="form-select w-auto" bind:value={type}>
			{#each styles as { value, label }}
				<option {value}> {label}</option>
			{/each}
		</select>
	</div>

	<label><input class="form-check-input me-1" type="checkbox" bind:checked={animationOnInit} />Animation on init</label>
	<label><input class="form-check-input me-1" type="checkbox" bind:checked={animation} />Animation</label>
	<label><input class="dismissibleInput form-check-input me-1" type="checkbox" bind:checked={dismissible} />Dismissible</label>
</div>

<br />
<br />
<Alert bind:this={alert} {dismissible} {animationOnInit} {animation} {type}>
	<h4 class="alert-heading">Well done!</h4>
	<p>
		Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.
	</p>
	<hr />
	<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Alert>
`;export{t as default};
