import React from 'react'
import { Navbar } from 'react-bootstrap'
import Contacts from '../components/Contacts';
import Footer from '../components/Footer'
import NavbarGlobal from '../components/NavbarGlobal';



function ContactsView() {

window.top.document.title = "Contacts | Fixxo."
  return (
    <div>
      <NavbarGlobal />
     
      <Navbar />

      <Contacts />

     <Footer />
    </div>
  )
}

export default ContactsView