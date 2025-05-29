import { google, youtube_v3 } from 'googleapis';
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } from '$env/static/private';
import { XMLParser } from 'fast-xml-parser';
import type { LiveCheckResult, Video, VideoType } from './types';

const API_KEY = YOUTUBE_API_KEY;
const CHANNEL_ID = YOUTUBE_CHANNEL_ID || '';
const youtube = google.youtube({ version: 'v3', auth: API_KEY });

export const liveCheck = async (): Promise<LiveCheckResult> => {
	const videoIds = await fetchVideoIds(CHANNEL_ID);

	const result = await youtube.videos.list({
		part: ['snippet', 'liveStreamingDetails', 'status', 'player'],
		id: videoIds
	});
	if (!result.data.items || result.data.items.length === 0) {
		return { latestUploaded: null, latestUpcoming: null, live: null };
	}

	const videos: Video[] = result.data.items.map((video) => ({
		id: video.id ?? '',
		title: video.snippet?.title ?? 'Untitled',
		type: getType(video),
		timestamp: getTimestamp(video),
		player: video.player?.embedHtml ?? null
	}));

	const latestUploaded =
		videos
			.filter((video) => video.type === 'uploaded')
			.sort((a, b) => (b.timestamp?.getTime() || 0) - (a.timestamp?.getTime() || 0))[0] || null;

	const latestUpcoming =
		videos
			.filter((video) => video.type === 'upcoming')
			.sort((a, b) => (a.timestamp?.getTime() || 0) - (b.timestamp?.getTime() || 0))[0] || null;

	const live = videos.find((video) => video.type == 'live') || null;

	return { latestUploaded, latestUpcoming, live };
};

const fetchVideoIds = async (channelId: string): Promise<string[]> => {
	if (!channelId) throw new Error('Channel ID is required');
	const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch RSS feed: ${res.status}`);

	const xml = await res.text();
	const parser = new XMLParser({ ignoreAttributes: false });
	const parsed: { feed: { entry?: Array<{ published: string; 'yt:videoId': string }> } } =
		parser.parse(xml);

	const entries = parsed.feed.entry ?? [];

	const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

	return entries
		.map((entry) => {
			const published = new Date(entry.published);
			const videoId = entry['yt:videoId'];
			if (!videoId || isNaN(published.getTime())) return null;
			return { videoId, published };
		})
		.filter(
			(item): item is { videoId: string; published: Date } =>
				item !== null && item.published >= sevenDaysAgo
		)
		.map((item) => item.videoId);
};

const getTimestamp = (video: youtube_v3.Schema$Video): Date | null => {
	if (video.liveStreamingDetails?.actualStartTime) {
		return new Date(video.liveStreamingDetails.actualStartTime);
	}
	if (video.liveStreamingDetails?.scheduledStartTime) {
		return new Date(video.liveStreamingDetails.scheduledStartTime);
	}
	return new Date(video.snippet?.publishedAt || 0);
};

const getType = (video: youtube_v3.Schema$Video): VideoType => {
	if (video.snippet?.liveBroadcastContent === 'live') {
		return 'live';
	}
	if (video.snippet?.liveBroadcastContent === 'upcoming') {
		return 'upcoming';
	}
	return 'uploaded';
};
