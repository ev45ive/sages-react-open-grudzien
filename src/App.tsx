import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PlaylistsView from "./playlists/containers/PlaylistsView";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { logIn } from "./common/services/Auth";

function App() {
  return (
    <div className="App">
      {/* .container>.row>.col>h3.display-3 */}
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn float-end" onClick={logIn}>
              Login
            </button>
            <h3 className="display-3">MusicApp</h3>
            {/* <PlaylistsView /> */}
            <AlbumSearchView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
