import React from 'react';
import "../styles/Sidebar.css";

import { BiSolidXCircle } from "react-icons/bi";

function Sidebar({ click, effect, navbar }) {
  return (
    <div className={effect ? "Sidebar show" : "Sidebar"}>
        <div className="sidebar-top">
            <i onClick={click}><BiSolidXCircle /></i>
        </div>
        <ul>
            <li><a href="#about" onClick={click}>About Us</a></li>
            <li><a href="#services" onClick={click}>Services</a></li>
            <li><a href="#testimonials" onClick={click}>Testimonials</a></li>
            <li><a href="#faq" onClick={click}>FAQ</a></li>
            <li><a href="#contact" onClick={click}>Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Sidebar