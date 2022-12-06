import React, { useEffect, useId, useRef, useState } from "react";
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
    nameInputRef.current?.focus();
  }, [playlist]);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const uid = useId();
  const uid2 = useId() + "playlist_public";

  return (
    <div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor={uid + "playlist_name"} className="form-label">
            Name
          </label>
          <input
            id={uid + "playlist_name"}
            ref={nameInputRef}
            type="text"
            className="form-control"
            value={playlistName}
            onChange={(event) => setPlaylistName(event.currentTarget.value)}
          />
          <div className="form-text float-end">{playlistName.length} / 100</div>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={uid2}
            checked={playlistPublic}
            onChange={(e) => setPlaylistPublic(e.target.checked)}
          />
          <label className="form-check-label" htmlFor={uid2}>
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
