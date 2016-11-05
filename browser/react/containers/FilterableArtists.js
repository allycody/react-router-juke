'use strict';

import React from 'react';
import Artists from '../components/Artists';

class FilterableArtists extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render () {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));

    return (
      <form className='form-group' style={{marginTop: '20px'}}>
        <input
          onChange={this.handleChange}
          value={inputValue}
          className='form-control'
          placeholder="Enter artist name"
        />
        <Artists {...this.props} artists={filteredArtists} />
      </form>
    );
  }
}

export default FilterableArtists;
