import React, { useContext } from 'react'
import "./Card.css"
import CartContext from '../../store/cart-context'


export const Card = (props) => {
  
  const cartcntxt=useContext(CartContext)

  return (
    <div><button type="button" className="cart-show-button"onClick={props.oncartclick}>card</button> <span className='cart-number'>{cartcntxt.items.length}</span></div>
  )
}
