import axios, { AxiosRequestConfig } from 'axios';
import recommendedVideosMock from '../mocks/recommendedVideos';
import channelMock from '../mocks/channel';

const { VITE_API_KEY } = import.meta.env;

const axiosInstance = axios.create(
  {
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
  },
);

const tryToFetch = async (config: AxiosRequestConfig) => {
  try {
    const { data } = await axiosInstance(
      {
        ...config,
        url: `${config.url}&key=${VITE_API_KEY}`,
      },
    );
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchRecommendedVideos = async () => {
  const result = await tryToFetch(
    {
      url: 'videos?part=snippet&part=statistics&part=contentDetails&chart=mostPopular&regionCode=BR&maxResults=30',
    },
  );

  return result.items;
};

export const fetchChannel = async (id: string) => {
  const result = await tryToFetch(
    {
      url: `channels?part=snippet&part=statistics&id=${id}`,
    },
  );

  return result.items[0];
};

export const fetchRecommendedVideosMock = async () => recommendedVideosMock;
export const fetchChannelMock = async (_id: string) => channelMock;
