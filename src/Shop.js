import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './Shop.css';
import './LoadingAnimation.css';

const Shop = (props) => {
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
      <NavBar numberOfItems = {props.numberOfItems}/>
      <h1 className = 'title'>Shop</h1>
      <div id='loader'/>
      <div className = 'shop-items'>
        {items.map((item) => { return (
            <div className = 'shop-item' key = {item.id}>
              <Link to = {`/shop/${item.id}`} style = {shopStyle}>
                <div className = 'shop-item-image-container'>
                  <img src = {item.image} alt = {item.id} className = 'shop-item-image'/>                
                </div>

                <div className = 'shop-item-info'>
                  {item.title}
                  <div className = 'shop-item-details'>
                    <div>{item.rating.rate} ★</div>
                    <div>{item.rating.count} 👤</div>
                  </div>

                  <div>${item.price}</div>
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
