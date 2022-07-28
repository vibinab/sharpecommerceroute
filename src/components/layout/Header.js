import React from 'react'
import  "./Header.css"
import { Card } from '../Card/Card'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
  return (
    <>
        <div className='header'>
            <div className='header-content'>
            <NavLink activeClassName='linkbtn' className='link' to="home"> <span>HOME</span></NavLink>
            <NavLink activeClassName='linkbtn' className='link'to="/"> <span>STORE</span></NavLink>
            <NavLink activeClassName='linkbtn' className='link'to="about"> <span>ABOUT</span></NavLink>
            <NavLink activeClassName='linkbtn'className='link' to="contact"> <span>CONTACT</span></NavLink>

               
              
                
            </div>
           
        </div>
        
        <span className='header-cart'><Card oncartclick={props.onshowcart}/></span>
        <div className='header-content2'>
            <h1>The Generics</h1>
        </div>
       
    </>
  )
}
