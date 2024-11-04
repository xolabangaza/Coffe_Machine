import React from 'react';
import './HomeScreen.css';
import Espresso from './assets/espresso.png'

const HomeScreen = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className='home-heading'>Find the best Coffee to your taste</h2>
        <input type="text" placeholder="Find your coffee..." className="search-input" />
      </header>
      <section className="coffee-categories">
        <button>Espresso</button>
        <button>Latte</button>
        <button>Cappuccino</button>
        <button>Hot Chocolate</button>
      </section>
      <section className="coffee-grid">
        {/* Example Coffee Item */}
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
      </section>
      <section className="coffee-grid">
        {/* Example Coffee Item */}
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p>Espresso</p>
          <span>$4.20</span>
          <button className='add-btn'>+</button>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
