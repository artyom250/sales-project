import React from 'react';
import "../styles/Services.css";

function Services() {
  return (
    <div className='Catalyst' id='services'>
        <div className="auto">
            <div>
                <center><p className="block-head">INNOVATIVE <span>‍SOLUTIONS</span> HUB</p></center>
                <center><p className="block-desc">From strategic consulting to seamless execution, we're your partners in unlocking unparalleled success. Elevate your business experience with our dynamic services.</p></center>
            </div>
            <div className="flex">
                <div className="service">
                    <div className="service-img">
                        <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fe9f_Rocket-p-500.png" alt="service" />
                    </div>
                    <center><p className="service-head">STRATEGIC INSIGHT <br />CONSULTING</p></center>
                    <center><p className="service-desc">Our seasoned experts analyze market trends, assess competition, and delve into your business dynamics to provide actionable insights.</p></center>
                </div>
                <div className="service">
                    <div className="service-img">
                        <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fe9d_Trophy-p-500.png" alt="service" />
                    </div>
                    <center><p className="service-head">DYNAMIC MARKETING <br />SOLUTIONS</p></center>
                    <center><p className="service-desc">We elevate your brand with engaging digital campaigns, tailored content, and innovative strategies to boost engagement and maximize reach.</p></center>
                </div>
                <div className="service">
                    <div className="service-img">
                        <img src="https://assets-global.website-files.com/657ae5887e3fd0deaad2fe44/657ae5887e3fd0deaad2fe9e_Settings-p-500.png" alt="service" />
                    </div>
                    <center><p className="service-head">AGILE TECHNOLOGY <br />INTEGRATION</p></center>
                    <center><p className="service-desc">Stay ahead with cutting-edge tech. From cloud solutions to AI-driven automation, empowering your business in the digital landscape.</p></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services