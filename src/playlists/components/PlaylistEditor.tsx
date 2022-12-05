import React, { useState } from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = {
  playlist: Playlist;
  onSave: (draft: Playlist) => void;
  onCancel: () => void;
};

const PlaylistEditor = ({ playlist, onCancel, onSave }: Props) => {
  const [playlistName, setPlaylistName] = useState(playlist.name);
  const [playlistPublic, setPlaylistPublic] = useState(playlist.public);
  const [playlistDescription, setPlaylistDescription] = useState(
    playlist.description
  );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // onSave(?)
  };

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
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="playlist_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="playlist_name"
            value={playlistName}
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

        <button type="button" className="btn btn-danger" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default PlaylistEditor;
