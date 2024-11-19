import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">X</div>
      <nav className='nav'>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">Abo<span>ut</span></a></li>
          <li><a href="#location"><span>Location</span></a></li>
          <li><a href="#contact"><span>Contact</span></a></li>
        </ul>
      </nav>
      <div className="search">
        <span>Cart</span>
      </div>
    </header>
  );
};

export default Navbar;
