import React from 'react';
import NavBar from './NavBar';
import './stylesheets/App.css';

const NotFound = (props) => {
  return (
    <div>
      <NavBar numberOfItems = {props.numberOfItems}/>
      
      <div className = 'text-container'>
        <h1>
          Page Not Found
        </h1>

        <p>
          Please try again...
        </p>
      </div>
    </div>
  )
}

export default NotFound;