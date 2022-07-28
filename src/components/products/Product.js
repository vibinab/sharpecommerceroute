
import React from 'react'
import { ProductLists } from './ProductLists'
import "./Product.css"
// import { CartProvider } from '../../store/CartProvider'

export const Product = () => {
  return (
    <>  
      {/* <CartProvider> */}
      <h1 style={{textAlign:'center'}}>MUSIC</h1>
        <div className='brown'>
        <ProductLists/>
        </div>
        {/* </CartProvider> */}
    </>
  )
}
