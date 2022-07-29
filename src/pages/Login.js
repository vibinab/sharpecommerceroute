import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import AuthContext from '../store/auth-context';

export const Login = () => {
 
    const [user, setuser]=useState('');
    const[ pass, setpass]=useState('');
    const history =useNavigate();

    const authctx=useContext(AuthContext)
    
    

    const [isloading,setisloading]=useState(false);
    const[error,seterror]=useState(null)

    const userhandler=(event)=> {
        setuser(event.target.value)
    }

    const passhandler=(event)=> {
             setpass(event.target.value)
    } 

    const submithandler=(event)=> {
        event.preventDefault();

        const username=user;
        const password=pass;
        console.log(username)
        console.log(password)
        // const userdata= {
        //     user:user,
        //     pass:pass
        // }
        // console.log(userdata)
        setisloading(true)
        seterror(null)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBr5cZmLLfc1pErz8GPHgjftiPbbtnjkU',{
         method:'POST',
         body:JSON.stringify({
         email:username,
         password:password,
        returnSecureToken:true
         }),
         headers: {
          'Content-Type':'application/json'
         }

  }).then((res)=> {
    
   
    if(res.ok){
      return res.json();
    }
    else {
      return res.json().then((data)=> {
        // let errormessages="Authenication failed";
        // throw new Error(errormessages)
        let errormessages
        if(data && data.error && data.error.message){
            errormessages=data.error.message;
            seterror(errormessages)
  
          }
          
        
      });
    }
}).then(data=> {
     console.log(data)
     console.log(data.idToken)
     authctx.login(data.idToken);
     history('/')
})
.catch(err=> {
    // alert(err.message)
    seterror(err.message)
})
setisloading(false)


    }

  return (
    <>
        <div className='loginform'>
            <form onSubmit={submithandler}>
                <div>
                <label>useremail</label>
                <input type="email" onChange={userhandler}></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" onChange={passhandler}></input>
                </div>
                {isloading && <p style={{textAlign:"center",color:"green"}}>sending reques</p>}
                {!isloading && (<div className='formsubmit'>
                    <button type='submit'>Submit</button>
                </div>)
                }

                {!isloading && error && <p style={{textAlign:'center',color:'red'}}>{error}</p>}
                
               
            </form>
        </div>
    </>
  )
}
