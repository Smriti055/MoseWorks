import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Footer from './components/Footer'
import ContactForm from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Section from './components/Section'


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/' element={<Hero/>}/>
        <Route path='/' element={<Section/>}/>
       
      </Routes>
      <Footer/>
      

      
    </div>
  )
}

export default App