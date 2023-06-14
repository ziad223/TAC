import React from 'react';
import three from '../../images/three.png';
import contracts from '../../images/Contracts.png';

const FocusSection = () => {
  return (
    <div className='focus-section'>
        <div className="focus-section-head">
 <h2>Focus on Your <br /> <span>Business</span></h2>
 <img src={three} alt="number-three" />
 </div>
    <p>
    With Payrole you can manage contract workers with ease, and get back
    to work.
    </p>
    <div className="imgs">
    <img src={contracts} alt="contracts" />
    </div>
    </div>
  )
}

export default FocusSection
