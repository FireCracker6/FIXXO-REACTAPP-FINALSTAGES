import React from 'react'




import ContactFormsSection2 from './ContactFormsSection2'
import '../components/sections/MapSection2'
import MapSection2 from '../components/sections/MapSection2'
import BreadCrumbSections from '../components/sections/BreadCrumbsSections'


function Contacts() {
  return (
    <>

 <div className="container" style={{height: "100px"}}></div>
<BreadCrumbSections currentPage="Contacts"/>
<MapSection2 />
    
{/*  Form section  */}
<ContactFormsSection2 />
    
    </>
  )
}

export default Contacts