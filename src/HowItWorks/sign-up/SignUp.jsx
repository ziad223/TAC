import React from 'react';
import logo from '../../images/logo.png';
import one from '../../images/one.png';



const SignUp = () => {
  return (
    <div className='sign-up'>
 <div className="sign-up-head">
 <h2 style={{color : '#3981f7'}}> <span style = {{color : '#000'}}>Sign Up for</span> Free</h2>
 <img src={one} alt="number-one" />
 </div>
    <p>
    Create your Payrole account, fast and easy with just one login.
    </p>

    <form>
    <div className="form-content">
    <img src={logo} alt="" />
        <label>Username :</label>
        <input type="text" placeholder='Enter Your Username' />
        <label>Password :</label>
        <input type="password" placeholder='Enter Your Password ' />
        <button className='sign-button'>Create Account</button>
    </div>

    </form>
    </div>
  )
}

export default SignUp
