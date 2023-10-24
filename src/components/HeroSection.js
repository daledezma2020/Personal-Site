import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
      <div className = "topSection">
        <div className = "leftHalf">
          <div className = "center-box">
          <h1>Welcome!</h1>
          <p>Welcome to my website, a demonstration and showcase of my skills, achievements and hobbies.</p>
            <div className="hero-btns">
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
        </div>
        <div className = "rightHalf">
          <img src = "/images/Chinatown_portrait.jpeg" className = "showCase" alt = "showcase"/>
        </div>
      </div>
      <div className = "bottomSection">
        <div className = "leftHalf">
          <div className = "textStrip">
            <p>
            Currently I am seeking employment as a new graduate software developer. 
            I am really interested in full stack development, however after having 
            taken a wide variety of classes at the University of Rochester in various 
            languages of low and high level, I know that I can get important skills 
            from almost any sort of coding opportunity.
            </p>
          </div>
        </div>
        <div className = "rightHalf">

        </div>
      </div>
    </div>
  )
}

export default HeroSection
