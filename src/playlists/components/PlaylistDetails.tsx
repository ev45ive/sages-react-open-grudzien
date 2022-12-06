// tsrafce
import React from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = {
  playlist?: Playlist;
  onEdit: () => void;
};

const PlaylistDetails = ({ playlist, onEdit }: Props) => {
  if (!playlist) {
    return <p className="alert alert-info">
      No playlist selected
    </p>;
  }

  return (
    <div>
      <dl>
        <dt>Name:</dt>
        <dd>{playlist.name}</dd>

        <dt>Public:</dt>
        <dd
          style={{
            color: playlist.public ? "red" : "green",
          }}
        >
          {playlist.public ? "Yes" : "No"}
        </dd>

        <dt>Description:</dt>
        <dd>{playlist.description}</dd>
      </dl>
      <button className="btn btn-primary" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default PlaylistDetails;
