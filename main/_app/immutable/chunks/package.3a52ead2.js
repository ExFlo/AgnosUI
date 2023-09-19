const t=`{
	"name": "@agnos-ui/react-headless",
	"type": "module",
	"main": "./index.js",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"default": "./index.js"
		}
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.22",
		"classnames": "^2.3.2"
	},
	"peerDependencies": {
		"react": "*",
		"react-dom": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "react/headless"
	},
	"keywords": [
		"react",
		"headless",
		"components",
		"widgets",
		"accordion",
		"alert",
		"modal",
		"pagination",
		"rating"
	]
}`;export{t as default};