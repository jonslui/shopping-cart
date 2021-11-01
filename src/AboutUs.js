import React from 'react';
import NavBar from './NavBar';

const AboutUs = (props) => {
  return (
    <div className = 'Title'>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1>About Us</h1>
      <p>
        This website was created by Jonathan Lui to practice using React and React-Router-Dom.
      </p>
      <p>
        Connect with him on GitHub or LinkedIn to share your thoughts and opinions!
      </p>
    </div>
  )
}

export default AboutUs;