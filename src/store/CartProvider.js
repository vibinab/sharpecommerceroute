import CartContext from './cart-context'
import { useState } from 'react'

import React from 'react'

export const CartProvider = (props) => {
   const  [items, updateitems]=useState([])
   const additemtocarthandler=(item)=>{

    updateitems([...items,item])
    console.log(items)
   }
   const removeitemfromcarthandler=(id)=>{}

    const cartContext= {
        items:items, 
        addItem:additemtocarthandler,
        removeitem:removeitemfromcarthandler,
        message:'i am'

    }
return (

<CartContext.Provider value={cartContext}>
    {props.children} 

    </CartContext.Provider>
)
}
