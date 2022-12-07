import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initAuth } from "./common/services/Auth";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  createMemoryRouter,
  NavLink,
  Link,
  redirect,
} from "react-router-dom";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import PlaylistsView from "./playlists/containers/PlaylistsView";
import NavBar from "./common/components/NavBar";
import { initAPI } from "./common/api/initAPI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AlbumDetailsView from "./music/containers/AlbumDetailsView";
import UserContextProvider from "./common/context/UserContext";
import CounterReducer from "./playlists/containers/CounterReducer";
import { store } from "./store";
import { Provider } from "react-redux";
import ReduxCounter from "./playlists/containers/ReduxCounter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initAuth();
initAPI();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "",
        index: true,
        loader() {
          throw redirect("/search");
        },
      },
      {
        path: "search",
        element: <AlbumSearchView />,
      },
      {
        path: "albums/:albumId",
        element: <AlbumDetailsView />,
      },
      {
        path: "playlists",
        element: <PlaylistsView />,
      },
      {
        path: "counter",
        // element: <CounterReducer />,
        element: <ReduxCounter />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        // if(error instanceof AxiosError) false
        // if(failureCount > 3) return false
        return false;
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

function ErrorComponent() {
  return (
    <div>
      <NavBar />
      <div className="container text-center my-5">
        <h1 className="display-1">404</h1>
      </div>
    </div>
  );
}
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
