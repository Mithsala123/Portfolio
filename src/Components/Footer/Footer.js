import React from 'react';
import './Footer.css';
import logo from '../../Image/logo.jpg';
import { FaUser, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt="logo" clssName="logo"/>
          <p>I'm a Front-End Developer passionate about building modern and user-friendly web applications.</p>
        </div>

        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <FaUser className='user-icon' />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className='footer-button'>Subscribe</button>
        </div>
      </div>

      <div className="footer-socials">
        <a href="https://www.facebook.com/piyumi.mithsala" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/piyumi-mithsala-59612a237/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/Mithsala123" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        
      </div>

      <hr className='footer-divider' />

      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2023 Piyumi. All rights reserved.</p>
        <p className='footer-bottom-center'>Terms of Service | Privacy Policy</p>
        <p className='footer-bottom-right'>Contact me: piyumisudusinghe02@gmail.com</p>
      </div>
    </div>
  );
}
