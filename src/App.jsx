// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/details" element={<DetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
