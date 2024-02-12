import React from 'react';
import "../styles/Navbar.css";

import { BiMenu } from "react-icons/bi";

function Navbar({ click, navbar }) {  
  return (
    <div className={navbar ? "Navbar active" : "Navbar"}>
      <div className="auto">
        <nav className={navbar ? "navbar active" : "navbar"}>
            <a href="#" className="logo">
                <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fe67_Logo-Accent.svg" alt="forge" />
            </a>
            <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className='nav-right'>
              <a href="https://calendly.com/" target='_blank' className='touch'>Get in Touch</a>
              <i className='toggle' onClick={click}><BiMenu /></i>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar