import React from 'react';
import "../styles/Banner.css";

function Banner() {
  return (
    <div className='Catalyst'>
        <div className="auto">
            <div className="Banner">
                <div className="b-1">
                    <center><a href="#faq" className="questions">Have Questions?</a></center>
                    <center><p className="block-head">EMPOWERING <span>SUCCESS</span> IN NUMBERS</p></center>
                    <center><p className="banner-desc">We redefine collaboration, innovation, and success. From our unwavering commitment to excellence to our dynamic approach that adapts to your unique needs, discover why working with us is not just a choice, it's a strategic investment in your unparalleled success.</p></center>
                    <center>
                        <a href="#contact" className='b-link'>
                            <span>Get in Touch</span>
                        </a>
                    </center>
                    <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fea1_Credit%20Card.webp" alt="banner" className="img1" />
                    <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fea0_Medal.webp" alt="banner" className="img2" />
                </div>
                <div className="b-2">
                    <div>
                        <p>97%</p>
                        <p>Satisfaction rate</p>
                    </div>
                    <div>
                        <p>50+</p>
                        <p>Delivered projects</p>
                    </div>
                    <div>
                        <p>10</p>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner