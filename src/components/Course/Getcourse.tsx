import React, { useState } from 'react';
import Popup from './Popup';
import Getcs from '../../components/cards/Getcs'
 
function Getcourse() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
  <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {isOpen && <Popup
      content={<>
        <b>Get Courses</b>
        <p>Please share your details if you interested in receiving the learning metarial to help you with the weaknesses in your bussiness or business idea</p>
        <Getcs/>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Getcourse;