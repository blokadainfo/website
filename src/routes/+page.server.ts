import { liveCheck } from '$lib/youtube-api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await liveCheck();
};
