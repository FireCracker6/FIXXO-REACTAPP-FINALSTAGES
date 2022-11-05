import React, { useContext, useState, useEffect } from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import ProductGridSection from '../components/sections/ProductGridSection'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import {ProductsContext} from '../components/contexts/contexts'

export const ProductsView = ({title }) => {
  
  const productContext = useContext(ProductsContext)

  const [thisProduct, SetThisProduct] = useState({})

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/`) 
        SetThisProduct(await result.json())
    }
    fetchData()
}, [])

  return (
    <div>
    <NavbarGlobal />
 
    <div className="container" style={{height: "100px"}}></div>
<BreadCrumbsSections currentPage="Products"/>
 
   <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'></div>


          
           <ProductGridSection title="Products" items={productContext} /> 

           
        
              
         
   <div style={{"height": "750px"}}></div> 
   <Footer />
   </div>
  )
}
