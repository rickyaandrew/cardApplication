import React from 'react';
import Card from './Card';

const Header = (props) => (
  <div>
    <div className="header">{props.title}</div>
    <Card />
  </div>
);

export default Header;
