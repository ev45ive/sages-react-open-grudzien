import React, { useState } from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist: Playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Awesome Playlist",
  };

  const [playlistName, setPlaylistName] = useState(playlist.name);
  // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  if(Math.random() > .5){
    useState(123)
  }
  const [playlistPublic, setPlaylistPublic] = useState(playlist.public);
  const [playlistDescription, setPlaylistDescription] = useState(
    playlist.description
  );
  console.log("render");

  return (
    <div>
      <pre>
        {JSON.stringify({
            name: playlistName,
            public: playlistPublic,
            description: playlistDescription,
          }, null,2)}
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
            value={playlistName} // od tego zaczynymy
            onChange={(event) => setPlaylistName(event.currentTarget.value)}
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
