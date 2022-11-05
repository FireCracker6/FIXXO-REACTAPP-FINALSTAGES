import React from 'react'

import '../App.min.css';

import DiscountBanner from '../components/DiscountBanner';
import Footer from '../components/Footer';
import HomeFooter from '../components/HomeFooter';

import PamelaReif from '../components/PamelaReif';
import ProductsBanner from '../components/ProductsBanner';
import Showcase from '../components/Showcase';
import SpecialOffer1 from '../components/SpecialOffer1';
import SpecialOffer2 from '../components/SpecialOffer2';
import Specialty from '../components/Specialty';
import NavbarGlobal from '../components/NavbarGlobal';
import ProductGridSection from '../components/sections/ProductGridSection';
import DiscountCard2 from '../components/DiscountCardSection';
import { useContext } from 'react';
import {ProductsContext, FeaturedProductsContext, DiscountProductsContext } from '../components/contexts/contexts'






const HomeView = () => {
  
  window.top.document.title = "Fixxo."


  const productContext = useContext(ProductsContext)
  const featuredContext =  useContext(FeaturedProductsContext)
  const discountContext =  useContext(DiscountProductsContext)

  /* latest product */

 /*  const [latestProduct, setLatestTopProduct ] = useState([
   
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"}
   
  ]) */

  
  /* best selling product */

  /* const [bestProduct, setBestProduct ] = useState([
   
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"}
   
  ])
 */
   /* topRating product */

   /* const [topRatingProduct, setTopRatingProduct ] = useState([
   
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"}
   
  ]) */



 
  return (
    <>


       <NavbarGlobal />
    
   
   <Showcase />
    <ProductsBanner />
 
  <ProductGridSection title="Featured Products" items={productContext} /> 
{/*   <ProductGridSection title="Top Products" products={topProducts} />  */}
   <PamelaReif />
   <Specialty title={"Our Specialty"} />
  <SpecialOffer1  items={featuredContext} />
   <SpecialOffer2  items={featuredContext}  />  
   <DiscountBanner title={"Up to 70% off*"} />
   <DiscountCard2 items={discountContext}/>
   <HomeFooter />
   <Footer />

    </>
  )
}

export default HomeView
