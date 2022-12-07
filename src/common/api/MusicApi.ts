import axios, { AxiosRequestConfig } from "axios";
import { AlbumResponse, AlbumSearchResponse } from "../model/Album";
import { Playlist } from "../model/Playlist";
import { User } from "../model/User";

// ==============

export const fetchSearchResultsAPI = async (
  query: string,
  config?: AxiosRequestConfig<any>
) => {
  const { data } = await axios.get<AlbumSearchResponse>("search", {
    params: {
      type: "album",
      q: query,
    },
    // signal: config?.signal,
    ...config,
  });

  return data.albums.items;
};

export const fetchAlbumById = async (
  id?: string,
  config?: AxiosRequestConfig<any>
) => {
  if (!id) throw new Error("Missing ID");
  const { data } = await axios.get<AlbumResponse>("albums/" + id, {
    ...config,
  });
  return data;
};

export const fetchPlaylistById = async (
  id: string,
  config?: AxiosRequestConfig<any>
) => {
  const { data } = await axios.get<Playlist>("playlists/" + id, { ...config });
  return data;
};

export const fetchCurrentUser = async (config?: AxiosRequestConfig<any>) => {
  const { data } = await axios.get<User>("me", { ...config });
  return data;
};
