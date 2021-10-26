import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './App.css';

const ItemPage = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, [])

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const itemData = await data.json()
    console.log(itemData);
    setItem(itemData);
  }

  return (
    <div>
      <NavBar />
      <div className = 'item-container'>
        <img src = {item.image} alt = {item.id} className = 'item-image'/>
        <div className = 'item-info'>
        <h1 className = 'item-title'>{item.title}</h1>              
          {/* <div className = 'rating-info'>
            <div>Stars: {item.rating.rate}</div>
            <div>Raters: {item.rating.count}</div>
          </div>   */}
          <p>{item.description}</p>
          <div>${item.price}</div>
          <button type = 'submit'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemPage;