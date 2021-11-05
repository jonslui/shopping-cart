import React, {useState} from 'react';
import Routes from './Routes';
import './stylesheets/App.css'

function App() {  
  const [cartItems, setCartItems] = useState({});
  const [numberOfItems, setNumberOfItems] = useState(0);

  function increaseItemQuantity(id){
    // if cartItems[id] exists, increment by 1 (this value is used to represent quantity in ShoppingCart.js)
    if ( cartItems[id] ){
      setCartItems({
        ...cartItems,
        [id]: cartItems[id] + 1
      });

    // .. else, add it to the cartItems objeet with a value of 1. 
    } else {
      setCartItems({
        ...cartItems,
        [id]: 1
      })
    }

    setNumberOfItems(numberOfItems + 1);
  }

  
  function decreaseItemQuantity(id){
    // if cartItems[id] is 1, remove it from the cart as its quantity would be 0 with this button press.
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

  // remove number of items of clicked type from numberOfItems,
  // then remove that item from the cartItems object
  function deleteCartItem(id){
    setNumberOfItems(numberOfItems - cartItems[id]);
    let prevState = {...cartItems};
    delete prevState[id];
    setCartItems({...prevState})
  }

  // empty the entire cart (called when a purchase is compelted in ShoppingCart.js)
  function clearCart(){
    setCartItems({});
    setNumberOfItems(0);
  }

  return (
    <Routes
      increaseItemQuantity = {increaseItemQuantity}
      decreaseItemQuantity = {decreaseItemQuantity}
      cartContents = {cartItems}
      numberOfItems = {numberOfItems}
      deleteCartItem = {deleteCartItem}
      clearCart = {clearCart}
    />
  );
}

export default App;
