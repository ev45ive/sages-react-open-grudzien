import React from "react";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";

type Props = {};

const cls = (classes: (string | false)[]) => {
  // TODO: implementation

  return "";
};

const PlaylistList = (props: Props) => {
  const playlists = mockPlaylists;
  const selectedId = "234";

  return (
    <div>
      <div className="list-group">
        {playlists.map((playlist, index) => (
          <a
            href="#"
            className={cls([
              `list-group-item`,
              `list-group-item-action`,
              playlist.id === selectedId && "active",
            ])}
          >
            {index + 1}. {playlist.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
