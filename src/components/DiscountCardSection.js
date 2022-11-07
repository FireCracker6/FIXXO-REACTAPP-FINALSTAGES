import React, {useContext } from 'react'
import { DiscountProductsContext } from './contexts/contexts';

import DiscountCardMobile from '../components/cards/DiscountCardMobile'


const DiscountCard2 = ( {items = []}) => {

  return (
    
    <section className="disc-card container">
   

{/*      
      <div className=" row row-cols-2 row-cols-sm-1  row-cols-md-2  row-cols-xl-3 g-4 "> */}
        
      <div className="grid-wrapper row row-cols-2 row-cols-sm-2  row-cols-md-2 row-cols-xl-3 g-4 ">
      <div className="item-1">
        <h4>Latest Product</h4>
  
       {

          items.map(product =>    <DiscountCardMobile key={product.articleNumber} item={product} />)


}

       </div>
         
               
   
        
       <div className="item-2">
       <h4>Best Selling Product</h4>
       {

items.map(product =>    <DiscountCardMobile key={product.articleNumber} item={product} />)


}
       
       </div>
               
            
                
     
        
 
           
       <div className="item-3">
       <h4>Top Ratings</h4>
       {

items.map(product =>    <DiscountCardMobile key={product.articleNumber} item={product} />)


}
       
       </div>
               
               
             </div>
          </section>  
              

  )
}

export default DiscountCard2