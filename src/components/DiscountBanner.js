import React from 'react'
import WhiteButton from './WhiteButton'

const DiscountBanner = ({title}) => {
  return (
    <section className="discount">
    <div className="container">
    <div className="discount-banner">
        <div className="info">
        <h2>{title}</h2>
        <h3>Women's, Men's & Kids' Winter Fashion</h3>
         
        <WhiteButton link="/productdetails"  text="FLASH SALE" />
    </div>
    </div>
    </div>
    
    </section>
  )
}

export default DiscountBanner