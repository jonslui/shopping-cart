import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './App.css';

const Shop = () => {
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    fetchItems();
  }, [])


  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const items = await data.json()
    console.log(items);
    setItems(items)
  }

  return (
    <div className = 'Title'>
      <NavBar />
      <h1>Shop</h1>
      <div className = 'items'>
        {items.map((item) => {
            return (
            <div className = 'item' key = {item.id}>
              <Link to = {`/shop/${item.id}`}>
                <img src = {item.image} alt = {item.id} className = 'product-image'/>
                <div>{item.title}</div>
              </Link>
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default Shop;