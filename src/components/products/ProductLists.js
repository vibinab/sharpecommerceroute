

import React from 'react'
import "./ProductLists.css"
import { ProductItem } from './ProductItem'
import "./ProductLists.css"

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
    
    
    
    
    
export const ProductLists = () => {


  return (
    <>
    {

        productsArr.map((product)=> {

            return (

                <>
             
              <div   className='product-list'>
               <ProductItem 
                key={product.title}
               title={product.title} 
               price={product.price}
               image={product.imageUrl}
               />
               </div>
               </>
            )
        })
    }


    </>
  )
}
