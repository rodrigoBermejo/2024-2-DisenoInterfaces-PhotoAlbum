import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    name: 'albums',
    position: null,
  },
  {
    name: 'photos',
    position: null,
  },
  {
    name: 'login',
    position: 'right',
  }
];

class Nav extends React.Component {
  renderMenuItems = (item) => {

  }

  render() {
    return (
      <div>Nav Bar | Albums | Photos | Login</div>
    );
  }
}

export default Nav;