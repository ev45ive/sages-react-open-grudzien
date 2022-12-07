import { useEffect, useState } from "react";
import { fetchSearchResultsAPI } from "../api/MusicApi";
import { Album } from "../model/Album";

export function useFetchAlbumSearchResults(query: string) {
  const [data, setData] = useState<Album[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    setError(undefined);

    fetchSearchResultsAPI(query)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [query]);

  return { data, error, isLoading };
}
