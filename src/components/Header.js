import React from 'react';
import CardList from './CardList';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

export default Header;
