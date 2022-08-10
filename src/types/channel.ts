import { thumbnail } from './thumbnail';

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
      default: thumbnail,
      medium: thumbnail,
      high: thumbnail;
    },
    localized: {
      title: string,
      description: string;
    },
    country: string;
  },
  statistics: {
    viewCount: string,
    subscriberCount: string,
    hiddenSubscriberCount: boolean,
    videoCount: string;
  };
  brandingSettings: {
    channel: {
      title: string,
      description: string,
      keywords: string,
      unsubscribedTrailer: string,
      country: string,
    },
    image: {
      bannerExternalUrl: string,
    },
  },
};
