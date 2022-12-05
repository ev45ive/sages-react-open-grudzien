// tsrafce
import React from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = { playlist: Playlist };

// const PlaylistDetails = (props: Props) => {
const PlaylistDetails = ({ playlist }: Props) => {
  // const playlist = props.playlist;
  // const { playlist /* ,x,y... */ } = props;
  // const { playlist } = props;

  return (
    <div>
      {/* dl>(dt{Name:}+dd{Playlist $})*3 */}
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
    </div>
  );
};

export default PlaylistDetails;
