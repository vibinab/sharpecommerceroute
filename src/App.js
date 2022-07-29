import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartProvider } from './store/CartProvider';
import { MainCard } from './components/Card/MainCard';
import { Product } from './components/products/Product';
import { useState } from 'react';
import { About } from './pages/About';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

import { Productpage } from './components/products/Productpage';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [maincartisshown, setmaincartishown]=useState(false)

  const showCartHnadler=()=> {
    setmaincartishown(true)
  }
  const hideCartHnadler=()=> {
    setmaincartishown(false)
  }
  return (
    <>

    {/* <CartProvider>
    {maincartisshown &&  <div className='modalcard'><MainCard onclose={hideCartHnadler} /></div>}   
      <Header  onshowcart={showCartHnadler}/>
      {/* </CartProvider> */}
       <BrowserRouter> 
      
       <Routes>

      <Route path="about" element={<About />} /> 
      
      <Route path="home" element={<Home />} />

      <Route path="contact" element={<Contact />} />

      <Route path="/productpage/:title" element={<Productpage />} />

      
      <Route path="/" element={
        <CartProvider>
        {maincartisshown &&  <div className='modalcard'><MainCard onclose={hideCartHnadler} /></div>}   
         
      <Header  onshowcart={showCartHnadler}/>
          <Product onproductcart={showCartHnadler} />
        </CartProvider>
      }
      />

      {/* <Route path="*" element={<Product />} /> */}
      {/* <CartProvider> */}
    {/* {maincartisshown &&  <div className='modalcard'><MainCard onclose={hideCartHnadler} /></div>}   
      <Header  onshowcart={showCartHnadler}/> */}
      
      {/* <Product /> */}
      {/* <Route path="/" element={<Product />}></Route> */}
      
     
      {/* <Footer /> */}

      
      {/* </CartProvider> */}
      {/* </Route> */}
     {/* <Route path="product" element={<Productdetails /> }/> */}

     
       </Routes>
      </BrowserRouter> 

      {/* <CartProvider>
        <Product/>
      </CartProvider> */}
      <Footer />


      
    </>
  );
}

export default App;
