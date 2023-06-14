import React from 'react';
import './Featured-articles.css';
import feature1 from '../../../images/feature1.png';
import subscripeIcon from '../../../images/subscripe-icon.png';
import avatar from '../../../images/Avatar.png';


const FeaturedAarticles = () => {
  return (
    <div className='featured-articles'>
     <div className="left-feature">
     <img className='feature-img' src={feature1} alt="" />

     <div className="feature-buttons">
        <button className='remote-btn'>REMOTE WORK</button>
        <button className='date-btn'>MARCH 21, 2022</button>
     </div>
    <p className='que-section'>Employee Benefits in Denmark: All You Need to Know</p>

<div className="avatar-section">
<img className='avatar-img' src={avatar} alt="" />
<p>Ina Takahashi</p>
<h4>5 min read</h4>
</div>
     </div>

     <div className="right-feature">
        <img src={subscripeIcon} alt="" />
        <h3>Subscribe to keep <br /> to date.</h3>
        <input type="text" placeholder='Enter your email address' />
        <button className='subscripe-btn'>Subscribe</button>
        </div>

    </div>
  )
}

export default FeaturedAarticles