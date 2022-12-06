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

  const [playlists, setPlaylists] = useState<Playlist[]>(mockPlaylists);

  const [selectedId, setSelectedId] = useState<Playlist["id"]>();
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id: Playlist["id"]): void => {
    setSelectedId(id);
    // setSelected(playlists.find((p) => p.id == id)); // Prawa - details
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    setPlaylists((playlists) => [...playlists, draft]);
    setSelectedId(draft.id);
    // setSelected(draft);
    showDetails();
  };

  const removePlaylist = (id: Playlist["id"]) => {
    setPlaylists((playlists) => playlists.filter((p) => p.id !== id));
    if (selected?.id === id) {
      setSelectedId(undefined);
      // setSelected(undefined);
    }
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists((playlists) =>
      playlists.map((p) => (p.id === draft.id ? draft : p))
    );
    setSelectedId(draft.id);
    // setSelected(draft);
    showDetails();
  };

  // Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  setSelected(playlists.find((p) => p.id == selectedId));

  console.log("render ");
  return (
    <div>
      {/* .row>.col*2 */}
      <div className="row">
        <div className="col">
          <PlaylistList
            onDelete={removePlaylist}
            playlists={playlists}
            selectedId={selectedId}
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
