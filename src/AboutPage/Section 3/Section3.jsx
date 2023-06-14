import React from 'react';
import './Section3.css';
import img1 from '../../images/kraken.png';
import img2 from '../../images/wyre.png';
import img3 from '../../images/robinhood.png';
import img4 from '../../images/webull.png';

const Section3 = () => {
  return (
    <div className='section-3'>
    <div className="container">
        <div className="top-content">
        <h2>Our Investors</h2>
        <p>We are proud to be supported by investors who helped build our vision.</p>
        </div>
        <div className="bottom-content">
            <div className="imgs">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section3