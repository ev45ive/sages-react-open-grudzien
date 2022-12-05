import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PlaylistsView from "./playlists/containers/PlaylistsView";

function App() {
  return (
    <div className="App">
      {/* .container>.row>.col>h3.display-3 */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3">MusicApp</h3>
            <PlaylistsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
