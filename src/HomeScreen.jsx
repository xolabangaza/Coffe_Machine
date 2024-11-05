import React, { useState } from 'react';
import './HomeScreen.css';
import { useNavigate } from 'react-router-dom';
import products from './db';

const HomeScreen = () => {
  const navigate = useNavigate();
  
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle product addition and navigation
  const handleAdd = (productId) => {
    localStorage.setItem('selectedProductId', productId);
    navigate('/DetailsScreen');
  };

  // Function to filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.name.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className='home-heading'>Find the best Coffee to your taste</h2>
        <input type="text" placeholder="Find your coffee..." className="search-input" />
      </header>
      <section className="coffee-categories">
        {/* Adding an "All" category to display all products */}
        {['All', 'Espresso', 'Latte', 'Cappuccino', 'Hot Chocolate'].map(category => (
          <span 
            key={category} 
            className='categories' 
            onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
          >
            {category}
          </span>
        ))}
      </section>
      <section className="coffee-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="coffee-item">
            <img src={product.image} alt={product.name} className="coffee-img latte" />
            <p className='title'>{product.name}</p>
            <span className='price'>R{product.price.toFixed(2)}</span>
            <button className='add-btn' onClick={() => handleAdd(product.id)}>+</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeScreen;
