import React from "react";

type Props = {};

const AlbumCard = (props: Props) => {
  return (
    <div className="card">
      <img src="http://placekitten.com/300/300" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Album title</h5>
      </div>
    </div>
  );
};

export default AlbumCard;
