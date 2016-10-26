import React from 'react';
import NavLink from './navlink';
import '../stylesheets/nav.css';

const Nav = () => {
  return (
    <nav>
      <li><NavLink to="/setup">Setup</NavLink></li>
      <li><NavLink to="/timing">Timing</NavLink></li>
      <li><NavLink to="/review">Review</NavLink></li>
    </nav>
  );
}

export default Nav;