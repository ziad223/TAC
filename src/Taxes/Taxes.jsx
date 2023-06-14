import React from 'react';
import './Taxes.css';
import {AiOutlineSearch} from 'react-icons/ai'

const Taxes = () => {
  return (
    <div className='taxes'>
     <div className="container">
        <div className="generals">

            <div className="general">
                <h3>1 General</h3>
                    <span className="progress active"></span>
              </div>

              <div className="general">
                <h3>2 Federal</h3>
                    <span className="progress"></span>
              </div>

              <div className="general">
                <h3>3 States (2 states)</h3>
                    <span className="progress"></span>
              </div>
        </div>

        <h2 className='taxes-title'>
            Tell Us Your general business info
        </h2>
        <p className='texes-paragraph'>
        Let's make dealing with your payroll taxes a snap. Tell us about your business so we can report your payroll wages and taxes. This is the info you used when you applied for a Federal EIN.
        </p>

     <form className="company-form">
     <label className='company-label'>Company Legal name</label><br />
     <input className='company-input' type="text" placeholder='TagTechnology' />
     <p>This may be different than a trade or doing business as (DBA) name. </p>
     <h3>Company Legal address</h3>

     <label className='street-label'>Street address</label><br />
<div className="relative">
<input type="text" className='icon-input' />
     <p className='search-absoulte'>
        <AiOutlineSearch className='search-icon'/>
        1433 7th St E APt 1
        </p>
</div>
     </form>

     <div className="inputs-group">
       <div>
       <label className='city-label'>City</label><br />
        <input type="text" className="city-input" placeholder='Saint Paul' />
       </div>
   
      <div>
      <label  className="size-label">Size</label><br />
       <input type="text" className="size-input" placeholder='MN'/>
       <select className='size-select'></select>
      </div>

     <div>
     <label className='zip-code-label'>ZIP Code</label><br />
       <input type='number' className='zip-code-input' placeholder='55106' />
     </div>
     </div>

     <div className="company-type">
        <label className="company-type-label">Company Type</label><br />
        <select className='company-type-select'>
            <option>other</option>
            <option>other</option>
            <option>other</option>
        </select>
     </div>
     </div>
    </div>
  )
}

export default Taxes