import axios, { AxiosRequestConfig } from 'axios';
import recommendedVideosMock from '../mocks/recommendedVideos';
import channelMock from '../mocks/channel';
import searchMock from '../mocks/search';
import videoMock from '../mocks/video';

const { VITE_API_KEY } = import.meta.env;

const axiosInstance = axios.create(
  {
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
  },
);

const tryToFetch = async (config: AxiosRequestConfig) => {
  const { data } = await axiosInstance(config);
  return data;
};

export const fetchRecommendedVideos = async () => {
  if (!VITE_API_KEY) return recommendedVideosMock;

  const result = await tryToFetch(
    {
      url: '/videos',
      params: new URLSearchParams([
        ['chart', 'mostPopular'],
        ['regionCode', 'BR'],
        ['maxResults', '30'],
        ['key', VITE_API_KEY],
      ]),
    },
  );

  if (!result) {
    return [];
  }

  return result.items.map((item: any) => item.id);
};

export const fetchChannel = async (id: string) => {
  if (!VITE_API_KEY) return channelMock;

  const result = await tryToFetch(
    {
      url: '/channels',
      params: new URLSearchParams([
        ['part', 'snippet'],
        ['part', 'statistics'],
        ['part', 'brandingSettings'],
        ['id', id],
        ['key', VITE_API_KEY],
      ]),
    },
  );

  return result.items[0];
};

export const fetchVideo = async (id: string) => {
  if (!VITE_API_KEY) return videoMock;

  const result = await tryToFetch({
    url: '/videos',
    params: new URLSearchParams([
      ['part', 'snippet'],
      ['part', 'statistics'],
      ['part', 'contentDetails'],
      ['id', id],
      ['key', VITE_API_KEY],
    ]),
  });

  return result.items[0];
};

export const fetchSearch = async (q: string) => {
  if (!VITE_API_KEY) return searchMock;

  const result = await tryToFetch(
    {
      url: '/search',
      params: new URLSearchParams([
        ['q', q],
        ['maxResults', 30],
        ['key', VITE_API_KEY],
      ]),
    },
  );

  return result.items
    .filter((item: any) => item.id.videoId)
    .map((item: any) => item.id.videoId);
};
