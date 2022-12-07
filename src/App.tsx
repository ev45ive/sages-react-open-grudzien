import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PlaylistsView from "./playlists/containers/PlaylistsView";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { logIn } from "./common/services/Auth";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn float-end" onClick={logIn}>
              Login
            </button>
            <h3 className="display-3">MusicApp</h3>
            
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
