import React from 'react';
import { useParams } from 'react-router-dom';
import { useChannel } from '../../hooks/useChannel';

export function Channel() {
  const { channelId } = useParams();

  const { channel } = useChannel(channelId as string);

  if (!channel) {
    return (
      <span>Loading...</span>
    );
  }

  return (
    <div>
      <img
        src={channel.brandingSettings.image.bannerExternalUrl}
        alt=""
        className="w-full h-56 object-cover"
      />
      <div className="w-full h-40 bg-color-2 px-40 flex items-center gap-2">
        <img
          src={channel.snippet.thumbnails.high.url}
          alt=""
          className="w-20 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-2xl">
            {channel.snippet.title}
          </span>
          <span className="text-sm opacity-75">
            {Number(channel.statistics.subscriberCount).toLocaleString('pt-BR')}
            {' '}
            inscritos
          </span>
        </div>
      </div>
      {/* {
          recommendedVideos.map((video) => (
            <VideoCardVertical
              key={video}
              videoId={video}
            />
          ))
        } */}
    </div>
  );
}
