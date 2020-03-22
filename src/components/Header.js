import React from 'react';
import { NavLink } from 'react-router-dom';
import Toggler from './Toggler';

export default () => {

  const toggler = React.useRef();
  const menu = React.useRef();

  const menuToggle = (e) => {
    e.currentTarget.firstElementChild.classList.toggle('toggled')
    e.currentTarget.parentElement.classList.toggle('opened')
  }

  const menuCloser = () =>{
    toggler.current.firstElementChild.classList.remove('toggled');
    menu.current.classList.remove('opened')
  }

  return(
    <header ref={menu} className="menu">
      <h1 onClick={menuCloser}><NavLink to="/">Wein <small>und</small> Brot</NavLink></h1>
      <button ref={toggler} onClick={menuToggle}>
        <Toggler />
      </button>
      <nav className="menu__nav">
        <ul>
          <li onClick={menuCloser}><NavLink to="/map">View Restaurant Map</NavLink></li>
          <li onClick={menuCloser}><NavLink to="/submit">Submit Restaurant</NavLink></li>
          <li onClick={menuCloser}><NavLink to="/about">About</NavLink></li>
          <li onClick={menuCloser}><NavLink to="/contact">Contact</NavLink></li>
          <li onClick={menuCloser}><NavLink to="/faq">FAQ</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}