import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import { Navhead } from '../components/layout/Navhead'

const data= [
    {date:'JUL16', place:'DETROIT, MI',name:'DTE ENERGY MUSIC THEATRE'},
    {date:'JUL19', place:'TORONTO,ON',name:'BUDWEISER STAGE'},
    {date:'JUL 22', place:'BRISTOW, VA',name:'JIGGY LUBE LIVE'},
    {date:'JUL 29', place:'PHOENIX, AZ',name:'AK-CHIN PAVILION'},
    {date:'AUG 2', place:'LAS VEGAS, NV',name:'T-MOBILE ARENA'}
]


export const Home = () => {
  return (
    <>
    
      <Navhead/>
      <div className='home-section2'>
        <h1>The Generics</h1>
        <button className='album'>Get our latest album</button>
        <button className='playbtn'>►</button>
      </div>
     <h1 style={{textAlign:'center',marginBottom:'3rem'}}>Tour</h1>
     {
        data.map((d)=> {
            return (
                <div className='homelist-content'>
                 <table className='homselist-table'>
                    <td>{d.date}</td>
                    <td>{d.place}</td>
                    <td>{d.name}</td>
                    <td><button className='homelist-button'>Buy Ticket</button></td>
                </table> 
                </div>
               
                
            )

        })
     }

    </>
  )
}
