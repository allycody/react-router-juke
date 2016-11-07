'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import Artist from './components/Artist';
import ArtistAlbums from './components/ArtistAlbums';
import ArtistSongs from './components/ArtistSongs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import Playlist from './components/Playlist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={ArtistAlbums} />
        <Route path="songs" component={ArtistSongs} />
      </Route>
      <Route path="/new-playlist" component={NewPlaylistContainer} />
      <Route path="playlists/:playlistId" component={Playlist} />
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);
