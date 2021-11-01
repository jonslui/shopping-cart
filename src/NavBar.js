import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav className = 'NavBar'>
      <ul className = 'nav-links'>
        <li>
          <Link to = '/' style = {navStyle}>Home</Link>
        </li>
        <li>
          <Link to = '/shop' style = {navStyle}>Shop</Link>
        </li>
        <li>
          <Link to = '/aboutus' style = {navStyle}>About Us</Link>
        </li>
        <li>
          <Link to = '/shoppingcart' style = {navStyle}>My Cart ({props.numberOfItems})</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;