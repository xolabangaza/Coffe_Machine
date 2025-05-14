import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
// import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import Cart from './CartModal.jsx';
// import DetailsScreen from './DetailsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/DetailsScreen" element={<DetailsScreen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
