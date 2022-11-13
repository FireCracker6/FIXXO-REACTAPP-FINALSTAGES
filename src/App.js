
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
import { ProductDetailGalleryHeader } from './components/ProductDetailGalleryHeader';
import { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';
import { ProductProvider } from './components/contexts/ProductContext';






function App() {







 
  return (

   <>

  

    <Router>
      <ShoppingCartProvider>
        <ProductProvider>
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
    </ProductProvider>
    </ShoppingCartProvider>
      
    </Router>


   
   </>
  );
}

export default App;
