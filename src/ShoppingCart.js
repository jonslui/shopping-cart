import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './stylesheets/ShoppingCart.css';
import './stylesheets/LoadingAnimation.css';

const ShoppingCart = (props) => {
  const [items, setItems] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const ac = new AbortController();
    fetchItems(ac);

    return () => {
      ac.abort();
    }
  }, [])


  const fetchItems = async (ac) => {
    try{
      let obj = {};
      let total = 0;

      // These keys are ids for store objects the user added to their cart previously
      let keys = Object.keys(props.cartContents);

      // Fetching data for items in cart and adding it to a temp object
      for (const id of keys){
        const data = await fetch(`https://fakestoreapi.com/products/${id}`, {signal: ac.signal})
        const item = await data.json();
        obj[item.id] = item;

        // Add the quantity of each of these items to total
        total = total + (item.price * props.cartContents[id]);
      }

      setItems(obj);
      setCartTotal(total);  

      // remove loader once async functions finish
      document.getElementById('loader').style.display = 'none'
    } catch(err) {
      console.log(err);
      
      // remove loader in the case of error so it doesnt run endlessly
      document.getElementById('loader').style.display = 'none';

    }
  }

  const onDecreaseQuantityButton = (id, price) => {
    props.decreaseItemQuantity(id);
    setCartTotal(cartTotal - price);
  }

  const onIncreaseQuantityButton = (id, price) => {
    props.increaseItemQuantity(id);
    setCartTotal(cartTotal + price)
  }

  const onDeleteItemButton = (id, price, quantity) => {
    props.deleteCartItem(id);
    setCartTotal(cartTotal - (price * quantity));
  }

  const subtotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  }

  const onCompletePurchaseButton = () => {
    if(cartTotal > 0) {
      showPurchaseComplete();
      clearPurchasedItems();
    }
  }

  const clearPurchasedItems = () => {
    props.clearCart();
    setItems({})
    setCartTotal(0)
  }

  const showPurchaseComplete = () => {
    let notice = document.getElementById('purchase-complete-container');
    notice.style.display = 'flex';
  }

  return (
    <div>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1 className = 'title'>My Cart</h1>

      <div id = 'loader' />

      <div className = 'shopping-cart-container'>
        {
          Object.keys(props.cartContents).map((id) => {
            if (items[id]){
              return ( 
                <div key = {id} className = 'shopping-cart-item'>
                  
                  <button type = 'submit'
                    className = 'delete'
                    onClick = {() =>{
                      onDeleteItemButton(id, items[id].price, props.cartContents[id]);
                    }}
                  >x</button>
                  
                  <Link to = {`/shop/${id}`}>
                    <div className = 'shopping-cart-image-container'>
                      <img src = {items[id].image} alt = {id} className = 'shopping-cart-image'/> 
                    </div>
                  </Link>
                    
                  <div className = 'shopping-cart-item-title'>{items[id].title}</div>

                  <div className = 'quantity-container'>
                    <button type = 'submit' 
                      className = 'add'
                      onClick = {() => {
                        onIncreaseQuantityButton(id, items[id].price);
                      }}
                    >+</button>
                    
                    <div className = 'quantity'>{props.cartContents[id]}</div>
                    
                    <button type = 'submit'
                      className = 'subtract' 
                      onClick = {() => {
                        onDecreaseQuantityButton(id, items[id].price);
                      }}
                    >-</button>   
                  </div>
                
                  <div className = 'subtotal'>${subtotal(items[id].price, props.cartContents[id])}</div>
                </div>
              )
            }
          })
        }
      </div>


      <div id = 'purchase-complete-container' onClick = {() => {document.getElementById('purchase-complete-container').style.display = 'none'}}>
        <div className = 'purchase-complete-notification'>
            Purchase Complete!
        </div>
      </div>

      <div id = 'total-container' onClick = {() => {
        onCompletePurchaseButton();
      }}>
        <div className = 'total-text'>
         Checkout: ${cartTotal.toFixed(2)}
        </div>
      </div>

    </div>
  )
}

export default ShoppingCart;
