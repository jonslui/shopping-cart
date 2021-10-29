import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './Shop.css';
import './LoadingAnimation.css';

const Shop = () => {
  const [items, setItems] = useState([]);
  const shopStyle = {
    textDecoration: 'none',
    color: 'black'
  }
 
  useEffect(() => {
    const ac = new AbortController();
    fetchItems(ac);

    return () => {
      ac.abort();
    }
  }, [])


  const fetchItems = async (ac) => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/`, {signal: ac.signal})
      const items = await data.json()
      setItems(items)
      document.getElementById('loader').style.display = 'none';
    } catch(err) {
      console.log(err)
    }
    
  }

  return (
    <div>
      <NavBar />
      <h1 className = 'title'>Shop</h1>
      <div id='loader'/>
      <div className = 'items'>
        {items.map((item) => { return (
            <div className = 'item' key = {item.id}>
              <Link to = {`/shop/${item.id}`} style = {shopStyle}>
                <div className = 'items-image-container'>
                  <img src = {item.image} alt = {item.id} className = 'items-image'/>                
                </div>

                <div className = 'items-info'>
                  {item.title}
                  <div>
                    <div>Stars: {item.rating.rate}</div>
                    <div>Raters: {item.rating.count}</div>
                    <div>${item.price}</div>
                  </div>
                </div>
              </Link>
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default Shop;
