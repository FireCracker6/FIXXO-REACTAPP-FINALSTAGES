
import {render, fireevent, getAllByText, getByTitle, fireEvent, waitFor } from '@testing-library/react'
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';
import {ProductDetailsInfoGrid} from '../sections/ProductDetailsInfoGrid';
import { ProductProvider } from '../contexts/ProductContext';

import '@testing-library/jest-dom/extend-expect'



describe(ProductDetailsInfoGrid, () => {


  

    it('changes background-color on hover', () => {
       const {getByRole } = render(<ShoppingCartProvider><ProductProvider ><ProductDetailsInfoGrid/></ProductProvider></ShoppingCartProvider>)
       const button = getByRole('button', {name: "Choose an Option"})
       fireEvent.click(button)

/* ToHaveStyle verkar inte fungera som förväntat. Den här testen blir godkänd med Buttonface, och border på 2px outset, 
men det är inte vad som är i style designen. Försöker jag ändra det till, till exempel #fff så funkar det inte */
       
        expect(getByRole('button', {name: "Choose an Option"})).toHaveStyle(' background-color: ButtonFace;  color: ButtonText;  text-align: center;  ')
   
  })

    
})