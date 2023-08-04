const t=`{
	"name": "@agnos-ui/svelte",
	"description": "Bootstrap-based widget library for Svelte.",
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"keywords": [
		"svelte",
		"bootstrap",
		"components",
		"widgets",
		"alert",
		"modal",
		"pagination",
		"rating"
	],
	"type": "module",
	"main": "dist/lib/index.cjs",
	"module": "dist/lib/index.js",
	"types": "dist/lib/index.d.ts",
	"files": [
		"dist/lib"
	],
	"scripts": {
		"dev": "vite -c vite.demo.config.ts",
		"dev:coverage": "vite -c vite.demo-coverage.config.ts",
		"build": "npm run build:rollup && npm run build:dts && npm run build:api-extractor && npm run build:demo && npm run svelte-check",
		"build:coverage": "vite build -c vite.demo-coverage.config.ts",
		"build:rollup": "vite build -c vite.lib.config.ts",
		"build:dts": "tsc -p tsconfig.d.json",
		"build:api-extractor": "api-extractor run",
		"build:demo": "vite build -c vite.demo.config.ts",
		"preview": "vite preview -c vite.demo.config.ts",
		"svelte-check": "svelte-check --fail-on-warnings --tsconfig ./tsconfig.json --output human-verbose"
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.22"
	},
	"peerDependencies": {
		"svelte": "*"
	},
	"devDependencies": {
		"@sveltejs/vite-plugin-svelte": "^2.4.3",
		"eslint-plugin-svelte": "^2.32.4",
		"prettier-plugin-svelte": "^2.10.1",
		"svelte": "^4.1.2",
		"svelte-check": "^3.4.6"
	},
	"license": "MIT",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte"
	}
}
`;export{t as default};
