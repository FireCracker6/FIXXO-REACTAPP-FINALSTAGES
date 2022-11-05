import React from 'react'
import pinquin from './assets/images/featured-product/pinquin.png'

function DiscountCardMobile({item}) {

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
    <div className="card mb-3 " >
    <div className="row g-0">
      <div className="col-md-4">
      <img src={item.imageName}  alt="placeholder image" />
      </div>
      <ul className="card-menu ">
        <li><button onClick={addToWishList} className='productButton'><i className="fa-light fa-heart "></i></button></li>
        <li><button onClick={addToCompare}  className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
        <li><button onClick={addToCart} className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
      <div className="col-md-8">
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
                
                <p className="new-price">{item.price}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DiscountCardMobile