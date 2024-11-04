import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';
import splash from './assets/splash.png'

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleDiveIn = () => {
    navigate('/home'); 
  };

  return (
    <div className="splash-container">
      <img src={splash} alt="Coffee Splash" className="splash-image" />
      <h2 className='heading'>Fuel your day</h2>
      <p className='message'>Get the cup filled with your choice to stay focused and awake.</p>
      <button className="start-button" onClick={handleDiveIn}>Dive In</button>
    </div>
  );
};

export default SplashScreen;
