import React from 'react'
import PlaylistDetails from '../components/PlaylistDetails'
import PlaylistEditor from '../components/PlaylistEditor'
import PlaylistList from '../components/PlaylistList'

type Props = {}

const PlaylistsView = (props: Props) => {
  return (
    <div>
        {/* .row>.col*2 */}
        <div className="row">
            <div className="col">
                <PlaylistList/>
            </div>
            <div className="col">
                <PlaylistDetails/>
                <PlaylistEditor/>
            </div>
        </div>
    </div>
  )
}

export default PlaylistsView