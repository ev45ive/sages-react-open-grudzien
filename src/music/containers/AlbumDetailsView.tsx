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

  const {
    data: album,
    error,
    isFetching, // any Loading
    isLoading, // Loading without cache
    refetch,
  } = useQuery(["album", albumId], () => fetchAlbumById(albumId), {});

  if (isLoading) return <Loader />;

  if (!album) return <div>{error instanceof Error && error.message}</div>;

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="display-3"> {album.name} </h1>
          <small className="text-muted"> {albumId}</small>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AlbumCard album={album} />
        </div>
        <div className="col">
          <dl>
            <dt>Artist</dt>
            <dd>{album.artists[0].name}</dd>
            <dt>Release date </dt>
            <dd>{album.release_date} </dd>
            <dt>Tracks</dt>
            <dd>{album.total_tracks} </dd>
          </dl>

          {/* 
          <audio src={selectedTrack?.preview_url} className="w-100 my-2" controls/> */}

          <div className="list-group">
            <div className="list-group-item">1. Track name</div>
            <div className="list-group-item">1. Track name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailsView;
