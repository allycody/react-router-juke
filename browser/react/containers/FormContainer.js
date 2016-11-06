'use strict';

import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

class FormContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const addPlaylist = this.props.addPlaylist;
    addPlaylist(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render () {
    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.inputValue}
      />
    );
  }
}

export default FormContainer;
