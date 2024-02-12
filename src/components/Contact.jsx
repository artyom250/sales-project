import React from 'react';
import "../styles/Contact.css";

import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

function Contact() {
  return (
    <div className='Catalyst' id='contact'>
        <div className="auto">
            <div className='block-heading'>
                <p className="block-head"><span>LET'S CONNECT</span> AND IGNITE SUCCESS</p>
                <p className="block-desc">Ready to take the next step? Contact us today to explore how our innovative strategies can propel your business forward. Our team is here to turn your vision into a reality.</p>
            </div>
            <div className="contact">
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='_blank'>
                    <div className='contact-option'>
                        <center><i><BiSolidEnvelope /></i></center>
                        <center><p className="contact-head">DROP US A LINE</p></center>
                        <center><p className="contact-desc">Reach out and let's begin the dialogue</p></center>
                    </div>
                </a>
                <a href="https://calendly.com/" target='_blank'>
                    <div className='contact-option'>
                        <center><i><BiSolidPhoneCall  /></i></center>
                        <center><p className="contact-head">BOOK A CALL</p></center>
                        <center><p className="contact-desc">Schedule consultation in our Calendly</p></center>
                    </div>
                </a>
                <div className='contact-option'>
                    <p className="contact-head">CONNECT WITH EASE</p>
                    <p className="contact-desc">Your inquiries, ideas, and collaboration opportunities are just a click away. Let's start the conversation.</p>
                    <form>
                        <div>
                            <p>Name</p>
                            <input type="text" placeholder='John Anderson' required />
                        </div>
                        <div>
                            <p>Email Address</p>
                            <input type="email" placeholder='john.anderson@gmail.com' required />
                        </div>
                        <div>
                            <p>Question</p>
                            <input type="text" placeholder='How can we help you?' required />
                        </div>
                        <button type="submit">Send a Question</button>
                    </form>
                </div>
                <div className='contact-img'>
                    <img src="https://images.unsplash.com/photo-1678384841436-26af8d484106?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact