import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { Root } from 'mdast';

const MIN_SECONDS = 1;

const clampSeconds = (totalSeconds = MIN_SECONDS): number =>
  Math.max(MIN_SECONDS, Math.ceil(totalSeconds));

export const formatReadingTime = (totalSeconds = MIN_SECONDS): string => {
  const seconds = clampSeconds(totalSeconds);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  if (minutes === 0) return `${remainderSeconds} s čitanja`;
  return `${minutes} min ${String(remainderSeconds).padStart(2, '0')} s čitanja`;
};

export const remarkReadingTime = () => {
  return (
    tree: Root,
    { data }: { data: { astro?: { frontmatter?: Record<string, unknown> } } }
  ) => {
    const textOnPage = toString(tree);
    const { time } = readingTime(textOnPage);

    const astroData = data.astro || {};
    const frontmatter = astroData.frontmatter || {};
    frontmatter.readingTimeSeconds = clampSeconds(time / 1000);

    data.astro = astroData;
    data.astro.frontmatter = frontmatter;
  };
};
