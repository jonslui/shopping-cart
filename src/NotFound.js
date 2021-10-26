import React from 'react';
import NavBar from './NavBar';

const NotFound = () => {
  return (
    <div className = 'Title'>
      <NavBar />
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