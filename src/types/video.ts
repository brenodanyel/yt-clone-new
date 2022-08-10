import { thumbnail } from './thumbnail';

export type Video = {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: thumbnail;
      medium: thumbnail;
      high: thumbnail;
      standard: thumbnail;
      maxres: thumbnail;
    };
  },
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string,
  },
  contentDetails: {
    duration: string,
    dimension: string,
    definition: string,
    caption: string,
    licensedContent: boolean,
    contentRating: {},
    projection: string;
  },
  defaultAudioLanguage: string,
  statistics: {
    viewCount: string,
    likeCount: string,
    favoriteCount: string,
    commentCount: string;
  };
};
