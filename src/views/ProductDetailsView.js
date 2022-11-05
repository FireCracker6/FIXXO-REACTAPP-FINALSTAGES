import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import TopBannerDiscount from '../components/TopBannerDiscount'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/ProductDetailsInfoGrid'
import { ProductDetailGalleryHeader } from '../components/ProductDetailGalleryHeader'
import {FeaturedProductsContext} from '../components/contexts/contexts'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




function ProductDetailsView() {
  const products = useContext(FeaturedProductsContext);
  const {id} = useParams()
 const [thisProduct, SetThisProduct] = useState({})



 

 useEffect(() => {
     const fetchData = async () => {
         const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
         SetThisProduct(await result.json())
     }
     fetchData()
 }, [])




  return (
    <div>
<NavbarGlobal /> 

   {/* <div className="container mt-5">
    
    
   
    </div>  */}
    <TopBannerDiscount />
    <BreadCrumbsSections currentPage="Product Details" /> 
    <ProductDetailsInfoGrid  items={products}/>
    <div className="container">
    <ProductDetailGalleryHeader  title="Related Products" items={products}  />
   
    </div>
    <div className="container" style={{height: "100px"}}></div>
    <Footer />   
    </div>
  )
}

export default ProductDetailsView