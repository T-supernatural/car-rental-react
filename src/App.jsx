import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './page/Homepage'
import { Route, Routes } from "react-router-dom";
import Contact from './page/Contact';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
