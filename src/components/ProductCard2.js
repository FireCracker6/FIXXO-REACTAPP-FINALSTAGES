import React from 'react'
import { useParams } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

const ProductCard2 = ({item}) => {

  const addToWishList = (e) => {
    console.log(`added to wish list)`)
  }

  const addToCompare = (e) => {
    console.log("added to compare")
  }
  const addToCart = (e) => {
    console.log("added to Cart")
  }

  return (
    <>

    <div className="product-grid">
            <div className="card" >
              <div className="card" >
              
                 <div className="featured-image"><img src={item.imageName}  alt={item.name} />
                 </div> 
                  <ul className="card-menu ">
                  <li><button onClick={addToWishList} className='productButton'><i className="fa-light fa-heart "></i></button></li>
               
                      <li><button  onClick={addToCompare} className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
                      <li><button onClick={addToCart}  className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
                  </ul>
              
               <div className="quickview-buttons"> <NavLink  to={`/productdetails/${item.articleNumber}`} className="quickview-button quick-btn-border">QUICK VIEW</NavLink>
                  </div>   
                 
              
              <div className="card-body">
                
                    <h5 className="card-title">{item.category}</h5>
                    <h4>{item.name}</h4>
                        <div className="text-theme">
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                        </div>
                    <div className="price">
                      <p className="old-price">$35.00</p>
                      <p className="new-price">€ {item.price} </p>
                  </div>
              </div>  
             
          </div>
        </div>
        </div>
        
    
    
     </>
  )
}

export default ProductCard2