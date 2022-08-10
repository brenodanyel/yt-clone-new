import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { useVideo } from '../../hooks/useVideo';
import { useQuery } from '../../hooks/useQuery';

export function Watch() {
  const query = useQuery();
  const videoId = String(query.get('v'));

  const { video, channel } = useVideo(videoId);

  if (!video || !channel) {
    return (
      <span>Loading...</span>
    );
  }

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="flex flex-col w-full md:w-[640px] lg:w-[960px] gap-2">
        <div>
          <YouTube
            videoId={videoId}
            opts={opts}
            iframeClassName="w-full h-[300px] md:h-[400px] lg:h-[560px]"
          />
          <div className="flex flex-col">
            <span className="text-xl">{video.snippet.title}</span>
            <span className="text-md">
              {Number(video.statistics.viewCount).toLocaleString('pt-BR')}
              {' '}
              visualizações
            </span>
            <span className="opacity-75">{video.snippet.description}</span>
          </div>
        </div>

        <div className="border border-color-5 border-opacity-50 p-2 flex justify-between items-center rounded-md flex-wrap">
          <Link
            to={`/c/${channel.snippet.customUrl}`}
            className="flex gap-2"
          >
            <img
              src={channel.snippet.thumbnails.high.url}
              alt=""
              className="w-12 rounded-full"
            />
            <div className="flex flex-col gap">
              <span>{channel.snippet.title}</span>
              <span className="opacity-75">
                {Number(channel.statistics.subscriberCount).toLocaleString('pt-BR')}
                {' '}
                inscritos
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="bg-[#f00] px-3 py-2 rounded-md"
          >
            Inscrever-se
          </button>
        </div>
      </div>

    </div>
  );
}
