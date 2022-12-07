import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import {
  fetchAlbumById,
  fetchPlaylistById,
  fetchSearchResultsAPI,
} from "../api/MusicApi";
import { Album } from "../model/Album";

export function useFetch<T, P>(
  params: P,
  fetcher: (query: P, options?: { signal?: AbortSignal }) => Promise<T>
) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    const signal = ctrl.signal;

    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    fetcher(params, { signal })
      .then((data) => setData(data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
      })
      .finally(() => setIsLoading(false));

    return () => ctrl.abort();
  }, [params]);

  return { data, error, isLoading };
}

export function useFetchAlbumSearchResults(query: string) {
  return useFetch(query, fetchSearchResultsAPI);
}

export function useFetchAlbum(id: string) {
  return useFetch(id, fetchAlbumById);
}

export function useFetchPlaylist(id: string) {
  return useFetch(id, fetchPlaylistById);
}

/// =====================

// export function useFetchAlbumSearchResults(query: string) {
//   const [data, setData] = useState<Album[]>([]);
//   const [error, setError] = useState<Error>();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     setData([]);
//     setError(undefined);

//     fetchSearchResultsAPI(query)
//       .then((data) => setData(data))
//       .catch((error) => setError(error))
//       .finally(() => setIsLoading(false));
//   }, [query]);

//   return { data, error, isLoading };
// }
