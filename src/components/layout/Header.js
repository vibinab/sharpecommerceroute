import React from 'react'
import  "./Header.css"
import { Card } from '../Card/Card'
import { NavLink } from 'react-router-dom'
import { Navhead } from './Navhead'

export const Header = (props) => {
  return (
    <>
        {/* <div className='header'>
            <div className='header-content'>
            <NavLink activeClassName='linkbtn' className='link' to="/"> <span>HOME</span></NavLink>
            <NavLink activeClassName='linkbtn' className='link' to="product"> <span>STORE</span></NavLink>
            <NavLink activeClassName='linkbtn' className='link' to="about"> <span>ABOUT</span></NavLink>
            <NavLink activeClassName='linkbtn'className='link' to="contact"> <span>CONTACT</span></NavLink>
            <NavLink activeClassName='linkbtn'className='link' to="login"> <span>LOGIN</span></NavLink>

               
              
                
            </div>
           
        </div> */}

        <Navhead />
        <span className='header-cart'><Card oncartclick={props.onshowcart}/></span>
        <div className='header-content2'>
            <h1>The Generics</h1>
        </div>
       
    </>
  )
}
