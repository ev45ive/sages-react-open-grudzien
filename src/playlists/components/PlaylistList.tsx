import React from "react";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";
import { classNames } from "../../common/helpers/classNames";
import { Playlist } from "../../common/model/Playlist";

type Props = {};

const PlaylistList = (props: Props) => {
  const playlists = mockPlaylists;
  const selectedId: Playlist["id"] = "234";

  const select = (id: Playlist["id"]) => {
    console.log('Playlist clicked -> change id -> change selection');
    
  };

  return (
    <div>
      <div className="list-group">
        {playlists.map((playlist, index) => (
          <a
            href="#"
            className={classNames(
              `list-group-item`,
              `list-group-item-action`,
              playlist.id === selectedId && "active"
            )}
          >
            {index + 1}. {playlist.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
