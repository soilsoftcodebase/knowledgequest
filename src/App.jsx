import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ChooseUs from './Components/ChooseUs'
import BackgroundImage from './Components/BackgroundImage'
import Cards from './Components/Cards'
import AppDev from './Components/AppDev'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'


import './App.css'

function App() {

  return (
    <>
    {/* <div className='w-[1280px] text-center m-auto'> */}
    <BackgroundImage/>
    <Navbar />
    <div id='hero'>
    <Hero />
    </div>
      <div id='chooseus'>
      <ChooseUs/>
      </div>
      <div id='appdevelopment'>
      <AppDev/>
      </div>
      <div id='portfolio'>
      <Portfolio/>
      </div>
      
      <Footer/>
    {/* </div> */}
      
    </>
  )
}

export default App
