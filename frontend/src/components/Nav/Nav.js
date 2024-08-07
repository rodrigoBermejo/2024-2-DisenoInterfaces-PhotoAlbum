import React from 'react';
import './Nav.css';

const menuItems = [
  {
    id: 1,
    name: 'albums',
    position: null,
  },
  {
    id: 2,
    name: 'photos',
    position: null,
  },
  {
    id: 3,
    name: 'login',
    position: 'right',
  }
];

class Nav extends React.Component {

  renderMenuItems = (selectedItem) => {
    this.setState({
      actualPage: selectedItem
    });
  }

  render() {
    return (
      <navbar>
        <li>
          {menuItems.map(item => (
            <ul key={item.name}
              onClick={() => this.renderMenuItems(item.id)}>
              {item.name}
            </ul>
          ))}
        </li>
      </navbar>
    );
  }
}

export default Nav;