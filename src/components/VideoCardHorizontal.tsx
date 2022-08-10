import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { convertMS } from '../services/convertTime';
import { useVideo } from '../hooks/useVideo';

type VideoCardHorizontalProps = {
  videoId: string,
};

export function VideoCardHorizontal({ videoId }: VideoCardHorizontalProps) {
  const { video, channel } = useVideo(videoId);

  if (!video || !channel) {
    return (
      <span>Loading...</span>
    );
  }

  return (
    <div
      className={
        [
          'flex gap-2 flex-row border border-color-4',
          'scale-95 hover:scale-100 transition-all rounded-lg overflow-hidden',
        ].join(' ')
      }
    >
      <Link className="relative" to={`/watch?v=${video.id}`}>
        <img src={video.snippet.thumbnails.high.url} alt="" className="w-full h-56 bg-cover" />
        <span className="absolute bottom-1 right-1 bg-color-1 p-1 opacity-90 rounded-md">
          {convertMS(moment.duration(video.contentDetails.duration).asSeconds())}
        </span>
      </Link>

      <div className="flex gap-2 p-2">
        <img
          src={channel.snippet.thumbnails.default.url}
          alt=""
          className="w-8 h-max rounded-full"
        />

        <div className="flex flex-col flex-shrink">
          <Link className="relative" to={`/watch?v=${video.id}`}>
            <span className="text-sm">{video.snippet.title.repeat(1)}</span>
          </Link>
          <Link to={`/c/${channel.snippet.customUrl}`} className="w-max">
            <span className="text-sm opacity-75 hover:opacity-100 transition-all">{channel.snippet.title}</span>
          </Link>
          <span className="text-xs opacity-75">
            {Number(video.statistics.viewCount).toLocaleString('pt-BR')}
            {' '}
            visualizações
          </span>
        </div>
      </div>
    </div>
  );
}
