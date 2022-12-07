import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PlaylistsView from "./playlists/containers/PlaylistsView";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { logIn } from "./common/services/Auth";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./common/components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">

            {/* Router v6 */}
            <Outlet />

            {/* Router v5 
            <Routes>
              <Route path="" element={<PlaylistsView />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
