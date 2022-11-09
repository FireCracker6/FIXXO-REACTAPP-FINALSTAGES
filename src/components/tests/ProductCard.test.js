import {render } from '@testing-library/react'
import ProductCard from '../cards/ProductCard'
import { ShoppingCartProdivder, useShoppingCart } from '../contexts/ShoppingCartContext'

describe(ProductCard, () => {

    it('incrementQuantity should have initial value of 0',  () => {
  
     const imageName = null
       if (imageName == undefined)
       return Promise.resolve({
        json: () => Promise.resolve({
            imageName: "http://image.png", value: "test"
        })
    })
       
            const { getByTestId  } = render( 
                <ShoppingCartProdivder>
               
                <ProductCard init={0}  />
               
                    </ShoppingCartProdivder>  )
      
        const value = Number(getByTestId('increment').textContent)

        // assert - utvärdering
        
        expect(value).toEqual(0) 
    })
})