import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import products from './db';
import CartModal from './CartModal';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAdd = (productId) => {
    const selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    const existing = cartItems.find(item => item.id === productId);
    let updatedCart;
    if (existing) {
      updatedCart = cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...selectedProduct, quantity: 1 }];
    }

    setCartItems(updatedCart);
    setCartVisible(true);
  };

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

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
          placeholder="Find your coffee..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="cart-toggle-btn" onClick={() => setCartVisible(true)}>
          Cart ({cartItems.length})
        </button>
      </header>

      <section className="coffee-categories">
        {['All', 'Espresso', 'Latte', 'Cappuccino', 'Hot_Chocolate'].map(category => (
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
            <img src={product.image} alt={product.name} className="coffee-img" />
            <p className='title'>{product.name}</p>
            <span className='price'>R{product.price.toFixed(2)}</span>
            <button className='add-btn' onClick={() => handleAdd(product.id)}>+</button>
          </div>
        ))}
      </section>

      {cartVisible && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setCartVisible(false)}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
};

export default HomeScreen;
