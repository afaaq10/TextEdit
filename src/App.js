import React from 'react'
import Navbar from './components/Navbar'

import Alert from './components/Alert'
import im from './im.jpg'

import { useState } from 'react'

function App() {


  const showMe = () => {
    document.getElementById("mimage").style.display = 'block'
    setTimeout(() => {
      document.getElementById("mimage").style.display = 'none'
    }, 1500);

  }

  const [textdark, setTextDark] = useState("Enable dark mode")


  const [dark, setDark] = useState({
    color: 'black',
    backgroundColor: 'white'
  })



  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
  }





  const darkMode = () => {

    if (dark.color == 'black') {
      setDark({
        color: 'white',
        backgroundColor: 'black'
      }
      )

      document.body.style.backgroundColor = 'black'

      showAlert("dark mode enabled", 'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
      setTextDark("Disable dark mode")
    }
    else {
      setDark({
        color: 'black',
        backgroundColor: 'white'
      }
      )
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", 'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
      setTextDark("Disable dark mode")
      setTextDark("Enable dark mode")
    }



  }



  return (

    <div style={dark}>


      <div class=" container form-check form-switch mx-1 mt-1 fs-4" >
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={darkMode} />
        <label class="form-check-label" for="flexSwitchCheckChecked">{textdark}</label>

      </div>

      <Alert alert={alert} />

      <img src={im} alt="my_image" id="mimage" width="200px" height="263px" style={{ display: 'none' }} />

      <Navbar showAlert={showAlert} setAlert={setAlert} />
      <button className="btn btn-danger " onClick={showMe}>Click here see Imran Khan</button>


    </div>
  )
}

export default App
