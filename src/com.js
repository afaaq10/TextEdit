import React from 'react'
import { FirstName } from './App.js'

function com() {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <h1>{fname}</h1>
                    )
                }}

            </FirstName.Consumer>
        </>
    )
}

export default com
