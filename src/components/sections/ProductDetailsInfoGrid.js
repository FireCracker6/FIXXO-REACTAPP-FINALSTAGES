import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetailsImages } from '../ProductDetailsImages'
import { QuantityButton } from '../buttons/QuantityButton'
import { DetailInfoProduct } from '../DetailInfoProduct'
import {  useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'




export const ProductDetailsInfoGrid = ({count}) => {
    const {id} = useParams()
   const {incrementQuantity } = useShoppingCart() 
   
  

 

    const {product, getProduct} = useProductContext()
  const {featuredProducts, getFeaturedProducts} = useProductContext();
    useEffect(() => {
        getProduct(id)
        getFeaturedProducts(4)
    },[id],[])



    
      let currentPage = "Product Details"
      window.top.document.title = `${product.name} || Fixxo` 


  return (
    <section className="product-detail-section">
    <div className="container">
    
   

               

            <ProductDetailsImages />
       


  

        <div className="product-detail-description">
           <div className="prod-desc-1">
            <h2 data-testid="pName" >{product.name}</h2>
         
            <p><small>SKU: 12345670 BRAND: The Northland</small></p>
            <div className="text-theme">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>  
              <h3>{currencyFormatter(product.price)}</h3>
              <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more) </p>
           </div>
           <div className="prod-desc-2">
            <div className="item-1">

                <div className="size">
                    <h2>Size: </h2>
                
                </div>
                <div className="buttons">
                    <button className="btn btn-primary size-button border border-dark">S</button>
                    <button className="btn btn-primary size-button border border-dark">M</button>
                    <button className="btn btn-primary size-button border border-dark">L</button>
                    <button className="btn btn-primary size-button border border-dark">X</button>
                </div>
            
            </div>
            <div className="item-2">
                <div className="color">
                    <h2>Color: </h2>
                </div>
                <div className="CART-dropdown" >
                    <button className="btn  dropdown border border-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose an Option
                    <i className="fa-regular fa-chevron-down ms-5"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Option 1</a></li>
                      <li><a className="dropdown-item" href="#">Option 2</a></li>
                      <li><a className="dropdown-item" href="#">Option 3</a></li>
                      <li><a className="dropdown-item" href="#">Option 4</a></li>
                      <li><a className="dropdown-item" href="#">Option 5</a></li>
                      <li><a className="dropdown-item" href="#">Option 6</a></li>
                    </ul>
                  </div> 

            </div>
            <div className="item-3">
                <div className="quantity">
                    <h2>Qty: </h2>
                    <div className="center">
                   
                   {/* did not have time to get this to work when adding to cart */}
                        <QuantityButton />

                        
                     </div> 
  
                     
                </div>
                <div className="cart-red-buttons "><button onClick={() => incrementQuantity({articleNumber: product.articleNumber, product: product }  )} className="post-button">Add To Cart</button>
                    </div> 
            </div>
       
           <div className="item-4">
                <div className="share">
                    <h2>Share:  </h2>
                
                 <div className="social">
                     <div className="social-media-circle"> <i className="fa-brands fa-facebook-f"></i></div>
                        <div className="social-media-circle">  <i className="fa-brands fa-instagram"></i></div>
                        <div className="social-media-circle"> <i className="fa-brands fa-twitter"></i></div>
                        <div className="social-media-circle">  <i className="fa-brands fa-google"></i></div>
                        <div className="social-media-circle">  <i className="fa-brands fa-linkedin"></i></div>
                        </div>
                  
                </div>
            </div> 
           </div>
        </div>

 
    </div>

    <DetailInfoProduct />

  
</section>
  )
}

