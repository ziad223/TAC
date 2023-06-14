import React from 'react';
import './HowItWorks.css';
import AboveFold from './Above-The-Fold/Above-The-Fold';
import SignUp from './sign-up/SignUp';
import EasierSection from './Easier-Section/EasierSection';
import FocusSection from './Focus-Section/FocusSection';
import CTA from '../AboutPage/CTA/CTA';

const HowItWorks = () => {
  return (
    <div className='how-it-work'>
    <div className="container">
    <AboveFold/>
    <SignUp/>
    <EasierSection/>
    <FocusSection/>
    <CTA/>  
    </div>
    </div>
  )
}

export default HowItWorks
