'use strict';

import React from 'react';
import FilterableArtists from '../components/FilterableArtists';

class FilterableArtistsContainer extends React.Component {

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
      <FilterableArtists
        {...this.props}
        handleChange={this.handleChange}
        filteredArtists={filteredArtists}
        inputValue={inputValue}
      />
    );
  }
}

export default FilterableArtistsContainer;
