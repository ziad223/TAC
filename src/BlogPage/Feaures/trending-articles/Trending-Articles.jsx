import React from 'react';
import './Trending-Articles.css';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import img4 from '../../../images/img4.png';
import img5 from '../../../images/img5.png';
import trending from '../../../images/trending.png';
import avatar2 from '../../../images/Avatar 2.png';


const TrendingArticles = () => {
  return (
    <div className='trending-articles'>
    <div className="left-feature">
      <img className='feature-img' src={trending} alt="" />
 
      <div className="feature-buttons">
         <button className='remote-btn'>CONTRACTORS</button>
         <button className='date-btn'>MARCH 21, 2022</button>
      </div>
     <p className='que-section'>What is SWIFT and How Does It Work?</p>
 
 <div className="avatar-section">
 <img className='avatar-img' src={avatar2} alt="" />
 <p>Matt Valdes</p>
 <h4>5 min read</h4>
 </div>
      </div>
 
       <div className="right-feature-section">
 
        <div className="right-feature-part">
         <img src={img1} alt="" />
         <div className="info">
             <h4>CONTRACTORS</h4>
             <p>
             How to Register as a Sole Proprietorship in
            France
             </p>
         </div>
        </div>
        
        <div className="right-feature-part">
         <img src={img2} alt="" />
         <div className="info">
             <h4>CONTRACTORS</h4>
             <p>
             Synchronous Vs. Asynchronous
             Communication: All You Need to Know
             </p>
         </div>
        </div>
        
        <div className="right-feature-part">
         <img src={img3} alt="" />
         <div className="info">
             <h4>CONTRACTORS</h4>
             <p>
             How to Set Up as an Independent
             Contractor In Netherlands
             </p>
         </div>
        </div>
        
        <div className="right-feature-part">
         <img src={img4} alt="" />
         <div className="info">
             <h4>PAYROLL</h4>
             <p>
             What is Accrued Payroll and Why You
             Should Track It
             </p>
         </div>
        </div>
        
        <div className="right-feature-part">
         <img src={img5} alt="" />
         <div className="info">
             <h4>LEGAL</h4>
             <p>
             What is a financial controller? The role &
             keys to effectiveness
             </p>
         </div>
        </div>
      </div>
      </div>
  )
}

export default TrendingArticles