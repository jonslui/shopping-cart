import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './ShoppingCart.css';
import './LoadingAnimation.css';

const ShoppingCart = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

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
      let keys = Object.keys(props.cartContents);

      for (const id of keys){
        const data = await fetch(`https://fakestoreapi.com/products/${id}`, {signal: ac.signal})
        const item = await data.json();
        obj[item.id] = item;
        total = total + (item.price * props.cartContents[id]);
      }

      setItems(obj);
      setTotal(total);  

      document.getElementById('loader').style.display = 'none';
    
    } catch(err) {
      console.log(err);
      document.getElementById('loader').style.display = 'none';

    }
  }

  const increaseTotal = (price, quantity = 1) => {
    setTotal((Number.parseFloat(total) + (price * quantity)).toFixed(2))
  }

  const decreaseTotal = (price, quantity = 1) => {
    setTotal((Number.parseFloat(total) - (price * quantity)).toFixed(2))
  }

  const subtotal = (price, quantity) => {
    return Number.parseFloat(price * quantity).toFixed(2);
  }

  return (
    <div>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1 className = 'Title'>My Cart</h1>

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
                      props.deleteCartItem(id);
                      decreaseTotal(items[id].price, props.cartContents[id]);
                    }}>
                  X</button>

                  <div className = 'shopping-cart-image-container'>
                    <img src = {items[id].image} alt = {id} className = 'shopping-cart-image'/> 
                  </div>
                    
                  <div className = 'shopping-cart-item-title'>{items[id].title}</div>

                  <div className = 'quantity-container'>
                    <button type = 'submit' 
                      onClick = {() => {
                        props.removeCartItem(id);
                        decreaseTotal(items[id].price);
                      }}
                      className = 'subtract'>
                    -</button>
                    
                    <div className = 'quantity'>{props.cartContents[id]}</div>
                    
                    <button type = 'submit' 
                      onClick = {() => {
                        props.addCartItem(id);
                        increaseTotal(items[id].price);
                      }}
                      className = 'add'>
                    +</button>
                  
                  </div>
                
                  <div className = 'subtotal'>${subtotal(items[id].price, props.cartContents[id])}</div>
                </div>
              )
            }
          })
        }
      </div>

      <div id = 'total'>Checkout: ${total}</div>
    </div>
  )
}

export default ShoppingCart;
