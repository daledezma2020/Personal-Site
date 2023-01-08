import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
      <div className="fullscreen-video-wrap" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <video src="/videos/DanClass.mp4" autoPlay loop muted />
      </div>
      <h1>Dan Ledezma</h1>
      <p>Welcome to my website</p>
      <div className="hero-btns">
        <Button id = 'Projects-Button'
        className = 'btns' 
        buttonStyle='btn--outline'
        buttonSize ='btn--large'
        buttonLink = '/Projects'
        >
            Projects <i className="fa-solid fa-folder"></i>
        </Button>
        <Button 
        className = 'btns' 
        buttonStyle='btn--primary'
        buttonSize ='btn--large'
        ebLink = 'https://github.com/daledezma2020'
        >
            Github <i className="fa-brands fa-github"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
