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
      default: {
        url: string,
        width: number,
        height: number,
      },
      medium: {
        url: string,
        width: number,
        height: number,
      },
      high: {
        url: string,
        width: number,
        height: number,
      },
      standard: {
        url: string,
        width: number,
        height: number,
      },
      maxres: {
        url: string,
        width: number,
        height: number,
      },
    },
    channelTitle: string,
    tags: [
      string,
      string,
      string,
      string,
      string,
    ],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    },
  },
  contentDetails: {
    duration: string,
    dimension: string,
    definition: string,
    caption: string,
    licensedContent: boolean,
    contentRating: {},
    projection: string;
  };
  statistics: {
    viewCount: string,
    likeCount: string,
    favoriteCount: string,
  },
};
