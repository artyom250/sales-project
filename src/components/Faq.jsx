import React, { useState } from 'react';
import "../styles/Faq.css";

import { BiPlusCircle } from "react-icons/bi";

function Faq() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);

  const dropFunction = () => setDrop(!drop);
  const dropFunction2 = () => setDrop2(!drop2);
  const dropFunction3 = () => setDrop3(!drop3);
  const dropFunction4 = () => setDrop4(!drop4);
  const dropFunction5 = () => setDrop5(!drop5);

  return (
    <div className='Catalyst' id='faq'>
        <div>
            <center><p className="block-head">FREQUENTLY ASKED <span>QUESTIONS</span></p></center>
            <center><p className="block-desc">We address common queries, demystify intricacies, and provide insights to guide you through our services.</p></center>
        </div>
        <div className="asked">
          <div>
            <div className="question">
              <p>How can your strategies be customized for my needs?</p>
              <i onClick={dropFunction}><BiPlusCircle /></i>
            </div>
            <div className={drop ? "answer show" : "answer"}>
              <p>Our marketing strategies are meticulously tailored to suit the specific needs of your business. Through in-depth consultations and a thorough understanding of your objectives, we craft personalized approaches that align with your goals.</p>
            </div>
          </div>
          <div>
            <div className="question">
              <p>How can your strategies be customized for my needs?</p>
              <i onClick={dropFunction2}><BiPlusCircle /></i>
            </div>
            <div className={drop2 ? "answer show" : "answer"}>
              <p>Our creative campaigns stand out through a fusion of innovation and strategic brilliance. We don't just follow trends; we set them. Each campaign is meticulously crafted to tell a compelling story, creating an indelible mark on your audience and setting your brand apart in the competitive landscape.</p>
            </div>
          </div>
          <div>
            <div className="question">
              <p>How do you guarantee my message resonates on all channels?</p>
              <i onClick={dropFunction3}><BiPlusCircle /></i>
            </div>
            <div className={drop3 ? "answer show" : "answer"}>
              <p>We take a unified approach to multichannel marketing, ensuring seamless integration across platforms. By maintaining consistency in messaging and brand identity, we create a powerful and harmonized presence that resonates with your audience, regardless of the channel.</p>
            </div>
          </div>
          <div>
            <div className="question">
              <p>Can you explain the role of data intelligence in your process?</p>
              <i onClick={dropFunction4}><BiPlusCircle /></i>
            </div>
            <div className={drop4 ? "answer show" : "answer"}>
              <p>Data is the cornerstone of our decision-making process. We analyze key metrics and trends to inform our strategies, ensuring that every decision is backed by actionable insights. This empowers your business to make informed choices and stay agile in a dynamic market.</p>
            </div>
          </div>
          <div>
            <div className="question">
              <p>How do I get started with your services?</p>
              <i onClick={dropFunction5}><BiPlusCircle /></i>
            </div>
            <div className={drop5 ? "answer show" : "answer"}>
              <p>Getting started is easy! Simply reach out to our team, and we'll guide you through the onboarding process.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Faq