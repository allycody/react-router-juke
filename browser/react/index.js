'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';

const onAlbumEnter = (nextRouterState) => {
  console.log(nextRouterState)
}

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <Route path="/albums" component={Albums} />
        <Route path="/albums/:albumId" component={Album} />
        <IndexRedirect to='/albums' />
      </Route>
    </Router>,
  document.getElementById('app')
);
