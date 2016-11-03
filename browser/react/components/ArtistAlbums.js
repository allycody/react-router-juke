'use strict';

import React from 'react';
import Albums from './Albums';

const ArtistAlbums = function (props) {

  const albums = props.albums;
  return <Albums {...props} albums={albums} />
}

export default ArtistAlbums;
