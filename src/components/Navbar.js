import React from 'react'
// import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
function Navbar(props) {

    // useEffect(() => {
    //     document.getElementById('textarea').focus();
    // }, [])

    // const [text, setText] = useState("")


    // const handleChange = (e) => {
    //     setText(e.target.value)
    // }

    // const upper = () => {
    //     setText(text.toUpperCase())
    //     props.showAlert('Converted to uppercase', 'success')
    //     setTimeout(() => {
    //         props.setAlert(null)
    //     }, 1500);
    // }
    // const copyText = () => {
    //     let ctext = document.getElementById("textarea")
    //     ctext.select();



    //     navigator.clipboard.writeText(ctext.value);
    //     props.showAlert(' Text Copied to clipboard', 'success')
    //     setTimeout(() => {
    //         props.setAlert(null)
    //     }, 1500);


    // }
    // const changeColor1 = () => {
    //     document.getElementById("textarea").style.color = "pink";

    // }
    // const changeColor2 = () => {
    //     document.getElementById("textarea").style.color = "red";

    // }
    // const changeColor3 = () => {
    //     document.getElementById("textarea").style.color = "orange";

    // }
    // const changeColor4 = () => {
    //     document.getElementById("textarea").style.color = "green";



    // }








    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">iEditor</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">

                                <Link class="nav-link link-secondary" aria-current="page" to="/">Home</Link>

                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link " aria-current="page" to="/about">About</Link>

                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link " aria-current="page" to="/contact">Contact</Link>

                            </li>



                        </ul>
                        <form class="d-flex">

                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            {/* <div className="container mx-auto ">
                <div class="form-floating mt-5">
                    <h1>Add/Edit your text here</h1>

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



            <div className="container mt-3">
                <h1>Preview</h1>

                <textarea class="form-control" onChange={handleChange} value={text} placeholder="nothing to preview" style={{ border: "none" }} ></textarea>


                <p className="fs-4">Average reading time : {0.004 * text.length} mins </p>
                <p className="fs-4"> Total characters: {text.length}</p>
                <p className="fs-4"> Total Words {text.split(" ").filter((el) => { return el != 0 }).length}</p> */}

            {/* <p  id="para"> Wordcount: {text.split(" ").length}</p>
        document */}



        </div>





    )
}

export default Navbar
