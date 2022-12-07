import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumById } from "../../common/api/MusicApi";
import { Loader } from "../../common/components/Loader";
import { mockAlbums } from "../../common/mocks/mockAlbums";
import AlbumCard from "../components/AlbumCard";

type Props = {};

// http://localhost:3000/albums/5Tby0U5VndHW0SomYO7Id7

const AlbumDetailsView = (props: Props) => {
  const { albumId } = useParams();

  // useQuery(['album',albumId], ....)

  // fetchAlbumById(albumId)

  return (
    <div>
      <Loader />
      <div className="row">
        <div className="col">
          <h1 className="display-3"> tutaj wstaw tytul</h1>
          <small className="text-muted"> {albumId}</small>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AlbumCard album={mockAlbums[0]} />
        </div>
        <div className="col">
          <dl>
            <dt>Artist</dt>
            <dd>tutaj 1 artysta [0] </dd>
            <dt>Release date </dt>
            <dd>tutaj data </dd>
            <dt> Cos innego </dt>
            <dd>tutaj cos innego</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailsView;
