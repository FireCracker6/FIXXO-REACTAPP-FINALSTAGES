import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import MainMenuIcon from '../icons/MainMenuIcon';

function WhiteCircleButton() {

  const {cartQuantity} = useShoppingCart()
  return (
    
   <>
     <MainMenuIcon link="/search" icon="fa-light fa-magnifying-glass" />
     <MainMenuIcon link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" />
    <MainMenuIcon link="/wishlist"  icon="fa-light fa-heart"  quantity={2}/>

    <button className="__btn-background" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart"  quantity={cartQuantity} icon="fa-light fa-bag-shopping"> <span className=" badge rounded-pill bg-theme">{cartQuantity}</span>
      
    <i className="fa-light fa-bag-shopping"></i></button>
   {/*  <MainMenuIcon type="button"  data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart"  quantity={cartQuantity} icon="fa-light fa-bag-shopping" ></MainMenuIcon>  */}

    
                         
 
   </>
  )
}

export default WhiteCircleButton