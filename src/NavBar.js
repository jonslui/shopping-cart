import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/NavBar.css';

const NavBar = (props) => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav className = 'NavBar'>
      <div className = 'nav-links'>
        <li>
          <Link to = '/shopping-cart/' style = {navStyle}>Home</Link>
        </li>
        <li>
          <Link to = '/shopping-cart/shop' style = {navStyle}>Shop</Link>
        </li>
        <li>
          <Link to = '/shopping-cart/aboutus' style = {navStyle}>About Us</Link>
        </li>
        <li>
          <Link to = '/shopping-cart/shoppingcart' style = {navStyle}>My Cart ({props.numberOfItems})</Link>
        </li>
      </div>
    </nav>
  )
}

export default NavBar;