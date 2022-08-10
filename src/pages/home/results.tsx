import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { fetchSearch } from '../../services/api';
import { VideoCardHorizontal } from '../../components/VideoCardHorizontal';

export function Results() {
  const query = useQuery();
  const [searchResult, setSearchResult] = React.useState<string[]>([]);

  const search = query.get('search_query');

  const getVideos = React.useCallback(async () => {
    try {
      const result = await fetchSearch(String(search));
      setSearchResult(result);
    } catch (e) {
      console.log(e);
    }
  }, [search]);

  React.useEffect(() => {
    getVideos();
  }, [getVideos]);

  return (
    <div>
      <h1 className="text-xl">Resultado:</h1>
      <div>
        {
          searchResult.map((videoId) => (
            <VideoCardHorizontal
              key={videoId}
              videoId={videoId}
            />
          ))
        }
      </div>
    </div>
  );
}
