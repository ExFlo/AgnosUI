const t=`{
	"name": "agnos-ui-svelte-stackblitz-demo",
	"version": "0.0.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "agnos-ui-svelte-stackblitz-demo",
			"version": "0.0.0",
			"devDependencies": {
				"@amadeus-it-group/tansu": "^1.0.0",
				"@floating-ui/dom": "^1.6.11",
				"@sveltejs/vite-plugin-svelte": "^4.0.0-next.7",
				"@tsconfig/svelte": "^5.0.4",
				"bootstrap-icons": "^1.11.3",
				"sass": "^1.79.4",
				"svelte": "^5.0.0-next.260",
				"svelte-check": "^4.0.4",
				"tslib": "^2.7.0",
				"typescript": "~5.5.4",
				"vite": "^5.4.8"
			}
		},
		"node_modules/@amadeus-it-group/tansu": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/@amadeus-it-group/tansu/-/tansu-1.0.0.tgz",
			"integrity": "sha512-JXR89NVtWT8rn7prB9j7/x/n/IxiWJEXhRWztyocrzb+M9hEhvIESeIE3mpSbrWRmDTyWvdpDCnOvKJ5/W8APQ==",
			"dev": true
		},
		"node_modules/@ampproject/remapping": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
			"integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
			"dev": true,
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.5",
				"@jridgewell/trace-mapping": "^0.3.24"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@esbuild/aix-ppc64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
			"integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"aix"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/android-arm": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
			"integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/android-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
			"integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/android-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
			"integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/darwin-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
			"integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/darwin-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
			"integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/freebsd-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
			"integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/freebsd-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
			"integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"freebsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-arm": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
			"integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
			"integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-ia32": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
			"integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-loong64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
			"integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
			"cpu": [
				"loong64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-mips64el": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
			"integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
			"cpu": [
				"mips64el"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-ppc64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
			"integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-riscv64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
			"integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-s390x": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
			"integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/linux-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
			"integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/netbsd-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
			"integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"netbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/openbsd-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
			"integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"openbsd"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/sunos-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
			"integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"sunos"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/win32-arm64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
			"integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/win32-ia32": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
			"integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@esbuild/win32-x64": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
			"integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			],
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@floating-ui/core": {
			"version": "1.6.8",
			"resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.8.tgz",
			"integrity": "sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==",
			"dev": true,
			"dependencies": {
				"@floating-ui/utils": "^0.2.8"
			}
		},
		"node_modules/@floating-ui/dom": {
			"version": "1.6.11",
			"resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.11.tgz",
			"integrity": "sha512-qkMCxSR24v2vGkhYDo/UzxfJN3D4syqSjyuTFz6C7XcpU1pASPRieNI0Kj5VP3/503mOfYiGY891ugBX1GlABQ==",
			"dev": true,
			"dependencies": {
				"@floating-ui/core": "^1.6.0",
				"@floating-ui/utils": "^0.2.8"
			}
		},
		"node_modules/@floating-ui/utils": {
			"version": "0.2.8",
			"resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.8.tgz",
			"integrity": "sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig==",
			"dev": true
		},
		"node_modules/@jridgewell/gen-mapping": {
			"version": "0.3.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
			"integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
			"dev": true,
			"dependencies": {
				"@jridgewell/set-array": "^1.2.1",
				"@jridgewell/sourcemap-codec": "^1.4.10",
				"@jridgewell/trace-mapping": "^0.3.24"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/resolve-uri": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
			"integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
			"dev": true,
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/set-array": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
			"integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
			"dev": true,
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/sourcemap-codec": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
			"integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
			"dev": true
		},
		"node_modules/@jridgewell/trace-mapping": {
			"version": "0.3.25",
			"resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
			"integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/resolve-uri": "^3.1.0",
				"@jridgewell/sourcemap-codec": "^1.4.14"
			}
		},
		"node_modules/@rollup/rollup-android-arm-eabi": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.22.4.tgz",
			"integrity": "sha512-Fxamp4aEZnfPOcGA8KSNEohV8hX7zVHOemC8jVBoBUHu5zpJK/Eu3uJwt6BMgy9fkvzxDaurgj96F/NiLukF2w==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			]
		},
		"node_modules/@rollup/rollup-android-arm64": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.22.4.tgz",
			"integrity": "sha512-VXoK5UMrgECLYaMuGuVTOx5kcuap1Jm8g/M83RnCHBKOqvPPmROFJGQaZhGccnsFtfXQ3XYa4/jMCJvZnbJBdA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"android"
			]
		},
		"node_modules/@rollup/rollup-darwin-arm64": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.22.4.tgz",
			"integrity": "sha512-xMM9ORBqu81jyMKCDP+SZDhnX2QEVQzTcC6G18KlTQEzWK8r/oNZtKuZaCcHhnsa6fEeOBionoyl5JsAbE/36Q==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-darwin-x64": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.22.4.tgz",
			"integrity": "sha512-aJJyYKQwbHuhTUrjWjxEvGnNNBCnmpHDvrb8JFDbeSH3m2XdHcxDd3jthAzvmoI8w/kSjd2y0udT+4okADsZIw==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"darwin"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-gnueabihf": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.22.4.tgz",
			"integrity": "sha512-j63YtCIRAzbO+gC2L9dWXRh5BFetsv0j0va0Wi9epXDgU/XUi5dJKo4USTttVyK7fGw2nPWK0PbAvyliz50SCQ==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm-musleabihf": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.22.4.tgz",
			"integrity": "sha512-dJnWUgwWBX1YBRsuKKMOlXCzh2Wu1mlHzv20TpqEsfdZLb3WoJW2kIEsGwLkroYf24IrPAvOT/ZQ2OYMV6vlrg==",
			"cpu": [
				"arm"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm64-gnu": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.22.4.tgz",
			"integrity": "sha512-AdPRoNi3NKVLolCN/Sp4F4N1d98c4SBnHMKoLuiG6RXgoZ4sllseuGioszumnPGmPM2O7qaAX/IJdeDU8f26Aw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-arm64-musl": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.22.4.tgz",
			"integrity": "sha512-Gl0AxBtDg8uoAn5CCqQDMqAx22Wx22pjDOjBdmG0VIWX3qUBHzYmOKh8KXHL4UpogfJ14G4wk16EQogF+v8hmA==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.22.4.tgz",
			"integrity": "sha512-3aVCK9xfWW1oGQpTsYJJPF6bfpWfhbRnhdlyhak2ZiyFLDaayz0EP5j9V1RVLAAxlmWKTDfS9wyRyY3hvhPoOg==",
			"cpu": [
				"ppc64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-riscv64-gnu": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.22.4.tgz",
			"integrity": "sha512-ePYIir6VYnhgv2C5Xe9u+ico4t8sZWXschR6fMgoPUK31yQu7hTEJb7bCqivHECwIClJfKgE7zYsh1qTP3WHUA==",
			"cpu": [
				"riscv64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-s390x-gnu": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.22.4.tgz",
			"integrity": "sha512-GqFJ9wLlbB9daxhVlrTe61vJtEY99/xB3C8e4ULVsVfflcpmR6c8UZXjtkMA6FhNONhj2eA5Tk9uAVw5orEs4Q==",
			"cpu": [
				"s390x"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-gnu": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.22.4.tgz",
			"integrity": "sha512-87v0ol2sH9GE3cLQLNEy0K/R0pz1nvg76o8M5nhMR0+Q+BBGLnb35P0fVz4CQxHYXaAOhE8HhlkaZfsdUOlHwg==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-linux-x64-musl": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.22.4.tgz",
			"integrity": "sha512-UV6FZMUgePDZrFjrNGIWzDo/vABebuXBhJEqrHxrGiU6HikPy0Z3LfdtciIttEUQfuDdCn8fqh7wiFJjCNwO+g==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"linux"
			]
		},
		"node_modules/@rollup/rollup-win32-arm64-msvc": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.22.4.tgz",
			"integrity": "sha512-BjI+NVVEGAXjGWYHz/vv0pBqfGoUH0IGZ0cICTn7kB9PyjrATSkX+8WkguNjWoj2qSr1im/+tTGRaY+4/PdcQw==",
			"cpu": [
				"arm64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@rollup/rollup-win32-ia32-msvc": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.22.4.tgz",
			"integrity": "sha512-SiWG/1TuUdPvYmzmYnmd3IEifzR61Tragkbx9D3+R8mzQqDBz8v+BvZNDlkiTtI9T15KYZhP0ehn3Dld4n9J5g==",
			"cpu": [
				"ia32"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@rollup/rollup-win32-x64-msvc": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.22.4.tgz",
			"integrity": "sha512-j8pPKp53/lq9lMXN57S8cFz0MynJk8OWNuUnXct/9KCpKU7DgU3bYMJhwWmcqC0UU29p8Lr0/7KEVcaM6bf47Q==",
			"cpu": [
				"x64"
			],
			"dev": true,
			"optional": true,
			"os": [
				"win32"
			]
		},
		"node_modules/@sveltejs/vite-plugin-svelte": {
			"version": "4.0.0-next.7",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-4.0.0-next.7.tgz",
			"integrity": "sha512-yMUnAqquoayvBDztk1rWUgdtvjv7YcHgopCAB7sWl9SQht8U/7lqwTlJU0ZTAY09pFFRe6bbakd7YoiyyIvJiA==",
			"dev": true,
			"dependencies": {
				"@sveltejs/vite-plugin-svelte-inspector": "^3.0.0-next.0||^3.0.0",
				"debug": "^4.3.6",
				"deepmerge": "^4.3.1",
				"kleur": "^4.1.5",
				"magic-string": "^0.30.11",
				"vitefu": "^1.0.2"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22"
			},
			"peerDependencies": {
				"svelte": "^5.0.0-next.96 || ^5.0.0",
				"vite": "^5.0.0"
			}
		},
		"node_modules/@sveltejs/vite-plugin-svelte-inspector": {
			"version": "3.0.0-next.3",
			"resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte-inspector/-/vite-plugin-svelte-inspector-3.0.0-next.3.tgz",
			"integrity": "sha512-kuGJ2CZ5lAw3gKF8Kw0AfKtUJWbwdlDHY14K413B0MCyrzvQvsKTorwmwZcky0+QqY6RnVIZ/5FttB9bQmkLXg==",
			"dev": true,
			"dependencies": {
				"debug": "^4.3.5"
			},
			"engines": {
				"node": "^18.0.0 || ^20.0.0 || >=22"
			},
			"peerDependencies": {
				"@sveltejs/vite-plugin-svelte": "^4.0.0-next.0||^4.0.0",
				"svelte": "^5.0.0-next.96 || ^5.0.0",
				"vite": "^5.0.0"
			}
		},
		"node_modules/@tsconfig/svelte": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-5.0.4.tgz",
			"integrity": "sha512-BV9NplVgLmSi4mwKzD8BD/NQ8erOY/nUE/GpgWe2ckx+wIQF5RyRirn/QsSSCPeulVpc3RA/iJt6DpfTIZps0Q==",
			"dev": true
		},
		"node_modules/@types/estree": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
			"integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
			"dev": true
		},
		"node_modules/acorn": {
			"version": "8.12.1",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.1.tgz",
			"integrity": "sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==",
			"dev": true,
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/acorn-typescript": {
			"version": "1.4.13",
			"resolved": "https://registry.npmjs.org/acorn-typescript/-/acorn-typescript-1.4.13.tgz",
			"integrity": "sha512-xsc9Xv0xlVfwp2o7sQ+GCQ1PgbkdcpWdTzrwXxO3xDMTAywVS3oXVOcOHuRjAPkS4P9b+yc/qNF15460v+jp4Q==",
			"dev": true,
			"peerDependencies": {
				"acorn": ">=8.9.0"
			}
		},
		"node_modules/aria-query": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
			"integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/axobject-query": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
			"integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/bootstrap-icons": {
			"version": "1.11.3",
			"resolved": "https://registry.npmjs.org/bootstrap-icons/-/bootstrap-icons-1.11.3.tgz",
			"integrity": "sha512-+3lpHrCw/it2/7lBL15VR0HEumaBss0+f/Lb6ZvHISn1mlK83jjFpooTLsMWbIjJMDjDjOExMsTxnXSIT4k4ww==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/twbs"
				},
				{
					"type": "opencollective",
					"url": "https://opencollective.com/bootstrap"
				}
			]
		},
		"node_modules/chokidar": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.1.tgz",
			"integrity": "sha512-n8enUVCED/KVRQlab1hr3MVpcVMvxtZjmEa956u+4YijlmQED223XMSYj2tLuKvr4jcCTzNNMpQDUer72MMmzA==",
			"dev": true,
			"dependencies": {
				"readdirp": "^4.0.1"
			},
			"engines": {
				"node": ">= 14.16.0"
			},
			"funding": {
				"url": "https://paulmillr.com/funding/"
			}
		},
		"node_modules/debug": {
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
			"integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
			"dev": true,
			"dependencies": {
				"ms": "^2.1.3"
			},
			"engines": {
				"node": ">=6.0"
			},
			"peerDependenciesMeta": {
				"supports-color": {
					"optional": true
				}
			}
		},
		"node_modules/deepmerge": {
			"version": "4.3.1",
			"resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
			"integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/esbuild": {
			"version": "0.21.5",
			"resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
			"integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
			"dev": true,
			"hasInstallScript": true,
			"bin": {
				"esbuild": "bin/esbuild"
			},
			"engines": {
				"node": ">=12"
			},
			"optionalDependencies": {
				"@esbuild/aix-ppc64": "0.21.5",
				"@esbuild/android-arm": "0.21.5",
				"@esbuild/android-arm64": "0.21.5",
				"@esbuild/android-x64": "0.21.5",
				"@esbuild/darwin-arm64": "0.21.5",
				"@esbuild/darwin-x64": "0.21.5",
				"@esbuild/freebsd-arm64": "0.21.5",
				"@esbuild/freebsd-x64": "0.21.5",
				"@esbuild/linux-arm": "0.21.5",
				"@esbuild/linux-arm64": "0.21.5",
				"@esbuild/linux-ia32": "0.21.5",
				"@esbuild/linux-loong64": "0.21.5",
				"@esbuild/linux-mips64el": "0.21.5",
				"@esbuild/linux-ppc64": "0.21.5",
				"@esbuild/linux-riscv64": "0.21.5",
				"@esbuild/linux-s390x": "0.21.5",
				"@esbuild/linux-x64": "0.21.5",
				"@esbuild/netbsd-x64": "0.21.5",
				"@esbuild/openbsd-x64": "0.21.5",
				"@esbuild/sunos-x64": "0.21.5",
				"@esbuild/win32-arm64": "0.21.5",
				"@esbuild/win32-ia32": "0.21.5",
				"@esbuild/win32-x64": "0.21.5"
			}
		},
		"node_modules/esm-env": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/esm-env/-/esm-env-1.0.0.tgz",
			"integrity": "sha512-Cf6VksWPsTuW01vU9Mk/3vRue91Zevka5SjyNf3nEpokFRuqt/KjUQoGAwq9qMmhpLTHmXzSIrFRw8zxWzmFBA==",
			"dev": true
		},
		"node_modules/esrap": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/esrap/-/esrap-1.2.2.tgz",
			"integrity": "sha512-F2pSJklxx1BlQIQgooczXCPHmcWpn6EsP5oo73LQfonG9fIlIENQ8vMmfGXeojP9MrkzUNAfyU5vdFlR9shHAw==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.4.15",
				"@types/estree": "^1.0.1"
			}
		},
		"node_modules/fdir": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/fdir/-/fdir-6.3.0.tgz",
			"integrity": "sha512-QOnuT+BOtivR77wYvCWHfGt9s4Pz1VIMbD463vegT5MLqNXy8rYFT/lPVEqf/bhYeT6qmqrNHhsX+rWwe3rOCQ==",
			"dev": true,
			"peerDependencies": {
				"picomatch": "^3 || ^4"
			},
			"peerDependenciesMeta": {
				"picomatch": {
					"optional": true
				}
			}
		},
		"node_modules/fsevents": {
			"version": "2.3.3",
			"resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
			"integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
			"dev": true,
			"hasInstallScript": true,
			"optional": true,
			"os": [
				"darwin"
			],
			"engines": {
				"node": "^8.16.0 || ^10.6.0 || >=11.0.0"
			}
		},
		"node_modules/immutable": {
			"version": "4.3.7",
			"resolved": "https://registry.npmjs.org/immutable/-/immutable-4.3.7.tgz",
			"integrity": "sha512-1hqclzwYwjRDFLjcFxOM5AYkkG0rpFPpr1RLPMEuGczoS7YA8gLhy8SWXYRAA/XwfEHpfo3cw5JGioS32fnMRw==",
			"dev": true
		},
		"node_modules/is-reference": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/is-reference/-/is-reference-3.0.2.tgz",
			"integrity": "sha512-v3rht/LgVcsdZa3O2Nqs+NMowLOxeOm7Ay9+/ARQ2F+qEoANRcqrjAZKGN0v8ymUetZGgkp26LTnGT7H0Qo9Pg==",
			"dev": true,
			"dependencies": {
				"@types/estree": "*"
			}
		},
		"node_modules/kleur": {
			"version": "4.1.5",
			"resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
			"integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/locate-character": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/locate-character/-/locate-character-3.0.0.tgz",
			"integrity": "sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==",
			"dev": true
		},
		"node_modules/magic-string": {
			"version": "0.30.11",
			"resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.11.tgz",
			"integrity": "sha512-+Wri9p0QHMy+545hKww7YAu5NyzF8iomPL/RQazugQ9+Ez4Ic3mERMd8ZTX5rfK944j+560ZJi8iAwgak1Ac7A==",
			"dev": true,
			"dependencies": {
				"@jridgewell/sourcemap-codec": "^1.5.0"
			}
		},
		"node_modules/mri": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
			"integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true
		},
		"node_modules/nanoid": {
			"version": "3.3.7",
			"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
			"integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
			"dev": true,
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"bin": {
				"nanoid": "bin/nanoid.cjs"
			},
			"engines": {
				"node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
			}
		},
		"node_modules/picocolors": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.0.tgz",
			"integrity": "sha512-TQ92mBOW0l3LeMeyLV6mzy/kWr8lkd/hp3mTg7wYK7zJhuBStmGMBG0BdeDZS/dZx1IukaX6Bk11zcln25o1Aw==",
			"dev": true
		},
		"node_modules/picomatch": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
			"integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
			"dev": true,
			"optional": true,
			"peer": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/postcss": {
			"version": "8.4.47",
			"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.47.tgz",
			"integrity": "sha512-56rxCq7G/XfB4EkXq9Egn5GCqugWvDFjafDOThIdMBsI15iqPqR5r15TfSr1YPYeEI19YeaXMCbY6u88Y76GLQ==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/postcss/"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/postcss"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"dependencies": {
				"nanoid": "^3.3.7",
				"picocolors": "^1.1.0",
				"source-map-js": "^1.2.1"
			},
			"engines": {
				"node": "^10 || ^12 || >=14"
			}
		},
		"node_modules/readdirp": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.0.1.tgz",
			"integrity": "sha512-GkMg9uOTpIWWKbSsgwb5fA4EavTR+SG/PMPoAY8hkhHfEEY0/vqljY+XHqtDf2cr2IJtoNRDbrrEpZUiZCkYRw==",
			"dev": true,
			"engines": {
				"node": ">= 14.16.0"
			},
			"funding": {
				"type": "individual",
				"url": "https://paulmillr.com/funding/"
			}
		},
		"node_modules/rollup": {
			"version": "4.22.4",
			"resolved": "https://registry.npmjs.org/rollup/-/rollup-4.22.4.tgz",
			"integrity": "sha512-vD8HJ5raRcWOyymsR6Z3o6+RzfEPCnVLMFJ6vRslO1jt4LO6dUo5Qnpg7y4RkZFM2DMe3WUirkI5c16onjrc6A==",
			"dev": true,
			"dependencies": {
				"@types/estree": "1.0.5"
			},
			"bin": {
				"rollup": "dist/bin/rollup"
			},
			"engines": {
				"node": ">=18.0.0",
				"npm": ">=8.0.0"
			},
			"optionalDependencies": {
				"@rollup/rollup-android-arm-eabi": "4.22.4",
				"@rollup/rollup-android-arm64": "4.22.4",
				"@rollup/rollup-darwin-arm64": "4.22.4",
				"@rollup/rollup-darwin-x64": "4.22.4",
				"@rollup/rollup-linux-arm-gnueabihf": "4.22.4",
				"@rollup/rollup-linux-arm-musleabihf": "4.22.4",
				"@rollup/rollup-linux-arm64-gnu": "4.22.4",
				"@rollup/rollup-linux-arm64-musl": "4.22.4",
				"@rollup/rollup-linux-powerpc64le-gnu": "4.22.4",
				"@rollup/rollup-linux-riscv64-gnu": "4.22.4",
				"@rollup/rollup-linux-s390x-gnu": "4.22.4",
				"@rollup/rollup-linux-x64-gnu": "4.22.4",
				"@rollup/rollup-linux-x64-musl": "4.22.4",
				"@rollup/rollup-win32-arm64-msvc": "4.22.4",
				"@rollup/rollup-win32-ia32-msvc": "4.22.4",
				"@rollup/rollup-win32-x64-msvc": "4.22.4",
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/rollup/node_modules/@types/estree": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
			"integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
			"dev": true
		},
		"node_modules/sade": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/sade/-/sade-1.8.1.tgz",
			"integrity": "sha512-xal3CZX1Xlo/k4ApwCFrHVACi9fBqJ7V+mwhBsuf/1IOKbBy098Fex+Wa/5QMubw09pSZ/u8EY8PWgevJsXp1A==",
			"dev": true,
			"dependencies": {
				"mri": "^1.1.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/sass": {
			"version": "1.79.4",
			"resolved": "https://registry.npmjs.org/sass/-/sass-1.79.4.tgz",
			"integrity": "sha512-K0QDSNPXgyqO4GZq2HO5Q70TLxTH6cIT59RdoCHMivrC8rqzaTw5ab9prjz9KUN1El4FLXrBXJhik61JR4HcGg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"chokidar": "^4.0.0",
				"immutable": "^4.0.0",
				"source-map-js": ">=0.6.2 <2.0.0"
			},
			"bin": {
				"sass": "sass.js"
			},
			"engines": {
				"node": ">=14.0.0"
			}
		},
		"node_modules/source-map-js": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
			"integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/svelte": {
			"version": "5.0.0-next.260",
			"resolved": "https://registry.npmjs.org/svelte/-/svelte-5.0.0-next.260.tgz",
			"integrity": "sha512-TGcvG71DUklf5P4UmJxOQiVxWYLPp4c6o+NUjmVMsAXKsCMXOTXw+QpnmEWw5D95Sj7SrmAGeIT+p/uvHAUZXg==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@ampproject/remapping": "^2.3.0",
				"@jridgewell/sourcemap-codec": "^1.5.0",
				"@types/estree": "^1.0.5",
				"acorn": "^8.12.1",
				"acorn-typescript": "^1.4.13",
				"aria-query": "^5.3.1",
				"axobject-query": "^4.1.0",
				"esm-env": "^1.0.0",
				"esrap": "^1.2.2",
				"is-reference": "^3.0.2",
				"locate-character": "^3.0.0",
				"magic-string": "^0.30.11",
				"zimmerframe": "^1.1.2"
			},
			"engines": {
				"node": ">=18"
			}
		},
		"node_modules/svelte-check": {
			"version": "4.0.4",
			"resolved": "https://registry.npmjs.org/svelte-check/-/svelte-check-4.0.4.tgz",
			"integrity": "sha512-AcHWIPuZb1mh/jKoIrww0ebBPpAvwWd1bfXCnwC2dx4OkydNMaiG//+Xnry91RJMHFH7CiE+6Y2p332DRIaOXQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"@jridgewell/trace-mapping": "^0.3.25",
				"chokidar": "^4.0.1",
				"fdir": "^6.2.0",
				"picocolors": "^1.0.0",
				"sade": "^1.7.4"
			},
			"bin": {
				"svelte-check": "bin/svelte-check"
			},
			"engines": {
				"node": ">= 18.0.0"
			},
			"peerDependencies": {
				"svelte": "^4.0.0 || ^5.0.0-next.0",
				"typescript": ">=5.0.0"
			}
		},
		"node_modules/tslib": {
			"version": "2.7.0",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.7.0.tgz",
			"integrity": "sha512-gLXCKdN1/j47AiHiOkJN69hJmcbGTHI0ImLmbYLHykhgeN0jVGola9yVjFgzCUklsZQMW55o+dW7IXv3RCXDzA==",
			"dev": true
		},
		"node_modules/typescript": {
			"version": "5.5.4",
			"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.5.4.tgz",
			"integrity": "sha512-Mtq29sKDAEYP7aljRgtPOpTvOfbwRWlS6dPRzwjdE+C0R4brX/GUyhHSecbHMFLNBLcJIPt9nl9yG5TZ1weH+Q==",
			"dev": true,
			"bin": {
				"tsc": "bin/tsc",
				"tsserver": "bin/tsserver"
			},
			"engines": {
				"node": ">=14.17"
			}
		},
		"node_modules/vite": {
			"version": "5.4.8",
			"resolved": "https://registry.npmjs.org/vite/-/vite-5.4.8.tgz",
			"integrity": "sha512-FqrItQ4DT1NC4zCUqMB4c4AZORMKIa0m8/URVCZ77OZ/QSNeJ54bU1vrFADbDsuwfIPcgknRkmqakQcgnL4GiQ==",
			"dev": true,
			"license": "MIT",
			"dependencies": {
				"esbuild": "^0.21.3",
				"postcss": "^8.4.43",
				"rollup": "^4.20.0"
			},
			"bin": {
				"vite": "bin/vite.js"
			},
			"engines": {
				"node": "^18.0.0 || >=20.0.0"
			},
			"funding": {
				"url": "https://github.com/vitejs/vite?sponsor=1"
			},
			"optionalDependencies": {
				"fsevents": "~2.3.3"
			},
			"peerDependencies": {
				"@types/node": "^18.0.0 || >=20.0.0",
				"less": "*",
				"lightningcss": "^1.21.0",
				"sass": "*",
				"sass-embedded": "*",
				"stylus": "*",
				"sugarss": "*",
				"terser": "^5.4.0"
			},
			"peerDependenciesMeta": {
				"@types/node": {
					"optional": true
				},
				"less": {
					"optional": true
				},
				"lightningcss": {
					"optional": true
				},
				"sass": {
					"optional": true
				},
				"sass-embedded": {
					"optional": true
				},
				"stylus": {
					"optional": true
				},
				"sugarss": {
					"optional": true
				},
				"terser": {
					"optional": true
				}
			}
		},
		"node_modules/vitefu": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.0.2.tgz",
			"integrity": "sha512-0/iAvbXyM3RiPPJ4lyD4w6Mjgtf4ejTK6TPvTNG3H32PLwuT0N/ZjJLiXug7ETE/LWtTeHw9WRv7uX/tIKYyKg==",
			"dev": true,
			"peerDependencies": {
				"vite": "^3.0.0 || ^4.0.0 || ^5.0.0"
			},
			"peerDependenciesMeta": {
				"vite": {
					"optional": true
				}
			}
		},
		"node_modules/zimmerframe": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/zimmerframe/-/zimmerframe-1.1.2.tgz",
			"integrity": "sha512-rAbqEGa8ovJy4pyBxZM70hg4pE6gDgaQ0Sl9M3enG3I0d6H4XSAM3GeNGLKnsBpuijUow064sf7ww1nutC5/3w==",
			"dev": true
		}
	}
}
`;export{t as default};