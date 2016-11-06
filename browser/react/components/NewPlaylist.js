'use strict';

import React from 'react';

const NewPlaylist = function (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const warning = props.warning;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewPlaylist;
