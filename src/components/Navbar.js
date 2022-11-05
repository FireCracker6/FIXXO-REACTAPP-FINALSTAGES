import React from 'react'
import Logo from './assets/images/logo.svg'
import NavBarMain from './NavBarMain'
import CustomerLinks from './CustomerLinks'
import WhiteCircleButton from './WhiteCircleButton';
import MobileDropdown from './MobileDropdown';


function navbar() {
  return (
    <nav className="__navbar">
      <div className="container ">
        <div className='mobileDropDown'> <MobileDropdown /> </div>
   <a href="#"><img src={Logo} alt="Fixxo." /></a> 
    <div className='__navbarmain'><NavBarMain /></div>
   <div> <CustomerLinks /></div>
      
      </div>

    </nav>
  )
}

export default navbar