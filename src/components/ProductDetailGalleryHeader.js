import React from 'react'
import MobileGridCard from './MobileGridCard'
import ProductCard2 from './ProductCard2'
import { useContext, useState, useEffect } from 'react';
import {ProductContext} from './contexts/contexts'
import RelatedProductsCard from './RelatedProductsCard';
import { useParams } from 'react-router-dom';

export const ProductDetailGalleryHeader = ({title, items = []}) => {

 
  let [thisProduct, SetThisProduct] = useState({})


  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/`)
      SetThisProduct(await result.json())
    }
    fetchData()
}, [])


    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() =>  {

    
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  
  return width < breakpoint ? 
    <>
    <div className="products-gallery-header">
    <div className="container">
    <div className="header">
    <div className="item-1">
        <h2>{title}</h2>
    </div>
    <div className="item-2">
    <button className="circle"><i className="fa-solid fa-chevron-right fa-flip-horizontal"></i></button>
    <button className="circle"><i className="fa-solid fa-chevron-right "></i></button>
    </div>
    </div>
  
        </div>
        
        <div className="container-md ">

      
     <div className="row row-cols-1 row-cols-sm-2  g-4  row-cols-md-2 g-4   row-cols-xl-4  g-4">

        
     {
                items.map(product =>    <RelatedProductsCard key={product.id} item={product} />)

              }
           
        </div>
    </div>
    </div>
    </> : 

<>
<div className="products-gallery-header">
<div className="container">
<div className="header">
<div className="item-1">
    <h2>{title}</h2>
</div>
<div className="item-2">
    <button className="circle"><i className="fa-solid fa-chevron-right fa-flip-horizontal"></i></button>
    <button className="circle"><i className="fa-solid fa-chevron-right "></i></button>
</div>
</div>

    </div>
    
    <div className="container ">

  
    <div className="product-gallery-grid"> 

    
    {
                items.map(product =>    <RelatedProductsCard key={product.articleNumber} item={product} />)

              }
    </div>
</div>
</div>
</> ;

    
  
}
