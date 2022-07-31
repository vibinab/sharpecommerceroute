import React, { useContext } from 'react'
import "./ProductItem.css"
import CartContext from '../../store/cart-context'
import { NavLink } from 'react-router-dom'
import axios from "axios";

export const ProductItem = (props) => {
  const cartcntx=useContext(CartContext)
  console.log("product main item",props.userdetail)
  let useremail=props.userdetail
  let newuseremail=useremail.replace("@","")
  let finaluseremail=newuseremail.replace(".","")
  console.log(finaluseremail)
  console.log(cartcntx.items)
  let cartitems={}
  cartitems=cartcntx.items
  console.log("ci" ,cartitems)

  for(let i=0;i<cartitems.length;i++){
      
  }
  // console.log("propitem",props.title)
  // for(var i=0;i<cartcntx.items.length;i++){
  // console.log("current item",cartcntx.items[i].title)
  // }
  const additemtocart =() => {

  
  cartcntx.addItem(props)
  
   
   
// console.log(props)
axios.post(`https://crudcrud.com/api/e427f8779fb04a85a0ef78c82ddcfd28/shca${finaluseremail}`,{
  items:cartitems
})
.then(res=>{
  console.log(res)
})
.catch(err=> {
  console.log(err)
})

  }
  
  
  return (
    <>
    <div className='product-item'>
  <h1 style={{textAlign:"center",marginBottom:"2rem"}}><NavLink to={`productpage/${props.title}`} className="product-item-link">{props.title}</NavLink></h1>
    
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
