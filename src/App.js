import React from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'


import {

  Routes,
  Route,
} from "react-router-dom";



function App() {





  // }



  return (


    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />






      </Routes>
    </>

  )
}

export default App
