import React from 'react';
import {Link} from 'react-router'
import Album from './Album'
import Albums from './Albums'
import Songs from './Songs'

class Artist extends React.Component{
  componentDidMount () {
    const selectArtist = this.props.selectArtist;
    const artistId = this.props.routeParams.artistId;

    selectArtist(artistId);
  }

  render(){

    const artist = this.props.selectedArtist;
    const propsToChildren = {
      albums: this.props.selectedArtist.albums,
      songs: this.props.selectedArtist.songs,
      currentSong: this.props.currentSong
    }

    return (
      <div>
        <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        {
          this.props.children && React.cloneElement(this.props.children, propsToChildren)
        }
      </div>
    )
  }
}

export default Artist;
