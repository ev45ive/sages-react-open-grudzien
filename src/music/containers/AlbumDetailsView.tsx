import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumById } from "../../common/api/MusicApi";
import { Loader } from "../../common/components/Loader";
import { classNames } from "../../common/helpers/classNames";
import { mockAlbums } from "../../common/mocks/mockAlbums";
import { Track } from "../../common/model/Album";
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

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>();

  const audioRef = useRef<HTMLAudioElement>(null);
  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    if (currentTrack?.id !== track.id) setIsPlaying(true);
    else setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.1;
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [currentTrack, isPlaying]);

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

          <audio
            ref={audioRef}
            src={currentTrack?.preview_url}
            className="w-100 my-2"
            controls
          />

          <div className="list-group">
            {album.tracks?.items.map((track, i) => (
              <div
                key={track.id}
                className={classNames(
                  "list-group-item",
                  currentTrack?.id === track.id && "active"
                )}
                onClick={() => playTrack(track)}
              >
                {i + 1}. {track.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailsView;
