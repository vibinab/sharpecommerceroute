import React from 'react'
import { useParams } from 'react-router-dom'

import CartContext from '../../store/cart-context'
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
    
    


export const Productpage = () => {
    const params=useParams()
    console.log(params)
    // const image=params.image
   
      
    console.log(params.title)
    const item= productsArr.filter(item=>
        {
            return item.title===params.title

        })
    console.log(item)
  return (
    <>
    <h1 style={{color:'black'}}>helo</h1>
      
      {/* <img src={image}></img> */}
      {
       item.map((i)=> {
        return (
            <>
            <li>{i.title}</li>
            <li>{i.price}</li>
            <li><img src={i.imageUrl}></img></li>
            </>
        )
       })
      }

    </>
  )
}
