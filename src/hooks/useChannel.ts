import React from 'react';
import { Channel } from '../types/channel';
import { fetchChannel } from '../services/api';

export function useChannel(channelId: string) {
  const [channel, setChannel] = React.useState<Channel | null>(null);

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

  React.useEffect(() => {
    getChannel();
  }, [getChannel]);

  return {
    channel,
  };
}
