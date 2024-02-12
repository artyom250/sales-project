import React from 'react';
import "../styles/Footer.css";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

function Footer() {
  return (
    <div className='Catalyst'>
        <div className="auto">
            <footer>
                <div className="f-1">
                    <a href="#" className="footer-logo">
                        <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fe67_Logo-Accent.svg" alt="forge" />
                    </a>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="socials">
                        <a href="https://www.facebook.com/" target='_blank'><i><BiLogoFacebookCircle /></i></a>
                        <a href="https://www.linkedin.com/" target='_blank'><i><BiLogoLinkedinSquare  /></i></a>
                        <a href="https://twitter.com/?lang=en" target='_blank'><i><BiLogoTwitter  /></i></a>
                    </div>
                </div>
                <div className="line"></div>
                <p>© Forge 2023, All Rights Reserved</p>
            </footer>
        </div>
    </div>
  )
}

export default Footer