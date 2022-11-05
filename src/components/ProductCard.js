import React from 'react'
import placeholderImageGray from './assets/images/featured-product/placeholder-W.png'
import placeholderImageDarkGray from './assets/images/featured-product/placeholder-dark.png'
import { NavLink } from 'react-router-dom'


 export const ProductCard = ({item}) => {
  return (
    <>

<div className="product-grid">
        <div className="card" >
          <div className="card" >
          
             <div className="featured-image"><img src={placeholderImageGray}  alt="placeholder image" />
             </div> 
              <ul className="card-menu ">
              <li><button className='productButton'><i className="fa-light fa-heart "></i></button></li>
           
                  <li><button className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
                  <li><button className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
              </ul>
              <div className="quickview-buttons"> <NavLink to="/productdetails" className="quickview-button quick-btn-border">QUICK VIEW</NavLink>
              </div>   
             
              <div className="card-background">  <div className="featured-image-dark"><img src={placeholderImageGray}  alt="placeholder image" /></div></div>
          <div className="card-body">
            
                <h5 className="card-title">Category</h5>
                <h4>Modern Black Blouse</h4>
                    <div className="text-theme">
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                    </div>
                <div className="price">
                  <p className="old-price">$35.00</p>
                  <p className="new-price">$35.00</p>
              </div>
          </div>  
         
      </div>
    </div>
    </div>
    


 </>
  )
}
