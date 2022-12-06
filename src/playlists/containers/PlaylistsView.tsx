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

  const [playlists, setPlaylists] = useState(mockPlaylists);

  const savePlaylist = (draft: Playlist) => {
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
    selectPlaylistById(draft.id);
    showDetails();
  };

  const [selectedId, setSelectedId] = useState("234");
  const [selected, setSelected] = useState(playlists[0]);

  const selectPlaylistById = (id: Playlist["id"]): void => {
    setSelectedId(id);

    // let selected = playlists.find((p) => p.id == id) as any;
    // selected = 123
    // selected.get.me.a.million.dollars().now().hurryup()
    // let x = selected + 123

    // let selected = playlists.find((p) => p.id == id) as Playlist;
    // let placki = {} as Playlist

    // let selected = playlists.find((p) => p.id == id)!; // non-null assertion

    let selected = playlists.find((p) => p.id == id);
    //  Playlist | undefined
    if (selected !== undefined) {
      setSelected(selected); // Playlist
    } else if (selected == undefined) {
      selected; // undefined
    } else {
      selected; // never
      throw new Error("No playlist to select");
    }
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
          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onSave={savePlaylist}
              onCancel={showDetails}
            />
          )}
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
