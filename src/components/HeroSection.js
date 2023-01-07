import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
      <video src="/videos/DanClass.mp4" autoPlay loop muted />
      <h1>Dan Ledezma</h1>
      <p>Welcome to my website</p>
      <div className="hero-btns">
        <Button 
        className = 'btns' 
        buttonStyle='btn--outline'
        buttonSize ='btn--large'
        buttonLink = '/Projects'
        >
            Projects <i class="fa-solid fa-folder"></i>
        </Button>
        <Button 
        className = 'btns' 
        buttonStyle='btn--primary'
        buttonSize ='btn--large'
        buttonLink = '/OtherWork'
        >
            Other Work
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
