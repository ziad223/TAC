import React from 'react';
import './Team.css';
import team1 from '../../images/team1.png';
import team2 from '../../images/team2.png';
import team3 from '../../images/team3.png';
import team4 from '../../images/team4.png';
import team5 from '../../images/team5.png';
import team6 from '../../images/team6.png';
import team7 from '../../images/team7.png';
import team8 from '../../images/team8.png';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

const Team = () => {
  return (
    <div className='team-section'>
   <div className="container">
   <h2>Meet Our Team</h2>
     
     <ul className="team-list">
        <li className="team-item active">All</li>
        <li className="team-item">Leadership</li>
        <li className="team-item">Developers</li>
        <li className="team-item">Designers</li>
        <li className="team-item">Customers</li>
        <li className="team-item">Brand</li>
        <li className="team-item">Product</li>
     </ul>
    </div>

    <div className="teams">

        <div className="team">
            <img src={team1} alt="" />
            <h2>Abram Curtis</h2>
            <p>Co-founder & CEO</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
        <div>
        <BsTwitter className='team-icon' />
        </div>
            </div>
        </div>
        <div className="team">
            <img src={team2} alt="" />
            <h2>Chance Dorwart</h2>
            <p>Co-founder & COO</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>
        <div className="team">
            <img src={team3} alt="" />
            <h2>Roger Rosser</h2>
            <p>VP of Engineering</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>
        <div className="team">
            <img src={team4} alt="" />
            <h2>Rayna Schleifer</h2>
            <p>VP of Customer Success</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>
        <div className="team">
            <img src={team5} alt="" />
            <h2>Paityn Levin</h2>
            <p>Product Designer</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>
        <div className="team">
            <img src={team6} alt="" />
            <h2>Marilyn Philips</h2>
            <p>Customer Champion</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>
        <div className="team">
            <img src={team7} alt="" />
            <h2>Madelyn George</h2>
            <p>Product Designer</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>
        <div className="team">
            <img src={team8} alt="" />
            <h2>Jaylon Lipshutz</h2>
            <p>Developer</p>
            <div className="icon">
          <div>
          <FaLinkedinIn className='team-icon' />
          </div>
          <div>
          <BsTwitter className='team-icon' />
          </div>
            </div>
        </div>

        </div>     
    </div>
  )
}

export default Team