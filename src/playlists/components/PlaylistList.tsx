import React, { useState } from "react";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";
import { classNames } from "../../common/helpers/classNames";
import { Playlist } from "../../common/model/Playlist";

type Props = {
  playlists: Playlist[];
  selectedId: string;
  onSelect: (id: Playlist["id"]) => void;
};

const PlaylistList = ({ playlists, onSelect, selectedId }: Props) => {
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
            key={playlist.id}
            onClick={() => onSelect(playlist.id)}
          >
            {index + 1}. {playlist.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
