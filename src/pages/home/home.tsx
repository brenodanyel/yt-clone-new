import React from 'react';
import { fetchRecommendedVideosMock as fetchRecommendedVideos } from '../../services/api';
// import { fetchRecommendedVideos } from '../../services/api';
import { VideoCard } from '../../components/VideoCard';
import { Video } from '../../types/video';

export function Home() {
  const [recommendedVideos, setRecommendedVideos] = React.useState<Video[]>([]);

  const getVideos = React.useCallback(async () => {
    const result = await fetchRecommendedVideos();
    setRecommendedVideos(result as unknown as Video[]);
  }, []);

  React.useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <h1 className="text-xl">Videos Recomendados:</h1>
      <div className="flex flex-wrap gap-3 p-3 justify-evenly">
        {
          recommendedVideos.map((video) => (
            <VideoCard
              key={video.id}
              horizontal={false}
              video={
                {
                  id: video.id,
                  thumbnail: video.snippet.thumbnails.high.url,
                  title: video.snippet.title,
                  duration: video.contentDetails.duration,
                  statistics: {
                    views: video.statistics.viewCount,
                  },
                  channel: {
                    id: video.snippet.channelId,
                  },
                }
              }
            />
          ))
        }
      </div>
    </div>
  );
}
