import axios, { AxiosError } from "axios";
import { mockAlbums } from "../mocks/mockAlbums";
import { Album, AlbumResponse, AlbumSearchResponse } from "../model/Album";
import { Playlist } from "../model/Playlist";

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

export const fetchPlaylistById = async (id: string) => {
  const { data } = await axios.get<Playlist>("playlists/" + id, {});
  return data;
};
