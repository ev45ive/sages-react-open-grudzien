import React from "react";

type Props = {};

const PlaylistList = (props: Props) => {
  return (
    <div>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A second link item
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A third link item
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A fourth link item
        </a>
        <a className="list-group-item list-group-item-action disabled">
          A disabled link item
        </a>
      </div>
    </div>
  );
};

export default PlaylistList;
