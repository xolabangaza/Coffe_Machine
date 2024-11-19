// DetailsScreen.jsx
import React, { useState, useEffect } from 'react';
import './DetailsScreen.css';
import products from './db'; // Import products array
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const DetailsScreen = () => {
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('M');
  const [chocolate, setChocolate] = useState('Milk Chocolate');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productId = localStorage.getItem('selectedProductId');
    if (productId) {
      const selectedProduct = products.find(p => p.id === parseInt(productId, 10));
      setProduct(selectedProduct);
    }
  }, []);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  if (!product) return <div>Loading...</div>; // Optional loading state

  return (
    <div className="container">
    <div className="details-container">
      <img src={product.image} alt={product.name} className="details-img" />
      <div className="coffeDetails">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="options">
        <h4>Choice of Chocolate</h4>
        <div>
          {product.options.chocolate.map(choco => (
            <button key={choco} onClick={() => setChocolate(choco)}>{choco}</button>
          ))}
        </div>
     
      <div className="size-options">
        <h4>Size</h4>
        {product.options.size.map(s => (
          <button className='size' key={s} onClick={() => setSize(s)}>{s}</button>
        ))}
      </div>
      <div className="quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      </div>
      <div className="price">
        <h2>R{(product.price * quantity).toFixed(2)}</h2>
        <FontAwesomeIcon icon={faBagShopping} className="my-icon" />
        <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsScreen;
