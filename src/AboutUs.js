import React from 'react';
import NavBar from './NavBar';

const AboutUs = (props) => {
  return (
    <div className = 'Title'>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1>About Us</h1>
    </div>
  )
}

export default AboutUs;