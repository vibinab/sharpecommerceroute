import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'

const data= [
    {date:'JUL16', place:'DETROIT, MI',name:'DTE ENERGY MUSIC THEATRE'},
    {date:'JUL16', place:'DETROIT, MI',name:'DTE ENERGY MUSIC THEATRE'}
]


export const Home = () => {
  return (
    <>
    <div className='home-header-main'>
      <div className='home-header-content'>
      <NavLink activeClassName='linkbtn2' className='link2' to="home"> <span>HOME</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="/"> <span>STORE</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="about"> <span>ABOUT</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="contact"> <span>CONTACT</span></NavLink>

      </div>
    </div>
  
      <h1 className='about-section2'>The Generics</h1>
     <h1 style={{textAlign:'center'}}>Tour</h1>
     {
        data.map((d)=> {
            return (
                <div className='homelist-content'>
                <ul className='homelist-list'>
                    <li>{d.date}</li>
                    <li>{d.place}</li>
                    <li>{d.name}</li>
                    <li><button className='homelist-button'>Book</button></li>
                </ul>
                </div>
            )

        })
     }

    </>
  )
}
