import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecondSection from './components/secondSection'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/home' element={<Hero/>}/>
        <Route path='/home' element={<SecondSection/>}/>
       
      </Routes>
      <Footer/>
      

      
    </div>
  )
}

export default App