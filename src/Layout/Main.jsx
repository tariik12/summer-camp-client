
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import {  BsSun ,BsBrightnessHigh } from "react-icons/bs";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    const [dark, set_dark] =useState(false)
const [toggle ,set_toggle] = useState(true)

const handleDark =() =>{
  set_dark(true)
  set_toggle(false)
}
const handleLight =() =>{
  set_dark(false)
  set_toggle(true)
}
    return (
        <div className={!dark?'bg-black':'bg-white'}>
          
          <Navbar></Navbar>
          
    
      <div className=' text-center fixed  z-10  mt-4 md:mt-6 ms-64 md:ms-[420px] '>
       {
        toggle ? < BsBrightnessHigh className='me-5  text-4xl font-bold text-white'  onClick={handleDark}/> :< BsSun className='me-5 text-4xl font-bold ' onClick={handleLight}/>
                
       }   
   
   
       
      </div>
            
            
      <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;