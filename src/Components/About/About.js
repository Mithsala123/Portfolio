import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id ="about"className='about'>
        <div className='about-title'>
            <div className='about-text'>
            <h1>About Me</h1>
            <p>
                I’m an enthusiastic and dedicated Quality Assurance Engineer passionate about crafting responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. 
                I focus on building clean, efficient, and user-friendly web experiences. At the same time, I’m exploring backend technologies like Node.js and Express to broaden my skills and understand the full web development process. 
                My goal is to create complete digital solutions while continuously improving my skills through hands-on projects and real-world challenges. through hands-on projects and real-world challenges.
            </p>
            </div>

            <div className="about-skills">
                <h2>Skills</h2>
                <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>react Js </p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>javaScript </p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Java </p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      
    </div>
  )
}
