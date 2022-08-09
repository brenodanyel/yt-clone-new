export type Channel = {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    title: string,
    description: string,
    customUrl: string,
    publishedAt: string,
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
    },
    localized: {
      title: string,
      description: string,
    },
    country: string,
  },
  statistics: {
    viewCount: string,
    subscriberCount: string,
    hiddenSubscriberCount: false,
    videoCount: string,
  },
};
