import React, { useContext, useEffect, useState } from 'react'
import "./MainCard.css"
import { MainCarditem } from './MainCarditem'

import CartContext from '../../store/cart-context'
import axios from 'axios'

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    

export const MainCard = (props) => {
     


    const [caritemsapi, setcaritemsapi]=useState([])
    console.log(props)

    let useremail=props.userdata;
    let enteredemail=useremail.replace('@','')
    let finalemail=enteredemail.replace('.','')
    console.log("maincatd",finalemail)

    
    useEffect(()=> {

        axios.get(`https://crudcrud.com/api/e427f8779fb04a85a0ef78c82ddcfd28/shca${finalemail}`)
        .then((res)=> {
             console.log("server",res.data)
            //  const loadedcart=[];
            //  for(const key in res.data){
            //   loadedcart.push({
            //     id:key,
            //     title:key[0].title
                
                
                
            // //     releaseDate:data[key].releaseDate,
            //   });
             setcaritemsapi(res.data)

            //  }
            }
        
        )
        .catch((err)=> {
            console.log(err)
        })

    },[])
    
     
    console.log("api", caritemsapi)
    

    const cartcintx= useContext(CartContext)
    console.log("mainitem",cartcintx.items)

    const numberofcarts=cartcintx.items.reduce((cur,item)=> {
        return cur+item.price
    },0)
  return (
    <>
    <h1 style={{textAlign:"center"}}>Cart</h1>
    <div className='closemodal-content'>
        <button className='closemodal' onClick={props.onclose}>x</button>
    </div>
    <table className='maincard-table'>
        <tr className='maincard-headrow'>
            <th style={{textAlign:'left'}}>item
            <hr style={{width:'10rem'}}></hr>
            </th>
            <th>price
            <hr style={{width:'100%'}}></hr> 
            </th>
            
            
            <hr style={{width:'100%'}}></hr>
            
        </tr>
        <p>total:{numberofcarts}</p>


        
    </table>
    {
        cartcintx.items.map((item)=> {
            return (
                
                <tr>
                <MainCarditem 
                title={item.title}
                price={item.price}
               
                image={item.image}
                
               
                />
                 </tr>
                


            )
        })
    }
    

    </>
  )
}
