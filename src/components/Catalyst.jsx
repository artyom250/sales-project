import React from 'react';
import "../styles/Catalyst.css";

import { BiSolidRocket } from "react-icons/bi";

function Catalyst() {
  return (
    <div className='Catalyst' id='about'>
        <div className="auto">
            <div className='block-heading'>
                <p className="block-head">STRATEGIC <span>SALES GROWTH</span> CATALYST</p>
                <p className="block-desc">By seamlessly integrating data-driven insights, market intelligence, and a deep understanding of your business, we propel your sales to new heights.</p>
            </div>
            <div className="grid">
                <div className='g-1'>
                    <div className='grid-text'>
                        <i><BiSolidRocket /></i>
                        <p className="grid-head">FUELING PROGRESS WITH A STRATEGIC FOUNDATION FOR GROWTH</p>
                        <p className="grid-desc">As a dynamic and forward-thinking powerhouse, we specialize in meticulously crafting innovative strategies that transcend conventional norms. Our commitment lies not only in meeting immediate sales objectives but in strategically positioning businesses for sustained success in the ever-evolving market landscape.</p>
                    </div>
                    <div className='grid-img'> 
                        <img src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="catalyst" />
                    </div>
                </div>
                <div className='g-2'>
                    <div className='grid-img'> 
                        <img src="https://images.unsplash.com/photo-1659782682835-bf57d0f0bee4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="catalyst" />
                    </div>
                    <div className='grid-text'>
                        <p className="grid-head">ILLUMINATING PATHWAYS FOR BUSINESS TRIUMPHS</p>
                        <p className="grid-desc">We craft success through strategies integrating data-driven insights and deep understanding of each client's unique business landscape.</p>
                    </div>
                </div>
                <div className='g-3'>
                    <div className='grid-img'> 
                        <img src="https://images.unsplash.com/photo-1669236712949-b58f9758898d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="catalyst" />
                    </div>
                    <div className='grid-text'>
                        <p className="grid-head">ELEVATING ACHIEVEMENTS THROUGH COLLABORATION</p>
                        <p className="grid-desc">We don't just work for our clients, we work with them. We thrive on collaboration, building strong partnerships to understand each business's nuances.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catalyst