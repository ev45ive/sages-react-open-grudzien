import React, { useState } from "react";

import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistList from "../components/PlaylistList";
import { Playlist } from "../../common/model/Playlist";

type Props = {};

const PlaylistsView = (props: Props) => {
  const selected: Playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Awesome Playlist",
  };
  const [mode, setMode] = useState<"details" | "editor">("details");
  const showDetails = () => {
    setMode("details");
  };
  const showEditor = () => {
    setMode("editor");
  };

  return (
    <div>
      {/* .row>.col*2 */}
      <div className="row">
        <div className="col">
          <PlaylistList />
        </div>
        <div className="col">
          {mode === "editor" && (
            <>
              <PlaylistEditor />
              <button className="btn btn-danger" onClick={showDetails}>Details</button>
            </>
          )}
          {mode === "details" && (
            <>
              <PlaylistDetails playlist={selected} />
              <button className="btn btn-primary" onClick={showEditor}>Editor</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
