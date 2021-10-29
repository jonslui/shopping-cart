import React from 'react';
import NavBar from './NavBar';

const NotFound = (props) => {
  return (
    <div className = 'Title'>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1>
        Generic Not Found Message
      </h1>

      <p>
        Oh no...
      </p>
    </div>
  )
}

export default NotFound;