'use strict';

import React from 'react';
import Songs from './Songs';

const ArtistSongs = function (props) {

  const songs = props.songs;
  return <Songs {...props} songs={songs} />
}

export default ArtistSongs;
