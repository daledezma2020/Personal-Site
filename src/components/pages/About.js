import React from 'react';
import '../../App.css';
import './About.css';

function About() {
  return (
    <>
    <div className = 'aboutBody'>
      <h1>
        About me
      </h1>
      <div className = "socialGrid">
        <a href="https://www.instagram.com/danlede/" target="_blank" rel="noreferrer"> <i class="fa-brands fa-instagram"></i> </a>
        <img src = '/images/Madrid_colors.JPG' alt = "Me in high school!" className = 'profilePic'/>
        <a href="https://github.com/daledezma2020" target="_blank" rel="noreferrer"> <i className="fa-brands fa-square-github"></i> </a>
      </div>
      <p>
      Starting out with technology at a young age, I built a computer with the help of my dad at 11 years old and from there my interest in technology only grew. 
      Copying code from Youtube tutorials as a 12 year old made me feel like I was destined to design the next big video game title in a matter of years before finally realizing
       in high school it would take a lot of hard work to get to where I wanted to be. In college, though still fun, programming has become hard work and as a result I've picked 
       up a hobby in music to supplement this. Now, having been playing guitar, learning music theory and studying computer science over the past 3 years, I am certain 
       I want to incorporate my creative thinking from music into my software development work one way or another.
      </p>
      <p>
      Now as I approach the end of my undergraduate studies, I am hoping to work as a junior developer at a company that 
      matches the skills I have to offer. I am currently very interested in web development. In two very recent endeavours
      I began teaching myself React.js and spent a summer using Vue.js alongside several aws services to develop web apps at
      a web consulting firm.

      </p>
      
    </div>
    </>
  );
}

export default About; 