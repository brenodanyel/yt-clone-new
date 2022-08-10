import React from 'react';
import { Channel } from '../types/channel';
import { fetchChannelByUsername } from '../services/api';

export function useChannel(channelName: string) {
  const [channel, setChannel] = React.useState<Channel | null>(null);

  const getChannel = React.useCallback(async () => {
    if (channelName) {
      try {
        const result = await fetchChannelByUsername(channelName);
        setChannel(result);
      } catch (e) {
        console.log(e);
      }
    }
  }, [channelName]);

  React.useEffect(() => {
    getChannel();
  }, [getChannel]);

  return {
    channel,
  };
}
