import React from 'react'
import Navbar from './components/Navbar'
// import Dark from './components/Dark'

import { useState } from 'react'

function App() {
  const [textdark, setTextDark] = useState("Enable dark mode")

  const [dark, setDark] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const darkMode = () => {

    if (dark.color == 'black') {
      setDark({
        color: 'white',
        backgroundColor: 'black'
      }
      )
      document.body.style.backgroundColor='black'
      setTextDark("Disable dark mode")
    }
    else {
      setDark({
        color: 'black',
        backgroundColor: 'white'
      }
      )
      document.body.style.backgroundColor='white'
      setTextDark("Enable dark mode")
    }



  }



  return (

    <div style={dark}>
     
      <div class=" container form-check form-switch mx-1 mt-1 fs-4" >
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={darkMode} />
        <label class="form-check-label" for="flexSwitchCheckChecked">{textdark}</label>
      </div>
      <Navbar />



      {/* <Dark /> */}
    </div>
  )
}

export default App
