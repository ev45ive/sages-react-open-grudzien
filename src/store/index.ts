import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counter";
import { playlistsSlice } from "./reducers/playlists";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [playlistsSlice.name]: playlistsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
