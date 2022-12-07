import axios from "axios";
import { isSpotifyErrorResponse } from "../model/Album";
import { getToken, logIn } from "../services/Auth";

export const initAPI = () => {
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
};
