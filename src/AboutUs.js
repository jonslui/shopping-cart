import React from 'react';
import NavBar from './NavBar';
import './stylesheets/App.css';

const AboutUs = (props) => {
  return (
    <div>
      <NavBar numberOfItems = {props.numberOfItems}/>

      <div className = 'text-container'>
        <h1>About Us</h1>
        <p>
          This website was created by Jonathan Lui to practice using React and React-Router-Dom.
        </p>
        <p>
          Connect with him on {<a href = 'https://www.github.com/jonslui'>GitHub</a>} or {<a href = 'https://www.linkedin.com/in/jonslui'>LinkedIn</a>} to share your thoughts and opinions!
        </p>
      </div>
    </div>
  )
}

export default AboutUs;