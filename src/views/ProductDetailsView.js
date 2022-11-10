import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import TopBannerDiscount from '../components/TopBannerDiscount'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/sections/ProductDetailsInfoGrid'
import { ProductDetailGalleryHeader } from '../components/ProductDetailGalleryHeader'


import { useProductContext } from '../components/contexts/ProductContext';


import { useEffect } from 'react'




function ProductDetailsView() {


  const product = useProductContext();
  const {featuredProducts, getFeaturedProducts} = useProductContext()
  
  useEffect(() => {
    getFeaturedProducts(4)
    
  }, [])



 

  return (
    <>
<NavbarGlobal /> 

    <TopBannerDiscount />
    <BreadCrumbsSections currentPage="Product Details" /> 
   
    <ProductDetailsInfoGrid  items={product}/>
    <ProductDetailGalleryHeader  title="Related Products" items={featuredProducts}  /> 
   
    <div className="container">


   
    </div>
    <div className="container" style={{height: "100px"}}></div>
    <Footer />   
    
    </>
  )
}

export default ProductDetailsView