import React from "react";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";

type Props = {};

const PlaylistList = (props: Props) => {
  const playlist = mockPlaylists;
  const selectedId = '234'

  return (
    <div>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          1. Playlist 123
        </a>
        <a href="#" className="list-group-item list-group-item-action           active">
          A third link item ... 
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A fourth link item  ...
        </a>
      </div>
    </div>
  );
};

export default PlaylistList;
