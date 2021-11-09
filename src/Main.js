import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './stylesheets/App.css'

const Main = (props) => {  
  return (
    <div>
      <NavBar numberOfItems = {props.numberOfItems}/>
      
      <div className = 'text-container'>
        <h1>Welcome to The Fake Store!</h1>
        <p>
          The best place to purchase all your fake goods!
        </p>
        <p>
          Press {<Link to = '/shopping-cart/shop/'>Shop</Link>} to begin!
        </p>
      </div>
    </div>
  );
}

export default Main;
