import type { PageLoad } from './$types';

import { dateToISO8601 } from '$lib/functions/iso8601';

export const prerender = true;

export const load: PageLoad = async () => {
	return {
		latestUpdate: dateToISO8601() // Since this page is prerendered it will use the date of the build
	};
};
