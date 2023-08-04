const t=`{
	"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
	"newProjectRoot": "projects",
	"projects": {
		"demo": {
			"architect": {
				"build": {
					"builder": "@angular-devkit/build-angular:browser",
					"configurations": {
						"development": {
							"buildOptimizer": false,
							"extractLicenses": false,
							"namedChunks": true,
							"optimization": false,
							"sourceMap": true,
							"vendorChunk": true
						}
					},
					"options": {
						"assets": [],
						"index": "index.html",
						"main": "src/main.ts",
						"polyfills": "src/polyfills.ts",
						"outputPath": "dist/demo",
						"scripts": [],
						"styles": [],
						"tsConfig": "tsconfig.json"
					}
				},
				"serve": {
					"builder": "@angular-devkit/build-angular:dev-server",
					"configurations": {
						"development": {
							"browserTarget": "demo:build:development"
						},
						"production": {
							"browserTarget": "demo:build:production"
						}
					},
					"defaultConfiguration": "development"
				}
			},
			"prefix": "app",
			"projectType": "application",
			"root": "",
			"schematics": {},
			"sourceRoot": "src"
		}
	},
	"version": 1
}
`;export{t as default};
