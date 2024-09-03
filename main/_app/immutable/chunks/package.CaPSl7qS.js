const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.0.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build && svelte-check --tsconfig ./tsconfig.json",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@amadeus-it-group/tansu": "^1.0.0",
		"@floating-ui/dom": "^1.6.10",
		"@sveltejs/vite-plugin-svelte": "^3.1.2",
		"@tsconfig/svelte": "^5.0.4",
		"bootstrap-icons": "^1.11.3",
		"sass": "^1.77.8",
		"svelte": "^4.2.19",
		"svelte-check": "^3.8.6",
		"tslib": "^2.7.0",
		"typescript": "~5.5.4",
		"vite": "^5.4.2"
	}
}
`;export{t as default};