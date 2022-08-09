import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { fetchChannelMock as fetchChannel } from '../services/api';
// import { fetchChannel } from '../services/api';
import { convertMS } from '../services/convertTime';
import { Channel } from '../types/channel';

type VideoCardProps = {
  horizontal: boolean,
  video: {
    id: string,
    thumbnail: string,
    title: string,
    statistics: {
      views: string,
    },
    duration: string,
    channel: {
      id: string,
    };
  },
};

export function VideoCard(props: VideoCardProps) {
  const {
    horizontal,
    video,
  } = props;

  const [channelInfo, setChannelInfo] = React.useState<Channel | null>(null);

  const getChannel = React.useCallback(async () => {
    const result = await fetchChannel(video.channel.id);
    setChannelInfo(result as Channel);
  }, [video.id]);

  React.useEffect(() => {
    getChannel();
  }, []);

  return (
    <div
      className={
        [
          'flex gap-2 w-72',
          'scale-95 hover:scale-100 transition-all',
          horizontal
            ? 'flex-row'
            : 'flex-col',
        ].join(' ')
      }
    >
      <Link className="relative" to={`/watch?v=${video.id}`}>
        <img src={video.thumbnail} alt="" className="aspect-video" />
        <span className="absolute bottom-1 right-1 bg-color-1 p-1 opacity-90 rounded-md">
          {convertMS(moment.duration(video.duration).asSeconds())}
        </span>
      </Link>
      <div className="flex gap-2 overflow-hidden">
        {
          channelInfo && (
            <Link to={`/channel/${channelInfo.snippet.customUrl}`} className="w-max">
              <img
                src={channelInfo.snippet.thumbnails.high.url}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </Link>
          )
        }
        <div className="flex flex-col flex-grow">
          <Link className="relative" to={`/watch?v=${video.id}`}>
            <span className="text-sm">{video.title}</span>
          </Link>
          {
            channelInfo && (
              <Link to={`/channel/${channelInfo.snippet.customUrl}`} className="w-max">
                <span className="text-sm opacity-75 hover:opacity-100 transition-all">{channelInfo.snippet.title}</span>
              </Link>
            )
          }
          <span className="text-xs opacity-75">
            {Number(video.statistics.views).toLocaleString('pt-BR')}
            {' '}
            visualizações
          </span>
        </div>
      </div>
    </div>
  );
}
