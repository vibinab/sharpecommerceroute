import React from 'react'
import "./MainCarditem.css"

export const MainCarditem = (props) => {
  return (
     <>
   
    <td className='cart-table-items-image'><img src={props.image} alt="image"></img><p>{props.title}</p>
    </td>
    <td style={{paddingLeft:'9rem'}}>{props.price}</td>
    {/* <td style={{paddingLeft:'4rem'}}>{props.quantity}</td> */}

   
   
        </>
  )

}
