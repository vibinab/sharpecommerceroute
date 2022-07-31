import CartContext from './cart-context'
import { useState } from 'react'

import React from 'react'

export const CartProvider = (props) => {
   const  [items, updateitems]=useState([])
   const additemtocarthandler=(item)=>{
   let f=true
    for(var i=0;i<items.length;i++){
        if (item.title===items[i].title){
            alert("cannot add more than 1")
            f=false
            return
        }

    }
    if(f){
        updateitems([...items,item])
    }

    
    // localStorage.setItem('data',JSON.stringify(items))
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
