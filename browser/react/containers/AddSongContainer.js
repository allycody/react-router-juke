'use strict';

import React from 'react';
import axios from 'axios';
import AddSong from '../components/AddSong';

class AddSongContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      songId: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.addSongs();
  }

  handleChange (evt) {
    this.setState({
      songId: evt.target.value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const playlistId = this.props.selectedPlaylist.id;
    const songId = this.state.songId;
    this.props.addSongToPlaylist(playlistId, songId);
  }

  render () {

    const songs = this.props.songs;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
    );
  }
}

export default AddSongContainer;
