import React from 'react';
import Hero from "../components/Hero"
import NewArrivals from "../components/NewArrivals";
import About from "../components/About";
import PopularBooks from "../components/PopularBooks";
import Features from "../components/Features";
import Footer from "../components/Footer";
export  const Home = () => {
  return (
    <>
    <Hero/>
    <NewArrivals/>
    <About/>
    <PopularBooks/>
    
    <Features/>
 
    <div className='max-padd-container bg-zinc-300'>
    <Footer/>

    </div>
  
    <div className='max-padd-container bg-white'>
    </div>
  
    </>
  )
}
