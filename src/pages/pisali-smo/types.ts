export type PostMDX = {
  file: string;
  url: string;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    gender: 'F' | 'M';
    image: string;
    imglabel: string;
    imgsource: string;
    readingTimeSeconds?: number;
  };
};
