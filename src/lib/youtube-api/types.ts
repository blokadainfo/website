export type Video = {
	id: string;
	title: string;
	type: VideoType;
	timestamp: Date | null;
	player: string | null;
};

export type VideoType = 'live' | 'upcoming' | 'uploaded';

export type LiveCheckResult = {
	latestUploaded: Video | null;
	latestUpcoming: Video | null;
	live: Video | null;
};
