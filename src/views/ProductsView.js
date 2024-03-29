import React, { useEffect } from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import ProductGridSection from '../components/sections/ProductGridSection'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'

import { useProductContext } from '../components/contexts/ProductContext'

export const ProductsView = ({title }) => {

  window.top.document.title = "Products | Fixxo."
  const {products, getProducts} = useProductContext()

  useEffect(() => {
    getProducts()
  },[getProducts])
  

  return (
    <div>
    <NavbarGlobal />
 
    <div className="container" style={{height: "100px"}}></div>
<BreadCrumbsSections currentPage="Products"/>
 
   <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'></div>


          
           <ProductGridSection title="Products" items={products} /> 

           
        
              
         
   <div style={{"height": "750px"}}></div> 
   <Footer />
   </div>
  )
}
