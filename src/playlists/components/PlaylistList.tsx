import React, { useState } from "react";
import { mockPlaylists } from "../../common/mocks/mockPlaylists";
import { classNames } from "../../common/helpers/classNames";
import { Playlist } from "../../common/model/Playlist";

type Props = {
  playlists: Playlist[];
  selectedId?: string | null;
  onSelect: (id: Playlist["id"]) => void;
  onDelete?: (id: Playlist["id"]) => void;
};

const PlaylistList = ({ playlists, onSelect, onDelete, selectedId }: Props) => {
  return (
    <div>
      <div className="list-group">
        {playlists.map((playlist, index) => (
          <button
            className={classNames(
              `list-group-item`,
              `list-group-item-action`,
              playlist.id === selectedId && "active"
            )}
            key={playlist.id}
            onClick={() => onSelect(playlist.id)}
          >
            {index + 1}. {playlist.name}
            {onDelete && (
              <span
                className="close float-end"
                onClick={(event) => {
                  event.stopPropagation(); // Dont select when deleting!
                  onDelete(playlist.id);
                }}
              >
                &times;
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
