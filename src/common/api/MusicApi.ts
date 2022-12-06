import axios from "axios";
import { mockAlbums } from "../mocks/mockAlbums";

// export const fetchSearchResultsAPI = (query: string) => {
//   console.log("Searching..." + query);

//   return Promise.resolve(mockAlbums.filter((a) => a.name.includes(query)));
// };

export const fetchSearchResultsAPI = async (query: string) => {
  console.log("Searching..." + query);

  const { data } = await axios.get("https://api.spotify.com/v1/search", {
    params: {
      type: "album",
      q: query,
    },
    headers: {},
  });

  return data;
};
