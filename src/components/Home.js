import React from 'react'
import Navbar from './Navbar'



import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Home(props) {



    // const showMe = () => {
    //     document.getElementById("mimage").style.display = 'block'
    //     setTimeout(() => {
    //         document.getElementById("mimage").style.display = 'none'
    //     }, 1500);

    // }

    // const [textdark, setTextDark] = useState("Enable dark mode")


    // const [dark, setDark] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })



    // const [alert, setAlert] = useState(null);

    // const showAlert = (msg, type) => {
    //     setAlert({
    //         msg: msg,
    //         type: type
    //     })
    // }





    // const darkMode = () => {

    //     if (dark.color == 'black') {
    //         setDark({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         }
    //         )

    //         document.body.style.backgroundColor = 'black'

    //         showAlert("dark mode enabled", 'success')
    //         setTimeout(() => {
    //             setAlert(null)
    //         }, 1500);
    //         setTextDark("Disable dark mode")
    //     }
    //     else {
    //         setDark({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         }
    //         )
    //         document.body.style.backgroundColor = 'white'
    //         showAlert("Light mode enabled", 'success')
    //         setTimeout(() => {
    //             setAlert(null)
    //         }, 1500);
    //         setTextDark("Disable dark mode")
    //         setTextDark("Enable dark mode")
    //     }





    useEffect(() => {
        document.getElementById('textarea').focus();
    }, [])

    const [text, setText] = useState("")


    const handleChange = (e) => {
        setText(e.target.value)
    }

    const upper = () => {
        setText(text.toUpperCase())
        props.showAlert('Converted to uppercase', 'success')
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);
    }
    const copyText = () => {
        let ctext = document.getElementById("textarea")
        ctext.select();



        navigator.clipboard.writeText(ctext.value);
        props.showAlert(' Text Copied to clipboard', 'success')
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);


    }
    const changeColor1 = () => {
        document.getElementById("textarea").style.color = "pink";

    }
    const changeColor2 = () => {
        document.getElementById("textarea").style.color = "red";

    }
    const changeColor3 = () => {
        document.getElementById("textarea").style.color = "orange";

    }
    const changeColor4 = () => {
        document.getElementById("textarea").style.color = "green";



    }





    return (

        // <div style={dark}>


        //     <div class=" container form-check form-switch mx-1 mt-1 fs-4" >
        //         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={darkMode} />
        //         <label class="form-check-label" for="flexSwitchCheckChecked">{textdark}</label>

        //     </div>

        //     <Alert alert={alert} />



        //     <Navbar showAlert={showAlert} setAlert={setAlert} />
        //     <button className="btn btn-danger " onClick={showMe}>Click here see Imran Khan</button>


        // </div>

        <div>

            <Navbar />

            <div className="container mx-auto ">
                <div class="form-floating mt-5">
                    <h1 className="text-white">Add/Edit your text here</h1>

                    <textarea class="form-control" onChange={handleChange} value={text} placeholder="Leave a comment here" id="textarea" style={{ height: "100px" }} ></textarea>

                </div>



                <div class="dropdown d-flex ">
                    <div className="btn btn-primary btn-sm mt-2 mx-2" onClick={upper}>Convert to Uppercase</div>

                    <button class="btn btn-primary btn-sm dropdown-toggle mt-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Choose textcolor
                        </button>
                    <button class="btn btn-primary btn-sm mx-2 mt-2" type="button" onClick={copyText}>
                        Copy text
                        </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" onClick={changeColor1} href="#">Pink</a></li>
                        <li><a class="dropdown-item" onClick={changeColor2} href="#">Red</a></li>
                        <li><a class="dropdown-item" onClick={changeColor3} href="#">orange</a></li>
                        <li><a class="dropdown-item" onClick={changeColor4} href="#">Green</a></li>
                    </ul>
                </div>
            </div>



            <div className="container mt-3 text-white">
                <h1>Preview</h1>

                <textarea class="form-control" onChange={handleChange} value={text} placeholder="nothing to preview" style={{ border: "none" }} ></textarea>


                <p className="fs-4">Average reading time : {0.004 * text.length} mins </p>
                <p className="fs-4"> Total characters: {text.length}</p>
                <p className="fs-4"> Total Words {text.split(" ").filter((el) => { return el != 0 }).length}</p>




            </div>
        </div>

    )
}

export default Home
