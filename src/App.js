import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartProvider } from './store/CartProvider';
import { MainCard } from './components/Card/MainCard';
import { Product } from './components/products/Product';
import { useContext, useState } from 'react';
import { About } from './pages/About';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

import { Productpage } from './components/products/Productpage';
import { Login } from './pages/Login';
import AuthContext from './store/auth-context';
import { Navigate } from 'react-router-dom';



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const authctx=useContext(AuthContext) 

  const [useremail, setuseremail]=useState('')

  const [maincartisshown, setmaincartishown]=useState(false)

  const showCartHnadler=()=> {
    setmaincartishown(true)
  }
  const hideCartHnadler=()=> {
    setmaincartishown(false)
  }

  const getuserinfo=(name)=> {
    setuseremail(name)
  }

  return (
    <>

    
       <BrowserRouter> 
      
       <Routes>
       
      <Route path="login" element={<Login userdetail={getuserinfo}    />} />
      
      <Route path="about" element={<About />} /> 
      
      <Route path="/" element={<Home />} />

      <Route path="contact" element={<Contact />} />

      <Route path="/productpage/:title" element={<Productpage />} />

      {/* {authctx.isLoggedIn && ( */}
      <Route  path="product" element={
        <CartProvider>
        {maincartisshown &&  <div className='modalcard'><MainCard onclose={hideCartHnadler} userdata={useremail}/></div>}   
         
      <Header  onshowcart={showCartHnadler}/>
          <Product onproductcart={showCartHnadler} userdata={useremail}/>
        </CartProvider>
      }
      />
      {/* )
      } */}
       <Route path="*" element={<Navigate to="login" />} />
     
       </Routes>
      </BrowserRouter> 

   
      <Footer />


      
    </>
  );
}

export default App;
