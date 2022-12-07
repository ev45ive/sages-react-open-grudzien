import { useEffect, useState } from "react";
import { fetchSearchResultsAPI } from "../api/MusicApi";
import { Album } from "../model/Album";

export function useFetchAlbumSearchResults(query: string) {
  const [results, setResults] = useState<Album[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setResults([]);
    setError(undefined);

    fetchSearchResultsAPI(query)
      .then((data) => setResults(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [query]);

  return { results, error, isLoading };
}
