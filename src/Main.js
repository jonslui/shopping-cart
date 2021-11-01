import React from 'react';
import NavBar from './NavBar';
import './App.css'

const Main = (props) => {  
  return (
    <div className = 'Title'>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1>Welcome to The Fake Store!</h1>
      <p>
        The best place to purchase all your fake goods!
      </p>
    </div>
  );
}

export default Main;
