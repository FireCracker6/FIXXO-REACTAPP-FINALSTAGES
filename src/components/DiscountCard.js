import React from 'react'
import horizontalPlaceHolderImg from './assets/images/horizontal-product-img-bg.svg'
import horizontalPlaceHolderImgDark from './assets/images/horizontal-product-img-dark.svg' 
import yogaMobile from './assets/images/featured-product/yoga.png'

function DiscountCard() {
  return (

    <div className="main">
    <div className="discount-product">
    
    <div className="discount card" >
        <div className="row g-0">
          <div className="col-md-">
            <div className="discount-image"><img src={yogaMobile}  alt="placeholder image" />
            </div> 
             <ul className="card-menu ">
                 <li><a href="#" className="arrowlink-favorite"><i className="fa-light fa-heart "></i></a></li>
                 <li><a href="#" className="arrowlink-shuffle"><i className="fa-light fa-code-compare fa-flip-vertical"></i></a></li>
                 <li><a href="#" className="arrowlink-cart"><i className="fa-light fa-bag-shopping"></i></a></li>
             </ul>
             <div className="horizontal quickview-buttons"> <a href="#" className="quickview-button quick-btn-border">QUICK VIEW</a>
 
             </div>   
            
             <div className="card-background">  <div className="discount-image-dark"><img src={horizontalPlaceHolderImgDark}  alt="placeholder image" /></div></div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Category</h5>
          <h4>Modern Black <br />Blouse</h4>
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
    </div>
    </div>

  )
}

export default DiscountCard