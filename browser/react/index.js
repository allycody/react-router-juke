'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import FilterableArtists from './containers/FilterableArtists';
import Artist from './components/Artist';
import ArtistAlbums from './components/ArtistAlbums';
import ArtistSongs from './components/ArtistSongs';
import FormContainer from './containers/FormContainer';
import Playlist from './components/Playlist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtists} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={ArtistAlbums} />
        <Route path="songs" component={ArtistSongs} />
      </Route>
      <Route path="/new-playlist" component={FormContainer} />
      <Route path="playlists/:playlistId" component={Playlist} />
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);
