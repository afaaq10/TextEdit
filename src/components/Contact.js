import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
function Contact() {
    return (
        <>
            <Navbar />
            <div class="container w-75 text-white">

                <form class="  mt-5 ">
                    <div class=" container mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input placeholder="enter your email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3 mx-2 ">
                        <label for="exampleInputPassword1" class="form-label">Details</label>
                        <input placeholder="Details/queries if any" type="text" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary mx-2">Submit</button>
                </form>


            </div>
        </>
    )
}

export default Contact
