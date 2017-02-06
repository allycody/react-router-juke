import React from 'react';
import {Link} from 'react-router'

class Artist extends React.Component{
  componentDidMount () {
    const selectArtist = this.props.selectArtist;
    const artistId = this.props.routeParams.artistId;

    selectArtist(artistId);
  }
  render(){

    const selectedArtist = this.props.selectedArtist;

    return (
      <div>
        <h3>ARTIST NAME</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
    )
  }
}

export default Artist;
