import React from 'react';
import './TopNav.css';
import logo from '../../images/logo.png';
import {IoIosArrowDown} from 'react-icons/io'


const TopNav = () => {

  return (
    <div className='top-nav'>
     <div className="container">
     <div className="top-nav-content">
        <div className="left-content">
            <img src={logo} alt="" />
        </div>

        <div className="middle-content">
            <div className="nav-items">
                <ul>
                   <div><li className='work-nav'>How it works<IoIosArrowDown/></li></div>
                    <li  className='feature-nav'>Features <IoIosArrowDown/></li>
                    <li className='pricing-nav'>Pricing <IoIosArrowDown /></li>
                    <li className='resources-nav'>Resources<IoIosArrowDown/></li>
                </ul>
            </div>
        </div>

        <div className="right-content"> 
                <div className='right-content-buttons'>
                <button className = 'nav-log'>Log in</button>       
                <button className='nav-learn'>Learn More</button>
                </div>
            </div>
      </div>

   <ul className='work-menu'>
            <li className='work-item'>Work 1</li>
            <li className='work-item'>Work 2</li>
            <li className='work-item'>Work 3</li>
            <li className='work-item'>Work 4</li>
        </ul>

        <ul className='feature-menu'>
            <li className='feature-item'>Feature 1</li>
            <li className='feature-item'>Feature 2</li>
            <li className='feature-item'>Feature 3</li>
            <li className='feature-item'>Feature 4</li>
        </ul>

       <ul className='pricing-menu'>
            <li className='pricing-item'>Pricing 1</li>
            <li className='pricing-item'>Pricing 2</li>
            <li className='pricing-item'>Pricing 3</li>
            <li className='pricing-item'>Pricing 4</li>
        </ul>

      <ul className='resourse-menu'>
            <li className='resourse-item'>Resourse 1</li>
            <li className='resourse-item'>Resourse 2</li>
            <li className='resourse-item'>Resourse 3</li>
            <li className='resourse-item'>Resourse 4</li>
        </ul>
     </div>

    </div>
  )
}   

export default TopNav