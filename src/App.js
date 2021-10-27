import React, {useState} from 'react';
import Routes from './Routes';
import './App.css'

function App() {  
  const [cartItems, setCartItems] = useState({});

  function addCartItem(id){
    if ( cartItems[id] ){
      setCartItems({
        ...cartItems,
        [id]: cartItems[id] + 1
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: 1
      })
    }
  }

  function removeCartItem(id){
    if ( !cartItems[id] || cartItems[id] === 1 ){
      let prevState = {...cartItems};
      delete prevState[id];
      setCartItems({...prevState});
    } else {
      setCartItems({
        ...cartItems,
        [id]: cartItems[id] - 1
      })
    }
  }

  return (
    <Routes addCartItem = {addCartItem} removeCartItem = {removeCartItem} cartContents = {cartItems}/>
  );
}

export default App;
