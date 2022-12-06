import React, { useState } from "react";

import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistList from "../components/PlaylistList";
import { Playlist } from "../../common/model/Playlist";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");
  const showEditor = () => setMode("editor");
  const showDetails = () => setMode("details");
  const showCreator = () => setMode("creator");

  const [playlists, setPlaylists] = useState(mockPlaylists);

  const createPlaylist = (draft: Playlist) => {};

  const savePlaylist = (draft: Playlist) => {
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
    selectPlaylistById(draft.id);
    showDetails();
  };

  const [selectedId, setSelectedId] = useState("234");
  // const [selected, setSelected] = useState<Playlist | undefined>(playlists[0]);

  const [selected, setSelected] = useState<Playlist>(/* undefined */);

  const selectPlaylistById = (id: Playlist["id"]): void => {
    setSelectedId(id);

    setSelected(playlists.find((p) => p.id == id));
  };

  return (
    <div>
      {/* .row>.col*2 */}
      <div className="row">
        <div className="col">
          <PlaylistList
            playlists={playlists}
            selectedId={selected?.id}
            onSelect={selectPlaylistById}
          />
          <button className="w-100 mt-3 btn btn-primary" onClick={showCreator}>
            New Playlist
          </button>
        </div>
        <div className="col">
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onSave={savePlaylist}
              onCancel={showDetails}
            />
          )}
          {mode === "creator" && (
            <PlaylistEditor onSave={createPlaylist} onCancel={showDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
