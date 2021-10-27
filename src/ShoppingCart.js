import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './App.css';

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

  return (
    <div>
      <NavBar />
      <h1 className = 'Title'>My Cart</h1>
      <div id = 'loader' />
      <div>
        {
          Object.keys(props.cartContents).map((id) => {
            if (items[id]){
              return ( 
                <div key = {id}>
                  <div>{items[id].title} : {props.cartContents[id]}</div>
                  <button type = 'submit' onClick = {() => props.addCartItem(id)}>+</button>
                  <button type = 'submit' onClick = {() => props.removeCartItem(id)}>-</button>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default ShoppingCart;
