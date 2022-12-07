import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../common/model/Album";

type Props = { album: Album; link?: boolean };

const AlbumCard = ({ album, link }: Props) => {
  return (
    <div className="card">
      <img src={album.images[0].url} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{album.name} </h5>

        {link && (
          <Link to={`/albums/${album.id}`} className=" ">
            Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default AlbumCard;
