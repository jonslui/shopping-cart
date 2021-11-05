import React from 'react';
import NavBar from './NavBar';
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
          Press Shop to begin!
        </p>
      </div>
    </div>
  );
}

export default Main;
