
import { render, screen, fireEvent, getByTestId, getByRole, getByAltText, getAllByTestId, getAllByRole } from '@testing-library/react'
import { ShoppingCartProvider, useShoppingCart } from '../contexts/ShoppingCartContext';
import { ProductProvider, useProductContext } from '../contexts/ProductContext';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'
import ProductCard from '../cards/ProductCard'
import {ShoppingCart} from '../ShoppingCart';

// Kredit till klasskompis Per Stark här för att dela med sig av sin kod på Github, som jag sen fick manipulera en del.

const mockProduct = { "articleNumber": "d3984cd9-f121-4981-8d03-83198d441379", "name": "Black coat", "description": "", "category": "Coats", "price": 95, "rating": 4, "imageName": "https://win22imgstorage.blob.core.windows.net/images/black-coat.png" }


describe(ProductCard, () => {


    const customRender = (ui, { providerProps, ...renderOptions }) => {
      
        return render(
          
            <BrowserRouter>
                <ShoppingCartProvider
                
                {...providerProps}  >
                         
                    {ui}
            
                </ShoppingCartProvider>
            </BrowserRouter>,
            renderOptions,
        )
        }
        test("can display mockproduct properly", () => {
            const providerProps = mockProduct;
            customRender(<ProductProvider><ProductCard item={mockProduct} /></ProductProvider>, { providerProps })
            expect(screen.getByRole('img').alt).toContain(mockProduct.name);
    });
    test("can add product to shoppingcart from ProductCard", () => {
        const providerProps = mockProduct;
        // render both card and shoppingcart.
        customRender(<ProductCard item={mockProduct} />, { providerProps });
        customRender(<ShoppingCart />, { providerProps });
        // find button to add to cart and press it.
        const addToCartButton = screen.getByTestId('addToCart');
        fireEvent.click(addToCartButton);
        // verify that the mockproduct is added to shoppingcart.
        const itemInShoppingCart = screen.getByTestId('shoppingCart').textContent;
        expect(itemInShoppingCart).toContain(mockProduct.name);
    })

})