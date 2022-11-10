import React from 'react'
import { NavLink } from 'react-router-dom'






const CustomerServiceIcons = (link, customerImage)  => {
  return (
    <div className="item"> <NavLink to={link} img src={customerImage} ></NavLink>
 
    </div>
  )

}

export default CustomerServiceIcons
