import axios, { AxiosError } from "axios";
import { mockAlbums } from "../mocks/mockAlbums";
import { Album, AlbumResponse, AlbumSearchResponse, isSpotifyErrorResponse } from "../model/Album";
import { getToken, logIn } from "../services/Auth";

axios.defaults.baseURL = "https://api.spotify.com/v1/";
axios.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      Authorization: "Bearer " + getToken(),
      ...config.headers,
    },
  };
});
axios.interceptors.response.use(
  (ok) => ok,
  (error: unknown) => {
    if (!axios.isAxiosError(error)) {
      throw new Error("Unexpected error");
    }

    if (!error.response?.data || error.response.status == 0) {
      throw new Error("Cannot conect to server");
    }

    if (error.response.status === 401) {
      logIn();
      throw new Error("Not Logged In");
    }

    if (!isSpotifyErrorResponse(error.response.data)) {
      throw new Error("Unexpected error");
    }

    throw new Error(error.response.data.error.message);
  }
);


// ==============

export const fetchSearchResultsAPI = async (query: string) => {
  const { data } = await axios.get<AlbumSearchResponse>("search", {
    params: {
      type: "album",
      q: query,
    },
  });

  return data.albums.items;
};

export const fetchAlbumById = async (id: string) => {
  const { data } = await axios.get<AlbumResponse>("albums/" + id, {});
  return data;
};

// export const fetchSearchResultsAPI = (query: string): Promise<Album[]> => {
//   console.log("Searching..." + query);

//   return Promise.resolve(mockAlbums.filter((a) => a.name.includes(query)));
// };

// export const fetchSearchResultsAPI = async (query: string) => {
//   try {
//     const { data } = await axios.get<AlbumSearchResponse>(
//       "https://api.spotify.com/v1/search",
//       {
//         params: {
//           type: "album",
//           q: query,
//         },
//         headers: {
//           Authorization: "Bearer " + getToken(),
//         },
//       }
//     );

//     return data.albums.items;
//   } catch (error: any) {
//     // return mockAlbums
//     throw new Error(error.response.data.error.message);
//   }
// };
