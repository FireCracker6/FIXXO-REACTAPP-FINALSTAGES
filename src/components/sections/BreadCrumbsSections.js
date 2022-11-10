import React from 'react'

import metroHome from '../assets/images/icons/icon-metro-home.svg'
import { NavLink } from 'react-router-dom'


const BreadCrumbsSections = ({currentPage}) => {
  return (
    <>
    
    
      <section className="breadcrumbs-section">

        
    
   
        <div className="container">
            <div className="breadcrumbs">
                <ul className="breadcrumb">
                    <li>
                    
                        <NavLink to="/"><img src={metroHome} alt="home icon"/> Home</NavLink>
                        </li>
                     
                   
                    <li>{currentPage}</li>
                  </ul> 
             
            </div>
        </div>
    </section>
   
    </>
  )
}

export default BreadCrumbsSections