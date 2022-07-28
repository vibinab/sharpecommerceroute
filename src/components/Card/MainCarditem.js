import React from 'react'
import "./MainCarditem.css"

export const MainCarditem = (props) => {
  return (
     <>
   
    <td className='cart-table-items-image'><img src={props.image} alt="image"></img><p>{props.title}</p>
    </td>
    <td style={{paddingLeft:'7rem'}}>{props.price}</td>
    <td style={{paddingLeft:'4rem'}}>{props.quantity}
    <button className='cart-remove-btn'>Remove</button>
    </td>

   
   
        </>
  )

}
