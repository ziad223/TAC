import React from 'react';
import './Popular-articles.css';
import popular1 from '../../../images/popular1.png';
import popular2 from '../../../images/popular2.png';
import popular3 from '../../../images/popular3.png';
import popular4 from '../../../images/popular4.png';
import popular5 from '../../../images/popular5.png';
import popular6 from '../../../images/popular6.png';
import avatar from '../../../images/Avatar.png';
import avatar3 from '../../../images/Avatar 3.png';



const PopularArticles = () => {
  return (
    <div className="most-popular-articles">

    <div className="most-popular-card">
     <img src={popular1} alt="" />
     <div className="popular-butons">
     <button className='contractors-btn'>CONTRACTORS</button>
     <button className='date-btn'>MARCH 21, 2022</button>
     </div>
     <p>
     How to Register as a Sole
     Proprietorship in France
     </p>
 
     <div className="avatar-section">
 <img className='avatar-img' src={avatar} alt="" />
 <p>Mona Moura</p>
 <h4>5 min read</h4>
 </div>
    </div>
 
    <div className="most-popular-card">
     <img src={popular2} alt="" />
     <div className="popular-butons">
     <button className='contractors-btn'>REMOTE WORK</button>
     <button className='date-btn'>MARCH 21, 2022</button>
     </div>
     <p>
     Employee Benefits in Indonesia: All
      You Need to Know
     </p>
 
     <div className="avatar-section">
 <img className='avatar-img' src={avatar} alt="" />
 <p>Mona Moura</p>
 <h4>5 min read</h4>
 </div>
    </div>
 
    <div className="most-popular-card">
     <img src={popular3} alt="" />
     <div className="popular-butons">
     <button className='contractors-btn'>PAYROLL</button>
     <button className='date-btn'>MARCH 21, 2022</button>
     </div>
     <p>
     How to Pay International <br /> Employees
     </p>
 
     <div className="avatar-section">
 <img className='avatar-img' src={avatar} alt="" />
 <p>Mona Moura</p>
 <h4>5 min read</h4>
 </div>
    </div>
 
    <div className="most-popular-card">
     <img src={popular4} alt="" />
     <div className="popular-butons">
     <button className='contractors-btn'>CONTRACTORS</button>
     <button className='date-btn'>MARCH 21, 2022</button>
     </div>
     <p>
     The Future of Remote <br /> Working
     </p>
 
     <div className="avatar-section">
 <img className='avatar-img' src={avatar3} alt="" />
 <p>Andre Yamaguchi</p>
 <h4>5 min read</h4>
 </div>
    </div>
 
    <div className="most-popular-card">
     <img src={popular5} alt="" />
     <div className="popular-butons">
     <button className='contractors-btn'>CONTRACTORS</button>
     <button className='date-btn'>MARCH 21, 2022</button>
     </div>
     <p>
     Remote Work Cybersecurity: Data
     Security and Privacy Tips
     </p>
 
     <div className="avatar-section">
 <img className='avatar-img' src={avatar} alt="" />
 <p>Natalia Queen</p>
 <h4>5 min read</h4>
 </div>
    </div>
 
    <div className="most-popular-card">
     <img src={popular6} alt="" />
     <div className="popular-butons">
     <button className='contractors-btn'>REMOTE WORK</button>
     <button className='date-btn'>MARCH 21, 2022</button>
     </div>
     <p>
     How to Register as a Sole
     Proprietorship in France
     </p>
 
     <div className="avatar-section">
 <img className='avatar-img' src={avatar} alt="" />
 <p>Mona Moura</p>
 <h4>5 min read</h4>
 </div>
    </div>
 
    </div>
  )
}

export default PopularArticles