'use strict';

import React from 'react';
import { Link } from 'react-router';

const Sidebar = function (props) {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link href="#" to='/albums'>ALBUMS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
