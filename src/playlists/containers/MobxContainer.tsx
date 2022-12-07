import React from "react";

import { mockPlaylists } from "../../common/mocks/mockPlaylists";

import { observable, computed, action, IComputedValue } from "mobx";
import { observer, Observer } from "mobx-react-lite";
import { Playlist } from "../../common/model/Playlist";
import { classNames } from "../../common/helpers/classNames";

const PlaylistDetails = observer(({ playlist }: any) => (
  <dl>
    <dt>Name</dt>
    <dd>{playlist.name}</dd>
    <input
      type="text"
      value={playlist.name}
      onChange={action((e) => (playlist.name = e.currentTarget.value))}
    />
    {/* <dd>{playlist.name}</dd> */}
  </dl>
));

const playlists = observable(mockPlaylists);
const selected = observable<{ id: string | null; data?: Playlist }>({
  id: null,
});

const MobxContainer = () => {
  //   const selected = computed(() => playlists.find((p) => p.id == selectedId.id));

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="list-group">
            <Observer>
              {() => (
                <>
                  {selected.id}

                  {playlists.map((playlist) => (
                    <div
                      className={classNames(
                        "list-group-item",
                        playlist.id == selected.id && "active"
                      )}
                      key={playlist.id}
                      onClick={action(() => {
                        selected.id = playlist.id;
                        selected.data = playlists.find(
                          (p) => p.id == selected.id
                        );
                      })}
                    >
                      {playlist.name}
                    </div>
                  ))}
                </>
              )}
            </Observer>
          </div>
        </div>
        <div className="col">
          <Observer>
            {() =>
              (selected.data as any) && (
                <PlaylistDetails playlist={selected.data} />
              )
            }
          </Observer>
        </div>
      </div>
    </div>
  );
};

export default MobxContainer;
