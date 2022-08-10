import React from 'react';
import { fetchRecommendedVideos } from '../../services/api';
import { VideoCardVertical } from '../../components/VideoCardVertical';

export function Home() {
  const [recommendedVideos, setRecommendedVideos] = React.useState<string[]>([]);

  const getVideos = React.useCallback(async () => {
    const result = await fetchRecommendedVideos();
    setRecommendedVideos(result);
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
            <VideoCardVertical
              key={video}
              videoId={video}
            />
          ))
        }
      </div>
    </div>
  );
}
