import React, { useState } from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const initial: Playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Awesome Playlist",
  };

  const [playlistName, setPlaylistName] = useState(initial.name);
  const [playlistPublic, setPlaylistPublic] = useState(initial.public);
  const [playlistDescription, setPlaylistDescription] = useState(
    initial.description
  );

  const [playlist, setPlaylist] = useState(initial);

  function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    playlist.name = event.target.value; // Mutable change // No copy - no render!
    
    setPlaylist(playlist); // No-Op -> same object
    setPlaylist(playlist); // No-Op -> same object
    setPlaylist(playlist); // No-Op -> same object
    setPlaylist(playlist); // No-Op -> same object

    // setPlaylist(playlist); // Same object => no change -> No render
    setPlaylist({
      ...playlist,
      name: event.target.value,
    });
  }

  console.log("render");

  return (
    <div>
      <pre>
        {JSON.stringify(
          {
            name: playlistName,
            public: playlistPublic,
            description: playlistDescription,
          },
          null,
          2
        )}
      </pre>
      <form>
        <div className="mb-3">
          <label htmlFor="playlist_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="playlist_name"
            value={playlist.name} // od tego zaczynymy
            // onChange={(event) => setPlaylistName(event.currentTarget.value)}
            onChange={(event) => onNameChange(event)}
          />
          <div className="form-text float-end">{playlistName.length} / 100</div>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="playlist_public"
            checked={playlistPublic}
            onChange={(e) => setPlaylistPublic(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="playlist_public">
            Public
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            value={playlistDescription}
            onChange={(e) => setPlaylistDescription(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default PlaylistEditor;
