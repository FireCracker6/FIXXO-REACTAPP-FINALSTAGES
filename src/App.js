
import './App.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import CategoriesView from './views/CategoriesView';
import { ProductsView } from './views/ProductsView';
import {DiscountProductsContext, FeaturedProductsContext, ProductsContext} from './components/contexts/contexts'
import { useEffect } from 'react';
import { ProductDetailGalleryHeader } from './components/ProductDetailGalleryHeader';






function App() {

  const [products, setProducts ] = useState( [])
  const [featured, setFeatured ] = useState( [])
  const [discount, setDiscount ] = useState( [])




  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?=take8')
      setProducts(await result.json())
      console.log(result)
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFeatured(await result.json())
      console.log(result)
    }
    fetchFeaturedData()

    const fetchDiscountData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      setDiscount(await result.json())
      console.log(result)
    }
    fetchDiscountData()

  }, [setProducts, setFeatured, setDiscount])  

 
  return (

   <>

  

    <Router>
    <ProductsContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <DiscountProductsContext.Provider value={discount}>

    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/products' element={<ProductsView   /> }/>
      <Route path='/productdetails/:id' element={<ProductDetailsView />}/>
      <Route path='/productdetails/:id' element={<ProductDetailGalleryHeader />}/>
      <Route path='/categories' element={<CategoriesView />}/>
      <Route path='/contacts' element={<ContactsView />}/>
      <Route path='/*' element={<NotFoundView />}/>

      <Route path='/search' element={<SearchView />}/>
      <Route path='/wishlist' element={<WishListView />}/>
      <Route path='/shoppingcart' element={<ShoppingCartView />}/>
      <Route path='/compare' element={<CompareView />}/>

    </Routes>
 </DiscountProductsContext.Provider>
   </FeaturedProductsContext.Provider>
    </ProductsContext.Provider>
      
    </Router>


   
   </>
  );
}

export default App;
