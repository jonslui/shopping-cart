import React from 'react';
import NavBar from './NavBar';
import './App.css'

const Main = (props) => {  
  return (
    <div className = 'Title'>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1>Home</h1>
    </div>
  );
}

export default Main;
