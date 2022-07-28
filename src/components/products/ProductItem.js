import React, { useContext } from 'react'
import "./ProductItem.css"
import CartContext from '../../store/cart-context'
import { NavLink } from 'react-router-dom'

export const ProductItem = (props) => {
  const cartcntx=useContext(CartContext)
  

  const additemtocart =() => {

    
  cartcntx.addItem(props)
// console.log(props)
  }
  
  
  return (
    <>
    <div className='product-item'>
  
    <NavLink to={`productpage/${props.title}`}>{props.title}</NavLink>
    {/* <h3 style={{marginBottom:'2rem'}}>{props.title}</h3> */}
    <img src={props.image}></img>

     <div className='product-item-details'>
     <p>${props.price}</p>
     <button className='add-to-cart' onClick={additemtocart}>Add to cart</button>
     </div>
   


    </div>
   
    
    </>
  )
}
