import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import {
  playlistLoadById,
  playlistSelectedSelector,
  playlistsLoad,
  playlistsSelector,
} from "../../store/reducers/playlists";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
type Props = {};

const PlaylistsRedux = (props: Props) => {
  const playlists = useSelector(playlistsSelector);
  const selected = useSelector(playlistSelectedSelector);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const { playlistId } = useParams();
  useEffect(() => {
    playlistId && dispatch(playlistLoadById(playlistId));
  }, [playlistId]);

  useEffect(() => {
    dispatch(playlistsLoad());
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <PlaylistList
            selectedId={selected?.id}
            playlists={playlists}
            onSelect={(id) => navigate("/playlists/" + id)}
          />
        </div>
        <div className="col">
          <PlaylistDetails
            playlist={selected}
            onEdit={() => navigate("/playlists/" + selected?.id + "/edit")}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistsRedux;
