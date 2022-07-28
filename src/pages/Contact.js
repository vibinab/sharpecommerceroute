import React, { useState } from 'react'
import "./Contact.css"
import { NavLink } from 'react-router-dom';

export const Contact = () => {

    const [name, setname]=useState('');
    const[email, setemail]= useState('');
    const[phone, setphone]=useState('')

    const namehandler=(event)=> {
        setname(event.target.value)
    }

    const emailhandler=(event)=> {
        setemail(event.target.value)
    }

    const phonehandler=(event)=> {
        setphone(event.target.value)
    }

    const submithandler=async(event)=> {
        event.preventDefault();
        const contactdata={
            name:name,
            email:email,
            phone:phone
        }
         console.log(contactdata)

        //  async function postcontact(contactdata){
            const response= await fetch('https://contact-db3c4-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',{
                method:'POST',
                body:JSON.stringify(contactdata),
                headers: {
                    'Content-Type':'application/json'
                  }




            } );
            const data=await response.json();
            console.log(data)


        //  }
        //  postcontact()
    }

  return (
    <>
    <div className='contact-header-main'>
      <div className='contact-header-content'>
      <NavLink activeClassName='linkbtn3' className='link3' to="home"> <span>HOME</span></NavLink>
      <NavLink activeClassName='linkbtn3' className='link3'to="/"> <span>STORE</span></NavLink>
      <NavLink activeClassName='linkbtn3' className='link3'to="about"> <span>ABOUT</span></NavLink>
      <NavLink activeClassName='linkbtn3'className='link3' to="contact"> <span>CONTACT</span></NavLink>

      </div>
    </div>
    <div className='formcontent'>
      <form onSubmit={submithandler}>
        <div className='form-inputs'>
        <label>name</label>
        <input type="text" onChange={namehandler} ></input><br/>
        </div>
        <div  className='form-inputs'>
        <label>email </label>
        <input type="email" onChange={emailhandler}></input><br/>
        </div>
        <div  className='form-inputs'>
        <label>phone number</label>
        <input type="number" onChange={phonehandler}></input><br/>
        </div>
        <div className='form-button'>
        <button type='submit'>Submit</button>
        </div>
        
      </form>
      </div>

    </>
  )
}
