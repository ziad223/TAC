import React from 'react';
import two from '../../images/two.png';
import creative from '../../images/create invoice.png';
import group from '../../images/Group 39802.png';

const EasierSection = () => {
  return (
    <div className='eaiser-section'>
      <div className="eaiser-section-head">
 <h2><span>Easier</span> Global  Payouts</h2>
 <img src={two} alt="number-two" />
 </div>
    <p>
    We handle all the complexity of running payroll, managing local taxes,
handling time off, and more.
    </p>
    <div className="imgs">
        <img src={creative} alt="creative" />
        <img src={group} alt="Group" />
    </div>
    </div>
  )
}

export default EasierSection
