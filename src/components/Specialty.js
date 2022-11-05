import React from 'react';
import placeHolder from './assets/images/specialty-img-bg.svg'

const Specialty = ({title}) => {
  return (
    // <!-- Specialty section -->
  
    <div className="container">
      
        {/* <div className="specialty-header">
    
            <div className="section-title">
                <h1>Our Specialty</h1>
              
              
              </div>
        </div> */}

          <div className="specialty-items">
          <div className="specialty-header">
    
    <div className="section-title">
        <h1>{title}</h1>
      
      
      </div>
</div>
        <div className="__item-1">
            <div className="text">
                <h4>Track Your Order</h4>
                <a href="#">Get Started{' >'}</a>
            </div>
           
            <div className="image-holder">  <img src={placeHolder} alt="placeholder" />  </div>
        </div>
        <div className="__item-2">
            <div className="text">
                <h4>Make a Return</h4>
                <a href="#">Get Started {'>'}</a>
            </div>
           
            <div className="image-holder"> <img src={placeHolder} alt="placeholder" />    </div>
        </div>
        <div className="__item-3">
            <div className="text">
                <h4>Request a Price Adjustment</h4>
                <a href="#">Get Started {'>'}</a>
            </div>
           
            <div className="image-holder">  <img src={placeHolder} alt="placeholder" />   </div>
        </div>
        
      </div>
      </div>
  
  )
}

export default Specialty