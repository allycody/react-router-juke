'use strict';

import React from 'react';
import { Link } from 'react-router';
import Albums from './Albums';
import Songs from './Songs';

class Artist extends React.Component {

  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }

  render () {

    const artist = this.props.selectedArtist;
    const albums = artist.albums || [];
    const songs = artist.songs || [];

    return (
      <div>
        <h3>{ artist.name }</h3>
        <Albums {...this.props} albums={albums} />
        <Songs {...this.props} songs={songs} />
      </div>
    );
  }
}

export default Artist;
