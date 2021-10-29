import React, {useState} from 'react';
import Routes from './Routes';
import './App.css'

function App() {  
  const [cartItems, setCartItems] = useState({});
  const [numberOfItems, setNumberOfItems] = useState(0);

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

    setNumberOfItems(numberOfItems + 1);
  }

  function removeCartItem(id){
    if ( cartItems[id] === 1 ){
      let prevState = {...cartItems};
      delete prevState[id];
      setCartItems({...prevState});
      
      setNumberOfItems(numberOfItems - 1);
    } else if (cartItems[id] > 1) {
      setCartItems({
        ...cartItems,
        [id]: cartItems[id] - 1
      })

      setNumberOfItems(numberOfItems - 1);
    }
  }


  function deleteCartItem(id){
    setNumberOfItems(numberOfItems - cartItems[id]);
    let prevState = {...cartItems};
    delete prevState[id];
    setCartItems({...prevState})
  }

  return (
    <Routes
      addCartItem = {addCartItem}
      removeCartItem = {removeCartItem}
      cartContents = {cartItems}
      numberOfItems = {numberOfItems}
      deleteCartItem = {deleteCartItem}
    />
  );
}

export default App;
