import React, { useState } from 'react';
import './HomeScreen.css';
import { useNavigate } from 'react-router-dom';
import products from './db';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


const HomeScreen = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = (productId) => {
    localStorage.setItem('selectedProductId', productId);
    navigate('/DetailsScreen');
  };

  // Filter products based on both the selected category and the search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.name === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
    
  });

  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className='home-heading'>Find the best Coffee to your taste</h2>
        <input
          type="text"
          placeholder=" Find your coffee..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />

      </header>
      <section className="coffee-categories">
        {['All', 'Espresso', 'Latte', 'Cappuccino', 'Hot Chocolate'].map(category => (
          <span 
            key={category} 
            className={`categories ${selectedCategory === category ? 'active-category' : ''}`} 
            onClick={() => setSelectedCategory(category)}
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
