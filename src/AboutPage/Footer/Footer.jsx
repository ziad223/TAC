import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import {AiOutlineInstagram , AiFillLinkedin , AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
     <div className="container">
        <div className="footer-content-up">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="links">
                <ul>
                    <li className='link-item active'> How It Works</li>
                    <li className='link-item'> <a href=""> Hire Employees</a></li>
                    <li className='link-item'> <a href=""> Hire Contractors</a></li>
                    <li className='link-item'> <a href=""> Global Payroll</a></li>
                    <li className='link-item '> <a href=""> Integrations</a></li>
                </ul>
            </div>
           <div className="links">
                <ul>
                    <li className='link-item active'> <a href=""></a> Company</li>
                    <li className='link-item'> <a href=""> About </a></li>
                    <li className='link-item'> <a href=""> Contact Us </a></li>
                    <li className='link-item'> <a href="">Contries </a></li>
                    <li className='link-item'> <a href=""> Careers </a></li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li className='link-item active'>Solutions</li>
                    <li className='link-item'> <a href=""> Compliances </a></li>
                    <li className='link-item'> <a href=""> Payments </a></li>
                    <li className='link-item'> <a href=""> Taxes </a></li>
                    <li className='link-item'> <a href=""> Enterprises </a></li>
                </ul>
            </div>
            <div className="links">
                <ul>
                    <li className='link-item active'> Resources</li>
                    <li className='link-item'> <a href=""> FAQ </a></li>
                    <li className='link-item'> <a href=""> Blog </a></li>
                    <li className='link-item'> <a href=""> Open API</a></li>
                    <li className='link-item'> <a href=""> Guide </a></li>
                </ul>
            </div>
        </div>
        <div className="footer-content-down">
            <div className="left-section">
                <p>©2022. All Rights Reserved. <span> Privacy Policy </span> <span  >Terms of Service</span> </p>
                
                
            </div>
            <div className="right-section">
                <div>
                    <AiOutlineInstagram className='footer-icon'/>
                </div>
                <div className='footer-icon'>
                <FaFacebookF />
                </div>
                <div  className='footer-icon'>
                <AiFillLinkedin/>
                </div>
                <div  className='footer-icon'>
                <AiOutlineTwitter/>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer