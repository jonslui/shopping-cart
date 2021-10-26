import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './App.css';

const ShoppingCart = () => {
  return (
    <div>
      <NavBar />
      <h1 className = 'Title'>My Cart</h1>
    </div>
  )
}

export default ShoppingCart;
