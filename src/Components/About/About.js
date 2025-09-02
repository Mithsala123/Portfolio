import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id ="about"className='about'>
        <div className='about-title'>
            <div className='about-text'>
            <h1>About Me</h1>
            <p>
                I am an enthusiastic and dedicated Quality Assurance Engineer with a strong passion for ensuring software quality through both manual and automation testing. My focus is on designing effective test cases, identifying defects, and improving user experience by delivering reliable, high-performing applications.
                My goal is to contribute to building complete, user-friendly digital solutions while continuously sharpening my QA skills through hands-on projects and real-world challenges.
            </p>
            </div>

            <div className="about-skills">
                <h2>Skills</h2>
                <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React </p><hr style={{width:"60%"}} /></div>
                
                <div className="about-skill"><p>Java </p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      
    </div>
  )
}
