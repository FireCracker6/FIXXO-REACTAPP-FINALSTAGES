import React from 'react'




import ContactFormsSection from './ContactFormsSection'
import './sections/MapSection'
import MapSection2 from './sections/MapSection'
import BreadCrumbSections from '../components/sections/BreadCrumbsSections'


function Contacts() {
  return (
    <>

 <div className="container" style={{height: "100px"}}></div>
<BreadCrumbSections currentPage="Contacts"/>
<MapSection2 />
    
{/*  Form section  */}
<ContactFormsSection />
    
    </>
  )
}

export default Contacts