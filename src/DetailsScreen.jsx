// DetailsScreen.js
import React, { useState } from 'react';
import './DetailsScreen.css';

const DetailsScreen = () => {
  const [size, setSize] = useState('M');
  const [chocolate, setChocolate] = useState('Milk Chocolate');
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="details-container">
      <img src="espresso-detail.jpg" alt="Espresso" className="details-img" />
      <h2>Espresso with chocolate</h2>
      <p>Description of the coffee goes here.</p>
      <div className="options">
        <h4>Choice of Chocolate</h4>
        <div>
          <button onClick={() => setChocolate('White Chocolate')}>White</button>
          <button onClick={() => setChocolate('Milk Chocolate')}>Milk</button>
          <button onClick={() => setChocolate('Dark Chocolate')}>Dark</button>
        </div>
      </div>
      <div className="size-options">
        <h4>Size</h4>
        <button onClick={() => setSize('S')}>S</button>
        <button onClick={() => setSize('M')}>M</button>
        <button onClick={() => setSize('L')}>L</button>
      </div>
      <div className="quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <div className="price">
        <h2>$4.20</h2>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default DetailsScreen;
