import React from 'react';
import './Mission.css';
import illistration from '../../images/Illustration.png';
import missionIcon from '../../images/mission-icon.png';

const Mission = () => {
  return (
    <div className='mission'>
   <div className="container">
   <div className="miision-top-content">
     <h2>Our <br /> <span>Mission</span></h2>    

   <p>
   Open up the vast of the world for every person, business <br />
   and country. We envision a world where every person <br />
   and business truly belongs in the global market.
   </p>

 </div>

 <div className="miision-middle-content">
   <img src={illistration} alt="" />
 </div>

 <div className="miision-bottom-content">
    <img src={missionIcon} alt="" />
    <p>
    We are on a mission to revolutionize how companies find, <br />
    employ and grow teams internationally.   
    </p>
 </div>

   </div>
    </div>
  )
}

export default Mission