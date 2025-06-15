import React from 'react';
import my from '../../../Image/my.jpeg';
import './Hero.css';

export default function Hero() {
  return (
    <div id="home" className='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h2><span className='name.text'></span></h2> 
          <h1><span className='name'>I'm PIYUMI MITHSALA</span></h1>
          <p>I'm an undergraduate student.</p>
          <p>
           I’m an enthusiastic and dedicated Front-End Developer passionate about creating responsive and engaging user interfaces using HTML, CSS, JavaScript, and React.
           I love transforming design ideas into seamless, user-friendly web experiences. Continuously learning, I focus on improving my skills with modern front-end tools and frameworks to build performant and accessible websites. 
           My goal is to craft visually appealing and intuitive digital solutions that delight users and meet real-world needs.


          </p>
        </div>

        <div className='image-wrapper'>
          <img src={my} alt="My portrait" className='hero-img' />
        </div>
      </div>

        <div className="Details">
        <div className="hero-btns">
          <a
            href="/Piyumi-Mithsala-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Download My CV
          </a>
        </div>

        <div className='hero-btns' onClick={() => {
          const section = document.getElementById('MyProjects');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
          }}>View My Work</div>
      </div>
    </div>
  );
}
