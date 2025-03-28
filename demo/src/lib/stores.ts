import {computed, derived, get} from '@amadeus-it-group/tansu';
import {browser} from '$app/environment';
import {page} from '$app/stores';
import {createIntersection} from '@agnos-ui/svelte-bootstrap/services/intersection';

// Return how deep the current route is compared to base
export const routeLevel$ = computed(() => {
	const $page = get(page);
	if (!$page.route.id) {
		throw new Error('Page error');
	}
	return $page.route.id.split('/').length - 2 + Object.values($page.params).reduce((pV, cur) => pV + cur.split('/').length - 1, 0);
});

// Return the url relative path to root, ex './', '../' or '../..'
export const relativePathToRoot$ = computed(() => {
	const routeLevel = routeLevel$();
	return routeLevel ? '../'.repeat(routeLevel) : './';
});

export const pathToRoot$ = browser ? computed(() => new URL(relativePathToRoot$(), window.location.href).href) : relativePathToRoot$;

const baseCanonicalURL = 'https://www.agnosui.dev/latest/';
export const canonicalURL$ = computed(() => {
	const pageURL = get(page).url.href;
	const rootURL = new URL(relativePathToRoot$(), pageURL).href;
	const canonicalURL = pageURL.replace(rootURL, baseCanonicalURL);
	return canonicalURL;
});

export type Frameworks = 'angular' | 'react' | 'svelte';
export type ApiFrameworks = 'typescript' | Frameworks;
export type PackageType = 'headless' | 'bootstrap';

/**
 * Current selected framework
 */
export const selectedFramework$ = derived(
	page,
	(p, set) => {
		if (p.params.framework && p.params.framework !== 'typescript') {
			set(p.params.framework as Frameworks);
		}
	},
	'react' as Frameworks,
);
/**
 * Current non-typescript selected framework
 */
export const selectedApiFramework$ = derived(
	page,
	(p, set) => {
		if (p.params.framework) {
			set(p.params.framework as ApiFrameworks);
		}
	},
	'react' as ApiFrameworks,
);

/**
 * Current package type
 */
export const selectedPackageType$ = computed(() => {
	const p = get(page);
	if (p.params.type) {
		return p.params.type as PackageType;
	}
	if (p.url.pathname.match(/\/daisyUI\//)) {
		return 'headless';
	}
	if (p.url.pathname.match(/\/docs\/[^/]*\/components\//)) {
		return 'bootstrap';
	}
	return undefined;
});

const tabRegExp = /^\/docs\/\[framework\]\/(components|daisyUI)\/[^/]*\/([^/]*)/;
/**
 * Current selected tab
 */
export const selectedTabName$ = computed(() => {
	const match = tabRegExp.exec(get(page).route.id || '');
	return match?.[2];
});

export const intersectionApi = createIntersection();
