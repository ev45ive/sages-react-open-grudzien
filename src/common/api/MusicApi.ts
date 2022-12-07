import axios from "axios";
import { mockAlbums } from "../mocks/mockAlbums";
import { Album, AlbumSearchResponse } from "../model/Album";
import { getToken } from "../services/Auth";

// export const fetchSearchResultsAPI = (query: string): Promise<Album[]> => {
//   console.log("Searching..." + query);

//   return Promise.resolve(mockAlbums.filter((a) => a.name.includes(query)));
// };

export const fetchSearchResultsAPI = async (query: string) => {
  try {
    const { data } = await axios.get<AlbumSearchResponse>(
      "https://api.spotify.com/v1/search",
      {
        params: {
          type: "album",
          q: query,
        },
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    );

    return data.albums.items;
  } catch (error: any) {
    // return mockAlbums
    throw new Error(error.response.data.error.message);
  }
};
