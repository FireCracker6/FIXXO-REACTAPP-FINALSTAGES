import React from 'react'
import DiscountCard from './DiscountCard'



const dcard = [    <DiscountCard />,     <DiscountCard />,     <DiscountCard />];
const items = [];

for (let i = 0; i < dcard.length; i++) {
  items.push(dcard[i]);
}



const ProductSpinner = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 1179;
    
      React.useEffect(() =>  {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, [] );

      return width < breakpoint ?   <section className="product-spinner">
      <div className="container">
          <div className="product-spinner-grid">
              <div className="header"> <h2>Latest Product</h2></div> 

                {items}

               
            
           
              <div className="header"><h2>Best Selling Product</h2></div>
              
              {items}

          
              <div className="header"><h2 className="topRated">Top Rated Product</h2></div>
              {items}

              </div>
              </div>
              </section> :     
      
      <section className="product-spinner">
      <div className="container">
          <div className="product-spinner-grid">
              <div className="header"> <h2>Latest Product</h2></div> 

                {items}

               
            
           
              <div className="header"><h2>Best Selling Product</h2></div>
              
              {items}

          
              <div className="header"><h2>Top Rated Product</h2></div>
              
             {items}
           
             
              </div>
              </div>
              </section>;
  return (
/*   section product spinner  */
    <section className="product-spinner">
        <div className="container">
            <div className="product-spinner-grid">
                <div className="header"> <h2>Latest Product</h2></div> 

                  {items}

                 
              
             
                <div className="header"><h2>Best Selling Product</h2></div>
                
                {items}

            
                <div className="header"><h2>Top Rated Product</h2></div>
                
               {items}
             
               
                </div>
                </div>
                </section>
  )
}

export default ProductSpinner