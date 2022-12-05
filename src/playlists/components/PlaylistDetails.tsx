// tsrafce
import React from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = { playlist: Playlist };

const PlaylistDetails = ({ playlist }: Props) => {
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
      <button className="btn btn-primary" onClick={() => {}}>
        Edit
      </button>
    </div>
  );
};

export default PlaylistDetails;
