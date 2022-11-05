import React from 'react'
import { NavLink } from 'react-router-dom'

const RedButton = ({link, text}) => {
  return (
    // <div><a href="#" className="mobile-red-button btn-mobile-border">SHOP NOW!</a> </div>

    <div className='buttons'>

  <NavLink className=" mobile-red-button btn-mobile-border " to={link}>  

   {text}
    </NavLink>
   </div>
  
  )
}



export default RedButton
