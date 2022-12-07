import React, { useEffect, useRef, useState } from "react";

import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistList from "../components/PlaylistList";
import { Playlist } from "../../common/model/Playlist";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";
import { useSearchParams } from "react-router-dom";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [params, setParams] = useSearchParams();

  const selectedId = params.get("id");
  const mode = params.get("mode") || "details";

  const showEditor = () => setParams({ id: selectedId!, mode: "editor" });
  const showDetails = () => setParams({ id: selectedId!, mode: "details" });
  const showCreator = () => setParams({ mode: "creator" });

  const [playlists, setPlaylists] = useState<Playlist[]>(mockPlaylists);
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id?: Playlist["id"]): void => {
    setParams(id ? { id, mode: "details" } : undefined);
  };

  useEffect(
    () => setSelected(playlists.find((p) => p.id == selectedId)),
    [selectedId]
  );

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    setPlaylists((playlists) => [...playlists, draft]);
    selectPlaylistById(draft.id);
  };

  const removePlaylist = (id: Playlist["id"]) => {
    setPlaylists((playlists) => playlists.filter((p) => p.id !== id));
    if (selected?.id === id) {
      selectPlaylistById(undefined);
    }
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists((playlists) =>
      playlists.map((p) => (p.id === draft.id ? draft : p))
    );
    selectPlaylistById(draft.id);
  };

  // console.log("render ");
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
