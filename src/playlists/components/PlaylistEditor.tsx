import React from "react";
import { Playlist } from "../../common/model/Playlist";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist: Playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Awesome Playlist",
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="playlist_name" className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="playlist_name"
            defaultValue={playlist.name}
          />
          <div className="form-text float-end">0 / 100</div>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="playlist_public"
            defaultChecked={playlist.public}
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
            readOnly
            value={playlist.description}
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
