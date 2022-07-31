import { useContext } from 'react'
import React from 'react'
import { ProductLists } from './ProductLists'
import "./Product.css"
// import { CartProvider } from '../../store/CartProvider'
import AuthContext from '../../store/auth-context'
import { NavLink } from 'react-router-dom'

export const Product = (props) => { 

  const cartctx=useContext(AuthContext)

   

  let userdata= props.userdata
  return (
    <>  
    
     
        <>
      <h1 style={{textAlign:'center'}}>MUSIC</h1>
        <div className='brown'>
        <ProductLists senduserdetails={userdata}/>
        </div>
        <div className="productpagecart">
           <button onClick={props.onproductcart}>See  the cart</button>
        </div>
        </>
      
       
       
    </>
  )
}
