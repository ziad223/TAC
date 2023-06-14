import React from 'react';
import './Lasted-articles.css';
import lasted1 from '../../../images/lasted-articles1.png';
import lasted2 from '../../../images/lasted-articles2.png';
import avatar2 from '../../../images/Avatar 2.png';
import avatar3 from '../../../images/Avatar 3.png';

const LastedArticles = () => {
  return (
    <div className='latest-articles'>
    <div className="left-feature">
     <img className='feature-img' src={lasted1} alt="" />

     <div className="feature-buttons">
        <button className='remote-btn'>CONTRACTORS</button>
        <button className='date-btn'>MARCH 21, 2022</button>
     </div>
    <p className='que-section'>How to Set Up as an Independent Contractor in Germany</p>

<div className="avatar-section">
<img className='avatar-img' src={avatar2} alt="" />
<p>Matt Valdes</p>
<h4>5 min read</h4>
</div>
     </div>
     <div className="left-feature">
     <img className='feature-img' src={lasted2} alt="" />

     <div className="feature-buttons">
        <button className='remote-btn'>CONTRACTORS</button>
        <button className='date-btn'>MARCH 21, 2022</button>
     </div>
    <p className='que-section'>10 Countries That Offer Remote Work Visas in 2022</p>

<div className="avatar-section">
<img className='avatar-img' src={avatar3} alt="" />
<p>Jonathan Alfariz</p>
<h4>5 min read</h4>
</div>
     </div>
    </div>
  )
}

export default LastedArticles