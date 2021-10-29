import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './App.css';
import './LoadingAnimation.css';

const ItemPage = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const ac = new AbortController();
    fetchItem(ac);

    return () => {
      ac.abort();
    }
  }, [])

  const fetchItem = async (ac) => {
    try{
      const data = await fetch(`https://fakestoreapi.com/products/${props.match.params.id}`, {signal: ac.signal})
      const itemData = await data.json();
      setItem(itemData);
      document.getElementById('loader').style.display = 'none';
      document.getElementById('item-container').style.display = 'flex';
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <NavBar numberOfItems = {props.numberOfItems}/>
      <div id = 'loader' />
      <div id = 'item-container'>
        <img src = {item.image} alt = {item.id} className = 'item-image'/>
        <div className = 'item-info'>
        <h1 className = 'item-title'>{item.title}</h1>              
          {/* <div className = 'rating-info'>
            <div>Stars: {item.rating.rate}</div>
            <div>Raters: {item.rating.count}</div>
          </div>   */}
          <p>{item.description}</p>
          <div>${item.price}</div>

          <button type = 'submit' onClick = {() => props.addCartItem(item.id)}>Add to Cart</button>
          <button type = 'submit' onClick = {() => props.removeCartItem(item.id)}>Remove from Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemPage;