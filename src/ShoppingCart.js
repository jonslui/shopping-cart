import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './ShoppingCart.css';

const ShoppingCart = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    let obj = {};
    let keys = Object.keys(props.cartContents);

    for (const id of keys){
      const data = await fetch(`https://fakestoreapi.com/products/${id}`)
      const item = await data.json();
      obj[item.id] = item;
    }

    setItems(obj);
    document.getElementById('loader').style.display = 'none';
  }

  const subtotal = (price, quantity) => {
    return Number.parseFloat(price * quantity).toFixed(2);
  }

  return (
    <div>
      <NavBar />
      <h1 className = 'Title'>My Cart</h1>
      <div id = 'loader' />
      <div className = 'shopping-cart-container'>
        {
          Object.keys(props.cartContents).map((id) => {
            if (items[id]){
              return ( 
                <div key = {id} className = 'shopping-cart-item'>
                  
                  <div className = 'shopping-cart-image-container'>
                    <img src = {items[id].image} alt = {id} className = 'shopping-cart-image'/> 
                  </div>
                  
                  <div className = 'text-container'>
                    <div className = 'shopping-cart-item-title'>{items[id].title}</div>


                    <div className = 'price'>${items[id].price}</div>
                    <div className = 'multiply-sign'>x</div>
                    <div className = 'quantity-container'>
                      <div className = 'quantity'>{props.cartContents[id]}</div>
                      <button type = 'submit' onClick = {() => props.addCartItem(id)} className = 'add'>+</button>
                      <button type = 'submit' onClick = {() => props.removeCartItem(id)} className = 'subtract'>-</button>
                    </div>
                  
                    <div className = 'subtotal'>Subtotal: ${subtotal(items[id].price, props.cartContents[id])}</div>
                  </div>

                </div>
              )
            }
          })
        }
      <div>Total:</div> 
      </div>
    </div>
  )
}

export default ShoppingCart;
