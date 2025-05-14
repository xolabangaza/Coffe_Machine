import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import splash from './assets/splash.png'
import vector from './assets/Vector 1.png'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Hero = () => {
  const navigate = useNavigate();

  const handleDiveIn = () => {
    navigate('/home'); 
  };
  
  const styles = {
    container: {
      width: "40vw", 
      height: "100vh", 
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "stretch", 
      backgroundColor: "#f0f0f0", 
    },
    svg: {
      width: "100%", 
      height: "100%", 
    },
  };
  

  return (
    
    <div className="bigH">
    <section className="hero">
      <div className="hero-text">
        <p>Are you Thirsty?</p><br />
        <h1>Don't Wait!</h1><br />
        <p>Get the cup filled with your choice to stay focused and awake</p><br />
        {/* <button className="cta-button">Check Out Menu</button> */}
        <button className="cta-button" onClick={handleDiveIn}>Check Out The Menu</button>
      </div>
    </section>
    
      <div className="secH">
      <div className="hero-image">
         <img src={splash} alt="Coffee Splash" className="splash-image" />
      </div>
      </div>

{/* 
<div style={styles.container}>
      <svg
        width="40vw"
        height="100vh"
        viewBox="0 0 300 600"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.svg}
      >
        <path
          d="M0,0 Q150,300 0,600 L300,600 L300,0 Z"
          fill="rgba(252, 236, 207, 0.623)"
        />
      </svg>
    </div> */}
  

      </div>
  );
};

export default Hero;
