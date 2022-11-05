import React from 'react'

import metroHome from '../assets/images/icons/icon-metro-home.svg'
import { NavLink } from 'react-router-dom'


const BreadCrumbsSections = ({currentPage}) => {
  return (
    <>
    
      {/*   Breadcrumbs section  */}
      <section className="breadcrumbs-section">

        
    
   
        <div className="container">
            <div className="breadcrumbs">
                <ul className="breadcrumb">
                    <li>
                    
                        <NavLink to="/"><img src={metroHome} /> Home</NavLink>
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