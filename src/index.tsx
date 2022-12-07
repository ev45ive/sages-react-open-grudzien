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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initAuth();
initAPI();

// const router = createHashRouter([
// const router = createMemoryRouter([
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
        path: "playlists",
        element: <PlaylistsView />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
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
