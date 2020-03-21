import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return(
    <header className="menu">
      <div><Link to="/">Logo</Link></div>
      <nav className="menu__nav">
        <ul>
          <li><Link to="/map">View Map</Link></li>
          <li><Link to="/submit">Submit Restaurant</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}