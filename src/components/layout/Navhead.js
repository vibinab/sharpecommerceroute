import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navhead.css"

export const Navhead = () => {
  return (
    <>
        <div className='nav-header-main'>
      <div className='nav-header-content'>
      <NavLink activeClassName='linkbtn2' className='link2' to="/"> <span>HOME</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="/product"> <span>STORE</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="/about"> <span>ABOUT</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="/contact"> <span>CONTACT</span></NavLink>
      <NavLink activeClassName='linkbtn2' className='link2' to="/login"> <span>LOGIN</span></NavLink>

      </div>
    </div>
    </>
  )
}
