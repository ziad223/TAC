import React from 'react';
import company1 from '../../images/Company 1.png';
import company2 from '../../images/Company 2.png';
import company3 from '../../images/Company 3.png';
import company4 from '../../images/Company 4.png';

const AboveFold = () => {
  return (
    <>
      <h2 className="how-it-work-title">
      Here s How Payrole <span>Works</span>
      </h2>
      <p>
      Payrole is the easiest way for remote companies to hire <br />
      employees and freelancers from overseas.
      </p>
      <div className="how-it-work-buttons">
        <button className="get-started">Get Started</button>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="companies">
        <img src={company1} alt="Company1" />
        <img src={company2} alt="Company2" />
        <img src={company3} alt="Company3" />
        <img src={company4} alt="Company4" />
      </div>
    </>
  )
}

export default AboveFold
