import React from 'react';
import '../../App.css';
import './About.css';

function About() {
  return (
    <>
    <div className = 'aboutBody'>
    <img src = '/images/Senior.jpg' alt = "Me in high school!" className = 'profilePic'/>
      <h1>
        About me
      </h1>
      <p>
      Starting out with technology at a young age, I built a computer with the help of my dad at 11 years old and from there my interest in technology only grew. 
      Copying code from Youtube tutorials as a 12 year old made me feel like I was destined to design the next big video game title in a matter of years before finally realizing
       in high school it would take a lot of hard work to get to where I wanted to be. In college, though still fun, programming has become hard work and as a result I've picked 
       up a hobby in music to supplement this. Now, having been playing guitar, learning music theory and studying computer science over the past 3 years, I am certain 
       I want to incorporate my creative thinking from music into my software development work one way or another.
      </p>
      <p>
      Currently I am seeking employment in either research or internships involving software development. I am really interested in front end web development, however after 
      having taken a wide variety of classes at the University of Rochester in various languages of low and high level, I know that I can get important skills from almost any 
      sort of coding opportunity.
      </p>
      
    </div>
    </>
  );
}

export default About; 