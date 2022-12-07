import { createSlice } from "@reduxjs/toolkit";
import {
  PayloadAction,
  createAsyncThunk,
  AsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import { Playlist } from "../../common/model/Playlist";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";
import { RootState } from "..";

export interface playlistsState {
  items: Playlist[];
  selectedId?: Playlist["id"];
  selected?: Playlist;
  loading: boolean;
}

const initialState: playlistsState = {
  items: [],
  loading: false,
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    // loadPlaylists: (state, action: PayloadAction<{ data: Playlist[] }>) => {
    //   state.items = action.payload.data;
    // },
  },
  extraReducers(builder) {
    builder.addCase(playlistsLoad.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(playlistLoadById.fulfilled, (state, action) => {
      state.selected = action.payload;
    });
    builder.addMatcher(isPendingAction, (state, action) => {
      state.loading = true;
    });
  },
});

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;
function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith("/pending");
}

// Action creators are generated for each case reducer function
export const {} = playlistsSlice.actions;

export default playlistsSlice.reducer;

export const playlistsLoad = createAsyncThunk<Playlist[]>(
  "playlists/load", // '/pending'
  async (name, { rejectWithValue }) => {
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // const data = await response.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPlaylists);
      }, 2000);
    });
  }
);

export const playlistLoadById = createAsyncThunk<
  Playlist | undefined,
  Playlist["id"]
>("playlists/load_by_id", async (id, { rejectWithValue }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPlaylists.find((p) => p.id == id));
    }, 2000);
  });
});

export const playlistsSelector = (state:RootState) => state.playlists.items
export const playlistSelectedSelector = (state:RootState) => state.playlists.selected