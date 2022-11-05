import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenuIcon = ({link, icon, quantity}) => {
  return (
   
    <NavLink className=" __btn-background" to={link} end>
    
        <span className=" badge rounded-pill bg-theme">{quantity}</span>
      
        <i className={icon}></i>


    
      
    </NavLink>
  
  )
}

export default MainMenuIcon