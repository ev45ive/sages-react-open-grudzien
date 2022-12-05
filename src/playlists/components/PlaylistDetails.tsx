// tsrafce
import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Awesome Playlist",
  };

  return (
    <div>
      {/* dl>(dt{Name:}+dd{Playlist $})*3 */}
      <dl>
        <dt>Name:</dt>
        <dd>Playlist 1</dd>

        <dt>Public:</dt>
        <dd>Yes</dd>

        <dt>Description:</dt>
        <dd>Best Playlist</dd>
      </dl>
    </div>
  );
};

export default PlaylistDetails;
