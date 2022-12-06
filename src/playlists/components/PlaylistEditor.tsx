import React, { useEffect, useRef, useState } from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = {
  playlist?: Playlist;
  onSave: (draft: Playlist) => void;
  onCancel: () => void;
};

const EMPTY_PLAYLIST: Playlist = {
  id: "",
  name: "",
  public: false,
  description: "",
};

const PlaylistEditor = ({
  playlist = EMPTY_PLAYLIST,
  onCancel,
  onSave,
}: Props) => {
  const [playlistName, setPlaylistName] = useState(playlist.name);
  const [playlistPublic, setPlaylistPublic] = useState(playlist.public);
  const [playlistDescription, setPlaylistDescription] = useState(
    playlist.description
  );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave({
      ...playlist,
      name: playlistName,
      public: playlistPublic,
      description: playlistDescription,
    });
  };

  useEffect(() => {
    // const elem = document.getElementById("playlist_name");

    nameInputRef.current?.focus();
  }, [playlist]);

  // const first = useRef<boolean>();
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="playlist_name" className="form-label">
            Name
          </label>
          <input
            // ref={console.log}
            ref={nameInputRef}
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

// PlaylistEditor.defaultProps = {
//   playlist: EMPTY_PLAYLIST
// }

export default PlaylistEditor;
