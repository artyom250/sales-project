import React from 'react';
import "../styles/Hero.css";

function Hero() {
  return (
    <div className='Hero'>
        <div>
            <center>
                <a href="#testimonials" className='others'>
                    <div>
                        <img src="./images/users/user1.jpg" alt="user" />
                        <img src="./images/users/user2.jpg" alt="user" />
                        <img src="./images/users/user3.jpg" alt="user" />
                    </div>
                    <span>What Others Say About Us</span>
                </a>
            </center>
            <center><p className="heading"><span>GROW SALES</span> WITH OUR STRATEGY FIRST APPROACH</p></center>
            <center><p className="desc">Forge's sales and marketing solutions are strategically assigned each month to adapt quickly and hit your goals.</p></center>
            <center>
                <a href="https://calendly.com/" target='_blank' className='link'>
                    <span>Book a Free Consultation</span>
                </a>
            </center>
        </div>
    </div>
  )
}

export default Hero