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
      <h1>{item.title}</h1>
      <img src = {item.image} alt = {item.id} className = 'product-image'/>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemPage;