import React from 'react'
import MainMenuIcon from './MainMenuIcon';

function WhiteCircleButton() {
  return (
   <>
     <MainMenuIcon link="/search" icon="fa-light fa-magnifying-glass" />
     <MainMenuIcon link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" />
    <MainMenuIcon link="/wishlist"  icon="fa-light fa-heart"  quantity={2}/>
    <MainMenuIcon link="/shoppingcart"  quantity={3} icon="fa-light fa-bag-shopping" /> 

    
                         
 
   </>
  )
}

export default WhiteCircleButton