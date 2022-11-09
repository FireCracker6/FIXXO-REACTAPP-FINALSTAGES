
import {render, fireevent, getAllByText, getByTitle, fireEvent, getByTestId } from '@testing-library/react'
import { useState } from 'react'
import ProductCard from '../cards/ProductCard'
import { ShoppingCartProdivder, useShoppingCart } from '../contexts/ShoppingCartContext'
import { ShoppingCartItem } from '../sections/ShoppingCartItem'
import {ShoppingCartContext} from '../contexts/ShoppingCartContext'
import  ShoppingCart  from '../ShoppingCart'

const incrementQuantity =jest.fn()
console.log(incrementQuantity)
describe(ProductCard, (item) => {

    test("Click", () => {
        const {container} = render(<ProductCard />);
        const renderComponent = (button) => { 
        return render(<ShoppingCartContext.useShoppingCart value={{cartQuantity}}> </ShoppingCartContext.useShoppingCart>);
    }
        fireEvent.click(button);
    });
          
       /*  const value = Number(getByTestId('count').textContent)

        // assert - utvärderings
        expect(value).toEqual(0) */
    })

   /*   it('count should increment by 1 if the increment button is pressed', () => {
        const increment = jest.fn()
        const { getByText} = render (
            <ShoppingCartContext.Provider value={{increment}}><ShoppingCartItem /></ShoppingCartContext.Provider>
        )
        const incrementButton = getByRole('button', {name: 'incrementQuantity'})
        fireEvent.click(incrementButton)

    })  */
  /*   it('count should decrement by 1 if the decrement button is pressed', () => {
        const { getByTestId, getByRole  } = render(   <QuantityButton init={12}  />)
        const button = getByRole('button', {name: 'decrement'})
        fireEvent.click(button)
        const value = Number(getByTestId('count').textContent)
        expect(value).toEqual(0)
    })
 */
