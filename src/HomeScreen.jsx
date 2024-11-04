import React from 'react';
import './HomeScreen.css';
import Espresso from './assets/espresso.png'
import Latte from './assets/Latte.png'

const HomeScreen = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className='home-heading'>Find the best Coffee to your taste</h2>
        <input type="text" placeholder="Find your coffee..." className="search-input" />
      </header>
      <section className="coffee-categories">
        <span className='categories'>Espresso</span>
        <span className='categories'>Latte</span>
        <span className='categories'>Cappuccino</span>
        <span className='categories'>Hot Chocolate</span>
      </section>
      <section className="coffee-grid">
        {/* Example Coffee Item */}
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div> 
        <div className="coffee-item">
          <img src={Latte} alt="Espresso" className="coffee-img latte" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Latte} alt="Espresso" className="coffee-img latte" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
      </section>
      <section className="coffee-grid">
        {/* Example Coffee Item */}
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Latte} alt="Espresso" className="coffee-img latte" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Espresso} alt="Espresso" className="coffee-img" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
        <div className="coffee-item">
          <img src={Latte} alt="Espresso" className="coffee-img latte" />
          <p className='title'>Espresso</p>
          <span className='price'>R4.20</span>
          <button className='add-btn'>+</button>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
