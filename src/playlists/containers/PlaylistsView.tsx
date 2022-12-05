import React, { useState } from "react";

import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistList from "../components/PlaylistList";
import { Playlist } from "../../common/model/Playlist";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor">("details");
  const showEditor = () => {
    setMode("editor");
  };
  const showDetails = () => {
    setMode("details");
  };

  const playlists = mockPlaylists;
  const [selectedId, setSelectedId] = useState("234");
  const [selected, setSelected] = useState(playlists[0]);

  const selectPlaylistById = (id: Playlist["id"]) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id == id)!);
  };

  return (
    <div>
      {/* .row>.col*2 */}
      <div className="row">
        <div className="col">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />
        </div>
        <div className="col">
          {mode === "editor" && <PlaylistEditor onCancel={showDetails} />}
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
