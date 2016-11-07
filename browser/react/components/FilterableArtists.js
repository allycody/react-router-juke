'use strict';

import React from 'react';
import Artists from './Artists';

const FilterableArtists = function (props) {

  const filteredArtists = props.filteredArtists;
  const handleChange = props.handleChange;
  const inputValue = props.inputValue;

  return (
    <form className='form-group' style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        className='form-control'
        placeholder="Enter artist name"
      />
      <Artists {...props} artists={filteredArtists} />
    </form>
  )
}

export default FilterableArtists;
