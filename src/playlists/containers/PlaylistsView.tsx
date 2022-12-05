import React from "react";

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

  return (
    <div>
      {/* .row>.col*2 */}
      <div className="row">
        <div className="col">
          <PlaylistList />
          <PlaylistEditor />
        </div>
        <div className="col">
          <PlaylistDetails playlist={selected} />
          <PlaylistEditor />
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
