import React from 'react';
import './Above.css';
import {BsFillCameraFill} from 'react-icons/bs';
import {GiEarthAmerica} from 'react-icons/gi';
import {HiUser} from 'react-icons/hi';

const Above = () => {
  return (
    <div className='above'>
        <div className="container">
            <div className="above-content-up">
            <h2>
         We Are Building One <br /> Platform for All 
        <span> Payroll <br /> Things</span>
                </h2>

                <p>
                Payrole is innovative online platform to hire and pay <br />
                international employees and freelancers.
                </p>
            </div>

            <div className="above-content-down">
              <p>Let the numbers speak for themselves.</p>

              <div className="parts">

              <div className="part">
             <BsFillCameraFill className='above-icon'/>
             <div className="info">
                <h2>3.3M+</h2>
                <p>Income received</p>
             </div>

              </div>
              <div className="part">
             <GiEarthAmerica className='above-icon'/>
             <div className="info">
                <h2>150+</h2>
                <p>Countries supported</p>
             </div>

              </div>
              <div className="part">
             <HiUser className='above-icon'/>
             <div className="info">
                <h2>1.2M+</h2>
                <p>Users every month</p>
             </div>

              </div>
              </div>

            </div>     
        </div>
 </div>
  )
}

export default Above