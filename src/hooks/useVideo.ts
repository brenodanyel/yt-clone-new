import React from 'react';
import { Channel } from '../types/channel';
import { Video } from '../types/video';
import { fetchChannel, fetchVideo } from '../services/api';

export function useVideo(videoId: string) {
  const [video, setVideo] = React.useState<Video | null>(null);
  const [channel, setChannel] = React.useState<Channel | null>(null);

  const channelId = video?.snippet?.channelId;

  const getChannel = React.useCallback(async () => {
    if (channelId) {
      try {
        const result = await fetchChannel(channelId);
        setChannel(result);
      } catch (e) {
        console.log(e);
      }
    }
  }, [channelId]);

  const getVideo = React.useCallback(async () => {
    if (videoId) {
      try {
        const result = await fetchVideo(videoId);
        setVideo(result);
      } catch (e) {
        console.log(e);
      }
    }
  }, [videoId]);

  React.useEffect(() => {
    getChannel();
  }, [getChannel]);

  React.useEffect(() => {
    getVideo();
  }, [getVideo]);

  return {
    video,
    channel,
  };
}
