import { mockAlbums } from "../mocks/mockAlbums";

export const fetchSearchResultsAPI = (query: string) => {
  console.log("Searching..." + query);

  return Promise.resolve(mockAlbums.filter((a) => a.name.includes(query)));
};
